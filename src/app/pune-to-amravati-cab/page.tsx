"use client"
import React from 'react'
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../container/component/Navbar'
import About_Aimcab from '../../components/About_Aimcab';
import Footer from '../../container/component/Footer';

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
      <Head>
      <title>Pune to Amravati Cab | Affordable & Reliable Taxi</title>
      <meta name="description" content="Book Pune to Amravati cab services with Aim Cab for a comfortable journey. Affordable fares, expert drivers & 24/7 service for a smooth travel experience." />
      <link rel="canonical" href="https://aimcab.com/pune-to-amravati-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Amravati Cab, Pune To Amravati cab Services, Cab Services From Pune To Amravati, Pune To Amravati Cab Services charges, Best cab Services Pune To Amravati" />
      <meta name="robots" content="index, follow" />

      </Head>
      
      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white py-12 md:py-20 text-center ">
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
      Pune to Amravati Cab Services - Hassle-Free & Affordable Travel
      </h2>

      <BookingForm />
      
      {/* Service Description */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm">
  <h3 className="text-3xl font-bold text-[#76453B]">
    Why Choose Our Pune to Amravati Cab Services?
  </h3>
  <div className="mt-6 p-4 bg-white rounded-lg shadow-xs">
    <p className="text-lg text-gray-700 leading-relaxed">
      Traveling from Pune to Amravati is now easy with Aim Cab's Pune to Amravati cab services. Whether you need a one-way trip or a round-trip, we provide reliable and budget-friendly rides with well-maintained cabs and experienced drivers.
    </p>
    <ul className="mt-4 space-y-3">
      <li className="flex items-start">
        <span className="text-green-500 text-xl mr-2">✓</span>
        <span className="text-gray-700"><strong>Affordable Pricing –</strong> Competitive rates starting at just ₹11/km.</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 text-xl mr-2">✓</span>
        <span className="text-gray-700"><strong>Trained Drivers –</strong> Professional and courteous chauffeurs for a safe journey.</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 text-xl mr-2">✓</span>
        <span className="text-gray-700"><strong>Multiple Booking Options –</strong> Choose between one-way, round-trip, or multi-stop rides.</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 text-xl mr-2">✓</span>
        <span className="text-gray-700"><strong>Convenient Pick-up & Drop-off –</strong> Get picked up from your doorstep and dropped off at your destination.</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 text-xl mr-2">✓</span>
        <span className="text-gray-700"><strong>Dedicated Customer Support –</strong> Our team is available 24/7 to assist you with your travel needs.</span>
      </li>
    </ul>
  </div>
</section>

{/* Pune to Amravati Cab – Your Best Travel Choice */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3">
    Pune to Amravati Cab – Your Best Travel Choice
  </h4>
  <div className="mt-6 bg-gray-50 p-5 rounded-lg">
    <p className="text-lg text-gray-700 leading-relaxed">
      When planning a trip from Pune to Amravati, booking a cab is the most comfortable and hassle-free travel option. Our cab services from Pune to Amravati ensure you reach your destination without stress, making your journey enjoyable and convenient.
    </p>
  </div>
</section>

{/* Distance & Travel Time */}
<section className="mt-10 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
  <div className="flex items-center">
    <h4 className="text-2xl font-bold text-amber-800">
      🛣️ Distance & Travel Time
    </h4>
    <span className="ml-auto bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">600 km | 10-12 hrs</span>
  </div>
  <div className="mt-6 bg-white p-5 rounded-lg shadow-sm">
    <div className="grid md:grid-cols-3 gap-4 text-center">
      <div className="bg-amber-50 p-3 rounded-lg">
        <strong className="block text-amber-700">Distance</strong>
        <span className="text-gray-700">Approximately 600 km</span>
      </div>
      <div className="bg-amber-50 p-3 rounded-lg">
        <strong className="block text-amber-700">Duration</strong>
        <span className="text-gray-700">10-12 hours</span>
      </div>
      <div className="bg-amber-50 p-3 rounded-lg">
        <strong className="block text-amber-700">Route</strong>
        <span className="text-gray-700">Pune → Ahmednagar → Aurangabad → Akola → Amravati</span>
      </div>
    </div>
  </div>
</section>

{/* Cab Services from Pune to Amravati – Transparent Pricing */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3">
    💰 Transparent Pricing for Pune to Amravati Cabs
  </h4>
  <div className="mt-6 overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-indigo-100 text-[#76453B]">
          <th className="p-3 text-left border-b border-indigo-200">Cab Type</th>
          <th className="p-3 text-center border-b border-indigo-200">Passenger Capacity</th>
          <th className="p-3 text-right border-b border-indigo-200">Price per km</th>
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
          <td className="p-3"><strong>Luxury Cars (BMW, Audi)</strong></td>
          <td className="p-3 text-center">4-5</td>
          <td className="p-3 text-right">₹25/km</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="mt-4 bg-blue-50 p-4 rounded-lg">
    <p className="text-[#76453B] text-sm">Note: Additional charges may apply for extra stoppages or night travel.</p>
  </div>
</section>

{/* Top Attractions Along Pune to Amravati Route */}
<section className="mt-10 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
  <h4 className="text-2xl font-bold text-[#76453B]">
    🌄 Top Attractions Along Pune to Amravati Route
  </h4>
  <div className="mt-6 grid md:grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <strong className="text-[#76453B]">Aurangabad</strong>
      <p className="text-gray-600 mt-1">Visit Bibi Ka Maqbara, Ellora Caves, and Daulatabad Fort.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <strong className="text-[#76453B]">Akola</strong>
      <p className="text-gray-600 mt-1">Explore Narnala Fort and Shegaon, a famous pilgrimage site.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <strong className="text-[#76453B]">Amravati</strong>
      <p className="text-gray-600 mt-1">Visit Ambadevi Temple, Chikhaldara Hill Station, and Wadali Talav.</p>
    </div>
  </div>
</section>

{/* How to Book Pune to Amravati Cab */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3">
    📱 How to Book Pune to Amravati Cab with Aim Cab?
  </h4>
  <div className="mt-6 space-y-4">
    <div className="flex items-start">
      <div className="bg-indigo-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</div>
      <p className="text-gray-700">Visit <a href="https://aimcab.com" className="text-blue-600 underline">aimcab.com</a>.</p>
    </div>
    <div className="flex items-start">
      <div className="bg-indigo-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</div>
      <p className="text-gray-700">Enter your pickup and drop-off location.</p>
    </div>
    <div className="flex items-start">
      <div className="bg-indigo-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</div>
      <p className="text-gray-700">Choose your preferred cab type.</p>
    </div>
    <div className="flex items-start">
      <div className="bg-indigo-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</div>
      <p className="text-gray-700">Confirm booking and make a secure payment.</p>
    </div>
    <div className="flex items-start">
      <div className="bg-indigo-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">5</div>
      <p className="text-gray-700">Receive instant confirmation and enjoy a smooth ride!</p>
    </div>
  </div>
</section>

{/* Why Trust Aim Cab for Your Pune to Amravati Travel? */}
{/* <section className="mt-10 p-6 bg-indigo-50 rounded-xl">
  <h4 className="text-2xl font-bold text-[#76453B]">
    🏆 Why Trust Aim Cab for Your Pune to Amravati Travel?
  </h4>
  <div className="mt-6 grid md:grid-cols-2 gap-4">
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <div className="text-[#76453B] font-bold text-lg">20+ Years</div>
      <p className="text-gray-700">Providing quality cab services since 2001</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <div className="text-[#76453B] font-bold text-lg">50+ Cabs</div>
      <p className="text-gray-700">Personal fleet operating across India</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <div className="text-[#76453B] font-bold text-lg">200,000+</div>
      <p className="text-gray-700">Satisfied customers</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <div className="text-[#76453B] font-bold text-lg">3,000+</div>
      <p className="text-gray-700">Successful long-distance journeys</p>
    </div>
  </div>
</section> */}

{/* FAQs – Pune to Amravati Cab Services */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3">
    ❓ FAQs – Pune to Amravati Cab Services
  </h4>
  <div className="mt-6 grid md:grid-cols-2 gap-4">
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">What is the starting fare?</strong>
      <p className="text-gray-700">₹11/km for a sedan cab.</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">What is the distance?</strong>
      <p className="text-gray-700">Approximately 600 km (10-12 hours journey).</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">What types of cabs are available?</strong>
      <p className="text-gray-700">Sedans, SUVs, and luxury cars.</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">Can I book a one-way cab?</strong>
      <p className="text-gray-700">Yes, we offer both one-way and round-trip services.</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">Are there extra charges for night travel?</strong>
      <p className="text-gray-700">Yes, additional fees may apply.</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <strong className="text-[#76453B]">How can I contact Aim Cab?</strong>
      <p className="text-gray-700">Visit <a href="https://aimcab.com" className="text-blue-600 underline">aimcab.com</a> or call <a href="tel:+9191305454491" className="text-blue-600 underline">+91 91305454491</a>.</p>
    </div>
  </div>
</section>

{/* Call to Action */}
<About_Aimcab  />
            <div> <Footer/></div>
          </div>

      
    
  )
}

export default page;