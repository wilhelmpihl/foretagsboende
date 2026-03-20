#!/bin/bash
echo "Installing Node.js via Homebrew..."
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
echo "Installing npm packages..."
cd "$(dirname "$0")"
npm install
echo ""
echo "Done! Start the server with: npm start"
echo "Then open http://localhost:3000"
