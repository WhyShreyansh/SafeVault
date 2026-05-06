<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# SafeVault

This project is a full-stack web application for secure file storage and management.

It allows users to register, log in, upload files, download them, and manage file data using a cloud database.

## Features

- User authentication using JWT
- File upload and download
- File delete and restore functionality
- File version handling
- Dashboard with file statistics
- MongoDB Atlas integration for data storage

## Tech Stack

- Frontend: React (Vite)
- Backend: Node.js, Express
- Database: MongoDB Atlas
- Authentication: JWT

## Run Locally

**Prerequisites:** Node.js

### Backend Setup

1. Navigate to backend:
   `cd backend`

2. Install dependencies:
   `npm install`

3. Create a `.env` file and add:
   `MONGO_URI=your_mongodb_connection_string`
   `JWT_SECRET=your_secret_key`

4. Run backend:
   `node server.js`

---

### Frontend Setup

1. Navigate to frontend:
   `cd frontend`

2. Install dependencies:
   `npm install`

3. Run frontend:
   `npm run dev`

---

## Run Application

- Backend runs on: http://localhost:5000  
- Frontend runs on: http://localhost:5173  