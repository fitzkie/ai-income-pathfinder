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

### Step 5: Start Development

```bash
npm run dev
```

The app will now:
- ✅ Use Railway PostgreSQL for persistent data storage
- ✅ Auto-detect `DATABASE_URL` and initialize database storage
- ✅ Run on http://localhost:3000

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

### Step 4: Verify Deployment

- Go to your Railway project's **Deployments** tab
- Wait for the build to complete (green checkmark)
- Click the domain link to visit your live app
- Visit `/admin` to test the admin dashboard

---

## Understanding Your Setup

### What Changed?

1. **storage.ts** - Now auto-detects `DATABASE_URL` and uses `DatabaseStorage` instead of `MemStorage`
2. **db-storage.ts** - Implements CRUD operations for opportunities
3. **routes.ts** - Added POST/PUT/DELETE endpoints for admin operations
4. **Admin.tsx** - New admin dashboard at `/admin` route
5. **.env.example** - Template for environment variables

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
DatabaseStorage OR MemStorage
    ↓
    ↓
Railway PostgreSQL (or in-memory)
```

### How It Selects Storage

```typescript
// In storage.ts:
if (process.env.DATABASE_URL) {
  // Use DatabaseStorage (PostgreSQL)
} else {
  // Use MemStorage (in-memory, data lost on restart)
}
```

---

## Troubleshooting

### Issue: "DATABASE_URL not found"
**Solution:** Make sure `.env` file is created with your Railway connection string

### Issue: "Migrations failed"
**Solution:** 
```bash
# Re-run migrations
npm run db:push

# Or check migrations manually in Railway dashboard
```

### Issue: "Data not persisting after restart"
**Solution:** Make sure `DATABASE_URL` is set. Without it, the app uses in-memory storage.

### Issue: "Connection timeout"
**Solution:** Railway databases can take 30 seconds to connect. Wait a moment and try again.

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

### In-Memory: opportunities
- Stored in code (`server/opportunities.ts`)
- Can be edited via admin dashboard
- Cached in memory for performance

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
