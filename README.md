# Assign_todo

## Overview

**Assign_todo** is an advanced, full-stack To-Do List application designed for productivity, collaboration, and analytics. It features a modern UI, robust authentication, real-time notifications, and integrations to help users manage tasks efficiently.

---

## Live Demo

- **Frontend (React):** [https://assign-todo-nine.vercel.app/](https://assign-todo-nine.vercel.app/)
- **Backend (Express API):** [https://assign-todo.onrender.com](https://assign-todo.onrender.com)

---

## Tech Stack

### Frontend

- **React.js** (with Hooks)
- **Redux Toolkit** (state management)
- **React Query** (data fetching/caching)
- **Tailwind CSS** (utility-first styling)
- **Chart.js** (analytics & charts)
- **Cypress** (end-to-end testing)

### Backend

- **Node.js** & **Express.js**
- **MongoDB** (with Mongoose ODM)
- **JWT** & **Bcrypt** (authentication & password hashing)
- **Dotenv** (environment variables)
- **CORS** (cross-origin resource sharing)
- **Jest** (unit testing)

---

## API Endpoints

### Auth Routes

| Route              | Method | Description                |
|--------------------|--------|----------------------------|
| `/api/auth/signup` | POST   | Register a new user        |
| `/api/auth/login`  | POST   | Login and get JWT token    |
| `/api/auth/logout` | POST   | Logout                     |
| `/api/auth/me`     | GET    | Get current user profile   |

### Task Routes

| Route                          | Method | Description                        |
|---------------------------------|--------|------------------------------------|
| `/api/tasks`                   | GET    | Get all tasks for current user     |
| `/api/tasks/:id`               | GET    | Get single task                    |
| `/api/tasks`                   | POST   | Create new task                    |
| `/api/tasks/:id`               | PUT    | Update task                        |
| `/api/tasks/:id`               | DELETE | Delete task                        |
| `/api/tasks/:id/toggle`        | PATCH  | Toggle completion status           |
| `/api/tasks/:id/reminder`      | POST   | Set reminder                       |

### Collaborator & Sharing

| Route                                      | Method | Description                |
|---------------------------------------------|--------|----------------------------|
| `/api/tasks/:id/collaborators`             | POST   | Add collaborator by email  |
| `/api/tasks/:id/collaborators`             | DELETE | Remove collaborator        |

---

## Features

- **User Authentication:** Sign up, login, logout, JWT-based session, forgot password
- **Task Management:** Create, read, update, delete tasks; subtasks; tags; priorities; recurring tasks; reminders
- **Productivity Tools:** Pomodoro timer, calendar sync, dark mode
- **Collaboration:** Invite collaborators, role-based access
- **Notifications:** Email and in-app notifications
- **Analytics:** Daily/weekly summaries, task completion graphs
- **Offline Support:** Service worker with IndexedDB

---

## Development

### Frontend

```bash
cd todo-list-plus/client
npm install
npm start
```

Feel free to update the "Contributors" section and add more details as your project evolves!