import React from 'react'
import { Link } from 'react-router'
import { MdOutlineArrowOutward } from "react-icons/md";



const Greetings = () => {
  return (
    <div id='Greetings' data-aos="zoom-out" className={'max-md:size-fit flex w-full flex-col m-5 flex-wrap gap-9 justify-center items-center'}>
        <div className='text-slate-500'>
            <h1 className='text-3xl md:text-6xl font-bold'>Hi,I'm <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient'>Prakash Ranjan</span></h1>
            <div className='w-full'><h2 className='font-bold text-2xl text-center m-5 '>Frontend Developer</h2></div>

        </div>
        <div className='font-semi-bold w-[80%] text-lg text-center dark:text-gray-400 text-black mb-5'>
            <p>Passionate Frontend Developer skilled in building responsive and dynamic web applications using JavaScript, React.js, and Tailwind CSS. I specialize in crafting clean user interfaces with seamless user experiences, focusing on performance, reusability, and modern design principles.</p>
        </div>
        <div className='max-md:flex-col flex mb-10 gap-7'>
            <a href="#GetInTouch" className='flex gap-3 px-10 py-5  mx-5 font-bold text-indigo-500 bg-gray-900 md:hover:text-xl  hover:bg-gray-800 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap'>Get in Touch <MdOutlineArrowOutward className='text-white text-2xl'/> </a>
           <div>
             <button className='outline-2 outline-gray-500 rounded-full px-10 py-5 dark:text-white font-bold mx-5 hover:text-indigo-500 transition-all md:hover:text-xl duration-300 ease-in-out hover:bg-gray-900 whitespace-nowrap'><a className="flex gap-3 text-md " href="">Download CV <i className="fi fi-rr-download"></i></a></button>
           </div>
        </div>
    </div>
  )
}

export default Greetings