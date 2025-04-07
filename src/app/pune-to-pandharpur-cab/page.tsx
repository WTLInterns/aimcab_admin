/* eslint-disable react-hooks/rules-of-hooks */
"use client"; 
import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../container/component/Navbar'
const page = () => {
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
      <div>
   
                {/* Header */}
             <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-yellow-500 py-12 md:py-20 text-center overflow-hidden">
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
               
            
             </div>
             <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
           </header>

        {/* Main Title */}
        <h2 className="text-3xl font-bold mt-4 text-center">
          Pune to Pandharpur Cab – Affordable & Reliable Taxi Service
        </h2>

        <BookingForm />

        {/* Service Description */}
        {/* Hero Section */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md">
  <h3 className="text-3xl font-bold text-[#76453B]">🚗 Book Pune to Pandharpur Cab at the Best Price</h3>
  <p className="mt-4 text-lg text-gray-700">
  Are you looking for a comfortable and affordable Pune to Pandharpur cab service? <span className="font-bold text-[#76453B]">Aim Cab</span>offers the most reliable taxi services, ensuring a smooth and hassle-free journey from Pune to the holy town of Pandharpur. Whether you are traveling for pilgrimage or leisure, our professional drivers and well-maintained cabs ensure a safe and comfortable ride.
  </p>
</section>

{/* Why Choose Aim Cab */}
<section className="mt-8 p-6 bg-white rounded-xl shadow-md border-l-4 border-purple-500">
  <h4 className="text-3xl font-bold text-[#76453B]">🏆 Why Choose Aim Cab for Pune to Pandharpur Cab Services?</h4>
  <div className="mt-6 grid md:grid-cols-2 gap-4">
    <div className="flex items-start p-3 bg-purple-50 rounded-lg">
      <span className="text-green-600 mr-2">✓</span>
      <span className="font-medium"><strong>Lowest Prices Guaranteed </strong> –We offer the most affordable Pune to Pandharpur cab charges, ensuring great value for money.</span>
    </div>
    <div className="flex items-start p-3 bg-purple-50 rounded-lg">
      <span className="text-green-600 mr-2">✓</span>
      <span className="font-medium"><strong>Well-Maintained Vehicles</strong> – Choose from hatchbacks, sedans, SUVs, and tempo travelers.</span>
    </div>
    <div className="flex items-start p-3 bg-purple-50 rounded-lg">
      <span className="text-green-600 mr-2">✓</span>
      <span className="font-medium"><strong>Experienced Drivers </strong> – Courteous and professional chauffeurs with extensive road knowledge.</span>
    </div>
    <div className="flex items-start p-3 bg-purple-50 rounded-lg">
      <span className="text-green-600 mr-2">✓</span>
      <span className="font-medium"><strong>Flexible Booking Options</strong> – Instant online cab booking with easy modifications.</span>
    </div>
    <div className="flex items-start p-3 bg-purple-50 rounded-lg">
      <span className="text-green-600 mr-2">✓</span>
      <span className="font-medium"><strong>24/7 Customer Assistance</strong> – Dedicated support to assist you at every step.</span>
    </div>
    <div className="flex items-start p-3 bg-purple-50 rounded-lg">
      <span className="text-green-600 mr-2">✓</span>
      <span className="font-medium"><strong>Transparent Pricing</strong> – No hidden charges; what you see is what you pay.</span>
    </div>
  </div>
</section>

{/* Cab Service Overview */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B]">ℹ️ Pune to Pandharpur Cab Service – Overview</h4>
  
  <div className="mt-6 grid md:grid-cols-2 gap-6">
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h5 className="text-xl font-semibold text-[#76453B]">📍 Distance and Travel Time</h5>
      <p className="mt-2">
      The distance between Pune and Pandharpur is approximately 210 km, and it takes around 4.5 to 5 hours to reach by cab, depending on traffic and road conditions.
      </p>
    </div>
    
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h5 className="text-xl font-semibold text-[#76453B]">💰 Pune to Pandharpur Cab Fare</h5>
      <p className="mt-2">
      We offer the most competitive fare with prices starting at just ₹11/km.
      </p>
    </div>
  </div>

  <div className="mt-6 overflow-x-auto">
    <table className="w-full border-collapse rounded-lg overflow-hidden shadow">
      <thead>
        <tr className="bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white">
          <th className="p-3 text-left">Cab Type</th>
          <th className="p-3 text-left">Seating Capacity</th>
          <th className="p-3 text-left">Fare (Approx)</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr className="hover:bg-gray-50">
          <td className="p-3">Hatchback</td>
          <td className="p-3">4</td>
          <td className="p-3 font-medium">₹2,500 - ₹3,000</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-3">Sedan</td>
          <td className="p-3">4</td>
          <td className="p-3 font-medium">₹3,000 - ₹3,500</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-3">SUV</td>
          <td className="p-3">6-7</td>
          <td className="p-3 font-medium">₹4,000 - ₹4,500</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="p-3">Tempo Traveller</td>
          <td className="p-3">12-16</td>
          <td className="p-3 font-medium">₹7,000+</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

{/* Return Trip Section */}
<section className="mt-8 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B]">🔄 Pandharpur to Pune Cab – Hassle-Free Return Trips</h4>
  <p className="mt-4 text-lg">
  Planning a return journey? Book a Pandharpur to Pune cab with Aim Cab and enjoy a comfortable and safe ride back home. We offer round-trip and one-way taxi services at affordable rates.
  </p>
  <div className="mt-4 p-4 bg-purple-50 rounded-lg">
    <p className="font-medium">
      <strong>Pandharpur to Pune Taxi Fare:</strong> For those looking for a one-way or round-trip Pandharpur to Pune taxi, we offer budget-friendly prices with the same level of comfort and reliability.
    </p>
  </div>
</section>

{/* Booking Process */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B]">📱 Pune to Pandharpur Cab Charges & Booking Process</h4>
  <p className="mt-4 text-lg">
  Booking a cab from Pune to Pandharpur with Aim Cab is easy and hassle-free. Just follow these simple steps:
  </p>
  <div className="mt-6 grid md:grid-cols-2 gap-4">
    <div className="p-4 bg-white rounded-lg shadow-sm flex items-start">
      <span className="text-green-600 mr-2">1.</span>
      <span>Visit our website <a href="https://aimcab.com" className="text-blue-600 underline hover:text-[#76453B]">aimcab.com</a> and enter your travel details.</span>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-sm flex items-start">
      <span className="text-green-600 mr-2">2.</span>
      <span>Choose your preferred vehicle type.</span>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-sm flex items-start">
      <span className="text-green-600 mr-2">3.</span>
      <span>Select pick-up and drop-off locations.</span>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-sm flex items-start">
      <span className="text-green-600 mr-2">4.</span>
      <span>Confirm booking and get instant confirmation.</span>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-sm flex items-start md:col-span-2">
      <span className="text-green-600 mr-2">5.</span>
      <span>Alternatively, call or WhatsApp us at <a href="tel:+9191305454491" className="text-blue-600 underline hover:text-[#76453B]">+91 91305454491</a> to book your ride instantly.</span>
    </div>
  </div>
</section>

{/* Explore Pandharpur */}
<section className="mt-8 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B]">🌟 Explore Pandharpur – Places to Visit</h4>
  <p className="mt-4 text-lg">
  Pandharpur is a major pilgrimage site in Maharashtra, primarily known for its Vitthal Rukmini Temple. Apart from the temple, here are some must-visit places:
  </p>
  <div className="mt-6 grid md:grid-cols-2 gap-4">
    <div className="p-4 bg-blue-50 rounded-lg">
      <h5 className="font-bold text-[#76453B]">Vitthal Rukmini Temple</h5>
      <p>The most revered pilgrimage site in Maharashtra, dedicated to Lord Vitthal, attracting thousands of devotees, especially during Ashadhi Ekadashi Yatra.</p>
    </div>
    <div className="p-4 bg-blue-50 rounded-lg">
      <h5 className="font-bold text-[#76453B]">Pundalik Temple</h5>
      <p>This temple is dedicated to Sant Pundalik, a devotee of Lord Vitthal. It is located near the Chandrabhaga River and holds great spiritual significance.</p>
    </div>
    <div className="p-4 bg-blue-50 rounded-lg">
      <h5 className="font-bold text-[#76453B]">Chandrabhaga River</h5>
      <p>Pilgrims take a holy dip in the Chandrabhaga River, believing it to wash away sins. The scenic beauty of the river adds to the spiritual experience.</p>
    </div>
    <div className="p-4 bg-blue-50 rounded-lg">
      <h5 className="font-bold text-[#76453B]">Kaikadi Maharaj Math</h5>
      <p>This ashram-like math is a unique pilgrimage spot with sculptures and depictions of Hindu mythology, making it an interesting visit for spiritual seekers.</p>
    </div>
    <div className="p-4 bg-blue-50 rounded-lg md:col-span-2">
      <h5 className="font-bold text-[#76453B]">ISKCON Temple, Pandharpur</h5>
      <p>A peaceful place for meditation and spirituality, the ISKCON Temple offers a serene environment with beautiful idols of Lord Krishna and Radha.</p>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B]">❓ FAQs – Pune to Pandharpur Cab Booking</h4>
  <div className="mt-6 space-y-4">
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h5 className="text-xl font-semibold text-[#76453B]">1. What is the cab fare from Pune to Pandharpur?</h5>
      <p className="mt-2">The cab fare starts from ₹2,500 for a hatchback and varies depending on the cab type and availability.</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h5 className="text-xl font-semibold text-[#76453B]">2. How long does it take to travel from Pune to Pandharpur by taxi?</h5>
      <p className="mt-2">The journey takes approximately 4.5 to 5 hours, depending on road conditions.</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h5 className="text-xl font-semibold text-[#76453B]">3. Do you provide one-way cabs from Pune to Pandharpur?</h5>
      <p className="mt-2">Yes, Aim Cab offers both one-way and round-trip taxi services at the best prices.</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h5 className="text-xl font-semibold text-[#76453B]">4. Can I book a cab for a same-day return trip from Pune to Pandharpur?</h5>
      <p className="mt-2">Yes, we offer same-day return trip options with flexible booking and affordable rates.</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h5 className="text-xl font-semibold text-[#76453B]">5. Are your drivers experienced for long-distance routes?</h5>
      <p className="mt-2">Yes, our drivers are highly experienced and well-trained for long-distance travel.</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h5 className="text-xl font-semibold text-[#76453B]">6. Do you offer Pandharpur to Pune cab service as well?</h5>
      <p className="mt-2">Yes, we offer both Pune to Pandharpur and Pandharpur to Pune cab services at affordable rates.</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h5 className="text-xl font-semibold text-[#76453B]">7. Are there any hidden charges?</h5>
      <p className="mt-2">No, we maintain 100% transparency with no hidden charges.</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h5 className="text-xl font-semibold text-[#76453B]">8. What is the safest way to travel from Pune to Pandharpur?</h5>
      <p className="mt-2">Booking a private cab with Aim Cab ensures the safest and most comfortable journey.</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h5 className="text-xl font-semibold text-[#76453B]">9. Can I modify or cancel my cab booking?</h5>
      <p className="mt-2">Yes, we offer flexible modifications and hassle-free cancellations with minimal charges.</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h5 className="text-xl font-semibold text-[#76453B]">10. How can I contact Aim Cab for queries?</h5>
      <p className="mt-2">You can contact us at +91 91305454491 or visit our website aimcab.com.</p>
    </div>
  </div>
</section>

{/* Call to Action */}
<section className="mt-8 p-8 bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white rounded-xl shadow-lg text-center">
  <h4 className="text-3xl font-bold">📞 Book Your Pune to Pandharpur Cab Today!</h4>
  <p className="mt-4 text-xl">
    Whether you're visiting for pilgrimage or leisure, Aim Cab ensures a comfortable journey with the best Pune to Pandharpur cab services.
  </p>
  <div className="mt-6">
    <a 
      href="https://aimcab.com" 
      className="inline-block px-8 py-3 bg-white text-[#76453B] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
    >
      Book Now at aimcab.com
    </a>
  </div>
  <div className="mt-6 grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
    <div className="p-3 bg-gradient-to-r from-[#F3B664] to-[#76453B] rounded-lg">
      <p className="font-bold">📞 Call/WhatsApp:</p>
      <p>+91 91305454491</p>
    </div>
    <div className="p-3 bg-gradient-to-r from-[#F3B664] to-[#76453B] rounded-lg">
      <p className="font-bold">🌐 Visit:</p>
      <a href="https://aimcab.com" className="underline hover:text-purple-200">aimcab.com</a>
    </div>
  </div>
</section>

{/* About Aim Cab */}
<section className="mt-8 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B]">🌐 About Aim Cab</h4>
  <p className="mt-4 text-lg">
    Established in <span className="font-bold">2001</span>, <span className="font-bold">Aim Cab</span> has been a trusted name in the cab rental industry. With over:
  </p>
  <div className="mt-6 grid md:grid-cols-2 gap-4">
    <div className="p-4 bg-purple-50 rounded-lg shadow-sm flex items-center">
      <div className="bg-purple-100 p-3 rounded-full mr-4">
        <span className="text-green-600 text-xl">🚗</span>
      </div>
      <div>
        <h5 className="font-bold text-lg">50+ Personal Cabs</h5>
        <p>across India</p>
      </div>
    </div>
    <div className="p-4 bg-purple-50 rounded-lg shadow-sm flex items-center">
      <div className="bg-purple-100 p-3 rounded-full mr-4">
        <span className="text-green-600 text-xl">🔗</span>
      </div>
      <div>
        <h5 className="font-bold text-lg">500+ Registered Cabs</h5>
        <p>in our network</p>
      </div>
    </div>
    <div className="p-4 bg-purple-50 rounded-lg shadow-sm flex items-center">
      <div className="bg-purple-100 p-3 rounded-full mr-4">
        <span className="text-green-600 text-xl">😊</span>
      </div>
      <div>
        <h5 className="font-bold text-lg">2,00,000+ Happy Customers</h5>
        <p>served</p>
      </div>
    </div>
    <div className="p-4 bg-purple-50 rounded-lg shadow-sm flex items-center">
      <div className="bg-purple-100 p-3 rounded-full mr-4">
        <span className="text-green-600 text-xl">✈️</span>
      </div>
      <div>
        <h5 className="font-bold text-lg">3,000+ Outstation Trips</h5>
        <p>completed successfully</p>
      </div>
    </div>
  </div>
  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
    <p className="text-lg">
      We are committed to providing the best travel experience with affordable fares and top-notch service.
    </p>
  </div>
</section>

        
        {/* Redesigned Footer */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-6 sm:py-8">
          {/* Footer content area */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* You can add additional footer columns here if needed */}
            </div>
          </div>

          {/* Popular Cities Section */}
          <div className="container mx-auto px-4 text-center mb-4">
            <b className="text-yellow-400 text-lg transition-all duration-300 ease-in-out hover:text-white">
              POPULAR CITIES:
            </b>
            <div className="flex justify-center items-center space-x-6 mt-2">
              {/* Pune Button */}
              <a
                href="/Pune"
                className="relative inline-block px-20 py-4 rounded-full 
                           bg-gradient-to-r from-blue-400 to-yellow-300 
                           text-gray-800 font-bold uppercase shadow-md 
                           transform transition-all duration-500 ease-in-out 
                           hover:scale-105 hover:bg-gradient-to-r hover:from-green-300 hover:to-green-200 hover:shadow-lg hover:text-gray-900"
              >
                Pune
              </a>
              
              {/* Mumbai Button */}
              <a
                href="/Mumbai"
                className="relative inline-block px-20 py-4 rounded-full 
                           bg-gradient-to-r from-blue-400 to-yellow-300 
                           text-gray-800 font-bold uppercase shadow-md 
                           transform transition-all duration-500 ease-in-out 
                           hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 hover:shadow-lg hover:text-white"
              >
                Mumbai
              </a>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-300 my-8" />

          {/* Quick Links Section */}
          <div className="container mx-auto px-4 text-center mb-8">
            <b className="text-yellow-400 transition-all duration-300 ease-in-out hover:text-white">QUICK LINKS:</b>
            <div className="mt-2 flex flex-wrap justify-center">
              {["HOME", "UPDATES", "ABOUT", "SERVICES", "CONTACT US", "CAREER", "FAQ's", "PRIVACY POLICY", "TERMS & CONDITIONS"].map((link, i) => (
                <a
                  key={i}
                  href="/"
                  className="text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-black mx-2 mb-2 sm:mb-0"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-300 my-8" />

          {/* Designed by Section */}
          <div className="container mx-auto px-4 text-center mb-8">
            <h4 className="text-yellow-400 transition-all duration-300 ease-in-out hover:text-white">
              DESIGNED BY
            </h4>
            <a
              href="https://cobaztech.com"
              target="_blank"
              className="text-white transition-all duration-300 ease-in-out font-semibold block mt-1 hover:text-black hover:scale-105"
            >
              COBAZTECH
            </a>
          </div>

          {/* Social Media Section */}
          <div className="container mx-auto px-4 text-center mt-6">
            <span className="flex justify-center flex-wrap">
              <a
                href="https://wa.me/9130030054"
                target="_blank"
                className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
              >
                <img
                  className="w-8 h-8 inline-block mb-2"
                  src="images/whatsapp.png"
                  alt="WhatsApp"
                />
              </a>
              <a
                href="https://www.facebook.com/Aimcab"
                target="_blank"
                className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
              >
                <img
                  className="w-8 h-8 inline-block mb-2"
                  src="images/facebook.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.youtube.com/@AimCab"
                target="_blank"
                className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
              >
                <img
                  className="w-8 h-8 inline-block mb-2"
                  src="images/youtube.png"
                  alt="YouTube"
                />
              </a>
              <a
                href="https://twitter.com/aim_cab"
                target="_blank"
                className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
              >
                <img
                  className="w-8 h-8 inline-block mb-2"
                  src="images/twitter.png"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/aim-cab-77356b208/"
                target="_blank"
                className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
              >
                <img
                  className="w-8 h-8 inline-block mb-2"
                  src="images/linked-in.png"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://join.skype.com/invite/sRT2FTyb7d1H"
                target="_blank"
                className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
              >
                <img
                  className="w-8 h-8 inline-block mb-2"
                  src="images/skype.png"
                  alt="Skype"
                />
              </a>
              <a
                href="https://www.instagram.com/aimcabs/"
                target="_blank"
                className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
              >
                <img
                  className="w-8 h-8 inline-block mb-2"
                  src="images/instagram.png"
                  alt="Instagram"
                />
              </a>
            </span>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="container mx-auto px-4 text-center">
          <p className="transition-all duration-300 ease-in-out hover:text-green-200">
            &copy; {new Date().getFullYear()} Aim Cab. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
