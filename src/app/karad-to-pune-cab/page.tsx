"use client"
import React from 'react'
import BookingForm from '../../components/BookingForm'
// import './styles.css'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../container/component/Navbar'
import Footer from '../../container/component/Footer';
import About_Aimcab from '../../components/About_Aimcab';


//change according to your structure make attractive eyecaching and do not change their fields and text data

const styles = {
  // container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  section: "bg-white rounded-lg shadow-lg p-6 mb-8",
  title: "text-3xl font-bold text-center text-gray-900 mb-8",
  subtitle: "text-2xl font-semibold text-[#76453B] mb-4",
  text: "text-lg text-gray-600 leading-relaxed",
  list: "list-disc pl-6 space-y-2",
  table: "min-w-full divide-y divide-gray-200",
  tableHeader: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
  tableCell: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
  button: "bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300",
  link: "text-green-500 hover:text-green-600 transition duration-300",
  card: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300",
  highlight: "text-green-500 font-semibold",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  flexCenter: "flex items-center justify-center",
  gradientBg: "bg-gradient-to-r from-green-500 to-green-600",
  fadeIn: "animate-fade-in duration-500",
  boxShadow: "shadow-lg hover:shadow-xl transition duration-300",
  roundedFull: "rounded-full",
  textGradient: "bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600",
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
       <Navbar/>
      <head>
        <title>Pune to Karad Cab Service | Reliable & Affordable Travel</title>
        <meta name="description" content="Book a reliable Pune to Karad cab service with Aim Cab. Enjoy comfortable rides with professional drivers at the best rates. Easy online booking available." />
        <link rel="canonical" href="https://aimcab.com/pune-to-karad-cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="pune to karad cab service, karad to pune cab, pune to karad taxi, cab from pune to karad, taxi service pune to karad, pune to karad distance, karad to pune distance" />
        <meta name="robots" content="index, follow" />
      </head>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white py-12 md:py-20 text-center ">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10  mx-auto px-4">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold mb-4 "
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
        <div className=" absolute bottom-0 left-0 right-0 h-16 text-[#76453B] bg-white transform skew-y-2 origin-bottom"></div>
      </header>

      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center text-[#76453B]">
        Pune to Karad Cab Services – Affordable & Comfortable Travel
        </h2>

      <div className={styles.fadeIn}>
        <BookingForm />
      </div>

 {/* Hero Service Description */}
<section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm">
  <div className=" mx-auto">
    <h3 className="text-3xl font-bold text-[#76453B]">
      🚖 Book Your Pune to Karad Cab with Aim Cab
    </h3>
    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
      Looking for a <span className="font-bold">Pune to Karad cab</span>? Aim Cab offers the most reliable and affordable taxi service, ensuring a comfortable and hassle-free journey. Whether you need a one-way cab or a round trip, we provide a seamless travel experience with professional drivers and well-maintained vehicles.
    </p>
  </div>
</section>

{/* Why Choose Us - Card Grid */}
<section className="mt-10 p-6">
  <div className=" mx-auto">
    <h4 className="text-3xl font-bold text-center text-[#76453B] mb-8">
      🏆 Why Choose Aim Cab for Your Pune to Karad Trip?
    </h4>
    <div className="grid md:grid-cols-2 gap-6">
      {/* Card 1: Lowest Fare Guarantee */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#F3B664] hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-indigo-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {/* Replace with your SVG path */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-[#76453B]">Lowest Fare Guarantee</h5>
            <p className="mt-2 text-gray-600">
              We offer the most competitive cab rate from Pune to Karad, starting at just ₹11/km.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2: Easy Online Booking */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#F3B664] hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-green-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {/* Replace with your SVG path */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-[#76453B]">Easy Online Booking</h5>
            <p className="mt-2 text-gray-600">
              Enjoy quick and hassle-free online cab booking from Pune to Karad.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3: Well-Maintained Fleet */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#F3B664] hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {/* Replace with your SVG path */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-[#76453B]">Well-Maintained Fleet</h5>
            <p className="mt-2 text-gray-600">
              Choose from hatchbacks, sedans, SUVs, and luxury cars for a comfortable ride.
            </p>
          </div>
        </div>
      </div>

      {/* Card 4: Professional Drivers */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#F3B664] hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-purple-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {/* Replace with your SVG path */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-[#76453B]">Professional Drivers</h5>
            <p className="mt-2 text-gray-600">
              Our skilled drivers ensure a safe and smooth journey.
            </p>
          </div>
        </div>
      </div>

      {/* Card 5: Flexible Booking Options */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#F3B664] hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="bg-yellow-100 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {/* Replace with your SVG path */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-[#76453B]">Flexible Booking Options</h5>
            <p className="mt-2 text-gray-600">
              Book one-way, round-trip, or outstation cabs as per your requirement.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Service Options - Tabs */}
<section className="mt-10 p-6 bg-gray-50 rounded-xl">
  <div className=" mx-auto">
    <h4 className="text-3xl font-bold text-center text-[#76453B] mb-8">
      🚗  Cab Booking Options - One-Way & Round Trip
    </h4>
    <p className="text-lg text-center text-gray-600 mb-8">


    </p>
    <div className="grid md:grid-cols-3 gap-4">
      {/* Tab 1: Cab from Pune to Karad */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {/* Replace with your SVG path */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"></path>
          </svg>
        </div>
        <h5 className="text-xl font-bold text-[#76453B] mb-2">Cab from Pune to Karad</h5>
        <p className="text-gray-600">
        Whether traveling for business or leisure, our cabs from Pune to Karad ensure a smooth and comfortable journey.
        </p>
      </div>
      
      {/* Tab 2: Cab from Karad to Pune */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {/* Replace with your SVG path */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20l9-8-9-8-9 8 9 8z"></path>
          </svg>
        </div>
        <h5 className="text-xl font-bold text-[#76453B] mb-2">Cab from Karad to Pune</h5>
        <p className="text-gray-600">
        Need a Karad to Pune cab? We provide return trip services at the best rates, making your travel hassle-free.
        </p>
      </div>
      
      {/* Tab 3: Outstation Cabs */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {/* Replace with your SVG path */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3"></path>
          </svg>
        </div>
        <h5 className="text-xl font-bold text-[#76453B] mb-2">Outstation Cabs</h5>
        <p className="text-gray-600">
        For those planning extended trips, we offer outstation cabs from Pune to Karad with flexible booking options.
        </p>
      </div>
    </div>
  </div>
</section>


{/* Distance & Travel */}
<section className="mt-10 p-6 bg-gray-50 rounded-xl flex justify-center items-center min-h-[60vh]">
  <div className=" w-full mx-auto">
    <h4 className="text-3xl font-bold text-center text-[#76453B] mb-8">
      🚗 Distance & Travel Time - Pune to Karad
    </h4>
    <p className="text-lg text-center text-gray-600 mb-8">
      {/* You can add a short description here if needed */}
    </p>
    <div className="grid md:grid-cols-2 gap-6">
      {/* Tab 1: Distance */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <h5 className="text-xl font-bold text-[#76453B] mb-4">Distance</h5>
        <p className="text-gray-600">
          The distance from Pune to Karad is approximately 155 kilometers.
        </p>
      </div>

      {/* Tab 2: Travel Time */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <h5 className="text-xl font-bold text-[#76453B] mb-4">Travel Time</h5>
        <p className="text-gray-600">
          The journey typically takes around 3.5 to 4 hours, depending on traffic conditions.
        </p>
      </div>
    </div>
  </div>
</section>





{/* Pricing Table */}
<section className="mt-10 p-6">
  <div className=" mx-auto">
    <h4 className="text-3xl font-bold text-center text-[#76453B] mb-8">
      🚖 Pune to Karad Cab Fare & Pricing
    </h4>
    <p className="text-lg text-center text-gray-600 mb-8">
    We offer transparent pricing with no hidden charges. Our cab rates for Pune to Karad are as follows:


    </p>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
          <tr>
            <th className="p-4 text-left">Cab Type</th>
            <th className="p-4 text-left">Price (₹/KM)</th>
            <th className="p-4 text-left">Best For</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium">Hatchback (WagonR, Indica)</td>
            <td className="p-4">₹11/km</td>
            <td className="p-4">Budget-friendly travel</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium">Sedan (Dzire, Etios)</td>
            <td className="p-4">₹12/km</td>
            <td className="p-4">Comfortable city travel</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium">SUV (Innova, Ertiga)</td>
            <td className="p-4">₹15/km</td>
            <td className="p-4">Family trips & extra space</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-medium">Luxury Cars</td>
            <td className="p-4">On Request</td>
            <td className="p-4">Premium travel experience</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

{/* Attractions Section */}
<section className="mt-10 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
  <div className=" mx-auto">
    <h4 className="text-3xl font-bold text-center text-[#76453B] mb-8">
      🏛️ Places to Visit in Karad
    </h4>
    <p className="text-lg text-center text-gray-600 mb-8">
      Discover the best attractions in Karad.
    </p>
    <div className="grid md:grid-cols-2 gap-6">
      {/* Attraction 1: Priti Sangam */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h5 className="text-xl font-bold text-[#76453B] mb-3">Priti Sangam</h5>
        <p className="text-gray-600">
          The confluence of Krishna and Koyna rivers, a peaceful spot for meditation and photography.
        </p>
      </div>
      {/* Attraction 2: Yashwantrao Chavan Samadhi */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h5 className="text-xl font-bold text-[#76453B] mb-3">Yashwantrao Chavan Samadhi</h5>
        <p className="text-gray-600">
          Memorial of Maharashtra's first Chief Minister, featuring beautiful architecture and gardens.
        </p>
      </div>
      {/* Attraction 3: Karad Caves */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h5 className="text-xl font-bold text-[#76453B] mb-3">Karad Caves</h5>
        <p className="text-gray-600">
          Ancient Buddhist caves with historical significance and intricate carvings.
        </p>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section - Accordion */}
<section className="mt-10 p-6">
  <div className=" mx-auto">
    <h4 className="text-3xl font-bold text-center text-[#76453B] mb-8">
      ❓ Frequently Asked Questions
    </h4>
    <div className="space-y-4">
      {/* FAQ Item 1 */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-[#76453B]">
            What is the cab fare from Pune to Karad?
          </span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {/* Replace with your SVG path */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">
            The cab fare starts from ₹11/km for hatchbacks. The total cost depends on the vehicle type and any additional services required.
          </p>
        </div>
      </div>

      {/* FAQ Item 2 */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-[#76453B]">
            Do you provide pickup from Pune Airport?
          </span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {/* Replace with your SVG path */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">
            Yes, we offer pickup services from Pune Airport with no additional charges.
          </p>
        </div>
      </div>

      {/* FAQ Item 3 */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
          <span className="text-lg font-medium text-[#76453B]">
            Is advance booking required?
          </span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {/* Replace with your SVG path */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="p-4 bg-white">
          <p className="text-gray-600">
            While we accommodate last-minute bookings, we recommend booking at least 24 hours in advance for guaranteed availability.
          </p>
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
    <About_Aimcab  />


  

      <div> <Footer/></div>
    </div>
  )
}

export default Page;