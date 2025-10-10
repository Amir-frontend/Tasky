import React, { useContext } from 'react';
import IconsBackground from '../components/IconsBackground';
import RefreshIcon from '@mui/icons-material/Refresh';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FolderIcon from '@mui/icons-material/Folder';
import { TaskContext } from '../contexts/TaskContext';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import PauseIcon from '@mui/icons-material/Pause';
import ViewProjects from '../components/ViewProjects';
import ViewToDo from '../components/ViewToDo';
import Touls from '../components/Touls'

export default function HomeDashbord({ClassName}) {

  
  const {Formatted , ResatTimer, toggleTimer,isRunning , CurrentTime} = useContext(TaskContext)
  return (                    
    <div className={`w-full flex flex-col justify-center  sx:bg-gradient-to-tlsx:from-[#908F8F] sx:to-[#F6F5F5] h-full pb-12  xl:bg-[#ffffff15]
                     shadow-sm pt-12 px-1 rounded-tl-xl dark:bg-background-dark transition-colors ${ClassName}`}>
     {/* <IconsBackground/> */}
      <div className='w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:px-10 '>
         <div className='hidden xl:flex lg:col-span-3 justify-end '>
            <Touls stelyicon="text-black bg-primary" name1="Today" name2={CurrentTime} name3="Start Time Tracker" icon={isRunning ? PauseIcon : PlayArrowIcon} fonts1="text-4xl" fonts2='text-lg xl:text-xl font-bold ' clackmy={toggleTimer} 
                   className='w-9/12 xl:bg-inherit shadow-none' starts=" dark:bg-background-dark bg-white w-[400px] h-24 flex justify-between px-3 items-center rounded-xl shadow-none" handleClick={toggleTimer}/>
         </div>
       
      
        <Touls stelyicon="mt-12" name1="Today" name2={CurrentTime} icon={isRunning ? PauseIcon : PlayArrowIcon} fonts2='text-lg font-bold pt-4 md:pt-7' clackmy={toggleTimer} home='bg-red' className='xl:hidden shadow-sm shadow-slate-200' handleClick={toggleTimer}/>
        <Touls stelyicon="mt-12" name1="Weekly Activity" name2="0%" icon={CallSplitIcon} fonts2='text-4xl md:pt-7' />
        <Touls stelyicon="mt-12" name1="Worked This Week"  name2={Formatted} icon={RefreshIcon} fonts2='text-4xl font-bold md:pt-7' clackmy={ResatTimer} handleClick={ResatTimer} className='shadow-sm shadow-slate-200'/>
        <Touls stelyicon="mt-12" name1="Project Worked" name2="00" icon={FolderIcon} fonts2='text-4xl md:pt-7' className='shadow-sm shadow-slate-200'/>
     </div>
     <div>
      
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 px-4 lg:px-14 pt-7">
           <div className="w-full md:w-1/2">
             <ViewProjects projectTimer="00:55:10" name="Projects"/>
           </div>
           <div className="w-full md:w-1/2">
             <ViewToDo projectTimer="00:00:00" name=""/>
           </div>
        </div>

     </div>
  </div>
  )
}