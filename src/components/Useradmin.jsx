import React from 'react'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';

export default function Useradmin({users}) {
  return (
    <div className={`${users} gap-2 w- `} >
        <div className='xl:order-2 bg-teal-800 w-10 h-10 rounded-full flex justify-center items-center '> 
            <PersonSharpIcon className='text-teal-600'/>
        </div>
        <div className=" xl:order-1">
                <p className="text-md font-abhaya dark:text-text-dark ">Amir mohammd</p>
                
         </div>
     </div>
    
  )
}
