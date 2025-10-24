import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from '@mui/icons-material/Person';
import { toast } from "sonner";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FlipCameraIosIcon from '@mui/icons-material/FlipCameraIos';
// import Bott_dark from "../components/Ui/Bott_dark.jsx";


interface FormStet{ 
    First_Name: string,
    Last_Name: string,
    Email: string,
    Password: string | number,
    Profile_Image?: File | null,
   
}

  const Login: React.FC =()=> {



  const [formData, setFormData] = useState<FormStet>({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
    Profile_Image: null,
    
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

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
   <div className="bg-[url('https://img.freepik.com/premium-vector/padlock-with-keyhole-icon-personal-data-security-illustrates-cyber-data-information-privacy-idea-blue-color-abstract-hi-speed-internet-technology_542466-600.jpg')] bg-no-repeat bg-cover bg-center h-screen w-screen flex justify-center items-center">

  <div className=" w-full h-full pt-24 xl:w-2/5 bg-white/20 backdrop-blur-lg border border-white/30 xl:rounded-xl shadow-lg shadow-white/20">
    <form
      onSubmit={handleSubmit}
      className="h-full p-3 xl:rounded-xl text-center text-white"
    >
      <h2 className={`z-20 ${!isLogin ? "relative top-20 " : ""} text-2xl font-bold`}>
        {isLogin ? "Login" :"Sing Up"}
      </h2>

      {isLogin ? (
        <div className="flex flex-col gap-3 pt-28">
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
        <div className="flex flex-col gap-3">
          {/* رفع الصورة */}
          <label htmlFor="upload-image" className=" relative " style={{ position: "relative", top: "-110px" }}>
            <input
              accept="image/*"
              id="upload-image"
              type="file"
              name="Profile_Image"
              style={{ display: "none" }}
              onChange={handleChange}
            />

            {selectedImage ? (
              <div className="w-32 h-32 border-red-400">
                <img
                  src={selectedImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-gray-300 ml-[160px]"
                />
                <FlipCameraIosIcon className="bg-slate-700 p-1 text-white rounded-full absolute bottom-3 right-44" sx={{ fontSize: 27 }} />
              </div>
            ) : (
              <Button
                component="span"
                variant="contained"
                disableElevation
                disableRipple
                className="w-32 h-32 rounded-full flex justify-center items-center bg-red-600"
                sx={{ borderRadius: "9999px" }}
              >
                <PersonIcon sx={{ fontSize: 80 }} />
                <CameraAltIcon className="bg-slate-700 p-1 rounded-full absolute bottom-3 right-1" sx={{ fontSize: 27 }} />
              </Button>
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

      <p onClick={() => setIsLogin(!isLogin)} className="text-blue-400 cursor-pointer mt-10">
        {isLogin ? "إنشاء حساب" : "تسجيل الدخول"}
      </p>

      <button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg">
        Submit
      </button>
    </form>
  </div>
</div>

  );
}

export default Login
