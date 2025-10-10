import React, { useState, useRef, useEffect, createContext } from "react";
import {toast} from 'sonner'
export const TodoContext = createContext();

export default function TodoProvider({ children }) {

  const [newtask, setNewtask] = useState("");
  const [open , setOpen] = useState(false);
  const [filter , setFilter] = useState("All")
  const [menuOpen, setMenuOpen] = useState(false);


  // حفظ المهام في localstring

    const [tasks, setTasks] = useState(()=>{
    const SaveTasks = localStorage.getItem("tasks");
    return SaveTasks ? JSON.parse(SaveTasks):[];
  }); 


    const textareaRef = useRef(null);
  // دالة فلتره المهام
  const TaskFiltr = tasks.filter(task =>{
    if(filter === "All") return true;
    if(filter === "Done") return task.done;
    if(filter === "NotDone") return !task.done; 
    
  })

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));  
  },[tasks])



  // دالة اضافه مهمه جديدا
const clickbuton = () => {
  console.log("تم استدعاء clickbuton ✅");
  if (newtask.trim() === "") return;
  setTasks([...tasks, { id:tasks.length +1, text:newtask, done:false }]);
  setNewtask(""); 
  toast.success("تم اضافة مهمة بنجاح")
  if (textareaRef.current) {
    textareaRef.current.style.height = "48px";
  }
};

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "48px";
      if (textarea.scrollHeight > 55) {
        textarea.style.height =
          Math.min(textarea.scrollHeight, 192) + "px"; // max-h-48
      }
    }
  }, [newtask]);

  return (
    <TodoContext.Provider
      value={{
        tasks,
        setTasks,
        clickbuton,
        textareaRef,
        newtask,
        setNewtask,
        open,
        setOpen,
        TaskFiltr,
        filter,
        setFilter,
        menuOpen,
        setMenuOpen
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
