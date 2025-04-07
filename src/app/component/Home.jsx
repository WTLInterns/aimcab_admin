'use client'

import React from 'react'
import Navbar from '../../container/component/Navbar';
import Footer from '../../container/component/Footer';
import Index from '../HomePage/Index.jsx';
// import About_Aimcab from '../../components/About_Aimcab';

const Home = () => {
  return (
    <>
     {/* <Navbar/> */}
    
     <Index/>
     {/* <About_Aimcab/> */}
     <Footer /> 
    </>
  )
}

export default Home;