import React from 'react'
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaDatabase } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaTools } from "react-icons/fa";





const Skills = () => {
  return (
    <div id="Skills" data-aos="fade-right" className='w-screen mb-25 h-full '>
      <div className='flex justify-center'>
        <div className=' max-sm:text-2xl lg:flex-wrap justify-center text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text max-lg:text-4xl lg:text-6xl animate-gradient font-semibold '>
          Skills And Expertise
          <div className='lg:mt-5 flex justify-center h-1  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 lg:text-6xl animate-gradient rounded-full '>
          </div>

        </div>
      </div>
      <div className=' max-sm:text-sm text-gray-400 max-lg:text-center font-semibold mt-5 lg:text-lg max-lg:w-120 max-sm:w-80 flex justify-center max-sm:ml-4  '>
        <p>A comprehensive overview of my technical skills and proficiencies in modern web development technologies
        </p>
      </div>
      <div className='lg:grid grid-cols-3 lg:px-20 place-content-evenly mb-5 max-lg:p-12 max-sm:p-5 '>
        <div className='w-90 lg:m-5 lg:p-10 lg:h-120 outline-1 max-sm:w-70 max-sm:p-5  outline-gray-700 rounded-3xl bg-slate-800 max-sm:mb-5'>
          <div className='flex justify-center'>
            <FaReact className='text-blue-400 text-3xl mr-2 ' />
            <p className='text-white  font-bold text-center text-xl'>Frontend</p>
          </div>
          <div data-aos="zoom-out" className='p-2 mt-4 h-12 flex flex-col justify-center text-white hover:shadow-gray-700 bg-gray-700 rounded-lg hover:bg-gray-600'>
            <p className='text-md font-semibold'>
              <FaReact className='text-blue-400 text-2xl mr-2 inline' />
              React.js
            </p>
          </div>
          <div data-aos="zoom-out" className='p-2 mt-4 h-12 flex flex-col justify-center text-white hover:shadow-gray-700 bg-gray-700 rounded-lg hover:bg-gray-600'>
            <p className='text-md font-semibold'>
              <TbBrandJavascript className='text-blue-400 text-2xl mr-2  inline' />
              JavaScript
            </p>
          </div>
          <div data-aos="zoom-out" className='p-2 mt-4 h-12 flex flex-col justify-center text-white hover:shadow-gray-700 bg-gray-700 rounded-lg hover:bg-gray-600'>
            <p className='text-md font-semibold'>
              <RiTailwindCssFill className='text-blue-400 text-2xl mr-2  inline' />
              Tailwind CSS
            </p>
          </div>




        </div>
        <div className='w-90 lg:m-5 lg:p-10 lg:h-120 outline-1 max-sm:w-70 max-sm:p-5  outline-gray-700 rounded-3xl bg-slate-800 max-sm:mb-5'>
          <div className='flex justify-center'>
            <FaNodeJs className='text-green-400  mr-2 text-3xl' />
            <p className='text-white font-bold text-xl'>Backend</p>
          </div>

          <div data-aos="zoom-out" className='p-2 mt-4 h-12 flex flex-col justify-center text-white hover:shadow-gray-700 bg-gray-700 rounded-lg hover:bg-gray-600'>
            <p className='text-md font-semibold'>
              <FaNodeJs className='text-blue-400  mr-2 text-2xl inline' />


              Node.js
            </p>
          </div>
          <div data-aos="zoom-out" className='p-2 mt-4 h-12 flex flex-col justify-center text-white hover:shadow-gray-700 bg-gray-700 rounded-lg hover:bg-gray-600'>
            <p className='text-md font-semibold'>
              <SiExpress className='text-blue-400 text-2xl mr-2 inline' />
              Express.js
            </p>
          </div>
          <div data-aos="zoom-out" className='p-2 mt-4 h-12 flex flex-col justify-center text-white hover:shadow-gray-700 bg-gray-700 rounded-lg hover:bg-gray-600'>
            <p className='text-md font-semibold'>
              <FaDatabase className='text-blue-400 text-2xl mr-2 inline' />

              MangoDB
            </p>
          </div>
        </div>
        <div data-aos="zoom-out" className='w-90 lg:m-5 lg:p-10 lg:h-120 outline-1 max-sm:w-70 max-sm:p-5  outline-gray-700 rounded-3xl bg-slate-800 max-sm:mb-5'>
          <div className='flex justify-center'>
            <FaTools className='text-indigo-500  mr-2 text-3xl' />
            <p className='text-white font-bold text-xl'>Tools and Technologies</p>
          </div>

          <div data-aos="zoom-out" className='p-2 mt-4 h-12 flex flex-col justify-center text-white hover:shadow-gray-700 bg-gray-700 rounded-lg hover:bg-gray-600'>
            <p className='text-md font-semibold'>
              <FaGitAlt className='text-blue-400 text-2xl mr-2 inline' />

              Git
            </p>
          </div>
          <div data-aos="zoom-out" className='p-2 mt-4 h-12 flex flex-col justify-center text-white hover:shadow-gray-700 bg-gray-700 rounded-lg hover:bg-gray-600'>
            <p className='text-md font-semibold'>
              <IoLogoGithub className='text-blue-400 text-2xl mr-2 inline' />
              GitHub
            </p>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className='flex justify-center text-2xl mb-5 text-gray-200 font-semibold'>
        Soft Skills
      </div>
      <div data-aos="zoom-in" className='lg:flex max-lg:grid grid-cols-2 max-lg:gap-5 lg:p-4 max-lg:pb-4 justify-center '>
        <div className='text-white bg-gradient-to-r flex p-2 justify-center lg:mx-8 max-lg:mx-4 w-50 h-10 rounded-full  from-pink-500 via-purple-500 to-indigo-500 animate-gradient '>
          Communication
        </div>
        <div className='text-white bg-gradient-to-r flex p-2 justify-center lg:mx-8 max-lg:mx-4 w-50 h-10 rounded-full  from-pink-500 via-purple-500 to-indigo-500 animate-gradient'>
          Problem-Solving
        </div>
        <div className='text-white bg-gradient-to-r flex p-2 justify-center lg:mx-8 max-lg:mx-4 w-50 h-10 rounded-full  from-pink-500 via-purple-500 to-indigo-500 animate-gradient'>
          Teamwork
        </div>
        <div className='text-white bg-gradient-to-r flex p-2 justify-center lg:mx-8 max-lg:mx-4 w-50 h-10 rounded-full  from-pink-500 via-purple-500 to-indigo-500 animate-gradient'>
          Time Management
        </div>
      </div>
      <div data-aos="zoom-in" className='flex justify-center w-full lg:h-40'>
        <div className='p-2 bg-gradient-to-r max-lg:text-center lg:w-250 max-lg:w-120 lg:h-40  from-pink-500 via-purple-500 to-indigo-500 animate-gradient rounded-3xl '>
          <p className='font-semibold text-center text-gray-200 text-3xl'>Certifications</p>
          <div className='p-2 lg:relative left-68 rounded-xl text-center m-3 text-lg lg:w-100 lg:h-17 bg-gray-800/20 text-gray-200'>
            <span>Udemy:Java Data Structures And Algorithms Masterclass</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills