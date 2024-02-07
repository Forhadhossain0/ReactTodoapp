import  { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask({  id: Date.now(), text: taskText,   completed: false,  priority: 'low',   });
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleTaskSubmit} className="task-form mt-8 flex justify-center items-center gap-5 relative  ">
      <input className='rounded outline-none bg-[#2b313d] px-4 py-[9px]  w-full' type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)}    placeholder="Add a new task here..." />
      <button className='shadow text-lg hover:bg-[#73b6e2] transition-all bg-[#2b313d] text-white h-full px-4 py-3  rounded ' type="submit"> <FaPlus></FaPlus> </button>
    </form>
  );
};

export default TaskForm;
