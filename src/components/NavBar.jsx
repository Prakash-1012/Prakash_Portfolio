import React, { useEffect } from 'react'
import Greetings from './Greetings';
import SideBar from './SideBar';
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";



const NavBar = ({ theme, setTheme,openSideBar,setOpenSideBar }) => {
  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme",theme)

  },[theme])
  return (
    <div data-aos="fade-right" id='NavBar' className='flex z-[9999] fixed w-full h-15 justify-between items-center p-12 bg-gray-50 dark:bg-gradient-to-r from-slate-800 to-black'>
      <div className='text-white text-xl cursor-pointer'>
        <h1 className='bg-black dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold md:hover:text-2xl transition-all ease-in-out duration-300 tracking-wider animate-gradient'>Prakash Ranjan</h1>
      </div>
      <div className='text-lg max-md:hidden w-auto dark:text-white flex gap-4 relative right-9'>
        <a href='#AboutMe' className='hover:border-b-2 transition-all duration-300 border-b-indigo-500 md:hover:text-2xl hover:text-indigo-500 ease-in-out'>About</a>
        <a className='hover:border-b-2 border-b-indigo-500 transition-all duration-300 md:hover:text-2xl hover:text-indigo-500 ease-in-out  '>Experience</a>
        <a href='#Skills' className='hover:border-b-2  border-b-indigo-500 transition-all duration-300 md:hover:text-2xl hover:text-indigo-500 ease-in-out '>Skills</a>
        <a href='#Education' className='hover:border-b-2  border-b-indigo-500 transition-all duration-300 md:hover:text-2xl hover:text-indigo-500 ease-in-out '>Education</a>
        <a href='#GetInTouch' className='hover:border-b-2  border-b-indigo-500 transition-all duration-300 ease-in-out hover:text-indigo-500 hover:text-2xl'>Contact</a>
      </div>
       <div className={theme === "dark" ? " max-md:absolute right-25 text-white outline-1 outline-gray-500 size-8.5 p-1 rounded-full text-center " : " max-md:absolute right-25 bg-white size-8.5 p-1 rounded-full text-center "}>
          <button className='cursor-pointer '>{theme === "dark" ? <div onClick={()=>setTheme("light")}><IoSunnyOutline className='text-2xl'/> </div> : <div className='outline-1 outline-gray-700 rounded-full size-8.5 flex justify-center items-center ' onClick={()=>setTheme("dark")}><FaMoon className='text-xl'/></div>}</button>          
        </div>
         <button className='relative top-[5px] md:hidden cursor-pointer text-[35px]' onClick={()=>setOpenSideBar(!openSideBar)}>{openSideBar?<i className=" text-white fi fi-tr-circle-xmark"></i>:<i className=" text-white fi fi-tr-sidebar"></i>}</button>

    </div>
  )
}

export default NavBar;