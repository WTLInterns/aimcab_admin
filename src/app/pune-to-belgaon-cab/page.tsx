"use client";
import React from 'react';
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
    <>
     <Navbar/>
      <div>
        <Head>
        <title>Pune to Belgaon Cab | Affordable & Reliable Taxi Service</title>
      <meta name="description" content="Book Pune to Belgaon cab services with Aim Cab for a safe, comfortable & affordable ride. 24/7 booking, professional drivers & well-maintained taxis." />
      <link rel="canonical" href="https://aimcab.com/pune-to-belgaon-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Belgaon cab, Pune To Belgaon cab Services, Cab Services From Pune To Belgaon, Pune To Belgaon Cab Services charges, Best cab Services Pune To Belgaon" />
      <meta name="robots" content="index, follow" />
        </Head>

        {/* Header */}
        <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white py-12 md:py-20 text-center ">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 mx-auto px-4">
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
        Pune to Belgaon Cab Services – Affordable & Comfortable Rides
        </h2>

        <BookingForm />

{/* Hero Section */}
{/* <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6 rounded-lg shadow-lg">
  <div className="mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Pune to Belgaon Cab Services</h1>
    <p className="text-xl md:text-2xl mb-8">Experience comfortable, reliable, and affordable travel with Aim Cab</p>
    <a href="https://aimcab.com" target="_blank" className="bg-white text-[#76453B] font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-100 transition duration-300 inline-block">
      Book Now
    </a>
  </div>
</section> */}

