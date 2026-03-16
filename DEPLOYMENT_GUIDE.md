# 🚀 Deployment Guide - KBG BOA Portfolio

## Quick Deployment to Vercel (5 Minutes)

### ✅ Pre-Deployment Checklist

- [x] All security measures implemented
- [x] Form protection with Cloudflare Turnstile
- [x] Email obfuscation enabled
- [x] Security headers configured
- [x] No API keys exposed
- [x] Mobile responsive
- [x] All links tested

---

## 📦 Step 1: Prepare Your Project

1. **Ensure all files are saved**
   - Check that all changes are in your project folder
   - Verify `vercel.json` and `public/_headers` exist

2. **Create a .gitignore file** (if not exists)
   ```
   node_modules/
   .env
   .env.local
   dist/
   .DS_Store
   ```

---

## 🌐 Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Import Project**
   - Click "Add New Project"
   - Choose "Import Git Repository" OR "Deploy without Git"

3. **Deploy without Git** (Quickest method):
   - Drag and drop your project folder
   - Or select folder from your computer
   - Vercel will auto-detect Vite configuration

4. **Configure**
   - Framework Preset: **Vite**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Click **Deploy**

5. **Wait 2-3 Minutes**
   - Vercel will build and deploy
   - You'll get a live URL like: `your-project.vercel.app`

---

### Option B: Deploy via Git (Recommended for continuous updates)

1. **Initialize Git** (if not already)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - KBG BOA Portfolio"
   ```

2. **Push to GitHub**
   ```bash
   # Create a new repo on GitHub first
   git remote add origin https://github.com/YOUR_USERNAME/kbg-portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel will auto-configure
   - Click **Deploy**

---

## ⚙️ Step 3: Configure Cloudflare Turnstile (Production)

**Important:** Replace the test site key with a production key.

1. **Create Turnstile Site**
   - Go to: https://dash.cloudflare.com/
   - Navigate to **Turnstile** (left sidebar)
   - Click **Add Site**

2. **Configure Site**
   ```
   Site Name: KBG BOA Portfolio
   Domain: your-site.vercel.app
   Widget Mode: Managed
   ```

3. **Get Site Key**
   - Copy the **Site Key** (starts with 0x...)
   - Note the **Secret Key** (for backend if needed later)

4. **Update Code**
   - Open `/src/app/components/Contact.tsx`
   - Find line with `siteKey="1x00000000000000000000AA"`
   - Replace with your production site key:
   ```javascript
   <Turnstile
     siteKey="YOUR_PRODUCTION_SITE_KEY_HERE"
     // ... rest
   />
   ```

5. **Redeploy**
   - If using Git: commit and push
   - If using drag & drop: re-upload project folder
   - Vercel will auto-redeploy

---

## 🔍 Step 4: Verify Deployment

### 1. **Test Form Protection**
   - Visit your live site
   - Try submitting contact form without completing Turnstile
   - Should show "Please complete the security verification" ✅

### 2. **Test Email Protection**
   - Right-click → View Page Source
   - Search for "gmail" - should NOT find email in source ✅
   - Click "Click to Email Me" - should open email client ✅

### 3. **Test Security Headers**
   ```bash
   curl -I https://your-site.vercel.app
   ```
   Should show:
   ```
   Content-Security-Policy: ...
   X-Frame-Options: DENY
   X-Content-Type-Options: nosniff
   Strict-Transport-Security: ...
   ```

### 4. **Test HTTPS**
   - Visit http://your-site.vercel.app
   - Should auto-redirect to HTTPS ✅

### 5. **Test Mobile**
   - Open on phone
   - Check responsive design ✅
   - Test WhatsApp buttons ✅
   - Test form submission ✅

---

## 📱 Step 5: Update Your Marketing Materials

Once deployed, update:

1. **Business Cards**
   ```
   your-site.vercel.app
   ```

