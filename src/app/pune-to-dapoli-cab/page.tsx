"use client"; 
import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../container/component/Navbar'
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
      

      <div>
         <Navbar/>
                   {/* Header */}
                <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-yellow-500 py-12 md:py-20 text-center overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-10  mx-auto px-4">
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
        <h2 className="text-3xl font-bold mt-4 text-center">
          Pune to Dapoli Cab – Hassle-Free & Affordable Travel
        </h2>

        <BookingForm />
{/* Hero Section */}
<section className="bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white py-12 px-6 rounded-xl shadow-lg">
  <div className=" mx-auto text-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">🚖 Premium Pune to Dapoli Cab Service</h1>
    <p className="text-xl md:text-2xl mb-6">Experience Comfort, Safety & Affordability with Aim Cab</p>
    <div className="bg-white text-[#76453B] inline-block px-6 py-3 rounded-full font-bold shadow-md hover:shadow-xl transition duration-300">
      <a href="https://aimcab.com" className="flex items-center justify-center">
        <span>Instant Booking</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  </div>
</section>

{/* Service Highlights */}
<section className="my-10 p-6 bg-white rounded-xl shadow-md">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-blue-700 mb-6 flex items-center">
      <span className="bg-blue-100 p-2 rounded-full mr-3">🏆</span>
      Why Choose Aim Cab for Pune to Dapoli?
    </h2>
    
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 flex items-start">
        <span className="text-green-600 text-xl mr-3">✓</span>
        <div>
          <h3 className="text-lg font-semibold">Affordable Pricing</h3>
          <p>Lowest market price starting at ₹11/km</p>
        </div>
      </div>
      
      <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500 flex items-start">
        <span className="text-green-600 text-xl mr-3">✓</span>
        <div>
          <h3 className="text-lg font-semibold">Multiple Cab Options</h3>
          <p>Hatchbacks, sedans, SUVs & luxury cars</p>
        </div>
      </div>
      
      <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500 flex items-start">
        <span className="text-green-600 text-xl mr-3">✓</span>
        <div>
          <h3 className="text-lg font-semibold">Professional Drivers</h3>
          <p>Highly trained and courteous drivers</p>
        </div>
      </div>
      
      <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500 flex items-start">
        <span className="text-green-600 text-xl mr-3">✓</span>
        <div>
          <h3 className="text-lg font-semibold">24/7 Support</h3>
          <p>Round-the-clock customer assistance</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Journey Info */}
<section className="my-10 p-6 bg-gray-50 rounded-xl">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-blue-700 mb-6">Pune to Dapoli Travel Information</h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="flex items-start mb-6">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Distance</h3>
            <p className="text-lg">Approximately 185 km via NH66</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Travel Time</h3>
            <p className="text-lg">4 to 5 hours depending on traffic</p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
          </svg>
          Cab Options Available
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="bg-blue-100 text-[#76453B] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Hatchback</span>
            Budget-friendly for 2-3 passengers
          </li>
          <li className="flex items-center">
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Sedan</span>
            Comfortable ride for small families
          </li>
          <li className="flex items-center">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">SUV</span>
            Spacious for group travel
          </li>
          <li className="flex items-center">
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Luxury</span>
            Premium travel experience
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Pricing Section */}
<section className="my-10 p-6 bg-white rounded-xl shadow-md">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-blue-700 mb-2">Transparent Pricing</h2>
    <p className="text-lg mb-6">No hidden charges - just honest fares for your Pune to Dapoli journey</p>
    
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg overflow-hidden shadow">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-4 px-6 text-left">Cab Type</th>
            <th className="py-4 px-6 text-right">Price (₹)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-blue-50 transition duration-150">
            <td className="py-4 px-6 font-medium">Hatchback (Indica, Swift)</td>
            <td className="py-4 px-6 text-right font-bold text-blue-600">₹2999/-</td>
          </tr>
          <tr className="hover:bg-blue-50 transition duration-150">
            <td className="py-4 px-6 font-medium">Sedan (Dzire, Etios)</td>
            <td className="py-4 px-6 text-right font-bold text-blue-600">₹3499/-</td>
          </tr>
          <tr className="hover:bg-blue-50 transition duration-150">
            <td className="py-4 px-6 font-medium">SUV (Innova, Ertiga)</td>
            <td className="py-4 px-6 text-right font-bold text-blue-600">₹4499/-</td>
          </tr>
          <tr className="hover:bg-blue-50 transition duration-150">
            <td className="py-4 px-6 font-medium">Luxury Cars</td>
            <td className="py-4 px-6 text-right font-bold text-blue-600">On Request</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
      <p className="text-yellow-800">💡 <strong>Special Offer:</strong> Book round trips for additional 10% discount!</p>
    </div>
  </div>
