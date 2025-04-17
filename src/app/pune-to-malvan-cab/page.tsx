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
     <Navbar/>
      <div>
        <Head>
        <title>Pune to Malvan Cab | Hassle-Free & Affordable Taxi</title>
      <meta name="description" content="Book Pune to Malvan cab services with Aim Cab for a safe, reliable & comfortable journey. Affordable fares, 24/7 booking & professional drivers." />
      <link rel="canonical" href="https://aimcab.com/pune-to-malvan-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Malvan Cab, Pune To Malvan cab Services, Cab Services From Pune To Malvan, Pune To Malvan Cab Services charges, Best cab Services Pune To Malvan" />
      <meta name="robots" content="index, follow" />
        </Head>

        {/* Header */}
        <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white py-12 md:py-20 text-center ">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10  mx-auto px-4">
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
        Pune to Malvan Cab Services – Affordable & Comfortable Travel
        </h2>

        <BookingForm />

{/* Hero Section */}
<section className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white py-12 px-6 rounded-xl shadow-lg">
  <div className=" mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Pune to Malvan Cab Services with Aim Cab</h1>
    <p className="text-xl md:text-1xl mb-2">Looking for a reliable Pune to Malvan cab service? Aim Cab provides the best and most affordable cab services for your journey from Pune to Malvan. Whether you’re planning a family vacation, a solo trip, or a business visit, our Pune to Malvan cab ensures a comfortable and hassle-free experience.

</p>
  </div>
</section>

