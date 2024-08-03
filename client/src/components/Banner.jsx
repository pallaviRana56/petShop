import React from 'react';
import HomeImg from '../images/background.jpg';



function Banner() {
    return (
        <div
      className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${HomeImg})` }}>

             <div className="max-w-xl justify-left ">
                
                <h1 className='font-bold text-7xl'>
                    Welcome To Cat's Club!
                </h1>
                <h1 className='text-5xl font-semibold bg-gradient-to-r from-[#a53535c2] via-[#11113ee2] to-[#ac0707] inline-block text-transparent bg-clip-text'>
                Your Ultimate Community for Cat Lovers.
                Join a Pawsitive Experience!

                </h1>
            </div> 

        </div>
    )
}

export default Banner


