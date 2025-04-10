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
      <head>
        <title>Pune to Hyderabad Cab | Book Affordable & Reliable Cabs</title>
        <meta name="description" content="Book a Pune to Hyderabad cab with Aim Cab for a smooth, safe & affordable ride. Enjoy hassle-free long-distance travel with professional drivers." />
        <link rel="canonical" href="https://aimcab.com/pune-to-hyderabad-cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="pune to hyderabad cab, pune to hyderabad taxi, hyderabad cab from pune, long distance cab, pune to hyderabad fare, affordable hyderabad cab" />
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
        Pune to Hyderabad Cab - Book Affordable & Reliable Cabs
      </h2>

      <BookingForm />
      
      {/* Service Description */}
      <section className="mt-8 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg">
  <h3 className="text-3xl font-extrabold text-[#76453B] mb-6">Best Pune to Hyderabad Cab Service - Comfortable & Hassle-Free Rides</h3>
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-lg text-gray-700 leading-relaxed">
      Looking for a <strong className="text-[#76453B]">Pune to Hyderabad cab?</strong> Aim Cab provides the most affordable and convenient cab services for your long-distance journey. Whether you're planning a business trip, family vacation, or one-way journey, our well-maintained fleet and professional drivers ensure a smooth and safe travel experience.
    </p>
  </div>
</section>
      {/* Why Choose Aim Cab */}
      <section className="mt-10 p-8 bg-white rounded-xl shadow-lg">
  <div className="text-center mb-8">
    <h4 className="text-3xl font-bold text-[#76453B]">Why Choose Aim Cab for Pune to Hyderabad Travel?</h4>
    <div className="w-24 h-1 bg-[#76453B] mx-auto mt-4"></div>
  </div>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-all">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">Lowest Price Guarantee</h5>
      <p className="text-gray-700">We offer the most affordable fares in the market.</p>
    </div>
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-all">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">Professional Drivers</h5>
      <p className="text-gray-700">Highly skilled drivers ensure a safe and comfortable ride.</p>
    </div>
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-all">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">24/7 Availability</h5>
      <p className="text-gray-700">Book anytime, anywhere with our round-the-clock service.</p>
    </div>
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-all">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">Well-Maintained Cabs</h5>
      <p className="text-gray-700">Clean and sanitized vehicles for a stress-free journey.</p>
    </div>
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-all">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">Transparent Pricing</h5>
      <p className="text-gray-700">No hidden charges; pay what you see.</p>
    </div>
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-all">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">Multiple Cab Options</h5>
      <p className="text-gray-700">Choose from Sedans, SUVs, and Luxury Cars.</p>
    </div>
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-all md:col-span-2">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">Doorstep Pick-Up & Drop-Off</h5>
      <p className="text-gray-700">Enjoy a hassle-free experience from your home or hotel.</p>
    </div>
  </div>
</section>

      
      {/* Cab Fare Details */}
      <section className="mt-10 p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-lg">
  <div className="text-center mb-8">
    <h4 className="text-3xl font-bold text-[#76453B]">Pune to Hyderabad Cab Fare & Charges</h4>
    <div className="w-24 h-1 bg-[#76453B] mx-auto mt-4"></div>
  </div>
  
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-lg text-gray-700 mb-4">How much does a cab from Pune to Hyderabad cost?</p>
    <p className="text-lg text-gray-700 mb-6">Our Pune to Hyderabad cab charges are designed to be affordable and transparent:</p>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#76453B] text-white">
            <th className="p-4 text-left rounded-tl-lg">Cab Type</th>
            <th className="p-4 text-left">Price (One-Way)</th>
            <th className="p-4 text-left rounded-tr-lg">Price (Round Trip)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-blue-50">
            <td className="p-4 font-medium">Sedan (Swift Dzire, Etios)</td>
            <td className="p-4">₹11/km</td>
            <td className="p-4">₹10/km</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-blue-50">
            <td className="p-4 font-medium">SUV (Ertiga, Innova)</td>
            <td className="p-4">₹14/km</td>
            <td className="p-4">₹13/km</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-4 font-medium">Luxury Cars (BMW, Mercedes)</td>
            <td className="p-4">₹25/km</td>
            <td className="p-4">₹22/km</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
      <p className="text-yellow-700">Note: Prices may vary based on peak seasons and availability.</p>
    </div>
  </div>
