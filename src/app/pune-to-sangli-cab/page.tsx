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
        <title>Pune to Sangli Cab | Affordable & Reliable Taxi Service</title>
        <meta name="description" content="Book a Pune to Sangli cab with Aim Cab for a safe, reliable & affordable ride. Hassle-free taxi booking with professional drivers at the best fares." />
        <link rel="canonical" href="https://aimcab.com/pune-to-sangli-cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="pune to sangli cab, pune to sangli taxi, pune to sangli distance by road, pune to sangli cab service, cab from pune to sangli, online cab book pune to sangli, pune to sangli cab fare" />
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
        Pune to Sangli Cab Service – Book a Comfortable & Affordable Ride
      </h2>

      <BookingForm />
      
 {/* Service Description */}
{/* Hero Section */}
<section className="mt-8 p-8 bg-gradient-to-r from-[#76453B] to-[#F3B664] rounded-xl text-white shadow-lg">
  <div className=" mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Pune to Sangli Cab with Aim Cab</h1>
    <p className="text-xl md:text-1xl leading-relaxed">
      {/* <span className="block mb-3">🚗 Comfortable & Affordable Cab Service</span> */}
      <span className="">Looking for a Pune to Sangli cab? Aim Cab offers a seamless and budget-friendly taxi service for travelers seeking a comfortable and safe journey. Whether you need a cab for business, leisure, or emergencies, our well-maintained cars and experienced drivers ensure a smooth ride.</span>
    </p>
    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
      <a href="https://aimcab.com" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center">
        Book Online Now
      </a>
      <a href="tel:+9191305454491" className=" border-2 px-6 py-3 text-blue-600 rounded-lg font-bold bg-white hover:bg-green-500 hover:text-blue-600 transition-colors text-center">
        Call: +91 91305454491
      </a>
    </div>
  </div>
</section>

{/* Why Choose Us - Card Grid */}
<section className="mt-16 p-6">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#76453B] mb-12">
    Why Choose Aim Cab for Your Pune to Sangli Journey?
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#F3B664] hover:shadow-lg transition-shadow">
        <div className="text-blue-500 text-3xl mb-4">💰</div>
        <h3 className="text-xl font-bold mb-2">Lowest Price Guarantee</h3>
        <p className="text-gray-700">We offer the most affordable Pune to Sangli cab service starting at just ₹11/km.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#F3B664] hover:shadow-lg transition-shadow">
        <div className="text-blue-500 text-3xl mb-4">🚙</div>
        <h3 className="text-xl font-bold mb-2">Convenient Booking</h3>
        <p className="text-gray-700">Hassle-free online cab booking from Pune to Sangli with instant confirmation.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#F3B664] hover:shadow-lg transition-shadow">
        <div className="text-blue-500 text-3xl mb-4">👨‍✈️</div>
        <h3 className="text-xl font-bold mb-2">Professional Drivers</h3>
        <p className="text-gray-700">Our skilled and courteous drivers ensure a safe ride.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#F3B664] hover:shadow-lg transition-shadow">
        <div className="text-blue-500 text-3xl mb-4">⏱️</div>
        <h3 className="text-xl font-bold mb-2">Flexible Pickup & Drop</h3>
        <p className="text-gray-700">Travel at your convenience, with doorstep pickup and drop-off services.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#F3B664] hover:shadow-lg transition-shadow">
        <div className="text-blue-500 text-3xl mb-4">🔒</div>
        <h3 className="text-xl font-bold mb-2">Variety of Cabs</h3>
        <p className="text-gray-700">Choose from hatchbacks, sedans, SUVs, and luxury cars.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#F3B664] hover:shadow-lg transition-shadow">
        <div className="text-blue-500 text-3xl mb-4">📱</div>
        <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
        <p className="text-gray-700">Instant confirmation via website or call</p>
      </div>
    </div>
  </div>
</section>

