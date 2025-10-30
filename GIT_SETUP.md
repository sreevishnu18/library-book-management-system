# Git Setup Instructions

Follow these commands to set up Git and push to GitHub:

## 1. Initial Commit

```bash
git add .
git commit -m "Initial commit: Library Book Management System with CRUD, search, sort, and export features"
```

## 2. Create Feature Branch

```bash
git checkout -b feature/search-and-sort
git add .
git commit -m "Add search and sort functionality"
```

## 3. Switch to Main Branch and Merge

```bash
git checkout -b main
git merge feature/search-and-sort
```

## 4. Create Additional Branch for Export Feature

```bash
git checkout -b feature/export-csv
git add .
git commit -m "Add CSV export functionality"
git checkout main
git merge feature/export-csv
```

## 5. Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `library-book-management`
3. Copy the repository URL

## 6. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/library-book-management.git
git branch -M main
git push -u origin main
```

## 7. Push Feature Branches (Optional)

```bash
git checkout feature/search-and-sort
git push -u origin feature/search-and-sort

git checkout feature/export-csv
git push -u origin feature/export-csv

git checkout main
```

## Summary of Branches

- **main**: Main production branch
- **feature/search-and-sort**: Branch for search and sort features
- **feature/export-csv**: Branch for CSV export feature

