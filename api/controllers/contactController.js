import nodemailer from "nodemailer";

export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content with improved styling
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "navinkumaran2004@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
                border-radius: 8px;
              }
              .header {
                background-color: #0066cc;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
                margin: -20px -20px 20px -20px;
              }
              .content {
                background-color: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #666;
              }
              .value {
                margin-top: 5px;
              }
              .message-box {
                background-color: #f5f5f5;
                padding: 15px;
                border-radius: 4px;
                margin-top: 5px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                color: #666;
                font-size: 0.9em;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin:0;">New Portfolio Contact Message</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">From:</div>
                  <div class="value">${name} (${email})</div>
                </div>
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="message-box">${message.replace(
                    /\n/g,
                    "<br>"
                  )}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from your portfolio contact form.</p>
                <p>© ${new Date().getFullYear()} Navin Kumaran</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};
