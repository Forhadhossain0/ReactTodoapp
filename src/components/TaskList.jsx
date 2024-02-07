import Task from "./Task";

const TaskList = ({ tasks, toggleTaskStatus, deleteTask, editTask }) => {

  const sortedTasks = tasks.sort((a, b) => b.inputOrder - a.inputOrder);


  return (
    <ul className="task-list overflow-x-hidden">
      {sortedTasks.map((task, index) => (
        <Task key={task.id}  
          index={index + 1}   
          task={task}
          editTask={(updatedTask) => editTask(task.id, updatedTask)}
          deleteTask={() => deleteTask(task.id)}
          toggleTaskStatus={() => toggleTaskStatus(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
