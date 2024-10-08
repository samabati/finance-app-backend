# 💰 Sam's Personal Finance App - Backend

This is the backend for Sam's Personal Finance App, a comprehensive solution for managing personal finances. It provides a robust API to support the frontend application.

## 🔗 Frontend Repository

[Check out the frontend repository here!](https://github.com/samabati/finance-app)

## 🚀 Live Demo

[Experience the full application here!](https://sams-finance-app.onrender.com/)

> **Note**: The application is hosted on Render, which may spin down the server after periods of inactivity. If it seems a bit slow at first, give it a moment to wake up!

## 🛠️ Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL

## 🌟 Key Features

- 🔐 Custom Authentication and Authorization with JWT
- 🔄 CRUD endpoints for users, budgets, transactions, and pots
- 🚦 Custom error handling with specific error classes
- 🛡️ Custom authentication middleware to protect API endpoints
- ✅ Request validation using Zod schemas
- 🗃️ PostgreSQL database for robust data storage
- 🔜 Coming Soon: Request caching with Keyv for improved performance

## 📁 Project Structure
prisma/             # Prisma ORM configuration and models
src/
├── controllers/    # Business logic for each resource
├── exceptions/     # Custom error handler classes
├── middlewares/    # Error and authentication middleware
├── routes/         # API routes using express.Router
├── schemas/        # Zod schemas for request validation
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
├── errorHandler.ts # Central error handling function
└── index.ts        # Main server file
Copy
## 🚀 Getting Started

1. Clone the repository:
git clone https://github.com/samabati/finance-app-backend
Copy
2. Install dependencies:
cd finance-app-backend
npm install
3. Set up your environment variables (see `.env.example`)

4. Set up your PostgreSQL database

5. Run Prisma migrations:
npx prisma migrate dev
6. Start the development server:
npm run dev
The server should now be running on `http://localhost:your-port-number`

## 📚 API Documentation

Coming soon

## 🧪 Running Tests

Coming soon

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

Project Link: (https://sams-finance-app.onrender.com/)

---

Made with ❤️ and ☕ by Sam
