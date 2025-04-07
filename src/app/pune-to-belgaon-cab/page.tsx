import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';

const page = () => {
  return (
    <>
      <div>
        <Head>
        <title>Pune to Belgaon Cab | Affordable & Reliable Taxi Service</title>
      <meta name="description" content="Book Pune to Belgaon cab services with Aim Cab for a safe, comfortable & affordable ride. 24/7 booking, professional drivers & well-maintained taxis." />
      <link rel="canonical" href="https://aimcab.com/pune-to-belgaon-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Belgaon cab, Pune To Belgaon cab Services, Cab Services From Pune To Belgaon, Pune To Belgaon Cab Services charges, Best cab Services Pune To Belgaon" />
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
        Pune to Belgaon Cab Services – Affordable & Comfortable Rides
        </h2>

        <BookingForm />

{/* Hero Section */}
<section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6 rounded-lg shadow-lg">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Pune to Belgaon Cab Services</h1>
    <p className="text-xl md:text-2xl mb-8">Experience comfortable, reliable, and affordable travel with Aim Cab</p>
    <a href="https://aimcab.com" target="_blank" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-100 transition duration-300 inline-block">
      Book Now
    </a>
  </div>
</section>

{/* Service Description */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className="max-w-4xl mx-auto">
    <h3 className="text-3xl font-bold text-blue-700 mb-6">Your Perfect Travel Partner from Pune to Belgaon</h3>
    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
      <p className="text-lg leading-relaxed">
        Looking for Pune to Belgaon cab services that are affordable, comfortable, and reliable? Aim Cab offers top-notch cab services from Pune to Belgaon with professional drivers, clean vehicles, and the lowest fares in the market. Whether you're traveling for business, leisure, or a family trip, we ensure a seamless and hassle-free experience.
        <br/><br/>
        Our Pune to Belgaon cab services come with multiple vehicle options, including hatchbacks, sedans, SUVs, and luxury cars. With a transparent pricing structure and zero hidden charges, we guarantee customer satisfaction. Book your Pune to Belgaon cab today for a smooth and enjoyable journey!
      </p>
    </div>
  </div>
</section>

{/* Why Choose Aim Cab */}
<section className="mt-12 p-8 bg-gray-50 rounded-xl">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-blue-700 mb-8 text-center">Why Travelers Choose Aim Cab</h4>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-blue-500">
        <h5 className="text-xl font-semibold mb-3 text-gray-800">💰 Best Price Guarantee</h5>
        <p className="text-gray-700">Lowest rates in the market with no hidden charges</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-green-500">
        <h5 className="text-xl font-semibold mb-3 text-gray-800">🚗 Premium Vehicles</h5>
        <p className="text-gray-700">Well-maintained hatchbacks, sedans, SUVs and luxury cars</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-yellow-500">
        <h5 className="text-xl font-semibold mb-3 text-gray-800">👨‍✈️ Professional Drivers</h5>
        <p className="text-gray-700">Experienced, trained and courteous chauffeurs</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-red-500">
        <h5 className="text-xl font-semibold mb-3 text-gray-800">⏰ 24/7 Availability</h5>
        <p className="text-gray-700">Book anytime for instant confirmation</p>
      </div>
    </div>
  </div>
</section>

{/* Service Options */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-blue-700 mb-8 text-center">Flexible Travel Options</h4>
    
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-blue-50 p-6 rounded-lg text-center">
        <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <span className="text-blue-600 text-2xl">→</span>
        </div>
        <h5 className="text-xl font-bold mb-3">One-Way Trip</h5>
        <p>Perfect for single journeys with no return plans</p>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <span className="text-green-600 text-2xl">↔</span>
        </div>
        <h5 className="text-xl font-bold mb-3">Round Trip</h5>
        <p>Best value for return journeys</p>
      </div>
      
      <div className="bg-purple-50 p-6 rounded-lg text-center">
        <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <span className="text-purple-600 text-2xl">✈</span>
        </div>
        <h5 className="text-xl font-bold mb-3">Outstation</h5>
        <p>Comfortable long-distance travel</p>
      </div>
    </div>
  </div>
</section>

{/* Pricing Table */}
<section className="mt-12 p-8 bg-gray-50 rounded-xl">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-blue-700 mb-8 text-center">Transparent Pricing</h4>
    
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-4 text-left">Cab Type</th>
            <th className="p-4 text-center">Distance</th>
            <th className="p-4 text-center">Price/KM</th>
            <th className="p-4 text-center">Estimated Fare</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-blue-50">
            <td className="p-4 font-medium">Hatchback</td>
            <td className="p-4 text-center">350 KM</td>
            <td className="p-4 text-center">₹11/km</td>
            <td className="p-4 text-center font-bold">₹3,850</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-4 font-medium">Sedan</td>
            <td className="p-4 text-center">350 KM</td>
            <td className="p-4 text-center">₹12/km</td>
            <td className="p-4 text-center font-bold">₹4,200</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-4 font-medium">SUV</td>
            <td className="p-4 text-center">350 KM</td>
            <td className="p-4 text-center">₹14/km</td>
            <td className="p-4 text-center font-bold">₹4,900</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-4 font-medium">Innova</td>
            <td className="p-4 text-center">350 KM</td>
            <td className="p-4 text-center">₹16/km</td>
            <td className="p-4 text-center font-bold">₹5,600</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
      <p className="text-yellow-800"><strong>Note:</strong> Additional toll charges, driver allowances, and night charges may apply.</p>
    </div>
  </div>
</section>

{/* Attractions */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-blue-700 mb-8 text-center">Explore Belgaon's Highlights</h4>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-2">Belgaum Fort</h5>
          <p className="text-gray-700">A historical fort showcasing ancient architecture and rich history.</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="bg-green-100 p-3 rounded-full mr-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-2">Gokak Falls</h5>
          <p className="text-gray-700">A breathtaking waterfall, perfect for photography and sightseeing.</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="bg-purple-100 p-3 rounded-full mr-4">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-2">Kamala Basti</h5>
          <p className="text-gray-700">A famous Jain temple located within the Belgaum Fort premises.</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="bg-red-100 p-3 rounded-full mr-4">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
          </svg>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-2">Vajrapoha Falls</h5>
          <p className="text-gray-700">An offbeat destination for nature lovers and adventure seekers.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FAQ */}
<section className="mt-12 p-8 bg-gray-50 rounded-xl">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-blue-700 mb-8 text-center">Frequently Asked Questions</h4>
    
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-xl font-semibold mb-2 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
          How do I book a Pune to Belgaon cab with Aim Cab?
        </h5>
        <p className="text-gray-700 pl-11">You can book online via <a href="https://aimcab.com" className="text-blue-500 underline">aimcab.com</a> or call us directly.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-xl font-semibold mb-2 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
          What is the estimated travel time from Pune to Belgaon?
        </h5>
        <p className="text-gray-700 pl-11">The journey takes approximately 6 to 7 hours.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-xl font-semibold mb-2 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
          Are there any extra charges apart from the cab fare?
        </h5>
        <p className="text-gray-700 pl-11">Toll charges and parking fees are additional.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-xl font-semibold mb-2 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
          Is it safe to travel with Aim Cab?
        </h5>
        <p className="text-gray-700 pl-11">Yes! We prioritize safety with sanitized cabs and professional drivers.</p>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section className="mt-12 p-12 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-xl text-center">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold mb-6">Ready for Your Pune to Belgaon Journey?</h4>
    <p className="text-xl mb-8">Experience the comfort and reliability of Aim Cab's premium services</p>
    
    <div className="flex flex-col md:flex-row justify-center gap-4">
      <a href="https://aimcab.com" target="_blank" className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-100 transition duration-300 inline-block">
        Book Online Now
      </a>
      <a href="tel:+918166922792" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-blue-600 transition duration-300 inline-block">
        Call: +91 8166922792
      </a>
    </div>
    
    <div className="mt-8 pt-6 border-t border-blue-400">
      <p className="text-lg">Trusted by thousands of travelers since 2001</p>
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
