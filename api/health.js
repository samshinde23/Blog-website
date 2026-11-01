const { query, getPool } = require("./db");

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const pool = getPool();
  if (!pool) {
    return res.status(200).json({
      status: "running",
      database: "not_connected",
      message: "Vercel serverless function is running. Connect Vercel Postgres in your Vercel Dashboard to enable cloud storage."
    });
  }

  try {
    const test = await query("SELECT COUNT(*) FROM blogs");
    return res.status(200).json({
      status: "running",
      database: "connected",
      totalBlogs: parseInt(test.rows[0].count, 10),
      message: "Successfully connected to Vercel PostgreSQL!"
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      database: "connection_error",
      error: error.message
    });
  }
};
