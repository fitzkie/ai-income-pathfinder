# GitHub Setup & Deployment Guide

Since git operations are managed by Replit, here's how to push your code to GitHub and deploy:

## Option 1: Using Replit's GitHub Integration (Recommended)

1. **Open the Version Control panel in Replit**
   - Look for the Git icon in the left sidebar
   - Or use Tools > Version Control

2. **Create a new GitHub repository**
   - Click "Create a Git Repository" or "Connect to GitHub"
   - Choose a repository name (e.g., `ai-income-pathfinder`)
   - Make it Public or Private
   - Replit will automatically push your code

3. **Your code is now on GitHub!**
   - Visit `https://github.com/YOUR_USERNAME/ai-income-pathfinder`

## Option 2: Download and Push Manually

If Replit's integration doesn't work:

1. **Download your project**
   - Click the three dots menu (⋮) in Replit
   - Select "Download as zip"
   - Extract the zip file on your computer

2. **Create a GitHub repository**
   - Go to [github.com/new](https://github.com/new)
   - Name: `ai-income-pathfinder`
   - Make it Public or Private
   - Don't initialize with README
   - Click "Create repository"

3. **Push code from your computer**
   ```bash
   cd path/to/extracted/folder
   git init
   git add .
   git commit -m "Initial commit - AI Income Pathfinder"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ai-income-pathfinder.git
   git push -u origin main
   ```

---

## Deploy to Railway (After GitHub Setup)

1. **Sign up for Railway**
   - Go to [railway.app](https://railway.app)
   - Click "Login with GitHub"

2. **Create new project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose `ai-income-pathfinder`

3. **Configure**
   - Railway auto-detects Node.js
   - Go to "Variables" tab
   - Add:
     ```
     SESSION_SECRET=<paste-random-string-here>
     ```
   - To generate random string, run locally:
     ```bash
     node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
     ```

4. **Deploy**
   - Railway automatically builds and deploys
   - Your app will be live at: `https://your-app.up.railway.app`

5. **Custom Domain (Optional)**
   - Settings > Domains > Add custom domain
   - Follow DNS instructions

---

## Deploy to Render (Alternative)

1. **Sign up**: [render.com](https://render.com)
2. **New Web Service** > Connect your GitHub repo
3. **Configure**:
   - Build Command: `npm install`
   - Start Command: `npm run dev`
4. **Environment Variables**:
   ```
   SESSION_SECRET=<random-string>
   ```
5. **Deploy** - Live at `https://your-app.onrender.com`

---

## Important Files Created

- ✅ `.gitignore` - Prevents sensitive files from being committed
- ✅ `.env.example` - Template for environment variables
- ✅ `railway.json` - Railway deployment config
- ✅ `Dockerfile` - Docker container config (optional)
- ✅ `DEPLOYMENT.md` - Full deployment guide

---

## Next Steps

1. ☐ Push code to GitHub (using Replit's UI or manually)
2. ☐ Sign up for Railway or Render
3. ☐ Connect your GitHub repository
4. ☐ Add `SESSION_SECRET` environment variable
5. ☐ Deploy!
6. ☐ (Optional) Add custom domain
7. ☐ (Later) Add PostgreSQL database for data persistence

---

## FAQ

**Q: Can I use SiteGround?**
A: Not recommended. SiteGround is for PHP/WordPress sites. This app needs Node.js runtime. Use Railway, Render, or a VPS instead.

**Q: Will my data persist?**
A: Currently using in-memory storage (resets on restart). Add PostgreSQL database for persistence (covered in DEPLOYMENT.md).

**Q: How much does it cost?**
- **Railway**: $5/month free credit (enough for this app)
- **Render**: Free tier available (sleeps after inactivity)
- **Both have paid plans starting ~$7-20/month for production**

**Q: What about the database?**
A: Add it later! The app works fine with in-memory storage for now. When ready, add PostgreSQL through Railway/Render dashboard (takes 2 minutes).
