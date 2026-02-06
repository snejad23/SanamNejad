# Sanam Nejad - Portfolio Website

Professional portfolio website for healthcare operator and impact-focused MBA candidate.

## Quick Start - GitHub Pages Deployment

### 1. Create Your Repository
1. Go to https://github.com/new
2. Name it: `your-username.github.io` (replace `your-username` with your actual GitHub username)
   - Example: If your username is `sanamnejad`, name it `sanamnejad.github.io`
3. Set it to **Public**
4. Click "Create repository"

### 2. Upload Your Files
1. On the repository page, click "uploading an existing file"
2. Drag and drop these files:
   - `index.html`
   - `portfolio.jsx`
3. Click "Commit changes"

### 3. Enable GitHub Pages
1. Go to your repository Settings (top menu)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select `main` and `/root`
5. Click "Save"

### 4. Wait & Visit
- Wait 1-2 minutes for deployment
- Visit: `https://your-username.github.io`
- Your site is live! 🎉

## Update Your Photo

The portfolio currently uses a placeholder image. To add your actual photo:

1. Upload your photo to an image hosting service:
   - **Imgur.com** (easiest - just drag and drop, then copy image URL)
   - **Cloudinary.com** (professional option)
   
2. Edit `portfolio.jsx`:
   - Find line 12: `const PROFILE_IMAGE = "..."`
   - Replace the URL with your hosted image URL

3. Commit the change to GitHub

## Update Contact Information

Edit `portfolio.jsx` and update:
- Line 365: Email address
- Line 374: LinkedIn URL
- Line 383: Resume URL (optional)

## Need Help?

Common issues:
- **404 Error**: Make sure repository name is exactly `username.github.io`
- **Blank page**: Check that both `index.html` and `portfolio.jsx` are uploaded
- **Photo not showing**: Upload photo to Imgur and update the `PROFILE_IMAGE` URL

## Alternative: Custom Domain

Want to use your own domain (like `sanamnejad.com`)?
1. Buy a domain from Namecheap or Google Domains
2. In GitHub repo settings → Pages → Custom domain
3. Follow GitHub's instructions to configure DNS

---

Built with React, Tailwind CSS, and deployed on GitHub Pages.
