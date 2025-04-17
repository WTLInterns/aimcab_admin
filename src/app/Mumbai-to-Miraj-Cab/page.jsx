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
        <title>Mumbai to Miraj Cab | Affordable & Safe Taxi Ride</title>
        <meta name="description" content="Book a Mumbai to Miraj cab with Aim Cab for a comfortable, safe, and affordable ride. One-way & round-trip cab services available at best rates." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Miraj-Cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="Mumbai To miraj Cab, mumbai to miraj book cab, mumbai to miraj book cabs online, mumbai to miraj cabs booking, Cab Service in Miraj, cab fare from mumbai to Miraj" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div>
        <Navbar/>
        
        {/* Header */}
        <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-yellow-500 py-12 md:py-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Mumbai to Miraj Cab Service
            </h1>
            
            <p 
              ref={paragraphRef}
              className="text-xl md:text-2xl mb-8 font-light"
            >
              Your Perfect Travel Partner for a Comfortable Journey
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
        </header>

        {/* Main Title */}
        <h2 className="text-3xl font-bold mt-4 text-center">
          Mumbai to Miraj Cab Service - Affordable & Reliable Taxi Booking
        </h2>

        <BookingForm />

        {/* Service Description */}
        <section className="mt-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🚖</span> Best Mumbai to Miraj Cab Service
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Looking for a Mumbai to Miraj cab that is affordable, reliable, and comfortable? Aim Cab offers the best taxi booking service at the lowest price in the market, with fares starting at just ₹11/km. Whether you're traveling for business, leisure, or an urgent trip, our well-maintained cabs and professional drivers ensure a stress-free ride.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700"><strong className="text-[#76453B]">Lowest price in the market</strong> – Just ₹11/km!</span>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700"><strong className="text-[#76453B]">Safe & Reliable</strong> – Verified drivers & sanitized cabs</span>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700"><strong className="text-[#76453B]">On-time pickups & drop-offs</strong> – 24/7 availability</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Aim Cab */}
        <section className="mt-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🏆</span> Why Choose Aim Cab for Mumbai to Miraj Taxi?
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                With over 2 lakh happy customers, Aim Cab is a trusted name in the industry. Here's why we stand out:
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Affordable Pricing
                  </h4>
                  <p className="text-sm text-gray-600">Best price guarantee for Mumbai to Miraj trips</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                    Comfortable & Clean Cabs
                  </h4>
                  <p className="text-sm text-gray-600">Sedans, SUVs, Luxury Cars & Tempo Travellers</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                    </svg>
                    Flexible Trips
                  </h4>
                  <p className="text-sm text-gray-600">One-way & round-trip options available</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-[#76453B] mb-1 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    Multiple Payment Methods
                  </h4>
                  <p className="text-sm text-gray-600">Pay via cash, UPI, or online payments</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cab Options & Fare Details */}
        <section className="mt-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🚖</span> Mumbai to Miraj Cab Options & Fare Details
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
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            </svg>
                          </div>
                          <span>Sedan (Dzire, Etios)</span>
                        </div>
                      </td>
                      <td className="p-3 font-medium text-green-600">₹11/km</td>
                      <td className="p-3 text-gray-600">Budget-friendly travel</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            </svg>
                          </div>
                          <span>SUV (Ertiga, Xylo)</span>
                        </div>
                      </td>
                      <td className="p-3 font-medium text-green-600">₹14/km</td>
                      <td className="p-3 text-gray-600">Family trips & luggage space</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            </svg>
                          </div>
                          <span>Luxury (Innova Crysta)</span>
                        </div>
                      </td>
                      <td className="p-3 font-medium text-green-600">₹18/km</td>
                      <td className="p-3 text-gray-600">Premium comfort & business travel</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            </svg>
                          </div>
                          <span>Tempo Traveller</span>
                        </div>
                      </td>
                      <td className="p-3 font-medium text-green-600">₹25/km</td>
                      <td className="p-3 text-gray-600">Group trips & office outings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Guide */}
        <section className="mt-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🏞️</span> Mumbai to Miraj Travel Guide
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-[#76453B] mb-3">🌆 Places to Visit in Miraj</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Miraj Fort</strong> – A historic fort offering breathtaking views of the city.</li>
                  <li><strong>Shri Bhavani Museum</strong> – A museum showcasing local history and culture.</li>
                  <li><strong>Ganapati Temple</strong> – A famous temple known for its architecture.</li>
                  <li><strong>Miraj Musical Instruments Market</strong> – Famous for traditional musical instruments.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">❓</span> Frequently Asked Questions (FAQs)
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#76453B]">1. What is the Mumbai to Miraj cab fare?</h4>
                  <p className="text-gray-600 mt-1">The fare starts from ₹4,180 for a sedan and may vary based on the type of car and route conditions.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B]">2. How long does it take to travel from Mumbai to Miraj by taxi?</h4>
                  <p className="text-gray-600 mt-1">It takes around 6 to 8 hours depending on traffic and weather conditions.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B]">3. Are toll charges included in the Mumbai to Miraj taxi fare?</h4>
                  <p className="text-gray-600 mt-1">No, toll charges are extra and must be paid by the passenger as per actual costs.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B]">4. What are the cab options available for Mumbai to Miraj travel?</h4>
                  <p className="text-gray-600 mt-1">We offer Sedan, SUV, Luxury Cars, and Tempo Travellers based on your requirements.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B]">5. Is Mumbai to Miraj one-way cab service available?</h4>
                  <p className="text-gray-600 mt-1">Yes, we provide one-way cabs at an affordable price, starting from ₹4,180.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About_Aimcab/>
        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] rounded-xl shadow-lg p-6 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">🚗 Book your Mumbai to Miraj cab now & enjoy a smooth ride!</h4>
            <p className="text-blue-100">
              🚖 Enjoy the best Mumbai to Miraj cab service with Aim Cab.
              Get the lowest fares, professional drivers, and a hassle-free booking experience.
              Book your ride today at{" "}
              <a href="https://aimcab.com" className="text-white underline font-medium">
                aimcab.com
              </a>{" "}
              and travel stress-free!
            </p>
          </div>
        </section>

        {/* Footer */}
        <div><Footer/></div>
      </div>
    </>
  );
};

export default Page;