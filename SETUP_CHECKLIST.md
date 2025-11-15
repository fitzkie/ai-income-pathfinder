# Quick Setup Checklist

## 🚀 Get Your Database URL from Railway

- [ ] Log in to Railway.app
- [ ] Open your project
- [ ] Click PostgreSQL plugin
- [ ] Click "Connect" tab
- [ ] Copy the "Connection String" (starts with `postgresql://`)

## 💻 Local Development Setup

- [ ] Create `.env` file in project root
- [ ] Paste your DATABASE_URL:
  ```
  DATABASE_URL=postgresql://user:password@host:port/database
  ```
- [ ] Run: `npm install --legacy-peer-deps`
- [ ] Run: `npm run db:push` (create database tables)
- [ ] Run: `node scripts/seed-opportunities.mjs` (import the 203 side hustles into Postgres)
- [ ] Run: `npm run dev`
- [ ] Open http://localhost:3000/admin (test admin dashboard)

## 📤 Push to GitHub

- [ ] Run: `git add .`
- [ ] Run: `git commit -m "feat: add postgres persistence and admin dashboard"`
- [ ] Run: `git push origin main`

## 🚢 Deploy to Railway

- [ ] Go to Railway.app → Your Project
- [ ] Click "+ New" → "GitHub Repo"
- [ ] Select your GitHub repository
- [ ] Click "Deploy"
- [ ] Wait for green checkmark
- [ ] Click domain link to visit live app
- [ ] Test at `/admin` route
- [ ] Run: `node scripts/seed-opportunities.mjs` with your Railway `DATABASE_URL` (or via Railway Shell) to seed production data

## ✅ Verify Everything Works

- [ ] Local dev server starts without errors
- [ ] Database URL is detected (look for log: "Using PostgreSQL database storage" OR "Using in-memory storage")
- [ ] When DATABASE_URL is set you see "Running database migrations..." followed by "Database migrations completed successfully"
- [ ] Can view all 203 opportunities in admin dashboard
- [ ] Can create new opportunity
- [ ] Can edit existing opportunity
- [ ] Can delete opportunity
- [ ] Railway deployment completes successfully
- [ ] Live app responds at your domain
- [ ] Admin dashboard works on deployed version

## 📝 Database Connection String Format

Your CONNECTION_STRING should look like:
```
postgresql://user:password@host.railway.internal:5432/railway
```

NOT the old Postgres URL format. Railway gives you the correct one in the "Connection String" tab.

## 🆘 If Something Goes Wrong

**Build fails on Railway?**
- Check the build logs
- Make sure `NODE_ENV=production npm run build` works locally
- Verify all dependencies are in package.json

**Database won't connect?**
- Copy CONNECTION_STRING exactly from Railway PostgreSQL plugin
- Make sure it's in `.env` locally
- Wait 30 seconds for Railway to initialize
- Try `npm run db:push` again

**Data not saving?**
- Check `.env` has DATABASE_URL
- Run `npm run db:push` to ensure tables exist
- Check Railway PostgreSQL is running (green in dashboard)

---

## Files Changed/Added

✅ `Admin.tsx` - New admin dashboard page
✅ `App.tsx` - Added `/admin` route
✅ `routes.ts` - Added admin API endpoints (POST/PUT/DELETE)
✅ `storage.ts` - Added CRUD methods to IStorage
✅ `db-storage.ts` - Implemented admin CRUD operations
✅ `.env.example` - Template for environment variables
✅ `DATABASE_SETUP.md` - Full setup documentation

---

Ready? Follow the checklist from top to bottom! 🚀
