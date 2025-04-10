"use client"
import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../container/component/Navbar'
import Footer from '../../container/component/Footer';

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
    <>
      <Head>
      <title>Pune to Dhule Cab | Affordable & Safe Taxi Service</title>
      <meta name="description" content="Book Pune to Dhule cab services with Aim Cab for a hassle-free journey. Affordable fares, professional drivers & 24/7 service for a smooth travel experience." />
      <link rel="canonical" href="https://aimcab.com/pune-to-dhule-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Dhule Cab, Pune To Dhule Cab Services, Cab Services From Pune To Dhule, Pune To Dhule Cab Services charges, Best Cab Services Pune To Dhule" />
      <meta name="robots" content="index, follow" />

      </Head>

      <div>
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
        Pune to Dhule Cab Services – Book Your Ride with Aim Cab
        </h2>

        <BookingForm />

        {/* Service Description */}
        <section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm">
  <h3 className="text-3xl font-bold text-[#76453B]">
    🚖 Pune to Dhule Cab Services - Book Your Ride with Aim Cab
  </h3>
  <div className="mt-6 p-4 bg-white rounded-lg shadow-xs">
    <p className="text-lg text-gray-700 leading-relaxed">
      Looking for a reliable and affordable Pune to Dhule cab service? Aim Cab offers top-notch taxi services with the lowest market price and exceptional comfort. Whether you're traveling for business, leisure, or a family trip, our well-maintained cabs and professional drivers ensure a smooth and enjoyable ride.
    </p>
  </div>
</section>

        {/* Why Choose Aim Cab */}
        <section className="mt-10 p-6 bg-white rounded-xl shadow-md">
        <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3">
    🏆 Why Thousands Choose Aim Cab for Pune to Dhule Travel
  </h4>
  <div className="mt-6 grid md:grid-cols-2 gap-4">
    <div className="bg-blue-50 p-4 rounded-lg flex items-start">
      <span className="text-green-500 text-2xl mr-3">✓</span>
      <div>
        <strong className="text-[#76453B]">Affordable Pricing</strong>
        <p className="text-gray-700">Get the best rates starting from just ₹11/km</p>
      </div>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg flex items-start">
      <span className="text-green-500 text-2xl mr-3">✓</span>
      <div>
        <strong className="text-[#76453B]">Wide Fleet of Vehicles</strong>
        <p className="text-gray-700">Hatchbacks to luxury cars for every need</p>
      </div>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg flex items-start">
      <span className="text-green-500 text-2xl mr-3">✓</span>
      <div>
        <strong className="text-[#76453B]">Experienced Drivers</strong>
        <p className="text-gray-700">Trained professionals ensuring safe journey</p>
      </div>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg flex items-start">
      <span className="text-green-500 text-2xl mr-3">✓</span>
      <div>
        <strong className="text-[#76453B]">24/7 Availability</strong>
        <p className="text-gray-700">Book anytime with round-the-clock service</p>
      </div>
    </div>
  </div>
  <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
    <p className="text-[#76453B]">
      <strong>Hassle-Free Booking:</strong> Easy online booking via <a href="https://aimcab.com" className="text-blue-600 underline font-medium">aimcab.com</a>
    </p>
  </div>
</section>

{/* Pricing Section */}
<section className="mt-10 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl"><h4 className="text-2xl font-bold text-amber-800">
    💰 Transparent Pune to Dhule Cab Service Charges
  </h4>  <div className="mt-6 bg-white p-5 rounded-lg shadow-sm">
    <p className="text-lg text-gray-700 mb-4">Our pricing is transparent with no hidden charges. The total fare depends on:</p>
    <div className="flex flex-wrap gap-3">
      <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full">Vehicle Type</span>
      <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full">Distance</span>
      <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full">Additional Services</span>
    </div>
    <p className="mt-6 text-lg font-medium text-center text-amber-700">
      Book your Pune to Dhule taxi today for a hassle-free ride and the best market rates!
    </p>
  </div>
</section>

