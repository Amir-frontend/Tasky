import React from 'react';
import Input_todo from '../components/Input_todo';
import Button_to from '../components/Bottons_to';
import Filtertask from '../components/Filtertask';
import Tasks from '../components/Tasks';
import { useContext } from 'react';
import {TodoContext} from '../contexts/TodoContext';


export default function HomeToDo() {


  const { menuOpen ,setMenuOpen } = useContext(TodoContext);


  return (
  <div className=" dark:bg-background-dark mt-4 pt-20 flex justify-center relative">
      {menuOpen && ( <div onClick={()=>setMenuOpen(false)} className=" absolute inset-0 w-full h-full z-10"></div>)}
  <div className="w-full md:w-8/12">
    <Input_todo />
    <Button_to />
    <Tasks  />
  </div>
</div>

  )
}
