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
      <div>
        <Head>
        <title>Pune to Miraj Cab Services | Affordable & Safe Taxi</title>
      <meta name="description" content="Book Pune to Miraj cab services with Aim Cab for a comfortable journey. Enjoy affordable fares, reliable drivers, and hassle-free online booking." />
      <link rel="canonical" href="https://aimcab.com/pune-to-miraj-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Miraj cab, Pune To Miraj Cab Services, Cab Services From Pune To Miraj, Pune To Miraj Cab Services charges, Best cab Services Pune To Miraj" />
      <meta name="robots" content="index, follow" />

        </Head>

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
        Pune to Miraj Cab Services – Book Affordable & Reliable Cabs
        </h2>

        <BookingForm />

  {/* Hero Service Description */}
  <section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <h3 className="text-3xl font-bold text-[#76453B]">Book Your Pune to Miraj Cab with Aim Cab</h3>
  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
    <span className="block mb-3">Are you Looking for a <span className="font-semibold text-[#76453B]">Pune to Miraj cab service</span> that combines affordability, reliability, and comfort?</span>
    Aim Cab provides <span className="font-semibold">premium cab services</span> from Pune to Miraj at the <span className="font-bold text-[#76453B]">lowest prices in the market</span>. Whether you're traveling for business, visiting family, or going on vacation, we guarantee a <span className="font-semibold">smooth and hassle-free journey</span>.
    <br/><br/>
    With our <span className="font-semibold">well-maintained fleet</span>, <span className="font-semibold">expert drivers</span>, and <span className="font-semibold">competitive pricing</span>, Aim Cab is your perfect travel partner. <span className="font-bold text-[#76453B]">Book today</span> and enjoy a stress-free ride!
  </p>
</section>

