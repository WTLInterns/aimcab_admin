"use client"

import React from 'react'
import Head from 'next/head'
import BookingForm from '../../components/BookingForm'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
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
    <div>
      <Head>
        <title>Pune to Mahabaleshwar Cab | Hassle-Free Taxi Service</title>
        <meta name="description" content="Book a Pune to Mahabaleshwar cab with Aim Cab for a comfortable and affordable ride. Enjoy one-way & round-trip taxi services with expert drivers. Easy booking!" />
        <link rel="canonical" href="https://aimcab.com/Pune-to-Mahabaleshwar-Cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="pune to mahabaleshwar cab, cab service in mahabaleshwar, distance between pune and mahabaleshwar, distance between pune to mahabaleshwar, mahabaleshwar trip from pune, how to go mahabaleshwar from pune, mahabaleshwar package from pune, pune to mahabaleshwar cab fare, pune to mahabaleshwar taxi fare, mahabaleshwar one day trip from pune, pune to mahabaleshwar cab packages, pune to mahabaleshwar taxi" />
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
        Pune to Mahabaleshwar Cab - Book Affordable & Reliable Taxi Service
      </h2>

      <BookingForm />

   {/* Service Description */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <h3 className="text-3xl font-bold text-[#76453B]">🚖 Best Pune to Mahabaleshwar Cab Service at Lowest Price</h3>
  <p className="mt-6 text-lg text-gray-700 leading-relaxed">
    <span className="bg-yellow-100 px-1">✨ Planning a scenic getaway to Mahabaleshwar?</span>  Look no further than <b className="text-[#76453B]">Aim Cab</b> for a comfortable and affordable <b className="text-[#76453B]">Pune to Mahabaleshwar cab. </b> We offer<b className="text-[#76453B]">the lowest fares in the market,  </b> starting at just <b className="text-green-600">₹11/km!</b> ensuring a hassle-free travel experience with well-maintained cabs and professional drivers.
  </p>
  
  <ul className="mt-6 space-y-3">
    <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong className="text-[#76453B]"> Lowest price guaranteed:</strong> <span className="ml-1">Only ₹11/km!</span></li>
    <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong className="text-[#76453B]">Safe & Comfortable Rides :</strong> <span className="ml-1">Verified drivers & sanitized cabs</span></li>
    <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong className="text-[#76453B]">24/7 Availability:</strong> <span className="ml-1"> Anytime, anywhere service </span></li>
    <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong className="text-[#76453B]">Hassle-Free Online Booking:</strong> <span className="ml-1"> Instant confirmation at<a href="https://aimcab.com" className="text-blue-600 underline font-medium">aimcab.com</a></span></li>
    <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong className="text-[#76453B]">No Hidden Charges :</strong> <span className="ml-1">100% transparent pricing</span></li>
  </ul>
</section>

{/* Why Choose Aim Cab */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-lg border border-blue-100">
  <div className="text-center mb-8">
    <h4 className="text-3xl font-bold text-[#76453B]">🏆 Why Choose Aim Cab for Pune to Mahabaleshwar Taxi Service?</h4>
    <p className="mt-2 text-lg text-gray-600">With over 2 lakh happy customers, Aim Cab is the most trusted travel partner for your Mahabaleshwar trip from Pune. Here’s why:</p>
  </div>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-blue-50 p-5 rounded-lg">
      <h5 className="font-bold text-lg text-[#76453B] mb-3">💰 Affordable Pricing</h5>
      <p>No hidden costs.</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg">
      <h5 className="font-bold text-lg text-[#76453B] mb-3">🚗 Comfortable & Clean Cabs</h5>
      <p>Sedans, SUVs, Luxury Cars & Tempo Travellers.</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg">
      <h5 className="font-bold text-lg text-[#76453B] mb-3">🔄 One-Way & Round-Trip Options </h5>
      <p>Flexible booking as per your needs.</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg">
      <h5 className="font-bold text-lg text-[#76453B] mb-3">💳 Multiple Payment Methods </h5>
      <p>Pay via cash, UPI, or online payments. </p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg">
      <h5 className="font-bold text-lg text-[#76453B] mb-3">🚗  Reliable Pune to Mahabaleshwar Cab Packages  </h5>
      <p> Reliable Pune to Mahabaleshwar Cab Packages  </p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg">
      <h5 className="font-bold text-lg text-[#76453B] mb-3">📞24/7 Customer Support </h5>
      <p>We are always here to assist you. </p>
    </div>
  </div>
  
  <div className="mt-8 bg-indigo-100 p-4 rounded-lg text-center">
    <p className="text-[#76453B] font-bold text-xl">🚕 Experience comfort meets affordability with India's most reliable cab service!</p>
  </div>
</section>

{/* Cab Options & Fare Details */}
<section className="mt-10 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6 text-center">🚗 Pune to Mahabaleshwar Cab Options & Fare Details</h4>
  
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white">
          <th className="p-4 text-left rounded-tl-lg">Cab Type</th>
          <th className="p-4">Price (₹/KM)</th>
          <th className="p-4 text-right rounded-tr-lg">Best For</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        <tr>
          <td className="p-4 font-medium">Sedan (Dzire, Etios)</td>
          <td className="p-4 text-center text-green-600 font-bold">₹11/km</td>
          <td className="p-4 text-right">Budget-friendly travel</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="p-4 font-medium">SUV (Ertiga, Xylo)</td>
          <td className="p-4 text-center text-green-600 font-bold">₹14/km</td>
          <td className="p-4 text-right">Family trips & extra luggage space</td>
        </tr>
        <tr>
          <td className="p-4 font-medium">Luxury (Innova Crysta)</td>
          <td className="p-4 text-center text-green-600 font-bold">₹18/km</td>
          <td className="p-4 text-right">Premium comfort & business travel</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="p-4 font-medium">Tempo Traveller</td>
          <td className="p-4 text-center text-green-600 font-bold">₹25/km</td>
          <td className="p-4 text-right">Group trips & office outings</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div className="mt-8 bg-white p-6 rounded-lg shadow-inner">
    <h5 className="text-xl font-bold text-[#76453B] mb-4">💸 Pune to Mahabaleshwar Taxi Fare Estimate</h5>
    <div className="grid md:grid-cols-3 gap-4">
      <div className="border-l-4 border-green-500 pl-4">
        <p className="text-gray-600">Sedan</p>
        <p className="text-2xl font-bold">₹3,500-₹4,000</p>
      </div>
      <div className="border-l-4 border-blue-500 pl-4">
        <p className="text-gray-600">SUV</p>
        <p className="text-2xl font-bold">₹4,500-₹5,000</p>
      </div>
      <div className="border-l-4 border-purple-500 pl-4">
        <p className="text-gray-600">Luxury</p>
        <p className="text-2xl font-bold">₹6,000-₹7,000</p>
      </div>
    </div>
    <p className="mt-4 text-sm text-gray-500">*  Prices may vary based on toll charges & route conditions.</p>
  </div>
</section>

{/* Taxi Booking Services */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-lg">
  <h4 className="text-3xl font-bold text-[#76453B] mb-8 text-center">📅Pune to Mahabaleshwar Taxi Booking Services</h4>
  
  <div className="grid md:grid-cols-3 gap-6">
    {/* One-Way Card */}
    <div className="border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="bg-blue-100 text-[#76453B] w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
      <h5 className="text-xl font-bold text-[#76453B] mb-3">One-Way Pune to Mahabaleshwar Cab</h5>
      <p className="text-gray-600">Looking for a one-way cab? Pay only for a single journey with Aim Cab’s affordable service. Whether you are heading to Mahabaleshwar for leisure or work, our one-way taxi service ensures a smooth and cost-effective ride. Enjoy premium comfort with well-maintained cars and professional drivers.</p>
      {/* <div className="mt-4 text-blue-600 font-medium">Starting @ ₹3,500</div> */}
    </div>
    
    {/* Round-Trip Card */}
    <div className="border border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="bg-green-100 text-green-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
      <h5 className="text-xl font-bold text-[#76453B] mb-3">Round-Trip Pune to Mahabaleshwar Cab</h5>
      <p className="text-gray-600">Planning a return trip? Our Mahabaleshwar to Pune cab service is perfect for a seamless journey. Whether you are staying overnight or exploring Mahabaleshwar for multiple days, our round-trip cab services offer the most convenient and budget-friendly travel option.</p>
      {/* <div className="mt-4 text-green-600 font-medium">Starting @ ₹7,000</div> */}
    </div>
    
    {/* Outstation Card */}
    <div className="border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="bg-purple-100 text-purple-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
      <h5 className="text-xl font-bold text-[#76453B] mb-3">Pune to Mahabaleshwar Outstation Cab</h5>
      <p className="text-gray-600">Want to explore nearby destinations? We cover Panchgani, Pratapgad, and Lonavala too! With Aim Cab, you can book intercity cabs for a relaxed and comfortable ride to Mahabaleshwar and beyond. Our drivers are well-trained to navigate outstation routes, ensuring a hassle-free experience</p>
      {/* <div className="mt-4 text-purple-600 font-medium">Custom Pricing</div> */}
    </div>
  </div>
</section>

{/* Travel Guide */}
<section className="mt-10 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">🏞️ Your Mahabaleshwar Travel Companion</h4>
  
  <div className="bg-white p-6 rounded-lg shadow-inner mb-8">
    <h5 className="text-2xl font-bold text-[#76453B] mb-4 flex items-center">
      <span className="mr-2">⭐</span>Pune to Mahabaleshwar Travel Guide
    </h5>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="flex items-start">
        <span className="text-blue-500 mr-3 mt-1">•</span>
        <div>
          <h6 className="font-bold">Venna Lake</h6>
          <p className="text-gray-600 text-sm">A scenic lake perfect for boating and photography.</p>
        </div>
      </div>
      <div className="flex items-start">
        <span className="text-blue-500 mr-3 mt-1">•</span>
        <div>
          <h6 className="font-bold">Pratapgad Fort</h6>
          <p className="text-gray-600 text-sm">A historical fort with breathtaking views and significant Maratha history.</p>
        </div>
      </div>
      <div className="flex items-start">
        <span className="text-blue-500 mr-3 mt-1">•</span>
        <div>
          <h6 className="font-bold">Mapro Garden</h6>
          <p className="text-gray-600 text-sm">Famous for strawberry farms, delicious shakes, and a beautiful picnic area.</p>
        </div>
      </div>
      <div className="flex items-start" >
      <span className="text-blue-500 mr-3 mt-1">•</span>
        <div>
          <h6 className="font-bold">Lingmala Waterfall</h6>
          <p className="text-gray-600 text-sm">   A spectacular waterfall that offers a refreshing escape amidst nature.</p>
        </div>
        </div>

        <div className="flex items-start">  
        <span className="text-blue-500 mr-3 mt-1">•</span>
          <div>
        
          <h6 className="font-bold">Wilson Point</h6>
          <p className="text-gray-600 text-sm"> The highest point in Mahabaleshwar, offering mesmerizing sunrise views.</p>
        </div></div>
      <div className="flex items-start">
        
        <span className="text-blue-500 mr-3 mt-1">•</span>
        <div>
          <h6 className="font-bold">Elephant’s Head Point</h6>
          <p className="text-gray-600 text-sm">  A stunning viewpoint with a unique rock formation resembling an elephant’s head.</p>
        </div>
       
      </div>
      <div className="flex items-start" >
      <span className="text-blue-500 mr-3 mt-1">•</span>
      <div>
          <h6 className="font-bold">Panchgani Table Land </h6>
          <p className="text-gray-600 text-sm">   A vast plateau offering horse rides and stunning views of surrounding valleys.</p>
        </div>
      </div>
    </div>
  </div>
  

</section>

{/* Distance & Route */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-lg">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">📍  Pune to Mahabaleshwar Distance & Route</h4>
  
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <div className="flex items-start mb-4">
        <div className="bg-indigo-100 p-3 rounded-full mr-4">
          <span className="text-[#76453B] text-xl">⏱️</span>
        </div>
        <div>
          <h5 className="font-bold text-lg">Travel Duration: </h5>
          <p className="text-gray-600">The journey takes approximately 4 to 5 hours depending on traffic.</p>
        </div>
      </div>
      
      <div className="flex items-start mb-4">
        <div className="bg-indigo-100 p-3 rounded-full mr-4">
          <span className="text-[#76453B] text-xl">🛣️</span>
        </div>
        <div>
          <h5 className="font-bold text-lg">Distance by Road:</h5>
          <p className="text-gray-600">120 km via NH48</p>
        </div>
      </div>
    </div>
    
    <div>
      <div className="flex items-start mb-4">
        <div className="bg-indigo-100 p-3 rounded-full mr-4">
          <span className="text-[#76453B] text-xl">💰</span>
        </div>
        <div>
          <h5 className="font-bold text-lg">Toll Charges</h5>
          <p className="text-gray-600">Approx. ₹300-₹400</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="bg-indigo-100 p-3 rounded-full mr-4">
          <span className="text-[#76453B] text-xl">🚦</span>
        </div>
        <div>
          <h5 className="font-bold text-lg">Travel Tip:</h5>
          <p className="text-gray-600">Early morning or late evening travel is best to avoid traffic.</p>
        </div>
      </div>
    </div>
  </div>
  
  {/* <div className="mt-8 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
    <p className="text-[#76453B] text-center">📌 <b>Route Suggestion:</b> Pune → Katraj Tunnel → Shirwal → Wathar → Mahabaleshwar</p>
  </div> */}
</section>

{/* FAQs */}
<section className="mt-10 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-8 text-center">❓ Your Questions Answered</h4>
  
  <div className="space-y-6">
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B] flex items-center">
        <span className="bg-indigo-100 text-[#76453B] w-6 h-6 rounded-full flex items-center justify-center mr-3">1</span>
        What is the Pune to Mahabaleshwar cab fare?
      </h5>
      <p className="mt-2 pl-9 text-gray-600">The fare starts from ₹3,500 for a sedan and varies based on car type.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B] flex items-center">
        <span className="bg-indigo-100 text-[#76453B] w-6 h-6 rounded-full flex items-center justify-center mr-3">2</span>
        How long does it take to travel from Pune to Mahabaleshwar by taxi?
      </h5>
      <p className="mt-2 pl-9 text-gray-600">It takes around 4 to 5 hours, depending on traffic and road conditions.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B] flex items-center">
        <span className="bg-indigo-100 text-[#76453B] w-6 h-6 rounded-full flex items-center justify-center mr-3">3</span>
        Are toll charges included in the Pune to Mahabaleshwar taxi fare?
      </h5>
      <p className="mt-2 pl-9 text-gray-600">No, toll charges are extra and paid separately.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B] flex items-center">
        <span className="bg-indigo-100 text-[#76453B] w-6 h-6 rounded-full flex items-center justify-center mr-3">4</span>
        What are the cab options available for Pune to Mahabaleshwar travel?
      </h5>
      <p className="mt-2 pl-9 text-gray-600">We offer Sedan, SUV, Luxury Cars, and Tempo Travellers.
       </p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B] flex items-center">
        <span className="bg-indigo-100 text-[#76453B] w-6 h-6 rounded-full flex items-center justify-center mr-3">5</span>
        Is Pune to Mahabaleshwar one-way cab service available?
      </h5>
      <p className="mt-2 pl-9 text-gray-600">Yes, we provide one-way cabs starting from ₹3,500.
       </p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B] flex items-center">
        <span className="bg-indigo-100 text-[#76453B] w-6 h-6 rounded-full flex items-center justify-center mr-3">6</span>
        Can I book a Pune to Mahabaleshwar cab for a round trip?
      </h5>
      <p className="mt-2 pl-9 text-gray-600">Yes, we offer round-trip cabs with flexible bookings.
       </p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B] flex items-center">
        <span className="bg-indigo-100 text-[#76453B] w-6 h-6 rounded-full flex items-center justify-center mr-3">7</span>
        What payment methods are available for booking?
      </h5>
      <p className="mt-2 pl-9 text-gray-600">We accept cash, UPI, and online payments.
       </p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B] flex items-center">
        <span className="bg-indigo-100 text-[#76453B] w-6 h-6 rounded-full flex items-center justify-center mr-3">8</span>
        Are the cabs sanitized and safe for travel?
      </h5>
      <p className="mt-2 pl-9 text-gray-600">Yes, all our cabs are regularly sanitized.
       </p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B] flex items-center">
        <span className="bg-indigo-100 text-[#76453B] w-6 h-6 rounded-full flex items-center justify-center mr-3">9</span>
        How can I book a Pune to Mahabaleshwar cab?
      </h5>
      <p className="mt-2 pl-9 text-gray-600">You can book instantly via our website aimcab.com.
       </p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B] flex items-center">
        <span className="bg-indigo-100 text-[#76453B] w-6 h-6 rounded-full flex items-center justify-center mr-3">10</span>
        Do you offer Mahabaleshwar sightseeing packages?
      </h5>
      <p className="mt-2 pl-9 text-gray-600">We offer Sedan, SUV, Luxury Cars, and Tempo Travellers.
       </p>
    </div>
  </div>
  
  {/* <div className="mt-8 text-center">
    <button className="bg-sky-900 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors">
      View All FAQs
    </button>
  </div> */}
