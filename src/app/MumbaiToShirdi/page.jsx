"use client"
import React from 'react'
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../container/component/Navbar'
import Footer from '../../container/component/Footer';

const page = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

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
      <Head>
        <title>Mumbai to Shirdi Cab | Safe & Budget-Friendly Taxi</title>
        <meta name="description" content="Book Mumbai to Shirdi cab with Aim Cab for a safe, budget-friendly journey. Enjoy one-way & round-trip taxi services with experienced drivers." />
        <link rel="canonical" href="https://aimcab.com/mumbai-to-shirdi-cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="mumbai to shirdi cab, distance between mumbai and shirdi, mumbai to shirdi taxi, shirdi to mumbai cab, shirdi to mumbai taxi, mumbai to shirdi cab service, mumbai to shirdi distance by road, mumbai to shirdi taxi service, mumbai airport to shirdi taxi, mumbai to shirdi cabs round trip, mumbai to shirdi distance by cab, mumbai to shirdi round trip taxi fare, mumbai to shirdi taxi price, mumbai to shirdi package by car, car rental mumbai to shirdi, how far is shirdi from mumbai, mumbai to shirdi cab charges, mumbai to shirdi one way cab" />
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
            Mumbai to Shirdi Cab Service
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Your Hassle-Free Travel Partner
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center text-[#76453B]">
        Mumbai to Shirdi Cab Services - Safe & Comfortable Journey
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, the leading cab service provider for travel between Mumbai and Shirdi. Whether you're visiting the famous Sai Baba Temple or exploring the serene town of Shirdi, we offer reliable, affordable, and comfortable Mumbai to Shirdi cab services. Our goal is to make your journey stress-free, safe, and enjoyable, ensuring that you reach your destination in comfort and style. With multiple service options, seamless booking processes, and competitive pricing, Aimcab is your go-to solution for intercity travel.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            In this guide, we'll walk you through our service options, booking process, the road trip from Mumbai to Shirdi, must-visit places on the way, detailed pricing, and more. So, whether you're traveling solo, with family, or with a group, here's everything you need to know about booking a Mumbai to Shirdi taxi with Aimcab.
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
              If you're planning a Mumbai to Shirdi one-way cab journey, we offer affordable rates and flexible options. Our one-way cab service is perfect for travelers who need to reach Shirdi from Mumbai without any hassle. There are no extra charges for waiting, and we ensure you reach your destination comfortably.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              For those traveling to Shirdi and planning to return to Mumbai, our Mumbai to Shirdi round trip taxi service is the ideal choice. Our drivers will pick you up from your desired location in Mumbai, drop you off at Shirdi, and wait for your return journey as per your scheduled time.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              If you're flying into Mumbai and need a taxi to Shirdi from Mumbai airport, Aimcab offers Mumbai airport to Shirdi taxi services. Our professional drivers will pick you up from the airport and ensure a smooth and comfortable ride to Shirdi.
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
              The easiest way to book a Mumbai to Shirdi cab is through our website. Simply visit our user-friendly booking portal, enter your pickup location, destination, and travel details, and select your preferred cab.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              For travelers who prefer personalized service, booking your Mumbai to Shirdi taxi over the phone is also an option. Just give us a call, and one of our friendly customer service representatives will assist you.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              For tech-savvy travelers, we also have a dedicated mobile app that allows you to book your Mumbai to Shirdi taxi service with ease. The app also provides real-time GPS tracking and payment options.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Shirdi</h5>
            <p className="text-gray-700 mb-4">
              The most common route for traveling from Mumbai to Shirdi is via the Mumbai Nashik Highway (NH3). This route covers a distance of approximately <strong>245 kilometers</strong> and takes around <strong>5 to 6 hours</strong> depending on traffic conditions.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai – Thane – Nashik – Shirdi
            </p>
            <p className="text-gray-700">
              Once you leave Mumbai, the drive through Thane and Nashik provides a scenic view of the lush greenery, rural landscapes, and serene villages. As you approach Nashik, you'll be greeted by the famous vineyards and scenic hills.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience and Scenic Views</h5>
            <p className="text-gray-700">
              Driving from Mumbai to Shirdi offers a unique experience, with the route passing through beautiful landscapes, vibrant villages, and scenic surroundings. The well-maintained roads make the journey comfortable, while the lush green fields, sprawling farms, and distant hills provide a peaceful view.
            </p>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">245 km</div>
              <div className="text-gray-600 mt-2">Distance</div>
            </div>
            <div className="mx-8 text-gray-400">|</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">5-6 hrs</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Shirdi</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Nashik</h6>
                <p className="text-gray-600">Known for its temples, vineyards, and scenic beauty. Don't miss the Trimbakeshwar Temple and Saptashrungi Temple.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Vani</h6>
                <p className="text-gray-600">A small village known for the Vani Temple, dedicated to the Goddess Vani.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Panchavati</h6>
                <p className="text-gray-600">A historic area in Nashik, where you can visit the Kalaram Sansthan, an ancient temple.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Shirdi</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Sai Baba Temple</h6>
                <p className="text-gray-600">The heart of Shirdi, this temple is dedicated to Sai Baba, attracting millions of devotees annually.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Dwarkamai Masjid</h6>
                <p className="text-gray-600">A significant historical site in Shirdi, it's where Sai Baba spent many years.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Shani Shingnapur</h6>
                <p className="text-gray-600">Located around 70 km from Shirdi, this village is famous for the Shani Temple.</p>
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We ensure that every cab is regularly cleaned and sanitized.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We value your time and strive to offer timely pick-ups and drops.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> As a token of appreciation for choosing Aimcab.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> Giving you peace of mind throughout your journey.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer service is always ready to assist you.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How far is Shirdi from Mumbai?</h5>
            <p className="text-gray-700 mt-1">The distance between Mumbai and Shirdi is approximately 245 kilometers, and it takes around 5 to 6 hours to reach by road.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Shirdi taxi?</h5>
            <p className="text-gray-700 mt-1">You can book a Mumbai to Shirdi cab online via our website, by calling our customer service, or through the Aimcab mobile app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the price of a one-way Mumbai to Shirdi trip?</h5>
            <p className="text-gray-700 mt-1">The price varies depending on the cab type, but generally starts from ₹11/km for a sedan.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you provide round-trip services?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Mumbai to Shirdi round trip taxi services, where we ensure timely pickups and drops.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a taxi from Mumbai airport to Shirdi?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer a convenient Mumbai airport to Shirdi taxi service, ensuring a seamless transfer from the airport to your destination.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, our pricing is transparent. There are no hidden charges, and the fare includes everything except tolls and parking.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I rent a car for a Mumbai to Shirdi trip?</h5>
            <p className="text-gray-700 mt-1">Yes, Aimcab offers car rental from Mumbai to Shirdi for those looking for a self-driven experience or specific vehicle needs.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold mb-6">🏢 About Aimcab</h4>
        
        <div className="text-white">
          <p className="mb-4">
            Aimcab has been a trusted name in the cab service industry since 2001. We have a fleet of over 50+ personal cabs and a network of 500+ registered cabs across India.
          </p>
          <p>
            With over 2,00,000+ happy customers and 3,000+ successful outstation trips, we are committed to providing a safe, reliable, and comfortable travel experience. Our dedication to punctuality, customer service, and professionalism has made us one of the leading choices for Mumbai to Shirdi cab services.
          </p>
        </div>
        
        <div className="mt-8 grid md:grid-cols-4 gap-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">50+</div>
            <div>Personal Cabs</div>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">500+</div>
            <div>Registered Cabs</div>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">2 Lakh+</div>
            <div>Happy Customers</div>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">3,000+</div>
            <div>Outstation Trips</div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a href="https://aimcab.com" className="inline-block bg-white hover:bg-gray-100 text-[#76453B] font-bold py-3 px-8 rounded-lg transition-colors">
            Book Your Cab Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default page;