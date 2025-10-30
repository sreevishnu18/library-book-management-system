# Complete Setup Guide for Library Book Management System

This guide will help you set up the entire project from scratch including React app, Git, GitHub, and Jenkins CI/CD.

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Local Development Setup](#local-development-setup)
4. [Git and GitHub Setup](#git-and-github-setup)
5. [Jenkins CI/CD Setup](#jenkins-cicd-setup)
6. [Testing the Application](#testing-the-application)
7. [Troubleshooting](#troubleshooting)

## 🎯 Project Overview

This is a **Library Book Management System** built with React, TypeScript, and Vite. It includes:

- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Search functionality
- ✅ Sort functionality
- ✅ CSV export feature
- ✅ LocalStorage persistence
- ✅ Beautiful, responsive UI
- ✅ Jenkins CI/CD pipeline

## 📦 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)
- **GitHub Account** - [Sign Up](https://github.com/)
- **Jenkins Server** (optional but recommended for CI/CD)

Verify installations:

```bash
node --version   # Should show v14 or higher
npm --version    # Should show 6 or higher
git --version    # Should show git version
```

## 🚀 Local Development Setup

### Step 1: Navigate to Project Directory

```bash
cd path/to/library-book-management
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

Open your browser and go to: **http://localhost:5173**

### Step 4: Build for Production

```bash
npm run build
```

Production files will be in the `dist/` directory.

### Step 5: Preview Production Build

```bash
npm run preview
```

## 🔄 Git and GitHub Setup

### Step 1: Initialize Git Repository

```bash
git init
```

### Step 2: Configure Git User (One-time)

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Step 3: Stage All Files

```bash
git add .
```

### Step 4: Create Initial Commit

```bash
git commit -m "Initial commit: Library Book Management System with CRUD, search, sort, and export features"
```

### Step 5: Create Feature Branches

```bash
# Create and switch to search-sort branch
git checkout -b feature/search-and-sort
git commit -m "Add search and sort functionality"
git checkout -b main
git merge feature/search-and-sort

# Create and switch to export branch
git checkout -b feature/export-csv
git commit -m "Add CSV export functionality"
git checkout main
git merge feature/export-csv
```

### Step 6: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `library-book-management`
3. **Do NOT** initialize with README, .gitignore, or license (we already have them)
4. Click **Create repository**

### Step 7: Push to GitHub

```bash
# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/library-book-management.git

# Rename branch to main if needed
git branch -M main

# Push to GitHub
git push -u origin main

# Push feature branches (optional)
git push -u origin feature/search-and-sort
git push -u origin feature/export-csv
```

### Step 8: Verify on GitHub

- Visit your repository on GitHub
- Confirm all files are present
- Check that branches are visible

## 🔧 Jenkins CI/CD Setup

### Step 1: Install Jenkins

Follow the official installation guide: [Jenkins Installation](https://jenkins.io/doc/book/installing/)

### Step 2: Install Required Plugins

In Jenkins dashboard:
1. Go to **Manage Jenkins** → **Manage Plugins**
2. Install these plugins:
   - Pipeline
   - NodeJS Plugin
   - Git Plugin
   - GitHub Plugin (optional)

### Step 3: Configure Node.js

1. Go to **Manage Jenkins** → **Global Tool Configuration**
2. Find **NodeJS**
3. Click **Add NodeJS**
4. Name: `Node 18`
5. Version: Select latest LTS
6. Save

### Step 4: Create Pipeline Job

1. Click **New Item**
2. Name: `library-book-management`
3. Select **Pipeline**
4. Click **OK**

### Step 5: Configure Pipeline

In pipeline configuration:

- **Definition**: Pipeline script from SCM
- **SCM**: Git
- **Repository URL**: `https://github.com/YOUR_USERNAME/library-book-management.git`
- **Credentials**: Add if private repo
- **Branch**: `*/main`
- **Script Path**: `Jenkinsfile`
- Click **Save**

### Step 6: Run First Build

1. Click **Build Now**
2. Watch console output
3. Wait for success ✅

### Step 7: Configure GitHub Webhook (Auto-trigger)

1. GitHub repo → **Settings** → **Webhooks**
2. **Add webhook**
3. **Payload URL**: `http://YOUR_JENKINS_URL/github-webhook/`
4. **Content type**: application/json
5. **Events**: Just the push event
6. Click **Add webhook**

Now every push to GitHub triggers Jenkins build automatically!

## 🧪 Testing the Application

### Test CRUD Operations

1. **Add Book**:
   - Fill in "Book Title"
   - Fill in "Author Name"
   - Select "Availability"
   - Click "Add Book"
   - Verify book appears in the grid

2. **Edit Book**:
   - Click "Edit" button on any book
   - Modify details
   - Click "Update Book"
   - Verify changes reflected

3. **Delete Book**:
   - Click "Delete" button
   - Confirm deletion
   - Verify book removed from list

4. **Toggle Availability**:
   - Click toggle button on a book
   - Verify status changes between Available/Issued

### Test Search Feature

1. Type in search box (e.g., "Java")
2. Verify books filter in real-time
3. Try searching by author name
4. Clear search to see all books

### Test Sort Feature

1. Open sort dropdown
2. Select "Title" - verify alphabetical order
3. Select "Author" - verify alphabetical order
4. Select "Availability" - verify Available books first

### Test Export Feature

1. Click "Export to CSV" button
2. Verify file downloads
3. Open file in Excel/Sheets
4. Verify all data present with headers

### Test Persistence

1. Add some books
2. Refresh the browser
3. Verify all data is still there (localStorage working)

## 📊 Jenkins Pipeline Success Indicators

A successful Jenkins build shows:

```
✓ Checkout stage completed
✓ Install Dependencies stage completed
✓ Build stage completed
✓ Archive Build Artifacts stage completed
✓ Build successful with artifacts archived
```

## 🔍 Troubleshooting

### npm install fails

**Problem**: Dependencies not installing

**Solution**:
```bash
# Clear cache and try again
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Application won't start

**Problem**: Development server errors

**Solution**: Check Node.js version:
```bash
node --version  # Should be v14+
```

### Build fails in Jenkins

**Problem**: Jenkins build fails

**Solution**:
1. Check Jenkins Console Output for errors
2. Verify Node.js plugin configured
3. Check npm and node paths
4. Ensure Git credentials correct

### Git push fails

**Problem**: Authentication failed

**Solution**: Use GitHub CLI or SSH:
```bash
# Option 1: Use GitHub CLI
gh auth login

# Option 2: Use SSH
# Generate SSH key and add to GitHub
```

### Search/Sort not working

**Problem**: Features not filtering/sorting

**Solution**: Check browser console for errors (F12), ensure JavaScript enabled

## 📁 Project Structure

```
library-book-management/
├── src/
│   ├── components/
│   │   ├── BookManagement.tsx      # Main CRUD component
│   │   └── BookManagement.css      # Component styles
│   ├── App.tsx                     # App entry point
│   ├── App.css                     # App styles
│   ├── main.tsx                    # React bootstrap
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── dist/                           # Production build (generated)
├── node_modules/                   # Dependencies (generated)
├── Jenkinsfile                     # CI/CD pipeline config
├── README.md                       # Project documentation
├── GIT_SETUP.md                    # Git workflow guide
├── JENKINS_SETUP.md                # Jenkins setup guide
├── SETUP_GUIDE.md                  # This file!
├── package.json                    # Dependencies & scripts
├── vite.config.js                  # Vite configuration
└── tsconfig.json                   # TypeScript config
```

## 🎉 Success Checklist

- [ ] Local development server runs successfully
- [ ] Can add, edit, delete books
- [ ] Search and sort working
- [ ] CSV export downloads correctly
- [ ] Data persists after browser refresh
- [ ] Git repository initialized
- [ ] Code pushed to GitHub
- [ ] Feature branches created and merged
- [ ] Jenkins pipeline configured
- [ ] Successful Jenkins build completed
- [ ] Build artifacts archived

## 📞 Need Help?

- Check README.md for overview
- Check JENKINS_SETUP.md for CI/CD details
- Check GIT_SETUP.md for Git workflow
- Review console logs for errors
- Check Jenkins build logs

## 🚀 Next Steps

1. Add user authentication
2. Connect to a real database (MySQL, PostgreSQL)
3. Add unit tests (Jest, React Testing Library)
4. Add API endpoints (Node.js/Express)
5. Deploy to production (Vercel, Netlify, AWS)

---

**Congratulations! Your Library Book Management System is ready! 🎊**

