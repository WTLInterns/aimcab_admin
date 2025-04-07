import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';

const page = () => {
  return (
    <>
      <div>
        <Head>
        <title>Pune to Miraj Cab Services | Affordable & Safe Taxi</title>
      <meta name="description" content="Book Pune to Miraj cab services with Aim Cab for a comfortable journey. Enjoy affordable fares, reliable drivers, and hassle-free online booking." />
      <link rel="canonical" href="https://aimcab.com/pune-to-miraj-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Miraj cab, Pune To Miraj Cab Services, Cab Services From Pune To Miraj, Pune To Miraj Cab Services charges, Best cab Services Pune To Miraj" />
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
        Pune to Miraj Cab Services – Book Affordable & Reliable Cabs
        </h2>

        <BookingForm />

  {/* Hero Service Description */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <h3 className="text-3xl font-bold text-indigo-800">Book Your Pune to Miraj Cab with Aim Cab</h3>
  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
    <span className="block mb-3">Looking for a <span className="font-semibold text-indigo-600">Pune to Miraj cab service</span> that combines affordability, reliability, and comfort?</span>
    Aim Cab provides <span className="font-semibold">premium cab services</span> from Pune to Miraj at the <span className="font-bold text-indigo-600">lowest prices in the market</span>. Whether you're traveling for business, visiting family, or going on vacation, we guarantee a <span className="font-semibold">smooth and hassle-free journey</span>.
    <br/><br/>
    With our <span className="font-semibold">well-maintained fleet</span>, <span className="font-semibold">expert drivers</span>, and <span className="font-semibold">competitive pricing</span>, Aim Cab is your perfect travel partner. <span className="font-bold text-indigo-600">Book today</span> and enjoy a stress-free ride!
  </p>
</section>

{/* Why Choose Us - Card Style */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-lg">
  <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">Why Choose Aim Cab for Pune to Miraj?</h4>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-indigo-500 hover:shadow-md transition-all">
      <h5 className="text-xl font-semibold text-indigo-700">💰 Best Market Prices</h5>
      <p className="mt-2 text-gray-700">Competitive rates for premium cab services</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-indigo-500 hover:shadow-md transition-all">
      <h5 className="text-xl font-semibold text-indigo-700">🔍 Transparent Pricing</h5>
      <p className="mt-2 text-gray-700">No hidden costs - complete clarity</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-indigo-500 hover:shadow-md transition-all">
      <h5 className="text-xl font-semibold text-indigo-700">🚗 Variety of Cabs</h5>
      <p className="mt-2 text-gray-700">Hatchbacks, sedans, SUVs, and luxury cars</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-indigo-500 hover:shadow-md transition-all">
      <h5 className="text-xl font-semibold text-indigo-700">👨‍✈️ Expert Drivers</h5>
      <p className="mt-2 text-gray-700">Professional drivers who know the route</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-indigo-500 hover:shadow-md transition-all">
      <h5 className="text-xl font-semibold text-indigo-700">⏰ 24/7 Service</h5>
      <p className="mt-2 text-gray-700">Book anytime with round-the-clock support</p>
    </div>
    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-indigo-500 hover:shadow-md transition-all">
      <h5 className="text-xl font-semibold text-indigo-700">🔄 Multiple Options</h5>
      <p className="mt-2 text-gray-700">One-way, round-trip, and outstation services</p>
    </div>
  </div>
  <div className="mt-6 text-center">
    <a href="https://aimcab.com" target="_blank" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
      Book Now at aimcab.com
    </a>
  </div>
</section>

{/* Service Options */}
<section className="mt-10 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">Pune to Miraj Cab Services</h4>
  
  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-indigo-700">1. One-Way Cab</h5>
      <p className="mt-3 text-gray-700">
        Planning a single trip? Our Pune to Miraj taxi service offers the most budget-friendly rates for one-way travel.
      </p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-indigo-700">2. Round Trip</h5>
      <p className="mt-3 text-gray-700">
        Need to return? Our round-trip service provides complete convenience at competitive prices.
      </p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-indigo-700">3. Outstation Service</h5>
      <p className="mt-3 text-gray-700">
        Perfect for vacations or business trips - comfortable long-distance travel solutions.
      </p>
    </div>
  </div>
</section>

{/* Pricing Table */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-lg">
  <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">Pune to Miraj Cab Fare</h4>
  <p className="text-lg text-center text-gray-600 mb-6">
    Affordable pricing with the best value for your 230km journey
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-indigo-600 text-white">
          <th className="p-3 text-left rounded-tl-lg">Cab Type</th>
          <th className="p-3 text-center">Distance</th>
          <th className="p-3 text-center">Price/KM</th>
          <th className="p-3 text-right rounded-tr-lg">Estimated Fare</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200 hover:bg-blue-50">
          <td className="p-3 font-medium">Hatchback</td>
          <td className="p-3 text-center">230 KM</td>
          <td className="p-3 text-center">₹11/km</td>
          <td className="p-3 text-right">₹2,530</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-blue-50">
          <td className="p-3 font-medium">Sedan</td>
          <td className="p-3 text-center">230 KM</td>
          <td className="p-3 text-center">₹12/km</td>
          <td className="p-3 text-right">₹2,760</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-blue-50">
          <td className="p-3 font-medium">SUV</td>
          <td className="p-3 text-center">230 KM</td>
          <td className="p-3 text-center">₹14/km</td>
          <td className="p-3 text-right">₹3,220</td>
        </tr>
        <tr className="hover:bg-blue-50">
          <td className="p-3 font-medium">Innova</td>
          <td className="p-3 text-center">230 KM</td>
          <td className="p-3 text-center">₹16/km</td>
          <td className="p-3 text-right">₹3,680</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className="mt-4 text-sm text-gray-500 italic">
    *Additional tolls, driver allowances, and night charges may apply
  </p>
</section>

{/* Attractions */}
<section className="mt-10 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">Must-Visit Places in Miraj</h4>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-indigo-700">🎵 Miraj Musical Instruments</h5>
      <p className="mt-2 text-gray-700">World-famous for handcrafted instruments</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-indigo-700">🛕 Dattatraya Temple</h5>
      <p className="mt-2 text-gray-700">Spiritual destination with thousands of devotees</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-indigo-700">🌿 Krishna Riverbank</h5>
      <p className="mt-2 text-gray-700">Scenic spot perfect for nature lovers</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-indigo-700">🕌 Ganesh Temple</h5>
      <p className="mt-2 text-gray-700">Peaceful temple with beautiful surroundings</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h5 className="text-xl font-bold text-indigo-700">🏰 Fort Miraj</h5>
      <p className="mt-2 text-gray-700">Historical fort showcasing rich heritage</p>
    </div>
  </div>
</section>

{/* FAQs */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-lg">
  <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">Frequently Asked Questions</h4>
  <div className="space-y-6">
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-indigo-700">1. How to book a Pune to Miraj cab?</h5>
      <p className="mt-2 text-gray-700">Visit <a href="https://aimcab.com" className="text-blue-500 underline">aimcab.com</a> and confirm your ride in minutes.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-indigo-700">2. What's the travel duration?</h5>
      <p className="mt-2 text-gray-700">Typically 4-5 hours depending on traffic.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-indigo-700">3. SUV fare for Pune to Miraj?</h5>
      <p className="mt-2 text-gray-700">₹14/km, approximately ₹3,220 total.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-indigo-700">4. Are there extra charges?</h5>
      <p className="mt-2 text-gray-700">Only applicable tolls, parking, and night allowances.</p>
    </div>
    <div className="border-b border-gray-200 pb-4">
      <h5 className="text-xl font-semibold text-indigo-700">5. Can I book round-trip?</h5>
      <p className="mt-2 text-gray-700">Yes! We offer budget-friendly round-trip services.</p>
    </div>
  </div>
  <div className="mt-8 text-center">
    <a href="#contact" className="text-blue-500 font-semibold hover:underline">
      View all 10 FAQs ↓
    </a>
  </div>
</section>

{/* About & CTA */}
<section className="mt-10 p-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl shadow-xl text-white">
  <h4 className="text-3xl font-bold text-center mb-6">About Aim Cab</h4>
  <p className="text-lg text-center mb-8">
    Trusted since 2001, we've provided affordable and comfortable Pune to Miraj cab services to over 200,000 satisfied customers.
  </p>
  
  <div className="grid md:grid-cols-3 gap-6 mb-10">
    <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
      <h5 className="text-xl font-bold">20+ Years</h5>
      <p>Trusted experience</p>
    </div>
    <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
      <h5 className="text-xl font-bold">500+ Vehicles</h5>
      <p>Extensive fleet options</p>
    </div>
    <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
      <h5 className="text-xl font-bold">3,000+ Trips</h5>
      <p>Successful outstation journeys</p>
    </div>
  </div>

  <div className="text-center">
    <h5 className="text-2xl font-bold mb-4">Ready for Your Journey?</h5>
    <p className="text-xl mb-6">Book your Pune to Miraj cab today at unbeatable prices!</p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="tel:+918166922792" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
        📞 Call +91 8166922792
      </a>
      <a href="https://aimcab.com" target="_blank" className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-900 transition-colors">
        🌐 Visit aimcab.com
      </a>
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
