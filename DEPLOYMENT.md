# Deployment Guide for GitHub Pages

This guide will help you deploy your Photography Academy website to GitHub Pages.

## 🚀 Quick Deployment Steps

### Option 1: Using GitHub Actions (Recommended)

This is the automated way - once set up, it deploys automatically on every push to `main`.

#### Step 1: Add Your Gemini API Key to GitHub Secrets

1. Go to your repository on GitHub: `https://github.com/nchand02/photography`
2. Click **Settings** (top navigation)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Name: `VITE_GEMINI_API_KEY`
6. Value: Paste your actual Gemini API key
7. Click **Add secret**

#### Step 2: Enable GitHub Pages

1. In your repository, go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save the settings

#### Step 3: Deploy

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your project whenever you push to `main`
- Deploy to GitHub Pages

**Just commit and push your code:**
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Your site will be live at: `https://nchand02.github.io/photography/`

---

### Option 2: Manual Deployment Using gh-pages

If you prefer manual control over deployments:

#### Step 1: Install gh-pages

```bash
npm install -D gh-pages
```

#### Step 2: Build the Project

```bash
npm run build
```

This creates a `dist` folder with your production-ready files.

#### Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

This publishes the `dist` folder to the `gh-pages` branch.

#### Step 4: Configure GitHub Pages

1. Go to **Settings** → **Pages** in your repository
2. Under **Source**, select **Deploy from a branch**
3. Select branch: `gh-pages` and folder: `/ (root)`
4. Click **Save**

Your site will be live at: `https://nchand02.github.io/photography/`

---

## 🔧 Configuration Details

### Base Path
The `vite.config.ts` is configured with:
```typescript
base: '/photography/'
```

This ensures all assets load correctly from the `/photography/` subdirectory on GitHub Pages.

### Build Output
- Production files are built to the `dist/` directory
- Assets are optimized and code-split for performance
- Source maps are included for debugging

---

## 🌐 Accessing Your Site

Once deployed, your site will be available at:
- **Production URL**: `https://nchand02.github.io/photography/`

---

## 🔍 Troubleshooting

### Issue: 404 Not Found
**Solution**: Make sure the `base` path in `vite.config.ts` matches your repository name:
```typescript
base: '/photography/' // Must match repo name
```

### Issue: Blank Page or Assets Not Loading
**Solution**: 
1. Check that the build completed successfully: `npm run build`
2. Verify GitHub Pages is enabled in Settings
3. Clear browser cache and hard reload (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: API Key Not Working
**Solution**: 
1. Verify the secret is named exactly: `VITE_GEMINI_API_KEY`
2. Re-run the GitHub Actions workflow after adding the secret
3. For local development, ensure `.env.local` has your key

### Issue: GitHub Actions Failing
**Solution**:
1. Check the Actions tab for error messages
2. Ensure all dependencies install correctly
3. Verify the workflow file is in `.github/workflows/deploy.yml`

---

## 🔄 Updating Your Site

### Automatic Updates (GitHub Actions)
```bash
# Make your changes
git add .
git commit -m "Update content"
git push origin main
# Site will automatically redeploy
```

### Manual Updates
```bash
# Make your changes
npm run build
npm run deploy
# Site is updated
```

---

## 📊 Deployment Checklist

- [ ] Gemini API key added to GitHub Secrets
- [ ] GitHub Pages enabled in repository settings
- [ ] `.github/workflows/deploy.yml` file exists
- [ ] `base: '/photography/'` set in `vite.config.ts`
- [ ] Code pushed to `main` branch
- [ ] Build succeeds without errors
- [ ] Site accessible at `https://nchand02.github.io/photography/`
- [ ] Chatbot working (API key configured correctly)
- [ ] All images loading correctly
- [ ] Navigation working smoothly
- [ ] Mobile responsive

---

## 🎯 Performance Optimization

Your build is already optimized with:
- ✅ Code splitting (vendor, gemini chunks)
- ✅ CSS minification
- ✅ Asset optimization
- ✅ Source maps for debugging
- ✅ Gzip compression

**Build Stats:**
- Total Size: ~450 KB (gzipped: ~112 KB)
- Vendor Chunk: ~12 KB
- Gemini Chunk: ~213 KB
- Main App: ~207 KB

---

## 📝 Environment Variables

For security, never commit API keys to Git. Use environment variables:

**Local Development:**
```env
# .env.local (gitignored)
VITE_GEMINI_API_KEY=your_actual_api_key
```

**Production (GitHub Pages):**
- Set in GitHub Secrets as `VITE_GEMINI_API_KEY`
- Automatically injected during GitHub Actions build

---

## 🆘 Need Help?

If you encounter issues:
1. Check the [GitHub Actions logs](https://github.com/nchand02/photography/actions)
2. Review the [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Verify all steps in this guide are completed

---

## ✅ Your Site is Ready!

Once deployed, share your photography academy at:
**🌐 https://nchand02.github.io/photography/**
