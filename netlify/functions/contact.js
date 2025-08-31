const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required' })
      };
    }

    // Configure nodemailer with your Gmail SMTP credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'abhisigningin@gmail.com',
        pass: 'vruixxbhyqfqspcl'
      }
    });

    const mailOptions = {
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
          <div style="background-color: #f1f1f1; padding: 20px; border-radius: 8px;">
            <h3 style="color: #007acc; margin-top: 0;">Message:</h3>
            <p>${message}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Message sent successfully!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message', details: error.message })
    };
  }
};
