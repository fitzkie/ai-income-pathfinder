# AI Income Pathfinder - Deployment Guide

This guide explains how to deploy your AI Income Pathfinder application to various hosting platforms.

## Table of Contents
1. [Deploy to Railway](#deploy-to-railway)
2. [Deploy to Render](#deploy-to-render)
3. [Deploy to Traditional Hosting (SiteGround, etc.)](#deploy-to-traditional-hosting)
4. [Environment Variables](#environment-variables)
5. [Database Setup (Optional)](#database-setup)

---

## Deploy to Railway

Railway is the easiest option for deploying this full-stack Node.js app.

### Steps:

1. **Push code to GitHub** (already connected via Replit)
   
2. **Sign up for Railway**
   - Go to [railway.app](https://railway.app)
   - Sign in with your GitHub account

3. **Create a new project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `ai-income-pathfinder` repository

4. **Configure environment variables**
   - In Railway dashboard, go to your project
   - Click "Variables" tab
   - Add the following:
     ```
     NODE_ENV=production
     SESSION_SECRET=<generate-random-string>
     ```

5. **Deploy**
   - Railway will automatically detect it's a Node.js app
   - It will run `npm install` and `npm run dev`
   - Your app will be live at `https://your-app.up.railway.app`

6. **Custom Domain (Optional)**
   - In Railway settings, click "Settings" > "Domains"
   - Add your custom domain
   - Update DNS records as shown

**Cost**: Free tier includes $5/month credit (enough for small apps)

---

## Deploy to Render

Render is another great option with a generous free tier.

### Steps:

1. **Push code to GitHub**

2. **Sign up for Render**
   - Go to [render.com](https://render.com)
   - Sign in with GitHub

3. **Create a new Web Service**
   - Click "New +" > "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: ai-income-pathfinder
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm run dev`

4. **Add environment variables**
   ```
   NODE_ENV=production
   SESSION_SECRET=<random-string>
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Render will build and deploy your app
   - Live URL: `https://ai-income-pathfinder.onrender.com`

**Cost**: Free tier available (spins down after inactivity, spins back up on requests)

---

## Deploy to Traditional Hosting (SiteGround, etc.)

Traditional shared hosting like SiteGround is **NOT recommended** for this app because:
- It requires Node.js 20+ runtime (many shared hosts don't support this)
- It uses a long-running Express server (not just static files)
- Shared hosting typically only supports PHP or static HTML/CSS/JS

### If you must use traditional hosting:

**Option A: Convert to Static Site + Serverless Functions**
- Rebuild the app as a static frontend (React only)
- Use serverless functions (Vercel, Netlify) for backend logic
- This requires significant refactoring

**Option B: Use VPS instead of shared hosting**
If your hosting provider offers VPS (Virtual Private Server):

1. **SSH into your VPS**
   ```bash
   ssh user@your-server-ip
   ```

2. **Install Node.js 20+**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone your repository**
   ```bash
   git clone https://github.com/yourusername/ai-income-pathfinder.git
   cd ai-income-pathfinder
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Set environment variables**
   ```bash
   cp .env.example .env
   nano .env  # Edit with your values
   ```

6. **Build and run**
   ```bash
   npm run dev
   ```

7. **Use PM2 to keep app running**
   ```bash
   npm install -g pm2
   pm2 start npm --name "ai-pathfinder" -- run dev
   pm2 save
   pm2 startup
   ```

8. **Configure Nginx as reverse proxy**
   - Point your domain to port 5000
   - Set up SSL with Let's Encrypt

**This is complex** - I strongly recommend Railway or Render instead.

---

## Environment Variables

Required environment variables for deployment:

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `SESSION_SECRET` | Secret for sessions | Random 32+ char string |
| `PORT` | Server port | `5000` (Railway/Render set this automatically) |

### Optional (for future features):
| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `YOUTUBE_API_KEY` | YouTube Data API v3 key |

### Generate SESSION_SECRET:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## Database Setup (Optional)

Currently, the app uses **in-memory storage** (data resets on restart).

To add persistent storage:

1. **Railway**: Add PostgreSQL database
   - In Railway dashboard, click "New" > "Database" > "PostgreSQL"
   - Railway will auto-set `DATABASE_URL` environment variable

2. **Render**: Add PostgreSQL database
   - Create new "PostgreSQL" instance
   - Copy connection string to `DATABASE_URL` variable

3. **Update code** (future task):
   - Migrate from `MemStorage` to PostgreSQL using Drizzle ORM
   - Run database migrations

---

## Recommended Deployment Path

For **AI Income Pathfinder**, I recommend:

1. ✅ **Railway** (easiest, best developer experience)
2. ✅ **Render** (good free tier, reliable)
3. ⚠️ **Vercel/Netlify** (requires refactoring to serverless)
4. ❌ **SiteGround/Shared Hosting** (not compatible without major changes)

---

## Next Steps

1. Push your code to GitHub
2. Connect Railway or Render to your GitHub repo
3. Add environment variables
4. Deploy!
5. (Optional) Add custom domain
6. (Optional) Add PostgreSQL database for persistence

Need help? Check the platform-specific docs:
- [Railway Docs](https://docs.railway.app)
- [Render Docs](https://render.com/docs)
