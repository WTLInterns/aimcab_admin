import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';

const page = () => {
  return (
    <>
      <div>
        <Head>
        <title>Pune to Hubali Cab | Affordable & Reliable Taxi Service</title>
      <meta name="description" content="Book Pune to Hubali cab services with Aim Cab for a smooth and affordable ride. Enjoy hassle-free booking, reliable drivers, and 24/7 availability." />
      <link rel="canonical" href="https://aimcab.com/pune-to-hubali-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Hubali cab, Pune To Hubali cab Services, Cab Services From Pune To Hubali, Pune To Hubali Cab Services charges, Best cab Services Pune To Hubali" />
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
        Pune to Hubali Cab Services – Book Affordable & Reliable Rides
        </h2>

        <BookingForm />

{/* Hero Service Description */}
{/* Hero Service Description */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <h3 className="text-3xl font-bold text-indigo-800">Premium Pune to Hubali Cab Services with Aim Cab</h3>
  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
    <span className="text-indigo-600 font-semibold">Looking for a Pune to Hubali cab service that's reliable, affordable, and comfortable?</span> Aim Cab offers <span className="text-indigo-600 font-semibold">premium cab services</span> from Pune to Hubali at the most competitive prices. Whether you're planning a business trip, family vacation, or personal journey, we guarantee a <span className="text-indigo-600 font-semibold">safe, smooth, and stress-free</span> ride.
    <br/><br/>
    With our <span className="text-indigo-600 font-semibold">well-maintained cabs, expert drivers, and transparent pricing</span>, we deliver an exceptional travel experience. Book your Pune to Hubali cab today and enjoy a <span className="text-indigo-600 font-semibold">hassle-free journey!</span>
  </p>
</section>

{/* Why Choose Us - Card Grid */}
<section className="mt-10 p-6">
  <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">Why Choose Aim Cab for Pune to Hubali?</h4>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {icon: "💰", title: "Lowest Price Guarantee", desc: "Best rates for Pune to Hubali route"},
      {icon: "🔍", title: "No Hidden Charges", desc: "Transparent pricing with upfront details"},
      {icon: "🚗", title: "Variety of Cabs", desc: "Hatchbacks, Sedans, SUVs, Luxury vehicles"},
      {icon: "👨‍✈️", title: "Professional Drivers", desc: "Experienced and courteous chauffeurs"},
      {icon: "🕒", title: "24/7 Support", desc: "Instant booking & assistance anytime"},
      {icon: "🔄", title: "Flexible Options", desc: "One-way, round-trip & outstation services"}
    ].map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-indigo-500">
        <div className="text-3xl mb-3">{item.icon}</div>
        <h5 className="text-xl font-bold text-gray-800">{item.title}</h5>
        <p className="text-gray-600 mt-2">{item.desc}</p>
      </div>
    ))}
  </div>
  <p className="mt-6 text-center text-lg">
    <a href="https://aimcab.com" target="_blank" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
      Book Instantly at aimcab.com
    </a>
  </p>
</section>

