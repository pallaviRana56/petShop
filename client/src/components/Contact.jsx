import React from 'react';
import picture from '../images/contactpic.jpg';
import ContactUs from './ContactUs';

function Contact() {
  return (
    <div>
      {/* Banner Image */}
      <div className=" w-full h-[450px] flex flex-row justify-center items-center lg:px-32 px-5 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${picture})`}}>
        <h1 className='text-white font-bold text-7xl hover:scale-110 transform duration-100'>Contact Us</h1>
      </div>

      {/* Heading */}
      <div className='flex justify-center items-center my-5'>
        <h1 className='text-2xl font-bold text-left pt-6 pb-[10px] px-[70px]'>Let's Start The Conversation</h1>
      </div>

      
      <ContactUs/>


      
    </div>
  )
}

export default Contact
