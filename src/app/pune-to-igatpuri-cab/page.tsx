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
        <title>Pune to Igatpuri Cab Service | Affordable & Comfortable Taxi</title>
        <meta
          name="description"
          content="Book a Pune to Igatpuri cab with Aim Cab for a comfortable, affordable, and hassle-free ride. Enjoy one-way & round-trip taxi services with professional drivers."
        />
        <link rel="canonical" href="https://aimcab.com/Pune-to-Igatpuri-Cab-Service" />
        <meta name="author" content="Aim Cab" />
        <meta
          name="keywords"
          content="pune to igatpuri cab, pune to igatpuri taxi, igatpuri to pune cab, cab booking in pune, pune to igatpuri one way cab, pune to igatpuri cab fare, pune to igatpuri travel"
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
          Pune to Igatpuri Cab - Affordable & Comfortable Taxi Service
        </h2>

        <BookingForm />

        {/* Best Cab Service Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-extrabold text-[#76453B]">
            🚖 Best Pune to Igatpuri Cab Service at <span className="text-red-600">Lowest Price</span>
          </h2>
          <p className="mt-4 text-lg bg-white p-4 rounded-lg shadow-sm">
            Looking for a Pune to Igatpuri cab that offers a seamless and budget-friendly ride? <strong className="text-blue-600">Aim Cab</strong> provides reliable, comfortable, and affordable taxi services with experienced drivers and well-maintained vehicles, ensuring a hassle-free journey.
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
          <h3 className="text-3xl font-extrabold text-[#76453B]">🏆 Why Choose Aim Cab for Pune to Igatpuri Taxi Service?</h3>
          <p className="mt-4 text-lg bg-blue-50 p-4 rounded-lg">
            With over <span className="text-blue-600 font-bold">2 lakh happy customers</span>, Aim Cab is a trusted name in outstation travel. Here’s why we are the best Pune to Igatpuri cab service:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✅</span> Reliable & Punctual Service
              </h5>
              <p className="ml-6">Your ride will always be on time.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✅</span> Budget-Friendly Pricing
              </h5>
              <p className="ml-6">Get the lowest Pune to Igatpuri cab fare with no extra charges.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✅</span> Multiple Car Options
              </h5>
              <p className="ml-6">Choose from Sedans, SUVs, Luxury Cars & Tempo Travellers.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✅</span> One-Way & Round-Trip Cabs
              </h5>
              <p className="ml-6">Flexible travel plans to suit your needs.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✅</span> Easy Payment Options
              </h5>
              <p className="ml-6">Pay via cash, UPI, or online modes.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✅</span> Customized Packages
              </h5>
              <p className="ml-6">For individuals, families, and corporate clients.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✅</span> 24/7 Customer Support
              </h5>
              <p className="ml-6">Assistance available anytime.</p>
            </div>
          </div>
          <p className="mt-6 text-xl font-bold text-center bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-lg text-[#76453B]">
            🚖 Experience a stress-free ride with Aim Cab!
          </p>
        </section>

        {/* Cab Fare & Booking Details Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg">
          <h3 className="text-3xl font-extrabold text-[#76453B]">🚖 Pune to Igatpuri Cab Fare & Booking Details</h3>
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
          <h3 className="text-3xl font-extrabold text-[#76453B]">💰 Estimated Pune to Igatpuri Taxi Fare</h3>
          <ul className="mt-4 text-lg space-y-2">
            <li>Sedan: <strong>₹2,500 - ₹3,500</strong></li>
            <li>SUV: <strong>₹4,000 - ₹5,500</strong></li>
            <li>Luxury: <strong>₹5,500 - ₹7,500</strong></li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">📍 Toll charges are extra and may vary based on route conditions.</p>
        </section>

        {/* Cab Booking Options Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-500">
         
            
        <h4 className="text-3xl font-extrabold text-[#76453B]">💰Comfortable & Affordable Taxi Services</h4>
              <p className="mt-4 text-lg">
              

Aim Cab offers Pune to Igatpuri cab services with a variety of vehicle options for different travel needs. Whether you're planning a family trip, a business visit, or a solo journey, we have the perfect ride for you.

Looking for cab services in Igatpuri? We offer local sightseeing, pickup & drop, and customized travel packages at the most competitive rates. Whether you need a quick ride within the city or a comfortable journey back to Pune, we've got you covered.


              </p>
            
        
        </section>

        {/* Travel Guide Section - Exact Data */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-gray-300">
          <h3 className="text-3xl font-extrabold text-[#76453B]">Pune to Igatpuri Travel Guide</h3>
          <p className="mt-4 text-lg">
            <strong>🏞️ Pune to Igatpuri Distance by Car & Route Details</strong><br />
            <strong>⏳ Travel Duration: </strong>Approximately 3.5 to 4 hours, depending on traffic.<br />
            <strong>🛣️ Distance by Car: </strong>240 km via NH160.<br />
            <strong>💰 Toll Charges: </strong>₹250 - ₹350 approx.<br />
            <strong>🚲 Travel Tip: </strong>Early morning or evening travel is recommended for a smoother experience.
          </p>
          <p className="mt-4 text-lg">
            <strong>🚗 Top Attractions to Visit in Igatpuri</strong><br />
            <strong>Bhavali Dam – </strong>A scenic spot ideal for picnics and nature lovers.<br />
            <strong>Vipassana International Academy – </strong>World-famous meditation center.<br />
            <strong>Kalsubai Peak – </strong>The highest peak in Maharashtra, perfect for trekking.<br />
            <strong>Tringalwadi Fort – </strong>A historic fort offering panoramic valley views.<br />
            <strong>Vaitarna Dam – </strong>A peaceful getaway for boating and photography.<br />
            <strong>Camel Valley – </strong>A picturesque valley with breathtaking waterfalls.
          </p>
        </section>

        {/* FAQs Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">❓ Frequently Asked Questions (FAQs)</h3>
          <div className="mt-4 space-y-4 text-lg">
            <div>
              <p className="font-semibold">1. What is the Pune to Igatpuri cab fare?</p>
              <p>The fare starts from ₹2,500 for a sedan and varies based on the car type and trip duration.</p>
            </div>
            <div>
              <p className="font-semibold">2. How long does it take to travel from Pune to Igatpuri by taxi?</p>
              <p>The journey usually takes 3.5 to 4 hours, depending on road conditions.</p>
            </div>
            <div>
              <p className="font-semibold">3. Are toll charges included in the Pune to Igatpuri taxi fare?</p>
              <p>No, toll charges are extra and must be paid separately.</p>
            </div>
            <div>
              <p className="font-semibold">4. What cab options are available for Pune to Igatpuri travel?</p>
              <p>We offer Sedan, SUV, Luxury Cars, and Tempo Travellers.</p>
            </div>
            <div>
              <p className="font-semibold">5. Is a one-way cab from Pune to Igatpuri available?</p>
              <p>Yes, we provide one-way cabs starting from ₹2,500.</p>
            </div>
            <div>
              <p className="font-semibold">6. Can I book a cab from Igatpuri to Pune for a round trip?</p>
              <p>Yes, we offer flexible round-trip cabs.</p>
            </div>
            <div>
              <p className="font-semibold">7. What payment methods are accepted?</p>
              <p>We accept cash, UPI, and online payments.</p>
            </div>
            <div>
              <p className="font-semibold">8. Are your cabs sanitized and safe for travel?</p>
              <p>Yes, all our cabs are regularly sanitized for safety.</p>
            </div>
            <div>
              <p className="font-semibold">9. How can I book a Pune to Igatpuri cab?</p>
              <p>You can book instantly via our website <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a>.</p>
            </div>
            <div>
              <p className="font-semibold">10. Do you offer sightseeing packages in Igatpuri?</p>
              <p>Yes, we have customized sightseeing packages for tourists.</p>
            </div>
          </div>
        </section>

        {/* Book Your Cab Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-extrabold">📞 Book Your Pune to Igatpuri Cab Now!</h3>
          <p className="mt-4 text-xl">
            🚖 Experience the best Pune to Igatpuri cab service with Aim Cab.
          </p>
          <p className="mt-2 text-lg">
            Get the lowest fares, professional drivers, and a hassle-free booking experience. Book your ride today at <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a>!
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
