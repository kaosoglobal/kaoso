# 🚀 Deployment Guide - Kaoso Website to Vercel

## Complete Step-by-Step Instructions

### Step 1: Prepare Your GitHub Repository

```bash
# Clone the repository
git clone https://github.com/kaosoglobal/kaoso.git
cd kaoso

# Checkout the website-development branch
git checkout website-development

# Install dependencies
npm install

# Test the website locally
npm run dev
# Visit http://localhost:3000 to see it working
```

### Step 2: Create a Vercel Account & Connect GitHub

1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account
5. You'll be redirected to Vercel dashboard

### Step 3: Import Your Project to Vercel

1. On Vercel dashboard, click "New Project"
2. Find and select your "kaoso" repository
3. Click "Import"
4. **Configure project:**
   - **Project name**: kaoso-website
   - **Framework Preset**: Next.js
   - **Root Directory**: ./ (leave as is)
   - **Build Command**: `npm run build`
   - **Output Directory**: .next
5. Click "Deploy"

✅ **Your website is now live!** You'll get a URL like `https://kaoso-website.vercel.app`

### Step 4: Connect Your Custom Domain (kaoso.in)

#### 4.1 Add Domain to Vercel

1. On your Vercel project dashboard, go to **Settings** → **Domains**
2. Click **Add Domain**
3. Enter: `kaoso.in`
4. Click **Add**
5. Vercel will show you DNS configuration

#### 4.2 Update GoDaddy DNS Settings

1. Log in to your **GoDaddy account** at https://www.godaddy.com
2. Go to **My Products** → Find **kaoso.in**
3. Click **Manage DNS**

**Update Nameservers to Vercel (Recommended):**

Vercel will provide nameservers. In GoDaddy:
- Find "Nameservers" section
- Replace with Vercel's nameservers
- Save changes
- **Wait 24-48 hours for propagation**

#### 4.3 Verify Domain in Vercel

Once DNS updates, Vercel will show "✓ Valid Configuration"

### Step 5: Enable SSL/HTTPS

✅ **Vercel automatically provides free SSL certificate**

Your site is now secure at `https://kaoso.in`

### Step 6: Auto-Deployment

Every time you push to `website-development`:
- Vercel automatically deploys
- Your live site updates within seconds

```bash
git add .
git commit -m "Update website"
git push origin website-development
```

---

## 📊 Deployment Checklist

- [ ] Install Node.js (v18+)
- [ ] Clone repository
- [ ] Run `npm install`
- [ ] Test locally with `npm run dev`
- [ ] Create Vercel account
- [ ] Connect GitHub to Vercel
- [ ] Import kaoso project
- [ ] Add kaoso.in domain
- [ ] Update GoDaddy nameservers
- [ ] Wait 24-48 hours for DNS
- [ ] Test at https://kaoso.in

---

## 🎉 Your Website URLs

- **Vercel URL**: `https://kaoso-website.vercel.app`
- **Your Domain**: `https://kaoso.in`

---

*For detailed help, refer to Vercel docs: https://vercel.com/docs*
