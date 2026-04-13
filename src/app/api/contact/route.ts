import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create a transporter using Gmail (defaulting to Gmail as the user has a gmail address)
    // IMPORTANT: For Gmail, use an "App Password" if 2FA is enabled.
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `🔔 New Inquiry from ${name} - Gopinath Trading`,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .email-container {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              max-width: 600px;
              margin: 0 auto;
              background-color: #f9f9f9;
              padding: 20px;
              color: #333;
            }
            .header {
              background-color: #1a4d2e;
              padding: 30px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .header h1 {
              color: #ffffff;
              margin: 0;
              font-size: 24px;
              letter-spacing: 1px;
            }
            .content {
              background-color: #ffffff;
              padding: 40px;
              border-radius: 0 0 8px 8px;
              box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            }
            .inquiry-details {
              margin-bottom: 30px;
            }
            .label {
              font-weight: bold;
              color: #1a4d2e;
              font-size: 14px;
              text-transform: uppercase;
              margin-bottom: 5px;
            }
            .value {
              font-size: 16px;
              margin-bottom: 20px;
              line-height: 1.6;
            }
            .message-box {
              background-color: #f1f8e9;
              padding: 20px;
              border-left: 4px solid #1a4d2e;
              font-style: italic;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 12px;
              color: #777;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>GOPINATH TRADING</h1>
            </div>
            <div class="content">
              <h2 style="color: #1a4d2e; margin-top: 0;">New Business Inquiry</h2>
              <p>You have received a new message from your website contact form.</p>
              
              <div class="inquiry-details">
                <div class="label">Client Name</div>
                <div class="value">${name}</div>
                
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #4caf50; text-decoration: none;">${email}</a></div>
                
                <div class="label">Message</div>
                <div class="message-box">
                  "${message}"
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" style="background-color: #1a4d2e; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reply Directly</a>
              </div>
            </div>
            <div class="footer">
              <p>This inquiry was sent from the contact form on Gopinath Trading Website.</p>
              <p>&copy; 2026 Gopinath Trading Co. | Deesa, Gujarat</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Nodemailer error:', error);
    return NextResponse.json(
      { message: 'Error sending email', error: error.message },
      { status: 500 }
    );
  }
}
