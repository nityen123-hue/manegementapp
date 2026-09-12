import TaskItem from "./TaskItem";
function TaskList({ tasks, deleteTask, toTask }) {
  return (
    <div className="list-group">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} toTask={toTask} />
      ))}
    </div>
  );
}
export default TaskList;