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
        <title>Pune to Tuljapur Cab | Affordable & Safe Taxi Service</title>
        <meta name="description" content="Book a Pune to Tuljapur cab with Aim Cab. Enjoy a comfortable and safe ride with expert drivers at the best fares. Hassle-free online booking available." />
        <link rel="canonical" href="https://aimcab.com/pune-to-tuljapur-cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="pune to tuljapur cab fare, pune to tuljapur cab, cab booking from pune to tuljapur, pune to tuljapur cab innova" />
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
      <h2 className="text-3xl font-bold mt-4 text-center">
        Pune to Tuljapur Cab – Affordable & Comfortable Travel with Aim Cab
      </h2>

      <BookingForm />

      {/* Hero Section */}
<section className="mt-8 p-6 bg-gradient-to-r from-[#76453B] to-[#F3B664] rounded-xl text-white shadow-lg">
  <h3 className="text-3xl font-bold mb-4">
    Book Your Pune to Tuljapur Cab with Aim Cab – Reliable & Budget-Friendly Service
  </h3>
  <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
    <p className="text-lg leading-relaxed">
      If you are planning a trip from Pune to Tuljapur, Aim Cab provides the best and most affordable cab services. Whether you need a one-way cab, round-trip cab, or a premium Innova cab, we ensure a seamless travel experience. With our well-maintained vehicles and professional drivers, your journey to the holy town of Tuljapur will be comfortable and safe.
    </p>
  </div>
</section>

