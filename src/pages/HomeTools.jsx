import React from 'react'
import Boot_Tools from '../components/Boot_Tools'
import TypeInput from '../components/Ui/TypeInput'
import Tools_Items from '../components/Tools_Items'
export default function HomeTools() {
  return (
    <div className='dark:bg-background-dark w-full h-full py-6 text-white sm:px-3 lg:px-10 xl:px-16'>
      <TypeInput 
        title='Tools'
        placeholder="search..."
        wrapperClass="relative flex items-center justify-center justify-between mt-7 mx-auto px-2"
        inputClass="dark:text-text-dark w-full xl:h-9 px-2 dark:bg-secondary-dark bg-slate-200 h-10 text-sm rounded-xl  xl:pr-10"
        iconClass="dark:text-text-dark z-20 right-4"
        contenr='relative w-6/12 flex justify-between'
      />
      <Boot_Tools/>
      <Tools_Items/>
    </div>
  )
}
