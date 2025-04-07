
"use client";
import React from 'react'
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../container/component/Navbar'
const styles = {
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  section: "bg-white rounded-lg shadow-lg p-6 mb-8",
  title: "text-3xl font-bold text-center text-gray-900 mb-8",
  subtitle: "text-2xl font-semibold text-gray-800 mb-4",
  text: "text-lg text-gray-600 leading-relaxed",
  list: "list-disc pl-6 space-y-2",
  table: "min-w-full divide-y divide-gray-200",
  tableHeader: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
  tableCell: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
  button: "bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition duration-300",
  link: "text-black hover:text-gray-800 transition duration-300",
  card: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300",
  highlight: "text-black font-semibold",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  flexCenter: "flex items-center justify-center",
  gradientBg: "bg-gradient-to-r from-gray-900 to-black",
  fadeIn: "animate-fade-in duration-500",
  boxShadow: "shadow-lg hover:shadow-xl transition duration-300",
  roundedFull: "rounded-full",
  textGradient: "bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-black",
  faqContainer: "space-y-4",
  faqItem: "space-y-2",
  ctaContainer: "mt-4",
}

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
    <div >
    


                {/* Header */}
             <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-yellow-500 py-12 md:py-20 text-center overflow-hidden">
             <div className="absolute inset-0 bg-black opacity-10"></div>
             <div className="relative z-10 text-white mx-auto px-4">
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
      <h2 className={`${styles.title} ${styles.textGradient}`}>
        Pune to Baramati Cab – Affordable & Reliable Taxi Service
      </h2>

      <div className={styles.fadeIn}>
        <BookingForm />
      </div>

      {/* Service Description */}
   {/* Hero Section */}
{/* <section className="bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white p-8 rounded-xl shadow-2xl">
  <div className="text-white mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Pune to Baramati Cab with Aim Cab</h1>
    <p className="text-xl md:text-2xl mb-8">Premium Taxi Service at <span className="font-bold text-yellow-300">₹11/km</span> • Comfortable Rides • 24/7 Availability</p>
    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg border border-white/30">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <li className="flex items-center"><span className="mr-2 text-2xl">✓</span> Lowest Price Guaranteed</li>
        <li className="flex items-center"><span className="mr-2 text-2xl">✓</span> 110km Comfortable Journey</li>
        <li className="flex items-center"><span className="mr-2 text-2xl">✓</span> Professional Drivers</li>
        <li className="flex items-center"><span className="mr-2 text-2xl">✓</span> Sanitized Vehicles</li>
      </ul>
    </div>
  </div>
</section> */}

