import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar';
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Greetings from './components/Greetings';
import Connection from './components/Connection';
import SideBar from './components/SideBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';



const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");
  const [openSideBar, setOpenSideBar] = useState(false);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror:true,
      offset: 150,
    });
  }, []);


  return (

    <div className={theme === "dark" ? 'w-full h-full pb-15 bg-gradient-to-r from-slate-800 to-black' : "w-full h-screen bg-gray-50 pb-15"}>


      <NavBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} theme={theme} setTheme={setTheme} />
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <main id='top' className='pt-[80px]'>
      <Greetings />
      <Connection />
      <AboutMe />
      <Skills/>
      <Education/>
      <GetInTouch/>
      <Footer/>
      </main>

    </div>
  )
}

export default App;
