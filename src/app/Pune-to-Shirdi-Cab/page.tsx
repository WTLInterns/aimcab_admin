"use client"

import React from 'react'
import Head from 'next/head'
import BookingForm from '../../components/BookingForm'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
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
    <div>
      <Head>
        <title>Pune to Shirdi Cab Service | Safe & Affordable Taxi</title>
        <meta name="description" content="Book a Pune to Shirdi cab with Aim Cab for a safe and affordable ride. Enjoy one-way & round-trip taxi services with professional drivers. Easy booking!" />
        <link rel="canonical" href="https://aimcab.com/Pune-to-Shirdi-Cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="pune to shirdi cab, pune to shirdi cab service, pune to shirdi cab charges, pune to shirdi taxi, shirdi to pune cab, shirdi to pune taxi, pune to shirdi cab fare, pune to shirdi cab one way, pune to shirdi cab package, pune to shirdi distance by road, pune airport to shirdi cab, pune airport to shirdi taxi fare, pune to shirdi distance by cab, pune to shirdi distance by taxi, pune to shirdi taxi fare, pune airport to shirdi distance, pune to shirdi by car, pune to shirdi cab booking, pune to shirdi car rental, pune to shirdi package, pune to shirdi package by car, pune airport to shirdi taxi, pune to shirdi cab booking service, pune to shirdi cab price, pune to shirdi one day package by car, shirdi to pune cab service" />
        <meta name="robots" content="index, follow" />
      </Head>
    
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
          
          <p ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Book your cab and explore Pune with ease
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>



      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center">
        Pune to Shirdi Cab Service - Affordable & Reliable Taxi Booking
      </h2>

      <BookingForm />

      {/* Service Description */}
<section className="mt-8 p-6 bg-white rounded-lg shadow-md">
  <h3 className="text-3xl font-bold text-[#76453B]">🚖 Best Pune to Shirdi Cab Service</h3>
  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
    <p className="text-lg text-gray-800">
      Looking for a <strong className="text-[#76453B]">Pune to Shirdi cab service</strong> that is affordable, reliable, and comfortable? <span className="font-bold text-[#76453B]">Aim Cab</span> offers the <strong>best taxi booking service</strong> at the <strong>lowest price in the market</strong>, with fares starting at just <span className="text-2xl font-bold text-green-600">₹11/km</span>.Whether you’re traveling for pilgrimage, leisure, or a family trip, our well-maintained cabs and professional drivers ensure a stress-free ride.
    </p>
  </div>
  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
      <h4 className="text-xl font-semibold text-[#76453B] mb-3">Why Choose Us?</h4>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span><strong>2 lakh+</strong> happy customers</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span><strong>24/7</strong> customer support</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span><strong>Verified</strong> drivers & sanitized cabs</span>
        </li>
      </ul>
    </div>
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
      <h4 className="text-xl font-semibold text-[#76453B] mb-3">Key Features</h4>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span><strong>Lowest price in the market</strong> -Just ₹11/km</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span><strong> Safe & Reliable –</strong> Verified drivers & sanitized cabs</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span><strong>On-time pickups & drop-offs –</strong>24/7 availability</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span><strong>Easy Online Booking –</strong> Instant confirmation at aimcab.com</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span><strong>No hidden</strong> 100% transparent pricing</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span><strong>Multiple car options –</strong> Choose from Sedan, SUV, Luxury, and Tempo Traveller</span>
        </li>
        
      </ul>
    </div>
  </div>
  {/* <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
    <p className="text-lg">
      <span className="font-bold">✨ Special Offer:</span> Book now and get <strong>5% discount</strong> on your first ride!
    </p>
  </div> */}
</section>

