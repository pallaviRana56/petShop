import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

function AdminLog({isUserAuth}) {

    const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState()

 

  const ChangeSignUpData = (e) => {
    
    e.preventDefault()
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
    console.log(signUpData)
  }



  const SignUpDataBase = async (e) => {
    e.preventDefault()
    try {

      const url = 'http://localhost:5000/adminLogin';

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
    <div className='h-screen flex justify-center items-center'>
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <form action="#/" method="POST" className="space-y-6">
            <div>
                <label for="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input onChange={ChangeSignUpData} type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            </div>
            <div>
                <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input onChange={ChangeSignUpData} type="password" id="password" name="password" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                    <label for="remember_me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                </div>
                <div className="text-sm">
                    <a href="#/" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                </div>
            </div>
            <div>
                <button onClick={SignUpDataBase} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
            </div>
        </form>
    </div>

    </div>
  )
}

export default AdminLog