{/* Pricing Section */}
<section className="mt-16 p-8 bg-gray-50 rounded-xl">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#76453B] mb-2">
    Pune to Sangli Cab Fare & Pricing
    </h2>
    <p className="text-center text-gray-600 mb-8">Our pricing is competitive, ensuring the lowest Pune to Sangli cab fare with no hidden costs.</p>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
            <th className="p-4 text-left">Cab Type</th>
            <th className="p-4 text-left">Model</th>
            <th className="p-4 text-right">Price Per KM</th>
            <th className="p-4 text-right">Approx. Total Fare</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-blue-50">
            <td className="p-4 font-medium">Hatchback</td>
            <td className="p-4 text-gray-600">Indica, WagonR, Swift</td>
            <td className="p-4 text-right">₹11/km</td>
            <td className="p-4 text-right font-bold">₹2,530</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-blue-50">
            <td className="p-4 font-medium">Sedan</td>
            <td className="p-4 text-gray-600">Dzire, Etios, Verna</td>
            <td className="p-4 text-right">₹12/km</td>
            <td className="p-4 text-right font-bold">₹2,760</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-blue-50">
            <td className="p-4 font-medium">SUV</td>
            <td className="p-4 text-gray-600">Innova, Ertiga, Xylo</td>
            <td className="p-4 text-right">₹15/km</td>
            <td className="p-4 text-right font-bold">₹3,450</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-4 font-medium">Luxury</td>
            <td className="p-4 text-gray-600">Crysta, Ciaz, Mercedes</td>
            <td className="p-4 text-right">Available On Request</td>
            <td className="p-4 text-right font-bold">-</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
      <p className="text-yellow-700">The Pune to Sangli distance by road is approximately 230 km, and the journey typically takes around 4-5 hours, depending on traffic and road conditions.</p>
    </div>
  </div>
</section>

