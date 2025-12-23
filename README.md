# StudyBuddy  
**Student Task & Focus Tracker**

---

## Course Information
**Course:** Electronic Business Development (BINF 503)  
**Semester:** Winter 2025  
**Instructor:** Dr. Nourhan Hamdi  
**Teaching Assistants:** Mr. Nour Gaser, Mr. Omar Alaa  

---

## 1. Student Information

| Name | Student ID | Tutorial Group | GitHub Username |
|---|---|---|---|
| **Youssef Atef Zaki** | 13007460 | T4 | @youssefzaki47 |

---

## 2. Project Description

**StudyBuddy** is a web-based productivity application designed for students to securely manage their academic tasks through a personalized dashboard.

### Problem
Students often waste time trying to organize their study workload and keep track of what needs to be done, which can lead to missed deadlines and poor time management.

### Solution
StudyBuddy provides:
- Secure user authentication
- A personal task manager where each user can manage only their own tasks

---

## 3. Feature Breakdown

### 3.1 Full Product Vision (Future Scope)
- Focus session tracker (Pomodoro-style)
- Task deadlines & reminders
- Task categories (study, fitness, personal)
- Daily productivity analytics
- Calendar integration
- Mobile app support
- Dark mode
- Study streaks & motivation system

---

### 3.2 MVP Features (Course Scope)

✅ **Feature 1: User Authentication (Registration & Login)**  
- User signup and login with email + password  
- Password hashing using **bcrypt**  
- JWT token generation and verification  
- Protected routes (only logged-in users can access the dashboard)  

✅ **Feature 2: Task Management System (CRUD)**  
- Add a new task  
- Mark a task as completed  
- Delete a task  
- View only tasks created by the logged-in user (user-specific data)  

---

## 4. Feature Responsibilities

| Developer | Feature | Responsibilities |
|---|---|---|
| **Youssef Atef Zaki** | **User Authentication** | User registration and login, password hashing using bcrypt, JWT token generation, authentication middleware, and protecting secured routes |
| **Youssef Atef Zaki** | **Task Management System** | Create, read, update, and delete tasks, link tasks to the authenticated user, ensure users can only access their own tasks |

---

## 5. Data Model (Initial Schemas)

### 5.1 User Schema
```js
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