{/* Service Highlights */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-[#76453B] mb-6">Why Choose Aim Cab for Your Pune to Malvan Trip?</h2>
    <p className="text-lg text-gray-700 mb-6">
      Experience the perfect blend of comfort and affordability with Aim Cab's Pune to Malvan taxi service. Whether you're traveling for leisure or business, we ensure a smooth journey with professional drivers and well-maintained vehicles.
    </p>
    
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#76453B]">
        <h3 className="text-xl font-semibold text-[#76453B] mb-3">Lowest Fare Guarantee</h3>
        <p className="text-gray-700"> We offer Pune to Malvan cab services at the most competitive rates.</p>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-[#76453B]">
        <h3 className="text-xl font-semibold text-[#76453B] mb-3">24/7 Customer Support</h3>
        <p className="text-gray-700">Assistance available anytime for bookings and queries.</p>
      </div>
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-[#76453B]">
        <h3 className="text-xl font-semibold text-[#76453B] mb-3">Multiple Car Options</h3>
        <p className="text-gray-700">Choose from a variety of cars including hatchbacks, sedans, SUVs, and luxury vehicles.</p>
      </div>
      <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-[#76453B]">
        <h3 className="text-xl font-semibold text-[#76453B] mb-3">Reliable & Professional Drivers</h3>
        <p className="text-gray-700">Our drivers are well-trained and knowledgeable about the best routes.</p>
      </div>
    </div>
  </div>
</section>

{/* Pricing Section */}
<section className="mt-12 p-8 bg-gray-50 rounded-xl">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#76453B] mb-8">Pune to Malvan Cab Fare & Charges</h2>
    
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
          <tr>
            <th className="py-4 px-6 text-left">Cab Type</th>
            <th className="py-4 px-6 text-center">Passenger Capacity</th>
            <th className="py-4 px-6 text-right">Fare (Approx.)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-blue-50">
            <td className="py-4 px-6 font-medium">Hatchback</td>
            <td className="py-4 px-6 text-center">4</td>
            <td className="py-4 px-6 text-right">₹3,999</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="py-4 px-6 font-medium">Sedan</td>
            <td className="py-4 px-6 text-center">4</td>
            <td className="py-4 px-6 text-right">₹4,499</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="py-4 px-6 font-medium">SUV</td>
            <td className="py-4 px-6 text-center">6-7</td>
            <td className="py-4 px-6 text-right">₹5,999</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="py-4 px-6 font-medium">Luxury</td>
            <td className="py-4 px-6 text-center">4-6</td>
            <td className="py-4 px-6 text-right">₹8,999</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <p className="mt-4 text-sm text-gray-600 text-center">*Toll charges and state taxes may apply additionally</p>
  </div>
</section>

{/* Journey Info */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-[#76453B] mb-8">Distance, Toll Charges & Travel Time from Pune to Malvan by Cab</h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-blue-50 p-6 rounded-lg text-center">
        <div className="text-4xl font-bold text-[#76453B] mb-2">Distance</div>
        <div className="text-gray-700">Approximately 385 km</div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <div className="text-4xl font-bold text-[#76453B] mb-2">Travel Time
        </div>
        <div className="text-gray-700">Around 7-8 hours, depending on road conditions and traffic.</div>
      </div>
      <div className="bg-purple-50 p-6 rounded-lg text-center">
        <div className="text-4xl font-bold text-[#76453B] mb-2">Toll Charges</div>
        <div className="text-gray-700">Approximately ₹400 - ₹600 (may vary based on the route taken).</div>
      </div>
    </div>
  </div>
</section>

{/* Attractions Section */}
<section className="mt-12">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#76453B] mb-8">Pune to Malvan Travel Route & Attractions Along the Way</h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#76453B] mb-4">Enroute Attractions</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">📍</span>
            <span><strong>Mahabaleshwar:</strong> A famous hill station known for its stunning viewpoints and strawberries.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">📍</span>
            <span><strong>Kolhapur:</strong> Known for the Mahalakshmi Temple and Rankala Lake.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">📍</span>
            <span><strong>Tarkarli Beach:</strong> Perfect for scuba diving, snorkeling, and water sports.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">📍</span>
            <span><strong>Kankavli:</strong> A peaceful town before entering Malvan’s coastal beauty.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">📍</span>
            <span><strong>Sindhudurg Fort</strong> A historic fort built by Chhatrapati Shivaji Maharaj.</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#76453B] mb-4">Malvan Attractions</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">📍</span>
            <span><strong>Tarkarli Beach:</strong> Crystal-clear water, perfect for water sports and scuba diving.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">📍</span>
            <span><strong>Sindhudurg Fort:</strong> A 17th-century sea fort with breathtaking views.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">📍</span>
            <span><strong>Malvan Marine Sanctuary:</strong> Home to vibrant coral reefs and marine biodiversity.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">📍</span>
            <span><strong>Devbagh Beach:</strong> A serene beach with stunning sunrise and sunset views.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">📍</span>
            <span><strong>Rock Garden:</strong>  A beautiful ocean-side garden with spectacular wave views.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">📍</span>
            <span><strong>Rameshwar Temple:</strong>  A famous Shiva temple known for its architecture.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">📍</span>
            <span><strong>Chivla Beach:</strong> A quiet and less crowded beach for relaxation.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>




{/* FAQ Section */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#76453B] mb-8">Frequently Asked Questions</h2>
    
    <div className="space-y-6">
      {[
        {
          question: "What are the cab charges from Pune to Malvan?",
          answer: "Our cab fares start from ₹3,999, depending on the car type."
        },
        {
          question: "How long does it take to travel from Pune to Malvan by cab?",
          answer: "It takes around 7-8 hours to reach Malvan by road."
        },
        {
          question: "Do you offer one-way cab services from Pune to Malvan?",
          answer: "Yes, we offer both one-way and round-trip cab services."
        },
        {
          question: "Is it safe to travel to Malvan at night?",
          answer: "Yes, our cabs are equipped with GPS, and we ensure safe travel with professional drivers."
        },
        {
          question: "Are toll charges included in the fare?",
          answer: "Toll charges are additional and must be paid separately. Approximate toll charges for the Pune to Malvan route range between ₹400 - ₹600."
        },
        {
          question: " Can I book a cab from Pune Airport to Malvan?",
          answer: "Yes, we offer pick-up and drop-off services from Pune Airport."
        },
        {
          question: "What are the best sightseeing spots on the way to Malvan?",
          answer: "Mahabaleshwar, Kolhapur, Tarkarli Beach, and Sindhudurg Fort are some of the best places."
        },
        {
          question: "Can I choose my preferred cab model?",
          answer: "Yes, you can select from hatchbacks, sedans, SUVs, and luxury cars."
        },
        {
          question: "Do you offer discounts for round trips?",
          answer: "Yes, we have special discounts for round trips. Contact us for details."
        },
        {
          question: "How can I book Pune to Malvan cab services?",
          answer: <>
            You can book via our website <a href="https://aimcab.com" className="text-[#76453B] underline">aimcab.com</a> or call us at{" "}
            <a href="tel:+9191305454491" className="text-[#76453B] underline">+91 91305454491</a>.
          </>
        }
      ].map((faq, index) => (
        <div key={index} className="border-b border-gray-200 pb-4">
          <button className="flex justify-between items-center w-full text-left font-semibold text-lg text-[#76453B]">
            <span>{faq.question}</span>
            <span className="text-[#76453B] text-2xl">+</span>
          </button>
          <div className="mt-2 text-gray-700">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* About Us */}
<About_Aimcab  />

{/* CTA Section */}
<section className="mt-12 p-8 bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white rounded-xl shadow-xl">
  <div className=" mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">🚖 Book Your Pune to Malvan Cab Now!</h2>
    <p className="text-xl mb-8">Enjoy a comfortable and stress-free journey with Aim Cab’s Pune to Malvan cab services. Whether you’re traveling for leisure or business, we guarantee the best service at the lowest price.</p>
    
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="tel:+9191305454491" className="bg-white text-[#76453B] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-md">
        Call Now: +91 91305454491
      </a>
      <a href="https://aimcab.com" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#76453B] transition duration-300">
        Visit Our Website
      </a>
    </div>
    
    <div className="mt-8 flex justify-center space-x-4">
      <div className="bg-white bg-opacity-20 p-3 rounded-full">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
      <div className="bg-white bg-opacity-20 p-3 rounded-full">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="bg-white bg-opacity-20 p-3 rounded-full">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  </div>
</section>


        
        {/* Redesigned Footer */}
        
        
   

        <div> <Footer/></div>
      </div>
    </>
  );
};

export default page;