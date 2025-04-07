import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';

const page = () => {
  return (
    <>
      <div>
        <Head>
        <title>Pune to Nippani Cab | Affordable & Reliable Taxi Service</title>
      <meta name="description" content="Book Pune to Nippani cab services with Aim Cab for a safe, affordable & comfortable ride. 24/7 booking, professional drivers & well-maintained taxis." />
      <link rel="canonical" href="https://aimcab.com/pune-to-nippani-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Nippani Cab, Pune To Nippani cab Services, Cab Services From Pune To Nippani, Pune To Nippani Cab Services charges, Best cab Services Pune To Nippani" />
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
        Pune to Nippani Cab Services – Affordable & Reliable Travel with Aim Cab
        </h2>

        <BookingForm />

{/* Hero Section */}
<section className="mt-8 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg">
  <h3 className="text-3xl font-bold text-indigo-800 mb-6">Pune to Nippani Cab – Premium Travel with Aim Cab</h3>
  <div className="bg-white p-6 rounded-lg shadow-inner border-l-4 border-indigo-500">
    <p className="text-lg text-gray-700 leading-relaxed">
      <span className="text-indigo-600 font-semibold">Looking for a comfortable and reliable Pune to Nippani cab?</span> Aim Cab offers the <span className="text-indigo-600 font-semibold">best cab services</span> from Pune to Nippani with:
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      <div className="flex items-center">
        <div className="bg-indigo-100 p-2 rounded-full mr-3">
          <span className="text-indigo-600">✓</span>
        </div>
        <span>Affordable rates</span>
      </div>
      <div className="flex items-center">
        <div className="bg-indigo-100 p-2 rounded-full mr-3">
          <span className="text-indigo-600">✓</span>
        </div>
        <span>Professional drivers</span>
      </div>
      <div className="flex items-center">
        <div className="bg-indigo-100 p-2 rounded-full mr-3">
          <span className="text-indigo-600">✓</span>
        </div>
        <span>Well-maintained vehicles</span>
      </div>
    </div>
  </div>
</section>

{/* Why Choose Us - Card Grid */}
<section className="mt-12 p-6">
  <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">Why Choose Aim Cab?</h4>
  
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {icon: "💲", title: "Lowest Price Guarantee", desc: "Most competitive rates in the market"},
      {icon: "🚙", title: "Comfortable Vehicles", desc: "Sedans, SUVs, and tempo travelers"},
      {icon: "👨‍✈️", title: "Professional Drivers", desc: "Experienced and knowledgeable chauffeurs"},
      {icon: "🔄", title: "Flexible Booking", desc: "One-way, round-trip & multi-day rentals"},
      {icon: "🔍", title: "Transparent Pricing", desc: "No hidden charges, clear structure"},
      {icon: "📞", title: "24/7 Support", desc: "Assistance available anytime"}
    ].map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-indigo-400">
        <div className="text-3xl mb-3">{item.icon}</div>
        <h5 className="text-xl font-bold text-gray-800">{item.title}</h5>
        <p className="text-gray-600 mt-2">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* Service Details */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <div className="flex flex-col md:flex-row gap-8">
    <div className="md:w-1/2">
      <h4 className="text-2xl font-bold text-indigo-800 mb-4">Pune to Nippani Cab Services</h4>
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-lg">
          <span className="font-semibold">Distance:</span> 360 km<br/>
          <span className="font-semibold">Duration:</span> 6-7 hours<br/>
          <span className="font-semibold">Route:</span> Optimal stops for refreshments
        </p>
      </div>
      
      <h5 className="text-xl font-bold text-indigo-700 mt-6 mb-4">Vehicle Options</h5>
      <div className="space-y-4">
        {[
          {type: "Sedan (4-seater)", models: "Swift Dzire, Toyota Etios", ideal: "Small families/solo travelers"},
          {type: "SUV (6-seater)", models: "Ertiga, Innova", ideal: "Group travel"},
          {type: "Luxury Cars", models: "Audi, BMW", ideal: "Premium experience"},
          {type: "Tempo Travelers", models: "", ideal: "Larger groups"}
        ].map((vehicle, i) => (
          <div key={i} className="border-l-4 border-indigo-300 pl-4">
            <h6 className="font-bold text-gray-800">{vehicle.type}</h6>
            <p className="text-gray-700">{vehicle.models && <>{vehicle.models} – </>}{vehicle.ideal}</p>
          </div>
        ))}
      </div>
    </div>
    
    <div className="md:w-1/2">
      <h4 className="text-2xl font-bold text-indigo-800 mb-4">Pricing</h4>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg overflow-hidden shadow">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-3 text-left">Cab Type</th>
              <th className="p-3 text-left">One-Way</th>
              <th className="p-3 text-left">Round-Trip</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              {type: "Sedan", oneWay: "₹3,999", roundTrip: "₹7,999"},
              {type: "SUV", oneWay: "₹5,999", roundTrip: "₹10,999"},
              {type: "Luxury Car", oneWay: "₹9,999", roundTrip: "₹18,999"},
              {type: "Tempo Traveler", oneWay: "₹8,999", roundTrip: "₹16,999"}
            ].map((row, i) => (
              <tr key={i} className={i%2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-3 font-medium">{row.type}</td>
                <td className="p-3">{row.oneWay}</td>
                <td className="p-3 font-semibold text-indigo-600">{row.roundTrip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <p className="text-yellow-800 text-sm">
          <strong>Note:</strong> Toll charges, parking fees, and driver allowances may apply
        </p>
      </div>
    </div>
  </div>
</section>

{/* Features */}
<section className="mt-12 p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl">
  <h4 className="text-2xl font-bold text-indigo-800 mb-6">Our Premium Features</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-indigo-700 flex items-center">
        <span className="bg-indigo-100 p-2 rounded-full mr-3">🛡️</span>
        Safety First
      </h5>
      <p className="mt-2 text-gray-700 ml-10">All cabs sanitized and well-maintained</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-indigo-700 flex items-center">
        <span className="bg-indigo-100 p-2 rounded-full mr-3">💳</span>
        Multiple Payment Options
      </h5>
      <p className="mt-2 text-gray-700 ml-10">UPI, Net Banking, or Cash</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-indigo-700 flex items-center">
        <span className="bg-indigo-100 p-2 rounded-full mr-3">🎛️</span>
        Customizable Packages
      </h5>
      <p className="mt-2 text-gray-700 ml-10">Tailored to your travel needs</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h5 className="font-bold text-lg text-indigo-700 flex items-center">
        <span className="bg-indigo-100 p-2 rounded-full mr-3">👔</span>
        Corporate Travel Solutions
      </h5>
      <p className="mt-2 text-gray-700 ml-10">Special packages for businesses</p>
    </div>
  </div>
</section>

{/* Attractions */}
<section className="mt-12 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-2xl font-bold text-indigo-800 mb-6">Route Attractions</h4>
  
  <div className="grid md:grid-cols-3 gap-6">
    {[
      {place: "Satara", highlight: "Historical Stopover", attractions: "Ajinkyatara Fort, Kaas Plateau"},
      {place: "Kolhapur", highlight: "City of Temples", attractions: "Mahalaxmi Temple, Rankala Lake"},
      {place: "Nippani", highlight: "Cultural Delight", attractions: "Shri Chaitanya Jyoti Museum, Shri Mahalaxmi Temple"}
    ].map((dest, i) => (
      <div key={i} className="bg-gradient-to-b from-blue-50 to-white p-5 rounded-lg border border-blue-100">
        <h5 className="text-xl font-bold text-[#76453B]">{dest.place}</h5>
        <p className="text-blue-600 font-medium">{dest.highlight}</p>
        <p className="mt-2 text-gray-700">{dest.attractions}</p>
      </div>
    ))}
  </div>
</section>

{/* FAQ */}
<section className="mt-12 p-8 bg-gray-50 rounded-xl">
  <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">Frequently Asked Questions</h4>
  
  <div className="space-y-4">
    {[
      {q: "What are the charges for a Pune to Nippani cab?", a: "One-way fares start from ₹3,999 for a sedan"},
      {q: "How long does the journey take?", a: "Approximately 6 to 7 hours"},
      {q: "Can I book a one-way cab?", a: "Yes, we offer both one-way and round-trip options"},
      {q: "Are there hidden charges?", a: "No, pricing is transparent with all costs informed beforehand"},
      {q: "What safety measures are followed?", a: "All cabs are sanitized with safety protocols"},
      {q: "Can I choose specific cab models?", a: "Yes, based on availability"},
      {q: "Do you provide corporate bookings?", a: "Yes, with special corporate packages"},
      {q: "Can I modify/cancel bookings?", a: "Yes, as per our policy"},
      {q: "How to book?", a: "Visit aimcab.com or call +91 8166922792"}
    ].map((faq, i) => (
      <div key={i} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h5 className="font-bold text-lg text-indigo-700">Q: {faq.q}</h5>
        <p className="mt-2 text-gray-700 pl-6 border-l-2 border-indigo-200">A: {faq.a}</p>
      </div>
    ))}
  </div>
</section>

{/* CTA Section */}
<section className="mt-12 p-10 bg-gradient-to-r from-indigo-700 to-blue-700 rounded-xl text-center text-white">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold mb-4">About Aim Cab</h4>
    <p className="text-xl mb-8">
      Trusted travel partner since 2001 with 50+ cabs, 500+ registered vehicles, and 2 lakh+ happy customers
    </p>
    
    <div className="grid md:grid-cols-3 gap-6 mb-10">
      <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
        <div className="text-3xl font-bold">20+</div>
        <div>Years Experience</div>
      </div>
      <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
        <div className="text-3xl font-bold">500+</div>
        <div>Vehicle Fleet</div>
      </div>
      <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
        <div className="text-3xl font-bold">2L+</div>
        <div>Happy Customers</div>
      </div>
    </div>
    
    <h5 className="text-2xl font-bold mb-6">Ready to Book Your Pune to Nippani Cab?</h5>
    
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="tel:+918166922792" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
        📞 Call: +91 8166922792
      </a>
      <a href="https://aimcab.com" target="_blank" className="bg-indigo-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-800 transition-colors text-lg">
        🌐 Visit: aimcab.com
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
