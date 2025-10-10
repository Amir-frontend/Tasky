import React, { useEffect, useState } from "react";

export default function Bott_dark() {
  const [darkMode, setDarkMode] = useState(false);

  // أول ما الصفحة تفتح، نشوف الوضع المحفوظ
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // زرار التبديل
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <button
  onClick={toggleDarkMode}
  className={`flex items-center w-32 gap-2 mt-10 mx-auto px-4 py-2 rounded-xl transition duration-300 
              ${darkMode 
                ? "bg-slate-100 text-black font-medium" 
                : "bg-background-dark text-text-dark font-medium"}`}
>
  {darkMode ? "🌙 Dark" : "☀️ Light"}
</button>
  );
}
