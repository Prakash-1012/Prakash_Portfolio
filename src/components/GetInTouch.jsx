import React, { useRef, useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';




const GetInTouch = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const form = useRef();
    const handleMessage = (evt) => {
        evt.preventDefault();
        const serviceKey = "service_32f3n3a";
        const templateKey = "template_4ipslqa";
        const publicKey = "R4DQ1TOkQ_rU7oacy";
        emailjs.sendForm(
            serviceKey,
            templateKey,
            form.current,
            publicKey
        ).then(
            () => {
                setFormSubmit(true)
                evt.target.reset();
            }
        )
        setFormSubmit(false);
    }
    return (
        <div id="GetInTouch" data-aos="fade-right" className='w-screen h-full mb-10'>
            <div className='flex justify-center'>
                <div data-aos="zoom-in" className='justify-center text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text max-lg:text-4xl lg:text-6xl animate-gradient font-semibold '>
                    Get In Touch
                    <div className='lg:mt-5 flex justify-center h-1  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 lg:text-6xl animate-gradient rounded-full '>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-out" className='text-gray-700 dark:text-gray-400 max-lg:text-center font-semibold mt-5 lg:text-lg lg:flex justify-center '>
                Always open to new opportunities, collaborations, and conversations.
            </div>
            <div className='lg:grid grid-cols-2  lg:ml-20 mt-5 p-5'>
                <div>
                    <h2 className='text-gray-700 dark:text-white font-semibold max-lg:text-xl lg:text-3xl mb-5'>Let's Connect</h2>
                    <p className='text-gray-500 dark:text-gray-300 font-semibold lg:text-xl mb-10 '>Passionate about crafting seamless digital interfaces that make an impact.
                        Whether it's a collaboration or a quick chat,I'm just a message away!
                    </p>

                    <div className='border-[1px] border-gray-700 dark:bg-gray-800 max-lg:w-110 max-sm:w-80 lg:w-120 pl-4 flex flex-col justify-center h-20 rounded-xl dark:hover:bg-gray-700 mb-5'>
                        <div className='flex items-center'>
                            <i className="text-3xl text-indigo-500 fi fi-sr-envelope"></i>
                            <div className='ml-3'>
                                <p className='dark:text-white'>Email</p>
                                <a className='hover:text-indigo-500 text-gray-700 dark:text-gray-300 transition-all duration-200 ease-in-out' href="mailto:mishuraj123456789@gmail.com">mishuraj123456789@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className='border-[1px] border-gray-700 dark:bg-gray-800 max-lg:w-110 max-sm:w-80  lg:w-120 pl-4 flex flex-col justify-center h-20 rounded-xl dark:hover:bg-gray-700 mb-5'>
                        <div className='flex items-center'>
                            <FaPhoneAlt className="text-3xl text-indigo-500 fi fi-sr-envelope" />
                            <div className='ml-3'>
                                <p className='dark:text-white'>Phone</p>
                                <a href='tel:+917827864731' className='hover:text-indigo-500 text-gray-700 dark:text-gray-300 transition-all duration-200 ease-in-out'>+91 7827864731</a>
                            </div>
                        </div>
                    </div>

                    <div className='border-[1px] border-gray-700 dark:bg-gray-800 max-lg:w-110 max-sm:w-80 lg:w-120 pl-4 flex flex-col justify-center h-20 rounded-xl dark:hover:bg-gray-700 mb-5'>
                        <div className='flex items-center'>
                            <FaLocationDot className="text-3xl text-indigo-500 fi fi-sr-envelope" />
                            <div className='ml-3'>
                                <p className='dark:text-white'>Location</p>
                                <p className='text-gray-700 dark:text-gray-300 transition-all duration-200 ease-in-out'>India</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='dark:text-white text-gray-700 text-xl font-semibold'>Follow Me</p>
                    </div>
                    <div className='flex gap-5 text-xl mt-2  dark:text-white'>
                        <a className=' dark:hover:text-white transition-all duration-300 ease-in-out' href="https://github.com/Prakash-1012"><i className="hover:text-indigo-500 transition-all duration-200 ease-in-out fi fi-brands-github"></i></a>
                        <a className=' dark:hover:text-white transition-all duration-300 ease-in-out' href="https://www.linkedin.com/in/prakash-ranjan-prasad-bb5093376/"><i className="hover:text-indigo-500 transition-all duration-200 ease-in-out fi fi-brands-linkedin"></i></a>
                        <a className=' dark:hover:text-white transition-all duration-300 ease-in-out' href="mailto:mishuraj123456789@gmail.com"> <i className="hover:text-indigo-500 transition-all duration-200 ease-in-out fi fi-sr-envelope"></i></a>
                    </div>
                    <div className='mt-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient max-lg:w-110 max-sm:w-80 lg:w-130 lg:h-30 max-lg:mb-5 p-5 rounded-lg'>
                        <div className='text-white text-xl mb-2.5 font-semibold'>
                            Available for Work
                        </div>
                        <div className='text-gray-200 text-md font-semibold'>
                            Open to exciting frontend development opportunities.
                            Let's collaborate to create clean, user-focused web experiences.
                        </div>
                    </div>
                </div>
                <div className='rounded-lg border-gray-700 shadow-gray-800 shadow-sm border-[.5px] max-lg:pl-5 lg:pl-10 pt-5 max-lg:w-110 max-sm:w-90 lg:w-140 max-lg:h-160 lg:h-150 dark:bg-gray-800'>
                    <div>
                        <h1 className='text-gray-700 dark:text-white text-2xl font-bold mb-2'>Send a Message</h1>
                    </div>
                    <form action="" ref={form} onSubmit={handleMessage}>
                        <div className='flex max-lg:flex-col items-start lg:gap-10 mb-5'>
                            <div className='max-lg:flex flex-col mb-2'>
                                <label htmlFor="name" className='text-sm  mb-2 dark:text-gray-300 text-gray-700 font-semibold'>Name*</label>
                                <input name='name' id='name' required className='dark:text-white border-[2px] p-3 rounded-lg focus:border-indigo-500 border-gray-300 dark:border-gray-700 dark:bg-gray-600 outline-none placeholder:text-gray-400 placeholder:font-semibold max-sm:w-80 max-lg:w-95' type="text" placeholder='Your Name' />
                            </div>
                            <div className='max-lg:flex flex-col'>
                                <label htmlFor="email" className='text-sm  mb-2 dark:text-gray-300 text-gray-700 font-semibold'>Email*</label>
                                <input name='email' id='email' required className='dark:text-white border-[2px] p-3 rounded-lg focus:border-indigo-500 border-gray-300 dark:border-gray-700 dark:bg-gray-600 outline-none  placeholder:text-gray-400 placeholder:font-semibold max-sm:w-80 max-lg:w-95' type="text" placeholder='abc@gmail.com' />
                            </div>
                        </div>
                        <div className='mb-5 flex flex-1 flex-col'>
                            <label htmlFor="subject" className='text-sm  mb-2 dark:text-gray-300 text-gray-700 font-semibold'>Subject*</label>
                            <input name='subject' id="subject" required className='dark:text-white lg:w-[453px] border-[2px] p-3 rounded-lg focus:border-indigo-500 border-gray-300 dark:border-gray-700 dark:bg-gray-600 outline-none  placeholder:text-gray-400 placeholder:font-semibold max-sm:w-80 max-lg:w-95' type="text" placeholder="What's this about" />
                        </div>

                        <div className='mb-5 max-lg:flex flex-1 flex-col'>
                            <label htmlFor="message" className='text-sm  mb-2 dark:text-gray-300 text-gray-700 font-semibold'>Message*</label>
                            <textarea name='message' required id='message' className='text-white lg:w-[453px] h-40 border-[2px] p-3 rounded-lg focus:border-indigo-500 border-gray-300 dark:border-gray-700 dark:bg-gray-600 outline-none placeholder:text-gray-400 placeholder:font-semibold max-sm:w-80 max-lg:w-95' type="text" placeholder="Tell me about your project or just say hii!" />
                        </div>

                        <button type='submit' className='lg:w-[453px] mb-5 flex justify-center items-center text-xl text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 h-15 rounded-lg hover:opacity-80 animate-gradient max-sm:w-80 max-lg:w-95'>
                            Send Message
                        </button>
                    </form>
                    <div className={formSubmit ? 'lg:w-[453px] max-sm:w-80 flex justify-center items-center text-xl text-white font-semibold  h-15 rounded-lg hover:opacity-80' : "hidden"}>
                        <i className="text-green-500 mr-2 flex items-center fi fi-ss-badge-check"></i>Message sent successfully
                    </div>

                </div>
            </div>

        </div>
    )
}

export default GetInTouch