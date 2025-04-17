"use client"
import React from 'react'
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../container/component/Navbar'
import Footer from '../../container/component/Footer';
import About_Aimcab from '../../components/About_Aimcab';
const page = () => {
  const headingRef = useRef(null);
      const paragraphRef = useRef(null);
      const buttonsRef = useRef(null);
    
      useEffect(() => {
        // Create a timeline for sequential animations
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        
        // Animate elements one by one
        tl.from(headingRef.current, {
          x: -50,
          opacity: 0,
          duration: 0.8
        })
        .from(paragraphRef.current, {
          x: -50,
          opacity: 0,
          duration: 0.6
        }, "+=0.2") // starts 0.2s after previous animation ends
      }, []);
  return (
    <div>
       <Navbar/>
      <Head>
      <title>Pune to Ujjain Cab | Safe & Affordable Taxi Service</title>
      <meta name="description" content="Book Pune to Ujjain cab services with Aim Cab for a hassle-free journey. Affordable fares, expert drivers & 24/7 service for a smooth travel experience." />
      <link rel="canonical" href="https://aimcab.com/pune-to-ujjain-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Ujjain Cab, Pune To Ujjain cab Services, Cab Services From Pune To Ujjain, Pune To Ujjain Cab Services charges, Best cab Services Pune To Ujjain" />
      <meta name="robots" content="index, follow"/>

      </Head>
      
      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white py-12  text-center ">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold mb-4 "
          >
            AIMCAB Pune Routes
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Book your cab and explore Pune with ease
          </p>
          
       
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center text-[#76453B]">
      Pune to Ujjain Cab Services - Book Affordable & Comfortable Rides
      </h2>

      <BookingForm />
      
      {/* Service Description */}
      {/* Service Description */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm">
  <h3 className="text-3xl font-bold text-[#76453B]">
    🚖 Why Choose Our Pune to Ujjain Cab Services?
  </h3>
  <div className="mt-6 p-4 bg-white rounded-lg shadow-xs">
    <p className="text-lg text-gray-700 leading-relaxed">
      Traveling from Pune to Ujjain by cab is the most convenient and comfortable option, offering a seamless journey with well-maintained cabs and professional drivers. Aim Cab provides Pune to Ujjain cab services at the lowest prices, ensuring a stress-free travel experience.
    </p>
    <div className="mt-6 grid md:grid-cols-2 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg flex items-start">
        <span className="text-green-500 text-2xl mr-3">✓</span>
        <div>
          <strong className="text-[#76453B]">Affordable Pricing</strong>
          <p className="text-gray-700">Starting at just ₹11/km</p>
        </div>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg flex items-start">
        <span className="text-green-500 text-2xl mr-3">✓</span>
        <div>
          <strong className="text-[#76453B]">Trained and Verified Drivers</strong>
          <p className="text-gray-700">Experienced professionals ensuring a safe ride</p>
        </div>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg flex items-start">
        <span className="text-green-500 text-2xl mr-3">✓</span>
        <div>
          <strong className="text-[#76453B]">24/7 Customer Assistance</strong>
          <p className="text-gray-700">Round-the-clock support for all your travel needs</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Best Travel Choice */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3">
    🏆 Pune to Ujjain Cab – Your Best Travel Choice
  </h4>
  <div className="mt-6 bg-gray-50 p-5 rounded-lg">
    <p className="text-lg text-gray-700 leading-relaxed">
      When planning a road trip from Pune to Ujjain, hiring a cab provides unmatched comfort compared to buses or trains. With Aim Cab, you get the best cab services from Pune to Ujjain, ensuring a safe and hassle-free journey.
    </p>
  </div>
</section>

{/* Distance & Travel Time */}
<section className="mt-10 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
  <div className="flex items-center">
    <h4 className="text-2xl font-bold text-amber-800">
      🗺️ Distance & Travel Time
    </h4>
    <span className="ml-auto bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">650 km | 12-14 hrs</span>
  </div>
  <div className="mt-6 bg-white p-5 rounded-lg shadow-sm">
    <div className="grid md:grid-cols-3 gap-4">
      <div className="bg-amber-50 p-4 rounded-lg">
        <strong className="block text-amber-700 text-lg">Route</strong>
        <p className="text-gray-700">Pune → Nashik → Indore → Ujjain</p>
      </div>
      <div className="bg-amber-50 p-4 rounded-lg">
        <strong className="block text-amber-700 text-lg">Best Time to Travel</strong>
        <p className="text-gray-700">Early morning for minimal traffic</p>
      </div>
      <div className="bg-amber-50 p-4 rounded-lg">
        <strong className="block text-amber-700 text-lg">Road Conditions</strong>
        <p className="text-gray-700">NH52 and NH47 - Well maintained</p>
      </div>
    </div>
  </div>
</section>

{/* Pricing Table */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3">
    💰 Pune to Ujjain Cab Service Charges
  </h4>
  <div className="mt-6 overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-indigo-100 text-[#76453B]">
          <th className="p-3 text-left border-b border-indigo-200">Cab Type</th>
          <th className="p-3 text-center border-b border-indigo-200">Capacity</th>
          <th className="p-3 text-right border-b border-indigo-200">Price/km</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-blue-50">
          <td className="p-3 border-b border-gray-100"><strong>Sedan (Dzire, Xcent)</strong></td>
          <td className="p-3 text-center border-b border-gray-100">4</td>
          <td className="p-3 text-right border-b border-gray-100">₹11/km</td>
        </tr>
        <tr className="hover:bg-blue-50">
          <td className="p-3 border-b border-gray-100"><strong>SUV (Ertiga, Innova)</strong></td>
          <td className="p-3 text-center border-b border-gray-100">6-7</td>
          <td className="p-3 text-right border-b border-gray-100">₹15/km</td>
        </tr>
        <tr className="hover:bg-blue-50">
          <td className="p-3"><strong>Luxury Cars</strong></td>
          <td className="p-3 text-center">4-5</td>
          <td className="p-3 text-right">₹25/km</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="mt-4 bg-blue-50 p-4 rounded-lg">
    <p className="text-[#76453B] text-sm">Additional charges may apply for extra stoppages or night travel.</p>
  </div>
</section>

{/* Route Attractions */}
<section className="mt-10 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
  <h4 className="text-2xl font-bold text-[#76453B]">
    🌄 Exploring Attractions on the Pune to Ujjain Route
  </h4>
  <div className="mt-6 grid md:grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <strong className="text-[#76453B]">Nashik</strong>
      <p className="text-gray-600 mt-1">Trimbakeshwar Temple, Sula Vineyards, Pandavleni Caves</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <strong className="text-[#76453B]">Indore</strong>
      <p className="text-gray-600 mt-1">Rajwada Palace, Sarafa Bazaar, Lal Bagh Palace</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <strong className="text-[#76453B]">Ujjain</strong>
      <p className="text-gray-600 mt-1">Mahakaleshwar Jyotirlinga, Ram Ghat, Kal Bhairav Temple</p>
    </div>
  </div>
</section>

{/* Booking Process */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3">
    📱 How to Book Pune to Ujjain Cab with Aim Cab?
  </h4>
  <div className="mt-6 space-y-4">
    <div className="flex items-start">
      <div className="bg-indigo-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</div>
      <p className="text-gray-700">Visit <a href="https://aimcab.com" className="text-blue-600 underline">aimcab.com</a></p>
    </div>
    <div className="flex items-start">
      <div className="bg-indigo-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</div>
      <p className="text-gray-700">Enter your pickup and drop-off location</p>
    </div>
    <div className="flex items-start">
      <div className="bg-indigo-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</div>
      <p className="text-gray-700">Select your preferred cab type</p>
    </div>
    <div className="flex items-start">
      <div className="bg-indigo-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</div>
      <p className="text-gray-700">Confirm booking and make payment</p>
    </div>
    <div className="flex items-start">
      <div className="bg-indigo-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">5</div>
      <p className="text-gray-700">Receive instant confirmation!</p>
    </div>
  </div>
</section>

{/* Why Choose Us */}
<section className="mt-10 p-6 bg-indigo-50 rounded-xl">
  <h4 className="text-2xl font-bold text-[#76453B]">
    🏅 Why Choose Aim Cab for Pune to Ujjain Travel?
  </h4>
  <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <div className="text-[#76453B] font-bold text-lg">20+ Years</div>
      <p className="text-gray-700">Serving customers since 2001</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <div className="text-[#76453B] font-bold text-lg">200,000+</div>
      <p className="text-gray-700">Satisfied customers</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <div className="text-[#76453B] font-bold text-lg">3,000+</div>
      <p className="text-gray-700">Successful outstation trips</p>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3">
    ❓ FAQs – Pune to Ujjain Cab Services
  </h4>
  <div className="mt-6 grid md:grid-cols-2 gap-4">
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">What is the starting fare?</strong>
      <p className="text-gray-700">₹11/km for a sedan</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">Can I book a one-way cab?</strong>
      <p className="text-gray-700">Yes, we offer one-way and round-trip services</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">Are toll charges included?</strong>
      <p className="text-gray-700">Yes, unless mentioned otherwise</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">Can I add multiple stops?</strong>
      <p className="text-gray-700">Yes, you can customize your trip</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">What is the distance?</strong>
      <p className="text-gray-700">Around 650 km, taking 12-14 hours.</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">What cab types are available?</strong>
      <p className="text-gray-700">Sedans, SUVs, and luxury cars.</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">Is there a cancellation fee?</strong>
      <p className="text-gray-700">Check at the time of booking.</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">Are night travel charges applicable?</strong>
      <p className="text-gray-700">Yes, additional charges may apply.</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">Can I add multiple stops?</strong>
      <p className="text-gray-700">Yes, you can customize your trip</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">How to contact Aim Cab?</strong>
      <p className="text-gray-700">Visit <a href="https://aimcab.com" className="text-blue-500 underline">aimcab.com</a>.</p>
    </div>
  </div>
</section>

<About_Aimcab  />

{/* Call to Action */}
<section className="mt-10 p-8 bg-gradient-to-r from-[#76453B] to-[#F3B664] rounded-xl text-white text-center">
  <h4 className="text-2xl font-bold mb-4">
    🚗 Ready for Your Spiritual Journey to Ujjain?
  </h4>
  <p className="text-xl mb-6">Book your comfortable cab today and travel stress-free!</p>
  
  <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-lg">
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="tel:+9191305454491" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-colors">
        <span className="mr-2">📞</span> Call Now
      </a>
      <a href="https://aimcab.com" target="_blank" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-colors">
        <span className="mr-2">🌐</span> Book Online
      </a>
    </div>
  </div>
  
  <p className="mt-8 text-lg font-medium">
    Experience the comfort of Pune to Ujjain cab services with Aim Cab's professional drivers and well-maintained vehicles!
  </p>
</section>




            <div> <Footer/></div>
                      
          </div>

      
    
  )
}

export default page;