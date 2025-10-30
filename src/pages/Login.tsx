import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';import PersonIcon from '@mui/icons-material/Person';
import { toast } from "sonner";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FlipCameraIosIcon from '@mui/icons-material/FlipCameraIos';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {TaskContext} from "../contexts/TaskContext"
import LoadingPage from "./LoadingPage.js";
interface FormState { 
    First_Name: string,
    Last_Name: string,
    Email: string,
    Password: string | number,
    Profile_Image?: File | null,
   
}

  const Login: React.FC =()=> {


  const { setLoading } = useContext(TaskContext);
  const [formData, setFormData] = useState<FormState>({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
    Profile_Image: null,
    
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  // ✅ دالة موحدة لتحديث أي input
const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    // لو الحقل خاص بالصورة
    if (name === "Profile_Image" && files && files.length > 0) {
      const file:any = files[0];
      const imageUrl = URL.createObjectURL(file);

      // حفظ الصورة داخل formData + عرضها مؤقتًا
      setFormData({ ...formData, [name]: file as File });
      setSelectedImage(imageUrl);
    } else {
      // لأي حقل عادي
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleClickShowPassword = () => setShowPassword((s) => !s);

  
  const validateForm = () => {
  if (!formData.Email.trim() || !formData.Password.toString().trim()) {
    toast.error("All fields are required");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.Email)) {
    toast.error("Invalid email format");
    return false;
  }

  if (formData.Password.toString().length < 8) {
    toast.error("Password too short");
    return false;
  }

  return true;
};



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
     
 

  if (!validateForm()) return;

  toast.success(isLogin ? "Logged in successfully!" : "Account created successfully!");
  setFormData({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
    Profile_Image: null,
  })
 
  navigate(-1)
  console.log(formData)
};
  
const thame = {
  input: {
    color: '#EEEEEE',
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 30px rgba(255,255,255,0.0) inset !important',
      WebkitTextFillColor: 'white !important',
      transition: 'background-color 5000s ease-in-out 0s',
    },
  },
  label: { color: 'white' },
  '& .MuiInput-underline:before': { borderBottomColor: 'white' },
  '& .MuiInput-underline:hover:before': { borderBottomColor: '#90caf9' },
  '& .MuiInput-underline:after': { borderBottomColor: 'white' },
};


  return (
   <div className="bg-[url('https://img.freepik.com/premium-vector/padlock-with-keyhole-icon-personal-data-security-illustrates-cyber-data-information-privacy-idea-blue-color-abstract-hi-speed-internet-technology_542466-600.jpg')] bg-no-repeat bg-cover bg-center h-screen w-screen flex justify-center items-center pt-4 ">
    
 <motion.div
  initial={{ opacity: 0, y: 50, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className={` w-full  ${
    !isLogin ? "h-5/6" : "h-auto"
  } xs:h-auto sm:w-[550px] p-1.5 xs:p-4 md:p-6 flex justify-center 
  bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl 
  shadow-lg shadow-white/20 absolute `}>
    <form
      onSubmit={handleSubmit}
      className=" w-full p-2 xl:rounded-xl text-center text-white"
    >
      
      {isLogin ? (
        <div className="flex flex-col gap-5">
         <h2 className="font-abhaya text-4xl py-5 ">{isLogin && ("Login")}</h2>
          <TextField
            sx={thame}
            className="text-white"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            variant="standard"
            label="Email"
            type="email"
          />

          <TextField
            sx={thame}
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            variant="standard"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment  position="end">
                  <IconButton sx={{color:"wheat"}} onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {/* <h2 className="font-abhaya text-2xl p-3 font-extrabold">{!isLogin && ("Sing Up")}</h2> */}
          {/* رفع الصورة */}
          <label htmlFor="upload-image" className=" required " style={{ position: "relative", top: "-65px" }}>
            <input
              accept="image/*"
              id="upload-image"
              type="file"
              name="Profile_Image"
              style={{ display: "none" }}
              onChange={handleChange}
            />

            {selectedImage ? (
  <div  className=" absolute w-28 h-28 mx-auto group relative">
    <img
      src={selectedImage}
      alt="Profile"
      className="w-full h-full object-cover rounded-full border-2 border-gray-300"
    />
    <FlipCameraIosIcon
      className="bg-slate-700 p-1 text-white rounded-full absolute bottom-2 right-0"
      sx={{ fontSize: 27 }}
    />

     <span className="absolute bottom-0 right-28 bg-gray-800 text-white text-xs px-2 py-2 w-full rounded-tl-xl rounded-bl-xl rounded-br-xl opacity-0 group-hover:opacity-100 transition">
        Updeat phuto
      </span>

      <h3 className="text-center tetx-md sm:text-2xl font-abhaya">Sing in</h3>
  </div>
) : (
  <div className="relative group w-28 h-28 mx-auto">
    <Button
      component="span"
      variant="contained"
      disableElevation
      disableRipple
      className="w-28 h-28 rounded-full flex justify-center items-center"
      sx={{ borderRadius: "9999px" }}
    >
      <PersonIcon sx={{ fontSize: 80 }} />
    </Button>

    <div className="absolute bottom-8 -right-11 group relative">
      <CameraAltIcon
        className="bg-slate-700 p-1 rounded-full text-white"
        sx={{ fontSize: 27 }}
      />
      <span className="absolute bottom-13 right-40 bg-gray-800 text-white text-xs px-2 py-2 w-20 rounded-tl-xl rounded-bl-xl rounded-br-xl opacity-0 group-hover:opacity-100 transition">
        Add phuto
      </span>
      
    </div>
    <h3 className="text-center tetx-md sm:text-2xl font-abhaya">Sing in</h3>
  </div>
)}

          </label>

          {/* باقي الحقول */}
          <TextField sx={thame} name="First_Name" value={formData.First_Name} onChange={handleChange} variant="standard" label="First Name" type="text" />
          <TextField sx={thame} name="Last_Name" value={formData.Last_Name} onChange={handleChange} variant="standard" label="Last Name" type="text" />
          <TextField sx={thame}  name="Email" value={formData.Email} onChange={handleChange} variant="standard" label="Email" type="email" />
          <TextField
            sx={thame}
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            variant="standard"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment  position="end">
                  <IconButton sx={{color:"wheat"}} onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      )}

    <p className={`${!isLogin ? "pt-16 py-3" : "pt-16 py-3"}`}>
  <span
    className="cursor-pointer flex justify-center items-center gap-1 text-blue-400 hover:text-blue-500 transition"
  >
    {isLogin ? (
      <p className="flex items-center gap-1 ">
        <span className="text-text-dark text-lg font-abhaya">Don’t have an account?</span>
        <a onClick={() => setIsLogin(!isLogin)} className="font-semibold text-lg font-abhaya">Sign in</a>
      </p>
    ) : (
      <p className="flex items-center gap-1">
        <span className="text-text-dark text-lg font-abhaya">Already have an account?</span>
        <a   onClick={() => setIsLogin(!isLogin)} className="font-semibold text-lg font-abhaya">Login</a>
      </p>
    )}
  </span>
</p>

      <button type="submit" className={` bg-blue-600 w-full text-white py-2 px-10 rounded-xl ${!isLogin ? "mt-2":"my-5"}`}>
        Submit
      </button>
       
    </form>
  </motion.div>
<span
  onClick={()=>navigate(-1)}
  className="
    text-white 
    absolute 
    top-20 sm:top-10 md:top-8 lg:top-10 
    right-4 sm:right-8 md:right-10 lg:right-14 
    cursor-pointer 
    transition-transform 
    hover:translate-x-5 
  "
>
  <ArrowForwardIcon sx={{ fontSize: { xs: 28, sm: 32, md: 36, lg: 40 } }} />
</span>
  
</div>

  );
}

export default Login
