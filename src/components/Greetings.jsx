import React from 'react'

const Greetings = () => {
  return (
    <div className={'flex w-full flex-col m-5 flex-wrap gap-9 justify-center items-center'}>
        <div className='text-slate-500'>
            <h1 className='text-6xl font-bold'>Hi,I'm <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'>Prakash Ranjan</span></h1>
            <div className='w-full'><h2 className='font-bold text-4xl text-center m-5 '>Frontend Developer</h2></div>

        </div>
        <div className='font-semi-bold text-2xl text-center dark:text-gray-400 text-white m-5'>
            <p>Passionate Frontend Developer skilled in building responsive and dynamic web applications using JavaScript, React.js, and Tailwind CSS. I specialize in crafting clean user interfaces with seamless user experiences, focusing on performance, reusability, and modern design principles.</p>
        </div>
    </div>
  )
}

export default Greetings