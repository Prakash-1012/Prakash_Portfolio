import React, { useState,useEffect } from 'react'
import NavBar from './components/NavBar';
import AOS from "aos";
import "aos/dist/aos.css";
import"./index.css";
import Greetings from './components/Greetings';

const App = () => {
  const[theme,setTheme]=useState("dark");

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
      offset: 150,    
    });
  }, []);
  return (
    <div className={theme==="dark"?'w-full h-screen bg-gradient-to-r from-slate-800 to-black':"bg-white"}>
      <NavBar theme={theme} setTheme={setTheme}/>
      <Greetings/>
    </div>
  )
}

export default App;
