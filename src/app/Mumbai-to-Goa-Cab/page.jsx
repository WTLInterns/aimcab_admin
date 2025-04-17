"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaCar, FaRoute, FaMapMarkedAlt, FaMoneyBillWave, FaQuestionCircle, FaInfoCircle } from "react-icons/fa"
import { MdAirportShuttle, MdPayment } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { HiOutlineGift } from "react-icons/hi"
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../container/component/Navbar'
import Footer from '../../container/component/Footer';
import About_Aimcab from '../../components/About_Aimcab';

export default function MumbaiToGoa() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(headingRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8
    })
    .from(paragraphRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.6
    }, "+=0.2")
  }, []);

  return (
    <div>
      
      {/* Meta Tags */}
      <Head>
        <title>Mumbai to Goa Cab Service | Aim Cab Booking</title>
        <meta name="description" content="Book Mumbai to Goa cab with Aim Cab for a smooth, budget-friendly ride. One-way & round-trip taxi service with expert drivers available." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Goa-Cab-Service" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="Mumbai To Goa Cab Services, Mumbai To Goa Cab, mumbai to goa cab booking, cab fare from mumbai to goa, mumbai to goa cab fare, Cab Services in Goa" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Navbar />
      
      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white py-12 md:py-20 text-center">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Mumbai to Goa Cab Service
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Your Ultimate Travel Guide
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center">
        Mumbai to Goa Cab Services – Comfortable & Affordable Travel
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r mt-24 from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Reliable Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, your reliable partner for Mumbai to Goa cab services. Whether you're visiting for business, leisure, or a beach vacation, Goa, located on India's western coast, is a paradise offering beautiful beaches, vibrant nightlife, and rich Portuguese heritage. Our Mumbai to Goa cab service ensures that your travel experience is as comfortable and seamless as possible, whether you're visiting for a weekend getaway or planning a longer stay.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            This guide provides an in-depth look into our Mumbai to Goa cab services, the booking process, the road trip experience, top attractions in Goa, pricing details, and why Aimcab is the best choice for your next road trip to Goa.
          </p>
        </div>
      </section>
      
      {/* Service Options */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3 mb-6">🧭 Service Options</h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Oneway Cab Service</h5>
            <p className="text-gray-600">
              Our one-way cab service from Mumbai to Goa is perfect for travelers who need a direct ride to Goa without the return journey. Whether it's for a beach vacation, business trip, or personal visit, our one-way service offers the flexibility and ease of a comfortable, direct ride without the need for planning a return trip. We handle everything, so you can focus on your vacation.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              For travelers who plan to visit Goa and return to Mumbai, we offer round-trip cab services. When you choose a round-trip, we'll take care of the entire journey, ensuring that you get to Goa safely and comfortably, and return to Mumbai at the scheduled time. You can book your Mumbai to Goa taxi and enjoy a hassle-free experience both ways.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              If you're flying into Mumbai International Airport and need a ride to Goa, we offer airport pickup and drop services. Whether you're traveling for business, pleasure, or vacation, we ensure that you are picked up on time and transported to Goa in comfort. Similarly, we also offer Goa to Mumbai airport taxi services to ensure that your airport transfers are smooth and timely.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛒 Booking Process</h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book Online via Website</h5>
            <p className="text-gray-600">
              Booking your Mumbai to Goa cab online is fast and easy. Just visit Aimcab.com, enter your pickup and drop-off locations, choose the type of vehicle you prefer, and confirm your booking. You'll receive an instant confirmation with your trip details, including the driver's contact information, estimated pickup time, and other essential information.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              If you prefer a more personalized booking experience, you can book your Mumbai to Goa cab over the phone. Our customer service team is available 24/7 to assist you with booking, provide pricing details, and help you select the best vehicle for your needs. Whether it's a last-minute trip or a planned journey, our team will ensure your Mumbai to Goa cab booking is confirmed in no time.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              For on-the-go travelers, the Aimcab mobile app is the best way to book your Mumbai to Goa taxi service. Available for both Android and iOS, the app allows you to book a ride in just a few clicks, track your cab in real-time, communicate directly with your driver, and make secure payments. It's a convenient option for anyone who prefers managing their bookings from a smartphone.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Goa</h5>
            <p className="text-gray-700 mb-4">
              The drive from Mumbai to Goa is an enjoyable and scenic experience. Located approximately 600 kilometers from Mumbai, the journey typically takes around 10 to 12 hours, depending on traffic and road conditions. The most commonly used route is via National Highway 66 (NH66). This route is well-maintained and provides a smooth driving experience with beautiful coastal views.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai → Panvel → Alibaug → Pen → Kolhapur → Goa
            </p>
            <p className="text-gray-700">
              Your journey starts from Mumbai, traveling through Panvel and Alibaug, before moving through the scenic coastal route via Pen and Kolhapur. As you approach Goa, you'll begin to see the beautiful beaches and the vibrant atmosphere that makes this destination so special.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              The Mumbai to Goa road trip is one of those journeys where the experience itself is as rewarding as the destination. Here's what you can expect:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li><strong>From City to Coast:</strong> The drive begins with the busy streets of Mumbai, but as you move towards Panvel, the bustling city slowly transforms into beautiful coastal views and rural landscapes.</li>
              <li><strong>Scenic Views:</strong> As you drive through National Highway 66, you'll pass beautiful views of the Arabian Sea, small coastal towns, and lush greenery. The route is especially stunning during the monsoon season.</li>
              <li><strong>Smooth Roads:</strong> The NH66 is well-maintained, offering a smooth, pleasant drive with less traffic as you travel through the coastal route.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              The road trip from Mumbai to Goa offers a mix of urban convenience and coastal beauty, making it an enjoyable journey that sets the tone for your time in Goa.
            </p>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">600 km</div>
              <div className="text-gray-600 mt-2">Distance</div>
            </div>
            <div className="mx-8 text-gray-400">|</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">10-12 hrs</div>
              <div className="text-gray-600 mt-2">Travel Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tourist Attractions */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🏞️ Tourist Places & Attractions</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Goa</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Alibaug</h6>
                <p className="text-gray-600">Located about 100 kilometers from Mumbai, Alibaug is a coastal town known for its beautiful beaches, historic forts, and serene atmosphere.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Kolhapur</h6>
                <p className="text-gray-600">A significant city known for its temples, historical sites, and famous Kolhapuri cuisine. Popular spots include the Mahalaxmi Temple and Rankala Lake.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Goa</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Baga Beach</h6>
                <p className="text-gray-600">One of the most popular beaches in Goa, known for its vibrant nightlife, water sports, and beach shacks.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Old Goa</h6>
                <p className="text-gray-600">A UNESCO World Heritage Site featuring beautiful Portuguese-era churches and cathedrals.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Dudhsagar Falls</h6>
                <p className="text-gray-600">A majestic waterfall located on the Goa-Karnataka border, surrounded by lush greenery.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Fort Aguada</h6>
                <p className="text-gray-600">A 17th-century Portuguese fort offering panoramic views of the Arabian Sea.</p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">What Travelers Can Do and Explore in Goa</h5>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Beach Activities</h6>
            <p className="text-gray-600">Enjoy water sports, beach volleyball, or simply relax on Goa's beautiful beaches.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Nightlife</h6>
            <p className="text-gray-600">Experience Goa's vibrant nightlife with beach parties, clubs, and live music.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Cultural Exploration</h6>
            <p className="text-gray-600">Discover Goa's rich Portuguese heritage through its architecture, cuisine, and traditions.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Adventure Sports</h6>
            <p className="text-gray-600">Try parasailing, jet skiing, or scuba diving in Goa's clear waters.</p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">💰 Cab Fare & Pricing</h4>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Cab Type</th>
                <th className="py-3 px-4 text-left">Price (₹/KM)</th>
                <th className="py-3 px-4 text-left">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-blue-50">
                <td className="py-3 px-4"><strong>Sedan (Dzire, Etios)</strong></td>
                <td className="py-3 px-4 font-semibold text-[#76453B]">₹11/km</td>
                <td className="py-3 px-4">Budget-friendly travel</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="py-3 px-4"><strong>SUV (Ertiga, Xylo)</strong></td>
                <td className="py-3 px-4 font-semibold text-[#76453B]">₹14/km</td>
                <td className="py-3 px-4">Family trips & extra luggage space</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="py-3 px-4"><strong>Luxury (Innova Crysta)</strong></td>
                <td className="py-3 px-4 font-semibold text-[#76453B]">₹18/km</td>
                <td className="py-3 px-4">Premium comfort & business travel</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="py-3 px-4"><strong>Tempo Traveller</strong></td>
                <td className="py-3 px-4 font-semibold text-[#76453B]">₹25/km</td>
                <td className="py-3 px-4">Group trips & office outings</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <h5 className="font-bold text-[#76453B] mb-2">Additional Information:</h5>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Toll and parking excluded</li>
            <li>No waiting charges</li>
            <li>No kilometer limit</li>
            <li>Driver's allowance included</li>
            <li>No night halt charges</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Aimcab */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🚖 Why Choose Aimcab – Our Specialties</h4>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We ensure all our cabs are regularly cleaned and maintained to provide you with a hygienic and comfortable ride.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We value your time, which is why we guarantee timely pickups and drops for your Mumbai to Goa taxi service.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> We appreciate new customers, and to make your first ride with us even more special, we offer a complimentary gift for new users.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> For your safety and peace of mind, all our vehicles come equipped with GPS tracking, allowing you to track your ride in real-time.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer service team is available around the clock to assist with bookings, queries, or any concerns you may have during your journey.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the distance between Mumbai and Goa?</h5>
            <p className="text-gray-700 mt-1">The distance from Mumbai to Goa is approximately 600 kilometers, and the journey usually takes about 10 to 12 hours.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Goa cab?</h5>
            <p className="text-gray-700 mt-1">You can book your Mumbai to Goa taxi service online via our website, by calling our customer service, or using the Aimcab app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the fare for a one-way Mumbai to Goa cab?</h5>
            <p className="text-gray-700 mt-1">The fare depends on the type of vehicle you choose. For instance, Sedans start at ₹11/km.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer airport transfer services from Mumbai to Goa?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Mumbai to Goa airport transfers, ensuring timely pickups and comfortable transfers.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip cab for Mumbai to Goa?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your Mumbai to Goa journey and back.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, we provide transparent pricing with no hidden charges.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best attractions in Goa?</h5>
            <p className="text-gray-700 mt-1">Baga Beach, Old Goa, Dudhsagar Falls, and Fort Aguada are some of the top attractions in Goa.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer group trips from Mumbai to Goa?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Tempo Traveller services for group trips.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <About_Aimcab />

      <Footer />
    </div>
  )
}