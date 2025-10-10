import React from 'react';

export default function Tools({ name1, name2,name3, icon: Icon, fonts1, fonts2, handleClick, className, starts,stelyicon}) {
  return (
    <div className={` ${className} flex items-center justify-between mx-3 h-32 px-7 dark:bg-secondary-dark bg-white my-5 rounded-xl lg:h-44 shadow-md dark:shadow-secondary-dark`}>
      <div className='w-full flex flex-col gap-2'>
        <p className={`text-2xl xl:text-3xl font-abhaya dark:text-text-dark ${fonts1}`}>{name1}</p>
        <p className={`font-abhaya dark:text-text-dark ${fonts2}`}>{name2}</p>
      </div>

      {Icon && (
      
      <div className={` ${starts}  `}>
         <p className='text-xl dark:text-text-dark '> {name3} </p>
        <div className={`bg-primary w-11 h-11 xs:w-14 xs:h-14  rounded-xl flex justify-center items-center ${stelyicon}`} onClick={handleClick}>
          <Icon sx={{ fontSize: 30 }} />
        
        </div>
      </div>

      )}
    </div>
  );
}
