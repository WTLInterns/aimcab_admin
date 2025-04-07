import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';

const page = () => {
  return (
    <>
      <div>
        <Head>
        <title>Pune to Islampur Cab | Affordable & Reliable Taxi Service</title>
      <meta name="description" content="Book a Pune to Islampur cab with Aim Cab for a hassle-free ride. Affordable fares, expert drivers, and easy online booking. Travel comfortably today!" />
      <link rel="canonical" href="https://aimcab.com/pune-to-islampur-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Islampur Cab, Pune To Islampur Cab Services, Cab Services From Pune To Islampur, Pune To Islampur Cab Services charges, Best cab Services Pune To Islampur" />
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
        Pune To Islampur Cab – Reliable and Affordable Cab Services
        </h2>

        <BookingForm />

   {/* Hero Service Description */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm">
  <div className="max-w-4xl mx-auto">
    <h3 className="text-3xl font-bold text-indigo-800">Book Your Pune To Islampur Cab with Aim Cab</h3>
    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
      Are you looking for a Pune to Islampur cab that is reliable, budget-friendly, and comfortable? Look no further than Aim Cab! We offer top-notch Pune to Islampur cab services to make your journey stress-free. Our fleet of well-maintained cars, experienced drivers, and transparent pricing structure ensure a smooth and safe travel experience. Whether you are traveling for work, leisure, or a family trip, Aim Cab is your trusted travel partner.
    </p>
  </div>
</section>

{/* Why Choose Us - Card Grid */}
<section className="mt-10 p-6">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">Why Choose Aim Cab for Pune To Islampur Cab Services?</h4>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-indigo-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-800">Best-in-class Services</h5>
            <p className="mt-2 text-gray-600">Offering the best cab services from Pune to Islampur with unmatched comfort.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-green-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-800">Affordable Pricing</h5>
            <p className="mt-2 text-gray-600">Enjoy the lowest market price for your trip.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-800">Transparent Fare</h5>
            <p className="mt-2 text-gray-600">No hidden costs; you pay what is quoted.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-purple-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-800">Professional Drivers</h5>
            <p className="mt-2 text-gray-600">Trained, courteous, and knowledgeable drivers.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-yellow-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-800">Multiple Cab Options</h5>
            <p className="mt-2 text-gray-600">Choose from Hatchbacks, Sedans, SUVs, and luxury vehicles.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-red-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-800">Easy Online Booking</h5>
            <p className="mt-2 text-gray-600">Hassle-free cab booking via our website <a href="https://aimcab.com" target="_blank" className="text-blue-600 font-medium hover:underline">aimcab.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Service Options - Tabs */}
<section className="mt-10 p-6 bg-gray-50 rounded-xl">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">Pune To Islampur Cab Services</h4>
    <p className="text-lg text-center text-gray-600 mb-8">
      Aim Cab ensures that you have multiple options when booking your Pune to Islampur cab services. 
      We provide well-maintained cabs for various types of trips to suit your travel requirements.
    </p>
    
    <div className="grid md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
        <h5 className="text-xl font-bold text-gray-800 mb-2">One-Way Cab</h5>
        <p className="text-gray-600">
          For travelers who only need a one-way drop-off, our Pune to Islampur cab service is the most cost-effective option.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
          </svg>
        </div>
        <h5 className="text-xl font-bold text-gray-800 mb-2">Round Trip Cab</h5>
        <p className="text-gray-600">
          Need a return ride? Our round-trip cab services ensure you get back to Pune comfortably and at a great price.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
        </div>
        <h5 className="text-xl font-bold text-gray-800 mb-2">Outstation Services</h5>
        <p className="text-gray-600">
          Planning to visit nearby places? Our outstation cab services offer flexibility for extended trips.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Pricing Table */}
<section className="mt-10 p-6">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">Pune To Islampur Cab Services Charges</h4>
    <p className="text-lg text-center text-gray-600 mb-8">
      Aim Cab offers the most competitive pricing with no hidden charges. Here's a look at our fare structure:
    </p>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="p-4 text-left">Cab Type</th>
            <th className="p-4 text-left">Distance (KM)</th>
            <th className="p-4 text-left">Price Per KM (₹)</th>
            <th className="p-4 text-left">Estimated Fare (₹)</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium">Hatchback</td>
            <td className="p-4">230 KM</td>
            <td className="p-4">₹11/km</td>
            <td className="p-4 font-semibold text-indigo-600">₹2,530</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium">Sedan</td>
            <td className="p-4">230 KM</td>
            <td className="p-4">₹12/km</td>
            <td className="p-4 font-semibold text-indigo-600">₹2,760</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium">SUV</td>
            <td className="p-4">230 KM</td>
            <td className="p-4">₹14/km</td>
            <td className="p-4 font-semibold text-indigo-600">₹3,220</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium">Innova</td>
            <td className="p-4">230 KM</td>
            <td className="p-4">₹16/km</td>
            <td className="p-4 font-semibold text-indigo-600">₹3,680</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
      <p className="text-yellow-700">
        <strong>Note:</strong> Additional charges for tolls, driver allowance, and night travel may apply.
      </p>
    </div>
  </div>
</section>

{/* Attractions Section */}
<section className="mt-10 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-center text-gray-800 mb-8">Must-Visit Places While Traveling from Pune To Islampur</h4>
    <p className="text-lg text-center text-gray-600 mb-8">
      Islampur is a picturesque destination with many attractions, temples, and scenic spots along the way.
    </p>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h5 className="text-xl font-bold text-green-700 mb-3">Sangli Ganapati Temple</h5>
        <p className="text-gray-600">
          A beautiful and historic temple dedicated to Lord Ganesha, offering spiritual bliss to travelers.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h5 className="text-xl font-bold text-blue-700 mb-3">Krishna River</h5>
        <p className="text-gray-600">
          A tranquil riverbank perfect for a peaceful break during your journey.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h5 className="text-xl font-bold text-green-700 mb-3">Dandoba Hills Forest Reserve</h5>
        <p className="text-gray-600">
          A great place for nature lovers and trekking enthusiasts.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h5 className="text-xl font-bold text-blue-700 mb-3">Sagareshwar Wildlife Sanctuary</h5>
        <p className="text-gray-600">
          A popular eco-tourism site where you can spot various wildlife species and enjoy nature trails.
        </p>
      </div>
    </div>
    
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto text-center">
      <h5 className="text-xl font-bold text-indigo-700 mb-3">Panchgani and Mahabaleshwar (Detour Option)</h5>
      <p className="text-gray-600">
        If you have extra time, these hill stations offer stunning landscapes and a refreshing climate.
      </p>
    </div>
  </div>
</section>

{/* FAQ Section - Accordion */}
<section className="mt-10 p-6">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">Frequently Asked Questions</h4>
    
    <div className="space-y-4">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">How can I book a Pune to Islampur cab with Aim Cab?</span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">Booking is easy! Visit <a href="https://aimcab.com" className="text-blue-600 font-medium hover:underline">aimcab.com</a>, enter your details, and confirm your ride.</p>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">What is the distance from Pune to Islampur by cab?</span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">The distance is approximately 230 km, and the journey typically takes 4 to 5 hours, depending on road conditions and traffic.</p>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">What are the charges for an SUV cab from Pune to Islampur?</span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">The estimated fare for an SUV cab is ₹14 per km, totaling around ₹3,220 for the trip.</p>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">Do I need to pay toll charges separately?</span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">Yes, toll charges are additional and must be paid as per actuals.</p>
        </div>
      </div>
      
      {/* <div className="text-center mt-6">
        <a href="#contact" className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
          View All FAQs
        </a>
      </div> */}
    </div>
  </div>
</section>

{/* About Section with Stats */}
<section className="mt-10 p-6 bg-indigo-50 rounded-xl">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">About Aim Cab</h4>
    
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-lg text-gray-700 mb-6">
        Aim Cab has been a trusted name in the cab industry since 2001, providing reliable and cost-effective travel solutions across India. Over the years, we have built a strong network of 500+ registered cabs, ensuring a seamless travel experience for our customers.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-indigo-100 p-6 rounded-lg">
          <h5 className="text-xl font-semibold text-indigo-800 mb-4">Why Choose Aim Cab?</h5>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700"><strong>Experience & Expertise:</strong> With over 20 years in the industry, we are a trusted travel partner.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700"><strong>Fleet Strength:</strong> We have a fleet of 50+ personally owned cabs and a network of 500+ registered vehicles.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700"><strong>Customer Satisfaction:</strong> We have served over 2,00,000+ happy customers.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-indigo-100 p-6 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <div className="text-3xl font-bold text-indigo-600">20+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <div className="text-3xl font-bold text-indigo-600">500+</div>
              <div className="text-sm text-gray-600">Registered Cabs</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <div className="text-3xl font-bold text-indigo-600">200K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <div className="text-3xl font-bold text-indigo-600">3K+</div>
              <div className="text-sm text-gray-600">Outstation Trips</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center bg-gradient-to-r from-indigo-600 to-blue-600 p-6 rounded-lg text-white">
        <h5 className="text-2xl font-bold mb-4">Book Your Pune To Islampur Cab Today!</h5>
        <p className="mb-6 text-indigo-100">
          Experience the best cab services with Aim Cab. Book now and enjoy a comfortable journey at unbeatable prices!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+918166922792" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            +91 8166922792
          </a>
          <a href="https://aimcab.com" target="_blank" className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-900 transition-colors flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
            </svg>
            Visit aimcab.com
          </a>
        </div>
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
