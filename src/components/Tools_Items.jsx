import React from 'react';
import { useContext } from 'react';
import { ToolsContext } from '../contexts/ToolsContext';
// import { motion } from "motion/react";
import randomColor from 'randomcolor';


export default function Tools_Items() {
  
  const {ToolsFilter} =useContext(ToolsContext)
  const defaultLogo = "https://via.placeholder.com/40";

  return (
    <div className='w-full h-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 mx-auto justify-center gap-5 px-3 sm:px-0 mt-7 '>
      {ToolsFilter.map((Item) => {
      const randomcolor = randomColor({seed:Item.Title,luminosity:"bright"})
      
      return( <div
        style={{ originX: 0.5,border: `1px solid ${randomcolor}`}}
          key={Item.id}
          className={`w-full h-32 border-gray-400 rounded-md hover:shadow-lg transition shadow-md dark:shadow-slate-700 shadow-slate-150 overflow-hidden`}
          
           >
          <a
            className="flex items-start pt-6 pl-6 gap-3 h-full"
            href={Item.Url}
            target="_blank"
            rel="noopener noreferrer"
          >

            {Item.img && (
             <img className='w-16 h-16' src={Item.img || defaultLogo} alt={Item.Title} />

            )}

            {/* النصوص */}
            <div className='w-full h-auto mr-1'>
              <h2 className="font-bold text-lg dark:text-text-dark text-text font-abhaya">{Item.Title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 pr-4 h-auto break-words font-abhaya">
                {Item.text}
              </p>
            </div>
          </a>
        </div>
      )})}
    </div>
  )
}
