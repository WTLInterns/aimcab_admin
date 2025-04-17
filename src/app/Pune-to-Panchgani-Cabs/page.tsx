"use client"
import React from 'react'
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Footer from '../../container/component/Footer';
import About_Aimcab from '../../components/About_Aimcab';
import Navbar from '../../container/component/Navbar';
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
    <Head>
    <title>Pune to Panchgani Cabs | Affordable Taxi Service</title>
    <meta name="description" content="Book Pune to Panchgani cabs with Aim Cab for a smooth ride. Enjoy one-way, round-trip & shared taxi services at the best fares. Easy online cab booking!" />
    <link rel="canonical" href="https://aimcab.com/Pune-to-Panchgani-Cabs" />
    <meta name="author" content="Aim Cab"></meta>
    <meta name="keywords" content="pune to panchgani cabs, pune to panchgani cab fare, pune to panchgani cab booking, pune to panchgani shared cab"></meta>
    <meta name="robots" content="index, follow"></meta>
    </Head>
      {/* Header */}
 
      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-yellow-500 py-12 md:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold mb-4"
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
    <h2 className="text-3xl font-bold mt-4 text-center">Pune to Panchgani Cabs - Affordable & Reliable Taxi Services</h2>

      <BookingForm />
      {/* Service Description */}
<section className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <h3 className="text-3xl font-bold text-[#76453B]">🚖  Best Pune to Panchgani Cab Service at Lowest Price</h3>
  <p className="mt-4 text-lg bg-white p-4 rounded-lg shadow-sm">Looking for a comfortable and budget-friendly <b className="text-indigo-700">Pune to Panchgani</b> cab? <b className="text-blue-600">Aim Cab</b> offers reliable and affordable cab services starting at just <b className="text-green-600 text-xl">₹11/km</b>, ensuring a hassle-free journey with professional drivers and well-maintained cabs.</p>
  
  <ul className="mt-4 text-lg space-y-2">
    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> <strong className="bg-yellow-100 px-2 py-1 rounded">Lowest price guaranteed</strong> – ₹11/km only!</li>
    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> <strong>Safe & Comfortable Rides</strong> – Verified drivers & sanitized cabs</li>
    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> <strong>24/7 Availability</strong> – Book anytime, anywhere</li>
    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> <strong>Hassle-Free Online Booking</strong> – Instant confirmation at <a href="https://aimcab.com" className="text-blue-500 underline font-bold">aimcab.com</a></li>
    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> <strong className="bg-pink-100 px-2 py-1 rounded">No Hidden Charges</strong> – 100% transparent pricing</li>
  </ul>
</section>

{/* Why Choose Aim Cab */}
<section className="mt-6 p-6 bg-white rounded-xl shadow-md border-t-4 border-blue-500">
  <h4 className="text-3xl font-bold text-[#76453B]">🏆  Why Choose Aim Cab for Pune to Panchgani Cab Booking?</h4>
  <p className="mt-4 text-lg bg-blue-50 p-4 rounded-lg">With over <b className="text-blue-600">2 lakh happy customers</b>, Aim Cab is the most trusted travel partner for your <b className="text-blue-600">Pune to Panchgani trip</b>. Here's why:</p>
  
  <div className="grid md:grid-cols-2 gap-4 mt-4">
    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
      <h5 className="font-bold text-lg flex items-center"><span className="text-green-600 mr-2">✓</span> Best Pune to Panchgani Cab Service</h5>
      <p className="ml-6">Reliable, safe, and punctual rides</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
      <h5 className="font-bold text-lg flex items-center"><span className="text-green-600 mr-2">✓</span> Affordable Pricing</h5>
      <p className="ml-6"> Get the best Pune to Panchgani cab fare with no hidden costs.</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
      <h5 className="font-bold text-lg flex items-center"><span className="text-green-600 mr-2">✓</span> Comfortable & Clean Cabs</h5>
      <p className="ml-6">Choose from a variety of well-maintained vehicles, including sedans, SUVs, and luxury cars.</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
      <h5 className="font-bold text-lg flex items-center"><span className="text-green-600 mr-2">✓</span> One-Way & Round-Trip Options</h5>
      <p className="ml-6">Flexible booking as per your needs</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
      <h5 className="font-bold text-lg flex items-center"><span className="text-green-600 mr-2">✓</span> Multiple Payment Methods</h5>
      <p className="ml-6"> Pay via cash, UPI, or online payments.</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
      <h5 className="font-bold text-lg flex items-center"><span className="text-green-600 mr-2">✓</span>  Reliable Pune to Panchgani Cab Packages</h5>
      <p className="ml-6">Customized for individuals, families, and corporate travelers.</p>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
      <h5 className="font-bold text-lg flex items-center"><span className="text-green-600 mr-2">✓</span> 24/7 Customer Support</h5>
      <p className="ml-6">Get assistance whenever you need it, ensuring a smooth travel experience.</p>
    </div>
  </div>
  
  <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg text-center">
    <p className="text-xl font-bold text-[#76453B]">🚕 Experience a comfortable & budget-friendly ride with Aim Cab!</p>
  </div>
