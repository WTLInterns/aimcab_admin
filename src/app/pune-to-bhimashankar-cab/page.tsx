"use client"
import Head from "next/head"
import BookingForm from "../../components/BookingForm";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Footer from "../../container/component/Footer";
import About_Aimcab from '../../components/About_Aimcab';
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
        <title>Pune to Bhimashankar Cab Service | Best Taxi at Affordable Prices</title>
        <meta
          name="description"
          content="Book a Pune to Bhimashankar cab with Aim Cab for a comfortable, reliable, and hassle-free journey to one of Maharashtra’s most revered pilgrimage destinations."
        />
        <link rel="canonical" href="https://aimcab.com/Pune-to-Bhimashankar-Cab-Service" />
        <meta name="author" content="Aim Cab" />
        <meta
          name="keywords"
          content="pune to bhimashankar cab, pune to bhimashankar taxi, bhimashankar cab, cab booking in pune, pune to bhimashankar one way cab, pune to bhimashankar cab fare, pune to bhimashankar travel"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div>
        {/* Header */}
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
          Pune to Bhimashankar Cab - Best Taxi Service at Affordable Prices
        </h2>

        <BookingForm />

        {/* Best Cab Service Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-extrabold text-[#76453B]">
            🚖 Book Pune to Bhimashankar Cab for a Comfortable Journey
          </h2>
          <p className="mt-4 text-lg bg-white p-4 rounded-lg shadow-sm">
            Looking for a Pune to Bhimashankar cab service that offers reliability, comfort, and affordability? <strong className="text-blue-600">Aim Cab</strong> provides top-notch taxi services with professional drivers, ensuring a hassle-free trip to one of Maharashtra’s most revered pilgrimage destinations.
          </p>
          <ul className="mt-6 text-lg space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span>
              <strong className="bg-yellow-100 px-2 py-1 rounded">Best Price Guarantee</strong> – Starting at just ₹11/km
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span>
              <strong>Clean & Comfortable Cabs</strong> – Well-maintained and sanitized vehicles
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span>
              <strong>Multiple Cab Options</strong> – Sedan, SUV, Luxury, and Tempo Traveller
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span>
              <strong>Instant Online Booking</strong> – Visit <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a> to book your ride
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span>
              <strong>24/7 Availability</strong> – Book anytime, anywhere
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span>
              <strong>No Hidden Charges</strong> – Transparent pricing and fair fares
            </li>
          </ul>
        </section>

        {/* Why Choose Aim Cab Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-blue-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">
            🏆 Why Choose Aim Cab for Pune to Bhimashankar Taxi Service?
          </h3>
          <p className="mt-4 text-lg bg-blue-50 p-4 rounded-lg">
            With over <span className="text-blue-600 font-bold">2 lakh happy customers</span>, Aim Cab is one of the best Pune to Bhimashankar cab providers. Here’s why travelers prefer us:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Reliable & On-time Service
              </h5>
              <p className="ml-6">Never worry about delays.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Lowest Cab Fare
              </h5>
              <p className="ml-6">Best price guarantee for Pune to Bhimashankar journeys.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> One-way & Round-trip Options
              </h5>
              <p className="ml-6">Flexible booking options to suit your travel needs.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Safe & Secure Ride
              </h5>
              <p className="ml-6">Trained drivers for a stress-free journey.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Easy Payment Options
              </h5>
              <p className="ml-6">Cash, UPI, or online transactions.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> 24/7 Customer Support
              </h5>
              <p className="ml-6">Assistance whenever you need it.</p>
            </div>
          </div>
          <p className="mt-6 text-xl font-bold text-center bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-lg text-[#76453B]">
            🚖 Experience a stress-free ride with Aim Cab!
          </p>
        </section>

        {/* Cab Fare & Booking Details Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg">
          <h3 className="text-3xl font-extrabold text-[#76453B]">🚖 Pune to Bhimashankar Cab Fare & Taxi Price Details</h3>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white">
                  <th className="p-4 text-left">Cab Type</th>
                  <th className="p-4 text-center">Fare (₹/KM)</th>
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
          <p className="mt-2 text-sm text-gray-600">
            📍 Toll charges are extra and may vary based on route conditions.
          </p>
          <p className="mt-4 text-lg">
            <strong>Estimated Pune to Bhimashankar Taxi Fare:</strong><br />
            Sedan: ₹2,500 - ₹3,000<br />
            SUV: ₹3,500 - ₹4,500<br />
            Luxury: ₹5,000 - ₹6,000
          </p>
        </section>

        {/* Travel Guide Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-gray-300">
          <h3 className="text-3xl font-extrabold text-[#76453B]">How to Go Bhimashankar from Pune?</h3>
          <p className="mt-4 text-lg">
            <strong>🚗 Pune to Bhimashankar Distance & Travel Time</strong><br />
            <strong>⏳ Travel Duration: </strong>Approximately 3.5 to 4 hours<br />
            <strong>🛣️ Distance by Car: </strong>125 km via Pune-Nashik Highway<br />
            <strong>💰 Toll Charges: </strong>₹150 - ₹200 approx.<br />
            <strong>🚲 Best Time to Travel: </strong>Early morning or evening for a smooth journey
          </p>
          <p className="mt-4 text-lg">
            <strong>🌟 Bhimashankar Jyotirlinga - A Spiritual Journey</strong><br />
            Bhimashankar, one of the twelve Jyotirlingas, is a must-visit pilgrimage destination in Maharashtra. Nestled in the Sahyadri Hills, it offers a mix of spirituality, natural beauty, and adventure.
          </p>
          <p className="mt-4 text-lg">
            <strong>🛕 Famous Temples & Attractions in Bhimashankar</strong><br />
            <strong>Bhimashankar Temple – </strong>One of the 12 Jyotirlingas, dedicated to Lord Shiva.<br />
            <strong>Gupt Bhimashankar – </strong>A hidden shrine located deep in the forest.<br />
            <strong>Hanuman Lake – </strong>A serene place for relaxation.<br />
            <strong>Nagphani Point – </strong>A scenic viewpoint with breathtaking views.<br />
            <strong>Bhimashankar Wildlife Sanctuary – </strong>Home to the rare Indian Giant Squirrel.<br />
            <strong>Ahupe Ghat – </strong>A mesmerizing trekking spot.<br />
            <strong>Junnar Caves – </strong>Ancient Buddhist rock-cut caves near Bhimashankar.
          </p>
        </section>

        {/* FAQs Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">❓ Frequently Asked Questions (FAQs)</h3>
          <div className="mt-4 space-y-4 text-lg">
            <div>
              <p className="font-semibold">1. What is the Pune to Bhimashankar cab fare?</p>
              <p>The fare starts from ₹2,500 for a sedan and varies based on cab type and travel requirements.</p>
            </div>
            <div>
              <p className="font-semibold">2. How long does it take to travel from Pune to Bhimashankar by taxi?</p>
              <p>The journey usually takes 3.5 to 4 hours, depending on road conditions.</p>
            </div>
            <div>
              <p className="font-semibold">3. Are toll charges included in the Pune to Bhimashankar taxi fare?</p>
              <p>No, toll charges are extra and must be paid separately.</p>
            </div>
            <div>
              <p className="font-semibold">4. What cab options are available for Pune to Bhimashankar travel?</p>
              <p>We offer Sedan, SUV, Luxury Cars, and Tempo Travellers.</p>
            </div>
            <div>
              <p className="font-semibold">5. Is a one-way cab from Pune to Bhimashankar available?</p>
              <p>Yes, we provide one-way cabs starting from ₹2,500.</p>
            </div>
            <div>
              <p className="font-semibold">6. Can I book a cab for a round trip from Pune to Bhimashankar?</p>
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
              <p className="font-semibold">9. How can I book a Pune to Bhimashankar cab?</p>
              <p>You can book instantly via our website <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a>.</p>
            </div>
            <div>
              <p className="font-semibold">10. Do you offer sightseeing packages in Bhimashankar?</p>
              <p>Yes, we have customized sightseeing packages for tourists.</p>
            </div>
          </div>
        </section>

        {/* Book Your Cab Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-extrabold">📞 Book Your Pune to Bhimashankar Cab Now!</h3>
          <p className="mt-4 text-xl">
            🚖 Experience the Best Pune to Bhimashankar Cab Service with Aim Cab.
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
