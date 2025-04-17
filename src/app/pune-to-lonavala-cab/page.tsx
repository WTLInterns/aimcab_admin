"use client"
import Head from "next/head"
import BookingForm from "../../components/BookingForm";
import { useEffect, useRef } from 'react';
import About_Aimcab from '../../components/About_Aimcab';
import Footer from "../../container/component/Footer";
import { gsap } from 'gsap';

import Navbar from '../../container/component/Navbar';
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
     <Navbar/>
      <Head>
        <title>Pune to Lonavala Cab Service | Affordable & Comfortable Taxi</title>
        <meta
          name="description"
          content="Book a Pune to Lonavala cab with Aim Cab for a comfortable, affordable, and hassle-free ride. Enjoy one-way & round-trip taxi services with professional drivers."
        />
        <link rel="canonical" href="https://aimcab.com/Pune-to-Lonavala-Cab-Service" />
        <meta name="author" content="Aim Cab" />
        <meta
          name="keywords"
          content="pune to lonavala cab, pune to lonavala taxi, lonavala to pune cab, cab booking in pune, pune to lonavala one way cab, pune to lonavala cab fare, pune to lonavala travel"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div>
          <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] font-semibold text-yellow-500 py-12 md:py-20 text-center overflow-hidden">
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
          
          {/* <div 
            ref={buttonsRef}
            className="flex justify-center space-x-4"
          >
            <button className="bg-white text-[#76453B] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book Now
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#76453B] transition-all duration-300">
              Call Us
            </button>
          </div> */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>

        <h2 className="text-3xl font-bold mt-4 text-center">
          Pune to Lonavala Cab - Affordable & Comfortable Taxi Service
        </h2>

        <BookingForm />

        {/* Best Cab Service Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-extrabold text-[#76453B]">
            🚖 Best Pune to Lonavala Cab Service at <span className="text-red-600">Lowest Price</span>
          </h2>
          <p className="mt-4 text-lg bg-white p-4 rounded-lg shadow-sm">
            Looking for a Pune to Lonavala cab that provides a seamless and budget-friendly ride? <strong className="text-blue-600">Aim Cab</strong> offers reliable, affordable, and comfortable taxi services with experienced drivers and well-maintained vehicles, ensuring a hassle-free journey.
          </p>
          <ul className="mt-6 text-lg space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span>
              <strong className="bg-yellow-100 px-2 py-1 rounded">Lowest Price Guaranteed</strong> – Starting from ₹11/km
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span>
              <strong>Safe & Comfortable Rides</strong> – Professional drivers & sanitized cabs
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span>
              <strong>24/7 Availability</strong> – Book anytime, anywhere
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span>
              <strong>Instant Online Booking</strong> – Quick confirmation at <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span>
              <strong>Transparent Pricing</strong> – No hidden charges
            </li>
          </ul>
        </section>

        {/* Why Choose Aim Cab Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-blue-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">🏆 Why Choose Aim Cab for Pune to Lonavala Taxi Service?</h3>
          <p className="mt-4 text-lg bg-blue-50 p-4 rounded-lg">
            With over <span className="text-blue-600 font-bold">2 lakh happy customers</span>, Aim Cab is your trusted travel partner for Pune to Lonavala taxi service. Here’s why:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Reliable & Always On Time
              </h5>
              <p className="ml-6">No delays, guaranteed punctuality</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Budget-Friendly Pricing
              </h5>
              <p className="ml-6">Get the lowest Pune to Lonavala cab fare with no hidden charges</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Multiple Car Options
              </h5>
              <p className="ml-6">Choose from Sedans, SUVs, Luxury Cars & Tempo Travellers</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> One-Way & Round-Trip Cabs
              </h5>
              <p className="ml-6">Flexible travel plans to suit your needs</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Easy Payment Options
              </h5>
              <p className="ml-6">Pay via cash, UPI, or online modes</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Customized Packages
              </h5>
              <p className="ml-6">For individuals, families, and corporate clients</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> 24/7 Customer Support
              </h5>
              <p className="ml-6">Assistance available anytime</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Safe & Sanitized Vehicles
              </h5>
              <p className="ml-6">Travel with peace of mind</p>
            </div>
          </div>
          <p className="mt-6 text-xl font-bold text-center bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-lg text-[#76453B]">
            🚖 Experience a stress-free ride with Aim Cab!
          </p>
        </section>

        {/* Cab Fare & Booking Details Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg">
          <h3 className="text-3xl font-extrabold text-[#76453B]">🚖 Pune to Lonavala Cab Fare & Booking Details</h3>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white">
                  <th className="p-4 text-left">Cab Type</th>
                  <th className="p-4 text-center">Price (₹/KM)</th>
                  <th className="p-4 text-left">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50">
                  <td className="p-4 font-medium">Sedan (Dzire, Etios)</td>
                  <td className="p-4 text-center text-green-600 font-bold">₹11/km</td>
                  <td className="p-4">Budget-friendly travel</td>
                </tr>
                <tr className="hover:bg-blue-50 bg-gray-50">
                  <td className="p-4 font-medium">SUV (Ertiga, Xylo)</td>
                  <td className="p-4 text-center text-green-600 font-bold">₹14/km</td>
                  <td className="p-4">Family trips & extra luggage space</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="p-4 font-medium">Luxury (Innova Crysta)</td>
                  <td className="p-4 text-center text-green-600 font-bold">₹18/km</td>
                  <td className="p-4">Premium comfort & business travel</td>
                </tr>
                <tr className="hover:bg-blue-50 bg-gray-50">
                  <td className="p-4 font-medium">Tempo Traveller</td>
                  <td className="p-4 text-center text-green-600 font-bold">₹25/km</td>
                  <td className="p-4">Group trips & office outings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Taxi Fare Estimate Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-green-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">💰 Estimated Pune to Lonavala Taxi Fare</h3>
          <ul className="mt-4 text-lg space-y-2">
            <li>Sedan: <strong>₹1,500 - ₹2,000</strong></li>
            <li>SUV: <strong>₹2,500 - ₹3,000</strong></li>
            <li>Luxury: <strong>₹3,500 - ₹4,000</strong></li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">📍 Toll charges are extra and may vary based on route conditions.</p>
        </section>

        {/* Cab Booking Options Section */}
        {/* <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">🚕 Pune to Lonavala Cab Booking Options</h3>
          <div className="mt-4 space-y-6 text-lg">
            <div>
              <p className="font-semibold">1️⃣ One-Way Pune to Lonavala Cabs</p>
              <p>
                Looking for a one-way cab? With Aim Cab, you only pay for a single journey, making it a budget-friendly option. Whether you’re traveling solo, with family, or for business, our well-maintained cabs ensure a smooth and comfortable ride. Wide selection of vehicles – Choose from sedans, SUVs, and luxury cars to suit your travel needs. Book instantly through <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a> and enjoy an affordable trip with transparent pricing and no hidden costs.
              </p>
            </div>
            <div>
              <p className="font-semibold">2️⃣ Round-Trip Pune to Lonavala Cabs</p>
              <p>
                Planning a return trip? Our round-trip cab service ensures you have a cab ready to bring you back. Whether you’re going for a weekend getaway or a business trip, enjoy a stress-free experience with fixed fares, professional drivers, and on-time pickups. With Aim Cab, your return journey is just as convenient as your onward trip.
              </p>
            </div>
            <div>
              <p className="font-semibold">3️⃣ Pune to Lonavala Shared Cab</p>
              <p>
                Traveling on a budget? Our Pune to Lonavala shared cab option is ideal for cost-conscious travelers. Share your ride with other passengers and split the cost without compromising on comfort. Our shared cab service ensures you enjoy a convenient, safe, and affordable journey while making new travel connections.
              </p>
            </div>
          </div>
        </section> */}

        {/* Travel Guide Section - Exact Data */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-gray-300">
          <h3 className="text-3xl font-extrabold text-[#76453B]">Pune to Lonavala Travel Guide</h3>
          <p className="mt-4 text-lg">
            <strong>🏞️ Distance & Route Details</strong><br />
            <strong>⏳ Travel Duration: </strong>Typically takes 1.5 to 2 hours, depending on traffic.<br />
            <strong>🛣️ Distance by Car: </strong>65 km via Mumbai-Pune Expressway.<br />
            <strong>💰 Toll Charges: </strong>Approximately ₹100 - ₹150.<br />
            <strong>🚲 Travel Tip: </strong>Early morning or evening travel is recommended for a smoother experience.
          </p>
          <p className="mt-4 text-lg">
            <strong>🚗 Top Attractions in Lonavala</strong><br />
            <strong>Bhushi Dam – </strong>A scenic dam perfect for a relaxing outing.<br />
            <strong>Tiger's Leap – </strong>A stunning viewpoint with breathtaking valley views.<br />
            <strong>Pawna Lake – </strong>A serene spot ideal for camping and boating.<br />
            <strong>Lohagad Fort – </strong>A historic fort offering panoramic views.<br />
            <strong>Karla & Bhaja Caves – </strong>Ancient Buddhist rock-cut caves with beautiful carvings.<br />
            <strong>Rajmachi Fort – </strong>A trekker’s paradise offering magnificent views.<br /> <br/>
            <strong>🏕️ Best Activities in Lonavala</strong> <br/>
            <strong>Camping & Bonfire </strong> at Pawna Lake <br/>
             <strong>Trekking </strong> to Lohagad & Rajmachi Forts <br/>
              <strong> Photography & Sightseeing  </strong>at waterfalls <br/>
               <strong>Exploring local cuisine - </strong>Don’t miss Chikki & Vada Pav <br />
              <strong>  Adventure sports -</strong> paragliding , zip-lining and more  <br />
           </p>
        </section>


        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-gray-300">
        <h4 className="text-3xl font-extrabold text-[#76453B]">🚖 Cabs in Lonavala & Car Rental Services</h4>


        <p className="mt-4 text-lg">
        If you're looking for cabs in Lonavala, Aim Cab provides local taxi service for sightseeing, day tours, and outstation trips. We also offer: <br/><br/> 
       
        <strong>Car Hire in Lonavala </strong> for personal & corporate use <br/>
       <strong>Self-Drive & Chauffeur-Driven </strong> Cars <br/>
       <strong>Luxury Car Rentals </strong>for special occasions <br/>
      <strong> Airport Transfers </strong> to & from Pune Airport <br/>




       </p>


          </section>
        {/* FAQs Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">❓ FAQs – Pune to Lonavala Cab Service</h3>
          <div className="mt-4 space-y-4 text-lg">
            <div>
              <p className="font-semibold">1. What is the Pune to Lonavala cab fare?</p>
              <p>The fare starts at ₹1,500 for a sedan and varies based on the car type and trip duration.</p>
            </div>
            <div>
              <p className="font-semibold">2. How long does it take to travel from Pune to Lonavala by taxi?</p>
              <p>The journey typically takes 1.5 to 2 hours, depending on road conditions.</p>
            </div>
            <div>
              <p className="font-semibold">3. Are toll charges included in the taxi fare?</p>
              <p>No, toll charges are extra and must be paid separately.</p>
            </div>
            <div>
              <p className="font-semibold">4. What cab options are available for travel?</p>
              <p>We offer Sedan, SUV, Luxury Cars, and Tempo Travellers.</p>
            </div>
            <div>
              <p className="font-semibold">5. Is a one-way cab service available?</p>
              <p>Yes, one-way cabs start at ₹1,500.</p>
            </div>
            <div>
              <p className="font-semibold">6. Can I book a round-trip cab?</p>
              <p>Yes, we offer flexible round-trip cabs.</p>
            </div>
            <div>
              <p className="font-semibold">7. What payment methods are accepted?</p>
              <p>Cash, UPI, and online payments.</p>
            </div>
            <div>
              <p className="font-semibold">8. Are your cabs sanitized and safe?</p>
              <p>Yes, all our cabs are regularly sanitized.</p>
            </div>
            <div>
              <p className="font-semibold">9. How can I book a cab?</p>
              <p>You can book instantly via our website <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a> or call our customer support.</p>
            </div>
            <div>
              <p className="font-semibold">10. Do you offer sightseeing packages in Lonavala?</p>
              <p>Yes, we have customized sightseeing packages for tourists.</p>
            </div>
          </div>
        </section>

        {/* Book Your Cab Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-extrabold">📞 Book Your Pune to Lonavala Cab Now!</h3>
          <p className="mt-4 text-xl">
            🚖 Experience the Best Pune to Lonavala Cab Service with Aim Cab.
          </p>
          <p className="mt-2 text-lg">
            Get the lowest fares, professional drivers, and a hassle-free booking experience. Book your ride today at <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a> and travel stress-free!
          </p>
        </section>

        {/* About Aim Cab Section */}
        <About_Aimcab  />

        {/* Footer */}
       <div> <Footer /></div>
      </div>
    </>
  );
};

export default Page;
