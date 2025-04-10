"use client"
import Head from "next/head"
import BookingForm from "../../components/BookingForm";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Footer from "../../container/component/Footer";
import About_Aimcab from '../../components/About_Aimcab';
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
      <Head>
        <title>Pune to Nashik Cab Service | Safe & Affordable Taxi</title>
        <meta
          name="description"
          content="Book a Pune to Nashik cab with Aim Cab for a safe, affordable, and hassle-free ride. Enjoy one-way & round-trip taxi services with professional drivers."
        />
        <link rel="canonical" href="https://aimcab.com/Pune-to-Nashik-Cab-Service" />
        <meta name="author" content="Aim Cab" />
        <meta
          name="keywords"
          content="pune to nashik cab, pune to nashik taxi, nashik to pune cab, cab booking in pune, pune to nashik one way cab, pune to nashik airport taxi, pune to nashik cab fare, pune to nashik travel"
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
          Pune to Nashik Cab - Book Affordable & Reliable Taxi Service
        </h2>

        <BookingForm />

        {/* Best Cab Service Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-extrabold text-[#76453B]">
            🚖 Best Pune to Nashik Cab Service at <span className="text-red-600">Lowest Price </span>
          </h2>
          <p className="mt-4 text-lg bg-white p-4 rounded-lg shadow-sm">
            Looking for a comfortable and budget-friendly Pune to Nashik cab? <strong className="text-blue-600">Aim Cab</strong> offers reliable and affordable taxi services starting at just <span className="text-green-600 font-bold text-xl">₹11/km</span>. Enjoy a smooth and hassle-free journey with professional drivers and well-maintained vehicles.
          </p>
          <ul className="mt-6 text-lg space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span> 
              <strong className="bg-yellow-100 px-2 py-1 rounded">Lowest price guaranteed</strong> – Starting from ₹11/km
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span> 
              <strong>Safe & Comfortable Rides</strong> – Verified drivers & sanitized cabs
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span> 
              <strong>24/7 Availability</strong> – Book anytime, anywhere
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span> 
              <strong>Hassle-Free Online Booking</strong> – Instant confirmation at <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span> 
              <strong className="bg-pink-100 px-2 py-1 rounded">No Hidden Charges</strong> – 100% transparent pricing
            </li>
          </ul>
        </section>

        {/* Why Choose Aim Cab Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-blue-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">🏆 Why Choose Aim Cab for Pune to Nashik Cab Booking?</h3>
          <p className="mt-4 text-lg bg-blue-50 p-4 rounded-lg">
            With over <span className="text-blue-600 font-bold">2 lakh happy customers</span>, Aim Cab is your trusted travel partner for Pune to Nashik taxi service. Here's why:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Best Pune to Nashik Cab Service
              </h5>
              <p className="ml-6">Reliable, safe, and punctual rides</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Affordable Pricing
              </h5>
              <p className="ml-6">Get the best Pune to Nashik cab fare with no hidden costs</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Comfortable & Clean Cabs
              </h5>
              <p className="ml-6">Choose from Sedans, SUVs, Luxury Cars & Tempo Travellers</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> One-Way & Round-Trip Options
              </h5>
              <p className="ml-6">Flexible booking as per your needs</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Multiple Payment Methods
              </h5>
              <p className="ml-6">Pay via cash, UPI, or online payments</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> 24/7 Customer Support
              </h5>
              <p className="ml-6">Get help anytime, day or night</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Reliable Pune to Nashik Cab Packages
              </h5>
              <p className="ml-6"> Customized for individuals, families, and corporate travelers.
              </p>
            </div>
          </div>
          <p className="mt-6 text-xl font-bold text-center bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-lg text-[#76453B]">
            🚕 Experience a comfortable & budget-friendly ride with Aim Cab!
          </p>
        </section>

        {/* Cab Fare & Booking Details Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg">
          <h3 className="text-3xl font-extrabold text-[#76453B]">🚖 Pune to Nashik Cab Fare & Booking Details</h3>
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
          <h3 className="text-3xl font-extrabold text-[#76453B]">💰 Pune to Nashik Taxi Fare Estimate</h3>
          <ul className="mt-4 text-lg space-y-2">
            <li>Sedan: <strong>₹2,500 - ₹3,000</strong></li>
            <li>SUV: <strong>₹3,500 - ₹4,000</strong></li>
            <li>Luxury: <strong>₹5,000 - ₹6,000</strong></li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">📍 Prices may vary based on toll charges & route conditions.</p>
        </section>

        {/* Cab Booking Options Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">🚕 Pune to Nashik Cab Booking Options</h3>
          <div className="mt-4 space-y-6 text-lg">
            <div>
              <p className="font-semibold">1️⃣ One-Way Pune to Nashik Cabs</p>
              <p>
                Looking for a one-way cab? With Aim Cab, you only pay for a single journey, making it a budget-friendly option. Whether you're traveling solo, with family, or for business, our well-maintained cabs ensure a smooth and comfortable ride. Select from a variety of vehicles, such as sedans, SUVs, and premium cars, to match your travel needs. Book instantly through <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a> and enjoy an affordable trip with transparent pricing and no hidden costs.
              </p>
            </div>
            <div>
              <p className="font-semibold">2️⃣ Round-Trip Pune to Nashik Cabs</p>
              <p>
                Planning a return trip? Our Nashik to Pune cab service is the perfect solution for those who need a cab for both journeys. Whether you're going for a weekend getaway or a business trip, our round-trip service ensures you have a cab ready to bring you back. Enjoy a stress-free experience with fixed fares, professional drivers, and on-time pickups. With Aim Cab, your return journey is just as convenient as your onward trip.
              </p>
            </div>
            <div>
              <p className="font-semibold">3️⃣ Pune to Nashik Shared Cab</p>
              <p>
                Traveling on a budget? Our Pune to Nashik shared cab option is ideal for cost-conscious travelers. Share your ride with other passengers and split the cost without compromising on comfort. Our shared cab service ensures you enjoy a convenient, safe, and affordable journey while making new travel connections. It's a great choice for solo travelers and backpackers looking for the best deals.
              </p>
            </div>
          </div>
        </section>

        {/* Travel Guide Section - Exact Data */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-gray-300">
          <h3 className="text-3xl font-extrabold text-[#76453B]">Pune to Nashik Travel Guide</h3>
          <p className="mt-4 text-lg">
            <strong>🌆 Top Places to Visit in Nashik</strong><br />
            <strong>Trimbakeshwar Temple – </strong>One of the twelve Jyotirlingas, a must-visit spiritual site.<br />
            <strong>Sula Vineyards – </strong>India's most famous vineyard, offering wine tasting and a scenic experience.<br />
            <strong>Panchavati – </strong>A place of historical significance from the Ramayana.<br />
            <strong>Anjneri Hill – </strong>Birthplace of Lord Hanuman, perfect for trekking and adventure lovers.<br />
            <strong>Pandav Leni Caves – </strong>Ancient Buddhist caves with stunning carvings and history.
          </p>
          <p className="mt-4 text-lg">
            <strong>🏖️ Beaches Near Nashik</strong><br />
            <strong>Dahanu Beach – </strong>A peaceful retreat with scenic beauty.<br />
            <strong>Kelwa Beach – </strong>Ideal for weekend getaways and relaxation.
          </p>
          <p className="mt-4 text-lg">
            <strong>🛣️ Pune to Nashik Distance & Route</strong><br />
            <strong>⏳ Travel Duration: </strong>The journey takes approximately 4 to 5 hours depending on traffic.<br />
            <strong>🛣️ Distance by Road: </strong>210 km via NH 60.<br />
            <strong>💰 Toll Charges: </strong>₹250-₹350 approx.<br />
            <strong>🚦 Travel Tip: </strong>Early morning or late evening travel is best to avoid traffic.
          </p>
        </section>

        {/* FAQs Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">❓ Frequently Asked Questions (FAQs)</h3>
          <div className="mt-4 space-y-4 text-lg">
            <div>
              <p className="font-semibold">1. What is the Pune to Nashik cab fare?</p>
              <p>The fare starts from ₹2,500 for a sedan and varies based on car type.</p>
            </div>
            <div>
              <p className="font-semibold">2. How long does it take to travel from Pune to Nashik by taxi?</p>
              <p>It takes around 4 to 5 hours, depending on traffic and road conditions.</p>
            </div>
            <div>
              <p className="font-semibold">3. Are toll charges included in the Pune to Nashik taxi fare?</p>
              <p>No, toll charges are extra and paid separately.</p>
            </div>
            <div>
              <p className="font-semibold">4. What are the cab options available for Pune to Nashik travel?</p>
              <p>We offer Sedan, SUV, Luxury Cars, and Tempo Travellers.</p>
            </div>
            <div>
              <p className="font-semibold">5. Is Pune to Nashik one-way cab service available?</p>
              <p>Yes, we provide one-way cabs starting from ₹2,500.</p>
            </div>
            <div>
              <p className="font-semibold">6. Can I book a Nashik to Pune cab for a round trip?</p>
              <p>Yes, we offer round-trip cabs with flexible bookings.</p>
            </div>
            <div>
              <p className="font-semibold">7. What payment methods are available for booking?</p>
              <p>We accept cash, UPI, and online payments.</p>
            </div>
            <div>
              <p className="font-semibold">8. Are the cabs sanitized and safe for travel?</p>
              <p>Yes, all our cabs are regularly sanitized.</p>
            </div>
            <div>
              <p className="font-semibold">9. How can I book a Pune to Nashik cab?</p>
              <p>You can book instantly via our website <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a>.</p>
            </div>
            <div>
              <p className="font-semibold">10. Do you offer Nashik sightseeing packages?</p>
              <p>Yes, we have customized sightseeing packages for Nashik.</p>
            </div>
          </div>
        </section>
       {/* About Aim Cab Section */}
       <About_Aimcab  />
        {/* Book Your Cab Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-extrabold">📢 Book Your Pune to Nashik Cab Now!</h3>
          <p className="mt-4 text-xl">
            🚖 Enjoy the <span className="font-bold">Best Pune to Nashik Cab Service</span> with Aim Cab
          </p>
          <p className="mt-2 text-lg">Get the lowest fares, professional drivers, and a hassle-free booking experience</p>
          <a
            href="https://aimcab.com"
            className="mt-6 inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            Book Now at aimcab.com
          </a>
          <div className="mt-6 flex justify-center space-x-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
        </section>

 
     

        {/* Footer */}
       <div> <Footer /></div>
      </div>
    </>
  );
};

export default Page;
