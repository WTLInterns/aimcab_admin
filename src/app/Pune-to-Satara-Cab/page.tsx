"use client"
import React from 'react'
import Head from 'next/head'
import { gsap } from 'gsap';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import Navbar from '../../container/component/Navbar';
import Footer from '../../container/component/Footer';
import About_Aimcab from '../../components/About_Aimcab';
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
    <>
      <Head>
        <title>Pune to Satara Cab | Hassle-Free & Affordable Taxi</title>
        <meta
          name="description"
          content="Book a Pune to Satara cab with Aim Cab for a comfortable and budget-friendly ride. Enjoy one-way & round-trip taxi services with expert drivers. Easy booking!"
        />
        <link rel="canonical" href="https://aimcab.com/Pune-to-Satara-Cab" />
        <meta name="author" content="Aim Cab" />
        <meta
          name="keywords"
          content="satara to pune distance, pune to kaas pathar, pune to kas pathar, kaas pathar distance from pune, pune to satara cab, pune to satara distance by road, satara taxi service, pune to satara cab price, pune to satara cab service, satara to pune cab, pune to satara distance by cab, cab services from pune to satara daily services, cabs from pune to satara, one way cab from satara to pune, satara to pune cab service"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div>
       <Navbar/>
        {/* Header */}
        <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-yellow-500 py-12 md:py-20 text-center overflow-hidden">
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
          
         
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>

        {/* Main Title */}
        <h2 className="text-3xl font-bold mt-4 text-center">
          Pune to Satara Cab Service - Affordable & Reliable Taxi Booking
        </h2>

        <BookingForm />

     {/* Service Description - Card Version */}
