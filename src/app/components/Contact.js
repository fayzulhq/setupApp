"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TitleSection from './TitleSection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// https://fkhadra.github.io/react-toastify/introduction/

export const ContactUs = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.value = null // reset field after send

    emailjs.sendForm('service_ckud40u', 'template_2t0l3qf', form.current, '1Lm-aHT2SrLonvw47')
      .then((result) => {
          console.log(result.text);
          toast.success('Your Message sent!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
      }, (error) => {
        toast.error("Message didn't sent!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      });
  };

  return (
    <div className='bg-gray-900 mx-auto text-center py-12'>
        <TitleSection text='Suggestion and Critics' className='my-5'/>
    <form ref={form} onSubmit={sendEmail}>

    <div className='lg:flex flex-col justify-center items-center text-left'>
        
      <input type="email" name="user_email" className=" text-sm rounded-lg max-w-[400px] mx-auto my-5 w-full p-2 block bg-gray-700  placeholder-gray-400 focus:outline-none text-white " placeholder="someone@gmail.com" required />

      <textarea name="message" className="mx-auto text-sm rounded-lg max-w-[400px] w-full p-2 my-5 bg-gray-700 block placeholder-gray-400 focus:outline-none text-white " placeholder="Any suggestion and critics" required  />
    </div>

      <button type='submit' className='bg-blue-600 hover:bg-blue-800 rounded-md mt-5 px-6 py-2'>Send</button>
    </form>
    </div>
  );
};