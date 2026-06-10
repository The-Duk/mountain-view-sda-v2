# 🚀 Mountain View SDA Church - Setup & Installation Guide

## ❌ Error: "git is not installed"

You're using a system without Git. Here are multiple solutions:

---

## **Solution 1: Install Git (Recommended)**

### **On Termux (Android)**
```bash
pkg update
pkg install git
git clone https://github.com/The-Duk/mountain-view-sda-v2.git
cd mountain-view-sda-v2
```

### **On Linux (Ubuntu/Debian)**
```bash
sudo apt update
sudo apt install git
git clone https://github.com/The-Duk/mountain-view-sda-v2.git
cd mountain-view-sda-v2
```

### **On Mac**
```bash
# Install Homebrew first (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Git
brew install git
git clone https://github.com/The-Duk/mountain-view-sda-v2.git
cd mountain-view-sda-v2
```

### **On Windows**
1. Download Git from: https://git-scm.com/download/win
2. Run the installer
3. Open Command Prompt/PowerShell and run:
```bash
git clone https://github.com/The-Duk/mountain-view-sda-v2.git
cd mountain-view-sda-v2
```

---

## **Solution 2: Download as ZIP (No Git Required)**

### **Step 1: Download the Repository**
1. Go to: https://github.com/The-Duk/mountain-view-sda-v2
2. Click the green **"Code"** button
3. Select **"Download ZIP"**
4. Extract the ZIP file to your desired location

### **Step 2: Open Terminal in the Project Folder**
```bash
# Navigate to the extracted folder
cd /path/to/mountain-view-sda-v2
```

### **Step 3: Install Dependencies**
```bash
npm install
```

### **Step 4: Run Development Server**
```bash
npm run dev
```

### **Step 5: Open in Browser**
- Visit: **http://localhost:3000**

---

## **Solution 3: Use Online IDE (No Installation Needed)**

### **Option A: GitHub Codespaces (Free)**
1. Go to: https://github.com/The-Duk/mountain-view-sda-v2
2. Click **"Code"** button
3. Select **"Codespaces"** tab
4. Click **"Create codespace on main"**
5. Once loaded, open Terminal and run:
```bash
npm install
npm run dev
```
6. A preview URL will appear - click it to view your site live

### **Option B: Replit (Free)**
1. Go to: https://replit.com/new
2. Select **"Import from GitHub"**
3. Paste: `https://github.com/The-Duk/mountain-view-sda-v2`
4. Click **"Import"**
5. Wait for setup to complete
6. Click **"Run"** button
7. Your site will open in the preview pane

### **Option C: StackBlitz (Free)**
1. Visit: https://stackblitz.com/github/The-Duk/mountain-view-sda-v2
2. Wait for the project to load
3. It will start automatically and show a preview URL

---

## **Complete Setup Instructions (All Systems)**

### **If you have Node.js already installed:**

```bash
# Step 1: Download the ZIP file (no git needed)
# Go to https://github.com/The-Duk/mountain-view-sda-v2
# Click Code → Download ZIP
# Extract it

# Step 2: Open Terminal/Command Prompt in the folder
# Then run:

npm install
npm run dev

# Step 3: Open http://localhost:3000 in your browser
```

### **Check if you have Node.js:**
```bash
node --version
npm --version
```

If these commands don't work, install Node.js from: https://nodejs.org/

---

## **View Locally vs Live**

| Method | URL | Notes |
|--------|-----|-------|
| **Local Development** | http://localhost:3000 | Requires `npm run dev` |
| **Local Mobile Test** | http://YOUR_IP:3000 | Find IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux) |
| **Live Website** | https://mountain-view-sda-ruddy.vercel.app | Always available online |

---

## **Troubleshooting**

### **Problem: "npm: command not found"**
**Solution:** Install Node.js from https://nodejs.org/

### **Problem: "Port 3000 already in use"**
**Solution:** Run on different port:
```bash
npm run dev -- -p 3001
```
Then visit: http://localhost:3001

### **Problem: "Module not found"**
**Solution:** Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### **Problem: "Stuck on localhost"**
**Solution:** Try these steps:
1. Stop the server: `Ctrl + C`
2. Clear cache: `npm cache clean --force`
3. Restart: `npm run dev`

---

## **Need Help?**

- **GitHub Issues:** https://github.com/The-Duk/mountain-view-sda-v2/issues
- **Next.js Docs:** https://nextjs.org/docs
- **Visit Live Site:** https://mountain-view-sda-ruddy.vercel.app

