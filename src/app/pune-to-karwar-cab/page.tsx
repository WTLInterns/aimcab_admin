"use client"
import React from 'react'
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
      <head>
      <title>Pune to Karwar Cab | Affordable & Safe Taxi Service</title>
      <meta name="description" content="Book Pune to Karwar cab services with Aim Cab for a smooth, reliable & affordable ride. 24/7 booking, experienced drivers & comfortable travel experience." />
      <link rel="canonical" href="https://aimcab.com/pune-to-karwar-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Karwar Cab, Pune To Karwar cab Services, Cab Services From Pune To Karwar, Pune To Karwar Cab Services charges, Best cab Services Pune To Karwar" />
      <meta name="robots" content="index, follow" />

      </head>
      
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
      Pune to Karwar Cab Services - Comfortable & Affordable Travel
      </h2>

      <BookingForm />
      
  {/* Service Description */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md">
  <h3 className="text-3xl font-bold text-[#76453B] mb-4">Book Pune to Karwar Cab Services with Aim Cab</h3>
  <p className="text-lg text-gray-700 leading-relaxed">
    <span className="text-[#76453B] font-semibold">Looking for a reliable Pune to Karwar cab service?</span> Aim Cab offers <span className="font-bold text-[#76453B]">affordable, comfortable, and well-maintained</span> cabs for your journey. Whether you're planning a leisure trip, business visit, or family vacation, our <span className="underline decoration-blue-400">Pune to Karwar cab services</span> ensure a smooth and hassle-free ride.
  </p>
</section>

{/* Why Choose Aim Cab */}
<section className="mt-8 p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-600">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6 flex items-center">
    <svg className="w-6 h-6 mr-2 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    Why Choose Aim Cab for Pune to Karwar Travel?
  </h4>
  <ul className="space-y-3">
    <li className="flex items-start">
      <span className="text-[#76453B] mr-2">✓</span>
      <span><strong className="text-[#76453B]">Lowest Fare in Market –</strong> We offer the most competitive cab rates for Pune to Karwar travel.</span>
    </li>
    <li className="flex items-start">
      <span className="text-[#76453B] mr-2">✓</span>
      <span><strong className="text-[#76453B]">Experienced & Professional Drivers –</strong> Our drivers are well-versed with the best routes, ensuring a safe journey.</span>
    </li>
    <li className="flex items-start">
      <span className="text-[#76453B] mr-2">✓</span>
      <span><strong className="text-[#76453B]">Wide Range of Vehicles –</strong> Choose from hatchbacks, sedans, SUVs, and luxury cabs.</span>
    </li>
    <li className="flex items-start">
      <span className="text-[#76453B] mr-2">✓</span>
      <span><strong className="text-[#76453B]">No Hidden Charges –</strong> Transparent pricing with upfront fare details.</span>
    </li>
    <li className="flex items-start">
      <span className="text-[#76453B] mr-2">✓</span>
      <span><strong className="text-[#76453B]">24/7 Booking Assistance –</strong> Get support anytime for your travel needs.</span>
    </li>
  </ul>
</section>

{/* Fare & Charges */}
<section className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6">Pune to Karwar Cab Fare & Charges</h4>
  <div className="bg-white p-4 rounded-lg shadow-inner">
    <p className="text-lg text-center mb-4 bg-blue-100 p-3 rounded-lg">
      Starting at just <span className="text-2xl font-bold text-[#76453B]">₹11/km</span> - The most affordable rates in the market!
    </p>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
            <th className="p-3 text-left rounded-tl-lg">Cab Type</th>
            <th className="p-3 text-center">Passenger Capacity</th>
            <th className="p-3 text-right rounded-tr-lg">Approx. Fare</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-blue-50">
            <td className="p-3 font-medium">Hatchback</td>
            <td className="p-3 text-center">4</td>
            <td className="p-3 text-right font-bold text-[#76453B]">₹4,999</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-3 font-medium">Sedan</td>
            <td className="p-3 text-center">4</td>
            <td className="p-3 text-right font-bold text-[#76453B]">₹5,499</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-3 font-medium">SUV</td>
            <td className="p-3 text-center">6-7</td>
            <td className="p-3 text-right font-bold text-[#76453B]">₹6,999</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-3 font-medium">Luxury</td>
            <td className="p-3 text-center">4-6</td>
            <td className="p-3 text-right font-bold text-[#76453B]">₹9,999</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <p className="mt-4 text-sm text-gray-600 italic">
    Note: Toll charges, state taxes, and parking fees may be additional.
    </p>
  </div>
</section>

{/* Distance & Travel Info */}
<section className="mt-8 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] mb-4">Pune to Karwar Distance & Travel Time</h4>
  <div className="flex flex-wrap items-center justify-between">
    <div className="flex items-center mb-4">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div>
        <p className="text-gray-600">Distance</p>
        <p className="text-xl font-bold text-[#76453B]">520 km</p>
      </div>
    </div>
    
    <div className="flex items-center mb-4">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <p className="text-gray-600">Travel Time</p>
        <p className="text-xl font-bold text-[#76453B]">9-10 hours</p>
      </div>
    </div>
  </div>
  <p className="text-gray-700 mt-2">*Depending on traffic and road conditions</p>
</section>

{/* Travel Route & Attractions */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6">Pune to Karwar Travel Route & Attractions Along the Way</h4>
  
  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">Kolhapur</h5>
      <ul className="space-y-1 text-gray-700">
        <li className="flex items-start">
          <span className="text-blue-500 mr-1">•</span>
          <span>Mahalakshmi Temple</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-1">•</span>
          <span>Rankala Lake</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-1">•</span>
          <span>Kolhapuri cuisine</span>
        </li>
      </ul>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">Belgaum</h5>
      <ul className="space-y-1 text-gray-700">
        <li className="flex items-start">
          <span className="text-blue-500 mr-1">•</span>
          <span>Kamal Basti</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-1">•</span>
          <span>Belgaum Fort</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-1">•</span>
          <span>Gokak Falls</span>
        </li>
      </ul>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">Goa (Optional)</h5>
      <ul className="space-y-1 text-gray-700">
        <li className="flex items-start">
          <span className="text-blue-500 mr-1">•</span>
          <span>Beautiful beaches</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-1">•</span>
          <span>Dudhsagar Waterfalls</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-1">•</span>
          <span>Aguada Fort</span>
        </li>
      </ul>
    </div>
  </div>
</section>

{/* Places to Visit */}
<section className="mt-8 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6">Must-Visit Places in Karwar</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div className="flex items-start">
      <div className="bg-blue-100 p-2 rounded-lg mr-4">
        <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div>
        <h5 className="font-bold text-[#76453B]">Devbagh Beach</h5>
        <p className="text-gray-700">Ideal for water sports, boat rides, and stunning sunset views</p>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="bg-blue-100 p-2 rounded-lg mr-4">
        <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div>
        <h5 className="font-bold text-[#76453B]">Rabindranath Tagore Beach</h5>
        <p className="text-gray-700">Perfect for relaxation and beachside activities</p>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="bg-blue-100 p-2 rounded-lg mr-4">
        <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div>
        <h5 className="font-bold text-[#76453B]">Sadashivgad Fort</h5>
        <p className="text-gray-700">Offers breathtaking views of the Arabian Sea.</p>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="bg-blue-100 p-2 rounded-lg mr-4">
        <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div>
        <h5 className="font-bold text-[#76453B]">Kali River Estuary</h5>
        <p className="text-gray-700">Great for boating, birdwatching, and nature photography</p>
      </div>
    </div>

    <div className="flex items-start">
      <div className="bg-blue-100 p-2 rounded-lg mr-4">
        <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div>
        <h5 className="font-bold text-[#76453B]">Warship Museum</h5>
        <p className="text-gray-700">A must-visit for history enthusiasts.</p>
      </div>
    </div>
  </div>
</section>

{/* FAQs */}
<section className="mt-8 p-6 bg-blue-50 rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6">Frequently Asked Questions</h4>
  
  <div className="space-y-4">
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-[#76453B] flex items-center">
        <span className="bg-blue-100 p-1 rounded-full mr-2">
          <svg className="w-4 h-4 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        What are the cab charges from Pune to Karwar?
      </h5>
      <p className="mt-2 text-gray-700 pl-6">The fare starts at ₹4,999, depending on the vehicle type.</p>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-[#76453B] flex items-center">
        <span className="bg-blue-100 p-1 rounded-full mr-2">
          <svg className="w-4 h-4 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        How long does it take to travel from Pune to Karwar by cab?
      </h5>
      <p className="mt-2 text-gray-700 pl-6">The journey takes approximately 9-10 hours.</p>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-[#76453B] flex items-center">
        <span className="bg-blue-100 p-1 rounded-full mr-2">
          <svg className="w-4 h-4 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        Can I book a cab from Pune Airport to Karwar?
      </h5>
      <p className="mt-2 text-gray-700 pl-6">Yes, we provide airport pick-up and drop services.</p>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-[#76453B] flex items-center">
        <span className="bg-blue-100 p-1 rounded-full mr-2">
          <svg className="w-4 h-4 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        Do you offer one-way cab services from Pune to Karwar?
      </h5>
      <p className="mt-2 text-gray-700 pl-6">Yes, both one-way and round-trip options are available.</p>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-[#76453B] flex items-center">
        <span className="bg-blue-100 p-1 rounded-full mr-2">
          <svg className="w-4 h-4 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        Is it safe to travel at night?
      </h5>
      <p className="mt-2 text-gray-700 pl-6">Yes, all our cabs are GPS-enabled, ensuring a safe journey.</p>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-[#76453B] flex items-center">
        <span className="bg-blue-100 p-1 rounded-full mr-2">
          <svg className="w-4 h-4 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        Are toll charges included in the fare?
      </h5>
      <p className="mt-2 text-gray-700 pl-6">No, toll charges are additional and may range between ₹500 - ₹700.</p>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-[#76453B] flex items-center">
        <span className="bg-blue-100 p-1 rounded-full mr-2">
          <svg className="w-4 h-4 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        What are the best sightseeing spots on the way?
      </h5>
      <p className="mt-2 text-gray-700 pl-6">Kolhapur, Belgaum, and optional stops in Goa.</p>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-[#76453B] flex items-center">
        <span className="bg-blue-100 p-1 rounded-full mr-2">
          <svg className="w-4 h-4 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        Can I choose my preferred cab model?
      </h5>
      <p className="mt-2 text-gray-700 pl-6"> Yes, choose from hatchbacks, sedans, SUVs, and luxury cars.</p>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-[#76453B] flex items-center">
        <span className="bg-blue-100 p-1 rounded-full mr-2">
          <svg className="w-4 h-4 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        Do you offer discounts for round trips?
      </h5>
      <p className="mt-2 text-gray-700 pl-6">Yes, we offer special discounts for round-trip bookings.</p>
    </div>
    
  </div>
  
  {/* <div className="mt-4 text-center">
    <button className="text-[#76453B] font-semibold hover:underline">
      View all 10 FAQs →
    </button>
  </div> */}
</section>

{/* About Aim Cab */}
<About_Aimcab  />
{/* CTA */}
<section className="mt-8 p-6 bg-gradient-to-r from-[#F3B664] to-[#76453B] rounded-xl shadow-lg border-2  text-center mb-10">
  <h4 className="text-2xl font-bold text-[#ffffff] mb-4">Ready for Your Pune to Karwar Journey?</h4>
  <p className="text-lg text-gray-100 mb-6">Experience premium comfort at unbeatable prices</p>
  
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a href="tel:+9191305454491" className="bg-[#76453B] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-colors">
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Call +91 91305454491
    </a>
    
    <a href="https://aimcab.com" className="bg-white hover:bg-gray-100 text-[#76453B] font-bold py-3 px-6 rounded-lg border border-blue-600 flex items-center justify-center transition-colors">
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
      Visit aimcab.com
    </a>
  </div>
</section>





            <div> <Footer/></div>
          </div>

      
    
  )
}

export default page;