{/* Service Description */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className="mx-auto">
    <h3 className="text-3xl font-bold text-[#76453B] mb-6">Book Pune to Belgaon Cab Services with Aim Cab</h3>
    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
      <p className="text-lg leading-relaxed">
        Looking for Pune to Belgaon cab services that are affordable, comfortable, and reliable? Aim Cab offers top-notch cab services from Pune to Belgaon with professional drivers, clean vehicles, and the lowest fares in the market. Whether you're traveling for business, leisure, or a family trip, we ensure a seamless and hassle-free experience.
        <br/><br/>
        Our Pune to Belgaon cab services come with multiple vehicle options, including hatchbacks, sedans, SUVs, and luxury cars. With a transparent pricing structure and zero hidden charges, we guarantee customer satisfaction. Book your Pune to Belgaon cab today for a smooth and enjoyable journey!
      </p>
    </div>
  </div>
</section>

{/* Why Choose Aim Cab */}
<section className="mt-12 p-8 bg-gray-50 rounded-xl">
  <div className="mx-auto">
    <h4 className="text-3xl font-bold text-[#76453B] mb-8 text-center">Why Choose Aim Cab for Pune to Belgaon Cab Services?</h4>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-[#76453B]">
        <h5 className="text-xl font-semibold mb-3 text-gray-800"> Lowest Price in the Market:</h5>
        <p className="text-gray-700">Get the most affordable rates for Pune to Belgaon cabs.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-[#76453B]">
        <h5 className="text-xl font-semibold mb-3 text-gray-800"> No Hidden Charges</h5>
        <p className="text-gray-700">We provide transparent pricing with upfront fare breakdown.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-[#76453B]">
        <h5 className="text-xl font-semibold mb-3 text-gray-800"> Comfortable & Clean Vehicles</h5>
        <p className="text-gray-700">Choose from hatchbacks, sedans, SUVs, and luxury cabs.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-[#76453B]">
        <h5 className="text-xl font-semibold mb-3 text-gray-800"> Professional & Trained Drivers</h5>
        <p className="text-gray-700">Skilled drivers ensure a safe and smooth ride.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-[#76453B]">
        <h5 className="text-xl font-semibold mb-3 text-gray-800"> Flexible Booking Options</h5>
        <p className="text-gray-700"> Book one-way, round-trip, or outstation rides.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-[#76453B]">
        <h5 className="text-xl font-semibold mb-3 text-gray-800"> 24/7 Availability</h5>
        <p className="text-gray-700"> Book your cab anytime at your convenience.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-[#76453B]">
        <h5 className="text-xl font-semibold mb-3 text-gray-800"> Easy Online Booking</h5>
        <p className="text-gray-700"> Visit aimcab.com to confirm your ride instantly.</p>
      </div>
    </div>
  </div>
</section>

{/* Service Options */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className="mx-auto">
    <h4 className="text-3xl font-bold text-[#76453B] mb-8 text-center">Pune to Belgaon Cab Services - Available Options</h4>
    
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-blue-50 p-6 rounded-lg text-center">
        <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <span className="text-[#76453B] text-2xl">→</span>
        </div>
        <h5 className="text-xl font-bold mb-3">One-Way Pune to Belgaon Cab</h5>
        <p>If you need a cab for a one-way journey, Aim Cab provides Pune to Belgaon taxi services at pocket-friendly rates with no extra charges.

</p>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <span className="text-green-600 text-2xl">↔</span>
        </div>
        <h5 className="text-xl font-bold mb-3">Round-Trip Pune to Belgaon Cab</h5>
        <p>For those planning a return journey, our round-trip Pune to Belgaon cab services are the best option, offering better value and convenience.</p>
      </div>
      
      <div className="bg-purple-50 p-6 rounded-lg text-center">
        <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <span className="text-purple-600 text-2xl">✈</span>
        </div>
        <h5 className="text-xl font-bold mb-3">Outstation Cab Services from Pune to Belgaon</h5>
        <p>Planning a long trip? Our outstation cab services from Pune to Belgaon ensure a comfortable ride with professional chauffeurs.

</p>
      </div>
    </div>
  </div>
</section>

{/* Pricing Table */}
<section className="mt-12 p-8 bg-gray-50 rounded-xl">
  <div className="mx-auto">
    <h4 className="text-3xl font-bold text-[#76453B] mb-8 text-center">Pune to Belgaon Cab Services Charges</h4>
    
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
          <tr>
            <th className="p-4 text-left">Cab Type</th>
            <th className="p-4 text-center">Distance (KM)</th>
            <th className="p-4 text-center">Price Per KM (₹)</th>
            <th className="p-4 text-center">Estimated Fare (₹)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-blue-50">
            <td className="p-4 font-medium">Hatchback</td>
            <td className="p-4 text-center">350 KM</td>
            <td className="p-4 text-center">₹11/km</td>
            <td className="p-4 text-center font-bold">₹3,850</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-4 font-medium">Sedan</td>
            <td className="p-4 text-center">350 KM</td>
            <td className="p-4 text-center">₹12/km</td>
            <td className="p-4 text-center font-bold">₹4,200</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-4 font-medium">SUV</td>
            <td className="p-4 text-center">350 KM</td>
            <td className="p-4 text-center">₹14/km</td>
            <td className="p-4 text-center font-bold">₹4,900</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-4 font-medium">Innova</td>
            <td className="p-4 text-center">350 KM</td>
            <td className="p-4 text-center">₹16/km</td>
            <td className="p-4 text-center font-bold">₹5,600</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
      <p className="text-yellow-800"><strong>Note:</strong> Additional toll charges, driver allowances, and night charges may apply.</p>
    </div>
  </div>
</section>

{/* Attractions */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className="mx-auto">
    <h4 className="text-3xl font-bold text-[#76453B] mb-8 text-center">Must-Visit Places While Traveling from Pune to Belgaon</h4>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-2">Belgaum Fort</h5>
          <p className="text-gray-700">A historical fort showcasing ancient architecture and rich history.</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="bg-green-100 p-3 rounded-full mr-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-2">Gokak Falls</h5>
          <p className="text-gray-700">A breathtaking waterfall, perfect for photography and sightseeing.</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="bg-purple-100 p-3 rounded-full mr-4">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-2">Kamala Basti</h5>
          <p className="text-gray-700">A famous Jain temple located within the Belgaum Fort premises.</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="bg-red-100 p-3 rounded-full mr-4">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
          </svg>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-2">Vajrapoha Falls</h5>
          <p className="text-gray-700">An offbeat destination for nature lovers and adventure seekers.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FAQ */}
<section className="mt-12 p-8 bg-gray-50 rounded-xl">
  <div className="mx-auto">
    <h4 className="text-3xl font-bold text-[#76453B] mb-8 text-center">Frequently Asked Questions (FAQs)</h4>
    
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-xl font-semibold mb-2 flex items-center text-[#76453B]">
          <span className="bg-blue-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
          How do I book a Pune to Belgaon cab with Aim Cab?
        </h5>
        <p className="text-gray-700 pl-11">You can book online via <a href="https://aimcab.com" className="text-blue-500 underline">aimcab.com</a> or call us directly.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-xl font-semibold mb-2 flex items-center text-[#76453B]">
          <span className="bg-blue-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
          What is the estimated travel time from Pune to Belgaon?
        </h5>
        <p className="text-gray-700 pl-11">The journey takes approximately 6 to 7 hours.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-xl font-semibold mb-2 flex items-center text-[#76453B]">
          <span className="bg-blue-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
          Are there any extra charges apart from the cab fare?
        </h5>
        <p className="text-gray-700 pl-11">Toll charges and parking fees are additional.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-xl font-semibold mb-2 flex items-center text-[#76453B]">
          <span className="bg-blue-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
          Can I book a round-trip Pune to Belgaon cab?
        </h5>
        <p className="text-gray-700 pl-11">Yes! We offer affordable round-trip services.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-xl font-semibold mb-2 flex items-center text-[#76453B]">
          <span className="bg-blue-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
          Do I need to pay a driver allowance for long trips?
        </h5>
        <p className="text-gray-700 pl-11">A small driver allowance may be applicable.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-xl font-semibold mb-2 flex items-center text-[#76453B]">
          <span className="bg-blue-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3">6</span>
          Is Aim Cab available 24/7?
        </h5>
        <p className="text-gray-700 pl-11">Yes! Our services are available round the clock.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-xl font-semibold mb-2 flex items-center text-[#76453B]">
          <span className="bg-blue-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3">7</span>
          Can I select a specific cab for my journey?
        </h5>
        <p className="text-gray-700 pl-11">Yes, choose from hatchbacks, sedans, SUVs, and luxury vehicles.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-xl font-semibold mb-2 flex items-center text-[#76453B]">
          <span className="bg-blue-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3">8</span>
          Is it safe to travel with Aim Cab?
        </h5>
        <p className="text-gray-700 pl-11">Yes! We prioritize safety with sanitized cabs and professional drivers.</p>
      </div>
    </div>
  </div>
</section>
<About_Aimcab  />
{/* CTA */}
<section className="mt-12 p-12 bg-gradient-to-r from-[#76453B] to-[#d88f30] text-white rounded-xl text-center">
  <div className="mx-auto">
    <h4 className="text-3xl font-bold mb-6">Ready for Your Pune to Belgaon Journey?</h4>
    <p className="text-xl mb-8">Experience the comfort and reliability of Aim Cab's premium services</p>
    
    <div className="flex flex-col md:flex-row justify-center gap-4">
      <a href="https://aimcab.com" target="_blank" className="bg-white text-[#76453B] font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-100 transition duration-300 inline-block">
        Book Online Now
      </a>
      <a href="tel:+918166922792" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-[#76453B] transition duration-300 inline-block">
        Call: +91 8166922792
      </a>
    </div>
    
    <div className="mt-8 pt-6 border-t border-blue-400">
      <p className="text-lg">Trusted by thousands of travelers since 2001</p>
    </div>
  </div>
</section>

        
        {/* Redesigned Footer */}
        
        
        {/* Copyright Section */}
        {/* <div className="container mx-auto px-4 text-center">
          <p className="transition-all duration-300 ease-in-out hover:text-green-200">
            &copy; {new Date().getFullYear()} Aim Cab. All rights reserved.
          </p>
        </div> */}


        <div> <Footer/></div>
      </div>
    </>
  );
};

export default page;
