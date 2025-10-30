import React, { createContext, useState, useEffect } from 'react';

//===================================
export const TaskContext = createContext();
// ============ start Time ===============
export default function TaskProvider({ children }) {
  const [opan, setOpan] = useState(false);
  const [time, setTime] = useState(0);
  const [isRunning , setIsRunning] = useState(false)
    const[loading , setLoading] = useState(true)

  useEffect(() => {
    let interval;
    if(isRunning){
      interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    }
    else{
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const hrs = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const secs = time % 60;
  

  const Formatted =
    String(hrs).padStart(2, '0') + ':' +
    String(mins).padStart(2, '0') + ':' +
    String(secs).padStart(2, '0');

    const toggleTimer = () => {
    setIsRunning(prev => !prev);
  };
    const ResatTimer = ()=>{
      setIsRunning(false)
      setTime(0)
    }

    // ======= end Time ====================
    // 

    const [CurrentTime , setCurrentTime] = useState('')
    useEffect(()=>{

      const updeatTime = ()=>{
        const now = new Date()

        const day = now.toLocaleDateString('en-US', {weekday:'short'});
  
        const time = now.toLocaleDateString( 'en-US',{
          hour:'2-digit',
          minute:'2-digit',
          hour12:true,
        })
      setCurrentTime(` ${day} ${time} `)
      }
      updeatTime();

      const interval = setInterval(updeatTime , 1000) 
      return ()=> clearInterval(interval)

    },[])



      const [isLargeScreen, setIsLargeScreen] = useState(false);

  // 👇 نتحقق إذا الشاشة كبيرة
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280); // 1024px = lg في Tailwind
    };

    handleResize(); // للتنفيذ أول مرة
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 👇 نحدد إذا كان مفروض يظهر الـ Navbar ولا لأ
  const shouldShow = opan || isLargeScreen;

    const wrapperClasses = isLargeScreen
    ? 'static block h-full fixed w-[210px] mt-16 '
    : `fixed top-0 z-40 w-full h-[100vh] ${shouldShow ? 'right-0' : '-right-full'}`;

    const innerClasses = isLargeScreen
  ? 'w-full h-full  flex flex-col shadow-md'
  : `w-48 h-[100vh]  float-end fixed top-0 flex flex-col shadow-md transition-all duration-[5000ms] ease ${
      shouldShow ? 'right-0' : '-right-48'
    }`;

  return (
    <TaskContext.Provider value={{
      shouldShow,
      opan,
      setOpan,
      Formatted,
      ResatTimer,
      toggleTimer,
      isRunning,
      CurrentTime,
      isLargeScreen,
      wrapperClasses,
      innerClasses,
      loading,
      setLoading
     
    }}>
      {children}
    </TaskContext.Provider>
  );
}