{/* Why Choose Aim Cab */}
<section className="mt-8 p-6 bg-white rounded-lg shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B]">🏆 Why Choose Aim Cab for Pune to Shirdi Taxi?</h4>
  <div className="mt-6 grid md:grid-cols-2 gap-6">
    <div className="bg-gray-50 p-4 rounded-lg">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3 flex items-center">
        <span className="bg-indigo-100 p-2 rounded-full mr-3">💯</span>
        With over 2 lakh happy customers , Aim Cab is a trusted name in the industry. Here’s why we stand out:
      </h5>
      <ul className="space-y-2 pl-2">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>Affordable Pricing – Best price guarantee for Pune to Shirdi trips</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>Comfortable & Clean Cabs – Choose from Sedans, SUVs, Luxury Cars & Tempo Travellers.</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span> Flexible booking options available.</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>Multiple Payment Methods – Pay via cash, UPI, or online payments.</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span><strong>Pune to Shirdi Airport Cabs – </strong>Timely drop-offs with real-time tracking.</span>
        </li>
   
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span><strong>Flexible Cancellation Policy – </strong>Modify or cancel bookings hassle-free.</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span><strong>24/7 Customer Support -</strong> Assistance whenever you need it.</span>
        </li>
      </ul>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3 flex items-center">
        <span className="bg-indigo-100 p-2 rounded-full mr-3">💰</span>
        Best Value
      </h5>
      <ul className="space-y-2 pl-2">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>Lowest price guarantee</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>No hidden charges</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>Flexible payment options</span>
        </li>
      </ul>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3 flex items-center">
        <span className="bg-indigo-100 p-2 rounded-full mr-3">🚗</span>
        Fleet Options
      </h5>
      <ul className="space-y-2 pl-2">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>Sedan, SUV, Luxury, Tempo</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>Well-maintained vehicles</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>Regularly sanitized cabs</span>
        </li>
      </ul>
    </div>
    {/* <div className="bg-gray-50 p-4 rounded-lg">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3 flex items-center">
        <span className="bg-indigo-100 p-2 rounded-full mr-3">⏱️</span>
        Convenience
      </h5>
      <ul className="space-y-2 pl-2">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>Instant online booking</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>On-time pickups</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>Flexible cancellation</span>
        </li>
      </ul>
    </div> */}
  </div>
  <div className="mt-6 bg-indigo-50 p-4 rounded-lg text-center">
    <p className="text-lg font-semibold text-[#76453B]">
      🚕 Experience hassle-free travel with Aim Cab! Book now at <a href="https://aimcab.com" className="underline text-blue-600">aimcab.com</a>
    </p>
  </div>
</section>

{/* Cab Options & Fare Details */}
<section className="mt-8 p-6 bg-white rounded-lg shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">🚖 Pune to Shirdi Cab Options & Fare Details</h4>
  
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white">
          <th className="p-3 text-left rounded-tl-lg">Cab Type</th>
          <th className="p-3 text-left">Price (₹/KM)</th>
          <th className="p-3 text-left rounded-tr-lg">Best For</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200 hover:bg-gray-50">
          <td className="p-3 font-medium">Sedan (Dzire, Etios)</td>
          <td className="p-3 text-green-600 font-bold">₹11/km</td>
          <td className="p-3">Budget-friendly travel</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-50">
          <td className="p-3 font-medium">SUV (Ertiga, Xylo)</td>
          <td className="p-3 text-green-600 font-bold">₹14/km</td>
          <td className="p-3">Family trips & extra luggage</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-50">
          <td className="p-3 font-medium">Luxury (Innova Crysta)</td>
          <td className="p-3 text-green-600 font-bold">₹18/km</td>
          <td className="p-3">Premium comfort</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-3 font-medium">Tempo Traveller</td>
          <td className="p-3 text-green-600 font-bold">₹25/km</td>
          <td className="p-3">Group trips & outings</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
    <h5 className="text-xl font-semibold text-[#76453B] mb-2">💰 Pune to Shirdi Taxi Fare Estimate</h5>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
      <div className="bg-white p-3 rounded shadow-sm">
        <div className="text-sm text-gray-500">Sedan</div>
        <div className="text-xl font-bold text-green-600">₹3,500 - ₹4,000</div>
      </div>
      <div className="bg-white p-3 rounded shadow-sm">
        <div className="text-sm text-gray-500">SUV</div>
        <div className="text-xl font-bold text-green-600">₹4,500 - ₹5,000</div>
      </div>
      <div className="bg-white p-3 rounded shadow-sm">
        <div className="text-sm text-gray-500">Luxury</div>
        <div className="text-xl font-bold text-green-600">₹6,000 - ₹7,000</div>
      </div>
    </div>
    <p className="mt-3 text-sm text-gray-600">
      * Prices may vary based on toll charges & route conditions
    </p>
  </div>
</section>

