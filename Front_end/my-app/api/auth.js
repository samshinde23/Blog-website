const bcrypt = require("bcryptjs");
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

  const { action } = req.query || req.body || {};

  try {
    // === REGISTER ===
    if (req.method === "POST" && (action === "register" || req.url.includes("register"))) {
      const { name, email, password, avatar, bio } = req.body || {};

      if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email, and password are required." });
      }

      const trimmedEmail = email.trim().toLowerCase();

      // Check if user exists
      const existing = await query("SELECT id FROM users WHERE LOWER(email) = $1", [trimmedEmail]);
      if (existing.rows.length > 0) {
        return res.status(409).json({ error: "An account with this email already exists." });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const userAvatar =
        avatar ||
        `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(name.trim())}`;
      const userBio = bio || "New contributor on Blog Horizon.";

      const insertResult = await query(
        `INSERT INTO users (name, email, password, avatar, bio)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, name, email, avatar, bio, created_at`,
        [name.trim(), trimmedEmail, hashedPassword, userAvatar, userBio]
      );

      const user = insertResult.rows[0];
      return res.status(201).json({
        success: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          bio: user.bio,
          joinedDate: new Date(user.created_at).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric"
          })
        }
      });
    }

    // === LOGIN ===
    if (req.method === "POST" && (action === "login" || req.url.includes("login") || !action)) {
      const { email, password } = req.body || {};

      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
      }

      const trimmedEmail = email.trim().toLowerCase();
      const userResult = await query(
        "SELECT id, name, email, password, avatar, bio, created_at FROM users WHERE LOWER(email) = $1",
        [trimmedEmail]
      );

      if (userResult.rows.length === 0) {
        return res.status(401).json({ error: "Invalid email or password." });
      }

      const user = userResult.rows[0];
      let isMatch = false;

      // Check password using bcrypt or plain text match (for pre-seeded users)
      if (user.password.startsWith("$2a$") || user.password.startsWith("$2b$")) {
        isMatch = await bcrypt.compare(password, user.password);
      } else {
        isMatch = user.password === password;
      }

      if (!isMatch) {
        return res.status(401).json({ error: "Invalid email or password." });
      }

      return res.status(200).json({
        success: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          bio: user.bio,
          joinedDate: new Date(user.created_at).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric"
          })
        }
      });
    }

    // GET /api/auth?action=check - Database status check
    if (req.method === "GET") {
      const test = await query("SELECT COUNT(*) FROM users");
      return res.status(200).json({
        status: "connected",
        totalUsers: parseInt(test.rows[0].count, 10)
      });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Auth API Error:", error);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
};