</section>

{/* Return Journey */}
<section className="my-10 p-6 bg-blue-50 rounded-xl">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-blue-700 mb-4">Dapoli to Pune Return Cab</h2>
    <p className="text-lg mb-4">
      Planning your return from Dapoli to Pune? Book our Dapoli to Pune cab and enjoy a seamless trip back home. We ensure timely pick-up and drop-off services with our network of 500+ registered cabs.
    </p>
    <div className="bg-white p-4 rounded-lg inline-block">
      <a href="tel:+9191305454491" className="text-blue-600 font-semibold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        Call for Return Booking: +91 91305454491
      </a>
    </div>
  </div>
</section>

{/* Attractions Section */}
<section className="my-10 p-6 bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white rounded-xl">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold mb-2">🌴 Explore Dapoli's Hidden Gems</h2>
    <p className="text-xl mb-8">Must-visit places during your trip</p>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
          </svg>
          Murud Beach
        </h3>
        <p>A clean and serene beach, perfect for a relaxing getaway with golden sands and clear waters.</p>
      </div>
      
      <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
          </svg>
          Karde Beach
        </h3>
        <p>Famous for dolphin spotting and water activities, with gentle waves ideal for swimming.</p>
      </div>
      
      <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
          </svg>
          Suvarnadurg Fort
        </h3>
        <p>A historical sea fort offering stunning views of the Arabian Sea and fascinating architecture.</p>
      </div>
      
      <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
          </svg>
          Panhalekaji Caves
        </h3>
        <p>Ancient Buddhist caves carved into rock, featuring beautiful sculptures and peaceful surroundings.</p>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="my-10 p-6 bg-white rounded-xl shadow-md">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-blue-700 mb-6">Frequently Asked Questions</h2>
    
    <div className="space-y-4">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition duration-150">
          <span className="font-medium text-lg">How much does a cab from Pune to Dapoli cost?</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="p-4 border-t border-gray-200">
          <p>The starting price for a Pune to Dapoli cab is ₹2999 for hatchbacks, with sedans at ₹3499 and SUVs at ₹4499. Luxury cars are available on request.</p>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition duration-150">
          <span className="font-medium text-lg">How far is Dapoli from Pune?</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="p-4 border-t border-gray-200">
          <p>The Pune to Dapoli distance by cab is approximately 185 km via NH66, with a travel time of 4-5 hours depending on traffic and route conditions.</p>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition duration-150">
          <span className="font-medium text-lg">Is night travel safe with Aim Cab?</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="p-4 border-t border-gray-200">
          <p>Yes, our Pune to Dapoli cab service operates 24/7 with verified drivers and GPS-tracked vehicles to ensure your complete safety during night travel.</p>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition duration-150">
          <span className="font-medium text-lg">Can I book a round trip from Pune to Dapoli?</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="p-4 border-t border-gray-200">
          <p>Absolutely! We offer both one-way and round-trip services at competitive prices. Round trips come with a 10% discount compared to two separate one-way bookings.</p>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition duration-150">
          <span className="font-medium text-lg">What are the payment options available?</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="p-4 border-t border-gray-200">
          <p>We accept all major payment methods including cash, UPI (PhonePe, Google Pay), net banking, credit/debit cards, and online wallet payments for your convenience.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="my-10 p-8 bg-blue-700 text-white rounded-xl shadow-xl">
  <div className=" mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Coastal Getaway?</h2>
    <p className="text-xl mb-8">Book your Pune to Dapoli cab today and experience the Konkan coast in comfort!</p>
    
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="https://aimcab.com" className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        Book Online Now
      </a>
      
      <a href="tel:+9191305454491" className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        Call: +91 91305454491
      </a>
    </div>
    
    <p className="mt-6 text-blue-200">🚖 Your Comfort, Our Priority | 24/7 Customer Support</p>
  </div>
