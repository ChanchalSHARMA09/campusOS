# Database Design - CampusOS

## Overview

CampusOS uses **MongoDB Atlas** as its primary NoSQL database. Data is organized into collections, with each collection storing documents related to a specific module of the application.

The database is designed to support authentication, academic management, placements, communication, events, hostel management, and administrative operations.

---

# Database Technology

| Component | Technology |
|------------|------------|
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Database Type | NoSQL (Document-Oriented) |

---

# Database Collections

The following collections will be used in CampusOS:

| Collection | Description |
|------------|-------------|
| users | Stores authentication and basic user information |
| students | Student-specific details |
| faculty | Faculty information |
| departments | Department details |
| courses | Course information |
| attendance | Attendance records |
| assignments | Assignment details |
| submissions | Student assignment submissions |
| notes | Lecture notes uploaded by faculty |
| jobs | Placement opportunities |
| resumes | Student resumes |
| clubs | Club information |
| events | Event details |
| posts | Community posts |
| comments | Comments on posts |
| chats | Chat rooms |
| messages | Chat messages |
| notifications | User notifications |
| hostel | Hostel information |
| complaints | Hostel complaints |
| leaveRequests | Student leave requests |

---

# Entity Relationship Overview

```text
Users
│
├── Student
├── Faculty
└── Admin
        │
        ├──────────────┐
        │              │
Attendance       Assignments
        │              │
        │         Submissions
        │
      Courses
        │
     Departments

Students
│
├── Resume
├── Jobs
├── Events
├── Clubs
├── Notifications
└── Chats

Community
│
├── Posts
└── Comments

Chats
│
└── Messages
```

---

# Collection Schemas

## 1. Users

Purpose: Stores login credentials and user roles.

| Field | Type |
|--------|------|
| _id | ObjectId |
| name | String |
| email | String |
| password | String |
| role | String |
| profileImage | String |
| isVerified | Boolean |
| createdAt | Date |
| updatedAt | Date |

---

## 2. Students

Purpose: Stores student-specific information.

| Field | Type |
|--------|------|
| _id | ObjectId |
| userId | ObjectId (Users) |
| rollNumber | String |
| department | ObjectId |
| semester | Number |
| section | String |
| phone | String |

---

## 3. Faculty

Purpose: Stores faculty information.

| Field | Type |
|--------|------|
| _id | ObjectId |
| userId | ObjectId |
| employeeId | String |
| department | ObjectId |
| designation | String |

---

## 4. Departments

| Field | Type |
|--------|------|
| _id | ObjectId |
| departmentName | String |
| departmentCode | String |
| hod | ObjectId |

---

## 5. Courses

| Field | Type |
|--------|------|
| _id | ObjectId |
| courseName | String |
| courseCode | String |
| facultyId | ObjectId |
| departmentId | ObjectId |
| semester | Number |

---

## 6. Attendance

| Field | Type |
|--------|------|
| _id | ObjectId |
| studentId | ObjectId |
| courseId | ObjectId |
| date | Date |
| status | String |

---

## 7. Assignments

| Field | Type |
|--------|------|
| _id | ObjectId |
| title | String |
| description | String |
| courseId | ObjectId |
| facultyId | ObjectId |
| dueDate | Date |

---

## 8. Submissions

| Field | Type |
|--------|------|
| _id | ObjectId |
| assignmentId | ObjectId |
| studentId | ObjectId |
| fileUrl | String |
| submittedAt | Date |
| marks | Number |

---

## 9. Notes

| Field | Type |
|--------|------|
| _id | ObjectId |
| title | String |
| courseId | ObjectId |
| facultyId | ObjectId |
| fileUrl | String |
| uploadedAt | Date |

---

## 10. Jobs

| Field | Type |
|--------|------|
| _id | ObjectId |
| companyName | String |
| jobTitle | String |
| description | String |
| eligibility | String |
| deadline | Date |

---

## 11. Resumes

| Field | Type |
|--------|------|
| _id | ObjectId |
| studentId | ObjectId |
| resumeUrl | String |
| updatedAt | Date |

---

## 12. Clubs

| Field | Type |
|--------|------|
| _id | ObjectId |
| clubName | String |
| description | String |
| coordinatorId | ObjectId |

---

## 13. Events

| Field | Type |
|--------|------|
| _id | ObjectId |
| title | String |
| description | String |
| eventDate | Date |
| venue | String |
| organizerId | ObjectId |

---

## 14. Posts

| Field | Type |
|--------|------|
| _id | ObjectId |
| authorId | ObjectId |
| content | String |
| image | String |
| createdAt | Date |

---

## 15. Comments

| Field | Type |
|--------|------|
| _id | ObjectId |
| postId | ObjectId |
| authorId | ObjectId |
| comment | String |
| createdAt | Date |

---

## 16. Chats

| Field | Type |
|--------|------|
| _id | ObjectId |
| participants | Array<ObjectId> |
| createdAt | Date |

---

## 17. Messages

| Field | Type |
|--------|------|
| _id | ObjectId |
| chatId | ObjectId |
| senderId | ObjectId |
| message | String |
| messageType | String |
| createdAt | Date |

---

## 18. Notifications

| Field | Type |
|--------|------|
| _id | ObjectId |
| userId | ObjectId |
| title | String |
| message | String |
| isRead | Boolean |
| createdAt | Date |

---

## 19. Hostel

| Field | Type |
|--------|------|
| _id | ObjectId |
| roomNumber | String |
| block | String |
| capacity | Number |
| occupied | Number |

---

## 20. Complaints

| Field | Type |
|--------|------|
| _id | ObjectId |
| studentId | ObjectId |
| complaint | String |
| status | String |
| createdAt | Date |

---

## 21. Leave Requests

| Field | Type |
|--------|------|
| _id | ObjectId |
| studentId | ObjectId |
| reason | String |
| fromDate | Date |
| toDate | Date |
| status | String |

---

# Collection Relationships

```text
Users (1)
│
├── (1:1) Students
├── (1:1) Faculty
└── (1:1) Admin

Department (1)
│
└── (1:N) Courses

Course (1)
│
├── (1:N) Attendance
├── (1:N) Assignments
└── (1:N) Notes

Assignment (1)
│
└── (1:N) Submissions

Student (1)
│
├── (1:N) Attendance
├── (1:N) Submissions
├── (1:1) Resume
├── (1:N) Notifications
├── (1:N) Complaints
└── (1:N) Leave Requests

Post (1)
│
└── (1:N) Comments

Chat (1)
│
└── (1:N) Messages
```

---

# Indexing Strategy

To improve performance, indexes will be created on:

- email (Users)
- rollNumber (Students)
- employeeId (Faculty)
- courseCode (Courses)
- assignmentId (Submissions)
- studentId (Attendance)
- chatId (Messages)
- companyName (Jobs)

---

# Security Considerations

- Passwords will be hashed using bcrypt.
- Sensitive fields will never be returned in API responses.
- User roles will be validated before database operations.
- Input validation will be performed before saving data.
- MongoDB ObjectIds will be validated before queries.

---

# Future Database Enhancements

- Soft delete for important collections
- Audit logs
- Redis caching
- Full-text search
- File metadata collection
- Analytics collection
- AI recommendation data
- Multi-college support

---

# Database Summary

| Total Collections | 21 |
|-------------------|----|
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Relationships | Referenced using ObjectIds |
| Indexing | Frequently queried fields |
| Authentication | JWT + bcrypt |