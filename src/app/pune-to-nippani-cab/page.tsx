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
        <title>Pune to Nippani Cab | Affordable & Reliable Taxi Service</title>
      <meta name="description" content="Book Pune to Nippani cab services with Aim Cab for a safe, affordable & comfortable ride. 24/7 booking, professional drivers & well-maintained taxis." />
      <link rel="canonical" href="https://aimcab.com/pune-to-nippani-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Nippani Cab, Pune To Nippani cab Services, Cab Services From Pune To Nippani, Pune To Nippani Cab Services charges, Best cab Services Pune To Nippani" />
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
        <h2 className="text-3xl font-bold mt-4 text-center text-[#76453B] ">
        Pune to Nippani Cab Services – Affordable & Reliable Travel with Aim Cab
        </h2>

        <BookingForm />

{/* Hero Section */}
<section className="mt-8 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg">
  <h3 className="text-3xl font-bold text-[#76453B] mb-6">Pune to Nippani Cab – Hassle-Free Travel with Aim Cab</h3>
  <div className="bg-white p-6 rounded-lg shadow-inner border-l-4 border-indigo-500">
    <p className="text-lg text-gray-700 leading-relaxed">
      <span className="text-[#76453B] font-semibold">Looking for a comfortable and reliable Pune to Nippani cab?</span> Aim Cab offers the <span className="text-[#76453B] font-semibold">best cab services</span> from Pune to Nippani with:
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      <div className="flex items-center">
        <div className="bg-indigo-100 p-2 rounded-full mr-3">
          <span className="text-[#76453B]">✓</span>
        </div>
        <span>Affordable rates</span>
      </div>
      <div className="flex items-center">
        <div className="bg-indigo-100 p-2 rounded-full mr-3">
          <span className="text-[#76453B]">✓</span>
        </div>
        <span>Professional drivers</span>
      </div>
      <div className="flex items-center">
        <div className="bg-indigo-100 p-2 rounded-full mr-3">
          <span className="text-[#76453B]">✓</span>
        </div>
        <span>Well-maintained vehicles</span>
      </div>
    </div>
  </div>
</section>

{/* Why Choose Us - Card Grid */}
<section className="mt-12 p-6">
  <h4 className="text-3xl font-bold text-center text-[#76453B] mb-8">Why Choose Aim Cab for Pune to Nippani Cab Services?</h4>
  
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {icon: "💲", title: "Lowest Price Guarantee", desc: "We offer the best cab services Pune to Nippani at the most competitive rates in the market."},
      {icon: "🚙", title: "Comfortable & Well-Maintained Vehicle", desc: "Choose from a range of cabs, including sedans, SUVs, and tempo travelers."},
      {icon: "👨‍✈️", title: "Professional Drivers", desc: "Our drivers are experienced, polite, and knowledgeable about the route."},
      {icon: "🔄", title: "Flexible Booking Options", desc: "Book one-way, round-trip, or multi-day rentals as per your needs."},
      {icon: "🔍", title: "Transparent Pricing", desc: "Book one-way, round-trip, or multi-day rentals as per your needs."},
      {icon: "📞", title: "24/7 Customer Support", desc: "Our team is available to assist you anytime during your journey."}
    ].map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-[#76453B]">
        <div className="text-3xl mb-3">{item.icon}</div>
        <h5 className="text-xl font-bold text-gray-800">{item.title}</h5>
        <p className="text-gray-600 mt-2">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* Service Details */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className="flex flex-col md:flex-row gap-8">
    <div className="md:w-1/2">
      <h4 className="text-2xl font-bold text-[#76453B] mb-4">Pune to Nippani Cab Services</h4>
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-lg">
          <span className="font-semibold">Distance:</span> 360 km<br/>
          <span className="font-semibold">Duration:</span> Around 6-7 hours<br/>
          <span className="font-semibold">Route:</span> Optimal stops for refreshments
        </p>
      </div>
      
      <h5 className="text-xl font-bold text-[#76453B] mt-6 mb-4">Types of Cabs Available</h5>
      <div className="space-y-4">
        {[
          {type: "Sedan (4-seater)", models: "Swift Dzire, Toyota Etios", ideal: "Best for small families or solo travelers."},
          {type: "SUV (6-seater)", models: "Ertiga, Innova", ideal: "Ideal for group travel."},
          {type: "Luxury Cars", models: "Audi, BMW", ideal: "For a premium travel experience."},
          {type: "Tempo Travelers", models: "", ideal: "Available for larger groups."}
        ].map((vehicle, i) => (
          <div key={i} className="border-l-4 border-indigo-300 pl-4">
            <h6 className="font-bold text-gray-800">{vehicle.type}</h6>
            <p className="text-gray-700">{vehicle.models && <>{vehicle.models} – </>}{vehicle.ideal}</p>
          </div>
        ))}
      </div>
    </div>
    
    <div className="md:w-1/2">
      <h4 className="text-2xl font-bold text-[#76453B] mb-4">Pricing</h4>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg overflow-hidden shadow">
          <thead className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
            <tr>
              <th className="p-3 text-left">Cab Type</th>
              <th className="p-3 text-left">Fare (One-Way)</th>
              <th className="p-3 text-left">Fare (Round-Trip)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              {type: "Sedan", oneWay: "₹3,999", roundTrip: "₹7,999"},
              {type: "SUV", oneWay: "₹5,999", roundTrip: "₹10,999"},
              {type: "Luxury Car", oneWay: "₹9,999", roundTrip: "₹18,999"},
              {type: "Tempo Traveler", oneWay: "₹8,999", roundTrip: "₹16,999"}
            ].map((row, i) => (
              <tr key={i} className={i%2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-3 font-medium">{row.type}</td>
                <td className="p-3">{row.oneWay}</td>
                <td className="p-3 font-semibold text-[#76453B]">{row.roundTrip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <p className="text-yellow-800 text-sm">
          <strong>Note:</strong> Toll charges, parking fees, and driver allowances may apply as per actuals.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Features */}
<section className="mt-12 p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6">Best Cab Services Pune to Nippani – Why We Stand Out?</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B] flex items-center">
        <span className="bg-indigo-100 p-2 rounded-full mr-3">🛡️</span>
        Safety First
      </h5>
      <p className="mt-2 text-gray-700 ml-10">All cabs sanitized and well-maintained</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B] flex items-center">
        <span className="bg-indigo-100 p-2 rounded-full mr-3">💳</span>
        Multiple Payment Options
      </h5>
      <p className="mt-2 text-gray-700 ml-10">UPI, Net Banking, or Cash</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B] flex items-center">
        <span className="bg-indigo-100 p-2 rounded-full mr-3">🎛️</span>
        Customizable Packages
      </h5>
      <p className="mt-2 text-gray-700 ml-10">Choose one-way, round-trip, or outstation packages.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B] flex items-center">
        <span className="bg-indigo-100 p-2 rounded-full mr-3">👔</span>
        Experienced Chauffeurs
      </h5>
      <p className="mt-2 text-gray-700 ml-10">Our drivers are trained for long-distance travel.</p>
    </div>
  </div>
