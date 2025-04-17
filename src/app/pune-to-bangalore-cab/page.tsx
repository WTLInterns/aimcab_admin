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
      <title>Pune to Bangalore Cab | Affordable & Reliable Taxi</title>
      <meta name="description" content="Book Pune to Bangalore cab services with Aim Cab for a comfortable, safe & affordable ride. 24/7 service, expert drivers & hassle-free travel experience." />
      <link rel="canonical" href="https://aimcab.com/pune-to-bangalore-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Bangalore Cab, Pune To Bangalore cab Services, Cab Services From Pune To Bangalore, Pune To Bangalore Cab Services charges, Best cab Services Pune To Bangalore" />
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
      <h2 className="text-3xl font-bold mt-4 text-center">
      Pune to Bangalore Cab Services - Reliable & Affordable Travel
      </h2>

      <BookingForm />
      
      {/* Service Description */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md">
  <h3 className="text-3xl font-bold text-[#76453B] mb-6">Book Pune to Bangalore Cab Services with Aim Cab</h3>
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <p className="text-lg text-gray-700 leading-relaxed">
      Looking for a <strong className="text-[#76453B]">reliable Pune to Bangalore cab service</strong>? Aim Cab offers seamless and affordable cab services for your journey from Pune to Bangalore. Whether you're planning a business trip, family vacation, or solo journey, our Pune to Bangalore cab ensures a safe, comfortable, and hassle-free experience.
    </p>
  </div>
</section>
      
      {/* Why Choose Aim Cab */}
      {/* Why Choose Aim Cab for Pune to Karwar Travel */}
{/* Why Choose Aim Cab for Your Pune to Bangalore Trip? */}
<section className="bg-white p-8 rounded-xl shadow-md mt-8">
  <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3 mb-6">Why Choose Aim Cab for Your Pune to Bangalore Trip?</h4>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-blue-50 p-5 rounded-lg flex items-start">
      <div className="bg-indigo-100 p-2 rounded-full mr-4">
        <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <p className="text-gray-700"><strong className="text-[#76453B]">Best Price Guarantee –</strong> Enjoy the most competitive fares for Pune to Bangalore cab services.</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg flex items-start">
      <div className="bg-indigo-100 p-2 rounded-full mr-4">
        <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <p className="text-gray-700"><strong className="text-[#76453B]">Experienced & Professional Drivers –</strong> Our trained drivers ensure a smooth and safe journey.</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg flex items-start">
      <div className="bg-indigo-100 p-2 rounded-full mr-4">
        <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <p className="text-gray-700"><strong className="text-[#76453B]">Wide Range of Vehicles –</strong> Choose from hatchbacks, sedans, SUVs, and luxury cars.</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg flex items-start">
      <div className="bg-indigo-100 p-2 rounded-full mr-4">
        <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <p className="text-gray-700"><strong className="text-[#76453B]">No Hidden Charges –</strong> Transparent pricing with no last-minute surprises.</p>
    </div>
  </div>
</section>


{/* Pune to Bangalore Cab Fare & Charges */}
<section className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl shadow-md mt-8">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6">Pune to Bangalore Cab Fare & Charges</h4>
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <p className="text-lg text-gray-700 mb-6">Aim Cab provides the most affordable Pune to Bangalore cab fare in the market. Our pricing starts from ₹11/km, ensuring an economical yet comfortable ride.</p>
    
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
          <tr>
            <th className="py-3 px-4 text-left">Cab Type</th>
            <th className="py-3 px-4 text-left">Passenger Capacity</th>
            <th className="py-3 px-4 text-left">Fare (Approx.)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-blue-50">
            <td className="py-3 px-4"><strong>Hatchback</strong></td>
            <td className="py-3 px-4">4</td>
            <td className="py-3 px-4 font-semibold text-[#76453B]">₹6,999</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="py-3 px-4"><strong>Sedan</strong></td>
            <td className="py-3 px-4">4</td>
            <td className="py-3 px-4 font-semibold text-[#76453B]">₹7,499</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="py-3 px-4"><strong>SUV</strong></td>
            <td className="py-3 px-4">6-7</td>
            <td className="py-3 px-4 font-semibold text-[#76453B]">₹9,999</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="py-3 px-4"><strong>Luxury</strong></td>
            <td className="py-3 px-4">4-6</td>
            <td className="py-3 px-4 font-semibold text-[#76453B]">₹14,999</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
      <p className="text-yellow-700">Note: Additional charges may apply for tolls and state taxes.</p>
    </div>
  </div>
</section>


{/* Pune to Bangalore Travel Route & Attractions Along the Way */}
<section className="bg-white p-8 rounded-xl shadow-md mt-8">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6">Distance & Travel Time from Pune to Bangalore by Cab</h4>
  <div className="flex flex-col md:flex-row gap-8 items-center">
    <div className="flex-1">
      <p className="text-lg text-gray-700">
        The distance from Pune to Bangalore is approximately 840 km, and the journey typically takes 12-14 hours, depending on road conditions, traffic, and weather.
      </p>
    </div>
    <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl font-bold text-[#76453B]">840 km</div>
        <div className="text-gray-600 mt-2">Distance</div>
      </div>
      <div className="mx-8 text-gray-400">|</div>
      <div className="text-center">
        <div className="text-4xl font-bold text-[#76453B]">12-14 hrs</div>
        <div className="text-gray-600 mt-2">Travel Time</div>
      </div>
    </div>
  </div>
</section>

{/* Places to Visit in Bangalore */}
<section className="bg-white p-8 rounded-xl shadow-md mt-8">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6">Distance & Travel Time from Pune to Bangalore by Cab</h4>
  <div className="flex flex-col md:flex-row gap-8 items-center">
    <div className="flex-1">
      <p className="text-lg text-gray-700">
        The distance from Pune to Bangalore is approximately 840 km, and the journey typically takes 12-14 hours, depending on road conditions, traffic, and weather.
      </p>
    </div>
    <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl font-bold text-[#76453B]">840 km</div>
        <div className="text-gray-600 mt-2">Distance</div>
      </div>
      <div className="mx-8 text-gray-400">|</div>
      <div className="text-center">
        <div className="text-4xl font-bold text-[#76453B]">12-14 hrs</div>
        <div className="text-gray-600 mt-2">Travel Time</div>
      </div>
    </div>
  </div>
</section>

{/* FAQs about Pune to Bangalore Cab Services */}
<section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md mt-8">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6">Pune to Bangalore Travel Route & Attractions Along the Way</h4>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">Satara</h5>
      <p className="text-gray-600">Famous for the Kaas Plateau (Valley of Flowers), Thoseghar Waterfalls, and Ajinkyatara Fort.</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">Kolhapur</h5>
      <p className="text-gray-600">Visit the renowned Mahalakshmi Temple, Rankala Lake, and experience authentic Kolhapuri cuisine.</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">Belgaum</h5>
      <p className="text-gray-600">Explore Belgaum Fort, Gokak Falls, and Military Mahadev Temple.</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">Hubli</h5>
      <p className="text-gray-600">Key attractions include Unkal Lake, Chandramouleshwara Temple, and Nrupatunga Hill.</p>
    </div>
  </div>
</section>

{/* About Aim Cab */}
<About_Aimcab  />




            <div> <Footer/></div>
          </div>

      
    
  )
}

export default page;