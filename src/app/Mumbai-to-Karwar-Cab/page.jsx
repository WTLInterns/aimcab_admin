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
      <Navbar />
      <Head>
        <title>Mumbai to Karwar Cab | Affordable Taxi Services</title>
        <meta name="description" content="Book Mumbai to Karwar cab with Aim Cab for a safe and affordable ride. Get one-way, round-trip cab services with professional drivers and best fares." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Karwar-Cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="Mumbai To Karwar Cab, Mumbai To Karwar Cab Services, mumbai to Karwar book cab, mumbai to Karwar book cabs online, mumbai to Karwar cabs booking, Cab Service in Karwar, cab fare from mumbai to Karwar" />
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
              Mumbai to Karwar Cab Service
            </h1>
            <p 
              ref={paragraphRef}
              className="text-xl md:text-2xl mb-8 font-light"
            >
              Your Ultimate Travel Companion with Aimcab
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
                Aimcab understands that every traveler has unique requirements. That's why we offer a variety of flexible travel options to ensure you get the best ride from Mumbai to Karwar.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">Oneway Service</h4>
                  <p className="text-gray-600">Perfect for those who want to travel from Mumbai to Karwar without the need for a return trip.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">Roundtrip Service</h4>
                  <p className="text-gray-600">For travelers who want to go back to Mumbai after a few days in Karwar.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">Airport Pickup & Drop</h4>
                  <p className="text-gray-600">Professional drivers will be waiting for you at the airport, ready to assist with your luggage.</p>
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
                  <p className="text-gray-600">The simplest way to book your Mumbai to Karwar cab is through our website.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">2. Book On Call</h4>
                  <p className="text-gray-600">Call our customer service for a more personal touch. Our agents are available 24/7.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">3. Book Through the App</h4>
                  <p className="text-gray-600">Book a cab in just a few taps, track your ride in real time, and manage your booking effortlessly.</p>
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
                    The route via NH66 is about 670 kilometers and takes roughly 10-12 hours, depending on traffic conditions.
                  </p>
                  <h4 className="font-bold text-[#76453B] mb-2">Scenic Views</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Arabian Sea coastline</li>
                    <li>Western Ghats</li>
                    <li>Coastal towns like Ratnagiri and Malvan</li>
                    <li>Gokarna's beautiful beaches</li>
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
                  <h4 className="font-bold text-[#76453B] mb-2">Places to Visit Between Mumbai and Karwar</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Alibaug - Beach town with forts</li>
                    <li>Ratnagiri - Historical significance</li>
                    <li>Gokarna - Temples and beaches</li>
                    <li>Sawantwadi - Wooden toys and art</li>
                    <li>Kankavli - Nature views</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#76453B] mb-2">Must-Visit Spots in Karwar</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Karwar Beach</li>
                    <li>Om Beach</li>
                    <li>Kali River</li>
                    <li>Devbagh Beach</li>
                    <li>Karwar War Memorial</li>
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
                  <p className="text-gray-600">Our vehicles are meticulously cleaned and sanitized before each trip.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">On-Time Guarantee</h4>
                  <p className="text-gray-600">We guarantee on-time pick-up and drop-off for all our services.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">GPS Tracking</h4>
                  <p className="text-gray-600">Every cab is equipped with real-time GPS tracking for your safety.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">24x7 Helpline</h4>
                  <p className="text-gray-600">Round-the-clock customer support for all your needs.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">Complimentary Gift</h4>
                  <p className="text-gray-600">New users receive a complimentary gift with their first booking.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#76453B] mb-2">Experienced Drivers</h4>
                  <p className="text-gray-600">Professional and experienced drivers for a safe journey.</p>
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
                  <h4 className="font-bold text-[#76453B]">How do I book a cab from Mumbai to Karwar?</h4>
                  <p className="text-gray-600 mt-1">You can book through our website, app, or by calling our customer support team.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#76453B]">Is the cab fare from Mumbai to Karwar fixed?</h4>
                  <p className="text-gray-600 mt-1">Yes, the fare is based on distance and cab type, with no hidden charges.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#76453B]">Can I book a one-way cab from Mumbai to Karwar?</h4>
                  <p className="text-gray-600 mt-1">Yes, we offer both one-way and round-trip options.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#76453B]">Are the cabs comfortable for long-distance travel?</h4>
                  <p className="text-gray-600 mt-1">Yes, all our cabs are well-maintained and comfortable for long journeys.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#76453B]">What if I need to cancel or modify my booking?</h4>
                  <p className="text-gray-600 mt-1">We offer flexible cancellation and modification policies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About_Aimcab/>
        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] rounded-xl shadow-lg p-6 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">🚗 Book your Mumbai to Karwar cab now!</h4>
            <p className="text-blue-100">
              Enjoy the best Mumbai to Karwar cab service with Aim Cab. Get the lowest fares, professional drivers, and a hassle-free booking experience.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Page;