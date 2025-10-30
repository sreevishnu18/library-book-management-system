# Jenkins CI/CD Setup Guide

This document provides step-by-step instructions for setting up Jenkins CI/CD for the Library Book Management System.

## Prerequisites

1. Jenkins installed on your server/machine
2. GitHub repository created and code pushed
3. Node.js installed on Jenkins server

## Step 1: Install Required Jenkins Plugins

Go to **Manage Jenkins** → **Manage Plugins** and install:

- ✅ **Pipeline Plugin** (usually pre-installed)
- ✅ **NodeJS Plugin**
- ✅ **Git Plugin** (usually pre-installed)
- ✅ **GitHub Plugin**
- ✅ **HTML Publisher Plugin** (optional, for test reports)

## Step 2: Configure Node.js in Jenkins

1. Go to **Manage Jenkins** → **Global Tool Configuration**
2. Scroll down to **NodeJS**
3. Click **Add NodeJS**
4. Configure:
   - **Name**: `Node 18` (or any name)
   - **Version**: Select latest LTS version
5. Click **Save**

## Step 3: Create Pipeline Job

1. Click **New Item** on Jenkins dashboard
2. Enter job name: `library-book-management`
3. Select **Pipeline**
4. Click **OK**

## Step 4: Configure Pipeline

### Option A: Pipeline Script from SCM (Recommended)

1. In the pipeline configuration:
   - **Definition**: Select **Pipeline script from SCM**
   - **SCM**: Select **Git**
   - **Repository URL**: Enter your GitHub repo URL
     ```
     https://github.com/YOUR_USERNAME/library-book-management.git
     ```
   - **Credentials**: Add your GitHub credentials if repository is private
   - **Branch**: `*/main` (or your default branch)
   - **Script Path**: `Jenkinsfile`
2. Click **Save**

### Option B: Pipeline Script (Inline)

If you prefer inline script:

1. **Definition**: Select **Pipeline script**
2. Copy contents of `Jenkinsfile` into the text area
3. Click **Save**

## Step 5: Configure GitHub Webhook (Optional but Recommended)

This enables automatic builds on every push to GitHub:

1. In GitHub repository, go to **Settings** → **Webhooks**
2. Click **Add webhook**
3. Configure:
   - **Payload URL**: `http://YOUR_JENKINS_URL/github-webhook/`
   - **Content type**: `application/json`
   - **Events**: Select **Just the push event**
4. Click **Add webhook**

## Step 6: Run Your First Build

1. Go to your pipeline job
2. Click **Build Now**
3. Monitor the build progress in **Console Output**
4. Once successful, you'll see:
   - ✅ Checkout stage - green
   - ✅ Install Dependencies stage - green
   - ✅ Build stage - green
   - ✅ Archive Build Artifacts stage - green

## Step 7: View Build Artifacts

1. Click on the successful build number
2. Click on **Build Artifacts** or **Archive**
3. Download the production-ready files from `dist/` folder

## Pipeline Stages Explained

### 1. Checkout Stage
- Pulls latest code from GitHub repository
- Uses the Jenkinsfile from the repository

### 2. Install Dependencies Stage
- Runs `npm install`
- Installs all required dependencies from package.json

### 3. Build Stage
- Runs `npm run build`
- Compiles TypeScript to JavaScript
- Bundles and optimizes React application
- Output goes to `dist/` directory

### 4. Archive Build Artifacts Stage
- Archives all files from `dist/` directory
- Makes build artifacts downloadable
- Stores build history in Jenkins

## Troubleshooting

### Build Fails at npm install
- **Solution**: Ensure Node.js plugin is configured correctly
- Go to **Manage Jenkins** → **Configure System** → **NodeJS installations**

### Build Fails at Git Checkout
- **Solution**: Check repository URL and credentials
- Ensure Git plugin is installed

### Build Fails at npm run build
- **Solution**: Check for TypeScript or build errors in Console Output
- Test build locally with `npm run build`

### No Build Artifacts
- **Solution**: Check that `dist/` folder exists after build
- Verify archiving path in Jenkinsfile is correct

## Advanced Configuration

### Adding Test Stage

If you add tests later:

```groovy
stage('Test') {
    steps {
        sh 'npm test'
    }
}
```

### Adding Linting Stage

```groovy
stage('Lint') {
    steps {
        sh 'npm run lint'
    }
}
```

### Parallel Execution

```groovy
stage('Parallel Tests') {
    parallel {
        stage('Unit Tests') {
            steps { sh 'npm run test:unit' }
        }
        stage('Integration Tests') {
            steps { sh 'npm run test:integration' }
        }
    }
}
```

## Jenkinsfile Location

The Jenkinsfile is located in the root of the repository and will be automatically detected by Jenkins.

## Build Status Badge

Add a build status badge to your README:

```markdown
![Build Status](http://YOUR_JENKINS_URL/job/library-book-management/badge/icon)
```

## Continuous Deployment (CD) - Optional

To add deployment stage:

1. Add deployment credentials to Jenkins
2. Extend the Jenkinsfile with deployment stage:

```groovy
stage('Deploy') {
    steps {
        sh 'scp -r dist/* user@server:/var/www/library-app'
    }
}
```

## Support

For issues or questions:
- Check Jenkins logs: **Manage Jenkins** → **System Log**
- Check console output of failed builds
- Review Jenkins documentation: https://jenkins.io/doc/

---

**Happy CI/CD! 🚀**