</section>

{/* Call to Action */}
<section className="mt-10 p-10 bg-gradient-to-r from-[#F3B664] to-[#76453B] rounded-xl text-center">
  <h4 className="text-3xl font-bold text-white mb-4">Ready for Your Mahabaleshwar Adventure?</h4>
  <p className="text-xl text-indigo-100 mb-6">Book your perfect ride today and enjoy:</p>
  
  <div className="grid md:grid-cols-3 gap-4 mb-8">
    <div className="bg-white bg-opacity-10 p-3 rounded-lg backdrop-blur-sm">
      <p className="text-white font-bold">✓ Lowest Price Guarantee</p>
    </div>
    <div className="bg-white bg-opacity-10 p-3 rounded-lg backdrop-blur-sm">
      <p className="text-white font-bold">✓ 24/7 Customer Support</p>
    </div>
    <div className="bg-white bg-opacity-10 p-3 rounded-lg backdrop-blur-sm">
      <p className="text-white font-bold">✓ Instant Confirmation</p>
    </div>
  </div>
  
  <a href="https://aimcab.com" className="inline-block bg-white text-[#76453B] font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all">
    Book Now @ aimcab.com
  </a>
  
  <p className="mt-6 text-indigo-200">Or call us at: <span className="font-bold text-white">[PHONE NUMBER]</span></p>
