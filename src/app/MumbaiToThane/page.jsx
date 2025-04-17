"use client"
import React from 'react'
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
        <title>Mumbai to Thane Cab Service | Reliable & Affordable Taxi</title>
        <meta name="description" content="Book a Mumbai to Thane cab with Aim Cab for a safe, comfortable journey. One-way & round-trip cabs available with professional drivers." />
        <link rel="canonical" href="https://aimcab.com/mumbai-to-thane-cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="mumbai to thane cab, thane to mumbai cab, mumbai to thane taxi, thane to mumbai taxi, mumbai airport to thane cab, mumbai to thane cab service" />
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
            Mumbai to Thane Cab Service
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Your Reliable Travel Companion
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center text-[#76453B]">
        Mumbai to Thane Cab Services - Comfortable & Punctual Journey
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 mt-24 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, your trusted provider of Mumbai to Thane cab service. Whether you're planning a quick trip, a business meeting, or a family outing, we offer a seamless, comfortable, and affordable ride from Mumbai to Thane. With our fleet of well-maintained cars, experienced drivers, and multiple booking options, we ensure your journey is smooth, timely, and pleasant.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            In this comprehensive guide, we will explore everything you need to know about our Mumbai to Thane cab service, including various service options, the booking process, the road trip experience, the best tourist spots, pricing, and more.
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
              If you're looking for a one-way ride from Mumbai to Thane, our service is ideal for you. This option allows you to travel without worrying about return fares or extra charges. Whether you're going for a meeting, visiting family, or exploring Thane, our Mumbai to Thane cab service ensures a comfortable and punctual journey.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              If you're planning a roundtrip from Mumbai to Thane, we offer flexible options that suit your schedule. You can book a roundtrip cab for a seamless travel experience. Whether it's for business meetings, sightseeing, or special occasions, our Mumbai to Thane taxi service guarantees timely service.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              Need to get from Mumbai airport to Thane or vice versa? We offer Mumbai airport to Thane cab services, ensuring a timely, comfortable, and hassle-free transfer. Our experienced drivers are familiar with airport traffic and routes.
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
              Booking a Mumbai to Thane cab is easy through our website. Simply visit Aimcab.com, enter your travel details, and choose the type of vehicle that suits your needs. Our easy-to-use booking system allows you to make secure payments and receive instant booking confirmations.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              For those who prefer a more personalized touch, we offer the option to book your Mumbai to Thane taxi service over the phone. Call our customer support team, who will assist you in booking your ride and answer any questions.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              For tech-savvy travelers, we offer a mobile app that allows you to book a Mumbai to Thane taxi from anywhere. The Aimcab app is available for both Android and iOS, allowing you to easily schedule rides and track your taxi in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Thane</h5>
            <p className="text-gray-700 mb-4">
              The most common route for traveling from Mumbai to Thane is through the Eastern Express Highway (NH3). This highway is well-maintained, making the drive comfortable and smooth. The total distance from Mumbai to Thane is approximately <strong>30 kilometers</strong>, and the travel time usually ranges from <strong>45 minutes to 1.5 hours</strong>, depending on traffic conditions.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              While the journey from Mumbai to Thane is short, it's filled with interesting sights. As you leave the city, you'll see the contrast between the bustling streets of Mumbai and the more peaceful surroundings of Thane. As you near Thane, the roads open up, and the city is surrounded by lush greenery. You'll pass by local parks and lakes, such as Upvan Lake and Masunda Lake.
            </p>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">30 km</div>
              <div className="text-gray-600 mt-2">Distance</div>
            </div>
            <div className="mx-8 text-gray-400">|</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">45-90 min</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Thane</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Mulund</h6>
                <p className="text-gray-600">Located near Thane, this suburb is home to Tulsi Lake, a scenic spot perfect for relaxation.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Bhandup</h6>
                <p className="text-gray-600">You can visit Bhandup Pumping Station, which is a peaceful retreat with picturesque views.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Thane</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Upvan Lake</h6>
                <p className="text-gray-600">A serene, beautiful lake surrounded by lush greenery. It's a popular spot for picnics and evening walks.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Masunda Lake</h6>
                <p className="text-gray-600">Also known as Talao Pali, this lake is located near the heart of Thane and is popular for boating.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Bassein Fort</h6>
                <p className="text-gray-600">A historical fort dating back to the Portuguese era, located just a short drive from Thane.</p>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We ensure that all our cabs are regularly cleaned and sanitized.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We understand the value of your time. Our service is punctual.</p>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> All our cabs are equipped with GPS tracking.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer support team is available 24/7.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the distance from Mumbai to Thane?</h5>
            <p className="text-gray-700 mt-1">The distance from Mumbai to Thane is approximately 30 kilometers, and the journey takes about 45 minutes to 1.5 hours depending on traffic conditions.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Thane cab with Aimcab?</h5>
            <p className="text-gray-700 mt-1">You can book your Mumbai to Thane taxi service online through our website, by calling our customer support, or via our mobile app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the fare for a one-way Mumbai to Thane cab?</h5>
            <p className="text-gray-700 mt-1">The fare depends on the type of vehicle you choose. For example, Sedans start at ₹11/km.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you provide airport pickup and drop services from Mumbai to Thane?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Mumbai airport to Thane cab services, ensuring timely transfers for both arrivals and departures.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the cost of a Mumbai airport to Thane taxi?</h5>
            <p className="text-gray-700 mt-1">The fare varies depending on the cab type and distance, but it starts from ₹11/km for Sedans.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip taxi from Thane to Mumbai?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip cab services for travel from Thane to Mumbai and back.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges?</h5>
            <p className="text-gray-700 mt-1">No, our fares are fully transparent. There are no hidden charges, and you only pay for the kilometers traveled, excluding tolls and parking fees.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best attractions in Thane?</h5>
            <p className="text-gray-700 mt-1">Must-visit spots include Upvan Lake, Masunda Lake, and the historical Bassein Fort.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer cabs for group trips from Mumbai to Thane?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Tempo Traveller services for group trips and office outings.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <About_Aimcab/>

      <Footer />
    </div>
  )
}

export default page;