{/* Why Choose Us - Card Style */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-lg">
  <h4 className="text-3xl font-bold text-[#76453B]">Why Choose Aim Cab for Pune to Miraj Cab Services?</h4>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 to-[#76453B] hover:shadow-md transition-all">
      <h5 className="text-xl font-semibold text-[#76453B]">💰 Best Market Prices</h5>
      <p className="mt-2 text-gray-700">We offer the best cab services from Pune to Miraj at competitive rates.</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 to-[#76453B]:shadow-md transition-all">
      <h5 className="text-xl font-semibold text-[#76453B]">🔍 Transparent Pricing</h5>
      <p className="mt-2 text-gray-700">No hidden costs, ensuring clarity in every ride.</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 to-[#76453B]:shadow-md transition-all">
      <h5 className="text-xl font-semibold text-[#76453B]">🚗 Variety of Cabs</h5>
      <p className="mt-2 text-gray-700">Choose from hatchbacks, sedans, SUVs, and luxury cars.</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 to-[#76453B]:shadow-md transition-all">
      <h5 className="text-xl font-semibold text-[#76453B]">👨‍✈️ Experienced Drivers</h5>
      <p className="mt-2 text-gray-700">Professional drivers with knowledge of the Pune to Miraj route.</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 to-[#76453B]:shadow-md transition-all">
      <h5 className="text-xl font-semibold text-[#76453B]">⏰ 24/7 Booking & Assistance</h5>
      <p className="mt-2 text-gray-700"> Book your cab anytime, anywhere.</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 to-[#76453B]:shadow-md transition-all">
      <h5 className="text-xl font-semibold text-[#76453B]">🔄 Multiple Ride Options</h5>
      <p className="mt-2 text-gray-700"> One-way, round-trip, and outstation travel solutions.</p>
    </div>
  </div>
  <div className="mt-6 text-center">
  <a href="https://aimcab.com" target="_blank" className="inline-block bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
      Book Now at aimcab.com
    </a>
  </div>
</section>

{/* Service Options */}
<section className="mt-10 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-center text-[#76453B] mb-8">Pune to Miraj Cab Services</h4>
  
  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-[#76453B]">1. One-Way Pune to Miraj Cab</h5>
      <p className="mt-3 text-gray-700">
      Planning a one-way trip? Book our Pune to Miraj taxi and travel at the most budget-friendly rates.


      </p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-[#76453B]">2. Round Trip Pune to Miraj Cab</h5>
      <p className="mt-3 text-gray-700">
        
Need a return journey? Our round-trip cab services from Pune to Miraj are perfect for your travel convenience.
      </p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-[#76453B]">3. Outstation Cab Services from Pune to Miraj</h5>
      <p className="mt-3 text-gray-700">
      For long-distance travelers, our outstation cab service is an excellent choice, whether for family vacations, business meetings, or weekend getaways.

      </p>
    </div>
  </div>
</section>

{/* Pricing Table */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-lg">
  <h4 className="text-3xl font-bold text-center text-[#76453B] mb-8">Pune to Miraj Cab Services Charges</h4>
  <p className="text-lg text-center text-gray-600 mb-6">
  Aim Cab provides affordable Pune to Miraj cab fare, ensuring the best value for your money.

  </p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
          <th className="p-3 text-left rounded-tl-lg">Cab Type</th>
          <th className="p-3 text-center">Distance (KM)</th>
          <th className="p-3 text-center">Price Per KM (₹)</th>
          <th className="p-3 text-right rounded-tr-lg">Estimated Fare (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200 hover:bg-blue-50">
          <td className="p-3 font-medium">Hatchback</td>
          <td className="p-3 text-center">230 KM</td>
          <td className="p-3 text-center">₹11/km</td>
          <td className="p-3 text-right">₹2,530</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-blue-50">
          <td className="p-3 font-medium">Sedan</td>
          <td className="p-3 text-center">230 KM</td>
          <td className="p-3 text-center">₹12/km</td>
          <td className="p-3 text-right">₹2,760</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-blue-50">
          <td className="p-3 font-medium">SUV</td>
          <td className="p-3 text-center">230 KM</td>
          <td className="p-3 text-center">₹14/km</td>
          <td className="p-3 text-right">₹3,220</td>
        </tr>
        <tr className="hover:bg-blue-50">
          <td className="p-3 font-medium">Innova</td>
          <td className="p-3 text-center">230 KM</td>
          <td className="p-3 text-center">₹16/km</td>
          <td className="p-3 text-right">₹3,680</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className="mt-4 text-sm text-gray-600 italic">
  Note: Additional tolls, driver allowances, and night charges may apply.
  </p>
</section>

{/* Attractions */}
<section className="mt-10 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-center text-[#76453B] mb-8">Must-Visit Places While Traveling from Pune to Miraj</h4>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-[#76453B]">🎵 Miraj Musical Instrument Industry</h5>
      <p className="mt-2 text-gray-700">Renowned worldwide for its production of handcrafted musical instruments.</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-[#76453B]">🛕 Dattatraya Temple</h5>
      <p className="mt-2 text-gray-700">A famous spiritual destination attracting thousands of devotees every year.</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-[#76453B]">🌿 Krishna Riverbank</h5>
      <p className="mt-2 text-gray-700">A scenic spot perfect for nature lovers and those looking to unwind by the river.</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-[#76453B]">🕌 Ganesh Temple</h5>
      <p className="mt-2 text-gray-700"> A peaceful temple with beautiful surroundings, ideal for relaxation and devotion.</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-[#76453B]">🏰 Fort Miraj</h5>
      <p className="mt-2 text-gray-700">A historical fort offering a glimpse into the region’s rich past.</p>
    </div>
  </div>
</section>

{/* FAQs */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-lg">
  <h4 className="text-3xl font-bold text-center text-[#76453B] mb-8">Frequently Asked Questions (FAQs)</h4>
  <div className="space-y-6">
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-[#76453B]">1. How can I book a Pune to Miraj cab with Aim Cab?</h5>
      <p className="mt-2 text-gray-700">Visit <a href="https://aimcab.com" className="text-blue-500 underline">aimcab.com</a> and confirm your ride.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-[#76453B]">2. How long does it take to travel from Pune to Miraj by cab? </h5>
      <p className="mt-2 text-gray-700">The journey typically takes 4 to 5 hours.
      </p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-[#76453B]">3. What is the fare for an SUV from Pune to Miraj?</h5>
      <p className="mt-2 text-gray-700">₹14 per km, totaling around ₹3,220.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-[#76453B]">4. Are there any extra charges?</h5>
      <p className="mt-2 text-gray-700">Only tolls, parking fees, and night allowances, if applicable.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-[#76453B]">5. Can I book a round-trip cab?</h5>
      <p className="mt-2 text-gray-700">Yes! We offer budget-friendly round-trip services.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-[#76453B]">6. Are Aim Cab drivers experienced?</h5>
      <p className="mt-2 text-gray-700"> Yes, they are professional and well-trained.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-[#76453B]">7. Do I need to provide food and accommodation for the driver?</h5>
      <p className="mt-2 text-gray-700">A small driver allowance may be applicable for long trips.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-[#76453B]">8. Can I select my cab type? </h5>
      <p className="mt-2 text-gray-700"> Yes, we offer hatchbacks, sedans, SUVs, and luxury cars.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-[#76453B]">9. Is Aim Cab available 24/7? </h5>
      <p className="mt-2 text-gray-700">Yes, we operate round the clock.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-[#76453B]">10. What safety measures does Aim Cab follow?</h5>
      <p className="mt-2 text-gray-700">Regular sanitization and strict safety protocols.</p>
    </div>
  </div>
  {/* <div className="mt-8 text-center">
    <a href="#contact" className="text-blue-500 font-semibold hover:underline">
      View all 10 FAQs ↓
    </a>
  </div> */}
</section>

{/* About & CTA */}
<About_Aimcab  />




        
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