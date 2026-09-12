function TaskItem({ task, deleteTask, toTask }) {
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <span className={task.completed ? "text-decoration-line-through" : ""} >
        {task.text}
      </span>

      <div>
        <button  className="btn btn-success btn-sm me-2"  onClick={() => toTask(task.id)} >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button  className="btn btn-danger btn-sm"  onClick={() => deleteTask(task.id)} >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;