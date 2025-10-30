import './index.css';
import Navegeshn from './components/Navegeshn.jsx';
import { Toaster } from 'sonner';
import { Routes, Route } from 'react-router-dom';
import TaskProvider, { TaskContext } from './contexts/TaskContext.jsx';
import TodoProvider from './contexts/TodoContext.jsx';
import ToolsProvider from './contexts/ToolsContext.jsx';
import HomeDashbord from './pages/HomeDashbord.jsx';
import Navpar from './components/Navpar.jsx';
import HomeReports from './pages/HomeReports.jsx';
import HomeToDo from './pages/HomeToDo.jsx';
import HomeTools from './pages/HomeTools.jsx';
import Login from './pages/Login.js';
import LandingPage from './pages/LandingPage.jsx';
import LoadingPage from './pages/LoadingPage.js';
import { useEffect, useContext } from 'react';

function App() {
  return (
    <TodoProvider>
      <TaskProvider>
        <ToolsProvider>
          <MainApp />
        </ToolsProvider>
      </TaskProvider>
    </TodoProvider>
  );
}

// ✅ هذا الجزء يحتوي على منطق التحميل بعد أن يكون TaskProvider فعّال
function MainApp() {
  
const { loading, setLoading } = useContext(TaskContext);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Dashbord/*"
          element={
            <div className="w-full overflow-x-hidden h-full bg-neutral-100">
              <Navegeshn />
              <div className="grid xl:grid-cols-[13%_87%] grid-cols-1 h-[calc(100vh)]">
                <main className="order-1 xl:order-2 mt-12 dark:bg-background-dark w-full">
                  <Routes>
                    <Route path="/" element={<HomeDashbord />} />
                    <Route path="Reports" element={<HomeReports />} />
                    <Route path="ToDo" element={<HomeToDo />} />
                    <Route path="Tools" element={<HomeTools />} />
                  </Routes>
                </main>
                <nav className="order-2 xl:order-1 w-full">
                  <Navpar className="xl:absolute" />
                </nav>
              </div>
            </div>
          }
        />
      </Routes>
      <Toaster closeButton richColors position="top-center" />
    </>
  );
}

export default App;
