import { Link } from "react-router-dom";
import Navegeshn from '../components/Navegeshn'


function LandingPage() {
  return (
  <div>
    <Navegeshn/>
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
    
      <h1 className="text-5xl font-bold mb-6">Welcome to Tasky</h1>
      <p className="mb-8 text-lg text-center max-w-md">
        Manage your tasks, stay organized, and boost your productivity.
      </p>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition"
        >
          Login
        </Link>
        <Link
          to="/Dashbord"
          className="border-2 border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition"
        >
          Go to Dashboard
        </Link>
      </div>
     
    </div>

  
  </div>
  );
}

export default LandingPage;