{/* Service Options */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-indigo-800 mb-6">Pune to Hubali Cab Services</h4>
  
  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
      <h5 className="text-xl font-bold text-[#76453B]">1. One-Way Cab</h5>
      <p className="mt-3 text-gray-700">
        Perfect for single trips with budget-friendly pricing and comfortable rides.
      </p>
    </div>
    
    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
      <h5 className="text-xl font-bold text-green-800">2. Round-Trip Cab</h5>
      <p className="mt-3 text-gray-700">
        Convenient return journeys with special round-trip discounts.
      </p>
    </div>
    
    <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
      <h5 className="text-xl font-bold text-purple-800">3. Outstation Services</h5>
      <p className="mt-3 text-gray-700">
        Reliable long-distance travel with well-maintained vehicles.
      </p>
    </div>
  </div>
</section>

{/* Pricing Table */}
<section className="mt-10 p-6 bg-gray-50 rounded-xl">
  <h4 className="text-3xl font-bold text-indigo-800 mb-6">Pune to Hubali Cab Fare</h4>
  
  <div className="overflow-x-auto">
    <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
      <thead className="bg-indigo-600 text-white">
        <tr>
          <th className="p-4 text-left">Cab Type</th>
          <th className="p-4 text-left">Distance</th>
          <th className="p-4 text-left">Price/KM</th>
          <th className="p-4 text-left">Total Fare</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {[
          {type: "Hatchback", dist: "420 KM", rate: "₹11/km", total: "₹4,620"},
          {type: "Sedan", dist: "420 KM", rate: "₹12/km", total: "₹5,040"},
          {type: "SUV", dist: "420 KM", rate: "₹14/km", total: "₹5,880"},
          {type: "Innova", dist: "420 KM", rate: "₹16/km", total: "₹6,720"}
        ].map((row, i) => (
          <tr key={i} className={i%2 === 0 ? "bg-white" : "bg-gray-50"}>
            <td className="p-4 font-medium">{row.type}</td>
            <td className="p-4">{row.dist}</td>
            <td className="p-4">{row.rate}</td>
            <td className="p-4 font-semibold text-indigo-600">{row.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
    <p className="text-yellow-800">
      <strong>Note:</strong> Additional toll charges, driver allowances, and night charges may apply.
    </p>
  </div>
</section>

{/* Attractions */}
<section className="mt-10 p-6 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-indigo-800 mb-6">Must-Visit Places on Pune to Hubali Route</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    {[
      {name: "Nrupatunga Hill", desc: "Breathtaking hilltop views and peaceful atmosphere"},
      {name: "Unkal Lake", desc: "Serene lake perfect for boating and picnics"},
      {name: "Chandramouleshwara Temple", desc: "Historic temple with intricate carvings"},
      {name: "Banashankari Temple", desc: "Revered pilgrimage site with beautiful architecture"},
      {name: "Indira Gandhi Glass House Garden", desc: "Well-maintained park for relaxation", colSpan: true}
    ].map((place, i) => (
      <div key={i} className={`bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg ${place.colSpan ? 'md:col-span-2' : ''}`}>
        <h5 className="text-xl font-bold text-indigo-700">{place.name}</h5>
        <p className="mt-2 text-gray-700">{place.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* FAQ */}
<section className="mt-10 p-6 bg-gray-50 rounded-xl">
  <h4 className="text-3xl font-bold text-indigo-800 mb-6">Frequently Asked Questions</h4>
  
  <div className="space-y-4">
    {[
      {q: "How to book a Pune to Hubali cab?", a: "Book online at aimcab.com or call our support team"},
      {q: "How long is the journey?", a: "Approximately 7.5 to 8 hours"},
      {q: "SUV cab charges?", a: "₹14/km (around ₹5,880 total)"},
      {q: "Any additional charges?", a: "Only tolls, parking, and night allowances - no hidden fees"},
      {q: "Round-trip available?", a: "Yes, with special discounts"}
    ].map((faq, i) => (
      <div key={i} className="bg-white p-5 rounded-lg shadow-sm">
        <h5 className="font-bold text-lg text-indigo-700">Q: {faq.q}</h5>
        <p className="mt-2 text-gray-700">A: {faq.a}</p>
      </div>
    ))}
  </div>
</section>

{/* CTA Section */}
<section className="mt-10 p-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl text-center text-white">
  <h4 className="text-3xl font-bold mb-4">About Aim Cab</h4>
  <p className="text-xl mb-6">
    Trusted since 2001 for reliable and comfortable Pune to Hubali cab services.
  </p>
  
  <div className="grid md:grid-cols-3 gap-6 mb-8">
    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
      <div className="text-2xl font-bold">20+ Years</div>
      <div>of trusted service</div>
    </div>
    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
      <div className="text-2xl font-bold">500+ Vehicles</div>
      <div>in our extensive fleet</div>
    </div>
    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
      <div className="text-2xl font-bold">3,000+ Trips</div>
      <div>successfully completed</div>
    </div>
  </div>
  
  <h5 className="text-2xl font-bold mb-4">Ready for Your Pune to Hubali Journey?</h5>
  
  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
    <a href="tel:+918166922792" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
      Call Now: +91 8166922792
    </a>
    <a href="https://aimcab.com" target="_blank" className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-900 transition-colors">
      Visit: aimcab.com
    </a>
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
