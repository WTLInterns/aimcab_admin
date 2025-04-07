"use client";
import React from 'react';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../container/component/Navbar'
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

      {/* Main Content */}
      <h2 className="text-3xl font-bold mt-4 text-center">
        Pune to Solapur Cab - Affordable & Reliable Taxi Service
      </h2>
      <BookingForm />

<div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg mb-8">
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-blue-100 p-2 rounded-full">
      <span className="text-blue-600 text-xl">🚖</span>
    </div>
    <h2 className="text-2xl font-bold text-gray-800">Best Pune to Solapur Cab Service at <span className="text-blue-600">Lowest Price</span></h2>
  </div>
  
  <p className="text-gray-700 mb-4">
    Looking for a Pune to Solapur cab that's both affordable and comfortable? <span className="font-semibold text-blue-600">Aim Cab</span> offers the best taxi service at just <span className="font-bold">₹11/km</span>, ensuring a smooth, safe, and hassle-free journey with professional drivers and well-maintained vehicles.
  </p>
  
  <div className="grid md:grid-cols-2 gap-4">
    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✔</span>
          <span><strong>Lowest Price Guaranteed</strong> - Starting from ₹11/km</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✔</span>
          <span><strong>Safe & Comfortable Rides</strong> - Professional drivers & sanitized cabs</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✔</span>
          <span><strong>24/7 Availability</strong> - Book anytime, anywhere</span>
        </li>
      </ul>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✔</span>
          <span><strong>Instant Online Booking</strong> - Quick confirmation at aimcab.com</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✔</span>
          <span><strong>Transparent Pricing</strong> - No hidden charges</span>
        </li>
      </ul>
    </div>
  </div>
</div>

{/* <!-- Why Choose Section --> */}
<div className="bg-white p-6 rounded-xl shadow-lg mb-8 border-t-4 border-orange-400">
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-orange-100 p-2 rounded-full">
      <span className="text-orange-600 text-xl">🏆</span>
    </div>
    <h2 className="text-2xl font-bold text-gray-800">Why Choose <span className="text-orange-600">Aim Cab</span> for Pune to Solapur?</h2>
  </div>
  
  <p className="text-gray-700 mb-4">
    With over <span className="font-bold">2 lakh happy customers</span>, Aim Cab is a trusted name in outstation travel. Here's why we're the best:
  </p>
  
  <div className="grid md:grid-cols-2 gap-4">
    <div className="bg-orange-50 p-4 rounded-lg">
      <div className="flex items-start mb-3">
        <div className="bg-orange-100 p-1 rounded-full mr-3">
          <span className="text-orange-600 text-sm">✓</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-800">Timely & Reliable Service</h4>
          <p className="text-gray-600 text-sm">We value your time and ensure punctuality</p>
        </div>
      </div>
      <div className="flex items-start mb-3">
        <div className="bg-orange-100 p-1 rounded-full mr-3">
          <span className="text-orange-600 text-sm">✓</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-800">Affordable & Transparent Pricing </h4>
          <p className="text-gray-600 text-sm">Get the best Pune to Solapur cab price with no hidden charges.</p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="bg-orange-100 p-1 rounded-full mr-3">
          <span className="text-orange-600 text-sm">✓</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-800"> Variety of Car Options</h4>
          <p className="text-gray-600 text-sm"> Choose from Sedans, SUVs, Luxury Cars & Tempo Travellers.</p>
        </div>
      </div>
    </div>
    
    <div className="bg-orange-50 p-4 rounded-lg">
      <div className="flex items-start mb-3">
        <div className="bg-orange-100 p-1 rounded-full mr-3">
          <span className="text-orange-600 text-sm">✓</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-800">Flexible Travel Plans</h4>
          <p className="text-gray-600 text-sm"> One-way & round-trip cabs available.</p>
        </div>
      </div>
      <div className="flex items-start mb-3">
        <div className="bg-orange-100 p-1 rounded-full mr-3">
          <span className="text-orange-600 text-sm">✓</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-800">Multiple Payments</h4>
          <p className="text-gray-600 text-sm">Pay via cash, UPI, or online payment.</p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="bg-orange-100 p-1 rounded-full mr-3">
          <span className="text-orange-600 text-sm">✓</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-800">24/7 Support</h4>
          <p className="text-gray-600 text-sm">Assistance available anytime</p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="mt-4 bg-blue-50 p-4 rounded-lg text-center">
    <p className="text-blue-600 font-medium">🚖 Experience a stress-free ride with Aim Cab!</p>
  </div>
</div>