{/* Why Choose Us */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className="text-[#76453B] mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Book Your Pune to Baramati Cab with Aim Cab</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">🏆</span>
          Looking for a Pune to Baramati cab?
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Aim Cab offers the most affordable and comfortable taxi services to ensure a smooth journey. Whether you need a one-way cab, round trip, or an outstation taxi, we have the best options available at the lowest market price.</li>
          {/* <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> 24/7 customer support</li>
          <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Safe & sanitized vehicles</li> */}
        </ul>
      </div>
      
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">💰</span>
          Best Prices
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start"><span className="text-purple-600 mr-2">•</span> <strong>Lowest price guarantee – </strong>Get the best fares for your travel.</li>
          <li className="flex items-start"><span className="text-purple-600 mr-2">•</span> <strong>Transparent pricing – </strong>No hidden costs, only clear and upfront pricing.</li>
          <li className="flex items-start"><span className="text-purple-600 mr-2">•</span><strong> Ride at just ₹11/km –</strong> Enjoy budget-friendly travel.</li>
          <li className="flex items-start"><span className="text-purple-600 mr-2">•</span> <strong>Multiple car options – </strong>Hatchbacks, sedans, and SUVs available.</li>
          <li className="flex items-start"><span className="text-purple-600 mr-2">•</span><strong> Well-maintained cabs – </strong>Clean, sanitized, and comfortable rides.</li>
          <li className="flex items-start"><span className="text-purple-600 mr-2">•</span> <strong>Experienced drivers –</strong> Trained professionals ensuring safe travel.</li>
        </ul>
      </div>
    </div>
    
    <div className="mt-6  gap-6">
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <span className="bg-green-100 text-[#76453B] rounded-full w-8 h-8 flex items-center justify-center mr-3">🚗</span>
          Why Choose Aim Cab for Your Pune to Baramati Journey?
        </h3>
        <ul className="space-y-2 text-gray-700">
        <li className=" items-start"><span className="text-purple-600 mr-2">•</span> <strong>Affordable & Transparent Pricing –</strong> We offer the lowest fares for cab from Pune to Baramati with no hidden charges. The pricing is straightforward, so you always know what you are paying for.</li>
          <li className=" items-start"><span className="text-[#76453B] mr-2">•</span> <strong>Comfortable & Well-Maintained Cabs – </strong>Travel in comfort with our well-maintained cabs. Our vehicles are clean, air-conditioned, and designed for a stress-free journey.</li>
          <li className=" items-start"><span className="text-[#76453B] mr-2">•</span> <strong>Experienced & Professional Drivers – </strong>Our drivers are knowledgeable about the route, ensuring you have a hassle-free experience. Safety and punctuality are our priorities.</li>
          <li className=" items-start"><span className="text-[#76453B] mr-2">•</span> <strong>Multiple Cab Options – </strong>Choose from sedans, hatchbacks, SUVs, and tempo travelers based on your group size and comfort preference.</li>
          <li className=" items-start"><span className="text-[#76453B] mr-2">•</span> <strong>Flexible Booking & Payment Options – </strong>Book your Pune to Baramati taxi easily through our website, WhatsApp, or phone call. Pay via multiple payment modes like cash, UPI, or card..</li>
        </ul>
      </div>
      
      {/* <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <span className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">🛣️</span>
          Journey Details
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start"><span className="text-orange-600 mr-2">•</span> 110 km distance</li>
          <li className="flex items-start"><span className="text-orange-600 mr-2">•</span> 2.5-3 hours travel time</li>
          <li className="flex items-start"><span className="text-orange-600 mr-2">•</span> Scenic route options</li>
        </ul>
      </div> */}
    </div>
  </div>
</section>

{/* Pricing Table */}
<section className="mt-12 p-8 bg-gray-50 rounded-xl">
  <div className="text-[#76453B] mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Cab Options & Pricing</h2>
    
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white">
          <tr>
            <th className="p-4 text-left">Cab Type</th>
            <th className="p-4 text-center">Capacity</th>
            <th className="p-4 text-right">Fare (Approx.)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="p-4 font-medium">Hatchback</td>
            <td className="p-4 text-center">4 Seater</td>
            <td className="p-4 text-right text-blue-600 font-bold">₹2500 - ₹3000</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors bg-gray-100">
            <td className="p-4 font-medium">Sedan</td>
            <td className="p-4 text-center">4 Seater</td>
            <td className="p-4 text-right text-blue-600 font-bold">₹2800 - ₹3500</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="p-4 font-medium">SUV</td>
            <td className="p-4 text-center">6-7 Seater</td>
            <td className="p-4 text-right text-blue-600 font-bold">₹4000 - ₹5000</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors bg-gray-100">
            <td className="p-4 font-medium">Tempo Traveler</td>
            <td className="p-4 text-center">9-12 Seater</td>
            <td className="p-4 text-right text-blue-600 font-bold">₹7000+</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="mt-4 text-center text-sm text-gray-500">
      ₹11/km rate applies for all cabs. Prices may vary based on demand, route, and duration.
    </div>
  </div>
</section>

{/* Travel Info */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className="text-[#76453B] mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Travel Information</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">🛣️</span>
          Distance & Travel Time from Pune to Baramati
        </h3>
      
        <p className="mt-2 text-gray-700">The Pune to Baramati distance by cab is approximately 110 km, and the journey takes around 2.5 to 3 hours depending on traffic and road conditions.</p>
      </div>
      
      <div className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">🚗</span>
          Cab Services from Pune to Baramati - One Way & Round Trip
        </h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium">One-Way Pune to Baramati Cab – </h4>
            <p className="text-sm text-gray-600">If you need a one-way drop, book our affordable Pune to Baramati one-way cab with flexible pickup times.</p>
          </div>
          <div>
            <h4 className="font-medium">Round-Trip Pune to Baramati Taxi – </h4>
            <p className="text-sm text-gray-600">For a full-day visit or weekend getaway, choose our round-trip cab services from Pune to Baramati with affordable return fares.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Attractions */}
<section className="mt-12 p-8 bg-gray-50 rounded-xl">
  <div className="text-[#76453B] mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Popular Travel Routes & Attractions Along the Way</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">🛕</span>
          Jejuri Temple – 
        </h3>
        <p className="text-gray-600 text-sm">The famous temple of Lord Khandoba, a great spiritual stopover.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <span className="bg-green-100 text-[#76453B] rounded-full w-6 h-6 flex items-center justify-center mr-2">🌊</span>
          Neera River View – 
        </h3>
        <p className="text-gray-600 text-sm"> Enjoy a quick break with scenic views.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <span className="bg-yellow-100 text-yellow-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">🦩</span>
          Bhigwan Bird Sanctuary – 
        </h3>
        <p className="text-gray-600 text-sm">Spot migratory birds and flamingos during the season.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <span className="bg-yellow-100 text-yellow-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">🌴</span>
          Baramati Agro Tourism –
        </h3>
        <p className="text-gray-600 text-sm">Explore farms, vineyards, and agro-based industries in Baramati.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <span className="bg-yellow-100 text-yellow-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">🛕</span>
          Shri Siddheshwar Temple –
        </h3>
        <p className="text-gray-600 text-sm">A peaceful place for devotees.</p>
      </div>
    </div>
  </div>
</section>

{/* FAQ */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className="text-[#76453B] mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
    
    <div className="space-y-4">
      {[
        {
          question: "How much does a Pune to Baramati cab cost?",
          answer: "The fare starts from ₹2500 and varies depending on the cab type and availability."
        },
        {
          question: "What is the distance between Pune and Baramati?",
          answer: "The distance is approximately 110 km."
        },
        {
          question: "How long does it take to reach Baramati from Pune by cab?",
          answer: "The journey takes around 2.5 to 3 hours."
        },
        {
          question: "Can I book a one-way taxi from Pune to Baramati?",
          answer: "Yes, we offer both one-way and round-trip cab services."
        },
        {
          question: "What are the best places to visit in Baramati?",
          answer: "You can visit Jejuri Temple, Bhigwan Bird Sanctuary, Shri Siddheshwar Temple, and Baramati Agro Tourism."
        },
        {
          question: "What types of cabs are available for Pune to Baramati travel?",
          answer: "We have hatchbacks, sedans, SUVs, and tempo travelers available."
        },
        {
          question: "Is there a night charge for Pune to Baramati taxi service?",
          answer: "Yes, a minimal night charge may apply for late-night travel."
        },
        {
          question: "Are the cabs sanitized and safe?",
          answer: "Yes, all our cabs are regularly sanitized and driven by experienced drivers."
        },
        {
          question: "How do I book a cab from Pune to Baramati?",
          answer: "You can book online via our website, WhatsApp, or call our customer support."
        },
        {
          question: "Is there any hidden charge for booking a cab?",
          answer: "No, our pricing is transparent with no hidden charges."
        }

      ].map((faq, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-blue-600">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* About & CTA */}
<section className="mt-12 p-8 bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white rounded-xl shadow-lg">
  <div className="text-white mx-auto">
    <h2 className="text-3xl font-bold text-center mb-6">About Aim Cab</h2>
    
    <p className="text-center mb-8">
      Established in 2001, Aim Cab has been a trusted name in the travel industry, providing top-notch cab services across India.
    </p>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
      <div className="bg-white/20 p-4 rounded-lg">
        <p className="text-2xl font-bold">50+</p>
        <p className="text-sm">Personal Cabs</p>
      </div>
      <div className="bg-white/20 p-4 rounded-lg">
        <p className="text-2xl font-bold">500+</p>
        <p className="text-sm">Registered Cabs</p>
      </div>
      <div className="bg-white/20 p-4 rounded-lg">
        <p className="text-2xl font-bold">2L+</p>
        <p className="text-sm">Happy Customers</p>
      </div>
      <div className="bg-white/20 p-4 rounded-lg">
        <p className="text-2xl font-bold">3K+</p>
        <p className="text-sm">Outstation Trips</p>
      </div>
    </div>
    
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">Book Your Pune to Baramati Cab Now!</h3>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a 
          href="https://aimcab.com" 
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-md"
        >
          Book Online
        </a>
        <a 
          href="tel:+919834577766" 
          className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
        >
          Call +91 9834577766
        </a>
      </div>
      <p className="mt-4 text-sm">Visit: <a href="https://aimcab.com" className="underline">www.aimcab.com</a></p>
    </div>
  </div>
</section>

      {/* Footer */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-6 sm:py-8">
              {/* Popular Cities Section */}
              <div className="container mx-auto px-4 text-center mb-4">
          <b className="text-gray-300 text-lg transition-all duration-300 ease-in-out hover:text-white">
                  POPULAR CITIES:
                </b>
                <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-2">
                  <a
                    href="/Pune"
                    className="relative inline-block px-8 sm:px-16 md:px-20 py-4 rounded-full 
                         bg-gradient-to-r from-gray-200 to-white 
                               text-gray-800 font-bold uppercase shadow-md 
                               transform transition-all duration-500 ease-in-out 
                         hover:scale-105 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 hover:shadow-lg hover:text-black"
                  >
                    Pune
                  </a>
                  <a
                    href="/Mumbai"
                    className="relative inline-block px-8 sm:px-16 md:px-20 py-4 rounded-full 
                         bg-gradient-to-r from-gray-200 to-white 
                               text-gray-800 font-bold uppercase shadow-md 
                               transform transition-all duration-500 ease-in-out 
                         hover:scale-105 hover:bg-gradient-to-r hover:from-gray-800 hover:to-black hover:shadow-lg hover:text-white"
                  >
                    Mumbai
                  </a>
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="container mx-auto px-4 text-center mb-8">
          <b className="text-gray-300 transition-all duration-300 ease-in-out hover:text-white">
                  QUICK LINKS:
                </b>
                <div className="mt-2 flex flex-wrap justify-center">
                  {[
                    "HOME",
                    "UPDATES",
                    "ABOUT",
                    "SERVICES",
                    "CONTACT US",
                    "CAREER",
                    "FAQ's",
                    "PRIVACY POLICY",
                    "TERMS & CONDITIONS",
                  ].map((link, i) => (
                    <a
                      key={i}
                      href="/"
                className="text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300 mx-2 mb-2 sm:mb-0"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Media Section */}
              <div className="container mx-auto px-4 text-center mt-6">
                <span className="flex justify-center flex-wrap">
            {/* Social Media Links */}
                  <a
                    href="https://wa.me/9130030054"
                    target="_blank"
                    className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
              rel="noreferrer"
            >
              <img className="w-8 h-8 inline-block mb-2 filter grayscale hover:grayscale-0" src="images/whatsapp.png" alt="WhatsApp" />
            </a>
            {/* Add other social media links similarly */}
                </span>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="container mx-auto px-4 text-center">
        <p className="transition-all duration-300 ease-in-out hover:text-gray-600">
                &copy; {new Date().getFullYear()} Aim Cab. All rights reserved.
              </p>
            </div>
          </div>
  );
};

export default Page;