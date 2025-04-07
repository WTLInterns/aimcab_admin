import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';

const Page = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pune to Ganpatipule Cab | Best Taxi Service at Low Fare</title>
        <meta name="description" content="Book a Pune to Ganpatipule cab with Aim Cab for a comfortable journey. Affordable fares, expert drivers, and easy online booking. Travel hassle-free today!"/>
        <link rel="canonical" href="https://aimcab.com/pune-to-ganpatipule-cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="Pune To Ganpatipule Cab, Pune To Ganpatipule Cab Services, Cab Services From Pune To Ganpatipule, Pune To Ganpatipule Cab Services charges" />
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

        {/* Main Title */}
        <h2 className="text-3xl font-bold mt-4 text-center">
        Pune To Ganpatipule Cab – Best Cab Services at Affordable Prices
        </h2>

        <BookingForm />

        {/* Service Description */}
     {/* Hero Section */}
<section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4 sm:px-6 rounded-lg shadow-lg">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-3xl sm:text-4xl font-bold mb-6">
      🚖 Premium Pune to Ganpatipule Cab Service
    </h1>
    <p className="text-xl sm:text-2xl mb-8">
      Comfortable • Affordable • Reliable
    </p>
    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
      <p className="text-lg sm:text-xl">
        Experience seamless travel with Aim Cab's professional service. Book now for the best rates!
      </p>
      <a href="https://aimcab.com" className="mt-4 inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300">
        Book Instantly
      </a>
    </div>
  </div>
</section>

{/* Service Description */}
<section className="mt-12 p-6 bg-white rounded-xl shadow-md">
  <div className="max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold text-blue-700 flex items-center">
      <span className="mr-2">🚖</span> Pune to Ganpatipule Cab Service
    </h3>
    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
      <p className="text-lg text-gray-800">
        Looking for a Pune to Ganpatipule cab service that is reliable, affordable, and comfortable? Aim Cab offers the best cab services to make your journey seamless. With a professional team of drivers, well-maintained vehicles, and transparent pricing, we ensure a hassle-free travel experience.
      </p>
    </div>
  </div>
</section>

{/* Why Choose Us - Card Grid */}
<section className="mt-12 p-6">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-2xl font-bold text-blue-700 flex items-center mb-8">
      <span className="mr-2">🏆</span> Why Choose Aim Cab?
    </h4>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition duration-300">
        <div className="flex items-start">
          <span className="text-green-500 text-xl mr-3">✓</span>
          <div>
            <h5 className="font-bold text-lg">Affordable Pricing</h5>
            <p className="text-gray-700">Get the lowest price in the market for Pune to Ganpatipule cab services.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition duration-300">
        <div className="flex items-start">
          <span className="text-green-500 text-xl mr-3">✓</span>
          <div>
            <h5 className="font-bold text-lg">Transparent Charges</h5>
            <p className="text-gray-700">What you see is what you pay, with no surprise fees.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition duration-300">
        <div className="flex items-start">
          <span className="text-green-500 text-xl mr-3">✓</span>
          <div>
            <h5 className="font-bold text-lg">Comfortable Rides</h5>
            <p className="text-gray-700">Our cabs are regularly serviced for a smooth journey.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition duration-300">
        <div className="flex items-start">
          <span className="text-green-500 text-xl mr-3">✓</span>
          <div>
            <h5 className="font-bold text-lg">Experienced Drivers</h5>
            <p className="text-gray-700">Skilled drivers with extensive route knowledge.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition duration-300">
        <div className="flex items-start">
          <span className="text-green-500 text-xl mr-3">✓</span>
          <div>
            <h5 className="font-bold text-lg">Multiple Options</h5>
            <p className="text-gray-700">Hatchbacks, Sedans, SUVs, and luxury cabs available.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition duration-300">
        <div className="flex items-start">
          <span className="text-green-500 text-xl mr-3">✓</span>
          <div>
            <h5 className="font-bold text-lg">24/7 Service</h5>
            <p className="text-gray-700">Book anytime with immediate confirmation.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Pricing Section */}
