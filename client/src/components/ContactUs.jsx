import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function ContactUs() {

    const navigate = useNavigate();
  const [feedbackData, setfeedbackData] = useState()

  const Changefeedback = (e) => {
    e.preventDefault()
    setfeedbackData({ ...feedbackData, [e.target.name]: e.target.value })
    console.log(feedbackData)
  }



  const feedbackDataBase = async (e) => {
    e.preventDefault()
    try {

      const url = 'http://localhost:5000/createfeedback';

      const user = await axios.post(url, feedbackData)
      if (user.status === false) window.alert("invalid data")
      else { 
    window.alert("Thank for your Feedback")
    navigate('/') }
    }
    catch (err) { window.alert(err.response.data.message) }
   
  }

    return (
        <div className='flex flex-col w-full h-[350px] justify-evenly items-center'>

            <div className='flex mt-[10px] flex-col md:flex-row md:space-x-6   space-y-6 md:space-y-0 bg-[#ffff] w-full max-w-4xl text-white p-2'>


                <div className='flex flex-col space-y-8 justify-between'>
                    <div>
                        <h1 className='font-bold text-[#100202] text-4xl tracking-wide'>Contact Us</h1>
                        <p className='pt-2 text-[#975f0c] text-sm max-w-[500px]'>We love hearing from fellow cat enthusiasts! Whether you 
                            have a question about our upcoming shows, need assistance with registration, or simply want to share your feline 
                            experiences, we’re here to help. </p>

                            <h1 className="font-bold text-black text-4xl pt-[20px]">General Inquiries:</h1>
                    </div>

                    <div className='flex flex-col justify-center gap-2 space-y-4 text-black'>
                        <div className='inline-flex space-x-2 items-center'>
                        <i className="fa-solid fa-phone text-[#714205] text-xl"/>
                        <span>+91 8008008080</span>
                        </div>

                        <div className='inline-flex space-x-2 items-center'>
                        <i className="fa-solid fa-message text-[#714205] text-xl"/>
                        <span>pallavirana012@gmail.com</span>
                        </div>

                        <div className='inline-flex space-x-2 items-center'>
                        <i className="fa-solid fa-location-dot text-[#714205] text-xl"/>
                        <span>Karnal Haryana</span>
                        </div>
                    </div>

                    <div className='flex gap-3 text-lg'>
                    <i className="fa-brands fa-facebook hover:scale-125 duration-300"/>
                    <i className="fa-brands fa-twitter hover:scale-125 duration-300"/>
                    <i className="fa-brands fa-linkedin hover:scale-125 duration-300"/>
                    <i className="fa-brands fa-instagram hover:scale-125 duration-300"/>
                    </div>
                </div>

                <div>
                        <div className='bg-white rounded-lg p-8 text-gray-600 md:w-[400px]'>

                            <form className='flex flex-col gap-5' action="">
                                <div className='flex flex-col gap-2'>
                                <label htmlFor="form name">Your Name</label>
                                <input onChange={Changefeedback} type="text" name="name" id="name" placeholder='Enter Your Name'
                                    className='border-none ring-1 ring-gray-300 w-full rounded-md px-4 py-2  focus:ring-4 focus:ring-teal-600'/>
                                </div>

                                <div className='flex flex-col gap-2'>
                                <label htmlFor="form name">Email Address</label>
                                <input onChange={Changefeedback} type="text" name="email" id="name" placeholder='Enter Your Address'
                                    className='border-none ring-1 ring-gray-300 w-full rounded-md px-4 py-2  focus:ring-4 focus:ring-teal-700'
                                />
                                </div>

                                <div className='flex flex-col gap-2'>
                                <label htmlFor="form name">Message</label>
                                <textarea onChange={Changefeedback} rows={4} type="text" name="message" id="name" placeholder='Write the message'
                                    className='border-none ring-1 ring-gray-300 w-full rounded-md px-4 py-2  focus:ring-4 focus:ring-teal-500'
                                />
                                </div>

                                <button onClick={feedbackDataBase} className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase'>Send Message</button>
                            </form>
                        </div>
                </div>

            </div>

        </div>
    )
}

export default ContactUs