import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';

const page = () => {
  return (
    <>
      <div>
        <Head>
        <title>Pune to Chiplun Cab | Affordable & Comfortable Taxi Ride</title>
      <meta name="description" content="Book a Pune to Chiplun cab with Aim Cab for a safe and hassle-free journey. Enjoy affordable fares, professional drivers, and easy online booking." />
      <link rel="canonical" href="https://aimcab.com/pune-to-chiplun-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Chiplun Cab, Pune To Chiplun Cab Services, Cab Services From Pune To Chiplun, Pune To Chiplun Cab Services charges, Best cab Services Pune To Chiplun" />
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
        Pune to Chiplun Cab – Book Affordable & Comfortable Rides
        </h2>

        <BookingForm />

        {/* Service Description */}
  {/* Hero Service Description */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm">
  <div className="max-w-4xl mx-auto">
    <h3 className="text-3xl font-bold text-indigo-800">
      Book Your Pune to Chiplun Cab with Aim Cab
    </h3>
    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
      Looking for a Pune to Chiplun cab service that is affordable, reliable, and comfortable? Aim Cab provides hassle-free cab services from Pune to Chiplun at the best prices in the market. Whether you are traveling for leisure, business, or a family trip, we ensure a smooth and safe ride.
      <br />
      Our fleet of well-maintained vehicles, professional drivers, and transparent pricing make us the preferred choice for travelers. Book your Pune to Chiplun cab today and experience a seamless journey!
    </p>
  </div>
</section>

{/* Why Choose Aim Cab - Card Grid */}
<section className="mt-10 p-6">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">
      Why Choose Aim Cab for Pune to Chiplun Cab Services?
    </h4>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-indigo-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-800">Lowest Market Price</h5>
            <p className="mt-2 text-gray-600">
              Enjoy the best cab services from Pune to Chiplun at competitive rates.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-green-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-800">No Hidden Costs</h5>
            <p className="mt-2 text-gray-600">
              We believe in complete transparency, ensuring a hassle-free booking experience.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-800">Comfort & Quality</h5>
            <p className="mt-2 text-gray-600">
              Our vehicles are regularly serviced to provide you with a smooth ride.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-purple-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-800">Expert Drivers</h5>
            <p className="mt-2 text-gray-600">
              Our professional chauffeurs have years of experience navigating this route.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-yellow-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-800">24/7 Customer Assistance</h5>
            <p className="mt-2 text-gray-600">
              Support available whenever you need it, ensuring peace of mind.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-red-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l-6-6m0 0l6-6m-6 6h18"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-800">Flexible Ride Options</h5>
            <p className="mt-2 text-gray-600">
              Choose between one-way, round-trip, or long-distance travel.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Pune to Chiplun Cab Services Options */}
<section className="mt-10 p-6 bg-gray-50 rounded-xl">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">
      Pune to Chiplun Cab Services
    </h4>
    <p className="text-lg text-center text-gray-600 mb-8">
      Aim Cab offers multiple cab services to fit your travel needs.
    </p>
    <div className="grid md:grid-cols-3 gap-4">
      {/* One-Way Cab */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"></path>
          </svg>
        </div>
        <h5 className="text-xl font-bold text-gray-800 mb-2">One-Way Cab</h5>
        <p className="text-gray-600">
          For a cost-effective and comfortable one-way trip from Pune to Chiplun.
        </p>
      </div>
      {/* Round Trip Cab */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20l9-8-9-8-9 8 9 8z"></path>
          </svg>
        </div>
        <h5 className="text-xl font-bold text-gray-800 mb-2">Round Trip Cab</h5>
        <p className="text-gray-600">
          Return journey services designed for convenience and affordability.
        </p>
      </div>
      {/* Outstation Services */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3"></path>
          </svg>
        </div>
        <h5 className="text-xl font-bold text-gray-800 mb-2">Outstation Services</h5>
        <p className="text-gray-600">
          Ideal for extended trips—enjoy a relaxing, stress-free journey.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Cab Service Overview & Pricing Table */}
<section className="mt-10 p-6">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">
      Pune to Chiplun Cab Services Charges
    </h4>
    <p className="text-lg text-center text-gray-600 mb-8">
      We offer competitive and affordable fares for all our services.
    </p>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-600 text-white">
          <tr>
            <th className="p-4 text-left">Cab Type</th>
            <th className="p-4 text-left">Distance (KM)</th>
            <th className="p-4 text-left">Price Per KM (₹)</th>
            <th className="p-4 text-left">Estimated Fare (₹)</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium">Hatchback</td>
            <td className="p-4">250 KM</td>
            <td className="p-4">₹11/km</td>
            <td className="p-4">₹2,750</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium">Sedan</td>
            <td className="p-4">250 KM</td>
            <td className="p-4">₹12/km</td>
            <td className="p-4">₹3,000</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium">SUV</td>
            <td className="p-4">250 KM</td>
            <td className="p-4">₹14/km</td>
            <td className="p-4">₹3,500</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium">Innova</td>
            <td className="p-4">250 KM</td>
            <td className="p-4">₹16/km</td>
            <td className="p-4">₹4,000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-4 text-lg text-center">
      <strong>Note:</strong> Additional charges like toll fees, parking, and driver allowances may apply.
    </p>
  </div>
</section>

{/* Must-Visit Places Section */}
<section className="mt-10 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-center text-gray-800 mb-8">
      Must-Visit Places While Traveling from Pune to Chiplun
    </h4>
    <p className="text-lg text-center text-gray-600 mb-8">
      Chiplun is known for its natural beauty, historical temples, and scenic beaches.
    </p>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h5 className="text-xl font-bold text-green-700 mb-3">Parshuram Temple</h5>
        <p className="text-gray-600">
          A spiritual and historical site dedicated to Lord Parshuram, offering stunning architectural beauty.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h5 className="text-xl font-bold text-blue-700 mb-3">Guhagar Beach</h5>
        <p className="text-gray-600">
          A pristine beach ideal for relaxation, away from the usual tourist hustle.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h5 className="text-xl font-bold text-green-700 mb-3">Walavalkar Shivaji Museum</h5>
        <p className="text-gray-600">
          A museum preserving the legacy of Chhatrapati Shivaji Maharaj, perfect for history lovers.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h5 className="text-xl font-bold text-blue-700 mb-3">Vashishti River</h5>
        <p className="text-gray-600">
          Enjoy boating and breathtaking views along this picturesque river.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2">
        <h5 className="text-xl font-bold text-indigo-700 mb-3">Marleshwar Temple</h5>
        <p className="text-gray-600">
          A hidden gem nestled within a cave, featuring a beautiful waterfall nearby.
        </p>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section - Accordion */}
<section className="mt-10 p-6">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">
      Frequently Asked Questions (FAQs)
    </h4>
    <div className="space-y-4">
      {/* FAQ Item 1 */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">
            How can I book a Pune to Chiplun cab?
          </span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">
            Booking is simple! Visit <a href="https://aimcab.com" className="text-blue-500 underline">aimcab.com</a> and enter your details to confirm your ride.
          </p>
        </div>
      </div>
      {/* FAQ Item 2 */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">
            What is the average travel time from Pune to Chiplun by cab?
          </span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">
            The journey usually takes 4.5 to 5 hours, depending on road and traffic conditions.
          </p>
        </div>
      </div>
      {/* FAQ Item 3 */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">
            How much does an SUV cab cost from Pune to Chiplun?
          </span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">
            An SUV cab costs ₹14 per km, totaling around ₹3,500 for the trip.
          </p>
        </div>
      </div>
      {/* FAQ Item 4 */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">
            Are there any extra charges apart from the fare?
          </span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">
            No hidden charges! However, additional tolls, parking, and night driver allowances may apply.
          </p>
        </div>
      </div>
      {/* FAQ Item 5 */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">
            Can I book a round trip from Pune to Chiplun?
          </span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">
            Yes, we offer round-trip cabs at affordable prices.
          </p>
        </div>
      </div>
      {/* FAQ Item 6 */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">
            Are Aim Cab drivers reliable and experienced?
          </span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">
            Absolutely! Our drivers are professional, well-trained, and prioritize passenger safety.
          </p>
        </div>
      </div>
      {/* FAQ Item 7 */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">
            Do I need to provide food and accommodation for the driver on long trips?
          </span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">
            For long trips, a nominal driver allowance may be applicable.
          </p>
        </div>
      </div>
      {/* FAQ Item 8 */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">
            Can I choose the type of cab for my journey?
          </span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">
            Yes! We offer hatchbacks, sedans, SUVs, and luxury cars for your convenience.
          </p>
        </div>
      </div>
      {/* FAQ Item 9 */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">
            Is Aim Cab available for bookings at any time?
          </span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">
            Yes, we operate 24/7 to ensure hassle-free bookings and travel.
          </p>
        </div>
      </div>
      {/* FAQ Item 10 */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">
            What safety measures do Aim Cab follow?
          </span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">
            All our cabs are regularly sanitized, and our drivers follow strict safety protocols for a secure journey.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* About Aim Cab */}
<section className="mt-10 p-6">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-3xl font-bold text-center text-indigo-800 mb-8">
      About Aim Cab
    </h4>
    <p className="mt-4 text-lg text-gray-700">
      Aim Cab has been a trusted name in the travel industry since 2001, offering reliable Pune to Chiplun cab services.
    </p>
    <h5 className="mt-6 text-xl font-bold">Why Choose Aim Cab?</h5>
    <ul className="mt-4 text-lg list-disc pl-6 text-gray-700">
      <li><strong>Experience & Expertise:</strong> With over 20 years in the industry, we are a trusted travel partner.</li>
      <li><strong>Fleet Strength:</strong> We have a fleet of 50+ personally owned cabs and a network of 500+ registered vehicles.</li>
      <li><strong>Customer Satisfaction:</strong> Over 2,00,000 satisfied customers trust our services.</li>
      <li><strong>Successful Trips:</strong> We have completed more than 3,000 outstation trips.</li>
      <li><strong>Safety & Comfort:</strong> Our cabs are well-maintained, sanitized, and driven by trained professionals.</li>
      <li><strong>Hassle-Free Booking:</strong> Simple online booking process with secure payment options.</li>
    </ul>
    <p className="mt-4 text-lg text-gray-700">
      At Aim Cab, we aim to make your journey seamless, safe, and enjoyable at the best prices.
    </p>
    <h5 className="mt-6 text-xl font-bold">Book Your Pune to Chiplun Cab Today!</h5>
    <p className="mt-2 text-lg text-gray-700">
      Experience the best cab service from Pune to Chiplun at unbeatable rates. Book now for a stress-free and comfortable ride!
    </p>
    <div className="mt-6 text-center">
      <p className="mt-4 text-lg font-bold">
        📞 Call Us: <a href="tel:+918166922792" className="text-blue-500 underline">+91 8166922792</a>
      </p>
      <p className="mt-2 text-lg font-bold">
        🌐 Visit: <a href="https://aimcab.com" className="text-blue-500 underline">aimcab.com</a>
      </p>
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
