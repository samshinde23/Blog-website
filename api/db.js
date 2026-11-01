const { Pool } = require("@neondatabase/serverless");
const { initialBlogs } = require("../src/data/initialBlogs");

let pool = null;

function getPool() {
  if (pool) return pool;

  const connectionString =
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.POSTGRES_URL_NON_POOLING;

  if (!connectionString) {
    return null;
  }

  pool = new Pool({ connectionString });
  return pool;
}

// Auto-initialize tables and seed data if database is empty
let initialized = false;

async function initDatabase(client) {
  if (initialized) return;

  await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      avatar TEXT,
      bio TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS blogs (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      category VARCHAR(100) NOT NULL,
      image TEXT NOT NULL,
      summary TEXT,
      content TEXT NOT NULL,
      author_name VARCHAR(255) NOT NULL,
      author_email VARCHAR(255),
      author_avatar TEXT,
      read_time VARCHAR(50) DEFAULT '4 min read',
      likes INTEGER DEFAULT 0,
      liked_by JSONB DEFAULT '[]'::jsonb,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS comments (
      id SERIAL PRIMARY KEY,
      blog_id INTEGER NOT NULL REFERENCES blogs(id) ON DELETE CASCADE,
      name VARCHAR(255) NOT NULL,
      avatar TEXT,
      text TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS community_comments (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      avatar TEXT,
      message TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Check if blogs table has data; if not, seed with initialBlogs
  const checkBlogs = await client.query("SELECT COUNT(*) FROM blogs");
  const count = parseInt(checkBlogs.rows[0].count, 10);

  if (count === 0 && Array.isArray(initialBlogs)) {
    for (const b of initialBlogs) {
      const res = await client.query(
        `INSERT INTO blogs (title, category, image, summary, content, author_name, author_email, author_avatar, read_time, likes, liked_by)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id`,
        [
          b.title,
          b.category,
          b.image,
          b.summary,
          b.content,
          b.author || "Contributor",
          b.authorEmail || "",
          b.authorAvatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(b.author || "User")}`,
          b.readTime || "4 min read",
          b.likes || 0,
          JSON.stringify(b.likedBy || [])
        ]
      );

      const insertedId = res.rows[0].id;
      if (b.comments && Array.isArray(b.comments)) {
        for (const c of b.comments) {
          await client.query(
            `INSERT INTO comments (blog_id, name, avatar, text) VALUES ($1, $2, $3, $4)`,
            [
              insertedId,
              c.name,
              c.avatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(c.name)}`,
              c.text
            ]
          );
        }
      }
    }

    // Seed default demo user
    await client.query(
      `INSERT INTO users (name, email, password, avatar, bio)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (email) DO NOTHING`,
      [
        "Samrudh Shinde",
        "sam@horizon.blog",
        "password123",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        "Passionate writer, photographer & globetrotter."
      ]
    );
  }

  initialized = true;
}

async function query(text, params) {
  const p = getPool();
  if (!p) {
    throw new Error(
      "Database not connected. Please ensure Vercel Postgres is created and attached to this project (POSTGRES_URL is missing)."
    );
  }

  const client = await p.connect();
  try {
    await initDatabase(client);
    return await client.query(text, params);
  } finally {
    client.release();
  }
}

module.exports = {
  getPool,
  query
};
