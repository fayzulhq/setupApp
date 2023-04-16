"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TitleSection from './TitleSection';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ckud40u', 'template_2t0l3qf', form.current, '1Lm-aHT2SrLonvw47')
      .then((result) => {
          form.current.value = '' // reset field after send
          console.log(result.text);
          console.log("Message sent")

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='bg-slate-900 mx-auto text-center py-12'>
        <TitleSection text='Adivices and Critics' className='my-5'/>
    <form ref={form} onSubmit={sendEmail}>

    <div className='lg:flex flex-col justify-center items-center text-left'>
        
      <input type="email" name="user_email" className=" text-sm rounded-lg max-w-[400px] mx-auto my-5 w-full p-2 block bg-gray-700  placeholder-gray-400 focus:outline-none text-white " placeholder="someone@gmail.com" required />

      <textarea name="message" className="mx-auto text-sm rounded-lg max-w-[400px] w-full p-2 my-5 bg-gray-700 block placeholder-gray-400 focus:outline-none text-white " placeholder="Any advices and critics" required  />
    </div>

      <button type='submit' className='bg-blue-600 hover:bg-blue-800 rounded-md mt-5 px-6 py-2'>Send</button>
    </form>
    </div>
  );
};