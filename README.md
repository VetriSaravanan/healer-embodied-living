# Healer - Wellness Landing Page

A beautiful wellness and life coaching landing page built with React, Vite, Tailwind CSS, and TypeScript.

## Project Info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

---

## 🚀 Hosting on Hostinger - Step by Step Guide

### Prerequisites
- A Hostinger hosting plan (Web Hosting, Cloud Hosting, or VPS)
- Access to Hostinger's hPanel (control panel)
- Your domain connected to Hostinger

### Step 1: Build Your Project

First, build your project locally or download the build files:

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Build for production
npm run build
```

This creates a `dist` folder containing all production-ready files.

### Step 2: Access Hostinger hPanel

1. Log in to your [Hostinger account](https://www.hostinger.com/)
2. Go to **Hosting** section
3. Click **Manage** on your hosting plan
4. You'll be redirected to **hPanel**

### Step 3: Open File Manager

1. In hPanel, scroll down to the **Files** section
2. Click on **File Manager**
3. Navigate to `public_html` folder (this is your website's root directory)

### Step 4: Upload Your Build Files

**Option A: Using File Manager (Recommended for beginners)**

1. In `public_html`, delete any existing files (if this is a fresh installation)
2. Click **Upload Files** button (top-left)
3. Select all files from your local `dist` folder
4. Wait for upload to complete

**Option B: Using FTP (For larger uploads)**

1. In hPanel, go to **Files** → **FTP Accounts**
2. Note your FTP credentials or create a new FTP account
3. Use an FTP client like FileZilla:
   - Host: Your FTP host (shown in hPanel)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
4. Connect and navigate to `public_html`
5. Upload all files from your local `dist` folder

### Step 5: Configure .htaccess for React Router

Since this is a Single Page Application (SPA), you need to redirect all routes to `index.html`:

1. In `public_html`, create a new file called `.htaccess`
2. Add the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

3. Save the file

### Step 6: Enable HTTPS (Recommended)

1. In hPanel, go to **Security** → **SSL**
2. Click **Install SSL** for your domain
3. Select **Let's Encrypt** (free)
4. Click **Install**

### Step 7: Verify Your Website

1. Open your browser
2. Navigate to your domain (e.g., `https://yourdomain.com`)
3. Your Healer website should now be live!

---

## 🔧 Troubleshooting

### Blank Page or 404 Errors
- Ensure `.htaccess` file is correctly configured
- Check that all files from `dist` folder are uploaded
- Clear your browser cache

### CSS/JS Not Loading
- Verify all files were uploaded completely
- Check browser console for errors
- Ensure file paths are correct (case-sensitive on Linux servers)

### Images Not Showing
- Upload all files from `dist/assets` folder
- Check file permissions (should be 644)

### SSL Certificate Issues
- Wait 10-15 minutes after installation
- Clear browser cache and try again
- Contact Hostinger support if issues persist

---

## 📁 Project Structure

```
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # React components
│   │   ├── layout/       # Header, Footer
│   │   ├── sections/     # Page sections
│   │   └── ui/           # UI components (shadcn)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── pages/            # Page components
├── public/               # Public static files
└── dist/                 # Production build (after npm run build)
```

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🛠 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Navigation

---

## 📞 Support

For hosting-related issues, contact [Hostinger Support](https://www.hostinger.com/contact).

For project-related questions, visit [Lovable Documentation](https://docs.lovable.dev/).
