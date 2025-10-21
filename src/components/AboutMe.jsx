import React from 'react'

const AboutMe = () => {
    return (
        <div id="AboutMe" data-aos="fade-right" className='lg:mt-35 max-sm:mt-5 mb-5  w-screen h-full'>
            <div className='justify-center flex w-screen max-sm:mb-5 '>
                <div className=' max-sm:text-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent lg:text-6xl mt-5 animate-gradient font-semibold'>
                    <h2>About Me</h2>
                    <div className='lg:mt-5 flex justify-center h-1  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 lg:text-6xl animate-gradient rounded-full'></div>
                </div>
            </div>
            <div data-aos="zoom-in" className='lg:p-5 lg:grid grid-cols-2 gap-12 lg:m-10 lg:h-150 lg:w-full '>
                <div>
                    <h1 className='font-bold max-sm:text-sm lg:text-4xl text-white ml-5 '>Passionate Frontend Developer</h1>
                    <p className=' font-semibold text-gray-400 lg:text-lg m-5'>I’m a passionate Frontend Developer skilled in JavaScript, React.js, and Tailwind CSS, focused on creating responsive, high-performance, and modern user interfaces. As a quick learner and a B.Tech CSE 2nd-year student at Sharda University, I’m eager to explore new technologies and continuously improve my development skills. I love building interactive digital experiences and am driven by the goal of turning creative ideas into functional, user-friendly web products.</p>
                    <p className='font-semibold text-gray-400 lg:text-lg m-5'>I’m driven by a passion for achieving meaningful results through clean design and efficient code. As a problem solver, I enjoy tackling complex challenges and finding creative, practical solutions. I value teamwork and collaboration, believing that great products are built when ideas are shared and improved together. Whether working independently or as a team player, I’m always focused on delivering quality outcomes that make a real impact.</p>
                </div>

                <div data-aos="zoom-in" className='outline-2 outline-gray-600 md:w-120 lg:h-70 box-border shadow-indigo-500 rounded-2xl p-5'>
                    <h1 className='text-white font-semibold lg:text-2xl'>At A Glance </h1>
                    <div className=' pt-5'>
                       <div className='flex text-gray-400 flex-col font-semibold justify-evenly h-50'>
                        <div className='flex justify-between'><p>Location</p> <p className="text-white"> India</p></div>
                        <div className='flex justify-between'><p>Experience</p> <p className="text-white"> Fresher</p></div>
                        <div className='flex justify-between'><p>Email</p> <p className="text-white"> mishuraj123456789@gmail.com</p></div>
                        <div className='flex justify-between'><p>Phone</p> <p className="text-white"> +91 7827864731</p></div>
                       </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutMe