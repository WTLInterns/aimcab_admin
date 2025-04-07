import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';

const page = () => {
  return (
    <>
      <div>
        <Head>
        <title>Pune to Malvan Cab | Hassle-Free & Affordable Taxi</title>
      <meta name="description" content="Book Pune to Malvan cab services with Aim Cab for a safe, reliable & comfortable journey. Affordable fares, 24/7 booking & professional drivers." />
      <link rel="canonical" href="https://aimcab.com/pune-to-malvan-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Malvan Cab, Pune To Malvan cab Services, Cab Services From Pune To Malvan, Pune To Malvan Cab Services charges, Best cab Services Pune To Malvan" />
      <meta name="robots" content="index, follow" />
        </Head>

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

        {/* Main Title */}
        <h2 className="text-3xl font-bold mt-4 text-center">
        Pune to Malvan Cab Services – Affordable & Comfortable Travel
        </h2>

        <BookingForm />

{/* Hero Section */}
<section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6 rounded-xl shadow-lg">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">Pune to Malvan Cab Service</h1>
    <p className="text-xl md:text-2xl mb-8">Comfortable • Affordable • Reliable</p>
    <div className="bg-white text-blue-900 inline-block px-6 py-3 rounded-full font-bold shadow-md hover:shadow-xl transition duration-300">
      <a href="tel:+9191305454491">Call Now: +91 91305454491</a>
    </div>
  </div>
</section>

{/* Service Highlights */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-blue-700 mb-6">Premium Pune to Malvan Cab Services</h2>
    <p className="text-lg text-gray-700 mb-6">
      Experience the perfect blend of comfort and affordability with Aim Cab's Pune to Malvan taxi service. Whether you're traveling for leisure or business, we ensure a smooth journey with professional drivers and well-maintained vehicles.
    </p>
    
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold text-[#76453B] mb-3">Best Fare Guarantee</h3>
        <p className="text-gray-700">Starting at just ₹11/km - the most competitive rates in the market</p>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h3 className="text-xl font-semibold text-green-800 mb-3">24/7 Service</h3>
        <p className="text-gray-700">Round-the-clock availability for your convenience</p>
      </div>
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
        <h3 className="text-xl font-semibold text-purple-800 mb-3">Multiple Options</h3>
        <p className="text-gray-700">Hatchbacks, Sedans, SUVs, and Luxury vehicles available</p>
      </div>
      <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
        <h3 className="text-xl font-semibold text-orange-800 mb-3">GPS Tracking</h3>
        <p className="text-gray-700">All cabs equipped with GPS for safe and efficient travel</p>
      </div>
    </div>
  </div>
</section>

{/* Pricing Section */}
<section className="mt-12 p-8 bg-gray-50 rounded-xl">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Transparent Pricing</h2>
    
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-4 px-6 text-left">Cab Type</th>
            <th className="py-4 px-6 text-center">Capacity</th>
            <th className="py-4 px-6 text-right">Fare (Approx.)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-blue-50">
            <td className="py-4 px-6 font-medium">Hatchback</td>
            <td className="py-4 px-6 text-center">4</td>
            <td className="py-4 px-6 text-right">₹3,999</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="py-4 px-6 font-medium">Sedan</td>
            <td className="py-4 px-6 text-center">4</td>
            <td className="py-4 px-6 text-right">₹4,499</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="py-4 px-6 font-medium">SUV</td>
            <td className="py-4 px-6 text-center">6-7</td>
            <td className="py-4 px-6 text-right">₹5,999</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="py-4 px-6 font-medium">Luxury</td>
            <td className="py-4 px-6 text-center">4-6</td>
            <td className="py-4 px-6 text-right">₹8,999</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <p className="mt-4 text-sm text-gray-600 text-center">*Toll charges and state taxes may apply additionally</p>
  </div>
</section>

{/* Journey Info */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-blue-700 mb-8">Journey Information</h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-blue-50 p-6 rounded-lg text-center">
        <div className="text-4xl font-bold text-blue-600 mb-2">385 km</div>
        <div className="text-gray-700">Distance</div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <div className="text-4xl font-bold text-green-600 mb-2">7-8 hrs</div>
        <div className="text-gray-700">Travel Time</div>
      </div>
      <div className="bg-purple-50 p-6 rounded-lg text-center">
        <div className="text-4xl font-bold text-purple-600 mb-2">₹400-600</div>
        <div className="text-gray-700">Toll Charges</div>
      </div>
    </div>
  </div>
</section>

{/* Attractions Section */}
<section className="mt-12">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Explore the Route</h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Enroute Attractions</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">📍</span>
            <span><strong>Mahabaleshwar:</strong> Famous hill station with stunning viewpoints</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">📍</span>
            <span><strong>Kolhapur:</strong> Mahalakshmi Temple and Rankala Lake</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">📍</span>
            <span><strong>Tarkarli Beach:</strong> Perfect for water sports and scuba diving</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Malvan Attractions</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">🏖️</span>
            <span><strong>Tarkarli Beach:</strong> Crystal-clear waters for water sports</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">🏰</span>
            <span><strong>Sindhudurg Fort:</strong> Historic 17th-century sea fort</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">🌊</span>
            <span><strong>Malvan Marine Sanctuary:</strong> Vibrant coral reefs and marine life</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* About Us */}
<section className="mt-12 p-8 bg-blue-50 rounded-xl">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Why Choose Aim Cab?</h2>
    
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-lg text-gray-700 mb-6">
          Established in 2001, Aim Cab has grown into a leading travel company with a commitment to reliable and affordable transportation solutions across India.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="bg-blue-100 text-[#76453B] p-2 rounded-full mr-3">✓</span>
            <span>50+ personal cabs operating nationwide</span>
          </li>
          <li className="flex items-center">
            <span className="bg-blue-100 text-[#76453B] p-2 rounded-full mr-3">✓</span>
            <span>500+ registered cabs in our network</span>
          </li>
          <li className="flex items-center">
            <span className="bg-blue-100 text-[#76453B] p-2 rounded-full mr-3">✓</span>
            <span>2 lakh+ satisfied customers</span>
          </li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Our Achievements</h3>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <div className="text-3xl font-bold text-blue-600">2001</div>
            <div className="text-gray-600">Established</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <div className="text-3xl font-bold text-blue-600">2L+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <div className="text-3xl font-bold text-blue-600">3K+</div>
            <div className="text-gray-600">Trips Completed</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <div className="text-3xl font-bold text-blue-600">550+</div>
            <div className="text-gray-600">Cab Fleet</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Frequently Asked Questions</h2>
    
    <div className="space-y-6">
      {[
        {
          question: "What are the cab charges from Pune to Malvan?",
          answer: "Our cab fares start from ₹3,999, depending on the car type."
        },
        {
          question: "How long does it take to travel from Pune to Malvan by cab?",
          answer: "It takes around 7-8 hours to reach Malvan by road."
        },
        {
          question: "Do you offer one-way cab services from Pune to Malvan?",
          answer: "Yes, we offer both one-way and round-trip cab services."
        },
        {
          question: "Is it safe to travel to Malvan at night?",
          answer: "Yes, our cabs are equipped with GPS, and we ensure safe travel with professional drivers."
        },
        {
          question: "How can I book Pune to Malvan cab services?",
          answer: <>
            You can book via our website <a href="https://aimcab.com" className="text-blue-600 underline">aimcab.com</a> or call us at{" "}
            <a href="tel:+9191305454491" className="text-blue-600 underline">+91 91305454491</a>.
          </>
        }
      ].map((faq, index) => (
        <div key={index} className="border-b border-gray-200 pb-4">
          <button className="flex justify-between items-center w-full text-left font-semibold text-lg text-[#76453B]">
            <span>{faq.question}</span>
            <span className="text-blue-600 text-2xl">+</span>
          </button>
          <div className="mt-2 text-gray-700">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow-xl">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Ready for Your Malvan Adventure?</h2>
    <p className="text-xl mb-8">Book your comfortable Pune to Malvan cab today and travel with peace of mind!</p>
    
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="tel:+9191305454491" className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-md">
        Call Now: +91 91305454491
      </a>
      <a href="https://aimcab.com" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-700 transition duration-300">
        Visit Our Website
      </a>
    </div>
    
    <div className="mt-8 flex justify-center space-x-4">
      <div className="bg-white bg-opacity-20 p-3 rounded-full">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
      <div className="bg-white bg-opacity-20 p-3 rounded-full">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="bg-white bg-opacity-20 p-3 rounded-full">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
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
