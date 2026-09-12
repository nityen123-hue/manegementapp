README.md


📝 Task Manager App
A simple and responsive Task Manager App built using React and Bootstrap 5.

This project is created as a beginner-friendly React practical project. It demonstrates React components, props, state, hooks, React Router, and localStorage.

🚀 Features
➕ Add new tasks

✅ Complete / Undo tasks

🗑️ Delete tasks

💾 Save tasks using localStorage

🔄 Tasks remain after page refresh

🧩 Component-based React structure

🔗 Home and About page routing

📱 Responsive Bootstrap design

🛠️ Technologies Used
React

JavaScript

Bootstrap 5

React Router DOM

Browser localStorage

Vite

📂 Project Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   └── TaskList.jsx
│
├── pages/
│   ├── Home.jsx
│   └── About.jsx
│
├── App.jsx
└── main.jsx
📌 React Concepts Used
Components
The application is divided into small reusable components:

Navbar

TaskForm

TaskList

TaskItem

Home

About

Props
Props are used to pass task data and functions between components.

useState
useState is used to manage:

Task list

Task input value

useEffect
useEffect is used to:

Load tasks from localStorage

Save tasks to localStorage

React Router
The application contains two routes:

/        → Home
/about   → About
localStorage
Tasks are stored in the browser using:

localStorage.setItem("tasks", JSON.stringify(tasks));
Tasks are loaded using:

localStorage.getItem("tasks");
▶️ How to Run
1. Install dependencies
npm install
2. Install required packages
npm install bootstrap react-router-dom
3. Start the project
npm run dev
Open the local Vite URL shown in the terminal.

🎯 Task Management Flow
Add Task
   ↓
TaskForm
   ↓
Home
   ↓
TaskList
   ↓
TaskItem
   ↓
Complete / Undo / Delete
   ↓
localStorage
💾 Data Persistence
The app uses localStorage, so tasks are saved in the browser.

For example:

[
  {
    "id": 123456789,
    "text": "Learn React",
    "completed": false
  }
]
