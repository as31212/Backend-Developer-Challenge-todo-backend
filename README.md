# Task Management API

## Table of Contents
- [Features](#features)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
    - [`POST /auth/sign-in`](#post-auth-sign-in)
    - [`POST /auth/login`](#post-authlogin)
  - [Tasks](#tasks)
    - [`GET /tasks/:userId`](#get-tasksuserid)
    - [`POST /add/:userId`](#post-adduserid)
    - [`PATCH /edit`](#patch-edit)
    - [`PATCH /status-change`](#patch-status-change)
    - [`DELETE /delete`](#delete-delete)
- [Models](#models)
  - [User](#user)
  - [Task](#task)
- [Authentication](#authentication-1)
- [Error Responses](#error-responses)
- [Environment Variables](#environment-variables)

A RESTful API for managing tasks with user authentication.

## Features

- User authentication (signup/login with JWT)
- CRUD operations for tasks
- Task status management
- User-specific task retrieval

## API Endpoints

### Authentication

#### `POST /auth/sign-in`
[... rest of your existing content remains exactly the same ...]
# Task Management API

A RESTful API for managing tasks with user authentication.

## Features

- User authentication (signup/login with JWT)
- CRUD operations for tasks
- Task status management
- User-specific task retrieval

## API Endpoints

### Authentication

#### `POST /auth/sign-in`
- Creates a new user account
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string"
  }
  ```
- **Success Response:**
  ```json
  {
    "message": "user account created",
    "user": {
      "id": "string",
      "username": "string",
      "email": "string",
      "tasks": []
    },
    "token": "string"
  }
  ```

#### `POST /auth/login`
- Logs in an existing user
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Success Response:**
  ```json
  {
    "message": "Login successful",
    "user": {
      "id": "string",
      "username": "string",
      "email": "string",
      "tasks": []
    },
    "token": "string"
  }
  ```

### Tasks

#### `GET /tasks/:userId`
- Retrieves all tasks for a specific user
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Success Response:**
  ```json
  [
    {
      "_id": "string",
      "title": "string",
      "dateCreated": "ISO Date",
      "status": "complete|incomplete",
      "createdBy": "userId"
    }
  ]
  ```

#### `POST /add/:userId`
- Creates a new task
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Request Body:**
  ```json
  {
    "title": "string"
  }
  ```
- **Success Response:**
  ```json
  {
    "message": "Post successfully created",
    "task": {
      "_id": "string",
      "title": "string",
      "dateCreated": "ISO Date",
      "status": "incomplete",
      "createdBy": "userId"
    }
  }
  ```

#### `PATCH /edit`
- Updates a task's title
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Request Body:**
  ```json
  {
    "taskId": "string",
    "title": "string"
  }
  ```
- **Success Response:**
  ```json
  {
    "message": "Task successfully updated",
    "taskId": "string"
  }
  ```

#### `PATCH /status-change`
- Updates a task's status
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Request Body:**
  ```json
  {
    "taskId": "string",
    "status": "complete|incomplete"
  }
  ```
- **Success Response:**
  ```json
  {
    "message": "Task status updated successfully",
    "updatedTaskStatus": "complete|incomplete"
  }
  ```

#### `DELETE /delete`
- Deletes a task
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Request Body:**
  ```json
  {
    "taskId": "string"
  }
  ```
- **Success Response:**
  ```json
  {
    "message": "Task successfully deleted",
    "deletedTaskId": "string"
  }
  ```

## Models

### User
```javascript
{
  email: String,      // unique, required
  username: String,   // required
  password: String    // required, minlength: 6
}
```

### Task
```javascript
{
  title: String,      // required, maxlength: 100
  dateCreated: Date,  // defaults to now
  status: String,     // enum: ["complete", "incomplete"], default: "incomplete"
  createdBy: ObjectId // reference to User, required
}
```

## Authentication

All task endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Error Responses

- `400 Bad Request`: Missing or invalid parameters
- `401 Unauthorized`: Invalid or missing authentication token
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

## Environment Variables

- `JWT_KEY`: Secret key for JWT token generation
- `MONGO_URI`: MongoDB connection string
```

This README provides comprehensive documentation for your API, including:
1. All available endpoints
2. Request/response formats
3. Authentication requirements
4. Data models
5. Error handling
6. Environment configuration

You can customize it further by adding sections for:
- Installation instructions
- Example usage
- Deployment notes
- Contribution guidelines
- License information