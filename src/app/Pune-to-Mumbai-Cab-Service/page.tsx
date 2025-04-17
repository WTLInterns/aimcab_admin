/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"; 

import Head from "next/head";
import BookingForm from "../../components/BookingForm";
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
  const faqItems = [
    {
      question: "What is the Pune to Mumbai cab fare?",
      answer: "The fare starts at ₹2,200 for sedans and may vary based on your cab choice."
    },
    {
      question: "Can I book a one-way taxi from Pune to Mumbai?",
      answer: "Yes! We offer Pune to Mumbai taxi one-way at the lowest fares."
    },
    // Add all other FAQ items here...
  ];
  
  // Then use it in your component as before:
  {faqItems.map((item, index) => (
    <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
      <h4 className="font-bold text-sky-800">{item.question}</h4>
      <p className="text-gray-600 mt-1">{item.answer}</p>
    </div>
  ))}
  return (
    <>
      <div className=" font-semibold">
        <Navbar/>
           {/* Header */}
        <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] font-semibold text-[#573027] py-12 md:py-20 text-center overflow-hidden">
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
        <div className="absolute  bottom-0 left-0 right-0 h-16 bg-white font-semibold transform skew-y-2 origin-bottom"></div>
      </header>
      
    

     
      

        {/* Main Title */}
        <div className=" mx-auto px-4 font-semibold">
          <h2 className="text-3xl font-bold mt-8 mb-6 text-center text-[#76453B]">
            Pune to Mumbai Cab Service - Affordable & Reliable Taxi Booking
          </h2>

          <BookingForm />

       {/* Service Description - Card Version */}
<section className="mt-8 grid gap-6 md:grid-cols-2">
  {/* Your Best Choice Card */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-sky-100 transform hover:scale-[1.02] transition-all duration-200">
    <div className="bg-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🚖</span> Pune to Mumbai Cab Service
      </h3>
    </div>
    <div className="p-6">
      <p className="text-gray-700 mb-4">
      Looking for a Pune to Mumbai cab service that’s affordable, reliable, and convenient? Aim Cab offers the best taxi booking experience with guaranteed lowest prices, professional drivers, and a wide range of car options. Whether you're traveling for business, leisure, or need an urgent airport transfer, our services ensure a comfortable and stress-free ride.
      </p>
      
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="text-gray-700"><strong className="text-[#76453B]">Just ₹11/km</strong> - Lowest price guaranteed</span>
        </div>
        
        <div className="flex items-start">
          <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="text-gray-700"><strong className="text-[#76453B]">Verified drivers</strong> - Safe & well-maintained cabs</span>
        </div>
        
        <div className="flex items-start">
          <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="text-gray-700"><strong className="text-[#76453B]">24/7 availability</strong> - On-time pickups & drop-offs</span>
        </div>
        
        <div className="flex items-start">
          <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="text-gray-700"><strong className="text-[#76453B]">Instant confirmation</strong> at{" "}
            <a href="https://aimcab.com" className="text-sky-600 underline hover:text-sky-800">
              aimcab.com
            </a>
          </span>
        </div>
      </div>
      
      <div className="mt-6 bg-sky-50 p-4 rounded-lg border border-sky-100">
        <p className="text-sky-800 font-medium flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          No hidden charges - 100% transparent pricing
        </p>
      </div>
    </div>
  </div>

  {/* Why Choose Aim Cab Card */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-sky-100 transform hover:scale-[1.02] transition-all duration-200">
    <div className="bg-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🏆</span> Why Choose Aim Cab?
      </h3>
    </div>
    <div className="p-6">
      <p className="text-gray-700 mb-4">
        Trusted by 2 lakh+ customers for premium Pune to Mumbai taxi services with unmatched benefits.
      </p>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-sky-50 p-3 rounded-lg border border-sky-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Affordable Pricing
          </h4>
          <p className="text-sm text-gray-600">Lowest price guarantee for all trips</p>
        </div>
        
        <div className="bg-sky-50 p-3 rounded-lg border border-sky-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            Premium Vehicles
          </h4>
          <p className="text-sm text-gray-600">Sedans, SUVs, Luxury Cars & Tempo Travellers</p>
        </div>
        
        <div className="bg-sky-50 p-3 rounded-lg border border-sky-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
            Flexible Trips
          </h4>
          <p className="text-sm text-gray-600">One-way & round-trip options available</p>
        </div>
        
        <div className="bg-sky-50 p-3 rounded-lg border border-sky-100">
          <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
            <svg className="w-4 h-4 mr-2 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Airport Transfers
          </h4>
          <p className="text-sm text-gray-600">On-time Mumbai airport drops with tracking</p>
        </div>
      </div>
      
      <div className="mt-6 bg-gradient-to-r from-sky-50 to-blue-50 p-4 rounded-lg border border-sky-200">
        <div className="flex items-center">
          <div className="bg-sky-100 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-bold text-sky-800">Hassle-free travel experience!</h4>
            <p className="text-sm text-gray-600">Multiple payment options & flexible cancellation policy</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          {/* Cab Options & Fare Details */}
          {/* Cab Options & Fare Details - Card Version */}
<section className="mt-8">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-sky-100">
    <div className="bg-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🚖</span> Pune to Mumbai Cab Options
      </h3>
    </div>
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr className="bg-sky-50 text-[#76453B]">
              <th className="p-3 text-left font-semibold">Cab Type</th>
              <th className="p-3 text-left font-semibold">Price (₹/KM)</th>
              <th className="p-3 text-left font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-sky-50">
              <td className="p-3">
                <div className="flex items-center">
                  <div className="bg-sky-100 p-2 rounded-lg mr-3">
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
            <tr className="hover:bg-sky-50">
              <td className="p-3">
                <div className="flex items-center">
                  <div className="bg-sky-100 p-2 rounded-lg mr-3">
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
            <tr className="hover:bg-sky-50">
              <td className="p-3">
                <div className="flex items-center">
                  <div className="bg-sky-100 p-2 rounded-lg mr-3">
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
            <tr className="hover:bg-sky-50">
              <td className="p-3">
                <div className="flex items-center">
                  <div className="bg-sky-100 p-2 rounded-lg mr-3">
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

{/* Fare Estimate - Card Version */}
<section className="mt-6 grid gap-6 md:grid-cols-2">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-sky-100">
    <div className="bg-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">💰</span> Fare Estimate
      </h3>
    </div>
    <div className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
          <span className="font-medium">Sedan</span>
          <span className="font-bold text-[#76453B]">₹2,200 - ₹2,500</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
          <span className="font-medium">SUV</span>
          <span className="font-bold text-[#76453B]">₹3,000 - ₹3,500</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
          <span className="font-medium">Luxury</span>
          <span className="font-bold text-[#76453B]">₹4,500 - ₹5,000</span>
        </div>
      </div>
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-100 rounded-lg text-sm text-yellow-800">
        <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
        Prices are approximate and may vary based on route & toll charges.
      </div>
    </div>
  </div>

  {/* Travel Duration Card */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-sky-100">
    <div className="bg-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🕒</span> Travel Time
      </h3>
    </div>
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="bg-sky-100 p-2 rounded-lg mr-3">
          <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <h4 className="font-bold">Duration</h4>
          <p className="text-gray-600">3.5 to 4.5 hours (depending on traffic)</p>
        </div>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="bg-sky-100 p-2 rounded-lg mr-3">
          <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
          </svg>
        </div>
        <div>
          <h4 className="font-bold">Route</h4>
          <p className="text-gray-600">Mumbai-Pune Expressway (150 km)</p>
        </div>
      </div>
      
      <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
        <div className="flex">
          <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="text-sm text-[#76453B]">Travel Tip: Plan your journey during early mornings or late evenings for a smoother ride.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Booking Services - Card Version */}
<section className="mt-8">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-sky-100">
    <div className="bg-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">🏙️</span> Booking Services
      </h3>
    </div>
    <div className="p-6 grid gap-6 md:grid-cols-2">
      {/* Service Cards */}
      <div className="border border-gray-200 rounded-lg p-4 hover:border-sky-300 transition-colors">
        <div className="flex items-start">
          <div className="bg-sky-100 text-sky-800 rounded-full p-2 mr-3">1️⃣</div>
          <div>
            <h4 className="font-bold text-sky-800">One-Way Taxi</h4>
            <p className="text-gray-600 text-sm mt-1">Budget-friendly single journey without return fare charges</p>
          </div>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-4 hover:border-sky-300 transition-colors">
        <div className="flex items-start">
          <div className="bg-sky-100 text-sky-800 rounded-full p-2 mr-3">2️⃣</div>
          <div>
            <h4 className="font-bold text-sky-800">Round-Trip Cab</h4>
            <p className="text-gray-600 text-sm mt-1">Convenient return journey option for weekend getaways</p>
          </div>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-4 hover:border-sky-300 transition-colors">
        <div className="flex items-start">
          <div className="bg-sky-100 text-sky-800 rounded-full p-2 mr-3">3️⃣</div>
          <div>
            <h4 className="font-bold text-sky-800">Airport Taxi</h4>
            <p className="text-gray-600 text-sm mt-1">On-time pickups with real-time tracking for flights</p>
          </div>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-4 hover:border-sky-300 transition-colors">
        <div className="flex items-start">
          <div className="bg-sky-100 text-sky-800 rounded-full p-2 mr-3">4️⃣</div>
          <div>
            <h4 className="font-bold text-sky-800">Cab Sharing</h4>
            <p className="text-gray-600 text-sm mt-1">Cost-effective option to split travel costs</p>
          </div>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-4 hover:border-sky-300 transition-colors md:col-span-2">
        <div className="flex items-start">
          <div className="bg-sky-100 text-sky-800 rounded-full p-2 mr-3">5️⃣</div>
          <div>
            <h4 className="font-bold text-sky-800">Outstation Cab</h4>
            <p className="text-gray-600 text-sm mt-1">Extended journeys to Goa, Nashik, Mahabaleshwar, etc.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* How to Book - Card Version */}
<section className="mt-8">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-sky-100">
    <div className="bg-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">📖</span> How to Book
      </h3>
    </div>
    <div className="p-6">
      <div className="flex items-start mb-6">
        <div className="bg-sky-100 p-2 rounded-lg mr-4">
          <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Simple & Fast Booking Process</h4>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>Visit <a href="https://aimcab.com" className="text-sky-600 underline">aimcab.com</a></li>
            <li>Enter Pickup & Drop Location</li>
            <li>Choose Your Cab Type</li>
            <li>Confirm Booking & Make Payment</li>
            <li>Get Instant Confirmation</li>
          </ol>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-start">
        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        <div>
          <p className="font-medium text-[#76453B]">Need help? Call/WhatsApp us at <a href="tel:+9191305454491" className="underline">+91 91305454491</a> for instant support.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FAQ - Card Version */}
<section className="mt-8">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-sky-100">
    <div className="bg-[#76453B] p-4">
      <h3 className="text-2xl font-bold text-white flex items-center">
        <span className="mr-2">❓</span> Frequently Asked Questions
      </h3>
    </div>
    <div className="p-6">
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
            <h4 className="font-bold text-sky-800">{item.question}</h4>
            <p className="text-gray-600 mt-1">{item.answer}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-gradient-to-r from-sky-50 to-blue-50 p-4 rounded-lg border border-sky-200 text-center">
        <p className="font-bold text-sky-800 text-lg">🚗 Book your Pune to Mumbai cab now & enjoy a smooth ride!</p>
      </div>
    </div>
  </div>
</section>

{/* About Aim Cab - Card Version */}
<About_Aimcab/>
        </div>
        {/* Footer */}
       <Footer/>
      </div>
    </>
  )
}

export default page