# Architecture - CampusOS

## Overview

CampusOS follows a **Three-Tier Architecture**, separating the application into Presentation Layer, Application Layer, and Data Layer. This architecture improves scalability, maintainability, and security by clearly separating responsibilities.

---

# Architecture Diagram

```text
                          USERS
      ┌──────────────┬──────────────┬──────────────┐
      │              │              │
   Student        Faculty        Administrator
      │              │              │
      └──────────────┴──────────────┘
                     │
               🌐 Web Browser
                     │
                     ▼
              React Frontend
      (UI + State Management + Routing)
                     │
             HTTP / HTTPS Requests
                     │
                     ▼
             Express.js + Node.js
                     │
        JWT Authentication Middleware
                     │
     ┌───────────────┼────────────────┐
     │               │                │
 Attendance     Assignments      Placement
     │               │                │
     ├───────────────┼────────────────┤
     │               │                │
   Community       Chat           Events
     │               │                │
     ├───────────────┼────────────────┤
     │               │                │
  Hostel         Notifications     Admin
                     │
                     ▼
             Mongoose (ODM)
                     │
                     ▼
               MongoDB Atlas
```

---

# Architecture Layers

## 1. Presentation Layer

The Presentation Layer is responsible for interacting with users.

### Technologies

- React.js
- Tailwind CSS
- React Router
- Axios

### Responsibilities

- Display user interface
- Capture user input
- Client-side routing
- Form validation
- API communication
- State management

---

## 2. Application Layer

The Application Layer contains all business logic.

### Technologies

- Node.js
- Express.js

### Responsibilities

- Process API requests
- Execute business logic
- Authenticate users
- Authorize user roles
- Validate input
- Handle errors
- Communicate with the database

---

## 3. Authentication Layer

Every protected request passes through the authentication middleware before reaching any feature module.

### Responsibilities

- Verify JWT tokens
- Authenticate users
- Authorize user roles
- Protect private routes
- Reject unauthorized requests

---

# Feature Modules

CampusOS is divided into independent backend modules.

## Authentication Module

Responsibilities

- Register users
- Login
- Logout
- Forgot Password
- Reset Password
- JWT Token Generation

---

## Student Module

Responsibilities

- Student Profile
- Dashboard
- Academic Information

---

## Attendance Module

Responsibilities

- Mark Attendance
- View Attendance
- Attendance Reports

---

## Assignment Module

Responsibilities

- Upload Assignments
- Submit Assignments
- Grade Assignments

---

## Placement Module

Responsibilities

- Job Listings
- Internship Listings
- Resume Builder
- Mock Interviews

---

## Community Module

Responsibilities

- Create Posts
- Like Posts
- Comments
- Discussion Feed

---

## Chat Module

Responsibilities

- One-to-One Chat
- Group Chat
- Real-Time Messaging

---

## Event Module

Responsibilities

- Create Events
- Register Participants
- Event Notifications

---

## Club Module

Responsibilities

- Club Management
- Member Management
- Club Announcements

---

## Hostel Module

Responsibilities

- Room Allocation
- Leave Requests
- Complaint Management

---

## Notification Module

Responsibilities

- Assignment Alerts
- Placement Notifications
- Event Reminders
- Club Updates

---

## Admin Module

Responsibilities

- User Management
- Role Management
- Department Management
- Analytics Dashboard

---

# Data Layer

The Data Layer stores and retrieves application data.

### Technologies

- MongoDB Atlas
- Mongoose ODM

### Main Collections

- Users
- Students
- Faculty
- Departments
- Courses
- Attendance
- Assignments
- Notes
- Jobs
- Clubs
- Events
- Messages
- Notifications
- Hostel
- Complaints

---

# Request Flow

A typical request follows this sequence:

```text
User
   │
Browser
   │
React Frontend
   │
HTTP Request
   │
Express Server
   │
JWT Authentication Middleware
   │
Feature Controller
   │
Service Layer
   │
Database (MongoDB)
   │
Response
   │
React UI
```

---

# Folder Structure

```text
CampusOS
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── uploads/
│   ├── app.js
│   └── server.js
│
├── docs/
├── README.md
└── docker-compose.yml
```

---

# Security Architecture

CampusOS uses multiple security mechanisms.

- JWT Authentication
- Password Hashing (bcrypt)
- Role-Based Access Control (RBAC)
- Input Validation
- Environment Variables
- Protected API Routes
- HTTPS Communication

---

# Advantages of the Architecture

- Modular design
- Easy to maintain
- Highly scalable
- Secure authentication
- Separation of concerns
- Independent feature development
- Easier testing and debugging
- Supports future feature expansion

---

# Future Improvements

- Redis for caching
- Docker containerization
- Kubernetes deployment
- AWS cloud hosting
- Microservices architecture
- API Gateway
- CI/CD Pipeline
- AI-powered recommendation services

---

# Architecture Summary

| Layer | Technology | Responsibility |
|--------|------------|----------------|
| Presentation Layer | React, Tailwind CSS | User Interface |
| Application Layer | Node.js, Express.js | Business Logic |
| Authentication Layer | JWT, Middleware | Authentication & Authorization |
| Feature Modules | Controllers & Services | Application Features |
| Data Layer | MongoDB, Mongoose | Data Storage |