</section>

{/* About Aim Cab */}
{/* <section className="mt-10 p-8 bg-white rounded-xl shadow-lg">
  <div className="text-center mb-8">
    <h4 className="text-3xl font-bold text-[#76453B]">🏆 Our Journey Since 2001</h4>
    <p className="mt-2 text-lg text-gray-600">Trusted by 2 lakh+ happy customers across India</p>
  </div>
  
  <div className="grid md:grid-cols-4 gap-6 text-center">
    <div className="p-4 border border-blue-100 rounded-lg">
      <div className="text-4xl font-bold text-[#76453B]">50+</div>
      <p className="text-gray-600">Own Fleet Vehicles</p>
    </div>
    <div className="p-4 border border-blue-100 rounded-lg">
      <div className="text-4xl font-bold text-[#76453B]">500+</div>
      <p className="text-gray-600">Network Cabs</p>
    </div>
    <div className="p-4 border border-blue-100 rounded-lg">
      <div className="text-4xl font-bold text-[#76453B]">2L+</div>
      <p className="text-gray-600">Happy Customers</p>
    </div>
    <div className="p-4 border border-blue-100 rounded-lg">
      <div className="text-4xl font-bold text-[#76453B]">3K+</div>
      <p className="text-gray-600">Successful Trips</p>
    </div>
  </div>
  
  <div className="mt-8 bg-blue-50 p-6 rounded-lg">
    <p className="text-center text-lg text-[#76453B]">
      "From humble beginnings to becoming one of Pune's most trusted cab services, we remain committed to delivering safe, affordable, and comfortable journeys for every traveler."
    </p>
    <p className="text-center mt-4 font-bold">- The Aim Cab Team</p>
  </div>
</section> */}

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

        {/* Social Media Section */}
        <div className="container mx-auto px-4 text-center mt-6">
          <span className="flex justify-center flex-wrap">
            {/* Social Media Links */}
            <a
              href="https://wa.me/9130030054"
              target="_blank"
              className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
              rel="noreferrer"
            >
              <img className="w-8 h-8 inline-block mb-2" src="images/whatsapp.png" alt="WhatsApp" />
            </a>
            {/* Add other social media links similarly */}
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