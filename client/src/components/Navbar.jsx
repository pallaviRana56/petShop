import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';




function Navbar() {


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (

    <div className='w-full fixed'>
      <div onClick={toggleMenu} className='fixed mx-3 my-4 overflow-visible lg:hidden sm:* '>
        <i className="fa-solid fa-bars fa-2xl" />
      </div>

      <nav className='w-full bg-white flex justify-between items-center px-12 h-16 lg:gap-8'>

        <Link to='/'><div className='relative text-2xl font-bold  text-black whitespace-nowrap '>
          <div className='flex items-cente'>

            <img className='rounded-full mt-[50px] h-[120px] w-[130px]' src={logo} alt="" />

          </div>
        </div>
        </Link>

        <div className={`Ravi absolute top-[64px]  text-black left-0 max-lg:bg-[#ffffff30] w-full flex flex-col 
        gap-6 items-center py-2 text-lg font-bold lg:static lg:flex lg:flex-row lg:justify-between
                ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className='baskervville-sc-regular text-xl flex flex-col items-center gap-6 lg:flex-row lg:gap-8'>
            <li className='hover:text-black'><Link to="/">Home</Link></li>
            <li className='hover:text-black'><Link to="/OurServices">OurServices</Link></li>
            <li className='hover:text-black'><Link to="/About">About</Link></li>
            <li className='hover:text-black'><Link to="/Contact">Contact</Link></li>
            <li className='hover:text-black'><Link to="/Categories">Categories</Link></li>
            
            </ul>

           {/* <div>
            <Link to ="/Categories">Categories</Link>
           
           <select className='p-2' name="pets" id="pets">
            <option value="Cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="bird">Bird</option>
           </select>
           </div> */}
            

          <div className='flex flex-col items-center gap-6 lg:flex-row lg:gap-8'>
            <Link to="/SignUp"> <button className='rounded-full h-10 w-[90px] 
            bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[5.5px]'>
              <div className='flex hover:text-white text-center justify-center rounded-full  h-full w-full'>
                Sign</div></button></Link>

            <Link to="/LogIn"><button className='bg-orange-400 hover:text-black rounded-lg px-3 py-1'>Logn</button></Link>

          </div>

        </div>


        <img className='h-[50px] w-[50px] rounded-full' src="https://i.pinimg.com/736x/99/6c/a6/996ca6d41ae979589d3f50e0967cdcb9.jpg" alt="profile" />
      </nav>

    </div>

  )
}

export default Navbar