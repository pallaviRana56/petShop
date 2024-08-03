import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import billi from "../images/billipower.avif"
import Googleicons from '../icons/google.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



function SignUp({isUserAuth}) {


  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState()

 

  const ChangeSignUpData = (e) => {
    
    e.preventDefault()
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
  }



  const SignUpDataBase = async (e) => {
    e.preventDefault()
    try {

      const url = 'http://localhost:5000/UserLogin';

      const user = await axios.post(url, signUpData)
      const token = user.data.token;
      const id = user.data.UserId;
      
      if (user.status === false) window.alert("invalid data")
      else {
        sessionStorage.setItem('AcessToken',token)
        sessionStorage.setItem('UserId',id)
        isUserAuth(true)
       
        navigate('/')
      }
    }
    catch (err) { window.alert(err.response.data.message) }

  }

  return (
    <div className= "pallaviA w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4 py-[110px]">

      SignUp page Design
      <div className="bg-gray-100 fixed flex rounded-2xl shadow-2xl p-5">

        {/* SignUp Left Side Design For */}
        <div className='md:w-1/2 px-8'>
          <h1 className='font-bold text-3xl mt-2'>Login</h1>
          <p className='mt-7 text-l'>
            If you already are not a member, then
            <Link className='text-blue-500 ' to="/SignUp"> Sign Up</Link>
          </p>

          <form className='flex flex-col gap-4 mt-6'>
            <input onChange={ChangeSignUpData} className='p-2  mt-1 rounded-xl border' type="text" name="email" placeholder='Enter The Email' />
            <input onChange={ChangeSignUpData} className='p-2 mt-1 rounded-xl border' type="password" name="password" placeholder='Enter The Password' />

            <button onClick={SignUpDataBase} className='bg-[#1e376e] mt-3 rounded-xl text-white py-2 hover:scale-110 transform duration-300'>
              Login
            </button>

          </form>

          <div className='mt-6 grid grid-cols-3 items-center text-gray-500'>
            <hr className='border-gray-500 mt-2' />
            <p className='text-center'>OR</p>
            <hr className='border-gray-500' />
          </div>


          <button className='mt-6 flex items-center bg-white border py-2 w-full rounded-xl hover:bg-gray-200 hover:scale-105 transform duration-300'>
            <img className='h-[30px]  mx-[35px]' src={Googleicons} alt="SignGoogleLogo" />
            Sign Up with Google
          </button>

        </div>



        {/* Right side Design */}
        <div className="w-[400px] md:block hidden">
          <img className='rounded-xl h-[450px]' src={billi} alt="Cat" />


        </div>

      </div>

    </div>
  )
}

export default SignUp