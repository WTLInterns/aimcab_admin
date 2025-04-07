"use client"

import React from 'react'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import BookingForm from '../../components/BookingForm'
import About_Aimcab from '../../components/About_Aimcab'


const Page = () => {
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
    <div  >
      
    

      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] font-semibold text-yellow-500 py-12 md:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            AIMCAB Pune Routes
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Book your cab and explore Pune with ease
          </p>
          
          {/* <div 
            ref={buttonsRef}
            className="flex justify-center space-x-4"
          >
            <button className="bg-white text-[#76453B] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book Now
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#76453B] transition-all duration-300">
              Call Us
            </button>
          </div> */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center">
      Best Pune to Kolhapur Cab Service
      </h2>

      <BookingForm />

     {/* Service Description - Card Version */}
<section className="mt-8">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
    <div className=" bg-gradient-to-r from-[#F3B664] to-[#76453B] font-semibold p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🚖</span> Best Pune to Kolhapur Cab Service
      </h3>
    </div>
    <div className="p-6">
      <p className="text-gray-700 mb-4">
        Looking for a <strong>Pune to Kolhapur cab</strong> that is affordable, reliable, and comfortable? Aim Cab offers the best taxi booking service with the <strong>lowest price guarantee</strong> starting at just <strong>₹11/km</strong>. Whether you're traveling for business, leisure, or an urgent trip, our well-maintained cabs and professional drivers ensure a stress-free ride.
      </p>
      
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="text-gray-700"><strong className="text-[#76453B]">Lowest price in the market</strong> – Just ₹2999!</span>
        </div>
        
        <div className="flex items-start">
          <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="text-gray-700"><strong className="text-[#76453B]">Safe & Reliable</strong> – Verified drivers & sanitized cabs</span>
        </div>
        
        <div className="flex items-start">
          <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="text-gray-700"><strong className="text-[#76453B]">On-time pickups & drop-offs</strong> – 24/7 availability</span>
        </div>
        
        <div className="flex items-start">
          <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="text-gray-700"><strong className="text-[#76453B]">Easy Online Booking</strong> – Instant confirmation at{" "}
            <a href="https://aimcab.com" className="text-blue-500 underline hover:text-[#76453B]">
              aimcab.com
            </a>
          </span>
        </div>

        <div className="flex items-start">
          <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="text-gray-700"><strong className="text-[#76453B]">No hidden charges</strong> – 100% transparent pricing</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Why Choose Aim Cab - Card Version */}
