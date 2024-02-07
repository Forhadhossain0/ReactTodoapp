import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './index.css'
import { IoAddCircleOutline } from "react-icons/io5";
import { GrCompliance } from "react-icons/gr";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { MdSecurityUpdateGood } from "react-icons/md";
import { TbEditCircle } from "react-icons/tb";
import { MdNoteAlt } from "react-icons/md";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []; //get local storage variable or item
  setTasks((prevTasks) => {
    if (prevTasks.length === 0 && storedTasks.length > 0) { return storedTasks;  }
      return prevTasks;
        });
  
  }, []);
  

// set data in localstorage and call update function   
useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // console.log('Tasks Updated:', tasks);
    updateTaskStats();
}, [tasks]);
  

// after edit or delete or add task updating total task and completed task length
const updateTaskStats = () => {
  setTotalTasks(tasks.length);
  setCompletedTasks(tasks.filter(task => task.completed).length);
};


// add a new task 
const addTask = (newTask) => {
  const taskWithOrder = {
    ...newTask,
    inputOrder: tasks.length + 1, // Set inputOrder based on the current number of tasks
  };
  setTasks([...tasks, taskWithOrder]);
};
  
// edit or update task list .
const editTask = (taskId, updatedTask) => {
  const updatedTasks = tasks.map(task =>
    task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };
  

// delete from ui and local storage
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };
  

// status update or toggle
  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    };


return (
  <>  
       {/* <h1 className='text-xl font-bold mb-2 mx-auto'>Todo List</h1> */}
    <div className=" text-white app-container md:flex md:justify-center md:w-[70%] w-full rounded shadow  md:h-[90vh] h-full   mx-auto mt-0 md:mt-7  "> 
     

     {/* larger device  device feature  */}
      <div className='bg-[#ffffff] items-center md:flex hidden relative w-[470px] '>
        <div className='absolute flex justify-center top-8 h-full w-full'>
           <div>
           <h2 className='text-3xl text-center font-serif font-bold flex justify-center items-center gap-2 text-blue-900'><span className='text-green-500 '>To Do </span>  App <MdNoteAlt className='text-red-400'></MdNoteAlt></h2>
           <p className='text-gray-500 text-justify text-sm mx-auto w-[80%] mt-8'>Welcome to our Todo List App – your go-to tool for organizing tasks efficiently! This user-friendly application allows you to effortlessly manage your daily tasks, set priorities, and track your progress. </p>
           <p className='text-gray-500 text-justify text-sm mx-auto w-[80%] mt-4'>Add, edit, and delete tasks with ease, and enjoy the convenience of persistence across sessions. Whether you're a meticulous planner or someone who loves spontaneity.</p>
           <p className='text-[#5ff3ba] text-justify font-bold mx-auto w-[80%] mt-8'>Key feature : </p>
           
           <div className='flex w-full ml-12 mt-6 justify-start gap-5 text-[#3973dfb7] items-center'>
             <p className='border-2 p-3 hover:bg-[#5ff3ba] transition-all cursor-pointer rounded w-20 text-center border-[#39dfc9]  '> <IoAddCircleOutline   className='mx-auto text-2xl'> </IoAddCircleOutline>        <p className='mt-2  font-bold text-sm mx-auto border-b-2'>ADD</p></p>
             <p className='border-2 p-3 hover:bg-[#5ff3ba] transition-all cursor-pointer rounded w-20 text-center border-[#39dfc9]  '> <TbEditCircle         className='mx-auto text-2xl'> </TbEditCircle>              <p className='mt-2  font-bold text-sm mx-auto border-b-2'>Update</p></p>
             <p className='border-2 p-3 hover:bg-[#5ff3ba] transition-all cursor-pointer rounded w-20 text-center border-[#39dfc9]  '> <RiDeleteBin6Fill     className='mx-auto text-2xl'> </RiDeleteBin6Fill>          <p className='mt-2  font-bold text-sm mx-auto border-b-2'>Delete</p></p>
             <p className='border-2 py-3 px-1 hover:bg-[#5ff3ba] transition-all cursor-pointer rounded w-20 text-center border-[#39dfc9]  '> <MdSecurityUpdateGood className='mx-auto text-2xl'> </MdSecurityUpdateGood>      <p className='mt-2  font-bold text-sm mx-auto border-b-2'>Complete</p></p>
           </div>
           <span className='mt-16 flex justify-center text-2xl '>⭐⭐⭐⭐⭐</span>
           <p className='mt-6 flex text-sm text-gray-500 justify-center '>Design & Developed By Forhad Hossain 📝</p>


           </div>
        </div>
        <img className='w-full h-[70%] ' src="https://img.freepik.com/free-vector/isometric-time-management-concept-illustrated_52683-55734.jpg?w=740&t=st=1707320257~exp=1707320857~hmac=84425663b8304d25da2eeb8050ac61f16455d0e01e2873dc6857f01cebe7b5ef" alt="" />
      </div>


    {/* smaller device  device feature  */}
    <div className='items-center pt-6 bg-[#151d2c]  md:hidden block relative w-full'>
     <h2 className='text-3xl text-center font-serif font-bold flex justify-center items-center gap-2 text-white'><span className='text-white'>To Do </span>  App <MdNoteAlt ></MdNoteAlt></h2>

    </div>
    

    {/* main part */}
     <div className='w-full md:w-[470px]  h-full  '>
       <div className='bg-[#151d2c] py-10 md:px-16 px-10 w-full h-full'>

          <div className=" w-full cursor-pointer justify-between    pb-3 flex items-center md:space-x-5 space-x-3"> 
           <span className=' flex items-center gap-1 justify-center '> <FaTasks> </FaTasks> Total Tasks: {totalTasks}    </span>  
           <span className=' flex items-center gap-1 justify-center text-green-300 '> <GrCompliance></GrCompliance> Completed Tasks: {completedTasks}  </span> 
          </div>
          <hr />

         <TaskForm addTask={addTask} />
         <div className='md:h-[60vh]  h-[70vh]  overflow-y-scroll'>
         <TaskList  tasks={tasks}  deleteTask={deleteTask}  editTask={editTask} toggleTaskStatus={toggleTaskStatus}   />
         </div>


       </div>
     </div>


    </div>
    </>
  );
};

export default App;
