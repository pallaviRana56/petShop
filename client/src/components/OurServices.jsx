import React from 'react'
import back from '../images/backimage.avif'
import image from '../images/img.png'

function OurServices() {
    return (
        <div>

           
            <div className="bg-cover bg-center h-screen"
                style={{ backgroundImage: `url(${back})` }}>

                <div className="flex mx-[150px]">

                    <h1 className=" text-5xl font-bold pt-[130px]">OUR SERVICES</h1>


                </div>


                <div className='flex flex-col justify-center md:flex-row space-x-[150px] mt-[40px]'>
                    <img className='rounded-2xl h-[450px] mx-[100px] hover:scale-90 duration-300 shadow-[0_3px_8px_rgb(0,0,0,1.5)]' src={image} alt="Catty" />

                    <div className='mt-[55px]'>
                        <h2 className=" text-xl font-bold text-[#e0c7e7ea]"><i className="fa-solid fa-greater-than text-blue-600  mr-2" />Cat Boarding</h2>
                        <p className='max-w-[250px] text-[#fbf9fa]'>Safe and comfortable environment for your cat while you're away.
                            Peace of mind for owners, socialization opportunities for cats</p>

                        <h2 className="text-xl font-bold text-[#e0c7e7ea]"><i className="fa-solid fa-greater-than text-blue-600 mr-2" />Cat Grooming</h2>
                        <p className='max-w-[250px] text-[#ffff]'>Professional grooming services to keep your cat looking and feeling great.
                            Bathing, brushing, nail trimming, ear cleaning.</p>

                        <h2 className="text-xl font-bold text-[#e0c7e7ea]"><i className="fa-solid fa-greater-than text-blue-600 mr-2" />Veterinary Services</h2>
                        <p className='max-w-[250px] text-[#ffff]'>Comprehensive veterinary care to ensure your cat’s health and well-being.
                            Regular check-ups, vaccinations.</p>

                    </div>


                    <div className='mt-[55px]'>

                        <h2 className="text-xl font-bold text-[#e0c7e7ea]"><i className="fa-solid fa-greater-than text-blue-600 mr-2" />Cat Adoption</h2>
                        <p className='max-w-[250px] text-[#ffff]'>Help find a forever home for cats in need. Screening, matching process.</p>

                        <h2 className="text-xl font-bold text-[#e0c7e7ea]"><i className="fa-solid fa-greater-than text-blue-600 mr-2" />EMERGENCY CARE</h2>
                        <p className='max-w-[250px] text-[#ffff]'>Reach our emergency team at any time, day or night.
                            Continuous monitoring and specialized care for critically ill cats.</p>

                        <h2 className="text-xl font-bold text-[#e0c7e7ea]"><i className="fa-solid fa-greater-than text-blue-600 mr-2" />Pet Taxi</h2>
                        <p className='max-w-[250px] text-[#ffff]'>Safe and reliable transportation for your cat. Convenience for owners, stress-free travel for cats.</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default OurServices


