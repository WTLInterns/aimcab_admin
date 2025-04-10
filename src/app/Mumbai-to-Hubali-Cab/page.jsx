"use client"
import React from 'react'
import Head from 'next/head'
import { gsap } from 'gsap';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import Navbar from '../../container/component/Navbar';
import Footer from '../../container/component/Footer';
import About_Aimcab from '../../components/About_Aimcab';
const Page = () => {
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
    <>
      <Head>
        <title>Mumbai to Hubli Cab | Safe & Budget-Friendly Taxi</title>
        <meta name="description" content="Book Mumbai to Hubli cab with Aim Cab for a comfortable and affordable travel experience. Enjoy one-way & round-trip taxi service with expert drivers." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Hubli-Cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="Mumbai To Hubli Cab, Mumbai To Hubli Cab Services, mumbai to Hubli book cab, mumbai to Hubli book cabs online, mumbai to Hubli cabs booking, Cab Service in Hubli, cab fare from mumbai to Hubli" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div>
        {/* Header */}
        <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-yellow-500 py-12 md:py-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Mumbai to Hubli Cab Service
            </h1>
            <p 
              ref={paragraphRef}
              className="text-xl md:text-2xl mb-8 font-light"
            >
              Your Ultimate Guide to a Comfortable and Hassle-Free Journey
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
        </header>

        <BookingForm />

        {/* Service Description */}
        <section className="mt-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🚖</span> Service Options
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                At Aimcab, we understand that each trip is unique, which is why we offer a range of flexible Mumbai to Hubli cab services to cater to different needs and preferences.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">Oneway Cab Service</h4>
                  <p className="text-gray-600">Perfect for travelers who want a direct, no-hassle ride to their destination without worrying about booking a return trip.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">Roundtrip Cab Service</h4>
                  <p className="text-gray-600">Ideal for those who plan to return to Mumbai after their visit to Hubli, offering the best value and convenience.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">Airport Pickup & Drop</h4>
                  <p className="text-gray-600">Ensures a smooth and convenient transition for those flying in or out of Hubli, with punctual and comfortable transfers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="mt-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🛒</span> Booking Process
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">1. Book Online via Website</h4>
                  <p className="text-gray-600">Visit Aimcab's booking page, enter your details, choose your cab type, and get instant confirmation with estimated fare.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">2. Book On Call</h4>
                  <p className="text-gray-600">Call our customer support team for a personal touch. Our agents will guide you through the booking process.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">3. Book Through App</h4>
                  <p className="text-gray-600">Use our mobile app to book with a few taps, track your ride in real-time, and manage your booking effortlessly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Road Trip Guide */}
        <section className="mt-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🛣️</span> Road Trip Guide
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[#76453B] mb-2">Route Information</h4>
                  <p className="text-gray-600 mb-4">
                    The most common route via NH4 is approximately 660 kilometers, taking 10-12 hours depending on traffic conditions.
                  </p>
                  <h4 className="font-bold text-[#76453B] mb-2">Travel Experience</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Well-maintained NH4 highway</li>
                    <li>Clean rest stops and food joints</li>
                    <li>Pass through Pune and Kolhapur</li>
                    <li>Scenic Western Ghats views</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#76453B] mb-2">Travel Tips</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Start early to avoid traffic</li>
                    <li>Carry water and snacks</li>
                    <li>Take breaks at scenic spots</li>
                    <li>Check weather conditions</li>
                    <li>Keep emergency numbers handy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tourist Places & Attractions */}
        <section className="mt-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🏞️</span> Tourist Places & Attractions
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[#76453B] mb-2">Places to Visit Between Mumbai and Hubli</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Lonavala and Khandala - Famous hill stations</li>
                    <li>Pune - Cultural capital with historical landmarks</li>
                    <li>Kolhapur - Ancient temples and local cuisine</li>
                    <li>Mahalakshmi Temple and Rankala Lake</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#76453B] mb-2">Must-Visit Spots in Hubli</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Unkal Lake</li>
                    <li>Chandramouleshwara Temple</li>
                    <li>Nehru Stadium</li>
                    <li>Hubli Fort</li>
                    <li>Silk weaving industry markets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cab Fare & Pricing */}
        <section className="mt-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">💰</span> Cab Fare & Pricing
              </h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-max">
                  <thead>
                    <tr className="bg-blue-50 text-blue-900">
                      <th className="p-3 text-left font-semibold">Cab Type</th>
                      <th className="p-3 text-left font-semibold">Price (₹/KM)</th>
                      <th className="p-3 text-left font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">Sedan (Dzire, Etios)</td>
                      <td className="p-3 font-medium text-green-600">₹11/km</td>
                      <td className="p-3 text-gray-600">Budget-friendly travel</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">SUV (Ertiga, Xylo)</td>
                      <td className="p-3 font-medium text-green-600">₹14/km</td>
                      <td className="p-3 text-gray-600">Family trips & luggage space</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">Luxury (Innova Crysta)</td>
                      <td className="p-3 font-medium text-green-600">₹18/km</td>
                      <td className="p-3 text-gray-600">Premium comfort & business travel</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">Tempo Traveller</td>
                      <td className="p-3 font-medium text-green-600">₹25/km</td>
                      <td className="p-3 text-gray-600">Group trips & office outings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-[#76453B] mb-2">Additional Information:</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Toll and parking charges are not included in the fare</li>
                  <li>No waiting charges</li>
                  <li>No kilometer limit</li>
                  <li>Driver's allowance is included</li>
                  <li>No night halt charges</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Aimcab */}
        <section className="mt-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🚖</span> Why Choose Aimcab
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">Always Neat & Clean Cabs</h4>
                  <p className="text-gray-600">We prioritize hygiene and cleanliness, ensuring that our vehicles are sanitized and spotless for every ride.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">On-Time Guarantee</h4>
                  <p className="text-gray-600">We understand the importance of being on time, and our drivers are committed to ensuring punctual arrivals.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">GPS Tracking</h4>
                  <p className="text-gray-600">Every cab in our fleet is equipped with GPS tracking, allowing you to track your ride in real-time.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">24x7 Helpline</h4>
                  <p className="text-gray-600">Our customer support team is always ready to assist you with any questions or concerns.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">Complimentary Gift</h4>
                  <p className="text-gray-600">We welcome new customers with a complimentary gift as a token of appreciation.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">Experienced Drivers</h4>
                  <p className="text-gray-600">Professional and experienced drivers ensure a safe and comfortable journey.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">❓</span> Frequently Asked Questions
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#76453B]">How can I book a cab from Mumbai to Hubli?</h4>
                  <p className="text-gray-600 mt-1">You can book through our website, app, or by calling our customer support team.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#76453B]">What is the fare for a Mumbai to Hubli cab?</h4>
                  <p className="text-gray-600 mt-1">The fare depends on the type of vehicle you choose, starting from ₹11/km for budget sedans.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#76453B]">Is there a limit on the kilometers I can travel?</h4>
                  <p className="text-gray-600 mt-1">No, we do not impose any kilometer limits on our journeys.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#76453B]">Do you offer roundtrip services?</h4>
                  <p className="text-gray-600 mt-1">Yes, we offer roundtrip services from Mumbai to Hubli for your convenience.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#76453B]">How can I track my ride during my journey?</h4>
                  <p className="text-gray-600 mt-1">You can track your ride in real-time through our mobile app.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About_Aimcab  />
        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] rounded-xl shadow-lg p-6 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">🚗 Book your Mumbai to Hubli cab now!</h4>
            <p className="text-blue-100">
              Enjoy the best Mumbai to Hubli cab service with Aim Cab. Get the lowest fares, professional drivers, and a hassle-free booking experience.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Page;