#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

APP_NAME=bycet

echo "🔧 Setting up Node.js 22..."
# Load nvm and use Node 22
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
nvm use 22 2>/dev/null || nvm install 22 && nvm use 22

echo "🔁 Setting up production remote..."
git remote add origin https://github.com/n2hq/$APP_NAME.git || git remote set-url origin https://github.com/n2hq/$APP_NAME.git

echo "🌿 Renaming branch to main..."
git branch -M main

echo "🧪 Switching to 'main' branch..."
git checkout main || git checkout -b main

echo "🔄 Pulling latest changes (if any)..."
git pull origin main --allow-unrelated-histories --no-rebase || echo "No existing history to pull"

echo "🧹 Deleting build folder..."
rm -rf build/

echo "📦 Installing dependencies..."
npm install

echo "🛠 Building PRODUCTION..."
npm run build:prod

echo "📦 Staging changes..."
git add .

echo "✅ Committing changes..."
git commit -m "Prod: $(date '+%Y-%m-%d %H:%M:%S') - Production deployment" || echo "⚠️ No changes to commit."

echo "🚀 Pushing to production repository..."
git push -u origin main

echo "🎉 Production deployment completed!"