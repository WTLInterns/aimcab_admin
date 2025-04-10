"use client";
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
        Pune to Ahmednagar Cab - Affordable & Reliable Taxi Service
      </h2>

      <BookingForm />

    {/* Service Description */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <div className=" mx-auto">
    <h3 className="text-3xl font-bold text-[#76453B] flex items-center">
      <span className="mr-2">🚖</span> Best Pune to Ahmednagar Cab Service at Lowest Price
    </h3>
    <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
      <p className="text-lg text-gray-800">
        Looking for a <span className="font-bold text-[#76453B]">Pune to Ahmednagar cab</span> that is budget-friendly and comfortable? Aim Cab provides reliable and affordable taxi services at just <span className="font-bold text-green-600">₹11/km</span>, ensuring a smooth, safe, and hassle-free travel experience with professional drivers and well-maintained vehicles.
      </p>
      <ul className="mt-4 space-y-3">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span className="text-gray-800"><strong className="text-[#76453B]">Lowest Price Guaranteed</strong> - Starting from ₹11/km</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span className="text-gray-800"><strong className="text-[#76453B]">Safe & Comfortable Rides</strong> - Experienced drivers & sanitized cabs</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span className="text-gray-800"><strong className="text-[#76453B]">24/7 Availability</strong> - Book anytime, anywhere</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span className="text-gray-800"><strong className="text-[#76453B]">Instant Online Booking</strong> - Quick confirmation at <a href="https://aimcab.com" className="text-blue-500 underline hover:text-blue-700">aimcab.com</a></span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span className="text-gray-800"><strong className="text-[#76453B]">Transparent Pricing</strong> - No hidden charges</span>
        </li>
      </ul>
    </div>
  </div>
</section>

{/* Why Choose Aim Cab */}
<section className="mt-8 p-6 bg-white rounded-xl shadow-md">
  <div className=" mx-auto">
    <h4 className="text-3xl font-bold text-[#76453B] flex items-center">
      <span className="mr-2">🏆</span> Why Choose Aim Cab for Pune to Ahmednagar Taxi Service?
    </h4>
    <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
      <p className="text-lg text-gray-800">
        With over <span className="font-bold text-[#76453B]">2 lakh happy customers</span>, Aim Cab is a trusted name in outstation travel. Here's why we are the best Pune to Ahmednagar cab service:
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h5 className="font-bold text-[#76453B] flex items-center">
            <span className="mr-2">⏱️</span> Reliable & Timely Service
          </h5>
          <p className="mt-1 text-gray-700">Punctual pickups and drop-offs, ensuring you never have to wait.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h5 className="font-bold text-[#76453B] flex items-center">
            <span className="mr-2">💰</span> Affordable Fares
          </h5>
          <p className="mt-1 text-gray-700">Get the lowest Pune to Ahmednagar cab fare with no extra charges.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h5 className="font-bold text-[#76453B] flex items-center">
            <span className="mr-2">🚗</span> Variety of Car Choices
          </h5>
          <p className="mt-1 text-gray-700">Select from Sedans, SUVs, Luxury Cars & Tempo Travellers to suit your needs.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h5 className="font-bold text-[#76453B] flex items-center">
            <span className="mr-2">🔄</span> One-Way & Round-Trip Cabs
          </h5>
          <p className="mt-1 text-gray-700">Flexible travel plans to match your requirements.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h5 className="font-bold text-[#76453B] flex items-center">
            <span className="mr-2">💳</span> Easy Payment Options
          </h5>
          <p className="mt-1 text-gray-700">Pay via cash, UPI, or online modes.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h5 className="font-bold text-[#76453B] flex items-center">
            <span className="mr-2">🎯</span> Customized Packages
          </h5>
          <p className="mt-1 text-gray-700">Tailored for individuals, families, and corporate clients.</p>
        </div>
      </div>
      <div className="mt-6 bg-indigo-100 p-4 rounded-lg">
        <p className="text-indigo-800 font-bold text-lg flex items-center">
          <span className="mr-2">🚖</span> Experience a stress-free ride with Aim Cab!
        </p>
      </div>
    </div>
  </div>
</section>

{/* Cab Options & Fare Details */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <div className=" mx-auto">
    <h4 className="text-3xl font-bold text-[#76453B] flex items-center">
      <span className="mr-2">🚖</span> Pune to Ahmednagar Cab Fare & Booking Details
    </h4>
    <div className="mt-6 overflow-x-auto">
      <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white">
          <tr>
            <th className="p-3 text-left">Cab Type</th>
            <th className="p-3 text-left">Price (₹/KM)</th>
            <th className="p-3 text-left">Best For</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50">
            <td className="p-3">Sedan (Dzire, Etios)</td>
            <td className="p-3 font-bold text-green-600">₹11/km</td>
            <td className="p-3">Budget-friendly travel</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-3">SUV (Ertiga, Xylo)</td>
            <td className="p-3 font-bold text-green-600">₹14/km</td>
            <td className="p-3">Family trips & extra luggage space</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-3">Luxury (Innova Crysta)</td>
            <td className="p-3 font-bold text-green-600">₹18/km</td>
            <td className="p-3">Premium comfort & business travel</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-3">Tempo Traveller</td>
            <td className="p-3 font-bold text-green-600">₹25/km</td>
            <td className="p-3">Group trips & office outings</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

{/* Estimated Fare */}
<section className="mt-8 p-6 bg-white rounded-xl shadow-md">
  <div className=" mx-auto">
    <h4 className="text-3xl font-bold text-[#76453B] flex items-center">
      <span className="mr-2">💰</span> Estimated Pune to Ahmednagar Taxi Fare
    </h4>
    <div className="mt-6 grid md:grid-cols-3 gap-4">
      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
        <h5 className="font-bold text-[#76453B]">Sedan</h5>
        <p className="text-2xl font-bold text-green-600 mt-2">₹2,000 - ₹2,500</p>
      </div>
      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
        <h5 className="font-bold text-[#76453B]">SUV</h5>
        <p className="text-2xl font-bold text-green-600 mt-2">₹3,000 - ₹3,500</p>
      </div>
      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
        <h5 className="font-bold text-[#76453B]">Luxury</h5>
        <p className="text-2xl font-bold text-green-600 mt-2">₹4,500 - ₹5,500</p>
      </div>
    </div>
    <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
      <p className="text-yellow-800 flex items-center">
        <span className="mr-2">📍</span> Toll charges are extra and may vary based on route conditions.
      </p>
    </div>
  </div>
</section>

{/* Travel Guide */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <div className=" mx-auto">
    <h4 className="text-3xl font-bold text-[#76453B] flex items-center">
      <span className="mr-2">🏖️</span> Pune to Ahmednagar Travel Guide
    </h4>
    <div className="mt-6 grid md:grid-cols-2 gap-6">
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h5 className="text-xl font-bold text-[#76453B] flex items-center">
          <span className="mr-2">🌆</span> Top Attractions in Ahmednagar
        </h5>
        <ul className="mt-3 space-y-2">
          <li className="flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Shani Shingnapur – A famous temple known for its open shrines.</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Ahmednagar Fort – A historic monument with rich heritage.</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Cavalry Tank Museum – India's only museum dedicated to tanks.</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Meherabad – A spiritual retreat of Meher Baba.</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Ratangad Fort – Ideal for trekking and adventure lovers.</span>
          </li>
        </ul>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h5 className="text-xl font-bold text-[#76453B] flex items-center">
          <span className="mr-2">🏖️</span> Beaches Near Ahmednagar
        </h5>
        <p className="mt-3">
          Though Ahmednagar itself does not have beaches, you can visit nearby coastal regions such as Alibaug Beach and Murud Beach, perfect for weekend getaways.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Distance & Route */}
<section className="mt-8 p-6 bg-white rounded-xl shadow-md">
  <div className=" mx-auto">
    <h4 className="text-3xl font-bold text-[#76453B] flex items-center">
      <span className="mr-2">🛣️</span> Pune to Ahmednagar Distance & Route Details
    </h4>
    <div className="mt-6 grid md:grid-cols-2 gap-4">
      <div className="bg-indigo-50 p-4 rounded-lg">
        <p className="text-indigo-800 flex items-center">
          <span className="mr-2">⏳</span> <strong>Travel Duration:</strong> Approximately 2.5 to 3.5 hours depending on traffic.
        </p>
      </div>
      <div className="bg-indigo-50 p-4 rounded-lg">
        <p className="text-indigo-800 flex items-center">
          <span className="mr-2">🛣️</span> <strong>Distance by Road:</strong> 120 km via Pune-Ahmednagar Highway.
        </p>
      </div>
      <div className="bg-indigo-50 p-4 rounded-lg">
        <p className="text-indigo-800 flex items-center">
          <span className="mr-2">💰</span> <strong>Toll Charges:</strong> ₹150-₹200 approx.
        </p>
      </div>
      <div className="bg-indigo-50 p-4 rounded-lg">
        <p className="text-indigo-800 flex items-center">
          <span className="mr-2">🚲</span> <strong>Travel Tip:</strong> Early morning travel is recommended to avoid traffic congestion.
        </p>
      </div>
    </div>
    <div className="mt-6 bg-white p-5 rounded-lg border border-indigo-100 shadow-sm">
      <h5 className="text-xl font-bold text-[#76453B] flex items-center">
        <span className="mr-2">📍</span> Pune to Ahmednagar Distance Overview
      </h5>
      <ul className="mt-3 space-y-2">
        <li className="flex items-start">
          <span className="text-indigo-500 mr-2">•</span>
          <span><strong>Total Distance:</strong> 120 km</span>
        </li>
        <li className="flex items-start">
          <span className="text-indigo-500 mr-2">•</span>
          <span><strong>Best Route:</strong> Pune-Ahmednagar Highway</span>
        </li>
        <li className="flex items-start">
          <span className="text-indigo-500 mr-2">•</span>
          <span><strong>Time Taken:</strong> 2.5 to 3.5 hours</span>
        </li>
        <li className="flex items-start">
          <span className="text-indigo-500 mr-2">•</span>
          <span><strong>Alternative Routes:</strong> NH-60 and SH-27</span>
        </li>
        <li className="flex items-start">
          <span className="text-indigo-500 mr-2">•</span>
          <span><strong>Recommended Stopovers:</strong> Ranjangaon, Shirdi (if extended trip).</span>
        </li>
      </ul>
    </div>
  </div>
</section>

{/* FAQs */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <div className=" mx-auto">
    <h4 className="text-3xl font-bold text-[#76453B] flex items-center">
      <span className="mr-2">❓</span> Frequently Asked Questions (FAQs)
    </h4>
    <div className="mt-6 space-y-4">
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h5 className="font-bold text-[#76453B]">What is the Pune to Ahmednagar cab fare?</h5>
        <p className="mt-1 text-gray-700">The fare starts from ₹2,000 for a sedan and varies based on the car type and trip duration.</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h5 className="font-bold text-[#76453B]">How long does it take to travel from Pune to Ahmednagar by taxi?</h5>
        <p className="mt-1 text-gray-700">The journey typically takes 2.5 to 3.5 hours, depending on road conditions.</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h5 className="font-bold text-[#76453B]">Are toll charges included in the Pune to Ahmednagar taxi fare?</h5>
        <p className="mt-1 text-gray-700">No, toll charges are extra and must be paid separately.</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h5 className="font-bold text-[#76453B]">What cab options are available for Pune to Ahmednagar travel?</h5>
        <p className="mt-1 text-gray-700">We offer Sedan, SUV, Luxury Cars, and Tempo Travellers.</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h5 className="font-bold text-[#76453B]">Is a one-way cab from Pune to Ahmednagar available?</h5>
        <p className="mt-1 text-gray-700">Yes, we provide one-way cabs starting from ₹2,000.</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h5 className="font-bold text-[#76453B]">Can I book an Ahmednagar to Pune cab for a round trip?</h5>
        <p className="mt-1 text-gray-700">Yes, we offer flexible round-trip cabs.</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h5 className="font-bold text-[#76453B]">What payment methods are accepted?</h5>
        <p className="mt-1 text-gray-700">We accept cash, UPI, and online payments.</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h5 className="font-bold text-[#76453B]">Are your cabs sanitized and safe for travel?</h5>
        <p className="mt-1 text-gray-700">Yes, all our cabs are regularly sanitized for safety.</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h5 className="font-bold text-[#76453B]">How can I book a Pune to Ahmednagar cab?</h5>
        <p className="mt-1 text-gray-700">You can book instantly via our website <a href="https://aimcab.com" className="text-blue-500 underline hover:text-blue-700">aimcab.com</a>.</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h5 className="font-bold text-[#76453B]">Do you offer sightseeing packages in Ahmednagar?</h5>
        <p className="mt-1 text-gray-700">Yes, we have customized sightseeing packages for tourists.</p>
      </div>
    </div>
    <div className="mt-8 text-center bg-white p-6 rounded-lg shadow-sm">
      <h5 className="text-2xl font-bold text-[#76453B]">📞 Book Your Pune to Ahmednagar Cab Now!</h5>
      <p className="mt-3 text-lg text-gray-700">
        🚖 Experience the Best Pune to Ahmednagar Cab Service with Aim Cab. Get the lowest fares, professional drivers, and a hassle-free booking experience. Book your ride today at <a href="https://aimcab.com" className="text-blue-500 underline hover:text-blue-700 font-bold">aimcab.com</a>!
      </p>
    </div>
  </div>
</section>

{/* About Aim Cab */}
<About_Aimcab  />
      <Footer />
    </div>
  )
}

export default page;