<section className="mt-6">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
    <div className=" bg-gradient-to-r from-[#F3B664] to-[#76453B] font-semibold p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🏆</span> Why Choose Aim Cab for Pune to Kolhapur Taxi?
      </h3>
    </div>
    <div className="p-6">
      <p className="text-gray-700 mb-4">
        With over <strong>2 lakh happy customers</strong>, Aim Cab is a trusted name in the industry. Here's why we stand out:
      </p>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-[#F3B664] p-3 rounded-lg border border-blue-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Affordable Pricing
          </h4>
          <p className="text-sm text-gray-600">Best price guarantee for Pune to Kolhapur trips</p>
        </div>
        
        <div className="bg-[#F3B664] p-3 rounded-lg border border-blue-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            Comfortable & Clean Cabs
          </h4>
          <p className="text-sm text-gray-600">Sedans, SUVs, Luxury Cars & Tempo Travellers</p>
        </div>
        
        <div className="bg-[#F3B664] p-3 rounded-lg border border-blue-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
            Flexible Trips
          </h4>
          <p className="text-sm text-gray-600">One-way & round-trip options available</p>
        </div>
        
        <div className="bg-[#F3B664] p-3 rounded-lg border border-blue-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Multiple Payment Methods
          </h4>
          <p className="text-sm text-gray-600">Pay via cash, UPI, or online payments</p>
        </div>

        <div className="bg-[#F3B664] p-3 rounded-lg border border-blue-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Airport Transfers
          </h4>
          <p className="text-sm text-gray-600">Timely drop-offs with real-time tracking</p>
        </div>

        <div className="bg-[#F3B664] p-3 rounded-lg border border-blue-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            Flexible Cancellation
          </h4>
          <p className="text-sm text-gray-600">Modify or cancel bookings hassle-free</p>
        </div>
      </div>
      
      <div className="mt-4 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 text-center">
        <p className="font-bold text-[#76453B]">🚕 Experience hassle-free travel with Aim Cab!</p>
      </div>
    </div>
  </div>
</section>

{/* Cab Options & Fare Details - Card Version */}
<section className="mt-6">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
    <div className=" bg-gradient-to-r from-[#F3B664] to-[#76453B] font-semibold p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🚖</span> Pune to Kolhapur Cab Options & Fare Details
      </h3>
    </div>
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr className="bg-[#F3B664] text-blue-900">
              <th className="p-3 text-left font-semibold">Cab Type</th>
              <th className="p-3 text-left font-semibold">Price (₹/KM)</th>
              <th className="p-3 text-left font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-[#F3B664]">
              <td className="p-3">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                    </svg>
                  </div>
                  <span>Sedan (Dzire, Etios)</span>
                </div>
              </td>
              <td className="p-3 font-medium text-green-600">₹11/km</td>
              <td className="p-3 text-gray-600">Budget-friendly travel</td>
            </tr>
            <tr className="hover:bg-[#F3B664]">
              <td className="p-3">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                    </svg>
                  </div>
                  <span>SUV (Ertiga, Xylo)</span>
                </div>
              </td>
              <td className="p-3 font-medium text-green-600">₹14/km</td>
              <td className="p-3 text-gray-600">Family trips & luggage space</td>
            </tr>
            <tr className="hover:bg-[#F3B664]">
              <td className="p-3">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                    </svg>
                  </div>
                  <span>Luxury (Innova Crysta)</span>
                </div>
              </td>
              <td className="p-3 font-medium text-green-600">₹18/km</td>
              <td className="p-3 text-gray-600">Premium comfort</td>
            </tr>
            <tr className="hover:bg-[#F3B664]">
              <td className="p-3">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                    </svg>
                  </div>
                  <span>Tempo Traveller</span>
                </div>
              </td>
              <td className="p-3 font-medium text-green-600">₹25/km</td>
              <td className="p-3 text-gray-600">Group trips</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

{/* Fare Estimate & Travel Info - Card Version */}
<section className="mt-6 grid gap-6 md:grid-cols-2">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
    <div className=" bg-gradient-to-r from-[#F3B664] to-[#76453B] font-semibold p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">💰</span> Pune to Kolhapur Taxi Fare Estimate
      </h3>
    </div>
    <div className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-[#F3B664] rounded-lg">
          <span className="font-medium">Sedan</span>
          <span className="font-bold text-[#76453B]">₹2,999 - ₹3,500</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-[#F3B664] rounded-lg">
          <span className="font-medium">SUV</span>
          <span className="font-bold text-[#76453B]">₹4,000 - ₹4,500</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-[#F3B664] rounded-lg">
          <span className="font-medium">Luxury</span>
          <span className="font-bold text-[#76453B]">₹5,500 - ₹6,000</span>
        </div>
      </div>
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-100 rounded-lg text-sm text-yellow-800">
        <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
        Prices may vary based on toll charges & route conditions.
      </div>
    </div>
  </div>

  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
    <div className=" bg-gradient-to-r from-[#F3B664] to-[#76453B] font-semibold p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🛣️</span> Distance & Route
      </h3>
    </div>
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-2 rounded-lg mr-4">
          <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <h4 className="font-bold">Travel Duration</h4>
          <p className="text-gray-600">4 to 5 hours</p>
        </div>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-2 rounded-lg mr-4">
          <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
          </svg>
        </div>
        <div>
          <h4 className="font-bold">Distance</h4>
          <p className="text-gray-600">235 km via NH48</p>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="bg-blue-100 p-2 rounded-lg mr-4">
          <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div>
        <div>
          <h4 className="font-bold">Toll Charges</h4>
          <p className="text-gray-600">₹300-₹400</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Taxi Booking Services - Card Version */}
<section className="mt-6">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
    <div className=" bg-gradient-to-r from-[#F3B664] to-[#76453B] font-semibold p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🏙️</span> Pune to Kolhapur Taxi Booking Services
      </h3>
    </div>
    <div className="p-6">
      <p className="text-gray-700 mb-6">
        At Aim Cab, we provide a range of Pune to Kolhapur taxi services, ensuring a comfortable, safe, and hassle-free journey. Whether you need a one-way cab, a round-trip taxi, or a shared ride, we have options to match every travel need.
      </p>
      
      <div className="space-y-6">
        {/* One-Way Service */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <h4 className="font-bold text-[#76453B] text-lg mb-2">1️⃣ One-Way Pune to Kolhapur Taxi</h4>
          <p className="text-gray-600 mb-3">
            Looking for a one-way taxi from Pune to Kolhapur? Our service is perfect for solo travelers, business professionals, or families who need a cost-effective and reliable cab service.
          </p>
          <h5 className="font-bold text-[#76453B] mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Benefits of Booking a One-Way Taxi:
          </h5>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Pay only for a single journey – No return fare charges!</li>
            <li>Well-maintained and sanitized cabs for a safe trip</li>
            <li>24/7 customer support and instant booking confirmation</li>
            <li>Professional and courteous drivers with local route expertise</li>
          </ul>
        </div>
        
        {/* Round-Trip Service */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <h4 className="font-bold text-[#76453B] text-lg mb-2">2️⃣ Round-Trip Pune to Kolhapur Cab</h4>
          <p className="text-gray-600">
            Need a return trip? Our Kolhapur to Pune taxi service offers the best round-trip fares, ensuring a smooth travel experience.
          </p>
        </div>
        
        {/* Airport Service */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <h4 className="font-bold text-[#76453B] text-lg mb-2">3️⃣ Pune to Kolhapur Airport Taxi</h4>
          <p className="text-gray-600">
            Need a cab for your airport transfer? Our Pune to Kolhapur Airport taxi ensures stress-free travel with on-time service.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Travel Guide - Card Version */}
<section className="mt-6">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
    <div className=" bg-gradient-to-r from-[#F3B664] to-[#76453B] font-semibold p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🏞️</span> Pune to Kolhapur Travel Guide
      </h3>
    </div>
    <div className="p-6">
      <h4 className="font-bold text-[#76453B] text-lg mb-3">🌆 Places to Visit in Kolhapur</h4>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>Mahalaxmi Temple – A famous pilgrimage site</li>
        <li>Rankala Lake – Perfect for evening strolls</li>
        <li>Panhala Fort – Historic fort with panoramic views</li>
        <li>New Palace – Royal architecture</li>
        <li>Kolhapuri Chappal Market – Famous for leather footwear</li>
      </ul>
    </div>
  </div>
</section>

{/* FAQs - Card Version */}
<section className="mt-6 mb-12">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
    <div className=" bg-gradient-to-r from-[#F3B664] to-[#76453B] font-semibold p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">❓</span> Frequently Asked Questions (FAQs)
      </h3>
    </div>
    <div className="p-6">
      <div className="space-y-4">
        {/* FAQ Item 1 */}
        <div className="border-b border-gray-200 pb-4">
          <h4 className="font-bold text-[#76453B]">What is the Pune to Kolhapur cab fare?</h4>
          <p className="text-gray-600 mt-1">The fare starts from ₹2,999 for a sedan and may vary based on the type of car and route conditions.</p>
        </div>
        
        {/* FAQ Item 2 */}
        <div className="border-b border-gray-200 pb-4">
          <h4 className="font-bold text-[#76453B]">How long does it take to travel from Pune to Kolhapur by taxi?</h4>
          <p className="text-gray-600 mt-1">It takes around 4 to 5 hours depending on traffic and weather conditions.</p>
        </div>
        
        {/* FAQ Item 3 */}
        <div className="pb-4">
          <h4 className="font-bold text-[#76453B]">Are toll charges included in the Pune to Kolhapur taxi fare?</h4>
          <p className="text-gray-600 mt-1">No, toll charges are extra and must be paid by the passenger as per actual costs.</p>
        </div>
        {/* FAQ Item 3 */}
        <div className="pb-4">
          <h4 className="font-bold text-[#76453B]">What are the cab options available for Pune to Kolhapur travel?</h4>
          <p className="text-gray-600 mt-1">We offer Sedan, SUV, Luxury Cars, and Tempo Travellers based on your requirements.</p>
        </div>
        {/* FAQ Item 3 */}
        <div className="pb-4">
          <h4 className="font-bold text-[#76453B]">Are toll charges included in the Pune to Kolhapur taxi fare?</h4>
          <p className="text-gray-600 mt-1">No, toll charges are extra and must be paid by the passenger as per actual costs.</p>
        </div>
        {/* FAQ Item 3 */}
        <div className="pb-4">
          <h4 className="font-bold text-[#76453B]">Is Pune to Kolhapur one-way cab service available?</h4>
          <p className="text-gray-600 mt-1">Yes, we provide one-way cabs at an affordable price, starting from ₹2,999.</p>
        </div>
        {/* FAQ Item 3 */}
        <div className="pb-4">
          <h4 className="font-bold text-[#76453B]">Can I book a Pune to Kolhapur cab for a round trip?</h4>
          <p className="text-gray-600 mt-1">Absolutely! We offer round-trip cabs with flexible booking options.</p>
        </div>
        {/* FAQ Item 3 */}
        <div className="pb-4">
          <h4 className="font-bold text-[#76453B]">Do you offer Pune to Kolhapur airport cabs?</h4>
          <p className="text-gray-600 mt-1">Yes, we provide on-time airport drop-off and pickup services.</p>
        </div>
        {/* FAQ Item 3 */}
        <div className="pb-4">
          <h4 className="font-bold text-[#76453B]">What payment methods are available for booking?</h4>
          <p className="text-gray-600 mt-1">We accept cash, UPI, and online payments for your convenience.</p>
        </div>
        {/* FAQ Item 3 */}
        <div className="pb-4">
          <h4 className="font-bold text-[#76453B]">Are the cabs sanitized and safe for travel?</h4>
          <p className="text-gray-600 mt-1">Yes, all our cabs are sanitized regularly and driven by verified professionals</p>
        </div>
        <div className="pb-4">
          <h4 className="font-bold text-[#76453B]">How can I book a Pune to Kolhapur cab?</h4>
          <p className="text-gray-600 mt-1">You can book instantly via our website aimcab.com or call our helpline.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<div>
   <About_Aimcab />
</div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-6 sm:py-8">
        {/* Popular Cities Section */}
        <div className="container mx-auto px-4 text-center mb-4">
          <b className="text-yellow-400 text-lg transition-all duration-300 ease-in-out hover:text-white">
            POPULAR CITIES:
          </b>
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-2">
            <a href="/Pune" className="relative inline-block px-8 sm:px-16 md:px-20 py-4 rounded-full 
                               bg-gradient-to-r from-blue-400 to-yellow-300 
                               text-gray-800 font-bold uppercase shadow-md 
                               transform transition-all duration-500 ease-in-out 
                             hover:scale-105 hover:bg-gradient-to-r hover:from-green-300 hover:to-green-200 hover:shadow-lg hover:text-gray-900">
              Pune
            </a>
            <a href="/Mumbai" className="relative inline-block px-8 sm:px-16 md:px-20 py-4 rounded-full 
                               bg-gradient-to-r from-blue-400 to-yellow-300 
                               text-gray-800 font-bold uppercase shadow-md 
                               transform transition-all duration-500 ease-in-out 
                             hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 hover:shadow-lg hover:text-white">
              Mumbai
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="container mx-auto px-4 text-center mb-8">
          <b className="text-yellow-400 transition-all duration-300 ease-in-out hover:text-white">
            QUICK LINKS:
          </b>
          <div className="mt-2 flex flex-wrap justify-center">
            {[
              "HOME",
              "UPDATES",
              "ABOUT",
              "SERVICES",
              "CONTACT US",
              "CAREER",
              "FAQ's",
              "PRIVACY POLICY",
              "TERMS & CONDITIONS",
            ].map((link, i) => (
              <a
                key={i}
                href="/"
                className="text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-black mx-2 mb-2 sm:mb-0"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="container mx-auto px-4 text-center">
          <p className="transition-all duration-300 ease-in-out hover:text-green-200">
            &copy; {new Date().getFullYear()} Aim Cab. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page