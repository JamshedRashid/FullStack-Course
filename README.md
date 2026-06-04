# MERN Course Tracker

Name: Jamshed Rashid

## Project Description

MERN Course Tracker is a full-stack web application created for the Software Development Skills Full Stack course.

The purpose of this project is to track learning progress in the course. A user can add course topics, write what they learned, set a learning status, choose a date, edit the item, and delete it.

This project demonstrates the use of the MERN stack:

- MongoDB for storing course items
- ExpressJS for creating backend API routes
- React for building the frontend user interface
- NodeJS for running the backend server

## Features

- Add course learning items
- View all saved course items
- Edit course items
- Delete course items
- Store data permanently in MongoDB
- Connect React frontend with Express backend

## Technologies Used

- NodeJS
- ExpressJS
- MongoDB
- Mongoose
- React
- Vite
- JavaScript
- CSS
- Git and GitHub

## Project Structure

```text
FullStack-Course/
├── Coursework/
├── Project/
│   ├── backend/
│   └── frontend/
├── README.md
├── learning-diary.md
└── video-link.txt

```

## How to Run the Project

### 1. Start MongoDB

Make sure MongoDB is running on your computer.

For macOS using Homebrew:

```bash
brew services start mongodb-community@8.0
```

### 2. Run Backend

Go to the backend folder:

```bash
cd Project/backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file using `.env.example`.

Example:

```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/mern_course_tracker
```

Start backend:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5001
```

### 3. Run Frontend

Open another terminal and go to the frontend folder:

```bash
cd Project/frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
./node_modules/.bin/vite
```

Frontend runs on:

```text
http://localhost:5173
```

## API Routes

```text
GET    /api/courses       Get all course items
POST   /api/courses       Create a new course item
PUT    /api/courses/:id   Update a course item
DELETE /api/courses/:id   Delete a course item
```

## Course Learning Applied

This project applies the main topics from the course:

- NodeJS: backend server setup
- MongoDB: database and CRUD operations
- ExpressJS: API routes and request handling
- React: components, state, hooks, forms and events
- MERN-stack: connecting frontend, backend and database

## Demo Video

The project demo video link is included in:

```text
video-link.txt
```