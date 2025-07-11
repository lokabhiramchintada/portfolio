# Lokabhiram Chintada - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark/light theme toggle, animated particle background, custom cursor, and a functional contact form with email integration.

## 🌟 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive**: Optimized for all device sizes
- **Interactive Elements**: Custom cursor, particle background, and smooth scrolling
- **Contact Form**: Functional contact form with Gmail SMTP integration
- **Performance Optimized**: Built with Vite for fast development and production builds
- **TypeScript**: Full type safety throughout the application
- **Animations**: Smooth animations powered by Framer Motion

## 🛠️ Tech Stack

### Frontend
- **React 18** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful & consistent icon toolkit

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email sending library
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd portfolio
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

### 4. Environment Setup

Create a `.env` file in the `server` directory:

```bash
cd server
cp .env.deployement .env
```

Add your Gmail credentials to the `.env` file:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-digit-app-password
PORT=3001
```

### 5. Gmail App Password Setup

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Select "Security" from the left panel
3. Under "How you sign in to Google," select "App passwords"
4. Select "Mail" and your device
5. Copy the generated 16-digit password and use it as `GMAIL_APP_PASSWORD`

**Note**: You need to enable 2-Factor Authentication on your Google account first.

### 6. Run the Application

#### Option A: Run Both Services Separately

**Terminal 1 - Backend Server:**
```bash
cd server
npm start
```

**Terminal 2 - Frontend Development Server:**
```bash
npm run dev
```

#### Option B: Using Docker (See Docker section below)

### 7. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001

## 📝 Available Scripts

### Frontend Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

### Backend Scripts

```bash
cd server
npm start           # Start production server
npm run dev         # Start development server with auto-reload
```

## 🐳 Docker Setup

### Prerequisites
- Docker installed on your system
- Docker Compose (usually comes with Docker Desktop)

### Using Docker Compose

1. **Create a `.env` file in the `server` directory** (if not already done):
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-digit-app-password
PORT=3001
```

2. **Build and run with Docker Compose**:
```bash
docker-compose up --build
```

3. **Run in detached mode** (background):
```bash
docker-compose up -d --build
```

4. **Stop the services**:
```bash
docker-compose down
```

### Access the Application (Docker)
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

### Manual Docker Build

If you prefer to build and run containers manually:

**Build Frontend:**
```bash
docker build -t portfolio-frontend .
docker run -p 3000:3000 portfolio-frontend
```

**Build Backend:**
```bash
cd server
docker build -t portfolio-backend .
docker run -p 3001:3001 --env-file .env portfolio-backend
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   └── favicon.svg
├── server/                 # Backend server
│   ├── package.json
│   ├── server.js
│   └── .env               # Environment variables (create this)
├── src/
│   ├── components/        # React components
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ThemeToggle.tsx
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.tsx
│   ├── App.tsx            # Main app component
│   ├── index.css          # Global styles
│   ├── main.tsx           # App entry point
│   └── vite-env.d.ts      # Vite type definitions
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile            # Frontend Docker configuration
├── package.json          # Frontend dependencies
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md            # This file
```

## 🎨 Customization

### Colors and Themes
Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#00FFDD',    // Cyan
    hover: '#00E6C5',
  },
  secondary: {
    DEFAULT: '#FF2CDF',    // Magenta
    hover: '#E61AC7',
  },
  // ... more colors
}
```

### Content
Update your personal information in the respective component files:
- `src/components/Hero.tsx` - Introduction and main content
- `src/components/Experience.tsx` - Work experience
- `src/components/Education.tsx` - Educational background
- `src/components/Projects.tsx` - Portfolio projects
- `src/components/Skills.tsx` - Technical skills

### Email Configuration
Update the recipient email in `server/server.js`:
```javascript
to: 'your-email@gmail.com', // Change this to your email
```

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the project**:
```bash
npm run build
```

2. **Deploy the `dist` folder** to your hosting platform

3. **Update API endpoint** in `src/components/Contact.tsx`:
```typescript
const response = await fetch('https://your-backend-url.com/api/contact', {
  // ... rest of the configuration
});
```

### Backend Deployment (Railway/Heroku/DigitalOcean)

1. Deploy the `server` directory to your hosting platform
2. Set environment variables on your hosting platform
3. Update CORS configuration in `server/server.js` for your frontend URL

### Docker Deployment

Use the provided Docker setup for container-based deployment on any cloud platform that supports Docker.

## 🔧 Troubleshooting

### Common Issues

**"Network error" when submitting contact form:**
- Ensure the backend server is running on port 3001
- Check if the API endpoint URL is correct

**"Authentication failed" for emails:**
- Verify Gmail credentials in the `.env` file
- Ensure you're using an App Password, not your regular password
- Check if 2FA is enabled on your Google account

**Build errors:**
- Delete `node_modules` and `package-lock.json`, then run `npm install`
- Ensure you're using Node.js version 16 or higher

**Docker issues:**
- Ensure Docker Desktop is running
- Check if ports 3000 and 3001 are available
- Verify the `.env` file exists in the server directory

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Lokabhiram Chintada**
- Email: lokabhiram.ucen@gmail.com
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ using React, TypeScript, and modern web technologies.