{/* <!-- Pricing Table --> */}
<div className="bg-white p-6 rounded-xl shadow-lg mb-8">
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-purple-100 p-2 rounded-full">
      <span className="text-purple-600 text-xl">💰</span>
    </div>
    <h2 className="text-2xl font-bold text-gray-800">Pune to Solapur <span className="text-sky-600">Cab Fare & Booking Details</span></h2>
  </div>
  
  <div className="overflow-x-auto">
    <table className="w-full rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white">
          <th className="px-6 py-3 text-left">Cab Type</th>
          <th className="px-6 py-3 text-left">Price (₹/KM)</th>
          <th className="px-6 py-3 text-left">Best For</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr className="hover:bg-purple-50">
          <td className="px-6 py-4">
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <span className="text-purple-600">🚗</span>
              </div>
              <span>Sedan (Dzire, Etios)</span>
            </div>
          </td>
          <td className="px-6 py-4 font-bold">₹11/km</td>
          <td className="px-6 py-4">Budget-friendly travel</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-purple-50">
          <td className="px-6 py-4">
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <span className="text-purple-600">🚙</span>
              </div>
              <span>SUV (Ertiga, Xylo)</span>
            </div>
          </td>
          <td className="px-6 py-4 font-bold">₹14/km</td>
          <td className="px-6 py-4">Family trips & extra luggage</td>
        </tr>
        <tr className="hover:bg-purple-50">
          <td className="px-6 py-4">
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <span className="text-purple-600">🏎️</span>
              </div>
              <span>Luxury (Innova Crysta)</span>
            </div>
          </td>
          <td className="px-6 py-4 font-bold">₹18/km</td>
          <td className="px-6 py-4">Premium comfort</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-purple-50">
          <td className="px-6 py-4">
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <span className="text-purple-600">🚐</span>
              </div>
              <span>Tempo Traveller</span>
            </div>
          </td>
          <td className="px-6 py-4 font-bold">₹25/km</td>
          <td className="px-6 py-4">Group trips & outings</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div className="mt-6 bg-purple-50 p-4 rounded-lg">
    <h3 className="font-bold text-purple-700 mb-2">💰 Estimated Pune to Solapur Taxi Fare</h3>
    <div className="grid md:grid-cols-3 gap-4">
      <div className="bg-white p-3 rounded shadow-sm">
        <div className="flex items-center mb-1">
          <span className="text-purple-600 mr-2">🚗</span>
          <span className="font-bold">Sedan:</span>
        </div>
        <p>₹3,000 - ₹3,500</p>
      </div>
      <div className="bg-white p-3 rounded shadow-sm">
        <div className="flex items-center mb-1">
          <span className="text-purple-600 mr-2">🚙</span>
          <span className="font-bold">SUV:</span>
        </div>
        <p>₹4,000 - ₹4,500</p>
      </div>
      <div className="bg-white p-3 rounded shadow-sm">
        <div className="flex items-center mb-1">
          <span className="text-purple-600 mr-2">🏎️</span>
          <span className="font-bold">Luxury:</span>
        </div>
        <p>₹5,500 - ₹6,500</p>
      </div>
    </div>
    <p className="mt-3 text-sm text-gray-600">📍 Toll charges are extra and may vary based on route conditions.</p>
  </div>
</div>

{/* <!-- Route Information --> */}
<div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl shadow-lg mb-8">
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-green-100 p-2 rounded-full">
      <span className="text-green-600 text-xl">🛣️</span>
    </div>
    <h2 className="text-2xl font-bold text-gray-800">Pune to Solapur <span className="text-green-600">Route Information</span></h2>
  </div>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <h3 className="font-bold text-green-700 mb-2">📍 Quick Facts</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span><strong>Travel Duration: </strong> Approximately 4.5 to 5.5 hours depending on traffic.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span><strong>Distance by Road:</strong> 250 km via NH-65.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span><strong>Toll Charges:</strong> ₹300-₹400 approx.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span><strong>Travel Tip:</strong> Start early morning to avoid traffic congestion.</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-bold text-green-700 mb-2">🛤️ Route Details</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span><strong>Best Route:</strong> Pune-Solapur Highway (NH-65)</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span><strong>Alternative Route:</strong> Pune via Baramati</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span><strong>Recommended Stopovers:</strong> Indapur, Tembhurni</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