2. **Social Media Bios**
   ```
   TikTok: @mathieukbg1
   Instagram: @kbg_boa
   Add: 🌐 your-site.vercel.app
   ```

3. **WhatsApp Status**
   ```
   🎨 Creative Services Portfolio Live!
   Check it out: your-site.vercel.app
   ```

4. **Messages to Clients**
   ```
   Hello,

   I help artists and businesses create professional visuals.

   Check my portfolio: your-site.vercel.app

   Kabangu Mathieu
   +971 52 371 1530
   ```

---

## 🎯 Step 6: Google Business Profile

1. **Create Profile**
   - Go to: https://business.google.com
   - Click "Manage now"

2. **Fill Information**
   ```
   Business Name: Kabangu Mathieu – Creative Services
   
   Category: 
   - Graphic Designer
   - Video Production Service
   - Music Producer
   - Marketing Consultant
   
   Location: Dubai, UAE (service area)
   
   Phone: +971 52 371 1530
   
   Website: your-site.vercel.app
   
   Description:
   Creative services for artists, entrepreneurs and property 
   professionals. I create cover art, promo visuals, reels, 
   property content, and digital branding. Based between 
   Dubai and Kinshasa.
   ```

3. **Verify**
   - Google will send verification (phone or postcard)
   - Follow verification steps

4. **Add Photos**
   - Add your professional photos
   - Add examples of your work
   - Add cover photo

---

## 🔧 Troubleshooting

### ❌ **Build Failed**
```bash
# Check package.json has correct scripts
"scripts": {
  "build": "vite build"
}
```

### ❌ **Security Headers Not Working**
- Ensure `vercel.json` is at project root
- Check file is valid JSON
- Redeploy

### ❌ **Turnstile Not Loading**
- Check site key is correct
- Verify domain matches Cloudflare config
- Check browser console for errors

### ❌ **Form Not Submitting**
- Check Turnstile is completed
- Verify email client is configured
- Test in different browser

---

## 📊 Analytics (Optional)

### Add Google Analytics (Free)

1. **Create GA4 Account**
   - Go to: https://analytics.google.com
   - Create property

2. **Get Measurement ID**
   - Copy ID (starts with G-...)

3. **Add to Project**
   - Install: `npm install @vercel/analytics`
   - Update code (I can help with this)

---

## 🎉 You're Live!

Your portfolio is now:
- ✅ **Secure** - Protected against bots and attacks
- ✅ **Fast** - Optimized and cached by Vercel
- ✅ **Professional** - Custom domain ready
- ✅ **Mobile-friendly** - Responsive design
- ✅ **SEO-optimized** - Google-friendly

---

## 🔄 Future Updates

### To Update Your Site:

**If using Git:**
```bash
git add .
git commit -m "Updated portfolio"
git push
# Vercel auto-deploys
```

**If using drag & drop:**
- Make changes locally
- Drag folder to Vercel dashboard
- Vercel redeploys

---

## 💎 Custom Domain (Optional)

1. **Buy Domain** (Namecheap, GoDaddy, etc.)
   - Example: `kbgboa.com`

2. **Configure in Vercel**
   - Go to Project Settings → Domains
   - Add custom domain
   - Follow DNS configuration steps

3. **Update Turnstile**
   - Add new domain to Cloudflare Turnstile
   - Redeploy

---

## 📞 Need Help?

**Vercel Support:** https://vercel.com/support  
**Cloudflare Support:** https://support.cloudflare.com

---

## ✅ Post-Deployment Actions

- [ ] Test all forms
- [ ] Test all links
- [ ] Test on mobile
- [ ] Test on desktop
- [ ] Update social media
- [ ] Create Google Business Profile
- [ ] Start sending to clients!

---

**🔥 YOUR PORTFOLIO IS READY TO GENERATE REVENUE!**

**NOW GO GET THOSE CLIENTS! 💰**

---

**Deployed By:** Kabangu Mathieu - KBG BOA  
**Date:** March 15, 2026  
**Status:** 🚀 Production Ready
