import React from 'react'
import { createContext , useState} from 'react';
import Logo from "../assets/Google2.webp";
export const ToolsContext = createContext()

export default function ToolsProvider({children}) {
const Tools = [
  // 🎨 Fonts
  {
    id: 1,
    Url: "https://fonts.google.com/",
    Title: "Google Fonts",
    img: "https://www.google.com/s2/favicons?sz=64&domain=fonts.google.com",
    text: "Explore free fonts from Google.",
    type: "Fonts",
  },
  {
    id: 2,
    Url: "https://www.dafont.com/",
    Title: "DaFont",
    img: "https://www.dafont.com/favicon.ico",
    text: "Download thousands of free fonts.",
    type: "Fonts",
  },
  {
    id: 3,
    Url: "https://fontsquirrel.com/",
    Title: "Font Squirrel",
    img: "https://www.fontsquirrel.com/favicon.ico",
    text: "Free fonts for commercial use.",
    type: "Fonts",
  },

  // 🖼️ Icons
  {
    id: 4,
    Url: "https://www.flaticon.com/",
    Title: "Flaticon",
    img: "https://www.flaticon.com/favicon.ico",
    text: "Millions of free icons in various styles.",
    type: "Icons",
  },
  {
    id: 5,
    Url: "https://heroicons.com/",
    Title: "Heroicons",
    img: "https://heroicons.com/favicon.ico",
    text: "Beautiful hand-crafted SVG icons.",
    type: "Icons",
  },
  {
    id: 6,
    Url: "https://lucide.dev/icons/",
    Title: "Lucide Icons",
    img: "https://lucide.dev/favicon.ico",
    text: "Open source icons library for React and more.",
    type: "Icons",
  },

  // 🎨 Colors
  {
    id: 7,
    Url: "https://coolors.co/",
    Title: "Coolors",
    img: "https://coolors.co/favicon.ico",
    text: "Generate color palettes easily.",
    type: "Colors",
  },
  {
    id: 8,
    Url: "https://colorhunt.co/",
    Title: "Color Hunt",
    img: "https://colorhunt.co/img/colorhunt-favicon.svg",
    text: "Curated color palettes for inspiration.",
    type: "Colors",
  },
  {
    id: 9,
    Url: "https://mycolor.space/",
    Title: "MyColorSpace",
    img: "https://mycolor.space/favicon.ico",
    text: "Gradient and color palette generator.",
    type: "Colors",
  },

  // 💻 Programming
  {
    id: 10,
    Url: "https://codepen.io/",
    Title: "CodePen",
    img: "https://codepen.io/favicon.ico",
    text: "Online editor for front-end developers.",
    type: "Programming",
  },
  {
    id: 11,
    Url: "https://jsfiddle.net/",
    Title: "JSFiddle",
    img: "https://jsfiddle.net/favicon.ico",
    text: "Collaborative JavaScript playground.",
    type: "Programming",
  },
  {
    id: 12,
    Url: "https://stackblitz.com/",
    Title: "StackBlitz",
    img: "https://stackblitz.com/favicon.ico",
    text: "Instant online IDE for modern web apps.",
    type: "Programming",
  },

  // 🧠 Learning
  {
    id: 13,
    Url: "https://www.freecodecamp.org/",
    Title: "freeCodeCamp",
    img: "https://www.freecodecamp.org/favicon.ico",
    text: "Learn web development for free.",
    type: "Learning",
  },
  {
    id: 14,
    Url: "https://developer.mozilla.org/",
    Title: "MDN Web Docs",
    img: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
    text: "Documentation for HTML, CSS, JS, and more.",
    type: "Learning",
  },
  {
    id: 15,
    Url: "https://css-tricks.com/",
    Title: "CSS-Tricks",
    img: "https://css-tricks.com/favicon.ico",
    text: "Tips, guides, and snippets for front-end devs.",
    type: "Learning",
  },

  // 🖌️ Design & Inspiration
  {
    id: 16,
    Url: "https://dribbble.com/",
    Title: "Dribbble",
    img: "https://dribbble.com/favicon.ico",
    text: "Discover and share design work.",
    type: "Design",
  },
  {
    id: 17,
    Url: "https://www.behance.net/",
    Title: "Behance",
    img: "https://www.behance.net/favicon.ico",
    text: "Creative portfolio platform by Adobe.",
    type: "Design",
  },
  {
    id: 18,
    Url: "https://uiverse.io/",
    Title: "Uiverse",
    img: "https://uiverse.io/favicon.ico",
    text: "Free open-source UI elements in CSS.",
    type: "Design",
  },

  // 📸 Illustrations
  {
    id: 19,
    Url: "https://undraw.co/illustrations",
    Title: "unDraw",
    img: "https://undraw.co/favicon.ico",
    text: "Free SVG illustrations for any project.",
    type: "Illustrations",
  },
  {
    id: 20,
    Url: "https://www.opendoodles.com/",
    Title: "Open Doodles",
    img: "https://www.opendoodles.com/favicon.ico",
    text: "Sketchy illustrations free to use.",
    type: "Illustrations",
  },
  {
    id: 21,
    Url: "https://storyset.com/",
    Title: "Storyset",
    img: "https://storyset.com/favicon.ico",
    text: "Customizable illustrations for your site.",
    type: "Illustrations",
  },

  // ⚙️ Tools
  {
    id: 22,
    Url: "https://remove.bg/",
    Title: "Remove BG",
    img: "https://www.remove.bg/favicon.ico",
    text: "Remove image backgrounds automatically.",
    type: "Tools",
  },
  {
    id: 23,
    Url: "https://tinywow.com/",
    Title: "TinyWow",
    img: "https://tinywow.com/favicon.ico",
    text: "Free online file converter and editor.",
    type: "Tools",
  },
  {
    id: 24,
    Url: "https://www.iloveimg.com/",
    Title: "iLoveIMG",
    img: "https://www.iloveimg.com/favicon.ico",
    text: "Edit, resize, and convert images easily.",
    type: "Tools",
  },

  // 🧩 Components     IPv4 Address. . . . . . . . . . . : 192.168.1.6
  {
    id: 25,
    Url: "https://mui.com/",
    Title: "Material UI",
    img: "https://mui.com/static/favicon.ico",
    text: "React components for faster web dev.",
    type: "Components",
  },
  {
    id: 26,
    Url: "https://tailwindui.com/",
    Title: "Tailwind UI",
    img: "https://tailwindui.com/favicon.ico",
    text: "Beautiful UI components built with Tailwind CSS.",
    type: "Components",
  },
  {
    id: 27,
    Url: "https://shadcn.dev/",
    Title: "Shadcn/UI",
    img: "https://shadcn.dev/favicon.ico",
    text: "Modern React components with Tailwind.",
    type: "Components",
  },

  // 📊 Charts
  {
    id: 28,
    Url: "https://recharts.org/",
    Title: "Recharts",
    img: "https://recharts.org/favicon.ico",
    text: "Simple charts for React.",
    type: "Charts",
  },
  {
    id: 29,
    Url: "https://chartjs.org/",
    Title: "Chart.js",
    img: "https://www.chartjs.org/favicon.ico",
    text: "Powerful and easy-to-use charts.",
    type: "Charts",
  },
  {
    id: 30,
    Url: "https://apexcharts.com/",
    Title: "ApexCharts",
    img: "https://apexcharts.com/favicon.ico",
    text: "Interactive charts for web apps.",
    type: "Charts",
  },
];



  const [activeFilter, setActiveFilter] = useState("All");

  const ButtonLoop = [... new Set(Tools.map((Tool)=> Tool.type))]

  const ToolsFilter = 
  activeFilter === "All" ? Tools : Tools.filter((Tool)=>Tool.type === activeFilter)

  return (
    <ToolsContext.Provider 
     value={{
        Tools,
        activeFilter,
        setActiveFilter,
        ButtonLoop,
        ToolsFilter
      }}>
        {children}
    </ToolsContext.Provider>
    
  )
}
