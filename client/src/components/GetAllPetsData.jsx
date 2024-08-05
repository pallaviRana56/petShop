import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function GetAllPetsData() {

    const [value, setvalue] = useState([]);

    useEffect(() => {

        const SignUpDataBase = async () => {

            try {
                
                const url = `http://localhost:5000/allpets/AllBlogs`;
                
                const pets = await axios.get(url,{
                    headers: {
                        "x-api-key": `${sessionStorage.getItem("AcessToken")}`
                    }
                })
                setvalue(pets.data.Data)
             

                if (pets.status === false) window.alert("invalid data")
                    
            }
            catch (err) { window.alert(err.response.data.message) }

        }
        SignUpDataBase()
    }, [])


    return (
        <div className='min-h-screen flex flex-col justify-center items-center lg:mx-[20px] px-5 mb-10 '>
        <h1 className='text-2xl font-semibold text-center pt-2 pb-10'>Product</h1>
        <div className='flex flex-wrap gap-10 justify-center'>


            {
                value.map((post, id) => {
                    const { _id,picture, price, title } = post;
                     return <>
                     
                     <div className='flex flex-col justify-center items-center w-full lg:w-1/4 p-5 shadow-[0_3px_8px_rgb(0,0,0,0.24)] hover:shadow-[0_8px_80px_rgb(80,0,0,5)] rounded-lg ' >
                       <Link to={`ViewDeatails/${_id}`}>
                       <img className='rounded-md h-[300px] w-[300px]' src={picture} alt="img" key={id}/>
                       </Link> 
                        <div className='space-y-4'>
                            <h3 className='font-bold text-center text-xl pt-6' key={id}>{title}</h3>

                            <div className="flex flex-row justify-center text-black text-2xl">
                            <i class="fa-regular fa-star"/>
                            <i class="fa-regular fa-star"/>
                            <i class="fa-regular fa-star"/>
                            <i class="fa-regular fa-star"/>
                            <i class="fa-regular fa-star-half"/>
                               
                            </div>

                            <div className='flex flex-row justify-center items-center gap-6'>
                                <h3 className='font-semibold text-lg' key={id}>₹ {price}</h3>
                                <Link to={`ViewDeatails/${_id}`}>
                                <button className='my-3 px-8 py-1 border-4 border-[#ea7228] text-[#ea7228] hover:bg-[#ea7228] hover:text-white transition-all rounded-full'>
                                    Click
                                </button> </Link> 
                            </div>
                        </div>
                    </div>
                     
                     </>
                })
            }
        </div>
    </div>
    )
}

export default GetAllPetsData