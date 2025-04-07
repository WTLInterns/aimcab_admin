"use client"

import React from 'react'
import Head from 'next/head'
import BookingForm from '../../components/BookingForm'

const Page = () => {
  return (
    <>
      <Head>
        <title>Pune to Ratnagiri Cab Service | Hassle-Free Taxi Booking</title>
        <meta name="description" content="Book a reliable Pune to Ratnagiri cab service with Aim Cab. Affordable fares, professional drivers & hassle-free taxi booking for a comfortable journey."/>
        <link rel="canonical" href="https://aimcab.com/pune-to-ratnagiri-cab-service"/>
        <meta name="author" content="Aim Cab"/>
        <meta name="keywords" content="pune to ratnagiri cab service, online cab booking pune to ratnagiri, pune to ratnagiri taxi, cab from pune to ratnagiri, taxi service pune to ratnagiri"/>
        <meta name="robots" content="index, follow"/>
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
          Pune to Ratnagiri Cab Service - Comfortable & Affordable Travel
        </h2>

        {/* Booking Form */}
        <BookingForm />

   {/* Hero Section */}
<section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 px-6 rounded-xl shadow-2xl mb-8">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">🚖 Premium Pune to Ratnagiri Cab Service</h1>
    <p className="text-xl mb-6">Experience comfortable, affordable, and reliable travel with Aim Cab</p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="tel:+9191305454491" className="bg-white text-[#76453B] px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call Now
      </a>
      <a href="https://aimcab.com" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        Book Online
      </a>
    </div>
  </div>
</section>

{/* Service Description */}
<section className="bg-white rounded-lg shadow-md p-8 mb-8">
  <div className="max-w-4xl mx-auto">
    <div className="flex items-center mb-6">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        <span className="text-blue-600 text-2xl">🚖</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-800">Book Your Pune to Ratnagiri Cab Service with Aim Cab</h3>
    </div>
    <p className="text-lg text-gray-700 leading-relaxed">
      Looking for a Pune to Ratnagiri cab service? Aim Cab provides a seamless and budget-friendly taxi experience with professional drivers and well-maintained cars. Whether you're planning a leisure trip or a business journey, our cab service ensures a smooth and hassle-free ride.
    </p>
  </div>
</section>

{/* Why Choose Aim Cab */}
<section className="bg-blue-50 rounded-lg shadow-md p-8 mb-8">
  <div className="max-w-4xl mx-auto">
    <div className="flex items-center mb-6">
      <div className="bg-yellow-100 p-3 rounded-full mr-4">
        <span className="text-yellow-600 text-2xl">🏆</span>
      </div>
      <h4 className="text-2xl font-bold text-gray-800">Why Choose Aim Cab for Your Pune to Ratnagiri Trip?</h4>
    </div>
    <ul className="space-y-4">
      <li className="flex items-start">
        <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">✅</span>
        <span className="text-lg"><strong className="text-blue-700">Lowest Fare Guarantee</strong> – We offer the most affordable Pune to Ratnagiri cab service with rates starting at just ₹11/km.</span>
      </li>
      <li className="flex items-start">
        <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">✅</span>
        <span className="text-lg"><strong className="text-blue-700">Easy Online Booking</strong> – Convenient online cab booking from Pune to Ratnagiri with instant confirmation.</span>
      </li>
      <li className="flex items-start">
        <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">✅</span>
        <span className="text-lg"><strong className="text-blue-700">Well-Maintained Cabs</strong> – Enjoy a comfortable and safe journey in our clean and sanitized cabs.</span>
      </li>
      <li className="flex items-start">
        <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">✅</span>
        <span className="text-lg"><strong className="text-blue-700">Experienced Drivers</strong> – Our professional drivers ensure a smooth and safe ride.</span>
      </li>
      <li className="flex items-start">
        <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">✅</span>
        <span className="text-lg"><strong className="text-blue-700">24/7 Availability</strong> – Book your cab anytime, anywhere.</span>
      </li>
    </ul>
  </div>
</section>

{/* Cab Fare & Pricing */}
<section className="bg-white rounded-lg shadow-md p-8 mb-8">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-2xl font-bold text-gray-800 mb-6">Pune to Ratnagiri Cab Fare & Pricing</h4>
    <p className="text-lg text-gray-700 mb-6">
      We offer the lowest prices in the market for Pune to Ratnagiri cabs. Our pricing structure is straightforward, ensuring complete cost transparency.
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h5 className="text-xl font-bold text-blue-700 mb-2">Hatchback</h5>
        <p className="text-gray-600 mb-3">(Indica, Swift, etc.)</p>
        <p className="text-2xl font-bold text-blue-600">₹11/km</p>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h5 className="text-xl font-bold text-blue-700 mb-2">Sedan</h5>
        <p className="text-gray-600 mb-3">(Dzire, Etios, etc.)</p>
        <p className="text-2xl font-bold text-blue-600">₹12/km</p>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h5 className="text-xl font-bold text-blue-700 mb-2">SUV</h5>
        <p className="text-gray-600 mb-3">(Innova, Ertiga, etc.)</p>
        <p className="text-2xl font-bold text-blue-600">₹15/km</p>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h5 className="text-xl font-bold text-blue-700 mb-2">Luxury Cars</h5>
        <p className="text-gray-600 mb-3">(Premium vehicles)</p>
        <p className="text-2xl font-bold text-blue-600">Price on request</p>
      </div>
    </div>

    <p className="mt-8 text-lg text-center bg-yellow-50 p-4 rounded-lg border border-yellow-200">
      Book your cab from Pune to Ratnagiri today and experience the best taxi service at an affordable rate.
    </p>
  </div>
</section>

{/* Online Cab Booking */}
<section className="bg-blue-50 rounded-lg shadow-md p-8 mb-8">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-2xl font-bold text-gray-800 mb-6">Online Cab Booking from Pune to Ratnagiri</h4>
    <p className="text-lg text-gray-700 mb-6">
      Booking a Pune to Ratnagiri cab is quick and simple. Follow these steps:
    </p>
    
    <div className="space-y-4">
      <div className="flex items-start">
        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">1</div>
        <p className="text-lg">Visit our website <a href="https://aimcab.com" className="text-blue-600 underline font-medium">Aimcab.com</a></p>
      </div>
      <div className="flex items-start">
        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">2</div>
        <p className="text-lg">Enter your pickup and drop location.</p>
      </div>
      <div className="flex items-start">
        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">3</div>
        <p className="text-lg">Choose your preferred car type.</p>
      </div>
      <div className="flex items-start">
        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">4</div>
        <p className="text-lg">Confirm your booking and receive instant confirmation.</p>
      </div>
    </div>

    <div className="mt-8 bg-white p-6 rounded-lg border border-blue-200">
      <p className="text-lg text-center">
        Alternatively, you can call us at <a href="tel:+9191305454491" className="text-blue-600 font-bold hover:underline">+91 91305454491</a> for quick reservations.
      </p>
    </div>
  </div>
</section>

{/* Distance & Travel Time */}
<section className="bg-white rounded-lg shadow-md p-8 mb-8">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-2xl font-bold text-gray-800 mb-6">Pune to Ratnagiri Distance & Travel Time</h4>
    <div className="bg-blue-50 p-6 rounded-lg">
      <div className="flex flex-wrap justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-600">Distance</p>
          <p className="text-2xl font-bold text-blue-700">305 km</p>
        </div>
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-600">Travel Time</p>
          <p className="text-2xl font-bold text-blue-700">6-7 hours</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Route Type</p>
          <p className="text-2xl font-bold text-blue-700">Highway/Scenic</p>
        </div>
      </div>
    </div>
    <p className="mt-6 text-lg text-gray-700">
      The Pune to Ratnagiri distance by cab is approximately 305 km, and the journey duration varies between 6-7 hours, based on road conditions and traffic flow.
    </p>
  </div>
</section>

{/* Best Routes */}
<section className="bg-blue-50 rounded-lg shadow-md p-8 mb-8">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-2xl font-bold text-gray-800 mb-6">Best Routes & Road Conditions for Pune to Ratnagiri Cab Service</h4>
    <p className="text-lg text-gray-700 mb-6">There are two main routes to reach Ratnagiri from Pune:</p>
    
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h5 className="text-xl font-bold text-blue-700 mb-3">Route 1: Via NH66 (Pune – Satara – Ratnagiri)</h5>
        <ul className="space-y-2 mt-4 text-gray-700">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Best for smooth highway travel.
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Travel time: 6 hours 30 minutes.
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Scenic views of the Western Ghats.
          </li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h5 className="text-xl font-bold text-blue-700 mb-3">Route 2: Via Bhor Ghat (Pune – Mahad – Ratnagiri)</h5>
        <ul className="space-y-2 mt-4 text-gray-700">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            More scenic but slightly longer.
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Travel time: 7 hours.
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Passes through lush greenery and waterfalls.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Places to Visit */}
<section className="bg-white rounded-lg shadow-md p-8 mb-8">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-2xl font-bold text-gray-800 mb-8">Places to Visit in Ratnagiri</h4>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
        <h5 className="text-xl font-bold text-blue-700 mb-3">Ganpatipule Beach</h5>
        <p className="text-gray-700">A stunning beach with a famous Ganpati temple, perfect for relaxation.</p>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
        <h5 className="text-xl font-bold text-blue-700 mb-3">Ratnadurga Fort</h5>
        <p className="text-gray-700">An ancient fort offering breathtaking views of the Arabian Sea.</p>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
        <h5 className="text-xl font-bold text-blue-700 mb-3">Thibaw Palace</h5>
        <p className="text-gray-700">A historic palace where the exiled King of Burma once lived.</p>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
        <h5 className="text-xl font-bold text-blue-700 mb-3">Pawas</h5>
        <p className="text-gray-700">A spiritual place famous for Swami Swaroopanand's Ashram.</p>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow md:col-span-2">
        <h5 className="text-xl font-bold text-blue-700 mb-3">Jaigad Fort & Lighthouse</h5>
        <p className="text-gray-700">A scenic fort offering mesmerizing sea views and a historic lighthouse.</p>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="bg-blue-50 rounded-lg shadow-md p-8 mb-8">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-2xl font-bold text-gray-800 mb-8">FAQs: Pune to Ratnagiri Cab Service</h4>
    
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-lg font-bold text-blue-700 mb-2">1. What is the Pune to Ratnagiri cab fare?</h5>
        <p className="text-gray-700">Our cab fares start at ₹11/km, making us the most affordable service provider.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-lg font-bold text-blue-700 mb-2">2. Can I book a one-way cab from Pune to Ratnagiri?</h5>
        <p className="text-gray-700">Yes, we offer one-way as well as round-trip cab services.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-lg font-bold text-blue-700 mb-2">3. Are there additional charges for night travel?</h5>
        <p className="text-gray-700">Night travel may include an extra charge. Contact us for detailed pricing.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-lg font-bold text-blue-700 mb-2">4. What are the cab options available for Pune to Ratnagiri?</h5>
        <p className="text-gray-700">We offer hatchbacks, sedans, SUVs, and luxury cars.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-lg font-bold text-blue-700 mb-2">5. Is online cab booking from Pune to Ratnagiri safe?</h5>
        <p className="text-gray-700">Yes, we provide secure and verified booking with professional drivers.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-lg font-bold text-blue-700 mb-2">6. How long does it take to travel from Pune to Ratnagiri by cab?</h5>
        <p className="text-gray-700">The travel duration ranges between 6-7 hours, depending on traffic and road conditions.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-lg font-bold text-blue-700 mb-2">7. Can I book a cab from Ratnagiri to Pune?</h5>
        <p className="text-gray-700">Yes, we provide return trip bookings as well.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-lg font-bold text-blue-700 mb-2">8. Do you provide an airport pickup service for Pune to Ratnagiri?</h5>
        <p className="text-gray-700">Yes, we offer airport pickups and drop-offs for your convenience.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-lg font-bold text-blue-700 mb-2">9. Is there a cancellation policy?</h5>
        <p className="text-gray-700">Yes, we have a flexible cancellation policy. Contact customer support for details.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h5 className="text-lg font-bold text-blue-700 mb-2">10. What makes Aim Cab the best Pune to Ratnagiri cab service?</h5>
        <p className="text-gray-700">We offer affordable pricing, professional drivers, comfortable cabs, and 24/7 customer support.</p>
      </div>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-xl shadow-2xl p-8 mb-8">
  <div className="max-w-4xl mx-auto text-center">
    <h4 className="text-2xl md:text-3xl font-bold mb-6">Book Your Pune to Ratnagiri Cab Now!</h4>
    <p className="text-xl mb-8">Ready to travel? Book your Pune to Ratnagiri cab service today with Aim Cab. Enjoy a safe, comfortable, and budget-friendly ride with us!</p>
    
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="tel:+9191305454491" className="bg-white text-[#76453B] px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call: +91 91305454491
      </a>
      <a href="https://aimcab.com" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        Visit: Aimcab.com
      </a>
    </div>
  </div>
</section>

{/* About Aim Cab */}
<section className="bg-white rounded-lg shadow-md p-8">
  <div className="max-w-4xl mx-auto">
    <h4 className="text-2xl font-bold text-gray-800 mb-6">About Aim Cab</h4>
    <p className="text-lg text-gray-700 mb-6">
      Aim Cab is a trusted cab booking company established in 2001. With over 50+ personal cabs across India, 500+ registered cabs in our network, 2 lakh+ happy customers, and 3,000+ outstation trips, we ensure a premium and safe travel experience.
    </p>
    
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg text-center">
        <p className="text-2xl font-bold text-blue-600">50+</p>
        <p className="text-gray-700">Personal Cabs</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg text-center">
        <p className="text-2xl font-bold text-blue-600">500+</p>
        <p className="text-gray-700">Registered Cabs</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg text-center">
        <p className="text-2xl font-bold text-blue-600">2L+</p>
        <p className="text-gray-700">Happy Customers</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg text-center">
        <p className="text-2xl font-bold text-blue-600">3K+</p>
        <p className="text-gray-700">Outstation Trips</p>
      </div>
    </div>
  </div>
</section>

        <div>
          {/* Redesigned Responsive Footer */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-6 sm:py-8">
            {/* Footer content area */}
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Additional footer columns can be added here */}
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