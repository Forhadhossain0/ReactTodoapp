import  { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
// import { IoMdClose } from "react-icons/io";

const Task = ({ task, toggleTaskStatus,index, deleteTask, editTask }) => {


  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTask({ text: editedText });
    setEditing(false);
  };



  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      {/* <span className="task-index">{index}</span> */}
      {!isEditing ? 
      
      (
        <>
          <span onClick={toggleTaskStatus} className="task-text w-[80%] overflow-hidden"> {task.text} </span>
          <div className="task-actions flex items-center gap-4 ">
            <button className='text-lg hover:text-white text-teal-200 transition-all' onClick={() => setEditing(true)}>  <LuClipboardEdit> </LuClipboardEdit></button>
            <button className='text-xl hover:text-white text-rose-500 transition-all' onClick={deleteTask}><MdDelete></MdDelete></button>
          </div>
        </>
      ) 

    : (
        <form onSubmit={handleEditSubmit}>
          <input   type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)}  />
          <button type="submit">Save</button>
        </form>
      )}

    </li>
  );
};

export default Task;