{/* Why Choose Us */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6 border-b-2 border-purple-100 pb-3">Why Choose Aim Cab for Pune to Tuljapur Travel?</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-purple-50 p-6 rounded-lg hover:shadow-lg transition-all">
      <ul className="space-y-4 text-lg">
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Lowest Price Guarantee:</strong> We offer the most competitive fares in the market.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Transparent Pricing:</strong> No hidden charges; pay what you see.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Professional Drivers:</strong> Our experienced drivers ensure a safe journey.</span>
        </li>
      </ul>
    </div>
    
    <div className="bg-purple-50 p-6 rounded-lg hover:shadow-lg transition-all">
      <ul className="space-y-4 text-lg">
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Flexible Booking:</strong> One-way, round-trip, and multi-stop travel options available.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Multiple Car Options:</strong> Choose from hatchbacks, sedans, SUVs, and luxury cars like Innova.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">24/7 Customer Support:</strong> We're always available to assist you.</span>
        </li>
      </ul>
    </div>
  </div>
  
  <div className="mt-8 bg-purple-100 p-5 rounded-lg text-center">
    <h4 className="text-2xl font-bold text-[#76453B]">Experience a hassle-free ride with Aim Cab!</h4>
  </div>
</section>

{/* Pricing Section */}
<section className="mt-10 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Pune to Tuljapur Cab Fare – Affordable Pricing & Flexible Options</h4>
  
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#76453B] text-white">
            <th className="p-4 text-left rounded-tl-lg">Cab Type</th>
            <th className="p-4 text-left rounded-tr-lg">Fare (Approx.)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-purple-50">
            <td className="p-4 font-medium">Hatchback (Swift, Alto)</td>
            <td className="p-4">₹2,999</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-purple-50">
            <td className="p-4 font-medium">Sedan (Dzire, Etios)</td>
            <td className="p-4">₹3,999</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-purple-50">
            <td className="p-4 font-medium">SUV (Ertiga, Xylo)</td>
            <td className="p-4">₹5,499</td>
          </tr>
          <tr className="hover:bg-purple-50">
            <td className="p-4 font-medium">Innova (7-Seater)</td>
            <td className="p-4">₹6,999</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <p className="mt-6 text-lg text-gray-700">
      Our fare includes driver charges, tolls, and state taxes. For the latest offers and discounts, contact us at <a href="tel:+9191305454491" className="text-[#76453B] font-medium underline">+91 91305454491</a>.
    </p>
  </div>
</section>

{/* Travel Info */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Pune to Tuljapur Cab – Hassle-Free Booking & Comfortable Travel</h4>
  
  <div className="bg-purple-50 p-6 rounded-lg">
    <p className="text-lg text-gray-700">
      Tuljapur, located in Osmanabad district, is famous for the Tulja Bhavani Temple, one of Maharashtra's most revered pilgrimage sites. The distance from Pune to Tuljapur is approximately 295 km, and the travel time is around 5-6 hours via NH65. Booking a cab from Pune to Tuljapur with Aim Cab ensures a comfortable and convenient journey, whether you're traveling solo, with family, or in a group.
    </p>
  </div>
</section>

{/* Booking Steps */}
<section className="mt-10 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">How to Book Your Pune to Tuljapur Cab?</h4>
  
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
      <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
        <span className="text-[#76453B] text-2xl font-bold">1</span>
      </div>
      <p className="font-medium"><strong>Online Booking:</strong> Visit our website <a href="https://aimcab.com" className="text-blue-600 underline">aimcab.com</a></p>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
      <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
        <span className="text-[#76453B] text-2xl font-bold">2</span>
      </div>
      <p className="font-medium"><strong>Call Us:</strong> Dial <a href="tel:+9191305454491" className="text-blue-600 underline">+91 91305454491</a></p>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
      <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
        <span className="text-[#76453B] text-2xl font-bold">3</span>
      </div>
      <p className="font-medium"><strong>WhatsApp Booking:</strong> Message us for quick assistance</p>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
      <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
        <span className="text-[#76453B] text-2xl font-bold">4</span>
      </div>
      <p className="font-medium"><strong>Mobile App:</strong> Use our app for hassle-free reservations</p>
    </div>
  </div>
</section>

{/* Car Options */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Cab Booking from Pune to Tuljapur – Choose Your Preferred Car</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div className="border-l-4 border-[#76453B] pl-4">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Budget-Friendly</h5>
      <p className="text-lg">Swift, Alto <span className="font-bold text-[#76453B]">(₹2,999)</span></p>
    </div>
    
    <div className="border-l-4 border-[#76453B] pl-4">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Comfort & Space</h5>
      <p className="text-lg">Dzire, Etios <span className="font-bold text-[#76453B]">(₹3,999)</span></p>
    </div>
    
    <div className="border-l-4 border-[#76453B] pl-4">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Family & Group Travel</h5>
      <p className="text-lg">Ertiga, Xylo <span className="font-bold text-[#76453B]">(₹5,499)</span></p>
    </div>
    
    <div className="border-l-4 border-[#76453B] pl-4">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Luxury & Premium Comfort</h5>
      <p className="text-lg">Innova Crysta <span className="font-bold text-[#76453B]">(₹6,999)</span></p>
    </div>
  </div>
  
  <div className="mt-6 bg-purple-50 p-4 rounded-lg">
    <p className="text-lg text-gray-700 text-center">
      No matter which cab you choose, we guarantee a smooth and enjoyable ride to Tuljapur.
    </p>
  </div>
</section>

{/* Innova Section */}
<section className="mt-10 p-8 bg-gradient-to-r from-[#76453B] to-[#e09e46] rounded-xl text-white shadow-lg">
  <h4 className="text-3xl font-bold mb-4">Pune to Tuljapur Cab Innova – Travel in Comfort & Style</h4>
  <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
    <p className="text-lg leading-relaxed">
      For a premium experience, book an Innova cab from Pune to Tuljapur. With spacious seating, ample luggage space, and premium comfort, our Innova Crysta is the perfect choice for families and groups.
    </p>
  </div>
  
  <h4 className="text-2xl font-bold mt-8 mb-4">Why Choose Innova for Pune to Tuljapur Travel?</h4>
  <div className="grid sm:grid-cols-2 gap-4">
    <div className="flex items-start bg-white bg-opacity-10 p-4 rounded-lg">
      <span className="text-white mr-2 mt-1">✔️</span>
      <span>Spacious 7-seater for large families</span>
    </div>
    <div className="flex items-start bg-white bg-opacity-10 p-4 rounded-lg">
      <span className="text-white mr-2 mt-1">✔️</span>
      <span>Extra legroom & comfortable seating</span>
    </div>
    <div className="flex items-start bg-white bg-opacity-10 p-4 rounded-lg">
      <span className="text-white mr-2 mt-1">✔️</span>
      <span>Smooth ride for long-distance travel</span>
    </div>
    <div className="flex items-start bg-white bg-opacity-10 p-4 rounded-lg">
      <span className="text-white mr-2 mt-1">✔️</span>
      <span>Air-conditioned and well-maintained cars</span>
    </div>
  </div>
</section>

{/* Travel Guide */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Travel Guide – Must-Visit Places in Tuljapur</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-purple-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] flex items-center mb-2">
        <span className="mr-2">🛕</span> Tulja Bhavani Temple
      </h5>
      <p className="text-gray-700">One of the Shakti Peethas, this temple is a major pilgrimage destination dedicated to Goddess Bhavani.</p>
    </div>
    
    <div className="bg-purple-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Dhakte Tuljapur</h5>
      <p className="text-gray-700">A scenic and peaceful location, ideal for spiritual seekers.</p>
    </div>
    
    <div className="bg-purple-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] flex items-center mb-2">
        <span className="mr-2">🏰</span> Naldurg Fort
      </h5>
      <p className="text-gray-700">A historical fort with mesmerizing views, located near Tuljapur.</p>
    </div>
    
    <div className="bg-purple-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] flex items-center mb-2">
        <span className="mr-2">🏞️</span> Osmanabad Caves
      </h5>
      <p className="text-gray-700">Ancient rock-cut caves perfect for history lovers.</p>
    </div>
  </div>
</section>

{/* FAQs */}
<section className="mt-10 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">FAQs – Pune to Tuljapur Cab Booking</h4>
  
  <div className="space-y-4">
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">What is the Pune to Tuljapur cab fare?</h5>
      <p className="text-gray-700">The fare starts from ₹2,999 for hatchbacks and goes up to ₹6,999 for premium Innova cabs.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">How long does it take to travel from Pune to Tuljapur by cab?</h5>
      <p className="text-gray-700">The journey takes approximately 5-6 hours, depending on road conditions.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Do you offer one-way cab services from Pune to Tuljapur?</h5>
      <p className="text-gray-700">Yes, we provide one-way and round-trip cab services.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">What types of cabs are available?</h5>
      <p className="text-gray-700">We offer hatchbacks, sedans, SUVs, and luxury cabs like Innova Crysta.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">How can I book a cab from Pune to Tuljapur?</h5>
      <p className="text-gray-700">You can book online, call us at <a href="tel:+9191305454491" className="text-[#76453B] underline">+91 91305454491</a>, or message us on WhatsApp.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Are there any toll charges included in the fare?</h5>
      <p className="text-gray-700">Yes, toll charges are included in the fare.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Do you offer 24/7 customer support?</h5>
      <p className="text-gray-700">Yes, our support team is available 24/7 to assist you.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Can I book a Pune to Tuljapur cab for a return trip?</h5>
      <p className="text-gray-700">Yes, we offer round-trip bookings at affordable rates.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Do you provide an Innova cab for Pune to Tuljapur travel?</h5>
      <p className="text-gray-700">Yes, we have Innova Crysta available for a luxury travel experience.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">What are the payment options?</h5>
      <p className="text-gray-700">We accept online payments, UPI, credit/debit cards, and cash.</p>
    </div>
  </div>
</section>


{/* About Us */}
<About_Aimcab  /> 

{/* CTA */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-md text-center">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Ready for Your Spiritual Journey to Tuljapur?</h4>
  <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
    Book your comfortable cab now and experience a stress-free pilgrimage.
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a href="https://aimcab.com" className="bg-[#76453B] hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all shadow-md hover:shadow-lg">
      Book Online Now
    </a>
    <a href="tel:+9191305454491" className="bg-white hover:bg-gray-100 text-[#76453B] font-bold py-3 px-8 rounded-lg text-lg border-2 border-[#76453B] transition-all shadow-sm hover:shadow-md">
      Call +91 91305454491
    </a>
  </div>
</section>

      <div>      

            <div> <Footer/></div>
          </div>

    </div>


  )
}

export default page;