</section>
      
      {/* One-Way Cab Service */}
      <section className="mt-10 p-8 bg-white rounded-xl shadow-lg">
  <div className="flex flex-col md:flex-row gap-8 items-center">
    <div className="md:w-1/2">
      <h4 className="text-3xl font-bold text-[#76453B] mb-6">Pune to Hyderabad One-Way Cab Service</h4>
      <p className="text-lg text-gray-700 mb-6">
        Need a Pune to Hyderabad one-way cab? Our one-way services offer great convenience and savings. Instead of paying for a round trip, book a one-way cab at affordable rates and reach your destination comfortably.
      </p>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span className="text-gray-700">No return fare charges</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span className="text-gray-700">Affordable and flexible booking options</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span className="text-gray-700">Instant confirmation</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span className="text-gray-700">Multiple car choices</span>
        </li>
      </ul>
    </div>
    <div className="md:w-1/2 bg-blue-50 p-8 rounded-lg">
      <div className="text-center">
        <div className="text-5xl text-[#76453B] mb-4">560 KM</div>
        <div className="text-xl font-medium text-gray-700">Distance from Pune to Hyderabad</div>
        <div className="mt-6 text-lg text-gray-600">Approx. travel time: 9-10 hours</div>
      </div>
    </div>
  </div>
</section>
      
      {/* Distance & Travel Duration */}
      <section className="mt-10 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Pune to Hyderabad Distance & Travel Duration</h4>
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-lg text-gray-700 mb-6">
      The distance between Pune and Hyderabad is approximately 560 km, and it takes around 9-10 hours to cover the journey via NH65. The route is scenic, offering a mix of urban and countryside views.
    </p>
    <p className="text-xl font-semibold text-[#76453B] mb-4">Recommended Routes:</p>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border-l-4 border-indigo-500 pl-4">
        <p className="font-medium text-gray-800">Via NH65:</p>
        <p className="text-gray-600">Pune → Solapur → Zaheerabad → Hyderabad (Fastest Route)</p>
      </div>
      <div className="border-l-4 border-indigo-500 pl-4">
        <p className="font-medium text-gray-800">Via NH65 & NH161:</p>
        <p className="text-gray-600">Pune → Osmanabad → Naldurg → Hyderabad (Alternative Route)</p>
      </div>
    </div>
  </div>
</section>
      
      {/* Must-Visit Places */}
      <section className="mt-10 p-8 bg-white rounded-xl shadow-lg">
  <div className="text-center mb-8">
    <h4 className="text-3xl font-bold text-[#76453B]">Must-Visit Places Along the Pune to Hyderabad Route</h4>
    <div className="w-24 h-1 bg-[#76453B] mx-auto mt-4"></div>
  </div>
  
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
      <div className="p-6">
        <h5 className="text-xl font-semibold text-[#76453B] mb-3">Solapur</h5>
        <p className="text-gray-700">Famous for historical sites like Siddheshwar Temple and Solapur Fort.</p>
      </div>
    </div>
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
      <div className="p-6">
        <h5 className="text-xl font-semibold text-[#76453B] mb-3">Tuljapur</h5>
        <p className="text-gray-700">Home to Tulja Bhavani Temple, a revered pilgrimage site.</p>
      </div>
    </div>
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
      <div className="p-6">
        <h5 className="text-xl font-semibold text-[#76453B] mb-3">Naldurg Fort</h5>
        <p className="text-gray-700">A beautiful historical fort with scenic views.</p>
      </div>
    </div>
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
      <div className="p-6">
        <h5 className="text-xl font-semibold text-[#76453B] mb-3">Bidar</h5>
        <p className="text-gray-700">Known for heritage sites such as Bidar Fort and Guru Nanak Jhira Sahib.</p>
      </div>
    </div>
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all md:col-span-2 lg:col-span-1">
      <div className="p-6">
        <h5 className="text-xl font-semibold text-[#76453B] mb-3">Ramoji Film City</h5>
        <p className="text-gray-700">A famous film studio worth visiting before reaching Hyderabad.</p>
      </div>
    </div>
  </div>