</section>

{/* Cab Options & Fare Details */}
<section className="mt-6 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B]">🚖 Pune to Panchgani Cab Fare & Booking Details</h4>
  <div className="overflow-x-auto mt-4">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white">
          <th className="p-3 text-left">Cab Type</th>
          <th className="p-3 text-center">Price (₹/KM)</th>
          <th className="p-3 text-left">Best For</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr className="hover:bg-blue-50">
          <td className="p-3 font-medium">Sedan (Dzire, Etios)</td>
          <td className="p-3 text-center text-green-600 font-bold">₹11/km</td>
          <td className="p-3">Budget-friendly travel</td>
        </tr>
        <tr className="hover:bg-blue-50">
          <td className="p-3 font-medium">SUV (Ertiga, Xylo)</td>
          <td className="p-3 text-center text-green-600 font-bold">₹14/km</td>
          <td className="p-3">Family trips & extra luggage</td>
        </tr>
        <tr className="hover:bg-blue-50">
          <td className="p-3 font-medium">Luxury (Innova Crysta)</td>
          <td className="p-3 text-center text-green-600 font-bold">₹18/km</td>
          <td className="p-3">Premium comfort & business travel</td>
        </tr>
        <tr className="hover:bg-blue-50">
          <td className="p-3 font-medium">Tempo Traveller</td>
          <td className="p-3 text-center text-green-600 font-bold">₹25/km</td>
          <td className="p-3">Group trips & office outings</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

{/* Fare Estimate */}
<section className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B]">💰 Pune to Panchgani Taxi Fare Estimate</h4>
  <div className="grid md:grid-cols-3 gap-4 mt-4">
    <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-blue-400">
      <h5 className="font-bold text-lg text-center">Sedan</h5>
      <p className="text-center mt-2 text-2xl font-bold text-green-600">₹2,500 - ₹3,000</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-green-400">
      <h5 className="font-bold text-lg text-center">SUV</h5>
      <p className="text-center mt-2 text-2xl font-bold text-green-600">₹3,500 - ₹4,000</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-purple-400">
      <h5 className="font-bold text-lg text-center">Luxury</h5>
      <p className="text-center mt-2 text-2xl font-bold text-green-600">₹5,000 - ₹6,000</p>
    </div>
  </div>
  <p className="mt-4 text-lg bg-white p-3 rounded-lg inline-block shadow-sm">📍 Prices may vary based on toll charges & route conditions</p>
</section>