{/* <!-- Travel Guide --> */}
<div className="bg-white p-6 rounded-xl shadow-lg mb-8 border-t-4 border-amber-400">
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-amber-100 p-2 rounded-full">
      <span className="text-amber-600 text-xl">🏖️</span>
    </div>
    <h2 className="text-2xl font-bold text-gray-800">Pune to Solapur <span className="text-amber-600">Travel Guide</span></h2>
  </div>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <div className="bg-amber-50 p-4 rounded-lg">
        <h3 className="font-bold text-amber-700 mb-3 flex items-center">
          <span className="mr-2">🌆</span> Top Attractions in Solapur
        </h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
              <span className="text-amber-600 text-xs">★</span>
            </div>
            <div>
              <h4 className="font-bold">Pandharpur Temple</h4>
              <p className="text-sm text-gray-600">Famous pilgrimage site dedicated to Lord Vitthal</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
              <span className="text-amber-600 text-xs">★</span>
            </div>
            <div>
              <h4 className="font-bold">Akkalkot Swami Samarth Temple</h4>
              <p className="text-sm text-gray-600">Spiritual retreat with divine ambiance</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
              <span className="text-amber-600 text-xs">★</span>
            </div>
            <div>
              <h4 className="font-bold">Solapur Bhuikot Fort </h4>
              <p className="text-sm text-gray-600">A historic site reflecting the Maratha legacy.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
              <span className="text-amber-600 text-xs">★</span>
            </div>
            <div>
              <h4 className="font-bold">Hipparga Lake</h4>
              <p className="text-sm text-gray-600">A beautiful scenic spot for relaxation and nature lovers.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
              <span className="text-amber-600 text-xs">★</span>
            </div>
            <div>
              <h4 className="font-bold"> Great Indian Bustard Sanctuary :</h4>
              <p className="text-sm text-gray-600"> A must-visit for wildlife enthusiasts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div>
      {/* <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-bold text-blue-700 mb-3 flex items-center">
          <span className="mr-2">🏖️</span>  Beaches Near Solapur
        </h3>
        <p className="mb-3 text-gray-700">
        Although Solapur does not have beaches, you can visit coastal regions like Tarkarli Beach and Ganpatipule Beach for a relaxing getaway.
        </p>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">🌊</span>
            <span className="font-medium">Tarkarli Beach</span>
          </div>
          <div className="flex items-center">
            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">🌊</span>
            <span className="font-medium">Ganpatipule Beach</span>
          </div>
        </div>
      </div> */}
    </div>
  </div>
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <div className="bg-amber-50 p-4 rounded-lg">
        <h3 className="font-bold text-amber-700 mb-3 flex items-center">
          <span className="mr-2">🌆</span> Pune to Solapur Distance & Route Details
        </h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
              <span className="text-amber-600 text-xs">★</span>
            </div>
            <div>
              <h4 className="font-bold"> Travel Duration </h4>
              <p className="text-sm text-gray-600">Approximately 4.5 to 5.5 hours depending on traffic.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
              <span className="text-amber-600 text-xs">★</span>
            </div>
            <div>
              <h4 className="font-bold"> Distance by Road:</h4>
              <p className="text-sm text-gray-600">250 km via NH-65</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
              <span className="text-amber-600 text-xs">★</span>
            </div>
            <div>
              <h4 className="font-bold">Toll Charges: </h4>
              <p className="text-sm text-gray-600">₹300-₹400 approx.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
              <span className="text-amber-600 text-xs">★</span>
            </div>
            <div>
              <h4 className="font-bold">Travel Tip</h4>
              <p className="text-sm text-gray-600"> Start early morning to avoid traffic congestion.</p>
            </div>
          </div>
          {/* <div className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
              <span className="text-amber-600 text-xs">★</span>
            </div>
            <div>
              <h4 className="font-bold"> Great Indian Bustard Sanctuary :</h4>
              <p className="text-sm text-gray-600"> A must-visit for wildlife enthusiasts.</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    
    <div>
      {/* <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-bold text-blue-700 mb-3 flex items-center">
          <span className="mr-2">🏖️</span>  Beaches Near Solapur
        </h3>
        <p className="mb-3 text-gray-700">
        Although Solapur does not have beaches, you can visit coastal regions like Tarkarli Beach and Ganpatipule Beach for a relaxing getaway.
        </p>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">🌊</span>
            <span className="font-medium">Tarkarli Beach</span>
          </div>
          <div className="flex items-center">
            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">🌊</span>
            <span className="font-medium">Ganpatipule Beach</span>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</div>

{/* <!-- FAQ Section --> */}
<div className="bg-gray-50 p-6 rounded-xl shadow-lg mb-8">
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-indigo-100 p-2 rounded-full">
      <span className="text-indigo-600 text-xl">❓</span>
    </div>
    <h2 className="text-2xl font-bold text-gray-800">Frequently Asked <span className="text-indigo-600">Questions</span></h2>
  </div>
  
  <div className="space-y-4">
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-bold text-[#76453B] mb-2">1. What is the Pune to Solapur cab fare?</h4>
      <p>The fare starts from ₹3,000 for a sedan and varies based on the car type and trip duration.</p>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-bold text-[#76453B] mb-2">2. How long does it take to travel from Pune to Solapur by taxi?</h4>
      <p>The journey typically takes 4.5 to 5.5 hours, depending on road conditions.</p>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-bold text-[#76453B] mb-2">3.  Are toll charges included in the Pune to Solapur taxi fare?</h4>
      <p>No, toll charges are extra and must be paid separately.</p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-bold text-[#76453B] mb-2">4. What cab options are available for Pune to Solapur travel?</h4>
        <p>We offer Sedan, SUV, Luxury Cars, and Tempo Travellers.</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-bold text-[#76453B] mb-2">5. Is a one-way cab from Pune to Solapur available?</h4>
        <p>Yes, we provide one-way cabs starting from ₹3,000.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-bold text-[#76453B] mb-2">6.Can I book a Solapur to Pune cab for a round trip?</h4>
        <p>Yes, we offer flexible round-trip cabs.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-bold text-[#76453B] mb-2">7.What payment methods are accepted?</h4>
        <p>We accept cash, UPI, and online payments.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-bold text-[#76453B] mb-2">8. Are your cabs sanitized and safe for travel?</h4>
        <p>Yes, all our cabs are regularly sanitized for safety.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-bold text-[#76453B] mb-2">9. How can I book a Pune to Solapur cab?</h4>
        <p>You can book instantly via our website aimcab.com.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-bold text-[#76453B] mb-2">10. Do you offer sightseeing packages in Solapur?</h4>
        <p>Yes, we have customized sightseeing packages for tourists.</p>
      </div>
    </div>
  </div>
</div>

{/* <!-- CTA Section --> */}
<div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-8 rounded-xl text-center text-white shadow-lg mb-8">
  <div className="max-w-2xl mx-auto">
    <h2 className="text-2xl font-bold mb-3">🚖 Ready for Your Pune to Solapur Trip?</h2>
    <p className="mb-6 text-blue-100">
      Experience the Best Cab Service with Aim Cab. Get the lowest fares, professional drivers, and hassle-free booking.
    </p>
    <a href="https://aimcab.com" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full inline-block hover:bg-blue-50 transition">
      Book Your Cab Now
    </a>
  </div>
</div>

{/* <!-- About Section --> */}
<div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg">
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-gray-700 p-2 rounded-full">
      <span className="text-white text-xl">🌐</span>
    </div>
    <h2 className="text-2xl font-bold">About <span className="text-blue-300">Aim Cab</span></h2>
  </div>
  
  <p className="mb-4 text-gray-300">
    Established in 2001, Aim Cab has been a trusted name in the travel industry, providing top-notch cab services across India.
  </p>
  
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    <div className="bg-gray-700 p-4 rounded-lg text-center">
      <div className="text-2xl font-bold text-blue-300">50+</div>
      <div className="text-sm">Personal Cabs</div>
    </div>
    <div className="bg-gray-700 p-4 rounded-lg text-center">
      <div className="text-2xl font-bold text-blue-300">500+</div>
      <div className="text-sm">Registered Cabs</div>
    </div>
    <div className="bg-gray-700 p-4 rounded-lg text-center">
      <div className="text-2xl font-bold text-blue-300">2L+</div>
      <div className="text-sm">Happy Customers</div>
    </div>
    <div className="bg-gray-700 p-4 rounded-lg text-center">
      <div className="text-2xl font-bold text-blue-300">3K+</div>
      <div className="text-sm">Outstation Trips</div>
    </div>
  </div>
  
  <div className="bg-gray-700 p-4 rounded-lg">
    <p className="font-medium mb-2">🌟 Why Customers Choose Us:</p>
    <ul className="space-y-2 text-sm text-gray-300">
      <li className="flex items-start">
        <span className="text-blue-300 mr-2">•</span>
        <span>Reliable & Punctual Service - Your time matters, and so do we!</span>
      </li>
      <li className="flex items-start">
        <span className="text-blue-300 mr-2">•</span>
        <span>Diverse Fleet - Sedans, SUVs, Luxury Cars & Tempo Travellers</span>
      </li>
    </ul>
  </div>
</div>


        {/* Footer */}
        <div>
          {/* Redesigned Responsive Footer */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-6 sm:py-8">
            {/* Footer content area */}
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Additional footer columns can be added here */}
              </div>
            </div>

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
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/whatsapp.png"
                    alt="WhatsApp"
                  />
                </a>
                <a
                  href="https://www.facebook.com/Aimcab"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/facebook.png"
                    alt="Facebook"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@AimCab"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/youtube.png"
                    alt="YouTube"
                  />
                </a>
                <a
                  href="https://twitter.com/aim_cab"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/twitter.png"
                    alt="Twitter"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/aim-cab-77356b208/"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/linked-in.png"
                    alt="LinkedIn"
                  />
                </a>
                <a
                  href="https://join.skype.com/invite/sRT2FTyb7d1H"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/skype.png"
                    alt="Skype"
                  />
                </a>
                <a
                  href="https://www.instagram.com/aimcabs/"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/instagram.png"
                    alt="Instagram"
                  />
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
      </div>
     
   
  );
};
export default Page;