</section>

        {/* About Aim Cab */}
        <section className="mt-6 p-4 sm:p-6">
          <br />
          <h4 className="text-2xl font-bold">About Aim Cab</h4>
          <p className="mt-4 text-lg">
            Established in 2001, Aim Cab is a trusted cab booking company based in Pune. With a
            fleet of 50+ personal cabs, a network of 500+ registered cabs, and 2 lakh+ happy
            customers, we have successfully completed 3000+ outstation trips across India.
          </p>
          <p className="mt-4 text-lg">
            Book your Pune to Dapoli cab today with Aim Cab and enjoy a hassle-free journey at
            unbeatable prices!
          </p>
          <div>
            {/* Redesigned Responsive Footer */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-6 sm:py-8">
              {/* Footer content area */}
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                  {/* You can add additional footer columns here if needed */}
                </div>
              </div>

              {/* Popular Cities Section */}
              <div className="container mx-auto px-4 text-center mb-4">
                <b className="text-yellow-400 text-lg transition-all duration-300 ease-in-out hover:text-white">
                  POPULAR CITIES:
                </b>
                <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-2">
                  {/* Pune Button */}
                  <a
                    href="/Pune"
                    className="relative inline-block px-8 sm:px-16 md:px-20 py-4 rounded-full 
                               bg-gradient-to-r from-blue-400 to-yellow-300 
                               text-gray-800 font-bold uppercase shadow-md 
                               transform transition-all duration-500 ease-in-out 
                               hover:scale-105 hover:bg-gradient-to-r hover:from-green-300 hover:to-green-200 hover:shadow-lg hover:text-gray-900"
                  >
                    Pune
                  </a>

                  {/* Mumbai Button */}
                  <a
                    href="/Mumbai"
                    className="relative inline-block px-8 sm:px-16 md:px-20 py-4 rounded-full 
                               bg-gradient-to-r from-blue-400 to-yellow-300 
                               text-gray-800 font-bold uppercase shadow-md 
                               transform transition-all duration-500 ease-in-out 
                               hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 hover:shadow-lg hover:text-white"
                  >
                    Mumbai
                  </a>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-300 my-8" />

              {/* Quick Links Section */}
              <div className="container mx-auto px-4 text-center mb-8">
                <b className="text-yellow-400 transition-all duration-300 ease-in-out hover:text-white">
                  QUICK LINKS:
                </b>
                <div className="mt-2 flex flex-wrap justify-center">
                  {[
                    "HOME",
                    "UPDATES",
                    "ABOUT",
                    "SERVICES",
                    "CONTACT US",
                    "CAREER",
                    "FAQ's",
                    "PRIVACY POLICY",
                    "TERMS & CONDITIONS",
                  ].map((link, i) => (
                    <a
                      key={i}
                      href="/"
                      className="text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-black mx-2 mb-2 sm:mb-0"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-300 my-8" />

              {/* Designed by Section */}
              <div className="container mx-auto px-4 text-center mb-8">
                <h4 className="text-yellow-400 transition-all duration-300 ease-in-out hover:text-white">
                  DESIGNED BY
                </h4>
                <a
                  href="https://cobaztech.com"
                  target="_blank"
                  className="text-white transition-all duration-300 ease-in-out font-semibold block mt-1 hover:text-black hover:scale-105"
                >
                  COBAZTECH
                </a>
              </div>

              {/* Social Media Section */}
              <div className="container mx-auto px-4 text-center mt-6">
                <span className="flex justify-center flex-wrap">
                  <a
                    href="https://wa.me/9130030054"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                  >
                    <img
                      className="w-8 h-8 inline-block mb-2"
                      src="images/whatsapp.png"
                      alt="WhatsApp"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/Aimcab"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                  >
                    <img
                      className="w-8 h-8 inline-block mb-2"
                      src="images/facebook.png"
                      alt="Facebook"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@AimCab"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                  >
                    <img
                      className="w-8 h-8 inline-block mb-2"
                      src="images/youtube.png"
                      alt="YouTube"
                    />
                  </a>
                  <a
                    href="https://twitter.com/aim_cab"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                  >
                    <img
                      className="w-8 h-8 inline-block mb-2"
                      src="images/twitter.png"
                      alt="Twitter"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aim-cab-77356b208/"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                  >
                    <img
                      className="w-8 h-8 inline-block mb-2"
                      src="images/linked-in.png"
                      alt="LinkedIn"
                    />
                  </a>
                  <a
                    href="https://join.skype.com/invite/sRT2FTyb7d1H"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                  >
                    <img
                      className="w-8 h-8 inline-block mb-2"
                      src="images/skype.png"
                      alt="Skype"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/aimcabs/"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                  >
                    <img
                      className="w-8 h-8 inline-block mb-2"
                      src="images/instagram.png"
                      alt="Instagram"
                    />
                  </a>
                </span>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="container mx-auto px-4 text-center">
              <p className="transition-all duration-300 ease-in-out hover:text-green-200">
                &copy; {new Date().getFullYear()} Aim Cab. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