<section className="mt-12 p-6 bg-gray-50 rounded-xl">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-2xl font-bold text-blue-700 mb-6">
      💰 Transparent Pricing
    </h4>
    
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="w-full">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left">Cab Type</th>
            <th className="p-3 text-center">Distance</th>
            <th className="p-3 text-center">Price/KM</th>
            <th className="p-3 text-right">Estimated Fare</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-blue-50">
            <td className="p-3 font-medium">Hatchback</td>
            <td className="p-3 text-center">345 KM</td>
            <td className="p-3 text-center">₹11/km</td>
            <td className="p-3 text-right">₹3,795</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-3 font-medium">Sedan</td>
            <td className="p-3 text-center">345 KM</td>
            <td className="p-3 text-center">₹12/km</td>
            <td className="p-3 text-right">₹4,140</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-3 font-medium">SUV</td>
            <td className="p-3 text-center">345 KM</td>
            <td className="p-3 text-center">₹14/km</td>
            <td className="p-3 text-right">₹4,830</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-3 font-medium">Innova</td>
            <td className="p-3 text-center">345 KM</td>
            <td className="p-3 text-center">₹16/km</td>
            <td className="p-3 text-right">₹5,520</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r">
      <p className="text-sm text-yellow-800">
        <strong>Note:</strong> Toll charges, driver allowance, and night charges may apply.
      </p>
    </div>
  </div>
</section>

{/* Places to Visit */}
<section className="mt-12 p-6">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-2xl font-bold text-blue-700 mb-6">
      🌴 Must-Visit Places in Ganpatipule
    </h4>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h5 className="font-bold text-lg text-blue-600 mb-2">Ganpatipule Beach</h5>
        <p className="text-gray-700">One of the most scenic beaches in Maharashtra, offering breathtaking views.</p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h5 className="font-bold text-lg text-blue-600 mb-2">Ganpatipule Temple</h5>
        <p className="text-gray-700">Sacred temple of Lord Ganesha attracting thousands of devotees.</p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h5 className="font-bold text-lg text-blue-600 mb-2">Jaigad Fort</h5>
        <p className="text-gray-700">Historic sea fort with stunning panoramic views of the Arabian Sea.</p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h5 className="font-bold text-lg text-blue-600 mb-2">Aare Ware Beach</h5>
        <p className="text-gray-700">Secluded and picturesque beach, ideal for peace and tranquility.</p>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="mt-12 p-6 bg-gray-50 rounded-xl">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-2xl font-bold text-blue-700 mb-6">
      ❓ Frequently Asked Questions
    </h4>
    
    <div className="space-y-4">
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h5 className="font-bold text-lg text-blue-600">How can I book a Pune to Ganpatipule cab?</h5>
        <p className="mt-2 text-gray-700">Booking is simple! Visit <a href="https://aimcab.com" className="text-blue-500 underline">aimcab.com</a>, enter your trip details, and confirm instantly.</p>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h5 className="font-bold text-lg text-blue-600">What is the distance from Pune to Ganpatipule?</h5>
        <p className="mt-2 text-gray-700">Approximately 345 km (7-8 hours travel time).</p>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h5 className="font-bold text-lg text-blue-600">Can I book for a round trip?</h5>
        <p className="mt-2 text-gray-700">Absolutely! We offer convenient round-trip services.</p>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h5 className="font-bold text-lg text-blue-600">Are there any hidden charges?</h5>
        <p className="mt-2 text-gray-700">No, our pricing is completely transparent.</p>
      </div>
    </div>
    
    {/* <div className="mt-6 text-center">
      <a href="#contact" className="text-blue-600 font-semibold hover:underline">
        View all FAQs →
      </a>
    </div> */}
  </div>
</section>

        {/* About Aim Cab */}
        <section className="mt-12 py-12 px-6 bg-blue-700 text-white rounded-xl text-center">
        <div className="max-w-3xl mx-auto">
    <h3 className="text-2xl sm:text-3xl font-bold mb-6">
      Ready for Your Ganpatipule Trip?
    </h3>
    <p className="text-xl mb-8">
      Book your cab today and travel with comfort and confidence!
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="https://aimcab.com" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300">
        Book Online Now
      </a>
      <a href="tel:+918166922792" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
        Call: +91 8166922792
      </a>
    </div>
  </div>
          
        </section>
        <div>
            {/* Redesigned Responsive Footer */}
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
                <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-2">
                  {/* Pune Button */}
                  <a
                    href="/Pune"
                    className="relative inline-block px-8 sm:px-16 md:px-20 py-4 rounded-full 
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
                    className="relative inline-block px-8 sm:px-16 md:px-20 py-4 rounded-full 
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
                <b className="text-yellow-400 transition-all duration-300 ease-in-out hover:text-white">
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
      </div>
    </>
  );
};

export default Page;