{/* Journey Info */}
<section className="mt-16">
  <div className=" mx-auto grid md:grid-cols-2 gap-8">
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold text-[#76453B] mb-4 flex items-center">
        <span className="mr-3">🛣️</span> Route & Distance
      </h3>
      <p className="text-gray-700 mb-4">
        <strong>Distance:</strong> 230 km<br />
        <strong>Travel Time:</strong> 4-5 hours<br />
        <strong>Best Route:</strong> Pune → Satara → Sangli (NH48)
      </p>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Route 2: Via NH166 (Pune – Pandharpur – Sangli):</h4>
        <p className="text-gray-700">Pune → Pandharpur → Sangli (NH166)<br />
        <span className="text-sm">250 km • Scenic but slightly longer</span></p>
        <span className="text-sm">Road Condition: Scenic route with local attractions along the way</span>
      </div>
    </div>
    
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold text-[#76453B] mb-4 flex items-center">
        <span className="mr-3">📱</span> Online Cab Booking from Pune to Sangli
      </h3>
      <ol className="list-decimal list-inside space-y-3 text-gray-700">
        <li>Visit <a href="https://aimcab.com" className="text-blue-500 underline">AimCab.com</a></li>
        <li>Enter your pickup and drop-off location.</li>
        <li>Select your preferred cab type.</li>
        <li>Confirm your booking and get an instant confirmation.</li>
        <li>Or simply call <strong>+91 91305454491</strong></li>
      </ol>
      <div className="mt-6">
        <a href="https://aimcab.com" className="inline-block bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">
          Book Now →
        </a>
      </div>
    </div>
  </div>
</section>

{/* Attractions */}
<section className="mt-16 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#76453B] mb-8">
    Travel Guide – Best Places to Visit in Sangli
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-[#76453B] mb-2">🛕 Sangli Ganpati Temple</h3>
        <p className="text-gray-700">A famous temple dedicated to Lord Ganesha, attracting thousands of devotees every year.</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-[#76453B] mb-2">⛰️ Dandoba Hills</h3>
        <p className="text-gray-700">Perfect for trekking and nature lovers, offering breathtaking views.</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-[#76453B] mb-2">🛕 Sangameshwar Temple</h3>
        <p className="text-gray-700">An ancient Shiva temple located at the confluence of the Krishna and Warana rivers.</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-[#76453B] mb-2">🌊 Krishna River</h3>
        <p className="text-gray-700">Ideal for a peaceful boat ride or riverside picnic with family and friends.</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-[#76453B] mb-2">🐅 Chandoli National Park</h3>
        <p className="text-gray-700">A perfect destination for wildlife lovers, home to tigers, deer, and diverse flora.</p>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="mt-16 p-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#76453B] mb-8">
    FAQs – Pune to Sangli Cab Service
    </h2>
    
    <div className="space-y-4">
      <div className="border-b border-gray-200 pb-4">
        <button className="flex justify-between items-center w-full text-left font-bold text-lg text-[#76453B]">
          <span>What is the Pune to Sangli cab fare?</span>
          <span className="text-blue-500 text-2xl">+</span>
        </button>
        <div className="mt-2 text-gray-700">
        Our cab fares start at ₹11/km, ensuring the most budget-friendly rates.
        </div>
      </div>
      
      <div className="border-b border-gray-200 pb-4">
        <button className="flex justify-between items-center w-full text-left font-bold text-lg text-[#76453B]">
          <span>Can I book a one-way cab from Pune to Sangli?</span>
          <span className="text-blue-500 text-2xl">+</span>
        </button>
        <div className="mt-2 text-gray-700">
        Yes, we offer both one-way and round-trip services.
        </div>
      </div>
      
      <div className="border-b border-gray-200 pb-4">
        <button className="flex justify-between items-center w-full text-left font-bold text-lg text-[#76453B]">
          <span>What are the payment options for booking a Pune to Sangli cab?</span>
          <span className="text-blue-500 text-2xl">+</span>
        </button>
        <div className="mt-2 text-gray-700">
        We accept online payments, UPI, net banking, and cash payments.
        </div>
      </div>
      
      <div className="border-b border-gray-200 pb-4">
        <button className="flex justify-between items-center w-full text-left font-bold text-lg text-[#76453B]">
          <span>How long does it take to travel from Pune to Sangli by cab?</span>
          <span className="text-blue-500 text-2xl">+</span>
        </button>
        <div className="mt-2 text-gray-700">
        It takes around 4-5 hours, depending on road conditions and traffic.
        </div>
      </div>
      
      <div className="border-b border-gray-200 pb-4">
        <button className="flex justify-between items-center w-full text-left font-bold text-lg text-[#76453B]">
          <span>Are there additional charges for night travel?</span>
          <span className="text-blue-500 text-2xl">+</span>
        </button>
        <div className="mt-2 text-gray-700">
        Night charges may apply. Contact us for detailed pricing.
        </div>
      </div>
    </div>

    <div className="border-b border-gray-200 pb-4">
        <button className="flex justify-between items-center w-full text-left font-bold text-lg text-[#76453B]">
          <span>Is online cab booking from Pune to Sangli safe?</span>
          <span className="text-blue-500 text-2xl">+</span>
        </button>
        <div className="mt-2 text-gray-700">
        Yes, we provide secure and verified bookings with experienced drivers.
        </div>
      </div>

      <div className="border-b border-gray-200 pb-4">
        <button className="flex justify-between items-center w-full text-left font-bold text-lg text-[#76453B]">
          <span>Do you provide an airport pickup service for Pune to Sangli?</span>
          <span className="text-blue-500 text-2xl">+</span>
        </button>
        <div className="mt-2 text-gray-700">
        Yes, we offer airport pickups and drop-offs.
        </div>
      </div>

      <div className="border-b border-gray-200 pb-4">
        <button className="flex justify-between items-center w-full text-left font-bold text-lg text-[#76453B]">
          <span>Can I book a cab from Sangli to Pune as well?</span>
          <span className="text-blue-500 text-2xl">+</span>
        </button>
        <div className="mt-2 text-gray-700">
        Yes, we offer return trip bookings from Karad to Pune and other locations.
        </div>
      </div>

      <div className="border-b border-gray-200 pb-4">
        <button className="flex justify-between items-center w-full text-left font-bold text-lg text-[#76453B]">
          <span>What makes Aim Cab the best Pune to Sangli cab service?</span>
          <span className="text-blue-500 text-2xl">+</span>
        </button>
        <div className="mt-2 text-gray-700">
        We provide affordable pricing, comfortable rides, and top-notch service.
        </div>
      </div>

      <div className="border-b border-gray-200 pb-4">
        <button className="flex justify-between items-center w-full text-left font-bold text-lg text-[#76453B]">
          <span>Is there a cancellation policy?</span>
          <span className="text-blue-500 text-2xl">+</span>
        </button>
        <div className="mt-2 text-gray-700">
        Yes, we have a flexible cancellation policy. Contact customer support for details.
        </div>
      </div>

    
    
    {/* <div className="mt-8 text-center">
      <a href="#contact" className="text-blue-500 font-semibold hover:underline">
        View all 10 FAQs ↓
      </a>
    </div> */}
  </div>
</section>
{/* About Section */}
<About_Aimcab  />
{/* CTA Section */}
<section className="mt-16 p-10 bg-gradient-to-r from-[#76453B] to-[#f1a43e] rounded-xl text-white text-center">
  <h2 className="text-3xl font-bold mb-4">Ready for Your Pune to Sangli Trip?</h2>
  <p className="text-xl mb-8 max-w-2xl mx-auto">
    Book your comfortable cab today and enjoy a stress-free journey at the best prices!
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a href="https://aimcab.com" className="bg-[#76453B] text-white px-8 py-4 border-2  rounded-lg font-bold hover:bg-green-500 transition-colors text-lg">
      🚗 Book Online Instantly
    </a>
    <a href="tel:+9191305454491" className="bg-[#76453B] border-2  px-8 py-4 rounded-lg font-bold hover:bg-green-500 hover:text-blue-600 transition-colors text-lg">
      📞 Call: +91 91305454491
    </a>
  </div>
</section>





            <div> <Footer/></div>
          </div>
  )
}

export default page;