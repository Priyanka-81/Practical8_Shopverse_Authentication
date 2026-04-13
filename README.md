# Shopverse MERN: Authentication & Testing Assignment

Shopverse is a full-stack e-commerce application developed as part of the FSD Semester 6 curriculum. This version of the project transitions from a frontend-only application to a robust MERN stack architecture featuring secure user authentication, cloud-based image management, and simulated payment processing.

---

## Features

* **JWT Authentication**: Secure Register and Login APIs using `jsonwebtoken` and `bcryptjs` for password hashing.
* **Product Management**: Full CRUD capabilities with data persisted in MongoDB.
* **Image Uploads**: Integration with **Multer** and **Cloudinary** for professional-grade product image hosting.
* **Mock Payment Gateway**: Simulated checkout API that returns success/failure responses based on transaction logic.
* **Protected Routes**: Backend middleware ensuring only authenticated users can perform sensitive actions like product uploads.
* **API Validation**: Comprehensive testing and validation performed via Postman.

---

## Project Structure

```text
Shopverse-React/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # UI Components (Auth, AddProduct, etc.)
│   │   ├── services/api.js # API service using Axios
│   │   └── App.js          # Main application logic
│   └── package.json        # Frontend dependencies
└── server/                 # Node.js & Express Backend
    ├── config/             # Database connection (MongoDB)
    ├── controllers/        # Business logic for Auth, Products, and Payments
    ├── middleware/         # JWT Auth and Multer/Cloudinary config
    ├── models/             # Mongoose Schemas (User, Product)
    └── server.js           # Entry point
```
## Tech Stack

Frontend: React, Axios, React Router

Backend: Node.js, Express.js

Database: MongoDB Atlas

Storage: Cloudinary (via Multer)

Security: JSON Web Tokens (JWT), Bcrypt.js

## Installation & Setup
1. Prerequisites
Node.js & npm installed.

MongoDB Atlas Cluster.

Cloudinary Account.

2. Environment Variables
Create a .env file in the server/ directory:

Code snippet
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  CLOUDINARY_CLOUD_NAME=your_name
  CLOUDINARY_API_KEY=your_key
  CLOUDINARY_API_SECRET=your_secret
  
3. Install Dependencies
Backend:
Bash
cd server
npm install
Frontend:

Bash
cd client
npm install
Running the Project
Start the Backend
Bash
cd server
npx nodemon server.js

Start the Frontend
Bash
cd client
npm start
Frontend: http://localhost:3000

Backend: http://localhost:5000

## Testing (Postman)
The project includes a Postman collection to validate the following endpoints:

POST /api/auth/register - Create a new user.

POST /api/auth/login - Authenticate and receive a JWT.

POST /api/products/upload - Upload a product with an image (Requires Bearer Token).

POST /api/payment/mock - Simulate a successful checkout transaction.

## Submission Details
Student Name: Priyanka

Course: BTech Computer Science & Engineering (Sem 6)

Institution: Karnavati University

Assignment: Practical: Authentication & Testing