</section>

      
      {/* FAQs */}
      <section className="mt-10 p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-lg">
  <div className="text-center mb-8">
    <h4 className="text-3xl font-bold text-[#76453B]">FAQs - Pune to Hyderabad Cab Booking</h4>
    <div className="w-24 h-1 bg-[#76453B] mx-auto mt-4"></div>
  </div>
  
  <div className="space-y-6">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">What is the cheapest way to travel from Pune to Hyderabad?</h5>
      <p className="text-gray-700">Booking a Pune to Hyderabad cab service with Aim Cab ensures a cost-effective and comfortable journey compared to buses or trains.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">What are the Pune to Hyderabad cab charges?</h5>
      <p className="text-gray-700">The cab fare starts from ₹11/km for a Sedan. Charges vary based on the cab type and availability.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">Can I book a one-way cab from Pune to Hyderabad?</h5>
      <p className="text-gray-700">Yes, we offer one-way cab services from Pune to Hyderabad at competitive rates.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">How long does it take to travel from Pune to Hyderabad by cab?</h5>
      <p className="text-gray-700">The journey typically takes 9-10 hours, depending on road conditions and traffic.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">What cab options are available for the Pune to Hyderabad trip?</h5>
      <p className="text-gray-700">We offer Sedans, SUVs, and Luxury Cars to cater to different needs and budgets.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">Do you provide airport pick-up/drop services in Hyderabad?</h5>
      <p className="text-gray-700">Yes, we provide convenient airport transfers to and from Rajiv Gandhi International Airport (HYD).</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">Are there any toll charges on the Pune to Hyderabad route?</h5>
      <p className="text-gray-700">Yes, toll charges apply and are included in the final bill.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">Is it safe to travel at night from Pune to Hyderabad?</h5>
      <p className="text-gray-700">Yes, Aim Cab ensures a safe and secure journey with well-trained drivers and GPS tracking.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">Can I modify or cancel my cab booking?</h5>
      <p className="text-gray-700">Yes, you can modify or cancel your booking as per our cancellation policy.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h5 className="text-xl font-semibold text-[#76453B] mb-3">How can I book a cab from Pune to Hyderabad?</h5>
      <p className="text-gray-700">You can book through our website aimcab.com or call us for instant bookings.</p>
    </div>
    

  </div>
  
  <div className="mt-8 text-center">
    <button className="bg-[#76453B] hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
      View More FAQs
    </button>
  </div>
</section>
   {/* About Aim Cab */}
   <About_Aimcab  />
      
      {/* Call to Action */}
      <section className="mt-10 p-12 bg-gradient-to-r from-[#76453B] to-[#d98a22] text-white rounded-xl shadow-lg text-center">
  <h4 className="text-3xl font-bold mb-6">Book Your Pune to Hyderabad Cab Now!</h4>
  <p className="text-xl mb-8">
    Don't wait! Experience a comfortable and stress-free journey with Aim Cab. Book your Pune to Hyderabad taxi today for the best travel experience.
  </p>
  <div className="flex flex-col md:flex-row justify-center gap-6">
    <a href="tel:+9191305454491" className="bg-white text-[#76453B] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      +91 91305454491
    </a>
    <a href="https://aimcab.com" className="border-2 border-white hover:bg-indigo-700 font-bold py-4 px-8 rounded-lg text-lg transition-all flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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