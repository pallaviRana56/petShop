import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ViewDeatails() {
    let {id} = useParams();


    const navigate = useNavigate();

    const [value, setvalue] = useState(null);
   

    useEffect(() => {

        const SignUpDataBase = async () => {

            try {
                
                const url = `http://localhost:5000/pets/${id}`;
                
                const pets = await axios.get(url,{
                    headers: {
                        "x-api-key": `${sessionStorage.getItem("AcessToken")}`
                    }
                })
                setvalue(pets.data.msg)
                
                if (pets.status === false) window.alert("invalid data")
                    
                }
                catch (err) { window.alert(err.response.data.message) }
                
            }
            SignUpDataBase()
        }, [id]);


    if (!value || !value[0]) return <div>No data found</div>;

    

    const deleteData = async(e)=>{
        
    e.preventDefault()
    try {

       let userid = sessionStorage.getItem('UserId');
       
      const url = `http://localhost:5000/pets/${userid}/${id}`; 

      const user = await axios.delete(url,{
        headers: {
            "x-api-key": `${sessionStorage.getItem("AcessToken")}`
        }
    })
      
    console.log(user)
      if (user.status === false) window.alert("invalid data")
      else { 
        window.alert("Delete Post")
        navigate('/')  }
    }
    catch (err) { window.alert(err.response.data.message) }
}
        

  return (
    <div className='flex flex-col md:flex-row  justify-center items-center min-h-screen'>

        <div>
            <img className='h-[500px] w-[350px] rounded-xl hover:scale-105 duration-300' src={value[0].picture} alt="Immage" />
        </div>

        <div className='flex flex-col  items-center max-w-[800px] md:w-full'>
        <div className='flex flex-row gap-3 ml-[600px]'>
            <i class="fas fa-edit text-blue-300 text-4xl hover:scale-110 duration-300"></i>
            <button onClick={deleteData}> 

            <i  class="fa-solid fa-trash text-red-500 text-4xl hover:scale-110 duration-300"/>
            </button>
            </div>
        <h1 className=' font-bold text-6xl'>{value[0].title}</h1>
        <h2 className=' pt-[20px] px-[55px]'>{value[0].description}</h2>
            <h1 className='font-semibold text-xl pt-[20px]'>Main Info</h1>
            <div className='px-[40px] justify-col  mt-4 '>

                    <div className='flex gap-3'>
                    <h1>Origin - </h1>
                    <p className='font-bold'>{value[0].Main_Info?.Origin}</p>
                    </div>

                    <div className='flex gap-3'>
                    <h1>Coat patterns - </h1>
                    <p className='font-bold'>{value[0].Main_Info?.Coat_Pattern}</p>
                    </div>

                    <div className='flex gap-3'>
                    <h1>Coat Length - </h1>
                    <p className='font-bold'>{value[0].Main_Info?.Coat_Length}</p>
                    </div>     
            </div>
        </div>
     
       
        
    </div>
  )
}

export default ViewDeatails