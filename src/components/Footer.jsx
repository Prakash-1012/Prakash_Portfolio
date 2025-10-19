import React from 'react'
import { PiCopyrightLight } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";


const Footer = () => {
    return (
        <div data-aos="zoom-in" className='w-full h-full'>
            <div className='lg:grid grid-cols-3 gap-60'>
                <div data-aos="zoom-in" className='max-lg:p-5 lg:p-20 lg:w-150'>
                    <div className='font-bold text-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient'>
                        Prakash Ranjan
                    </div>
                    <div data-aos="zoom-in" className='text-gray-400 font-semibold mt-5 text-md'>
                        Creative Frontend Developer focused on building dynamic, high-performance web interfaces that blend design and functionality flawlessly.
                    </div>

                    <div data-aos="zoom-in" className='flex gap-5 text-2xl mt-5  text-white'>
                        <a className=' dark:hover:text-white transition-all duration-300 ease-in-out' href="https://github.com/Prakash-1012"><i className="hover:text-indigo-500 transition-all duration-200 ease-in-out fi fi-brands-github"></i></a>
                        <a className=' dark:hover:text-white transition-all duration-300 ease-in-out' href="https://www.linkedin.com/in/prakash-ranjan-prasad-bb5093376/"><i className="hover:text-indigo-500 transition-all duration-200 ease-in-out fi fi-brands-linkedin"></i></a>
                        <a className=' dark:hover:text-white transition-all duration-300 ease-in-out' href="mailto:mishuraj123456789@gmail.com"> <i className="hover:text-indigo-500 transition-all duration-200 ease-in-out fi fi-sr-envelope"></i></a>
                    </div>
                </div>
                <div data-aos="zoom-in" className='w-40 max-lg:pl-5 lg:pt-20 flex flex-col lg:relative left-40'>
                    <div className='text-white text-2xl mb-5 font-semibold'>
                        Quick Links
                    </div>
                    <a href='#About' className='text-gray-400 hover:text-white text-md mb-2 font-semibold'>
                        About
                    </a>
                    <a href='#Skills' className='text-gray-400 hover:text-white text-md mb-2 font-semibold'>
                        Skills
                    </a>
                    <a href='#Education' className='text-gray-400 hover:text-white text-md mb-2 font-semibold'>
                        Education
                    </a>
                    <a href='#GetInTouch' className='text-gray-400 hover:text-white text-md mb-2 font-semibold'>
                        Contact
                    </a>
                </div>
                <div data-aos="zoom-in" className='w-40 max-lg:pl-5 max-lg:pt-5 lg:pt-20 flex flex-col'>
                    <div className='text-white text-2xl mb-5 font-semibold '>
                        Contact
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='text-gray-400 hover:text-white text-md mb-2 font-semibold'>
                            mishuraj123456789@gmail.com
                        </div>
                        <div className='text-gray-400 hover:text-white text-md mb-2 font-semibold'>
                            +91 7827864731
                        </div>
                        <div className='text-gray-400 hover:text-white text-md mb-2 font-semibold'>
                            India
                        </div>
                        <div className='bg-green-500 text-white rounded-3xl flex justify-center items-center font-semibold max-lg:w-40 max-lg:mb-5'>
                            Available for Work
                        </div>
                    </div>
                </div>
            </div>
             <div className='max-lg:pl-5 text-center lg:pl-20 pt-10 lg:pr-20 flex max-lg:flex-col items-center justify-between border-t-1 border-gray-500'>
               <div className='flex items-center mb-5'> 
                <PiCopyrightLight className='text-gray-400 text-xl lg:mr-1' />
                <p className='text-gray-400 mr-1
                '>2025 Prakash Ranjan.Built with</p>
                <FaHeart className='text-red-500 max-lg:relative right-2.5' />
                <p className='text-gray-400 max-lg:relative lg:ml-1 right-2.5 '>Using React.Js & Tailwind CSS</p>
                </div>
                 <a href='#top' className='w-10 h-10 bg-gradient-to-r flex justify-center items-center from-pink-500 via-purple-500 to-indigo-500  animate-gradient rounded-full'>
                    <FaArrowUp className='text-white' />
                </a>
                </div>
        </div>
    )
}

export default Footer