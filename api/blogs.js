const { query, getPool } = require("./db");

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const pool = getPool();
  if (!pool) {
    return res.status(503).json({
      error: "DATABASE_NOT_CONFIGURED",
      message: "Vercel Postgres is not attached yet. Please attach Postgres in your Vercel Project Dashboard."
    });
  }

  try {
    // === GET: Fetch all blogs or single blog by ID ===
    if (req.method === "GET") {
      const { id, category, search } = req.query || {};

      let sql = `
        SELECT 
          b.id,
          b.title,
          b.category,
          b.image,
          b.summary,
          b.content,
          b.author_name AS author,
          b.author_email AS "authorEmail",
          b.author_avatar AS "authorAvatar",
          b.read_time AS "readTime",
          b.likes,
          b.liked_by AS "likedBy",
          TO_CHAR(b.created_at, 'FMDD Month YYYY') AS date,
          COALESCE(
            json_agg(
              json_build_object(
                'id', c.id,
                'name', c.name,
                'avatar', c.avatar,
                'text', c.text,
                'date', TO_CHAR(c.created_at, 'FMDD Mon YYYY')
              ) ORDER BY c.created_at DESC
            ) FILTER (WHERE c.id IS NOT NULL),
            '[]'
          ) AS comments
        FROM blogs b
        LEFT JOIN comments c ON b.id = c.blog_id
      `;

      const conditions = [];
      const params = [];

      if (id) {
        params.push(parseInt(id, 10));
        conditions.push(`b.id = $${params.length}`);
      }

      if (category && category !== "All") {
        params.push(category);
        conditions.push(`LOWER(b.category) = LOWER($${params.length})`);
      }

      if (search) {
        params.push(`%${search.toLowerCase()}%`);
        conditions.push(`(LOWER(b.title) LIKE $${params.length} OR LOWER(b.content) LIKE $${params.length} OR LOWER(b.author_name) LIKE $${params.length})`);
      }

      if (conditions.length > 0) {
        sql += ` WHERE ` + conditions.join(" AND ");
      }

      sql += ` GROUP BY b.id ORDER BY b.id DESC`;

      const result = await query(sql, params);

      if (id) {
        if (result.rows.length === 0) {
          return res.status(404).json({ error: "Blog post not found" });
        }
        return res.status(200).json(result.rows[0]);
      }

      return res.status(200).json(result.rows);
    }

    // === POST: Create a new blog post ===
    if (req.method === "POST") {
      const {
        title,
        category,
        image,
        summary,
        content,
        author,
        authorAvatar,
        authorEmail,
        readTime
      } = req.body || {};

      if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required." });
      }

      const insertResult = await query(
        `INSERT INTO blogs (title, category, image, summary, content, author_name, author_email, author_avatar, read_time, likes, liked_by)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 0, '[]'::jsonb)
         RETURNING 
           id,
           title,
           category,
           image,
           summary,
           content,
           author_name AS author,
           author_email AS "authorEmail",
           author_avatar AS "authorAvatar",
           read_time AS "readTime",
           likes,
           liked_by AS "likedBy",
           TO_CHAR(created_at, 'FMDD Month YYYY') AS date`,
        [
          title.trim(),
          category || "General",
          image || "home1.jpg",
          summary || content.slice(0, 160) + "...",
          content.trim(),
          author || "Contributor",
          authorEmail || "",
          authorAvatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(author || "User")}`,
          readTime || "4 min read"
        ]
      );

      const createdBlog = insertResult.rows[0];
      createdBlog.comments = [];
      return res.status(201).json(createdBlog);
    }

    // === PUT: Toggle Like on a blog ===
    if (req.method === "PUT") {
      const { id, userIdentifier } = req.body || req.query || {};
      if (!id) {
        return res.status(400).json({ error: "Blog ID is required." });
      }

      const blogRes = await query("SELECT id, likes, liked_by FROM blogs WHERE id = $1", [
        parseInt(id, 10)
      ]);
      if (blogRes.rows.length === 0) {
        return res.status(404).json({ error: "Blog not found" });
      }

      const blog = blogRes.rows[0];
      let likedBy = blog.liked_by || [];
      if (!Array.isArray(likedBy)) likedBy = [];

      let newLikes = blog.likes || 0;
      const user = userIdentifier || "guest";

      if (user !== "guest" && likedBy.includes(user)) {
        // Unlike
        likedBy = likedBy.filter((u) => u !== user);
        newLikes = Math.max(0, newLikes - 1);
      } else {
        // Like
        if (user !== "guest") likedBy.push(user);
        newLikes += 1;
      }

      await query(
        "UPDATE blogs SET likes = $1, liked_by = $2 WHERE id = $3",
        [newLikes, JSON.stringify(likedBy), parseInt(id, 10)]
      );

      return res.status(200).json({ likes: newLikes, likedBy });
    }

    // === DELETE: Delete blog post ===
    if (req.method === "DELETE") {
      const { id } = req.query || req.body || {};
      if (!id) {
        return res.status(400).json({ error: "Blog ID is required." });
      }

      await query("DELETE FROM blogs WHERE id = $1", [parseInt(id, 10)]);
      return res.status(200).json({ success: true, message: "Blog deleted successfully." });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Blogs API Error:", error);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
};
