# 🛍 PixelForge21 – Full Stack E-Commerce Platform

*PixelForge21* is a modern, full-stack e-commerce web application inspired by Amazon and Flipkart, styled with a Snapdeal-like frontend. It enables a *single-seller business model*, where the owner can upload, manage, and approve products, while customers can browse, purchase, and track orders — all in one seamless experience.

---

## ⚙ Tech Stack

- *Frontend*: React.js
- *Backend*: Python (Flask)
- *Styling*: Tailwind CSS
- *Authentication*: OTP via Mobile & Email (Planned)
- *Database*: Coming soon (MongoDB / PostgreSQL)
- *Payments*: Razorpay (or other 0% fee gateway)
- *Shipping*: Shiprocket API (Auto-order sync)
- *Deployment*: [Railway](https://railway.app) + GitHub

---

## 🚀 Key Features

### 👨‍💼 Seller (Owner) Panel
- Separate login for seller
- Upload product details (image, name, margin, selling price, description)
- Approve/Decline customer orders
- Auto-forward approved orders to Shiprocket
- View customer queries sent via AI chatbot
- Trigger and confirm refunds for declined orders

### 🛒 Customer Panel
- OTP-based registration via mobile and email (Planned)
- Add personal details: name, gender, address
- Browse and preview products
- Add to cart or buy directly
- View order history, tracking, and live offers
- Interact with AI-powered support chatbot
- Instant order confirmation and email alerts

---

## 📁 Project Folder Structure

pixelforge21/ ├── backend/ │   ├── app.py │   ├── config.py │   ├── uploads/               # For storing uploaded images │ ├── public/ │   ├── favicon.ico │   └── index.html │ ├── src/ │   ├── components/ │   │   ├── Header.jsx │   │   ├── Footer.jsx │   │   ├── Loader.jsx │   │   ├── ProfileMenu.jsx │   │   ├── SearchBar.jsx │   │   ├── Cart.jsx │   │   ├── Home.jsx │   │   ├── Login.jsx │   │   ├── Signup.jsx │   │   ├── MyOrders.jsx │   │   ├── ProductDetails.jsx │   │   ├── SellerDashboard.jsx │   │   └── Support.jsx │   ├── App.jsx │   ├── index.js │   └── index.css │ ├── package.json ├── requirements.txt ├── README.md



