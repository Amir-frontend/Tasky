import React from 'react'
import { useContext } from 'react';
import { ToolsContext } from '../contexts/ToolsContext';
export default function Boot_Tools() {

  const {ButtonLoop ,setActiveFilter} = useContext(ToolsContext)


  return (
    <div >
      <button onClick={()=>setActiveFilter("All")}
         className="px-2 py-1 text-sm focus:text-base  focus:bg-black focus:text-text-dark rounded-2xl text-text dark:text-text-dark font-abhaya">
        All
      </button>
      {ButtonLoop.map((cat) => (
        <button 
          onClick={()=>setActiveFilter(cat)} 
          key={cat} 
          className="px-2 py-1 text-sm focus:text-base focus:bg-black focus:text-text-dark rounded-2xl text-text dark:text-text-dark font-abhaya"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
