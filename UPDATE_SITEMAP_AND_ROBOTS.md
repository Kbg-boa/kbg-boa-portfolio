# 📝 Update Sitemap & Robots.txt Before Launch

## ⚠️ IMPORTANT - ACTION REQUIRED

Before deploying your site, you MUST update the URLs in these files:

---

## 1️⃣ Update /public/sitemap.xml

**Find and replace:** `https://your-site.vercel.app/`

**With your actual Vercel URL:** `https://YOUR-ACTUAL-SITE.vercel.app/`

**Example:**
```xml
<!-- BEFORE -->
<loc>https://your-site.vercel.app/</loc>

<!-- AFTER (example) -->
<loc>https://kbg-boa-portfolio.vercel.app/</loc>
```

**Update ALL URLs in the file** (there are 5 URLs total)

---

## 2️⃣ Update /public/robots.txt

**Find and replace:** `https://your-site.vercel.app/sitemap.xml`

**With your actual URL:** `https://YOUR-ACTUAL-SITE.vercel.app/sitemap.xml`

**Example:**
```
# BEFORE
Sitemap: https://your-site.vercel.app/sitemap.xml

# AFTER
Sitemap: https://kbg-boa-portfolio.vercel.app/sitemap.xml
```

---

## ✅ How to Get Your Vercel URL

1. Deploy to Vercel first
2. Vercel will give you a URL like:
   - `https://your-project-name.vercel.app`
   - or `https://your-project-name-username.vercel.app`

3. Copy that exact URL
4. Update sitemap.xml and robots.txt
5. Redeploy (or Git push if using GitHub)

---

## 🔍 Why This Matters

**Sitemap.xml:**
- Helps Google find all your pages
- Improves SEO ranking
- Makes your site discoverable faster

**Robots.txt:**
- Tells search engines what to crawl
- Points to your sitemap
- Controls how bots access your site

---

## 📌 Quick Checklist

- [ ] Deployed site to Vercel
- [ ] Got actual Vercel URL
- [ ] Updated ALL URLs in sitemap.xml (5 URLs)
- [ ] Updated sitemap URL in robots.txt
- [ ] Redeployed site
- [ ] Tested: Visit `YOUR-URL/sitemap.xml` (should show XML)
- [ ] Tested: Visit `YOUR-URL/robots.txt` (should show text file)

---

## 🎯 After Launch

**Submit your sitemap to Google:**

1. Go to: https://search.google.com/search-console
2. Add your property (your website URL)
3. Verify ownership
4. Submit sitemap: `https://YOUR-URL/sitemap.xml`
5. Google will start indexing your site!

**Time to appear in Google:** 1-7 days typically

---

**Don't forget this step!** It's crucial for SEO. 🚀
