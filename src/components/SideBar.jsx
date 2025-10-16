import React, { useState } from 'react'

const SideBar = ({openSideBar}) => {


  return (
    <div className='md:hidden'>
        
        {<div className={`${openSideBar?"translate-y-[25px] opacity-100 max-md:w-full h-70":" -translate-y-full opacity-0 max-md:w-0"} border-t-1 border-gray-400 max-md:fixed max-md:pl-10 pt-5 text-white max-md:flex flex-col top-[70px] left-0 z-[9999] gap-7 bottom-0 max-md:bg-gradient-to-r from-slate-800 to-black transition-all duration-400 ease-in-out`}>
        <a href='#AboutMe' className="cursor-pointer transition-all font-bold hover:text-indigo-500 ease-in-out duration-200 hover:text-xl">About</a>
        <a className="cursor-pointer transition-all font-bold hover:text-indigo-500 ease-in-out duration-200 hover:text-xl">Experience</a>
        <a className="cursor-pointer transition-all font-bold hover:text-indigo-500 ease-in-out duration-200 hover:text-xl">Projects</a>
        <a href='#Skills' className="cursor-pointer transition-all font-bold hover:text-indigo-500 ease-in-out duration-200 hover:text-xl">Skills</a>
        <a href='#Education' className="cursor-pointer transition-all font-bold  hover:text-indigo-500 ease-in-out duration-200 hover:text-xl">Education</a>
        </div>
}
    </div>
  )
}

export default SideBar 