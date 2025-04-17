"use client"
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
        <title>Pune to Hubali Cab | Affordable & Reliable Taxi Service</title>
      <meta name="description" content="Book Pune to Hubali cab services with Aim Cab for a smooth and affordable ride. Enjoy hassle-free booking, reliable drivers, and 24/7 availability." />
      <link rel="canonical" href="https://aimcab.com/pune-to-hubali-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Hubali cab, Pune To Hubali cab Services, Cab Services From Pune To Hubali, Pune To Hubali Cab Services charges, Best cab Services Pune To Hubali" />
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
        Pune to Hubali Cab Services – Book Affordable & Reliable Rides
        </h2>

        <BookingForm />

{/* Hero Service Description */}
{/* Hero Service Description */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <h3 className="text-3xl font-bold text-[#76453B]">Best Pune to Hubali Cab Services with Aim Cab</h3>
  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
    <span className="text-[#76453B] font-semibold">Looking for a Pune to Hubali cab service that's reliable, affordable, and comfortable?</span> Aim Cab offers <span className="text-[#76453B] font-semibold">premium cab services</span> from Pune to Hubali at the most competitive prices. Whether you're planning a business trip, family vacation, or personal journey, we guarantee a <span className="text-[#76453B] font-semibold">safe, smooth, and stress-free</span> ride.
    <br/><br/>
    With our <span className="text-[#76453B] font-semibold">well-maintained cabs, expert drivers, and transparent pricing</span>, we deliver an exceptional travel experience. Book your Pune to Hubali cab today and enjoy a <span className="text-[#76453B] font-semibold">hassle-free journey!</span>
  </p>
</section>

{/* Why Choose Us - Card Grid */}
<section className="mt-10 p-6">
  <h4 className="text-3xl font-bold text-center text-[#76453B] mb-8">Why Choose Aim Cab for Pune to Hubali Cab Services?</h4>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {icon: "💰", title: "Lowest Price Guarantee", desc: "Get the best cab services from Pune to Hubali at unbeatable rates."},
      {icon: "🔍", title: "No Hidden Charges", desc: "Transparent pricing with upfront fare details."},
      {icon: "🚗", title: "Variety of Cabs", desc: "Hatchbacks, Sedans, SUVs, and luxury vehicles."},
      {icon: "👨‍✈️", title: "Professional Drivers", desc: "Experienced and trained for a comfortable journey."},
      {icon: "🕒", title: "24/7 Booking & Support", desc: "Assistance available anytime for booking and queries."},
      {icon: "🔄", title: "Flexible Options", desc: "One-way, round-trip, and outstation taxi services."}

    ].map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#76453B]">
        <div className="text-3xl mb-3">{item.icon}</div>
        <h5 className="text-xl font-bold text-gray-800">{item.title}</h5>
        <p className="text-gray-600 mt-2">{item.desc}</p>
      </div>
    ))}
  </div>
  <p className="mt-6 text-center text-lg">
    <a href="https://aimcab.com" target="_blank" className="inline-block bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
      Book Instantly at aimcab.com
    </a>
  </p>
</section>

