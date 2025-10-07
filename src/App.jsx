import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar';
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Greetings from './components/Greetings';
import Connection from './components/connection';
import SideBar from './components/SideBar';
import AboutMe from './components/AboutMe';
import { Route, Routes } from 'react-router';


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const [openSideBar, setOpenSideBar] = useState(false);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 150,
    });
  }, []);


  return (

    <div className={theme === "dark" ? 'w-screen h-full bg-gradient-to-r from-slate-800 to-black' : "w-screen h-screen bg-white"}>

      <Routes>
        <Route path='/components/AboutMe' element={<AboutMe />} />
      </Routes>

      <NavBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} theme={theme} setTheme={setTheme} />
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <Greetings />
      <Connection />
      <AboutMe />

    </div>
  )
}

export default App;
