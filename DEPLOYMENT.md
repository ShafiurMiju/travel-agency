# Vercel Deployment Guide

## 🚀 Quick Deploy

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

## ⚙️ Configuration

### Environment Variables

If you need environment variables:

1. Copy `.env.example` to `.env.local` for local development
2. In Vercel Dashboard:
   - Go to your project
   - Click "Settings" → "Environment Variables"
   - Add your variables:
     - `NEXT_PUBLIC_SITE_URL` - Your production URL
     - `NEXT_PUBLIC_SITE_NAME` - Your site name
     - Add any API keys or secrets as needed

### Build Settings

Vercel automatically configures:
- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `next dev`

These are already configured in `vercel.json`.

## 🔧 Pre-Deployment Checklist

- [x] ✅ Next.js configuration optimized
- [x] ✅ Build scripts configured in package.json
- [x] ✅ .gitignore file created
- [x] ✅ vercel.json configuration added
- [x] ✅ Environment variables example provided
- [x] ✅ Security headers configured
- [x] ✅ All pages using proper metadata

## 📝 Post-Deployment Steps

1. **Custom Domain** (Optional)
   - In Vercel Dashboard: Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

2. **Analytics** (Optional)
   - Enable Vercel Analytics in project settings
   - Or add Google Analytics tracking ID to environment variables

3. **Contact Form**
   - Currently UI-only
   - Integrate with email service (e.g., SendGrid, Resend, EmailJS)
   - Add API route at `app/api/contact/route.ts`

4. **Performance Optimization**
   - Add images to `public/` folder
   - Use Next.js `<Image>` component for optimization
   - Consider adding ISR or SSG where appropriate

## 🌐 Production URL

After deployment, your site will be available at:
- `https://your-project.vercel.app`
- Custom domain (if configured)

## 🔍 Monitoring

Monitor your deployment:
- **Deployment Logs**: Check build and runtime logs in Vercel Dashboard
- **Analytics**: View traffic and performance metrics
- **Error Tracking**: Monitor function errors and 404s

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Verify all dependencies in package.json
- Test build locally: `npm run build`

### Runtime Errors
- Check Function Logs in Vercel Dashboard
- Verify environment variables are set correctly
- Check for missing files or incorrect imports

### Style Issues
- Ensure Tailwind CSS is properly configured
- Verify all CSS imports in layout.tsx
- Check for purge/content configuration in tailwind.config.ts

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
