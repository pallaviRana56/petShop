import React from 'react'
import pic from '../images/pic-removebg-preview.png';

function About() {
  return (
    
<div className="bg-gray-900 min-h-screen p-6 md:p-10">

<div className='flex gap-5 items-center pt-3 md:pt-3 mt-[9
0px] md:mt-[90px]'>
    <img className='h-[100px] w-[100px] bg-gray-600 rounded-full border-4 border-gray-950' src={pic} alt="" />
    <span><a href="https://sqilco.com/"><img src="https://sqilco.com/sqilco.svg" alt="logo" /></a></span>
    <i className="fa-brands fa-github text-white text-3xl hover:scale-125 transform duration-300" />
    <i className="fa-brands fa-linkedin text-3xl hover:scale-125 transform duration-300" style={{ color: '#74C0FC' }}></i>
    <i className="fa-brands fa-facebook text-3xl hover:scale-125 transform duration-300" style={{ color: '#74C0FC' }}></i>
    <i className="fa-brands fa-instagram text-3xl hover:scale-125 transform duration-300" style={{ color: '#74C0FC' }}></i>
</div>


<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
    {/* Left side info */}
    <div className="md:w-1/2 space-y-4 mb-6 md:mb-0 pt-[100px] md:pt-[100px]">


        <h1 className='text-4xl md:text-6xl font-semibold text-white '>
            Hi, I'm <span className="text-[#fa014e] hover:text-orange-500 cursor-pointer">Pallavi Rana</span>
        </h1>
        <h2 className="text-6xl font-semibold text-white py-4">a MERN Stack Trainee.</h2>
        <p className="text-gray-400 max-w-lg">
        I am a passionate web developer currently undergoing training in the MERN stack, a powerful and popular technology stack for 
        building modern web applications. The MERN stack comprises MongoDB, Express.js, React, and Node.js, providing a comprehensive 
        solution for both front-end and back-end development.
        </p>

    </div>
    {/* Right side image */}
    <div className="md:w-1/2">
    
        <img src={pic} alt="Pallavi" className="item-center w-[452px] h-[452px] object-cover rounded-lg" />
    </div>
</div>


</div>




  )
}

export default About
