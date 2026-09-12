import { useEffect, useState } from "react";

import TaskForm from "../TaskFrom.jsx";
import TaskList from "../TaskList.jsx";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const addTask = () => {
    if (taskText.trim() === "") {
      return;
    }

    const newTask = {  id: Date.now(),  text: taskText,  completed: false
    };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };


  const toTask = (id) => {

    const newTasks = tasks.map((task) => {

      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }

      return task;
    });

    setTasks(newTasks);
  };


  return (
    <div className="container mt-4">
      <h4 className="mb-3">
        My Tasks
      </h4>

      <TaskForm  taskText={taskText}  setTaskText={setTaskText}  addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toTask={toTask} />

      <p className="text-muted mt-3">
        Route: "/"
      </p>

    </div>
  );
}

export default Home;