import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'], // Vite dev server ports
  credentials: true
}));
app.use(express.json());

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abhisigningin@gmail.com',
      pass: 'vruixxbhyqfqspcl'
    }
  });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }

    const transporter = createTransporter();

    // Email to you (recipient)
    const mailToRecipient = {
      from: 'abhisigningin@gmail.com',
      to: 'lokabhiram@outlook.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007acc; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f4fd; border-left: 4px solid #007acc; border-radius: 4px;">
            <p style="margin: 0; color: #555;">
              <strong>Note:</strong> This message was sent through your portfolio contact form.
            </p>
          </div>
        </div>
      `
    };

    // Auto-reply email to sender
    const autoReply = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          
          <p style="color: #555; line-height: 1.6;">Hi ${name},</p>
          
          <p style="color: #555; line-height: 1.6;">
            Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.
          </p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007acc; margin-top: 0;">Your Message:</h3>
            <p style="color: #555; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p style="color: #555; line-height: 1.6;">
            I typically respond within 24-48 hours. If you have any urgent questions, feel free to reach out to me directly at lokabhiram@outlook.com.
          </p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #e8f4fd; border-radius: 8px;">
            <p style="margin: 0; color: #555;">
              Best regards,<br>
              <strong>Lokabhiram</strong><br>
              <a href="mailto:lokabhiram@outlook.com" style="color: #007acc;">lokabhiram@outlook.com</a>
            </p>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailToRecipient);
    await transporter.sendMail(autoReply);

    res.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send message. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
