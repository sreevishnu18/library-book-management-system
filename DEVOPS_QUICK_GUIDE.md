# 🚀 DevOps Quick Guide - Get Started in 10 Minutes

## 📦 What is DevOps?

Think of it as a production line for software:
- **Git**: Track every change
- **GitHub**: Store code online
- **Jenkins**: Auto-build your code

---

## 1️⃣ GIT (Version Control)

### The Basics
```bash
# Start tracking your code
git init

# See what changed
git status

# Save changes
git add .
git commit -m "Added search feature"

# Create a feature branch
git checkout -b feature/search

# Go back to main
git checkout main

# Merge feature into main
git merge feature/search
```

### Real Example
```bash
# Step 1: Start new feature
git checkout -b feature/statistics

# Step 2: Add your code (e.g., statistics dashboard)

# Step 3: Save it
git add .
git commit -m "Add statistics dashboard"

# Step 4: Back to main
git checkout main

# Step 5: Merge it
git merge feature/statistics
```

---

## 2️⃣ GITHUB (Cloud Storage)

### Setting Up GitHub

#### Step 1: Create Account
- Go to [github.com](https://github.com)
- Sign up for free

#### Step 2: Create Repository
- Click "+" → "New Repository"
- Name: `library-book-management`
- Click "Create"

#### Step 3: Push Your Code
```bash
# Connect to GitHub
git remote add origin https://github.com/YOUR_USERNAME/library-book-management.git

# Push your code
git branch -M main
git push -u origin main
```

### Daily GitHub Workflow
```bash
# Make changes to your code...

# Save and push
git add .
git commit -m "Description"
git push
```

---

## 3️⃣ JENKINS (Auto-Build)

### What It Does
When you push code to GitHub, Jenkins automatically:
1. Downloads your code ✅
2. Runs `npm install` ✅
3. Runs `npm run build` ✅
4. Archives the results ✅

### Setting Up Jenkins

#### Step 1: Install Jenkins
- Download from [jenkins.io](https://jenkins.io)
- Install and open http://localhost:8080

#### Step 2: Install Plugins
Go to **Manage Jenkins** → **Manage Plugins**, install:
- ✅ NodeJS Plugin
- ✅ Pipeline Plugin
- ✅ Git Plugin

#### Step 3: Configure Node.js
1. **Manage Jenkins** → **Global Tool Configuration**
2. Click **Add NodeJS**
3. Name: `Node 18`
4. Save

#### Step 4: Create Pipeline
1. Click **New Item**
2. Name: `library-book-management`
3. Select **Pipeline**
4. Click **OK**

#### Step 5: Configure Pipeline
- **Definition**: Pipeline script from SCM
- **SCM**: Git
- **Repository URL**: `https://github.com/YOUR_USERNAME/library-book-management.git`
- **Branch**: `*/main`
- **Script Path**: `Jenkinsfile`

#### Step 6: Run Build
- Click **Build Now**
- Watch it run
- See "Build Successful" ✅

---

## 🔄 Complete Workflow Example

### Your Daily Routine

```bash
# Morning: Start new feature
git checkout -b feature/bulk-import

# Add bulk import code...
# Save your work
git add .
git commit -m "Add bulk import feature"

# Push to GitHub
git push -u origin feature/bulk-import

# ☕ Take a coffee break
# 🤖 Jenkins automatically builds your code in the background

# Afternoon: Merge to main
git checkout main
git merge feature/bulk-import
git push

# 🤖 Jenkins builds main branch automatically
```

---

## 📋 Quick Command Reference

| What You Want | Command |
|---------------|---------|
| Start Git | `git init` |
| See changes | `git status` |
| Save changes | `git add .`<br>`git commit -m "message"` |
| Create branch | `git checkout -b feature-name` |
| Switch branch | `git checkout branch-name` |
| Push to GitHub | `git push` |
| Pull from GitHub | `git pull` |

---

## 🎯 Why This Matters

### Git
✅ Never lose your work  
✅ See what changed  
✅ Try new ideas safely  

### GitHub
✅ Backup in the cloud  
✅ Share code easily  
✅ Professional portfolio  

### Jenkins
✅ Catch errors early  
✅ Save time  
✅ Always have working build  

---

## ✅ Setup Checklist

### First Time Setup
- [ ] Install Git
- [ ] Create GitHub account
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Install Jenkins
- [ ] Create Jenkins pipeline
- [ ] Run first build

### Daily Usage
- [ ] Create feature branch
- [ ] Make code changes
- [ ] Commit and push
- [ ] Let Jenkins build
- [ ] Merge when done

---

## 🚨 Troubleshooting

| Problem | Solution |
|---------|----------|
| "git: not found" | Install Git |
| "Not a repository" | Run `git init` |
| Push rejected | Run `git pull` first |
| Build fails | Check Node.js plugin |
| Can't find Jenkinsfile | Check Script Path |

---

## 📚 Learn More

- **Full Explanation**: See `DEVOPS_EXPLAINED.md`
- **Git Setup**: See `GIT_SETUP.md`
- **Jenkins Setup**: See `JENKINS_SETUP.md`

---

## 🎉 You're Ready!

1. **Git**: Track your code ✅
2. **GitHub**: Store online ✅
3. **Jenkins**: Auto-build ✅

**Follow this guide and you'll be a DevOps expert! 🚀**

