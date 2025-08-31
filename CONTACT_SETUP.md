# Portfolio Contact Form Setup

This portfolio includes a functional contact form that sends emails using Gmail SMTP.

## Setup Instructions

### 1. Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

### 2. Gmail Configuration

1. Create a `.env` file in the `server` directory (copy from `.env.deployement`)
2. Add your Gmail credentials:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-digit-app-password
PORT=3001
```

### 3. Generate Gmail App Password

**Important:** You need to use an App Password, not your regular Gmail password.

1. Go to your Google Account settings
2. Select "Security" from the left panel
3. Under "How you sign in to Google," select "App passwords"
4. Select "Mail" and your device
5. Google will generate a 16-digit password - use this as `GMAIL_APP_PASSWORD`

**Note:** You may need to enable 2-Factor Authentication on your Google account first.

### 4. Running the Application

#### Start the backend server:
```bash
cd server
npm start
```

#### Start the frontend (from project root):
```bash
npm run dev
```

### 5. Testing

1. Open your portfolio at `http://localhost:5173`
2. Fill out the contact form
3. You should receive an email at `lokabhiram@outlook.com`
4. The sender will receive an auto-reply confirmation

## Email Features

- **Recipient Email**: You receive a formatted email with contact details and message
- **Auto-Reply**: Sender receives a professional confirmation email
- **Validation**: Form validates all required fields
- **Error Handling**: Displays appropriate error messages
- **Success Feedback**: Shows confirmation message on successful submission

## Troubleshooting

- **"Network error"**: Make sure the backend server is running on port 3001
- **"Authentication failed"**: Check your Gmail credentials and app password
- **"App password invalid"**: Generate a new app password from Google Account settings
- **CORS errors**: Make sure the frontend URL is included in the CORS configuration

## Production Deployment

For production deployment:

1. Update the API endpoint in the Contact component from `localhost:3001` to your production server URL
2. Set up environment variables on your hosting platform
3. Ensure your hosting platform supports Node.js for the backend server
