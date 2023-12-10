import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_508tjtn', 'template_ghffcvi', form.current, 'czBsErPqE526GsoXq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
    <div id='contact' className=' justify-center block text-gray-700 text-sm font-bold'>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">I'm available for any job. If you want me to hire fill this form</p>
        </div>
      </div>
    <form className=' container mx-auto justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'  ref={form} onSubmit={sendEmail}>
      <div className=' flex-auto container justify-center mx-auto '>
      <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
      <input className=' max-w-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="user_name" />
      <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
      <input className='max-w-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" name="user_email" />
      <label className='block text-gray-700 text-sm font-bold mb-2'>Message</label>
      <textarea className='max-w-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="message" />
      </div>
      <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mt-3'    value="Send">Send</button>
    </form>
    </div>
  );
};