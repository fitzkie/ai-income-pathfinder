# Database Setup Guide for Railway PostgreSQL

## Overview
This project uses **Drizzle ORM** with **Railway PostgreSQL** for database persistence. Follow these steps to set up your local development environment and deploy to Railway.

---

## Part 1: Local Development Setup

### Step 1: Get Your Railway Database URL

1. Go to [Railway.app](https://railway.app)
2. Open your project
3. Click on your **PostgreSQL plugin**
4. Go to the **Connect** tab
5. Copy the **Connection String** (looks like: `postgresql://user:password@host:port/database`)

### Step 2: Create Local .env File

In your project root, create a `.env` file (DO NOT commit this to GitHub):

```bash
# Copy from your Railway PostgreSQL Connection String
DATABASE_URL=postgresql://user:password@host:port/database
```

### Step 3: Install Dependencies

```bash
npm install --legacy-peer-deps
```

### Step 4: Run Database Migrations

Initialize your database schema:

```bash
npm run db:push
```

This will:
- Create the `profiles` table (for user profiles)
- Create the `recommendations` table (for AI recommendations)
- Run all migrations in the `drizzle/` folder

> **Heads up:** The Drizzle configuration now reads table definitions from `shared/db-schema.ts` and writes SQL files to the `drizzle/` directory. Keep that folder checked into Git so Railway can apply the same migrations when it boots.

### Step 5: Seed the Opportunities Catalog

Import your private CSV into the database (upserts by slug, so rerunning is safe):

```bash
node scripts/seed-opportunities.mjs
```

### Step 6: Start Development

```bash
npm run dev
```

The app will now:
- ✅ Use Railway PostgreSQL for persistent data storage (required)
- ✅ Auto-detect `DATABASE_URL` and initialize database storage
- ✅ Run on http://localhost:3000

During startup the server automatically runs `drizzle` migrations. If `DATABASE_URL` is missing the server exits early—Postgres is required for both development and production.

---

## Part 2: Deploying to Railway

### Step 1: Push to GitHub

```bash
git add .
git commit -m "feat: add admin dashboard and postgres persistence"
git push origin main
```

### Step 2: Connect GitHub to Railway

1. Go to **Railway.app** → Your Project
2. Click **+ New** → **GitHub Repo**
3. Select your repository (`fitzkie/ai-income-pathfinder`)
4. Click **Deploy**

### Step 3: Auto-Configure Environment Variables

Railway will automatically detect your PostgreSQL plugin and set `DATABASE_URL`.

If not automatic:
1. Go to your deployment
2. Click **Variables**
3. Make sure `DATABASE_URL` is set (Railway does this by default for PostgreSQL)

### Step 4: Seed Production Data

Run the seed script against the Railway database so the live app has the full opportunity catalog (you can run this locally by configuring `DATABASE_URL` with Railway’s external connection string):

```bash
node scripts/seed-opportunities.mjs
```

### Step 5: Verify Deployment

- Go to your Railway project's **Deployments** tab
- Wait for the build to complete (green checkmark)
- Click the domain link to visit your live app
- Visit `/admin` to test the admin dashboard

---

## Understanding Your Setup

### What Changed?

1. **storage.ts** - Always uses the Postgres-backed `DatabaseStorage`
2. **db-storage.ts** - Implements CRUD operations for opportunities, profiles, and recommendations
3. **routes.ts** - Added POST/PUT/DELETE endpoints for admin operations
4. **Admin.tsx** - Admin dashboard at `/admin` route
5. **Seed script** - `node scripts/seed-opportunities.mjs` imports the private CSV into Postgres

### Data Flow

```
Admin Dashboard (/admin)
    ↓
    ↓ HTTP (POST/PUT/DELETE)
    ↓
Express Routes (/api/opportunities)
    ↓
    ↓ Drizzle ORM
    ↓
DatabaseStorage
    ↓
    ↓
Railway PostgreSQL
```

---

## Troubleshooting

### Issue: "DATABASE_URL not found"
**Solution:** Create `.env` with your Railway connection string. The server won’t start without it.

### Issue: "Migrations failed"
**Solution:** 
```bash
# Re-run migrations
npm run db:push

# Or check migrations manually in Railway dashboard
```

### Issue: "Connection timeout"
**Solution:** Railway databases can take ~30 seconds to accept connections. Wait a moment and try again.

---

## Database Schema

### profiles table
- `id` (text, primary key)
- `skills` (jsonb)
- `interests` (jsonb)
- `assets` (jsonb)
- `network` (jsonb)
- `constraints` (jsonb)
- `goals` (jsonb)
- `work_style` (jsonb)
- `market_hunches` (jsonb)
- `created_at` (timestamp)

### recommendations table
- `id` (text, primary key)
- `profile_id` (text)
- `items` (jsonb)
- `created_at` (timestamp)

### opportunities table
- `id`, `slug`, `title`, `summary`, `category`
- `skills_needed`, `assets_helpful`
- `difficulty`, `time_to_cash`, `startup_cost`, `typical_arpu`
- `demand_tags`, `example_tasks`, `example_prompts`, `scoring_factors`
- `created_at`

---

## Commands Reference

```bash
# Development
npm run dev              # Start dev server with hot reload

# Database
npm run db:push        # Run migrations against DATABASE_URL

# Production
npm run build          # Build for production
npm run start          # Start production server

# Validation
npm run check          # TypeScript type checking
```

---

## Next Steps

1. ✅ Set up `.env` with Railway `DATABASE_URL`
2. ✅ Run `npm run db:push` to initialize database
3. ✅ Run `npm run dev` to start local development
4. ✅ Test admin dashboard at http://localhost:3000/admin
5. ✅ Push to GitHub
6. ✅ Deploy to Railway
7. ✅ Verify at your Railway domain

---

## Security Notes

- **Never commit `.env` file** to GitHub
- Railway automatically encrypts environment variables
- Your PostgreSQL password is never exposed in logs
- Use `.env.example` to show what variables are needed (no secrets)

---

For more info:
- [Railway Docs](https://docs.railway.app)
- [Drizzle ORM Docs](https://orm.drizzle.team)
- [PostgreSQL Docs](https://www.postgresql.org/docs)