<section className="mt-8">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
    <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🚖</span> Best Pune to Satara Cab Service
      </h3>
    </div>
    <div className="p-6">
      <p className="text-gray-700 mb-4">
        Looking for a Pune to Satara cab that is affordable, reliable, and comfortable? Aim Cab offers the best taxi booking service at the lowest price in the market, with fares starting at just ₹11/km. Whether you're traveling for business, leisure, or an urgent trip, our well-maintained cabs and professional drivers ensure a stress-free ride.
      </p>
      
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="text-gray-700"><strong className="text-[#76453B]">Lowest price in the market</strong> – Just ₹11/km!</span>
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
            <a href="https://aimcab.com" className="text-[#76453B] underline hover:text-[#76453B]">
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
    <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🏆</span> Why Choose Aim Cab for Pune to Satara Taxi?
      </h3>
    </div>
    <div className="p-6">
      <p className="text-gray-700 mb-4">
        With over 2 lakh happy customers, Aim Cab is a trusted name in the industry. Here's why we stand out:
      </p>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Affordable Pricing
          </h4>
          <p className="text-sm text-gray-600">Best price guarantee for Pune to Satara trips</p>
        </div>
        
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            Comfortable & Clean Cabs
          </h4>
          <p className="text-sm text-gray-600">Sedans, SUVs, Luxury Cars & Tempo Travellers</p>
        </div>
        
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
            Flexible Trips
          </h4>
          <p className="text-sm text-gray-600">One-way & round-trip options available</p>
        </div>
        
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Multiple Payment Methods
          </h4>
          <p className="text-sm text-gray-600">Pay via cash, UPI, or online payments</p>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Airport Transfers
          </h4>
          <p className="text-sm text-gray-600">Timely drop-offs with real-time tracking</p>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🚖</span> Pune to Satara Cab Options & Fare Details
      </h3>
    </div>
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr className="bg-blue-50 text-blue-900">
              <th className="p-3 text-left font-semibold">Cab Type</th>
              <th className="p-3 text-left font-semibold">Price (₹/KM)</th>
              <th className="p-3 text-left font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-blue-50">
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
            <tr className="hover:bg-blue-50">
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
            <tr className="hover:bg-blue-50">
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
              <td className="p-3 text-gray-600">Premium comfort & business travel</td>
            </tr>
            <tr className="hover:bg-blue-50">
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
              <td className="p-3 text-gray-600">Group trips & office outings</td>
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
    <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">💰</span> Pune to Satara Taxi Fare Estimate
      </h3>
    </div>
    <div className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <span className="font-medium">Sedan</span>
          <span className="font-bold text-[#76453B]">₹2,500 - ₹3,000</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <span className="font-medium">SUV</span>
          <span className="font-bold text-[#76453B]">₹3,500 - ₹4,000</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <span className="font-medium">Luxury</span>
          <span className="font-bold text-[#76453B]">₹5,000 - ₹6,000</span>
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
    <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🛣️</span> Pune to Satara Distance & Route
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
          <p className="text-gray-600"> The journey from Pune to Satara takes approximately 3 to 4 hours, depending on traffic and road conditions.</p>
        </div>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-2 rounded-lg mr-4">
          <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
          </svg>
        </div>
        <div>
          <h4 className="font-bold">Distance by Road</h4>
          <p className="text-gray-600">120 km via Pune-Bangalore Highway (NH48)</p>
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
          <p className="text-gray-600">The Pune to Satara toll charges range between ₹200-₹300</p>
        </div>
      </div>

      <div className="mt-4 bg-blue-50 p-3 rounded-lg border border-blue-200">
        <div className="flex">
          <svg className="w-5 h-5 text-[#76453B] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="text-sm text-[#76453B]">To avoid congestion, start early in the morning or travel late at night for a smoother ride.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Taxi Booking Services - Card Version */}
<section className="mt-6">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
    <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🏙️</span> Pune to Satara Taxi Booking Services
      </h3>
    </div>
    <div className="p-6">
      <p className="text-gray-700 mb-6">
        We offer multiple cab options based on your travel needs:
      </p>
      
      <div className="space-y-6">
        {/* One-Way Service */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <h4 className="font-bold text-[#76453B] text-lg mb-2">1. One-Way Pune to Satara Cab</h4>
          <p className="text-gray-600">
            Looking for a one-way cab from Pune to Satara? Our service allows you to pay only for a single journey, ensuring cost-effective travel. Get comfortable, well-maintained cabs with professional drivers for a smooth ride.
          </p>
        </div>
        
        {/* Round-Trip Service */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <h4 className="font-bold text-[#76453B] text-lg mb-2">2. Round-Trip Pune to Satara Cab</h4>
          <p className="text-gray-600">
            Planning a round trip? Our Satara to Pune cab service ensures a convenient return journey. Whether it's a family visit, business trip, or leisure travel, book a cab at the lowest price with zero last-minute hassles.
          </p>
        </div>
        
        {/* Airport Service */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <h4 className="font-bold text-[#76453B] text-lg mb-2">3. Pune to Satara Airport Taxi</h4>
          <p className="text-gray-600">
            Need a ride to the airport? Our Pune to Satara Airport cab guarantees on-time pickup and drop-off at Satara Airport, ensuring a seamless travel experience.
          </p>
        </div>

        {/* Daily Service */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <h4 className="font-bold text-[#76453B] text-lg mb-2">4. Pune to Satara Daily Cab Service</h4>
          <p className="text-gray-600">
            Looking for cab services from Pune to Satara daily services? We offer scheduled taxi services with professional drivers for your convenience.
          </p>
        </div>

        {/* Outstation Service */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <h4 className="font-bold text-[#76453B] text-lg mb-2">5. Pune to Satara Outstation Cab</h4>
          <p className="text-gray-600">
            Planning to explore beyond Satara? Our outstation cab service covers popular destinations like Kaas Pathar, Mahabaleshwar, and Ratnagiri with affordable pricing and professional drivers.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Travel Guide - Card Version */}
<section className="mt-6">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
    <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🏞️</span> Pune to Satara Travel Guide
      </h3>
    </div>
    <div className="p-6">
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-[#76453B] mb-3">🌆 Places to Visit in Satara</h4>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li><strong>Kaas Pathar (Kaas Plateau)</strong> – A UNESCO World Heritage site known for its seasonal bloom of wildflowers.</li>
          <li><strong>Ajinkyatara Fort</strong> – A historic fort offering breathtaking views of Satara city.</li>
          <li><strong>Thoseghar Waterfalls</strong> – A mesmerizing waterfall perfect for nature lovers.</li>
          <li><strong>Sajjangad Fort</strong> – A pilgrimage site and historical fort.</li>
          <li><strong>Chalkewadi Windmill Farms</strong> – A scenic location with massive windmills and lush greenery.</li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-[#76453B] mb-3">🏖️ Beaches Near Satara</h4>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li><strong>Dapoli Beach</strong> – Known for its clean shores and dolphin-watching tours.</li>
          <li><strong>Ganpatipule Beach</strong> – A serene beach with a famous Ganesha temple.</li>
          <li><strong>Ratnagiri Beach</strong> – A perfect getaway for beach lovers.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* FAQs - Card Version */}
<section className="mt-6 mb-12">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
    <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">❓</span> Frequently Asked Questions (FAQs)
      </h3>
    </div>
    <div className="p-6">
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-[#76453B]">1. What is the Pune to Satara cab fare?</h4>
          <p className="text-gray-600 mt-1">The fare starts from ₹2,500 for a sedan and may vary based on the type of car and route conditions.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-[#76453B]">2. How long does it take to travel from Pune to Satara by taxi?</h4>
          <p className="text-gray-600 mt-1">It takes around 3 to 4 hours depending on traffic and weather conditions.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-[#76453B]">3. Are toll charges included in the Pune to Satara taxi fare?</h4>
          <p className="text-gray-600 mt-1">No, toll charges are extra and must be paid by the passenger as per actual costs.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-[#76453B]">4. What are the cab options available for Pune to Satara travel?</h4>
          <p className="text-gray-600 mt-1">We offer Sedan, SUV, Luxury Cars, and Tempo Travellers based on your requirements.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-[#76453B]">5. Is Pune to Satara one-way cab service available?</h4>
          <p className="text-gray-600 mt-1">Yes, we provide one-way cabs at an affordable price, starting from ₹2,500.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-[#76453B]">6. Can I book a Pune to Satara cab for a round trip?</h4>
          <p className="text-gray-600 mt-1">Absolutely! We offer round-trip cabs with flexible booking options.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-[#76453B]">7. Do you offer Pune to Satara airport cabs?</h4>
          <p className="text-gray-600 mt-1">Yes, we provide on-time airport drop-off and pickup services.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-[#76453B]">8. What payment methods are available for booking?</h4>
          <p className="text-gray-600 mt-1">For your convenience, we accept payments via cash, UPI, and various online modes.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-[#76453B]">9. Are the cabs sanitized and safe for travel?</h4>
          <p className="text-gray-600 mt-1">Yes, all our cabs are sanitized regularly and driven by verified professionals.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-[#76453B]">10. How can I book a Pune to Satara cab?</h4>
          <p className="text-gray-600 mt-1">You can book instantly via our website{" "}
            <a href="https://aimcab.com" className="text-[#76453B] underline hover:text-[#76453B]">
              aimcab.com
            </a>{" "}
            or call our helpline.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Call to Action */}
<section className="mb-12">
  <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] rounded-xl shadow-lg p-6 text-center">
    <h4 className="text-2xl font-bold text-white mb-4">🚗 Book your Pune to Satara cab now & enjoy a smooth ride!</h4>
    <p className="text-blue-100">
      🚖 Enjoy the best Pune to Satara cab service with Aim Cab.
      Get the lowest fares, professional drivers, and a hassle-free booking experience.
      Book your ride today at{" "}
      <a href="https://aimcab.com" className="text-white underline font-medium">
        aimcab.com
      </a>{" "}
      and travel stress-free!
    </p>
  </div>
</section>
 <About_Aimcab />
        {/* Footer */}
         <div><Footer/></div>
      </div>
    </>
  );
};

export default Page;
