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
        <title>Pune to Goa Cab | Book Affordable & Reliable Taxi</title>
        <meta name="description" content="Book a Pune to Goa cab with Aim Cab for a safe, comfortable & affordable ride. Enjoy hassle-free taxi service with professional drivers at the best fares." />
        <link rel="canonical" href="https://aimcab.com/pune-to-goa-cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="pune to goa cab, pune to goa taxi, pune to goa route, distance between pune to goa, goa to pune cab, goa to pune one way cab, pune to goa taxi fare, pune to goa cab service, pune to goa taxi service, pune to goa car rental, best cab service from pune to goa, cab service from pune to goa, one way cab from pune to goa, pune to goa cab charges" />
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
        Pune to Goa Cab - Best Cab Service from Pune to Goa
      </h2>

      <BookingForm />
      
  {/* Hero Service Description */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm">
  <h3 className="text-3xl font-bold text-[#76453B]">Book a Comfortable Pune to Goa Cab at Affordable Prices</h3>
  <p className="mt-6 text-lg text-gray-700 leading-relaxed">
    Looking for a <span className="font-semibold text-[#76453B]">Pune to Goa cab</span> service that offers comfort, safety, and affordability? <span className="font-semibold text-[#76453B]">Aim Cab</span> provides the <span className="font-semibold text-[#76453B]">best cab service from Pune to Goa,</span> ensuring a smooth and enjoyable ride to your destination. Whether you need a one-way cab from Pune to Goa or a round-trip taxi, we have you covered. Enjoy the scenic journey along the Pune to Goa route with our professional and experienced drivers.
  </p>
</section>

{/* Why Choose Us - Card Style */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6 pb-2 border-b-2 border-indigo-200">Why Choose Aim Cab for Pune to Goa Travel?</h4>
  <div className="grid md:grid-cols-2 gap-6 mt-6">
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-[#76453B]">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">Affordable Pricing</h5>
      <p className="text-gray-700">Get the lowest cab charges from Pune to Goa, starting at just Rs. 11/km.</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-[#76453B]">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">Comfortable Cabs</h5>
      <p className="text-gray-700">Choose from a variety of sedan, SUV, and luxury cars.</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-[#76453B]">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">Experienced Drivers</h5>
      <p className="text-gray-700">Our professional drivers ensure a safe and smooth ride.</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-[#76453B]">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">24/7 Availability</h5>
      <p className="text-gray-700">Book your cab anytime with easy online booking.</p>
    </div>
    <div className="bg-blue-50 p-5  rounded-lg border-l-4 border-[#76453B]">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">Flexible Travel Options</h5>
      <p className="text-gray-700">Choose from one-way Pune to Goa taxi service or round-trip bookings..</p>
    </div>
  </div>
</section>

{/* Pricing - Styled Table */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6 pb-2 border-b-2 border-indigo-200">Pune to Goa Cab Fare – Affordable Pricing</h4>
  <p className="text-lg text-gray-600 mb-6">Pune to Goa Taxi Fare Breakdown</p>
  
  <div className="overflow-x-auto">
    <table className="w-full rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
          <th className="p-3 text-left">Cab Type</th>
          <th className="p-3 text-left">One-Way Fare (Approx)</th>
          <th className="p-3 text-left">Round Trip Fare (Approx)</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr className="hover:bg-blue-50">
          <td className="p-3 font-medium">Sedan (Dzire, Etios)</td>
          <td className="p-3">₹8,500</td>
          <td className="p-3">₹16,000</td>
        </tr>
        <tr className="hover:bg-blue-50">
          <td className="p-3 font-medium">SUV (Ertiga, Xylo)</td>
          <td className="p-3">₹10,500</td>
          <td className="p-3">₹19,500</td>
        </tr>
        <tr className="hover:bg-blue-50">
          <td className="p-3 font-medium">Luxury (Innova, Crysta)</td>
          <td className="p-3">₹12,500</td>
          <td className="p-3">₹23,000</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <p className="mt-6 text-lg text-gray-700 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
    Our Pune to Goa taxi fare is transparent with no hidden charges. Get the best price with Aim Cab's Pune to Goa car rental services.
  </p>
</section>

{/* Route Information - Split Layout */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6 pb-2 border-b-2 border-indigo-200">Pune to Goa Route and Distance Information</h4>
  
  <div className="md:flex gap-8">
    <div className="md:w-1/2">
      <p className="text-lg text-gray-700 mb-4">
        The distance between Pune to Goa is approximately 450 km, and the journey takes around 8-10 hours, depending on traffic and weather conditions.
      </p>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h5 className="font-bold text-lg text-[#76453B] mb-3">Best Routes for Pune to Goa Road Trip:</h5>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="bg-indigo-100 text-[#76453B] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
            <span><strong>Pune – Satara – Kolhapur – Belgaum – Goa (NH 48)</strong> – Fastest route with smooth highways.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-indigo-100 text-[#76453B] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
            <span><strong>Pune – Satara – Karad – Kankavli – Goa</strong> – Scenic route with lush greenery.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-indigo-100 text-[#76453B] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
            <span><strong>Pune – Mahabaleshwar – Goa</strong> – Best for travelers looking for a scenic drive through the Western Ghats.</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="md:w-1/2 mt-6 md:mt-0">
      <div className="bg-gray-100 p-4 rounded-lg h-full">
        <h5 className="font-bold text-lg text-[#76453B] mb-3">Travel Tips:</h5>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Start early morning to avoid traffic</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Carry water and snacks for the journey</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Take breaks every 2-3 hours</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Exploring Goa - Card Grid */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6 pb-2 border-b-2 border-indigo-200">Exploring Goa – Best Places to Visit</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <h5 className="text-xl font-semibold text-[#76453B] mb-3 flex items-center">
        <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
        </svg>
        Beaches to Visit in Goa:
      </h5>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">1</span>
          <span><strong>Baga Beach</strong> – Perfect for nightlife and water sports.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">2</span>
          <span><strong>Calangute Beach</strong> – The largest beach in Goa, great for family trips.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">3</span>
          <span><strong>Anjuna Beach</strong> – Famous for its trance parties and flea markets.</span>
        </li>
      </ul>
    </div>
    
    <div>
      <h5 className="text-xl font-semibold text-[#76453B] mb-3 flex items-center">
        <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd"></path>
        </svg>
        Temples and Churches in Goa:
      </h5>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">1</span>
          <span><strong>Shri Mangeshi Temple</strong> – A beautiful and historic temple dedicated to Lord Shiva.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">2</span>
          <span><strong>Shanta Durga Temple</strong> – A famous Hindu temple known for its stunning architecture.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">3</span>
          <span><strong>Basilica of Bom Jesus</strong> – A UNESCO World Heritage Site and a must-visit in Old Goa.</span>
        </li>
      </ul>
    </div>
  </div>
</section>

{/* Service Options - Highlight Cards */}
<section className="mt-10 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-sm">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6">One-Way and Round-Trip Cab Services</h4>
  
  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-[#76453B]">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">One-Way Cab from Pune to Goa</h5>
      <p className="text-gray-700">If you are looking for a one-way cab from Pune to Goa, Aim Cab offers affordable and reliable options. Book online and enjoy a stress-free ride.</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-[#76453B]">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">Goa to Pune Cab</h5>
      <p className="text-gray-700">Need a return trip? Book a Goa to Pune cab with Aim Cab and enjoy a smooth ride back home.</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-[#76453B]">
      <h5 className="font-bold text-lg text-[#76453B] mb-2">Pune to Goa Car Rental</h5>
      <p className="text-gray-700">Looking for a flexible option? Our Pune to Goa car rental service allows you to hire a cab with a driver for an entire trip.</p>
    </div>
  </div>
</section>

{/* FAQs - Accordion Style */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6 pb-2 border-b-2 border-indigo-200">Frequently Asked Questions</h4>
  
  <div className="space-y-4">
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 font-medium text-[#76453B]">
        What is the Pune to Goa taxi fare?
      </button>
      <div className="p-4 bg-white text-gray-700">
        The fare starts at ₹8,500 for a one-way trip in a sedan. Prices vary based on the car type and trip preferences.
      </div>
    </div>
    
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 font-medium text-[#76453B]">
        How long does it take to travel from Pune to Goa by cab?
      </button>
      <div className="p-4 bg-white text-gray-700">
        The travel time is approximately 8-10 hours, depending on traffic and road conditions.
      </div>
    </div>
    
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 font-medium text-[#76453B]">
        Can I book a one-way cab from Pune to Goa?
      </button>
      <div className="p-4 bg-white text-gray-700">
        Yes, Aim Cab offers Goa to Pune one-way cab services at the best prices.
      </div>
    </div>
    
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 font-medium text-[#76453B]">
        What are the best places to visit in Goa?
      </button>
      <div className="p-4 bg-white text-gray-700">
        Some must-visit places include Baga Beach, Calangute Beach, Basilica of Bom Jesus, and Shri Mangeshi Temple.
      </div>
    </div>

    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 font-medium text-[#76453B]">
      What is the best route for Pune to Goa travel?
      </button>
      <div className="p-4 bg-white text-gray-700">
      The fastest route is via NH 48, passing through Kolhapur and Belgaum.
      </div>
    </div>

    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 font-medium text-[#76453B]">
      Is there a night travel option available?
      </button>
      <div className="p-4 bg-white text-gray-700">
      Yes, we provide 24/7 Pune to Goa cab services, including overnight journeys.
      </div>
    </div>

    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 font-medium text-[#76453B]">
      How do I book a cab from Pune to Goa?
      </button>
      <div className="p-4 bg-white text-gray-700">
      You can book online through our website or call our customer support.
      </div>
    </div>

    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 font-medium text-[#76453B]">
      Are there any additional toll charges?
      </button>
      <div className="p-4 bg-white text-gray-700">
      Yes, toll charges are additional and may vary based on the route taken.
      </div>
    </div>

    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 font-medium text-[#76453B]">
      Do you offer round-trip cabs from Pune to Goa?
      </button>
      <div className="p-4 bg-white text-gray-700">
      Yes, Aim Cab offers both one-way and round-trip Pune to Goa taxi service.
      </div>
    </div>

    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 font-medium text-[#76453B]">
      What safety measures do you follow?
      </button>
      <div className="p-4 bg-white text-gray-700">
      All our cabs are sanitized, and our drivers follow all safety protocols to ensure a safe journey.
      </div>
    </div>
  </div>
</section>
{/* About Us - Stats Grid */}
<About_Aimcab  />

{/* CTA Section */}
<section className="mt-10 p-8 bg-gradient-to-r from-[#76453B] to-[#F3B664] rounded-xl text-center">
  <h4 className="text-2xl font-bold text-white mb-4">Ready for Your Goa Adventure?</h4>
  <p className="text-lg text-indigo-100 mb-6">Book your Pune to Goa cab with Aim Cab for a hassle-free journey.</p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a href="tel:+919876543210" className="bg-white text-[#76453B] font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-200">
      Call Now to Book
    </a>
    <a href="https://aimcab.com" className="bg-indigo-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-900 transition duration-200">
      Book Online
    </a>
  </div>
</section>





            <div> <Footer/></div>
          </div>

      
    
  )
}

export default page;