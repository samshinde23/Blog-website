# 🚀 Deploying Blog Horizon on Vercel with Vercel PostgreSQL

This guide explains how to deploy both the **Frontend** and the **Serverless Backend with PostgreSQL** on Vercel with 100% free cloud storage.

---

## 🏗️ Architecture Overview
* **Frontend:** React 19 SPA with modern editorial design, responsive category filtering, and live preview.
* **Backend:** Vercel Serverless Functions (`/api/blogs`, `/api/comments`, `/api/auth`, `/api/health`).
* **Database:** Vercel Postgres (powered by Neon).
* **Automatic Migrations & Seeding:** The backend automatically creates the `users`, `blogs`, `comments`, and `community_comments` tables and seeds the 45 initial blog stories and demo user on the very first API call!
* **Zero-Crash Fallback:** If the database is ever disconnected or in local development without `POSTGRES_URL`, the application automatically falls back to local storage so the site never breaks.

---

## 📋 Step-by-Step Deployment Instructions

### Step 1: Push Changes to GitHub
All changes have been committed and pushed to your GitHub repository `samshinde23/Blog-website`.

### Step 2: Import into Vercel
1. Log into your [Vercel Dashboard](https://vercel.com).
2. Click **Add New...** ➔ **Project**.
3. Under **Import Git Repository**, select **`Blog-website`** and click **Import**.
4. In the project configuration:
   * **Root Directory:** If prompted, click **Edit** and select `Front_end/my-app` (or leave as default `./`).
   * **Framework Preset:** `Create React App`.
5. Click **Deploy**.

---

### Step 3: Create & Connect Vercel PostgreSQL
1. Once deployed, open your project in the Vercel Dashboard.
2. Click on the **Storage** tab in the top navigation bar.
3. Click **Create Database** (or **Connect Store**) ➔ select **Postgres** (or **Postgres - Neon**).
4. Give your database a name (e.g. `blog-horizon-db`), pick the region closest to you, and click **Create**.
5. Once created, click **Connect to Project** and select your `Blog-website` project.
   * Vercel will automatically inject `POSTGRES_URL`, `DATABASE_URL`, etc., into your project's Environment Variables!
6. Click **Deployments** tab ➔ Click on the latest deployment ➔ Click **Redeploy** (so the app picks up the new database connection string).

---

### Step 4: Verify Database Connection
Visit your live Vercel URL with `/api/health`:
```
https://your-app-name.vercel.app/api/health
```
You will receive:
```json
{
  "status": "running",
  "database": "connected",
  "totalBlogs": 45,
  "message": "Successfully connected to Vercel PostgreSQL!"
}
```

That's it! Your blog is now running globally with full cloud PostgreSQL persistence!

---

## 🔑 Default Accounts & Endpoints
* **Demo Account:**
  * **Email:** `sam@horizon.blog`
  * **Password:** `password123`
  * Or click **Auto Fill** in the Sign In modal to log in with 1 click.

### API Endpoints
* `GET /api/blogs` - Fetch all stories (with comments and like counts)
* `POST /api/blogs` - Publish a new story (supports custom categories & pictures)
* `PUT /api/blogs` - Toggle like on a story
* `POST /api/comments` - Add a comment to a story or post to community wall
* `POST /api/auth` - Register or login user
* `GET /api/health` - Verify database connectivity