{/* Booking Options */}
<section className="mt-6 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B]">🚕 Pune to Panchgani Cab Booking Options</h4>
  
  <div className="mt-6 space-y-6">
    <div className="p-4 border-2 border-blue-200 rounded-lg bg-blue-50">
      <h5 className="text-xl font-bold text-[#76453B] flex items-center">
        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
        One-Way Pune to Panchgani Cabs
      </h5>
      <p className="mt-3 pl-11">Looking for a one-way cab? With Aim Cab, you only pay for a single journey, making it a budget-friendly option. Whether you’re traveling solo, with family, or for business, our well-maintained cabs ensure a smooth and comfortable ride. Choose from a selection of vehicles, including sedans, SUVs, and luxury cars. Book instantly through aimcab.com and enjoy an affordable trip with transparent pricing and no hidden costs.</p>
    </div>
    
    <div className="p-4 border-2 border-green-200 rounded-lg bg-green-50">
      <h5 className="text-xl font-bold text-green-700 flex items-center">
        <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
        Round-Trip Pune to Panchgani Cabs
      </h5>
      <p className="mt-3 pl-11">Planning a return trip? Our Panchgani to Pune cab service is the perfect solution for those who need a cab for both journeys. Whether you’re going for a weekend getaway or a business trip, our round-trip service ensures you have a cab ready to bring you back. Enjoy a stress-free experience with fixed fares, professional drivers, and on-time pickups. With Aim Cab, your return journey is just as convenient as your onward trip.</p>
    </div>
    
    <div className="p-4 border-2 border-purple-200 rounded-lg bg-purple-50">
      <h5 className="text-xl font-bold text-[#76453B] flex items-center">
        <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
        Pune to Panchgani Shared Cab
      </h5>
      <p className="mt-3 pl-11">Traveling on a budget? Our Pune to Panchgani shared cab option is ideal for cost-conscious travelers. Share your ride with other passengers and split the cost without compromising on comfort. Our shared cab service ensures you enjoy a convenient, safe, and affordable journey while making new travel connections. It’s a great choice for solo travelers and backpackers looking for the best deals.</p>
    </div>
  </div>
</section>

{/* Travel Guide */}
<section className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B]">🏞️ Pune to Panchgani Travel Guide</h4>
  
  <div className="mt-6 grid md:grid-cols-2 gap-6">
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="text-xl font-bold text-[#76453B] flex items-center">
        <span className="text-yellow-500 mr-2">🌆</span> Top Places to Visit in Panchgani
      </h5>
      <ul className="mt-3 space-y-2">
        <li className="flex items-start"><span className="text-green-500 mr-2">•</span> <strong>Sydney Point</strong> – A beautiful viewpoint offering mesmerizing valley views.</li>
        <li className="flex items-start"><span className="text-green-500 mr-2">•</span> <strong>Parsi Point</strong> – A must-visit place for breathtaking sunset views.</li>
        <li className="flex items-start"><span className="text-green-500 mr-2">•</span> <strong>Table Land</strong> – The second-largest plateau in Asia, offering horse riding and sightseeing.</li>
        <li className="flex items-start"><span className="text-green-500 mr-2">•</span> <strong>Devrai Art Village</strong> –  A great place for art lovers showcasing tribal and contemporary art.</li>
        <li className="flex items-start"><span className="text-green-500 mr-2">•</span> <strong>Mapro Garden</strong> – Famous for strawberry farms</li>
      </ul>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="text-xl font-bold text-[#76453B] flex items-center">
        <span className="text-blue-500 mr-2">🏖️</span> Beaches Near Panchgani
      </h5>
      <ul className="mt-3 space-y-2">
        <li className="flex items-start"><span className="text-green-500 mr-2">•</span> <strong>Dapoli Beach</strong> – Peaceful retreat with clean waters</li>
        <li className="flex items-start"><span className="text-green-500 mr-2">•</span> <strong>Harihareshwar Beach</strong> – Scenic spiritual getaway</li>
      </ul>
    </div>
  </div>
</section>

