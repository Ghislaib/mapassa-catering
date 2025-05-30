# Mapassa Catering - Quote Request Web App

A modern catering quote request platform built with React (frontend) and Node.js (backend). Customers can submit event details, receive automated email confirmations, and notify the admin for follow-up.

---

## 📁 Project Structure

```
mapassa-catering/
├── client/         # React frontend (Vite + TailwindCSS)
│   ├── public/
│   └── src/
├── server/         # Node.js backend (Express + Nodemailer)
│   ├── server.js
│   └── .env        # environment variables
├── README.md
```

---

## ⚙️ Features

- User-friendly quote request form
- Sends automated confirmation emails to users
- Sends admin email notification for each quote request
- Responsive UI with TailwindCSS
- Built with React, Node.js, and Nodemailer

---

## 🧩 Tech Stack

- **Frontend:** React, Vite, TailwindCSS
- **Backend:** Node.js, Express
- **Email Service:** Nodemailer (Gmail SMTP by default)

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/mapassa-catering.git
cd mapassa-catering
```

---

### 2. Setup Frontend (Client)

```bash
cd client
npm install
npm run dev
```

Frontend runs on: [http://localhost:5173](http://localhost:5173)

---

### 3. Setup Backend (Server)

```bash
cd ../server
npm install
```

Create a `.env` file in the `server/` directory with the following:

```env
PORT=4000
EMAIL_USER=yourbusiness@gmail.com
EMAIL_PASS=your_gmail_app_password
ADMIN_EMAIL=your_admin_email@example.com
```

Then run:

```bash
node server.js
```

Backend runs on: [http://localhost:4000](http://localhost:4000)

---

## 📬 Email Setup

To send emails with Gmail:
1. Enable 2-Step Verification on your Google account.
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords).
3. Generate an App Password for "Mail".
4. Use this app password in your `.env` file as `EMAIL_PASS`.

Alternatively, use services like SendGrid, Mailgun, or SMTP2Go by adjusting the `nodemailer.createTransport()` settings.

---

## 📦 Deployment

### Frontend

- Deploy your `/client` folder on:
  - [Vercel](https://vercel.com)
  - [Netlify](https://netlify.com)

### Backend

- Deploy your `/server` on:
  - [Render](https://render.com)
  - [Railway](https://railway.app)
  - [Fly.io](https://fly.io)

Ensure you add the same `.env` variables in your deployment environment.

---

## 🛠 Environment Tips

- Avoid committing your `.env` file to GitHub.
- Use environment variable configuration provided by your host (Render, Railway, etc.).
- If you want logging, add something like `morgan` to the backend.

---

## 📄 License

MIT License — feel free to use, modify, or share this project.

---

## 🙋‍♂️ Contact

For any business inquiries, please reach out via the form at [mapassa.com](https://mapassa.com) or email us directly at **yourbusiness@gmail.com**.