import React from 'react'
import { Link } from 'react-router'

const Greetings = () => {
  return (
    <div data-aos="zoom-out" className={'flex w-full flex-col m-5 flex-wrap gap-9 justify-center items-center'}>
        <div className='text-slate-500'>
            <h1 className='text-6xl font-bold'>Hi,I'm <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'>Prakash Ranjan</span></h1>
            <div className='w-full'><h2 className='font-bold text-4xl text-center m-5 '>Frontend Developer</h2></div>

        </div>
        <div className='font-semi-bold w-[80%] text-2xl text-center dark:text-gray-400 text-white mb-5'>
            <p>Passionate Frontend Developer skilled in building responsive and dynamic web applications using JavaScript, React.js, and Tailwind CSS. I specialize in crafting clean user interfaces with seamless user experiences, focusing on performance, reusability, and modern design principles.</p>
        </div>
        <div className='flex '>
            <Link className='flex gap-3 px-10 py-5  mx-5 font-bold text-indigo-500 bg-gray-900 hover:text-xl  hover:bg-gray-800 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap'>Get in Touch <img src="/src/assets/arrow.svg" alt="" /></Link>
           <div>
             <button className='outline-2 outline-gray-500 rounded-full px-10 py-5 text-white font-bold mx-5 hover:text-indigo-500 transition-all hover:text-xl duration-300 ease-in-out hover:bg-gray-900 whitespace-nowrap'><a className="flex gap-3 text-md " href="">Download CV <img src="/src/assets/download.svg" alt="" /></a></button>
           </div>
        </div>
    </div>
  )
}

export default Greetings