{/* Route Information */}
<section className="mt-6 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B]">🛣️ Pune to Panchgani Distance & Route</h4>
  
  <div className="mt-4 grid md:grid-cols-2 gap-4">
    <div className="bg-blue-50 p-4 rounded-lg">
      <p className="font-semibold flex items-center"><span className="text-blue-500 mr-2">⏳</span> Travel Duration:</p>
      <p className="ml-6">The journey takes approximately 3 to 4 hours depending on traffic.</p>
    </div>
    <div className="bg-green-50 p-4 rounded-lg">
      <p className="font-semibold flex items-center"><span className="text-green-500 mr-2">🛣️</span> Distance by Road:</p>
      <p className="ml-6">100 km via NH 48</p>
    </div>
    <div className="bg-yellow-50 p-4 rounded-lg">
      <p className="font-semibold flex items-center"><span className="text-yellow-500 mr-2">💰</span> Toll Charges:</p>
      <p className="ml-6">₹200-₹300 approx.</p>
    </div>
    <div className="bg-purple-50 p-4 rounded-lg">
      <p className="font-semibold flex items-center"><span className="text-purple-500 mr-2">💡</span> Travel Tip:</p>
      <p className="ml-6"> Early morning or late evening travel is best to avoid traffic.</p>
    </div>
  </div>
</section>

{/* FAQs */}
<section className="mt-6 p-6 bg-gray-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B]">❓ Frequently Asked Questions</h4>
  
  <div className="mt-6 space-y-6">
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B]">1. What is the Pune to Panchgani cab fare?</h5>
      <p className="mt-1 ml-4">The fare starts from ₹2,500 for a sedan and varies based on car type.</p>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B]">2. How long does it take to travel from Pune to Panchgani by taxi?</h5>
      <p className="mt-1 ml-4">It takes around 3 to 4 hours, depending on traffic and road conditions.</p>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B]">3. Are toll charges included in the Pune to Panchgani taxi fare?</h5>
      <p className="mt-1 ml-4">No, toll charges are extra and paid separately.</p>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B]">4. What are the cab options available for Pune to Panchgani travel?</h5>
      <p className="mt-1 ml-4">We offer Sedan, SUV, Luxury Cars, and Tempo Travellers.</p>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B]">5. Is Pune to Panchgani one-way cab service available?</h5>
      <p className="mt-1 ml-4">Yes, we provide one-way cabs starting from ₹2,500. </p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B]">6. Can I book a Pune to Panchgani cab for a round trip?</h5>
      <p className="mt-1 ml-4">Yes, we offer round-trip cabs with flexible bookings.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B]">7.What payment methods are available for booking?</h5>
      <p className="mt-1 ml-4">We accept cash, UPI, and online payments.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B]"> Are the cabs sanitized and safe for travel?</h5>
      <p className="mt-1 ml-4">Yes, all our cabs are regularly sanitized..</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B]">9. How can I book a Pune to Panchgani cab?</h5>
      <p className="mt-1 ml-4">You can book instantly via our website <a href="https://aimcab.com" className="text-blue-600 font-bold underline">aimcab.com</a>.</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-[#76453B]">10. Do you offer Panchgani sightseeing packages?</h5>
      <p className="mt-1 ml-4"> Yes, we have customized sightseeing packages for Panchgani.</p>
    </div>
  </div>
</section>

{/* About Aim Cab */}
<About_Aimcab  />

{/* CTA */}
<section className="mt-6 p-6 bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white rounded-xl shadow-lg text-center">
  <h4 className="text-3xl font-bold">📢 Book Your Pune to Panchgani Cab Now!</h4>
  <p className="mt-4 text-xl">
    Enjoy the Best <b>Pune to Panchgani Cab Service</b> with <b>Aim Cab</b>
  </p>
  <p className="mt-2">Get the lowest fares, professional drivers, and hassle-free booking</p>
  
  <a href="https://aimcab.com" className="mt-6 inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
    Book Now at aimcab.com
  </a>
  
  <div className="mt-6 flex justify-center space-x-4">
    <div className="bg-white bg-opacity-20 p-2 rounded-full">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
    </div>
    <div className="bg-white bg-opacity-20 p-2 rounded-full">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
    </div>
    <div className="bg-white bg-opacity-20 p-2 rounded-full">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
    </div>
  </div>
</section>


      
     {/* Footer */}
<div> <Footer /></div>
  </div>

);
};


export default page;