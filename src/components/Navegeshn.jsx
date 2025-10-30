import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import Useradmin from './Useradmin';
import TypeInput from './Ui/TypeInput';
import { useLocation } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
export default function Navegeshn() {
  const{setOpan} = useContext(TaskContext);
  const location = useLocation();

  const pagenames = {
    "/Dashbord/": "Dashboard",
    "/Dashbord/Reports": "Reports",
    "/Dashbord/ToDo": "ToDo",
    "/Dashbord/Tools": "Tools",
    "/Dashbord/settings": "settings",
  }
  const pagetitle = pagenames[location.pathname] || "Tasky";

  return (
    <div className='w-full h-12 bg-white transition-colors dark:bg-secondary-dark flex items-center justify-between px-5 fixed xs:h-16 z-20'>
      
    <div className='flex'>
       <NavLink to="/" >
        <h2 className='font-abhaya font-black text-xl md:text-1xl lg:text-2xl md:ml-9 sm:pr-[50px] xl:ml-11 xl:text-3xl dark:text-text-dark'>TASK<span className='text-primary' >Y.</span></h2>
       </NavLink>
      {location.pathname.includes("/Dashbord") && (
 
        <div className='flex xl:flex items-center justify-start'>
         <span className=' dark:text-text-dark text-left hidden md:flex'><MenuIcon sx={{fontSize:35}}/></span> 
        <p className=' text-xs px-1 md:text-xl  font-abhaya dark:text-text-dark text-left'>{pagetitle}</p>
      </div>
      )}
    </div>
   <TypeInput 
  placeholder="search..."
  wrapperClass="relative flex items-center hidden sm:flex "
  inputClass="dark:text-text-dark w-full xl:h-9 px-2 dark:bg-background-dark bg-slate-200 h-9 text-sm rounded-xl xl:px-3 xl:pr-10"
  iconClass="dark:text-text-dark z-20 right-4"
  contenr='w-full'
/>

    
      <div className='xl:hidden ' onClick={()=> setOpan(true)}>
          <MenuIcon className='dark:text-text-dark ' sx={{fontSize: 35}} />
      </div>
        <Useradmin users="xsm:hidden xl:flex items-center "/>
     
    </div>
  )
}