</section>

{/* Attractions */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-[#76453B] mb-6">Travel Attractions on Pune to Nippani Route</h4>
  
  <div className="grid md:grid-cols-3 gap-6">
    {[
      {place: "Satara", highlight: "Historical Stopover", attractions: "Ajinkyatara Fort, Kaas Plateau"},
      {place: "Kolhapur", highlight: "City of Temples", attractions: "Mahalaxmi Temple, Rankala Lake"},
      {place: "Nippani", highlight: "Cultural Delight", attractions: "Shri Chaitanya Jyoti Museum, Shri Mahalaxmi Temple"}
    ].map((dest, i) => (
      <div key={i} className="bg-gradient-to-b from-blue-50 to-white p-5 rounded-lg border border-blue-100">
        <h5 className="text-xl font-bold text-[#76453B]">{dest.place}</h5>
        <p className="text-[#76453B] font-medium">{dest.highlight}</p>
        <p className="mt-2 text-gray-700">{dest.attractions}</p>
      </div>
    ))}
  </div>
</section>

{/* FAQ */}
<section className="mt-12 p-8 bg-gray-50 rounded-xl">
  <h4 className="text-3xl font-bold text-center text-[#76453B] mb-8">Frequently Asked Questions (FAQs)</h4>
  
  <div className="space-y-4">
    {[
      {q: "What are the charges for a Pune to Nippani cab?", a: "One-way fares start from ₹3,999 for a sedan"},
      {q: "How long does it take to travel from Pune to Nippani by cab?", a: "The journey takes around 6 to 7 hours."},
      {q: "Can I book a one-way cab from Pune to Nippani?", a: "Yes, we offer both one-way and round-trip options."},
      {q: "Are there any hidden charges?", a: "No, pricing is transparent. Toll and driver allowances will be informed beforehand."},
      {q: "Do you provide 24/7 customer support?", a: " Yes, we are available round the clock."},
      {q: "What safety measures are followed?", a: "All cabs are sanitized, and drivers follow safety protocols."},
      {q: "Can I choose a specific cab model?", a: "Yes, based on availability"},
      {q: "Do you provide corporate travel bookings?", a: "Yes, we offer corporate packages."},
      {q: "Can I modify or cancel my booking? ", a: "Yes, as per our policy"},
      // {q: "How to book?", a: "Visit aimcab.com or call +91 8166922792"}
    ].map((faq, i) => (
      <div key={i} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h5 className="font-bold text-lg text-[#76453B]">Q: {faq.q}</h5>
        <p className="mt-2 text-gray-700 pl-6 border-l-2 border-indigo-200">A: {faq.a}</p>
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