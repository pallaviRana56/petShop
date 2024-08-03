import React from 'react';
import Banner from './Banner';
import GetAllPetsData from './GetAllPetsData'
import OurServices from './OurServices';
import About from './About';
import Contact from './Contact'
import Footer from './Footer'


function Home() {
  return (

    <div>
    
      <Banner/>
      <GetAllPetsData/>
      <OurServices/>
      <About/>
      <Contact/>
      <Footer/>
      

    </div>
     )
}

export default Home
