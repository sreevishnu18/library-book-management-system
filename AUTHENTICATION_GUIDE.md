# 🔐 GitHub Authentication Guide

## ⚠️ Authentication Issue

The push failed because you're authenticated as **`varun-8`** but trying to push to **`sreevishnu18`**'s repository.

---

## 🔧 Solution Options

### Option 1: Use Correct GitHub Account (Recommended)

You need to authenticate with the **sreevishnu18** account. Here's how:

#### Step 1: Clear Current Credentials

**Windows Credential Manager**:
1. Press `Windows + R`
2. Type: `control keymgr.dll`
3. Click "OK"
4. Find any GitHub credentials
5. Remove them

**OR use Command Line**:
```bash
git credential-manager delete https://github.com
```

#### Step 2: Push Again

```bash
git push -u origin main
```

GitHub will prompt you for credentials:
- **Username**: `sreevishnu18`
- **Password**: Use a Personal Access Token (NOT your password)

---

### Option 2: Create Personal Access Token

1. **Go to**: https://github.com/settings/tokens
2. **Click**: "Generate new token" → "Generate new token (classic)"
3. **Name**: Library Management System
4. **Expiration**: 90 days (or your choice)
5. **Select scopes**:
   - ✅ `repo` (all repository permissions)
6. **Click**: "Generate token"
7. **Copy the token** (you won't see it again!)

#### Use Token to Push

```bash
git push -u origin main
```

When prompted:
- Username: `sreevishnu18`
- Password: **Paste your token** (not your password)

---

### Option 3: Use SSH (Alternative)

If you have SSH keys set up:

```bash
# Change to SSH URL
git remote set-url origin git@github.com:sreevishnu18/library-book-management-system.git

# Push
git push -u origin main
```

---

## 🔍 Verify Repository Access

Make sure you have push access to:
```
https://github.com/sreevishnu18/library-book-management-system
```

---

## 📋 Quick Fix Steps

```bash
# 1. Clear credentials
git credential reject https://github.com

# 2. Try pushing again
git push -u origin main

# 3. When prompted:
#    Username: sreevishnu18
#    Password: YOUR_PERSONAL_ACCESS_TOKEN
```

---

## ✅ Success Indicator

After successful authentication, you'll see:
```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
...
To https://github.com/sreevishnu18/library-book-management-system.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## 🆘 Still Having Issues?

Check:
- [ ] Correct GitHub username
- [ ] Personal Access Token created
- [ ] Repository exists on GitHub
- [ ] You have push permissions
- [ ] No 2FA authentication conflicts

---

**Your GitHub URL**: https://github.com/sreevishnu18/library-book-management-system

