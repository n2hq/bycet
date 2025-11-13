#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🔧 Setting up Node.js 22..."
# Load nvm and use Node 22
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
nvm use 22 2>/dev/null || nvm install 22 && nvm use 22

echo "🔁 Adding remote origin..."
git remote add origin https://github.com/n2hq/veycet_test.git || git remote set-url origin https://github.com/n2hq/veycet_test.git

echo "🌿 Renaming branch to main..."
git branch -M main

echo "🧪 Switching to 'main' branch..."
git checkout main || git checkout -b main

echo "🔄 Pulling latest changes (if any)..."
git pull origin main --allow-unrelated-histories || echo "No existing history to pull"

echo "Deleting build folder..."
rm -rf build/


echo "🛠 Building TEST..."
npm run build:test

echo "📦 Staging changes..."
git add .

echo "✅ Committing changes..."
git commit -m "Test: update commit" || echo "⚠️ No changes to commit."

echo "🚀 Pushing to origin/main..."
git push -u origin main

echo "🎉 Done!"