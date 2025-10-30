# ⚡ Quick Start Guide

Get the Library Book Management System up and running in minutes!

## 🚀 Start the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

## 🔧 Build for Production

```bash
npm run build
```

## 📤 Push to GitHub (First Time)

```bash
# Initialize Git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Library Book Management System"

# Create GitHub repo, then:
git remote add origin https://github.com/YOUR_USERNAME/library-book-management.git
git branch -M main
git push -u origin main
```

## 🔄 Create Feature Branches & Merge

```bash
# Create feature branch
git checkout -b feature/search-sort
git add .
git commit -m "Add search and sort functionality"
git push -u origin feature/search-sort

# Merge to main
git checkout -b main
git merge feature/search-sort
git push origin main
```

## 🏗️ Run Jenkins Build

1. Go to Jenkins dashboard
2. Click on `library-book-management` job
3. Click **Build Now**
4. Watch console output for success ✅

## 📋 What to Test

1. ✅ **Add Book**: Fill form and click "Add Book"
2. ✅ **Edit Book**: Click "Edit", modify, click "Update"
3. ✅ **Delete Book**: Click "Delete" and confirm
4. ✅ **Toggle Status**: Click availability toggle button
5. ✅ **Search**: Type in search box
6. ✅ **Sort**: Use dropdown to change sort order
7. ✅ **Export**: Click "Export to CSV"
8. ✅ **Persistence**: Refresh browser - data should remain

## 📚 Full Documentation

- **README.md**: Project overview
- **SETUP_GUIDE.md**: Complete setup instructions
- **GIT_SETUP.md**: Git workflow details
- **JENKINS_SETUP.md**: Jenkins configuration
- **PROJECT_SUMMARY.md**: Comprehensive summary

## 🆘 Quick Troubleshooting

**Issue**: npm install fails  
**Fix**: `npm cache clean --force && npm install`

**Issue**: App won't start  
**Fix**: Check Node.js version (`node --version` should be 14+)

**Issue**: Git push rejected  
**Fix**: `git pull origin main --rebase` first

**Issue**: Jenkins build fails  
**Fix**: Check Node.js plugin in Jenkins Global Tool Configuration

---

**That's it! You're ready to go! 🎉**

