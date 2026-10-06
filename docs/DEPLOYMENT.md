# InfraSense AI Production Deployment Guide

This document outlines the manual, step-by-step process required to deploy the InfraSense AI platform (Working Prototype) to production using GitHub and Vercel.

**Target Environment**: Production
**Primary Domain**: `infrasenseai.online`
**Framework**: Next.js 16 (App Router)

---

## Deployment Process

### STEP 1: Create/Connect the GitHub Repository
1. Navigate to [GitHub](https://github.com/new).
2. Create a new repository named `infrasenseai` (or similar).
3. Do not initialize with a README, `.gitignore`, or license, as these are already in the project.

### STEP 2: Push the Project to GitHub
Open your terminal in the project root directory (`/Users/saqibahmadbhat/Desktop/infrasenceai website`) and run:
```bash
git init
git add .
git commit -m "Initial commit for production deployment"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### STEP 3: Open Vercel
Navigate to your [Vercel Dashboard](https://vercel.com/dashboard) and log in.

### STEP 4: Import the GitHub Repository
1. Click **Add New** > **Project**.
2. Connect your GitHub account if you haven't already.
3. Locate the `infrasenseai` repository in the list and click **Import**.

### STEP 5: Select the Project
Ensure the project name is appropriately set (e.g., `infrasenseai`).

### STEP 6: Framework Configuration
1. **Framework Preset**: Vercel should automatically detect **Next.js**.
2. **Root Directory**: Leave as default (`./`).
3. **Build Command**: Leave default (`next build`).
4. **Install Command**: Leave default (`npm install`).
5. **Environment Variables**: Add any necessary environment variables (e.g., from `.env.example`). Since the form is in demo mode and there is no active backend, no secrets are strictly required right now.

### STEP 7: Deploy
Click the **Deploy** button. Wait for the build and deployment pipeline to complete. 

### STEP 8: Add Custom Domain
1. Once deployed, click on **Continue to Dashboard**.
2. Navigate to the **Settings** tab > **Domains** in the left sidebar.
3. Enter `infrasenseai.online` and click **Add**.

### STEP 9: Add www Subdomain
If you wish to route `www` traffic to the root domain, enter `www.infrasenseai.online` and click **Add**. Vercel typically configures this to redirect to the apex domain automatically.

### STEP 10: Configure DNS
Vercel will provide specific DNS records (A record and/or CNAME).
1. Go to your domain registrar (e.g., GoDaddy, Namecheap, Route53).
2. Navigate to the DNS Management section for `infrasenseai.online`.
3. Add the exact DNS records displayed by Vercel. **Do not invent these values.**
   - Usually, this involves setting an **A Record** for `@` pointing to Vercel's IP (e.g., `76.76.21.21`).
   - And a **CNAME Record** for `www` pointing to `cname.vercel-dns.com`.

### STEP 11: SSL Provisioning
Wait for the DNS propagation and for Vercel to automatically provision the SSL/HTTPS certificate. This usually takes a few minutes.

### STEP 12: Verify Domain
Visit [https://infrasenseai.online](https://infrasenseai.online) in your browser to confirm the site is live.

### STEP 13: Verify Sitemap
Visit [https://infrasenseai.online/sitemap.xml](https://infrasenseai.online/sitemap.xml) and verify the XML structure reflects the production URLs.

### STEP 14: Verify Robots
Visit [https://infrasenseai.online/robots.txt](https://infrasenseai.online/robots.txt) and verify it points to your sitemap.

### STEP 15: Final Production Smoke Testing
Use the checklist below to verify the production instance.

---

## Production Smoke Test Checklist

- [ ] Homepage loads
- [ ] Navigation works
- [ ] Mobile navigation works
- [ ] About page works
- [ ] Solution page works
- [ ] Technology page works
- [ ] Road Intelligence page works
- [ ] Climate Impact page works
- [ ] Research page works
- [ ] Innovation page works
- [ ] Contact page works
- [ ] Privacy page works
- [ ] Terms page works
- [ ] Favicon appears
- [ ] HTTPS works
- [ ] www redirect/canonical behavior is correct
- [ ] sitemap.xml works
- [ ] robots.txt works
- [ ] no localhost references
- [ ] no console errors
- [ ] no broken images
- [ ] no horizontal overflow
- [ ] contact form does not falsely claim backend delivery
