require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const allowedOrigins = ['https://www.mapassa.com', 'http://localhost:5173'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
}));
app.use(express.json());

app.post('/api/quote', async (req, res) => {
  const form = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAPASSA_EMAIL,
      pass: process.env.APP_PASSWORD, // Gmail App Password (not regular password)
    },
  });

  // Email to yourself
  const ownerMailOptions = {
    from: `"Mapassa Catering Quote Bot" <${process.env.MAPASSA_EMAIL}>`,
    to: process.env.MY_NOTIFICATION_EMAIL,
    subject: `New Quote Request from ${form.name}`,
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${form.name}</p>
      <p><strong>Email:</strong> ${form.email}</p>
      <p><strong>Phone:</strong> ${form.phone}</p>
      <p><strong>Date:</strong> ${form.date}</p>
      <p><strong>Guests:</strong> ${form.guests}</p>
      <p><strong>Event Type:</strong> ${form.eventType}</p>
      <p><strong>Venue:</strong> ${form.venue}</p>
      <p><strong>Message:</strong><br/>${form.message}</p>
    `,
  };

  // Auto-response to user
  const userMailOptions = {
    from: `"Mapassa Catering" <${process.env.MAPASSA_EMAIL}>`,
    to: form.email,
    subject: 'We Received Your Quote Request',
    html: `
      <p>Hi ${form.name},</p>
      <p>Thank you for contacting <strong>Mapassa Catering</strong>! We’ve received your request and will get back to you within 24 hours.</p>
      <p>Warm regards,<br/>Mapassa Catering Team</p>
    `,
  };


  try {
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);
    res.status(200).send({ message: 'Emails sent' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).send({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
