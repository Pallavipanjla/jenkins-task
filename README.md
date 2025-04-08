# Task 2: Jenkins CI/CD Pipeline

## 🚀 Objective
The goal of this task is to set up a Jenkins pipeline that automates the process of building and deploying a Node.js application using Docker.

---

## 🛠️ Tools & Technologies
- Jenkins
- Docker
- GitHub
- Ngrok (for local Jenkins-GitHub webhook integration)

---

## 📁 Project Structure
---

## 📜 Jenkinsfile Overview
The `Jenkinsfile` is written in Declarative Pipeline syntax and contains the following stages:

- Build: Installs dependencies using `npm install`
- Test: (Optional) Add your test scripts here
- Docker Build: Builds a Docker image
- Deploy: Runs the Docker container locally

---

## ⚙️ Jenkins Setup

1. Install Jenkins locally or use a cloud instance.
2. Install necessary plugins:
   - Git
   - Pipeline
   - Docker Pipeline
   - GitHub Integration

3. Create a new pipeline job (`NodeApp-CI-Pipeline`)
   - Source Code Management: Git
   - Repository URL: `https://github.com/Pallavipanjla/jenkins-task.git`
   - Branch: `main`
   - Script Path: `Jenkinsfile`

4. In Build Triggers, enable:
   - ✅ GitHub hook trigger for GITScm polling

---

## 🔗 Webhook Integration (GitHub ↔ Jenkins)

1. Start ngrok: 2. Copy the Forwarding HTTPS URL (e.g., `https://75fb-14-192-52-136.ngrok-free.app`)
3. In your GitHub repo:
- Go to Settings → Webhooks → Add Webhook
- Payload URL: `https://<ngrok-url>/github-webhook/`
- Content type: `application/json`
- Event: `Just the push event`

---

## 🧪 Testing the Pipeline

1. Make a change in the GitHub repo (e.g., edit `README.md`)
2. Push the changes
3. Jenkins will auto-trigger the pipeline
4. Check build stages in Jenkins dashboard

---

## ✅ Output
A fully functional Jenkins CI/CD pipeline that builds, tests, and deploys your app using Docker.

---
