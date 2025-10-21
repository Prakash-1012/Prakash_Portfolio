import React from 'react'
import { GiGraduateCap } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { IoStar } from "react-icons/io5";




const Education = () => {
    return (
        <div id="Education" data-aos="fade-right" className='w-screen h-full  mb-25'>
            <div className='flex justify-center'>
                <div data-aos="zoom-in" className='justify-center text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text max-sm:text-4xl lg:text-6xl animate-gradient font-bold '>
                    Education
                    <div className='lg:mt-5 flex justify-center h-1  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 lg:text-6xl animate-gradient rounded-full '>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-out" className='max-sm:text-sm max-sm:w-80 text-gray-400 font-semibold mt-5 lg:text-lg max-lg:w-100 max-sm:p-0 max-lg:pl-25 lg:flex justify-center max-sm:ml-4 '>
                Computer Science Engineering student passionate about coding, problem-solving, and technology.
            </div>

            <div data-aos="fade-down" className='flex justify-center mt-5'>
                <div className='max-lg:w-100 lg:w-210 p-5 lg:h-85 border-1 border-t-0 border-gray-700 rounded-3xl max-lg:mt-5 max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-2 gap-8 max-sm:w-90'>
                    <div>
                    <div className='flex gap-4'>
                        <div className='bg-gradient-to-r from-pink-500 via-purple-500 rounded-full to-indigo-500 lg:w-18 lg:h-14 flex justify-center items-center animate-gradient'>
                            <GiGraduateCap className='text-4xl text-white' />
                        </div>
                        <div className='flex flex-wrap w-100 h-10 items-center'>
                            <p className='text-white  text-lg font-semibold'>Bachelor Of Technology</p>
                            <p className='  text-indigo-500 text-lg font-semibold'>Computer Science And Engineering</p>
                        </div>
                    </div>
                    <div className='mt-8 flex gap-4'>
                        <FaUniversity className='text-blue-500 text-2xl'/>
                        <div>
                            <p className='text-white text-lg font-semibold'>Sharda University</p>
                            <p className='text-gray-300 font-semibold'>School of Computer Science And Engineering</p>
                            <p className='text-gray-400 font-semibold'>Greater Noida</p>
                        </div>
                    </div>

                    <div className='mt-8 flex gap-4'>
                        <MdOutlineDateRange className='text-indigo-500 text-2xl' />
                        <div>
                            <p className='text-white text-lg font-semibold'>Graduation</p>
                            <p className='text-gray-300 font-semibold'>Aug 2028</p>
                        </div>

                    </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                    <div className='flex items-center gap-4'>
                        <IoStar className='text-yellow-400 text-2xl' />
                        <p className='text-white font-semibold text-lg '>GPA</p>
                        <p className='text-white font-semibold text-lg '>8.9/10.0</p>
                    </div>
                    <div className='flex flex-col mt-7'>
                        <p className='font-semibold text-white'>Relevant Coursework</p>
                    <p className='text-gray-300 font-semibold'>Software Languages and Programmable Logic</p>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Education