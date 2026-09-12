function TaskForm({ taskText, setTaskText, addTask }) {
  return (
    <div className="input-group mb-3">

      <input
        type="text"
        className="form-control"
        placeholder="New task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={addTask}
      >
        Add
      </button>

    </div>
  );
}

export default TaskForm;