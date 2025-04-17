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
        <title>Pune to Indore Cab | Affordable & Hassle-Free Taxi</title>
        <meta name="description" content="Book a Pune to Indore cab with Aim Cab for a comfortable & budget-friendly ride. Enjoy reliable taxi service with professional drivers at the best fares." />
        <link rel="canonical" href="https://aimcab.com/pune-to-indore-cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="pune to indore cab, pune to indore taxi, pune to indore cab rates, cab from indore to pune, pune to indore sharing cab, sharing cab from pune to indore, pune to indore cab service" />
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
        Pune to Indore Cab – Affordable & Reliable Taxi Service
      </h2>
      
      <BookingForm />
      {/* Service Description */}
      {/* Hero Section */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm">
  <h3 className="text-3xl font-bold text-[#76453B]">
     Book Your Pune to Indore Cab with Aim Cab
  </h3>
  <div className="mt-6 p-4 bg-white rounded-lg shadow-xs">
    <p className="text-lg text-gray-700 leading-relaxed">
      Looking for a <strong>Pune to Indore cab</strong> service that is reliable, affordable, and comfortable? Aim Cab offers the best long-distance cab service with experienced drivers, ensuring a smooth journey from Pune to Indore. Whether you need a one-way cab, a sharing cab, or a round-trip taxi, we have you covered with the lowest rates in the market.
    </p>
  </div>
</section>

{/* Why Choose Us */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3">
     Why Choose Aim Cab for Pune to Indore Taxi?
  </h4>
  <div className="mt-6 grid md:grid-cols-2 gap-4">
    <div className="bg-blue-50 p-4 rounded-lg flex items-start">
      <span className="text-green-500 text-2xl mr-3">✓</span>
      <div>
        <strong className="text-[#76453B]">Lowest Price Guarantee</strong>
        <p className="text-gray-700">Starting at just ₹11/km</p>
      </div>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg flex items-start">
      <span className="text-green-500 text-2xl mr-3">✓</span>
      <div>
        <strong className="text-[#76453B]">Well-Maintained Cabs</strong>
        <p className="text-gray-700">Neat & clean cabs for a stress-free journey.</p>
      </div>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg flex items-start">
      <span className="text-green-500 text-2xl mr-3">✓</span>
      <div>
        <strong className="text-[#76453B]">Experienced Drivers</strong>
        <p className="text-gray-700">Professional & trained drivers ensuring safety and smooth travel.</p>
      </div>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg flex items-start">
      <span className="text-green-500 text-2xl mr-3">✓</span>
      <div>
        <strong className="text-[#76453B]">24/7 Customer Support</strong>
        <p className="text-gray-700">Hassle-free booking and assistance anytime.</p>
      </div>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg flex items-start">
      <span className="text-green-500 text-2xl mr-3">✓</span>
      <div>
        <strong className="text-[#76453B]">Multiple Cab Options</strong>
        <p className="text-gray-700">Hatchback, Sedan, SUV, and Luxury Cars available.</p>
      </div>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg flex items-start">
      <span className="text-green-500 text-2xl mr-3">✓</span>
      <div>
        <strong className="text-[#76453B]">Reliable & Confortable</strong>
        <p className="text-gray-700"> Confortable to Seat and Travel.</p>
      </div>
    </div>
  </div>
</section>

{/* Pricing Section */}
<section className="mt-10 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
  <h4 className="text-2xl font-bold text-amber-800">
    Pune to Indore Cab Fare & Charges
  </h4>
  <div className="mt-6 bg-white p-5 rounded-lg shadow-sm">
    <p className="text-lg text-gray-700 mb-4">We offer affordable Pune to Indore cab rates, ensuring a budget-friendly travel experience:</p>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-amber-100 text-amber-800">
            <th className="p-3 text-left border-b border-amber-200">Cab Type</th>
            <th className="p-3 text-right border-b border-amber-200">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-amber-50">
            <td className="p-3 border-b border-gray-100"><strong>Hatchback (Alto, WagonR)</strong></td>
            <td className="p-3 text-right border-b border-gray-100">Starting from ₹5999</td>
          </tr>
          <tr className="hover:bg-amber-50">
            <td className="p-3 border-b border-gray-100"><strong>Sedan (Dzire, Etios)</strong></td>
            <td className="p-3 text-right border-b border-gray-100">Starting from ₹6999</td>
          </tr>
          <tr className="hover:bg-amber-50">
            <td className="p-3 border-b border-gray-100"><strong>SUV (Ertiga, Innova)</strong></td>
            <td className="p-3 text-right border-b border-gray-100">Starting from ₹8999</td>
          </tr>
          <tr className="hover:bg-amber-50">
            <td className="p-3"><strong>Luxury Cars (BMW, Audi)</strong></td>
            <td className="p-3 text-right">Price on request</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <p className="mt-6 text-lg font-medium text-center text-amber-700">
      Book your cab with Aim Cab today and enjoy the best travel experience at an unbeatable price!
    </p>
  </div>
</section>

{/* Route Information */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <div className="flex items-center">
    <h4 className="text-2xl font-bold text-[#76453B]">
       Pune to Indore Distance & Route
    </h4>
    <span className="ml-auto bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">600 km | 10-12 hrs</span>
  </div>
  <div className="mt-6 bg-gray-50 p-5 rounded-lg">
    <p className="text-lg text-gray-700 leading-relaxed">
      The distance between Pune to Indore is approximately 600 km, and the journey takes around 10-12 hours, depending on traffic and road conditions. Our cabs ensure a smooth ride via NH52, the fastest and most preferred route.
    </p>
    
    <div className="mt-6 grid md:grid-cols-2 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <strong className="block text-[#76453B]">Best Route 1:</strong>
        <p className="text-gray-700">Pune → Nashik → Dhule → Indore (via NH52 – 600 km, 10-12 hrs)</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <strong className="block text-[#76453B]">Best Route 2:</strong>
        <p className="text-gray-700">Pune → Ahmednagar → Shirdi → Indore (via NH60 & NH52 – 620 km, 11-13 hrs)</p>
      </div>
    </div>
  </div>
</section>

{/* Service Types */}
<section className="mt-10 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
  <h4 className="text-2xl font-bold text-[#76453B]">
     Types of Pune to Indore Taxi Services
  </h4>
  <div className="mt-6 grid md:grid-cols-2 gap-5">
    <div className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <strong className="text-[#76453B]">One-Way Cab from Pune to Indore</strong>
      <p className="text-gray-600 mt-1">Book a taxi at the lowest rates and pay only for one side!</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <strong className="text-[#76453B]">Pune to Indore Sharing Cab</strong>
      <p className="text-gray-600 mt-1">Opt for a budget-friendly ride and split the fare with fellow travelers.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <strong className="text-[#76453B]">Round-Trip Cabs</strong>
      <p className="text-gray-600 mt-1">Get discounted round-trip fares if you are planning to return.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <strong className="text-[#76453B]">Pune to Indore Car Rental </strong>
      <p className="text-gray-600 mt-1">Rent a cab with driver for corporate trips or vacations.</p>
    </div>
  </div>
</section>

{/* Attractions */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3">
    Places to Visit on the Pune to Indore Route
  </h4>
  <div className="mt-6 grid md:grid-cols-2 gap-5">
    <div className="flex items-start">
      <span className="text-[#76453B] text-xl mr-3">•</span>
      <div>
        <strong className="text-[#76453B]">Shirdi Sai Baba Temple</strong>
        <p className="text-gray-700">A must-visit religious site located on the Pune-Indore route.</p>
      </div>
    </div>
    <div className="flex items-start">
      <span className="text-[#76453B] text-xl mr-3">•</span>
      <div>
        <strong className="text-[#76453B]">Ajanta & Ellora Caves</strong>
        <p className="text-gray-700">UNESCO World Heritage site with ancient rock-cut caves.</p>
      </div>
    </div>
    <div className="flex items-start">
      <span className="text-[#76453B] text-xl mr-3">•</span>
      <div>
        <strong className="text-[#76453B]">Maheshwar</strong>
        <p className="text-gray-700">Scenic town on the banks of the Narmada River.</p>
      </div>
    </div>
    <div className="flex items-start">
      <span className="text-[#76453B] text-xl mr-3">•</span>
      <div>
        <strong className="text-[#76453B]">Indore Rajwada Palace</strong>
        <p className="text-gray-700">Historical palace showcasing Maratha and Mughal architecture.</p>
      </div>
    </div>
    <div className="flex items-start">
      <span className="text-[#76453B] text-xl mr-3">•</span>
      <div>
        <strong className="text-[#76453B]">Indore Rajwada Palace</strong>
        <p className="text-gray-700">Indore Rajwada Palace</p>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="mt-10 p-6 bg-gray-50 rounded-xl">
  <h4 className="text-2xl font-bold text-[#76453B] ">
     Frequently Asked Questions
  </h4>
  <div className="mt-6 space-y-4">
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">What is the lowest fare for a Pune to Indore cab?</strong>
      <p className="text-gray-700 mt-1">The fare starts at just ₹5999, depending on the cab type you choose.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">How can I book a Pune to Indore taxi online?</strong>
      <p className="text-gray-700 mt-1">Visit <a href="https://aimcab.com" className="text-blue-600 underline">aimcab.com</a> or call us to book your cab instantly.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">Do you offer one-way cab services from Indore to Pune?</strong>
      <p className="text-gray-700 mt-1">Visit <a href="https://aimcab.com" className="text-blue-600 underline"></a>Yes, we provide Indore to Pune one-way cab at the lowest prices.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">What is the distance between Pune and Indore by road?</strong>
      <p className="text-gray-700 mt-1">The Pune to Indore distance by road is approximately 600 km.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">What are the cab options available for Pune to Indore travel?
      </strong>
      <p className="text-gray-700 mt-1"><a href="https://aimcab.com" className="text-blue-600 underline"></a>We offer Hatchback, Sedan, SUV, and Luxury car rental services.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">Is there a night travel option for Pune to Indore cabs?</strong>
      <p className="text-gray-700 mt-1">Yes, we provide 24/7 cab services, including night travel.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">What are the charges for Pune to Indore sharing cabs?</strong>
      <p className="text-gray-700 mt-1">The rates for sharing cabs from Pune to Indore vary. Contact us for the best deals.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">Are toll charges included in the Pune to Indore cab fare?</strong>
      <p className="text-gray-700 mt-1">Toll charges are generally not included and must be paid separately.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">Can I choose my pickup and drop-off locations?</strong>
      <p className="text-gray-700 mt-1">Yes, we offer flexible pickup and drop-off points.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">Do you provide round-trip services from Pune to Indore?</strong>
      <p className="text-gray-700 mt-1">Yes, we offer affordable round-trip cab services.</p>
    </div>
  </div>
</section>

{/* About Section */}
      
<About_Aimcab  />

{/* Call to Action */}
<section className="mt-10 p-8 bg-gradient-to-r from-[#76453B] to-[#eda343] rounded-xl text-white text-center">
  <h4 className="text-2xl font-bold mb-4">
    🚖 Ready for Your Pune to Indore Journey?
  </h4>
  <p className="text-xl mb-6">Experience stress-free travel with Aim Cab's premium service</p>
  
  <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-lg">
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="tel:+9191305454491" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-colors">
        <span className="mr-2">📞</span> Call Now
      </a>
      <a href="https://aimcab.com" target="_blank" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-colors">
        <span className="mr-2">🌐</span> Book Online
      </a>
    </div>
    <p className="mt-4 text-gray-700 text-sm">
      Instant confirmation | 24/7 customer support | Best price guarantee
    </p>
  </div>
  
  <p className="mt-8 text-lg font-medium">
    Book now and enjoy a seamless Pune to Indore cab service with Aim Cab!
  </p>
</section>

      
            <div> <Footer/></div>
          </div>
  )
}

export default page;