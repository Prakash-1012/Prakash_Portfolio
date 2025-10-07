import React, { useEffect } from 'react'
import { Link } from 'react-router'
import Greetings from './Greetings';
import SideBar from './SideBar';


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
    <div data-aos="fade-right" className='flex w-full h-15 justify-between items-center p-12  bg-gradient-to-r from-slate-800 to-black'>
      <div className='text-white text-xl cursor-pointer'>
        <h1 className=' bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold md:hover:text-2xl transition-all ease-in-out duration-300 tracking-wider animate-gradient'>Prakash Ranjan</h1>
      </div>
      <div className='text-lg max-md:hidden w-auto text-white flex gap-4 relative right-9'>
        <Link className='hover:border-b-2 transition-all duration-300 border-b-indigo-500 md:hover:text-2xl hover:text-indigo-500 ease-in-out'>About</Link>
        <Link className='hover:border-b-2 border-b-indigo-500 transition-all duration-300 md:hover:text-2xl hover:text-indigo-500 ease-in-out  '>Experience</Link>
        <Link className='hover:border-b-2  border-b-indigo-500 transition-all duration-300 md:hover:text-2xl hover:text-indigo-500 ease-in-out '>Projects</Link>
        <Link className='hover:border-b-2  border-b-indigo-500 transition-all duration-300 md:hover:text-2xl hover:text-indigo-500 ease-in-out '>Skills</Link>
        <Link className='hover:border-b-2  border-b-indigo-500 transition-all duration-300 md:hover:text-2xl hover:text-indigo-500 ease-in-out '>Education</Link>
        <Link className='hover:border-b-2  border-b-indigo-500 transition-all duration-300 ease-in-out hover:text-indigo-500 hover:text-2xl'>Contact</Link>
      </div>
       <div className={theme === "dark" ? " max-md:absolute right-25 text-white outline-1 outline-gray-500 size-8.5 p-1 rounded-full text-center " : " max-md:absolute right-25 bg-white  size-8.5 p-1 rounded-full text-center "}>
          <button className='cursor-pointer '>{theme === "dark" ? <img onClick={()=>setTheme("light")} src='/src/assets/sun_icon.svg' alt=''></img> : <img onClick={()=>setTheme("dark")} src='/src/assets/moon_icon.svg'></img>}</button>          
        </div>
         <button className='relative top-[5px] md:hidden cursor-pointer text-[35px]' onClick={()=>setOpenSideBar(!openSideBar)}>{openSideBar?<i className=" text-white fi fi-tr-circle-xmark"></i>:<i className=" text-white fi fi-tr-sidebar"></i>}</button>

    </div>
  )
}

export default NavBar;