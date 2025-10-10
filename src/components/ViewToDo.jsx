import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';

export default function ViewToDo({projectTimer,name}) {
  return (
    <div className=' h-80 w-full dark:bg-secondary-dark bg-white rounded-xl xs:px-6 px-2.5 py-5 shadow-lg'>
                 <h4 className='text-3xl font-abhaya text-center xs:text-start dark:text-text-dark'>ToDo</h4>
        

              <div className='flex  gap-3 border-[1px] border-gray-400 rounded-xl py-1.5 mt-5 flex-col xs:flex-row'>
                  <div className='flex px-3 xs:w-96 '><div className='bg-primary px-2 py-1.5 rounded-lg'><FolderIcon className='text-black ' /></div>
                    <p className='text-2xl pl-3 pt-1 font-abhaya dark:text-text-dark'> {name} </p>
                 </div> 
        
                 <div className='flex items-center gap-3 w-full px-2 '>
                    <div className='bg-yellow-200 rounded-lg '><p className='px-2 py-1 text-sm xs:text-base font-abhaya'> {projectTimer} </p></div>
                    <div className='w-full h-1 bg-slate-300'>
                      <div className='h-1 w-10/12 bg-primary'>
                      </div>
                   </div>
                 </div> 
              </div>

          <div className='bg-black w-24 text-center rounded-lg relative -right-[420px] top-32'>
            <p className='text-white py-1.5' >ViewAll</p>
          </div>
              
  </div>
)}
