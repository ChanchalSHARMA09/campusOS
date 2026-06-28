# API Design - CampusOS

## Overview

CampusOS follows a **RESTful API architecture**. All client requests are sent to the backend using HTTP/HTTPS, where Express.js handles routing, business logic, authentication, and database operations.

**Base URL**

```text
http://localhost:5000/api/v1
```

Production Example

```text
https://campusos.com/api/v1
```

---

# API Standards

## Request Format

```json
{
    "key": "value"
}
```

---

## Success Response

```json
{
    "success": true,
    "message": "Request completed successfully",
    "data": {}
}
```

---

## Error Response

```json
{
    "success": false,
    "message": "Something went wrong"
}
```

---

# Authentication APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /auth/register | Register new user |
| POST | /auth/login | Login user |
| POST | /auth/logout | Logout user |
| POST | /auth/forgot-password | Send password reset email |
| POST | /auth/reset-password | Reset password |
| GET | /auth/me | Get current user |
| PATCH | /auth/update-profile | Update profile |

---

# Student APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /students | Get all students |
| GET | /students/:id | Get student details |
| PATCH | /students/:id | Update student profile |
| DELETE | /students/:id | Delete student |

---

# Faculty APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /faculty | Get all faculty |
| GET | /faculty/:id | Get faculty profile |
| PATCH | /faculty/:id | Update faculty profile |

---

# Department APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /departments | Get all departments |
| POST | /departments | Create department |
| PATCH | /departments/:id | Update department |
| DELETE | /departments/:id | Delete department |

---

# Course APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /courses | Get all courses |
| POST | /courses | Create course |
| GET | /courses/:id | Get course details |
| PATCH | /courses/:id | Update course |
| DELETE | /courses/:id | Delete course |

---

# Attendance APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /attendance | Mark attendance |
| GET | /attendance | Get attendance |
| GET | /attendance/student/:id | Student attendance |
| PATCH | /attendance/:id | Update attendance |
| DELETE | /attendance/:id | Delete attendance |

---

# Assignment APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /assignments | Create assignment |
| GET | /assignments | Get assignments |
| GET | /assignments/:id | Assignment details |
| PATCH | /assignments/:id | Update assignment |
| DELETE | /assignments/:id | Delete assignment |

---

# Submission APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /submissions | Submit assignment |
| GET | /submissions | Get submissions |
| GET | /submissions/:id | Submission details |
| PATCH | /submissions/:id | Grade submission |

---

# Notes APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /notes | Upload notes |
| GET | /notes | Get notes |
| GET | /notes/:id | Note details |
| DELETE | /notes/:id | Delete notes |

---

# Placement APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /jobs | Get job listings |
| POST | /jobs | Post new job |
| GET | /jobs/:id | Job details |
| PATCH | /jobs/:id | Update job |
| DELETE | /jobs/:id | Delete job |

---

# Resume APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /resume | Upload resume |
| GET | /resume | Get resume |
| PATCH | /resume | Update resume |
| DELETE | /resume | Delete resume |

---

# Community APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /posts | Create post |
| GET | /posts | Get all posts |
| GET | /posts/:id | Get single post |
| PATCH | /posts/:id | Update post |
| DELETE | /posts/:id | Delete post |

---

# Comment APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /comments | Add comment |
| GET | /comments/:postId | Get comments |
| PATCH | /comments/:id | Update comment |
| DELETE | /comments/:id | Delete comment |

---

# Chat APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /chats | Create chat |
| GET | /chats | Get chats |
| GET | /chats/:id | Chat details |
| DELETE | /chats/:id | Delete chat |

---

# Message APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /messages | Send message |
| GET | /messages/:chatId | Get messages |
| DELETE | /messages/:id | Delete message |

---

# Event APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /events | Create event |
| GET | /events | Get events |
| GET | /events/:id | Event details |
| PATCH | /events/:id | Update event |
| DELETE | /events/:id | Delete event |

---

# Club APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /clubs | Create club |
| GET | /clubs | Get clubs |
| GET | /clubs/:id | Club details |
| PATCH | /clubs/:id | Update club |
| DELETE | /clubs/:id | Delete club |

---

# Hostel APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /hostel | Get hostel details |
| POST | /hostel | Allocate room |
| PATCH | /hostel/:id | Update hostel |
| DELETE | /hostel/:id | Remove allocation |

---

# Complaint APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /complaints | Register complaint |
| GET | /complaints | Get complaints |
| PATCH | /complaints/:id | Update complaint status |
| DELETE | /complaints/:id | Delete complaint |

---

# Leave Request APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /leave | Apply leave |
| GET | /leave | Get leave requests |
| PATCH | /leave/:id | Approve/Reject leave |
| DELETE | /leave/:id | Delete leave request |

---

# Notification APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /notifications | Get notifications |
| PATCH | /notifications/:id/read | Mark as read |
| DELETE | /notifications/:id | Delete notification |

---

# Admin APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /admin/users | Get all users |
| PATCH | /admin/users/:id | Update user |
| DELETE | /admin/users/:id | Delete user |
| GET | /admin/dashboard | Dashboard statistics |

---

# HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 500 | Internal Server Error |

---

# Authentication Flow

```text
Client
   │
POST /auth/login
   │
Server
   │
Validate Credentials
   │
Generate JWT Token
   │
Return Token
   │
Client Stores Token
   │
Future Requests
Authorization: Bearer <token>
```

---

# Request Lifecycle

```text
Client
   │
HTTP Request
   │
Express Router
   │
Authentication Middleware
   │
Validation Middleware
   │
Controller
   │
Service
   │
Database
   │
Response
```

---

# API Folder Structure

```text
server
│
├── routes
│   ├── auth.routes.js
│   ├── student.routes.js
│   ├── faculty.routes.js
│   ├── attendance.routes.js
│   ├── assignment.routes.js
│   ├── submission.routes.js
│   ├── notes.routes.js
│   ├── placement.routes.js
│   ├── event.routes.js
│   ├── club.routes.js
│   ├── chat.routes.js
│   ├── notification.routes.js
│   ├── hostel.routes.js
│   └── admin.routes.js
```

---

# API Versioning

Current Version

```text
/api/v1
```

Future Versions

```text
/api/v2
/api/v3
```

---

# Security

- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes
- Role-Based Access Control (RBAC)
- Request Validation
- Environment Variables
- CORS Protection
- Rate Limiting (Future)

---

# API Summary

| Category | Total Endpoints |
|-----------|-----------------|
| Authentication | 7 |
| Student | 4 |
| Faculty | 3 |
| Department | 4 |
| Course | 5 |
| Attendance | 5 |
| Assignments | 5 |
| Submissions | 4 |
| Notes | 4 |
| Placement | 5 |
| Resume | 4 |
| Community | 5 |
| Comments | 4 |
| Chat | 4 |
| Messages | 3 |
| Events | 5 |
| Clubs | 5 |
| Hostel | 4 |
| Complaints | 4 |
| Leave Requests | 4 |
| Notifications | 3 |
| Admin | 4 |

**Total Planned REST API Endpoints:** **95**