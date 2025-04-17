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
        <title>Pune to Surat Cab – Book Your Ride with Aim Cab</title>
        <meta name="description" content="Looking for a reliable Pune to Surat cab service? Aim Cab offers comfortable and budget-friendly rides from Pune to Surat. Book online now!" />
        <link rel="canonical" href="https://aimcab.com/pune-to-surat-cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="pune to surat cab, cab booking from pune to surat, pune to surat cab fare" />
        <meta name="robots" content="index, follow" />
      </head>

      {/* Header */}
      {/* <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white py-12 md:py-20 text-center ">
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
      </header> */}

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
        Pune to Surat Cab – Book Your Ride with Aim Cab
      </h2>

      <BookingForm />
      
      {/* Service Description */}
<section className="mt-10 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <h3 className="text-3xl font-bold text-[#76453B] mb-6">
    Pune to Surat Cab – Comfortable & Affordable Travel
  </h3>
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <p className="text-lg text-gray-700 leading-relaxed">
      Looking for a reliable Pune to Surat cab service? Aim Cab offers the most comfortable and budget-friendly cab rides from Pune to Surat. Whether you're traveling for business, leisure, or family trips, our professional drivers and well-maintained cabs ensure a hassle-free journey.
    </p>
  </div>
</section>

{/* Why Choose Aim Cab */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-8 border-b-2 border-indigo-100 pb-4">Why Choose Aim Cab for Pune to Surat Travel?</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-all">
      <ul className="space-y-4 text-lg">
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Affordable Pricing:</strong> Enjoy the lowest fares in the market.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Reliable Services:</strong> On-time pickup and drop services.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Experienced Drivers:</strong> Professional and courteous drivers.</span>
        </li>
      </ul>
    </div>
    
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-all">
      <ul className="space-y-4 text-lg">
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Wide Fleet Options:</strong> Choose from hatchbacks, sedans, SUVs, and luxury cars.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Transparent Pricing:</strong> No hidden charges, what you see is what you pay.</span>
        </li>
      </ul>
    </div>
  </div>

  <div className="mt-10 space-y-8">
    <div className="bg-indigo-50 p-6 rounded-lg">
      <h4 className="text-2xl font-bold text-[#76453B] mb-4">Surat to Pune Cab – Hassle-Free Return Journey</h4>
      <p className="text-lg text-gray-700">
        If you're in Surat and need a cab back to Pune, Aim Cab offers Surat to Pune cab services at the best rates. Book a one-way or round-trip ride at competitive prices.
      </p>
    </div>
    
    <div className="bg-indigo-50 p-6 rounded-lg">
      <h4 className="text-2xl font-bold text-[#76453B] mb-4">Cab from Surat to Pune – One-Way & Round Trip</h4>
      <p className="text-lg text-gray-700">
        We offer one-way cab services as well as round-trip options between Pune and Surat. Our flexible booking options allow you to travel conveniently at your own schedule.
      </p>
    </div>
  </div>
</section>

{/* Cab Charges */}
<section className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Pune to Surat Cab Charges – Best in the Market</h4>
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <p className="text-lg text-gray-700 mb-6">
      Our Pune to Surat cab charges are designed to fit your budget. We provide cost-effective rates while ensuring a high-quality travel experience.
    </p>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
            <th className="p-4 text-left rounded-tl-lg">Cab Type</th>
            <th className="p-4 text-left rounded-tr-lg">Price (Approx.)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-blue-50">
            <td className="p-4 font-medium">Hatchback</td>
            <td className="p-4">₹11/km</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-blue-50">
            <td className="p-4 font-medium">Sedan</td>
            <td className="p-4">₹12/km</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-blue-50">
            <td className="p-4 font-medium">SUV</td>
            <td className="p-4">₹14/km</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-4 font-medium">Innova</td>
            <td className="p-4">₹16/km</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

{/* Booking Steps */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-8 border-b-2 border-indigo-100 pb-4">Book Your Pune to Surat Cab in Easy Steps</h4>
  
  <div className="grid md:grid-cols-5 gap-4">
    <div className="bg-indigo-100 p-4 rounded-lg text-center hover:shadow-md transition-all">
      <div className="bg-[#76453B] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">1</div>
      <p className="font-medium"><strong>Visit Our Website:</strong> Go to <a href="https://aimcab.com" className="text-blue-600 underline">AimCab.com</a></p>
    </div>
    
    <div className="bg-indigo-100 p-4 rounded-lg text-center hover:shadow-md transition-all">
      <div className="bg-[#76453B] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">2</div>
      <p className="font-medium"><strong>Enter Travel Details:</strong> Select pickup and drop locations</p>
    </div>
    
    <div className="bg-indigo-100 p-4 rounded-lg text-center hover:shadow-md transition-all">
      <div className="bg-[#76453B] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">3</div>
      <p className="font-medium"><strong>Choose Your Cab:</strong> Pick from our wide range</p>
    </div>
    
    <div className="bg-indigo-100 p-4 rounded-lg text-center hover:shadow-md transition-all">
      <div className="bg-[#76453B] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">4</div>
      <p className="font-medium"><strong>Confirm & Pay:</strong> Secure your booking with online</p>
    </div>
    
    <div className="bg-indigo-100 p-4 rounded-lg text-center hover:shadow-md transition-all">
      <div className="bg-[#76453B] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">5</div>
      <p className="font-medium"><strong>Enjoy Your Ride:</strong> Our driver will reach you at the scheduled time.</p>
    </div>
  </div>
</section>

{/* Places to Visit */}
<section className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Places to Visit During Pune to Surat Journey</h4>
  
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <p className="text-lg text-gray-700 mb-8">
      A road trip from Pune to Surat covers scenic landscapes, temples, and beaches. Here are some must-visit places along the route:
    </p>
    
    <div className="space-y-8">
      <div className="border-l-4 text-[#76453B] pl-4">
        <h5 className="text-2xl font-bold text-[#76453B] mb-3">Nashik – The Wine Capital of India</h5>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span className="text-[#76453B] mr-2">•</span>
            <span><strong>Sula Vineyards</strong> – Famous for wine tasting tours</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#76453B] mr-2">•</span>
            <span><strong>Trimbakeshwar Temple</strong> – A significant religious site</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#76453B] mr-2">•</span>
            <span><strong>Pandavleni Caves</strong> – Ancient Buddhist caves</span>
          </li>
        </ul>
      </div>
      
      <div className="border-l-4 text-[#76453B] pl-4">
        <h5 className="text-2xl font-bold text-[#76453B] mb-3">Saputara – Gujarat's Only Hill Station</h5>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span className="text-[#76453B] mr-2">•</span>
            <span><strong>Saputara Lake</strong> – Ideal for boating and scenic views</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#76453B] mr-2">•</span>
            <span><strong>Sunset Point</strong> – Offers breathtaking sunset views</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#76453B] mr-2">•</span>
            <span><strong>Gira Waterfalls</strong> – A must-visit natural attraction</span>
          </li>
        </ul>
      </div>
      
      <div className="border-l-4 text-[#76453B] pl-4">
        <h5 className="text-2xl font-bold text-[#76453B] mb-3">Surat – Diamond City of India</h5>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span className="text-[#76453B] mr-2">•</span>
            <span><strong>Dumas Beach</strong> – A beautiful beach with black sand</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#76453B] mr-2">•</span>
            <span><strong>Ambika Niketan Temple</strong> – A revered Hindu temple</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#76453B] mr-2">•</span>
            <span><strong>Dutch Garden</strong> – A well-maintained historic garden</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#76453B] mr-2">•</span>
            <span><strong>Surat Castle</strong> – A 16th-century fortress</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* FAQs */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-8 border-b-2 border-indigo-100 pb-4">Frequently Asked Questions (FAQs)</h4>
  
  <div className="space-y-6">
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-sm transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">How long does it take to travel from Pune to Surat by cab?</h5>
      <p className="text-gray-700">It takes approximately 6 to 7 hours to cover the 420 km distance, depending on traffic and road conditions.</p>
    </div>
    
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-sm transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">What are the charges for Pune to Surat cab?</h5>
      <p className="text-gray-700">The charges start at ₹11/km with additional toll and parking fees.</p>
    </div>
    
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-sm transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Can I book a one-way cab from Surat to Pune?</h5>
      <p className="text-gray-700">Yes, we offer one-way cab services from Surat to Pune.</p>
    </div>
    
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-sm transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Do you provide Pune to Surat cab service for corporate bookings?</h5>
      <p className="text-gray-700">Yes, we offer corporate cab booking services with special discounts.</p>
    </div>
    
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-sm transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">What types of cabs are available for Pune to Surat travel?</h5>
      <p className="text-gray-700">We provide Hatchbacks, Sedans, SUVs, and Luxury Cars.</p>
    </div>
    
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-sm transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Can I book a Pune to Surat cab at night?</h5>
      <p className="text-gray-700">Yes, we offer 24/7 cab services for Pune to Surat travel.</p>
    </div>
    
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-sm transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Is it safe to travel from Pune to Surat by cab?</h5>
      <p className="text-gray-700">Yes, our trained drivers and GPS-enabled cars ensure a safe journey.</p>
    </div>
    
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-sm transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Do you offer discounts for round trips?</h5>
      <p className="text-gray-700">Yes, we provide special discounts on round-trip bookings.</p>
    </div>
    
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-sm transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">What is the cancellation policy?</h5>
      <p className="text-gray-700">Cancellations made 24 hours before the ride are eligible for a full refund.</p>
    </div>
    
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-sm transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">How can I contact Aim Cab for bookings?</h5>
      <p className="text-gray-700">You can call us at <a href="tel:+9191305454491" className="text-blue-600 underline">+91 91305454491</a> or visit <a href="https://aimcab.com" className="text-blue-600 underline">AimCab.com</a> for online bookings.</p>
    </div>
  </div>
</section>

{/* About Aim Cab */}
<About_Aimcab/>

{/* Call to Action */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md text-center">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Book Your Pune to Surat Cab Today!</h4>
  <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
    Travel hassle-free with Aim Cab and enjoy a smooth ride from Pune to Surat.
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a href="https://aimcab.com" className="bg-[#76453B] hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-md hover:shadow-lg">
      Book Online Now
    </a>
    <a href="tel:+9191305454491" className="bg-white hover:bg-gray-100 text-[#76453B] font-bold py-4 px-8 rounded-lg text-lg border-2 border-indigo-600 transition-all shadow-sm hover:shadow-md">
      Call +91 91305454491
    </a>
  </div>
</section>
     
          <div> <Footer/></div>
          
    </div>
  )
}

export default page;