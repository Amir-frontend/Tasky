import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import Useradmin from './Useradmin';
import TypeInput from './Ui/TypeInput';
import { useLocation } from 'react-router-dom';

export default function Navegeshn() {
  const{setOpan} = useContext(TaskContext);
  const location = useLocation();

  const pagenames = {
    "/": "Dashboard",
    "/HomeReports": "Reports",
    "/ToDo": "ToDo",
    "/Tools": "Tools",
    "/settings": "settings",
  }
  const pagetitle = pagenames[location.pathname] || "Tasky";

  return (
    <div className='w-full h-12 bg-white transition-colors dark:bg-secondary-dark flex items-center justify-between px-5 fixed xs:h-16 z-20'>
      
      <h2 className='font-abhaya font-black text-xl md:text-1xl lg:text-2xl md:ml-9 xl:ml-11 xl:text-3xl dark:text-text-dark'>TASK<span className='text-primary' >Y.</span></h2>

      <div className='flex xl:gap-3 xl:flex items-center justify-start'>
         <span className=' dark:text-text-dark text-left hidden md:flex'><MenuIcon sx={{fontSize:35}}/></span> 
        <p className=' text-xl xl:mr-96 font-abhaya dark:text-text-dark text-left'>{pagetitle}</p>
      </div>
      
      
   <TypeInput 
  placeholder="search..."
  wrapperClass="relative flex items-center w-2/12"
  inputClass="dark:text-text-dark w-full xl:h-9 px-2 dark:bg-background-dark bg-slate-200 h-9 text-sm rounded-xl xl:px-3 xl:pr-10"
  iconClass="dark:text-text-dark z-20 right-4"
  contenr='w-full '
/>

    
      <div className='xl:hidden' onClick={()=> setOpan(true)}>
          <MenuIcon className='dark:text-text-dark ' sx={{fontSize: 35}} />
      </div>
        <Useradmin users="xsm:hidden xl:flex items-center"/>
     
    </div>

    
  )
}
