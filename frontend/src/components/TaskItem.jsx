function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0' }}>
      <span
        onClick={() => toggleTask(task._id)}
        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task._id)} style={{ color: 'red' }}>Delete</button>
    </div>
  );
}

export default TaskItem;