{/* Service Options */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Pune to Hubali Cab Services</h4>
  
  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
      <h5 className="text-xl font-bold text-[#76453B]">1. One-Way Pune to Hubali Cab</h5>
      <p className="mt-3 text-gray-700">
        Perfect for single trips with budget-friendly pricing and comfortable rides.
      </p>
    </div>
    
    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
      <h5 className="text-xl font-bold text-[#76453B]">2. Round-Trip Pune to Hubali Cab</h5>
      <p className="mt-3 text-gray-700">
      For travelers returning to Pune, our round-trip cab services from Pune to Hubali provide convenience and savings.
      </p>
    </div>
    
    <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
      <h5 className="text-xl font-bold text-[#76453B]">3. Outstation Cab Services from Pune to Hubali</h5>
      <p className="mt-3 text-gray-700">
      If you need an outstation cab, Aim Cab offers reliable and well-maintained vehicles for your journey.

      </p>
    </div>
  </div>
</section>

{/* Pricing Table */}
<section className="mt-10 p-6 bg-gray-50 rounded-xl">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Pune to Hubali Cab Fare</h4>
  
  <div className="overflow-x-auto">
    <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
      <thead className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
        <tr>
          <th className="p-4 text-left">Cab Type</th>
          <th className="p-4 text-left">Distance (KM)</th>
          <th className="p-4 text-left">Price Per KM (₹)</th>
          <th className="p-4 text-left">Estimated Fare (₹)</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {[
          {type: "Hatchback", dist: "420 KM", rate: "₹11/km", total: "₹4,620"},
          {type: "Sedan", dist: "420 KM", rate: "₹12/km", total: "₹5,040"},
          {type: "SUV", dist: "420 KM", rate: "₹14/km", total: "₹5,880"},
          {type: "Innova", dist: "420 KM", rate: "₹16/km", total: "₹6,720"}
        ].map((row, i) => (
          <tr key={i} className={i%2 === 0 ? "bg-white" : "bg-gray-50"}>
            <td className="p-4 font-medium">{row.type}</td>
            <td className="p-4">{row.dist}</td>
            <td className="p-4">{row.rate}</td>
            <td className="p-4 font-semibold text-[#76453B]">{row.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
    <p className="text-yellow-800">
      <strong>Note:</strong> Additional toll charges, driver allowances, and night charges may apply.
    </p>
  </div>
</section>

{/* Attractions */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Must-Visit Places While Traveling from Pune to Hubali</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    {[
      {name: "Nrupatunga Hill", desc: "A popular hilltop destination offering breathtaking views and a peaceful atmosphere."},
      {name: "Unkal Lake", desc: "A serene lake perfect for boating and picnics, surrounded by lush greenery."},
      {name: "Chandramouleshwara Temple", desc: "A historic temple with intricate carvings and a spiritual ambiance."},
      {name: "Banashankari Temple", desc: "A revered pilgrimage site known for its beautiful architecture and religious significance."},
      {name: "Indira Gandhi Glass House Garden", desc: "A well-maintained park ideal for relaxation and evening strolls.", colSpan: true}
    ].map((place, i) => (
      <div key={i} className={`bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg ${place.colSpan ? 'md:col-span-2' : ''}`}>
        <h5 className="text-xl font-bold text-[#76453B]">{place.name}</h5>
        <p className="mt-2 text-gray-700">{place.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* FAQ */}
<section className="mt-10 p-6 bg-gray-50 rounded-xl">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Frequently Asked Questions (FAQs)</h4>
  
  <div className="space-y-4">
    {[
      {q: "How do I book a Pune to Hubali cab with Aim Cab?", a: "Book online at aimcab.com or call our support team"},
      {q: "How long does it take to travel from Pune to Hubali by cab?", a: "The journey takes approximately 7.5 to 8 hours."},
      {q: "What are the charges for an SUV cab from Pune to Hubali?", a: "₹14 per km, totaling around ₹5,880 for the trip."},
      {q: "Are there any additional charges apart from the cab fare?", a: "No hidden charges! However, tolls, parking fees, and night allowances may apply."},
      {q: "Can I book a round-trip from Pune to Hubali?", a: " Yes! We offer round-trip cab services with special discounts."}
    ].map((faq, i) => (
      <div key={i} className="bg-white p-5 rounded-lg shadow-sm">
        <h5 className="font-bold text-lg text-[#76453B]">Q: {faq.q}</h5>
        <p className="mt-2 text-gray-700">A: {faq.a}</p>
      </div>
    ))}
  </div>
</section>

{/* CTA Section */}
<About_Aimcab  />

   

        <div> <Footer/></div>
      </div>
    </>
  );
};

export default page;