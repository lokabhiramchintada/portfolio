#!/bin/bash

# Portfolio Build Script
echo "🚀 Building Lokabhiram's Portfolio..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if .env file exists
if [ ! -f "./server/.env" ]; then
    print_warning ".env file not found in server directory!"
    print_status "Creating .env file from template..."
    cp ./server/.env.deployement ./server/.env
    print_warning "Please update the .env file with your Gmail credentials before running the application."
fi

# Build and start services
print_status "Building Docker images..."
docker-compose build

if [ $? -eq 0 ]; then
    print_status "Build completed successfully!"
    print_status "Starting services..."
    docker-compose up -d
    
    if [ $? -eq 0 ]; then
        print_status "Services started successfully!"
        echo ""
        print_status "🌐 Frontend: http://localhost:3000"
        print_status "🔧 Backend API: http://localhost:3001"
        echo ""
        print_status "To stop services: docker-compose down"
        print_status "To view logs: docker-compose logs -f"
    else
        print_error "Failed to start services!"
        exit 1
    fi
else
    print_error "Build failed!"
    exit 1
fi
