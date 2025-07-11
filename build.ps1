# Portfolio Build Script for Windows
Write-Host "🚀 Building Lokabhiram's Portfolio..." -ForegroundColor Green

# Function to print colored output
function Write-Status {
    param($Message)
    Write-Host "[INFO] $Message" -ForegroundColor Green
}

function Write-Warning {
    param($Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param($Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

# Check if Docker is installed
try {
    docker --version | Out-Null
    Write-Status "Docker is installed"
} catch {
    Write-Error "Docker is not installed. Please install Docker Desktop first."
    exit 1
}

# Check if Docker Compose is installed
try {
    docker-compose --version | Out-Null
    Write-Status "Docker Compose is available"
} catch {
    Write-Error "Docker Compose is not available. Please install Docker Desktop with Compose."
    exit 1
}

# Check if .env file exists
if (-Not (Test-Path "./server/.env")) {
    Write-Warning ".env file not found in server directory!"
    Write-Status "Creating .env file from template..."
    Copy-Item "./server/.env.deployement" "./server/.env"
    Write-Warning "Please update the .env file with your Gmail credentials before running the application."
}

# Build and start services
Write-Status "Building Docker images..."
docker-compose build

if ($LASTEXITCODE -eq 0) {
    Write-Status "Build completed successfully!"
    Write-Status "Starting services..."
    docker-compose up -d
    
    if ($LASTEXITCODE -eq 0) {
        Write-Status "Services started successfully!"
        Write-Host ""
        Write-Status "🌐 Frontend: http://localhost:3000"
        Write-Status "🔧 Backend API: http://localhost:3001"
        Write-Host ""
        Write-Status "To stop services: docker-compose down"
        Write-Status "To view logs: docker-compose logs -f"
    } else {
        Write-Error "Failed to start services!"
        exit 1
    }
} else {
    Write-Error "Build failed!"
    exit 1
}
