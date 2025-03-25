```markdown
# Task Management API

![Node.js](https://img.shields.io/badge/Node.js-v14+-green)
![Express](https://img.shields.io/badge/Express-v4.17+-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-v4.4+-green)

A secure RESTful API for task management with JWT authentication, built with Node.js, Express, and MongoDB.

## Table of Contents
- [Features](#features)
- [API Documentation](#api-documentation)
- [Models](#models)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features
- ✅ JWT authentication with 1-hour expiration
- 🔒 Password hashing with bcrypt
- 👤 User registration and login
- 📝 Full CRUD operations for tasks
- ✔️ Input validation and sanitization
- 🚦 Comprehensive error handling

## API Documentation

### Authentication

#### `POST /auth/sign-in` - Register new user
**Request:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (201 Created):**
```json
{
  "message": "user account created",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "johndoe",
    "email": "john@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### `POST /auth/login` - User login
**Request:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (200 OK):**
```json
{
  "message": "Login Successful",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "john@example.com",
    "username": "johndoe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Task Management (All require JWT)

#### `POST /task/add/:userId` - Create task
**Headers:**
```
Authorization: Bearer <token>
```

**Request:**
```json
{
  "title": "Complete project",
  "description": "Finish API documentation"
}
```

**Response (201 Created):**
```json
{
  "message": "Post successfully created",
  "task": {
    "title": "Complete project",
    "description": "Finish API documentation",
    "status": "incomplete",
    "createdBy": "507f1f77bcf86cd799439011",
    "_id": "65a8f857e8b4d12c7f4a8b9c"
  }
}
```

#### `GET /task/tasks/:userId` - Get user tasks
**Headers:**
```
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
[
  {
    "_id": "65a8f857e8b4d12c7f4a8b9c",
    "title": "Complete project",
    "description": "Finish API documentation",
    "status": "incomplete",
    "createdBy": "507f1f77bcf86cd799439011"
  }
]
```

#### `PATCH /task/edit` - Update task
**Headers:**
```
Authorization: Bearer <token>
```

**Request:**
```json
{
  "taskId": "65a8f857e8b4d12c7f4a8b9c",
  "title": "Updated title",
  "description": "Updated description"
}
```

**Response (200 OK):**
```json
{
  "message": "Task successfully updated",
  "taskId": "65a8f857e8b4d12c7f4a8b9c"
}
```

#### `DELETE /task/delete` - Delete task
**Headers:**
```
Authorization: Bearer <token>
```

**Request:**
```json
{
  "taskId": "65a8f857e8b4d12c7f4a8b9c"
}
```

**Response (200 OK):**
```json
{
  "message": "Task successfully deleted",
  "deletedTaskId": "65a8f857e8b4d12c7f4a8b9c"
}
```

## Models

### User
```javascript
{
  email: String,    // unique, required, lowercase
  username: String, // required, lowercase
  password: String  // required, minlength: 6
}
```

### Task
```javascript
{
  title: String,        // required, maxlength: 100
  description: String,  // maxlength: 500
  status: String,       // enum: ["complete", "incomplete"]
  createdBy: ObjectId,   // reference to User
  dateCreated: Date     // default: Date.now
}
```

## Authentication
- JWT tokens are required for all task endpoints
- Tokens expire after 1 hour
- Include in headers: `Authorization: Bearer <token>`

## Error Handling
| Status Code | Description |
|-------------|-------------|
| 400 | Bad Request - Missing/invalid fields |
| 401 | Unauthorized - Invalid/missing token |
| 404 | Not Found - Resource doesn't exist |
| 500 | Internal Server Error |

## Installation
1. Clone repository
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables (see below)
4. Start server:
```bash
npm start
```

## Environment Variables
Create `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_KEY=your_secret_key_here
PORT=8881
```

## License
MIT License
```

This README.md includes:
- Clear API documentation with request/response examples
- Model definitions
- Authentication requirements
- Error handling information
- Installation instructions
- Environment variables setup
- License information
