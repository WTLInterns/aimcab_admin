"use client"
import React from 'react'
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../container/component/Navbar'
import Footer from '../../container/component/Footer';
import About_Aimcab from '../../components/About_Aimcab';
import { FaCar, FaRoute, FaMapMarkedAlt, FaMoneyBillWave, FaQuestionCircle, FaInfoCircle } from "react-icons/fa"
import { MdAirportShuttle, MdPayment } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { HiOutlineGift } from "react-icons/hi"

const page = () => {
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
      <Navbar/>
      <Head>
        <title>Mumbai to Nippani Cab | Safe & Affordable Taxi</title>
        <meta name="description" content="Book Mumbai to Nippani cab with Aim Cab for a reliable and budget-friendly ride. One-way & round-trip taxi services with professional drivers." />
        <link rel="canonical" href="https://aimcab.com/mumbai-to-nippani-cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="mumbai to nippani cab, taxi service in nippani, how to reach nippani from mumbai, mumbai to nippani taxi, mumbai to nippani cab fare, nippani to mumbai cab, cab service from mumbai to nippani" />
        <meta name="robots" content="index, follow" />
      </Head>
      
      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white py-12 md:py-20 text-center">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Mumbai to Nippani Cab Service
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Comfortable and Convenient Journey
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center text-[#76453B]">
        Mumbai to Nippani Cab Services - Safe & Comfortable Journey
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 mt-24 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, your trusted partner for a seamless and comfortable journey from Mumbai to Nippani. Whether you're planning a short getaway, a weekend trip, or a long vacation, we offer the most reliable Mumbai to Nippani cab services tailored to meet your specific travel needs. Known for its serene beauty and cultural significance, Nippani is a wonderful destination in Karnataka. With our dedicated and well-maintained fleet, you can enjoy the scenic drive in style and comfort.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            This comprehensive guide will take you through our Mumbai to Nippani taxi services, the journey experience, booking options, and much more. Let's explore how Aimcab ensures you get the best out of your trip from Mumbai to Nippani.
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
              Our one-way cab service from Mumbai to Nippani is designed for travelers who need a direct, one-time journey. This service is perfect for business travelers, tourists, or anyone who just needs to travel to Nippani without worrying about a return trip.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              If you plan to return to Mumbai after your visit to Nippani, our roundtrip cab service is the perfect choice. Aimcab's roundtrip service is flexible and affordable, offering a convenient way to book both your journey to and from Nippani.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              For travelers flying into Mumbai or Nippani, Aimcab's airport pickup and drop service ensures a seamless transfer. Whether you're arriving at Chhatrapati Shivaji Maharaj International Airport in Mumbai or the nearest airport in Nippani.
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
              Our user-friendly website is the easiest way to book your Mumbai to Nippani cab. You can easily choose your pickup and drop-off locations, select your preferred cab type, and make secure payments. The process is quick and easy, with instant booking confirmation sent to your email or phone.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              For customers who prefer personal assistance, we offer a Mumbai to Nippani taxi booking service over the phone. Our customer service team is available to guide you through the booking process, answer any questions, and confirm your ride.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              For those who prefer to book on-the-go, the Aimcab mobile app is a great option. Available for both Android and iOS devices, the app allows you to book your Mumbai to Nippani cab with just a few taps.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Nippani</h5>
            <p className="text-gray-700 mb-4">
              The most common route for traveling from Mumbai to Nippani is via NH 48 and NH 52, which covers a distance of about <strong>370 km</strong> and takes approximately <strong>7 to 9 hours</strong>, depending on traffic. The route is well-maintained, and the drive itself is smooth, offering travelers an opportunity to relax and enjoy the journey.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai → Lonavala → Pune → Satara → Kolhapur → Nippani
            </p>
            <p className="text-gray-700">
              This route takes you through the popular hill station of Lonavala, the cultural city of Pune, and the historic town of Kolhapur before reaching Nippani. The roads are wide, and the drive is mostly smooth, with clear signs and facilities available along the way.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              As you drive from Mumbai to Nippani, you'll be treated to breathtaking views of the Western Ghats, especially as you near Pune and Satara. The winding roads offer spectacular views of the valleys, hills, and rivers, making the journey enjoyable and relaxing.
            </p>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">370 km</div>
              <div className="text-gray-600 mt-2">Distance</div>
            </div>
            <div className="mx-8 text-gray-400">|</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">7-9 hrs</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Nippani</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lonavala and Khandala</h6>
                <p className="text-gray-600">Famous hill stations with cool climate and beautiful surroundings, known for their viewpoints and waterfalls.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Pune</h6>
                <p className="text-gray-600">Cultural capital with historic sites, landmarks, and vibrant food scene.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Kolhapur</h6>
                <p className="text-gray-600">Known for its historic temples, especially the Mahalaxmi Temple, and delicious Kolhapuri cuisine.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Nippani</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Shree Nagareshwar Temple</h6>
                <p className="text-gray-600">Ancient temple dedicated to Lord Shiva, known for its beautiful architecture and spiritual significance.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Gokak Falls</h6>
                <p className="text-gray-600">Stunning waterfall surrounded by lush greenery, often called the "Niagara of Karnataka".</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Hidkal Dam</h6>
                <p className="text-gray-600">Picturesque dam offering beautiful views and a peaceful environment for relaxation.</p>
              </div>
            </div>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We ensure that every vehicle in our fleet is clean, sanitized, and well-maintained.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We understand the value of your time. Our drivers are punctual and ensure timely pick-ups and drops.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> As a token of appreciation, new customers receive a complimentary gift.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> For added safety and convenience, all of our vehicles are equipped with GPS tracking.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer support team is available round the clock, ensuring that you receive help whenever you need it.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How far is Nippani from Mumbai?</h5>
            <p className="text-gray-700 mt-1">Nippani is approximately 370 km from Mumbai, and the journey typically takes 7-9 hours by car.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Nippani cab?</h5>
            <p className="text-gray-700 mt-1">You can book a Mumbai to Nippani taxi online through our website, by calling our helpline, or using the Aimcab mobile app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the cost of a one-way trip from Mumbai to Nippani?</h5>
            <p className="text-gray-700 mt-1">The price depends on the type of vehicle you choose, with Sedans starting at ₹11/km.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip taxi from Nippani to Mumbai?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your Mumbai to Nippani journey and vice versa.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you provide a taxi service from Mumbai airport to Nippani?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Mumbai airport to Nippani taxi services, ensuring a smooth transfer from the airport to your destination.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges?</h5>
            <p className="text-gray-700 mt-1">No, there are no hidden charges. Our pricing is transparent with no additional fees, except for tolls and parking.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best tourist spots in Nippani?</h5>
            <p className="text-gray-700 mt-1">Some of the must-visit places in Nippani include Shree Nagareshwar Temple, Gokak Falls, and Hidkal Dam.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you provide taxis for group trips?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Tempo Traveller services, which are perfect for group trips.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <About_Aimcab  />

      <Footer />
    </div>
  )
}

export default page;