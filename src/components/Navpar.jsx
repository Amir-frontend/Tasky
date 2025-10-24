import React, { useContext } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DonutSmallRoundedIcon from '@mui/icons-material/DonutSmallRounded';
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import { TaskContext } from '../contexts/TaskContext';
import Useradmin from './Useradmin'
import {NavLink} from 'react-router-dom'
import Bott_dark from './Ui/Bott_dark';

export default function Navpar() {
  const { setOpan, shouldShow, isLargeScreen,wrapperClasses,innerClasses } = useContext(TaskContext);


  return (
    <>
      {shouldShow || isLargeScreen ? (
        <div
          onClick={() => !isLargeScreen && setOpan(false)}
          className={` ${wrapperClasses}`}
        >
          <div className={` bg-white  dark:bg-secondary-dark ${innerClasses}`}>
            {!isLargeScreen && (
              <div onClick={() => setOpan(false)}>
                <ClearIcon
                  sx={{ fontSize: 45 }}
                  className="text-red-700 absolute right-5 top-3"
                />
              </div>
            )}

            <ul className=" mt-24 w-full flex flex-col items-center gap-1 text-abhaya">
              <li className="w-full h-full flex justify-center">
                <NavLink to="/Dashbord/" end  className={({ isActive }) => `text-lg w-9/12 p-3 dark:text-text-dark transition-colors rounded-2xl font-abhaya flex items-center ${
                            isActive ? 'bg-black text-white dark:text-text' : 'hover:bg-black hover:text-white'}`}>
                  <DashboardIcon sx={{ fontSize: 27 }} className="mr-1 pb-1" />
                  Dashboard
                </NavLink>
              </li>

              <li className="w-full h-full flex justify-center">
                <NavLink to="/Dashbord/Reports"
                  className={({ isActive }) =>`text-lg w-9/12 p-3 dark:text-text-dark rounded-2xl font-abhaya flex items-center ${
                          isActive ? 'bg-black text-white dark:text-text' : 'hover:bg-black hover:text-white'}`}>
                  <DonutSmallRoundedIcon sx={{ fontSize: 27 }} className="mr-1 pb-1" />
                  Reports
                </NavLink>
              </li>

              <li className="w-full h-full flex justify-center">
                <NavLink to="/Dashbord/ToDo" 
                className={({ isActive }) =>`text-lg w-9/12 p-3 dark:text-text-dark rounded-2xl font-abhaya flex items-center ${
                              isActive ? 'bg-black text-white dark:text-text' : 'hover:bg-black hover:text-white' }` }>
                  <AssignmentSharpIcon sx={{ fontSize: 27 }} className="mr-1 pb-1" />
                  Todo
                </NavLink>
              </li>

              <li className="w-full h-full flex justify-center">
                <NavLink to="/Dashbord/Tools" 
                 className={({ isActive }) => `text-lg w-9/12 p-3 dark:text-text-dark rounded-2xl font-abhaya flex items-center ${
                             isActive ? 'bg-black text-white dark:text-text' : 'hover:bg-black hover:text-white'}`}>
                 <BuildIcon sx={{ fontSize: 27 }} className="mr-1 pb-1" />
                  Tools
                </NavLink>
              </li>

              <li className="w-full h-full flex justify-center">
                <NavLink to="/Login" 
                 className={({ isActive }) =>`text-lg w-9/12 p-3 dark:text-text-dark rounded-2xl font-abhaya flex items-center ${
                              isActive ? 'bg-black text-white dark:text-text' : 'hover:bg-black hover:text-white'}`}>
                 <SettingsIcon sx={{ fontSize: 27 }} className="mr-1 pb-1" />
                  Settings
                </NavLink>
              </li>
             
            </ul>

            <Bott_dark/>

            <Useradmin users="xl:hidden flex items-center ml-8 mt-28" />
          </div>
        </div>
      ) : null}
    </>
  );
}


