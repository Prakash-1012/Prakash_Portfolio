import React, { useRef, useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "emailjs-com";



const GetInTouch = () => {
    const [formSubmit,setFormSubmit]=useState(false);
    const form=useRef();
    const handleMessage=(evt)=>{
        evt.preventDefault();
        const serviceKey="service_32f3n3a";
        const templateKey="template_4ipslqa";
        const publicKey="R4DQ1TOkQ_rU7oacy";
        emailjs.sendForm(
            serviceKey,
            templateKey,
            form.current,
            publicKey
        ).then(
            ()=>{
                setFormSubmit(true)
                console.log("message sent succesfully");
                evt.target.reset();
            }
        )
        setFormSubmit(false);
    }
    return (
        <div id="GetInTouch" data-aos="fade-right" className='w-screen h-full'>
            <div className='flex justify-center'>
                <div data-aos="zoom-in" className='justify-center text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text max-lg:text-4xl lg:text-6xl animate-gradient font-semibold '>
                    Get In Touch
                    <div className='lg:mt-5 flex justify-center h-1  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 lg:text-6xl animate-gradient rounded-full '>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-out" className='text-gray-400 max-lg:text-center font-semibold mt-5 lg:text-lg lg:flex justify-center '>
                Always open to new opportunities, collaborations, and conversations.
            </div>
            <div className='lg:grid grid-cols-2  ml-20 mt-5 p-5'>
                <div>
                    <h2 className='text-white font-semibold text-3xl mb-5'>Let's Connect</h2>
                    <p className='text-gray-300 font-semibold text-xl mb-10 '>Passionate about crafting seamless digital interfaces that make an impact.
                        Whether it's a collaboration or a quick chat,I'm just a message away!
                    </p>

                    <div className='border-[1px] border-gray-700 bg-gray-800 w-120 pl-4 flex flex-col justify-center h-20 rounded-xl hover:bg-gray-700 mb-5'>
                        <div className='flex items-center'>
                            <i className="text-3xl dark:text-indigo-500 fi fi-sr-envelope"></i>
                            <div className='ml-3'>
                                <p className='text-white'>Email</p>
                                <a className='hover:text-indigo-500 text-gray-300 transition-all duration-200 ease-in-out' href="mailto:mishuraj123456789@gmail.com">mishuraj123456789@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className='border-[1px] border-gray-700 bg-gray-800 w-120 pl-4 flex flex-col justify-center h-20 rounded-xl hover:bg-gray-700 mb-5'>
                        <div className='flex items-center'>
                            <FaPhoneAlt className="text-3xl dark:text-indigo-500 fi fi-sr-envelope" />
                            <div className='ml-3'>
                                <p className='text-white'>Phone</p>
                                <a href='#' className='hover:text-indigo-500 text-gray-300 transition-all duration-200 ease-in-out'>+91 7827864731</a>
                            </div>
                        </div>
                    </div>

                    <div className='border-[1px] border-gray-700 bg-gray-800 w-120 pl-4 flex flex-col justify-center h-20 rounded-xl hover:bg-gray-700 mb-5'>
                        <div className='flex items-center'>
                            <FaLocationDot className="text-3xl dark:text-indigo-500 fi fi-sr-envelope" />
                            <div className='ml-3'>
                                <p className='text-white'>Location</p>
                                <p className='text-gray-300 transition-all duration-200 ease-in-out'>India</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-lg border-gray-700 border-[2px] pl-10 pt-5 lg:w-140 lg:h-160 bg-gray-800'>
                    <div>
                        <h1 className='text-white text-2xl font-bold'>Send a Message</h1>
                    </div>
                    <form action="" ref={form} onSubmit={handleMessage}>
<div className='flex gap-10 mb-5'>
                            <div>
                                <label htmlFor="name" className='text-sm  mb-2 text-gray-300 font-semibold'>Name*</label>
                                <input name='name' id='name' required className='text-white border-[2px] p-3 rounded-lg focus:border-indigo-500 border-gray-700 bg-gray-600 outline-none  placeholder:text-gray-400 placeholder:font-semibold' type="text" placeholder='Your Name' />
                            </div>
                             <div>
                                <label htmlFor="email" className='text-sm  mb-2 text-gray-300 font-semibold'>Email*</label>
                                <input name='email' id='email' required className='text-white border-[2px] p-3 rounded-lg focus:border-indigo-500 border-gray-700 bg-gray-600 outline-none  placeholder:text-gray-400 placeholder:font-semibold' type="text" placeholder='abc@gmail.com' />
                            </div>
                        </div>
                        <div className='mb-5 flex flex-col'>
                            <label htmlFor="subject" className='text-sm  mb-2 text-gray-300 font-semibold'>Subject*</label>
                             <input name='subject' id="subject" required className='text-white lg:w-[453px] border-[2px] p-3 rounded-lg focus:border-indigo-500 border-gray-700 bg-gray-600 outline-none  placeholder:text-gray-400 placeholder:font-semibold' type="text" placeholder="What's this about" />
                        </div>

                        <div className='mb-5'>
                            <label htmlFor="message" className='text-sm  mb-2 text-gray-300 font-semibold'>Message*</label>
                             <textarea name='message' required id='message' className='text-white lg:w-[453px] h-40 border-[2px] p-3 rounded-lg focus:border-indigo-500 border-gray-700 bg-gray-600 outline-none placeholder:text-gray-400 placeholder:font-semibold' type="text" placeholder="Tell me about your project or just say hii!" />
                        </div>

                    <button type='submit' className='lg:w-[453px] mb-5 flex justify-center items-center text-xl text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 h-15 rounded-lg hover:opacity-80'>
                        Send Message
                    </button>
                    </form>
                    <div className={formSubmit?'lg:w-[453px] flex justify-center items-center text-xl text-white font-semibold  h-15 rounded-lg hover:opacity-80':"hidden"}>
                        <i className="text-green-500 mr-2 flex items-center fi fi-ss-badge-check"></i>Message sent successfully
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GetInTouch