{/* Taxi Booking Services */}
<section className="mt-8 p-6 bg-white rounded-lg shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">🏙️ Pune to Shirdi Taxi Booking Services</h4>
  
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-[#76453B] text-xl">
        1️⃣
      </div>
      <div>
        <h5 className="text-xl font-semibold text-[#76453B]">One-Way Pune to Shirdi Cab</h5>
        <p className="mt-1">
        Looking for a one-way cab from Pune to Shirdi? Our service allows you to pay only for a single journey, ensuring cost-effective travel. Get comfortable, well-maintained cabs with professional drivers for a smooth ride.
        </p>
      </div>
    </div>
    
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-[#76453B] text-xl">
        2️⃣
      </div>
      <div>
        <h5 className="text-xl font-semibold text-[#76453B]">Round-Trip Pune to Shirdi Cab</h5>
        <p className="mt-1">
        Planning a round trip? Our Shirdi to Pune cab service ensures a convenient return journey. Whether it’s a family visit, business trip, or leisure travel, book a cab at the lowest price with zero last-minute hassles.
        </p>
      </div>
    </div>
    
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-[#76453B] text-xl">
        3️⃣
      </div>
      <div>
        <h5 className="text-xl font-semibold text-[#76453B]">Pune to Shirdi Airport Taxi</h5>
        <p className="mt-1">
        Need a ride to the airport? Our Pune to Shirdi Airport cab guarantees on-time pickup and drop-off at Shirdi Airport, ensuring a seamless travel experience..
        </p>
      </div>
    </div>
    
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-[#76453B] text-xl">
        4️⃣
      </div>
      <div>
        <h5 className="text-xl font-semibold text-[#76453B]">Pune to Shirdi Outstation Cab</h5>
        <p className="mt-1">
        Planning to explore beyond Shirdi? Our outstation cab service covers nearby destinations like Nashik, Trimbakeshwar, and Aurangabad with affordable pricing and professional drivers.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Travel Guide */}
<section className="mt-8 p-6 bg-white rounded-lg shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">🏞️ Pune to Shirdi Travel Guide</h4>
  
  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-lg">
    <h5 className="text-xl font-semibold text-[#76453B] mb-3">Temples & Pilgrimage Sites in Shirdi:</h5>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <h6 className="font-bold text-[#76453B]">Sai Baba Temple</h6>
        <p className="text-sm">The most famous pilgrimage site in Shirdi, attracting millions of devotees.</p>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <h6 className="font-bold text-[#76453B]">Dwarkamai Mosque – </h6>
        <p className="text-sm">A place where Sai Baba spent a significant part of his life.</p>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <h6 className="font-bold text-[#76453B]">Chavadi –</h6>
        <p className="text-sm">A sacred site associated with Sai Baba’s daily life.</p>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <h6 className="font-bold text-[#76453B]">Gurusthan – </h6>
        <p className="text-sm">A holy place believed to be where Sai Baba first appeared in Shirdi.</p>
      </div>
     
    
     
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <h6 className="font-bold text-[#76453B]">Shani Shingnapur</h6>
        <p className="text-sm">A popular temple dedicated to Lord Shani, located near Shirdi.</p>
      </div>
    </div>
  </div>
  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-lg">
    <h5 className="text-xl font-semibold text-[#76453B] mb-3">Beaches & Scenic Spots Near Shirdi</h5>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <h6 className="font-bold text-[#76453B]">Alibaug Beach – </h6>
        <p className="text-sm">A beautiful getaway with clean shores and water activities.</p>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <h6 className="font-bold text-[#76453B]">Daman Beach –</h6>
        <p className="text-sm">A peaceful location to relax near the coast.</p>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <h6 className="font-bold text-[#76453B]">Kalsubai Peak –</h6>
        <p className="text-sm"> The highest peak in Maharashtra, ideal for trekking enthusiasts.</p>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <h6 className="font-bold text-[#76453B]">Bhandardara –</h6>
        <p className="text-sm">A picturesque hill station near Shirdi, famous for its scenic landscapes.</p>
      </div>
    </div>
  </div>
</section>

{/* Distance & Route */}
<section className="mt-8 p-6 bg-white rounded-lg shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">🛣️ Pune to Shirdi Distance & Route</h4>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center mb-2">
        <div className="bg-indigo-100 p-2 rounded-full mr-3">
          ⏳
        </div>
        <h5 className="text-lg font-semibold">Travel Duration</h5>
      </div>
      <p> The journey from Pune to Shirdi takes approximately 4 to 5 hours, depending on traffic and road conditions.</p>
    </div>
    
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center mb-2">
        <div className="bg-indigo-100 p-2 rounded-full mr-3">
          🛣️
        </div>
        <h5 className="text-lg font-semibold">Distance by Road</h5>
      </div>
      <p>200 km via Pune-Nashik Highway</p>
    </div>
    
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center mb-2">
        <div className="bg-indigo-100 p-2 rounded-full mr-3">
          💰
        </div>
        <h5 className="text-lg font-semibold">Toll Charges</h5>
      </div>
      <p>The Pune to Shirdi toll charges range between ₹300-₹400.</p>
    </div>
    
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center mb-2">
        <div className="bg-indigo-100 p-2 rounded-full mr-3">
          💡
        </div>
        <h5 className="text-lg font-semibold">Travel Tip</h5>
      </div>
      <p>To avoid congestion, start early in the morning or travel late at night for a smooth ride.</p>
    </div>
  </div>
</section>

{/* Frequently Asked Questions */}
<section className="mt-8 p-6 bg-white rounded-lg shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">❓ Frequently Asked Questions</h4>
  
  <div className="space-y-6">
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-lg font-semibold text-[#76453B]">What is the Pune to Shirdi cab fare?</h5>
      <p className="mt-1">The fare starts from ₹3,500 for a sedan and may vary based on the type of car and route conditions.</p>
    </div>
    
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-lg font-semibold text-[#76453B]">How long does it take to travel from Pune to Shirdi by taxi?</h5>
      <p className="mt-1">It takes around 4 to 5 hours depending on traffic and weather conditions.</p>
    </div>
    
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-lg font-semibold text-[#76453B]">Are toll charges included in the Pune to Shirdi taxi fare?</h5>
      <p className="mt-1">No, toll charges are extra and must be paid by the passenger as per actual costs.</p>
    </div>
    
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-lg font-semibold text-[#76453B]">What are the cab options available for Pune to Shirdi travel?</h5>
      <p className="mt-1">We offer Sedan, SUV, Luxury Cars, and Tempo Travellers based on your requirements.</p>
    </div>
    
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-lg font-semibold text-[#76453B]">Is Pune to Shirdi one-way cab service available?</h5>
      <p className="mt-1">Yes, we provide one-way cabs at an affordable price, starting from ₹3,500.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-lg font-semibold text-[#76453B]">Can I book a Pune to Shirdi cab for a round trip?</h5>
      <p className="mt-1">Absolutely! We offer round-trip cabs with flexible booking options.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-lg font-semibold text-[#76453B]">Do you offer Pune to Shirdi airport cabs?</h5>
      <p className="mt-1">Yes, we provide on-time airport drop-off and pickup services.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-lg font-semibold text-[#76453B]">
      What payment methods are available for booking?</h5>
      <p className="mt-1">We accept cash, UPI, and online payments for your convenience.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-lg font-semibold text-[#76453B]">Are the cabs sanitized and safe for travel?</h5>
      <p className="mt-1">Yes, all our cabs are sanitized regularly and driven by verified professionals.</p>
    </div>
    
    <div className="pb-4">
      <h5 className="text-lg font-semibold text-[#76453B]">How can I book a Pune to Shirdi cab?</h5>
      <p className="mt-1">You can book instantly via our website <a href="https://aimcab.com" className="text-blue-600 underline">aimcab.com</a> or call our helpline.</p>
    </div>
  </div>
</section>

{/* About Aim Cab */}
<section className="mt-8 p-6 bg-white rounded-lg shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">🏅 About Aim Cab</h4>
  
  <div className="bg-indigo-50 p-5 rounded-lg mb-6">
    <div className="flex items-center">
      <div className="bg-indigo-100 p-3 rounded-full mr-4">
        🚗
      </div>
      <div>
        <h5 className="text-xl font-semibold">Trusted Since 2001</h5>
        <p>Over two decades of reliable service</p>
      </div>
    </div>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-gray-50 p-4 rounded-lg">
      <h5 className="text-lg font-semibold text-[#76453B] mb-3">Our Fleet</h5>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span><strong>50+</strong> Personal Cabs Across India</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span><strong>500+</strong> Registered Cabs</span>
        </li>
      </ul>
    </div>
    
    <div className="bg-gray-50 p-4 rounded-lg">
      <h5 className="text-lg font-semibold text-[#76453B] mb-3">Our Achievements</h5>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span><strong>2,00,000+</strong> Happy Customers</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span><strong>3,000+</strong> Outstation Trips Completed</span>
        </li>
      </ul>
    </div>
  </div>
  
  <div className="mt-6 bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white p-5 rounded-lg text-center">
    <h5 className="text-xl font-bold mb-2">Ready for a Comfortable Journey?</h5>
    <p className="mb-3">Book your Pune to Shirdi cab now!</p>
    <a href="https://aimcab.com" className="inline-block bg-white text-[#76453B] font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition">
      Book Now
    </a>
  </div>
</section>
 
{/* Footer */}
<div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-6 sm:py-8">
              {/* Popular Cities Section */}
              <div className="container mx-auto px-4 text-center mb-4">
                <b className="text-yellow-400 text-lg transition-all duration-300 ease-in-out hover:text-white">
                  POPULAR CITIES:
                </b>
                <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-2">
                  {/* Pune Button */}
                  <a
                    href="/Pune"
                    className="relative inline-block px-8 sm:px-16 md:px-20 py-4 rounded-full 
                               bg-gradient-to-r from-blue-400 to-yellow-300 
                               text-gray-800 font-bold uppercase shadow-md 
                               transform transition-all duration-500 ease-in-out 
                               hover:scale-105 hover:bg-gradient-to-r hover:from-green-300 hover:to-green-200 hover:shadow-lg hover:text-gray-900"
                  >
                    Pune
                  </a>

                  {/* Mumbai Button */}
                  <a
                    href="/Mumbai"
                    className="relative inline-block px-8 sm:px-16 md:px-20 py-4 rounded-full 
                               bg-gradient-to-r from-blue-400 to-yellow-300 
                               text-gray-800 font-bold uppercase shadow-md 
                               transform transition-all duration-500 ease-in-out 
                               hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 hover:shadow-lg hover:text-white"
                  >
                    Mumbai
                  </a>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-300 my-8" />

              {/* Quick Links Section */}
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

              {/* Divider */}
              <hr className="border-gray-300 my-8" />

              {/* Designed by Section */}
              <div className="container mx-auto px-4 text-center mb-8">
                <h4 className="text-yellow-400 transition-all duration-300 ease-in-out hover:text-white">
                  DESIGNED BY
                </h4>
                <a
                  href="https://cobaztech.com"
                  target="_blank"
                  className="text-white transition-all duration-300 ease-in-out font-semibold block mt-1 hover:text-black hover:scale-105"
      rel="noreferrer"
                >
                  COBAZTECH
                </a>
              </div>

              {/* Social Media Section */}
              <div className="container mx-auto px-4 text-center mt-6">
                <span className="flex justify-center flex-wrap">
                  <a
                    href="https://wa.me/9130030054"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
        rel="noreferrer"
      >
        <img className="w-8 h-8 inline-block mb-2" src="images/whatsapp.png" alt="WhatsApp" />
                  </a>
                  <a
                    href="https://www.facebook.com/Aimcab"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
        rel="noreferrer"
      >
        <img className="w-8 h-8 inline-block mb-2" src="images/facebook.png" alt="Facebook" />
                  </a>
                  <a
                    href="https://www.youtube.com/@AimCab"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
        rel="noreferrer"
      >
        <img className="w-8 h-8 inline-block mb-2" src="images/youtube.png" alt="YouTube" />
                  </a>
                  <a
                    href="https://twitter.com/aim_cab"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
        rel="noreferrer"
      >
        <img className="w-8 h-8 inline-block mb-2" src="images/twitter.png" alt="Twitter" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aim-cab-77356b208/"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
        rel="noreferrer"
      >
        <img className="w-8 h-8 inline-block mb-2" src="images/linked-in.png" alt="LinkedIn" />
                  </a>
                  <a
                    href="https://join.skype.com/invite/sRT2FTyb7d1H"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
        rel="noreferrer"
      >
        <img className="w-8 h-8 inline-block mb-2" src="images/skype.png" alt="Skype" />
                  </a>
                  <a
                    href="https://www.instagram.com/aimcabs/"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
        rel="noreferrer"
      >
        <img className="w-8 h-8 inline-block mb-2" src="images/instagram.png" alt="Instagram" />
                  </a>
                </span>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="container mx-auto px-4 text-center">
              <p className="transition-all duration-300 ease-in-out hover:text-green-200">
                &copy; {new Date().getFullYear()} Aim Cab. All rights reserved.
              </p>
            </div>
          </div>
  )
}

export default Page