{/* Travel Route & Distance */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <div className="flex items-center">
    <h4 className="text-2xl font-bold text-[#76453B]">
      🗺️ Pune to Dhule Travel Route & Distance
    </h4>
    <span className="ml-auto bg-blue-100 text-[#76453B] px-3 py-1 rounded-full text-sm font-medium">330 km | 6-7 hours</span>
  </div>
  <div className="mt-6 bg-gray-50 p-5 rounded-lg">
    <p className="text-lg text-gray-700 leading-relaxed">
      The journey from Pune to Dhule spans approximately 330 kilometers, and depending on traffic conditions and road quality, it typically takes 6 to 7 hours by car. The route primarily follows NH60, ensuring a smooth and direct ride. Our experienced drivers ensure you have a safe and comfortable journey with well-planned stops along the way.
    </p>
  </div>
</section>

{/* Popular Travel Destinations */}
<section className="mt-10 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
  <h4 className="text-2xl font-bold text-[#76453B]">
    🌄 Must-Visit Destinations on Pune to Dhule Route
  </h4>
  <div className="mt-6 grid md:grid-cols-2 gap-5">
    <div className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <strong className="text-[#76453B]">Shirdi</strong>
      <p className="text-gray-600">Famous for the Sai Baba Temple, a revered pilgrimage destination.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <strong className="text-[#76453B]">Ellora Caves</strong>
      <p className="text-gray-600">A UNESCO World Heritage site showcasing ancient rock-cut architecture.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <strong className="text-[#76453B]">Ajanta Caves</strong>
      <p className="text-gray-600">Renowned for breathtaking Buddhist paintings and sculptures.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <strong className="text-[#76453B]">Nashik Vineyards</strong>
      <p className="text-gray-600">Enjoy wine tasting and scenic vineyard tours in Nashik.</p>
    </div>
  </div>
</section>


{/* Cab Options */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-3">
    🚗 Premium Cab Options for Pune to Dhule
  </h4>
  <p className="mt-4 text-lg text-gray-700">
    Aim Cab provides seamless travel experiences with top-rated cab services. Our fleet includes well-maintained cars to meet diverse travel requirements.
  </p>
  <div className="mt-8 grid md:grid-cols-2 gap-6">
    <div className="border border-blue-100 rounded-lg p-5 hover:bg-blue-50 transition-colors">
      <h5 className="font-bold text-lg text-[#76453B]">Hatchback (Swift, Alto)</h5>
      <p className="text-gray-600 mt-2">Budget-friendly option for solo travelers and small groups</p>
    </div>
    <div className="border border-blue-100 rounded-lg p-5 hover:bg-blue-50 transition-colors">
      <h5 className="font-bold text-lg text-[#76453B]">Sedan (Dzire, Etios)</h5>
      <p className="text-gray-600 mt-2">Comfortable rides with extra space for luggage</p>
    </div>
    <div className="border border-blue-100 rounded-lg p-5 hover:bg-blue-50 transition-colors">
      <h5 className="font-bold text-lg text-[#76453B]">SUV (Ertiga, Innova)</h5>
      <p className="text-gray-600 mt-2">Perfect for families and group travel with spacious seating</p>
    </div>
    <div className="border border-blue-100 rounded-lg p-5 hover:bg-blue-50 transition-colors">
      <h5 className="font-bold text-lg text-[#76453B]">Luxury Cars</h5>
      <p className="text-gray-600 mt-2">Premium travel experience for business trips and special occasions</p>
    </div>
  </div>
</section>

{/* Food & Rest Stops */}
<section className="mt-10 p-6 bg-orange-50 rounded-xl">
  <h4 className="text-2xl font-bold text-orange-800">
    🍽️ Recommended Food & Rest Stops
  </h4>
  <div className="mt-6 space-y-4">
    <div className="flex items-start">
      <span className="text-orange-500 text-xl mr-3">•</span>
      <div>
        <strong className="text-orange-700">Sai Prasad Restaurant (Near Shirdi)</strong>
        <p className="text-gray-700">Famous for authentic Maharashtrian Thali</p>
      </div>
    </div>
    <div className="flex items-start">
      <span className="text-orange-500 text-xl mr-3">•</span>
      <div>
        <strong className="text-orange-700">Hotel Panchavati (Nashik)</strong>
        <p className="text-gray-700">Delicious vegetarian cuisine and quick service</p>
      </div>
    </div>
    <div className="flex items-start">
      <span className="text-orange-500 text-xl mr-3">•</span>
      <div>
        <strong className="text-orange-700">Shree Datta Snacks (Highway Stop)</strong>
        <p className="text-gray-700">Must-try Misal Pav and Vada Pav for a local taste</p>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="mt-10 p-6 bg-gray-50 rounded-xl">
  <h4 className="text-2xl font-bold text-gray-800">
    ❓ Frequently Asked Questions
  </h4>
  <div className="mt-6 space-y-5">
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">1. What types of cabs are available for this route?</strong>
      <p className="text-gray-700 mt-1">Hatchbacks, sedans, SUVs, and luxury vehicles.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">2. Do you offer one-way and round-trip options?</strong>
      <p className="text-gray-700 mt-1">Yes, we offer both.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">3. How can I book a Pune to Dhule cab?</strong>
      <p className="text-gray-700 mt-1">Book online at <a href="https://aimcab.com" className="text-blue-600 underline">aimcab.com</a>.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">4. Is there a night-time charge?</strong>
      <p className="text-gray-700 mt-1"> A minimal charge applies for late-night travel.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">5. What is the estimated time for the journey?</strong>
      <p className="text-gray-700 mt-1">Around 6 to 7 hours.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">6. Are there any hidden charges?</strong>
      <p className="text-gray-700 mt-1">No, we follow a transparent pricing model.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">7. Will I get an experienced driver?</strong>
      <p className="text-gray-700 mt-1"> Yes, all drivers are professionals.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">8. Can I customize my trip with extra stops?</strong>
      <p className="text-gray-700 mt-1">Yes, additional charges may apply.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">9. Do you provide special discounts?</strong>
      <p className="text-gray-700 mt-1">Yes, for regular and corporate customers.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xs">
      <strong className="text-[#76453B]">10. Is there a cancellation policy?</strong>
      <p className="text-gray-700 mt-1">Yes, full refund for cancellations 24 hours in advance.</p>
    </div>
  </div>
</section>


{/* Booking Section */}
<section className="mt-10 p-8 bg-gradient-to-r from-[#76453B] to-[#F3B664] rounded-xl text-white text-center">
  <h4 className="text-2xl font-bold mb-4">
    🚖 Ready for Your Pune to Dhule Journey?
  </h4>
  <p className="text-xl mb-6">Experience stress-free travel with Aim Cab's premium service</p>
  
  <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-lg">
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="tel:+918166922792" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-colors">
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

          <br></br>
          <p className="mt-8 text-lg font-medium">
    Book now and enjoy a seamless Pune to Dhule cab service with Aim Cab!
  </p>
          
        </section>
        
        <div>
       
            <div> <Footer/></div>
          </div>
      </div>
    </>
  );
};

export default Page;
