// Bottons_to.jsx
import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext';

export default function Bottons_to() {
  const { filter, setFilter } = useContext(TodoContext);

  // دالة مساعده لإرجاع كلاس لو الزرار Active
  const getButtonClass = (type) =>
    `text-sm sm:text-xl p-1 w-28 h-10 rounded-xl border-2 font-bold font-abhaya
    ${filter === type 
      ? "bg-black text-white border-black dark:bg-secondary-dark"  // active
      : "border-black dark:bg-text-dark"} 
    hover:bg-secondary`;

  return (
    <div className="w-full p-7 flex sm:flex-row justify-center items-center gap-4 sm:gap-8">
      
  
      
  
      
      <button 
        onClick={() => setFilter("Done")} 
        className={getButtonClass("Done")}
      >
        Done
      </button>
          <button 
        onClick={() => setFilter("NotDone")} 
        className={getButtonClass("NotDone")}
      >
        NotDone
      </button>
          <button 
        onClick={() => setFilter("All")} 
        className={getButtonClass("All")}
      >
        All
      </button>
      
    </div>
  );
}
