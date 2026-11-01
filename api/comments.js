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
      message: "Vercel Postgres is not attached yet."
    });
  }

  try {
    // === GET Comments ===
    if (req.method === "GET") {
      const { blogId, type } = req.query || {};

      // Community board messages
      if (type === "community") {
        const result = await query(
          "SELECT id, name, avatar, message, TO_CHAR(created_at, 'FMDD Mon YYYY') as date FROM community_comments ORDER BY created_at DESC LIMIT 50"
        );
        return res.status(200).json(result.rows);
      }

      // Comments for a specific blog
      if (blogId) {
        const result = await query(
          "SELECT id, name, avatar, text, TO_CHAR(created_at, 'FMDD Mon YYYY') as date FROM comments WHERE blog_id = $1 ORDER BY created_at DESC",
          [parseInt(blogId, 10)]
        );
        return res.status(200).json(result.rows);
      }

      // All recent comments across all blogs
      const allComments = await query(`
        SELECT 
          c.id, c.name, c.avatar, c.text, 
          TO_CHAR(c.created_at, 'FMDD Mon YYYY') as date,
          b.id as "blogId", b.title as "blogTitle", b.category as "blogCategory"
        FROM comments c
        JOIN blogs b ON c.blog_id = b.id
        ORDER BY c.created_at DESC LIMIT 30
      `);

      return res.status(200).json(allComments.rows);
    }

    // === POST: Add comment ===
    if (req.method === "POST") {
      const { blogId, name, avatar, text, message, type } = req.body || {};

      // Community board comment
      if (type === "community" || message) {
        const commentName = name || "Community Member";
        const commentAvatar =
          avatar ||
          `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(commentName)}`;

        const result = await query(
          `INSERT INTO community_comments (name, avatar, message)
           VALUES ($1, $2, $3)
           RETURNING id, name, avatar, message, TO_CHAR(created_at, 'FMDD Mon YYYY') as date`,
          [commentName, commentAvatar, message || text]
        );

        return res.status(201).json(result.rows[0]);
      }

      // Blog comment
      if (!blogId || !text) {
        return res.status(400).json({ error: "Blog ID and comment text are required." });
      }

      const commentName = name || "Guest Reader";
      const commentAvatar =
        avatar ||
        `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(commentName)}`;

      const insertResult = await query(
        `INSERT INTO comments (blog_id, name, avatar, text)
         VALUES ($1, $2, $3, $4)
         RETURNING id, name, avatar, text, TO_CHAR(created_at, 'FMDD Mon YYYY') as date`,
        [parseInt(blogId, 10), commentName, commentAvatar, text.trim()]
      );

      return res.status(201).json(insertResult.rows[0]);
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Comments API Error:", error);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
};
