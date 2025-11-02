#!/bin/bash

# SkillForge Setup Script
# This script automates the setup process for the learning platform

echo "🚀 Setting up SkillForge Interactive Learning Platform..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js found: $(node -v)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm found: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"
echo ""

# Setup environment variables
if [ ! -f .env ]; then
    echo "🔧 Setting up environment variables..."
    cp .env.example .env

    # Generate a random secret for NEXTAUTH_SECRET
    if command -v openssl &> /dev/null; then
        SECRET=$(openssl rand -base64 32)
        sed -i.bak "s/your-secret-key-here-change-in-production/$SECRET/" .env
        rm .env.bak 2>/dev/null
        echo "✅ Generated secure NEXTAUTH_SECRET"
    else
        echo "⚠️  Please manually set NEXTAUTH_SECRET in .env file"
    fi
else
    echo "✅ .env file already exists"
fi

echo ""

# Setup database
echo "🗄️  Setting up database..."
npm run db:push

if [ $? -ne 0 ]; then
    echo "❌ Failed to setup database"
    exit 1
fi

echo "✅ Database schema created"
echo ""

# Seed database
echo "🌱 Seeding database with sample courses..."
npm run db:seed

if [ $? -ne 0 ]; then
    echo "❌ Failed to seed database"
    exit 1
fi

echo "✅ Database seeded successfully"
echo ""

# Success message
echo "🎉 Setup completed successfully!"
echo ""
echo "📚 Demo Account:"
echo "   Email: demo@example.com"
echo "   Password: password123"
echo ""
echo "🚀 To start the development server, run:"
echo "   npm run dev"
echo ""
echo "🌐 Then open: http://localhost:3000"
echo ""
echo "📖 For more information, check README.md or QUICKSTART.md"
echo ""
