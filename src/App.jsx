// App.jsx
import './index.css'

import Navegeshn from './components/Navegeshn';
import { Toaster } from 'sonner';
import {Routes , Route} from 'react-router-dom'
import TaskProvider from './contexts/TaskContext';
import TodoProvider from './contexts/TodoContext.jsx';
import ToolsProvider from './contexts/ToolsContext.jsx';
import HomeDashbord from './pages/HomeDashbord.jsx'
import Navpar from './components/Navpar.jsx'
import HomeReports from './pages/HomeReports.jsx';
import HomeToDo from './pages/HomeToDo.jsx';
import HomeTools from './pages/HomeTools.jsx';

function App() {
  return (
  <>
  <TodoProvider>
  <TaskProvider>
    <ToolsProvider>
<div className="w-full overflow-x-hidden h-full bg-neutral-100 ">
          <Navegeshn />
          
          <div className="grid xl:grid-cols-[15%_85%] grid-cols-1 h-[calc(100vh)]">
      
            <main className="order-1 xl:order-2 mt-12 dark:bg-background-dark w-full">
               <nav>
                 <Routes>
                   <Route path='/' element={<HomeDashbord/>} />
                   <Route path='/HomeReports' element={<HomeReports/>} />
                   <Route path='/ToDo' element={<HomeToDo/>} />
                   <Route path='/Tools' element={<HomeTools/>} />
                 </Routes>
               </nav>
            </main>
    
            {/* Home عايزها على الشمال */}
            <nav className="order-2 xl:order-1 w-full">
              <Navpar clasname="xl:absolute" />
            </nav>
          </div>
        </div>
        <Toaster 
        closeButton
        richColors 
        position='top-center'/>
  </ToolsProvider>
  </TaskProvider>
  </TodoProvider>
  </>

  );
}

export default App;
