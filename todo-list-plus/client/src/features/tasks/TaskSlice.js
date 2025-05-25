   mkdir todo-list-plus
   cd todo-list-plus
   mkdir backend frontend
   cd backend
   npm init -y
   npm install express mongoose bcrypt jsonwebtoken cors dotenv
   cd ../frontend
   npx create-react-app .
   npm install @reduxjs/toolkit react-redux react-query tailwindcss