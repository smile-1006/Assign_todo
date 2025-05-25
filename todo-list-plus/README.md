### Implementation Plan for Todo-List+ Advanced To-Do List App

---

## 1. **Backend Implementation**

### 1.1. **Setup Node.js and Express.js**

- Initialize a new Node.js project.
- Install necessary packages:
  ```bash
  npm install express mongoose bcryptjs jsonwebtoken dotenv cors
  ```

### 1.2. **Database Configuration (MongoDB with Mongoose)**

- Create a `db.js` file to connect to MongoDB using Mongoose.
- Define User and Task models in `models/User.js` and `models/Task.js`.

### 1.3. **Authentication Routes**

- Create `routes/auth.js` for authentication endpoints.
- Implement JWT authentication middleware in `middleware/auth.js`.

### 1.4. **Task Routes**

- Create `routes/tasks.js` for task management endpoints.
- Implement CRUD operations for tasks using Mongoose.

### 1.5. **Collaborator & Sharing Routes**

- Extend `routes/tasks.js` to handle adding/removing collaborators.

### 1.6. **Middleware and Error Handling**

- Implement error handling middleware.
- Create a middleware for JWT verification.

### 1.7. **Testing the API**

- Use Postman or Insomnia to test all API endpoints.

---

## 2. **Frontend Implementation**

### 2.1. **Setup React.js with Tailwind CSS**

- Create a new React app using Create React App.
- Install Tailwind CSS and configure it.

### 2.2. **State Management with Redux Toolkit**

- Set up Redux store and slices for authentication and tasks.
- Create actions and reducers for managing user state and tasks.

### 2.3. **API Integration with React Query**

- Install React Query and set up a QueryClient.
- Create hooks for fetching, creating, updating, and deleting tasks.

### 2.4. **UI Components**

#### 2.4.1. **Authentication Components**

- Create `Login`, `Signup`, and `ForgotPassword` components.
- Implement forms with validation.

#### 2.4.2. **Dashboard Components**

- Create `Dashboard`, `TaskList`, and `CalendarView` components.
- Implement stats visualization using Chart.js or D3.js.

#### 2.4.3. **Task Manager Components**

- Create `TaskCard`, `TaskDetails`, and `TaskModal` components.
- Implement functionality for adding subtasks and tags.

#### 2.4.4. **Pomodoro Timer Component**

- Create a `PomodoroTimer` component with session management.

#### 2.4.5. **Settings Component**

- Create a `Settings` component for user preferences.

### 2.5. **Responsive Design**

- Ensure all components are responsive using Tailwind CSS.
- Implement a bottom navbar for mobile users.

---

## 3. **UX Flow Implementation**

### 3.1. **Onboarding Process**

- Implement onboarding prompts for new users to set up reminders, dark mode, and weekly goals.

### 3.2. **Task Management Features**

- Implement keyboard shortcuts for adding tasks.
- Create collapsible sections for subtasks.
- Change task colors based on priority.

### 3.3. **Progress Analytics**

- Use Chart.js or D3.js to visualize task completion over time.

---

## 4. **Notifications and Reminders**

### 4.1. **Email and In-App Notifications**

- Set up a service (like Nodemailer) for sending email notifications.
- Implement in-app notifications for reminders.

---

## 5. **Offline Mode**

### 5.1. **Service Worker with IndexedDB**

- Implement a service worker to cache API responses.
- Use IndexedDB to store tasks for offline access.

---

## 6. **Testing and Deployment**

### 6.1. **Testing**

- Write unit tests for backend routes and frontend components.
- Use Jest and React Testing Library for frontend testing.

### 6.2. **Deployment**

- Deploy the backend on a platform like Heroku or Vercel.
- Deploy the frontend on Netlify or Vercel.

---

## 7. **Documentation**

- Create a README file with setup instructions, API documentation, and usage guidelines.

---

## 8. **Copilot-Ready Prompts**

You can use the following prompts to assist with coding:

1. **JWT Auth Middleware**
   ```javascript
   // Write an Express middleware function to verify JWT tokens
   // and attach the user object to req.user
   ```

2. **Task CRUD Controller**
   ```javascript
   // Implement CRUD API for Task with mongoose model
   // Support fields: title, description, dueDate, tags, status
   ```

3. **UI Component – TaskCard**
   ```javascript
   // Create a reusable TaskCard component in React
   // Props: title, dueDate, tags, priority, status
   ```

4. **Pomodoro Timer Component**
   ```javascript
   // Create a React Pomodoro Timer with start, pause, reset
   // and session (25min) + break (5min) management
   ```

5. **Task Progress Chart**
   ```javascript
   // Create a React chart component that visualizes the number of completed tasks over the past 7 days
   ```

---

This plan provides a comprehensive overview of how to implement the Todo-List+ app. Each section can be expanded with more detailed steps as needed. Good luck with your project!