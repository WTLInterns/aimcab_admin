"use client";
import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../container/component/Navbar'
import Footer from '../../container/component/Footer';
import About_Aimcab from '../../components/About_Aimcab';
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
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>

        {/* Main Title */}
        <h2 className="text-3xl font-bold mt-4 text-center text-[#76453B]">
        Pune To Ganpatipule Cab – Best Cab Services at Affordable Prices
        </h2>

        <BookingForm />

        {/* Service Description */}
     {/* Hero Section */}
{/* <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4 sm:px-6 rounded-lg shadow-lg">
  <div className=" mx-auto text-center">
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
      <a href="https://aimcab.com" className="mt-4 inline-block bg-white text-[#76453B] font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300">
        Book Instantly
      </a>
    </div>
  </div>
</section> */}

{/* Service Description */}
<section className="mt-12 p-6 bg-white rounded-xl shadow-md">
  <div className=" mx-auto">
    <h3 className="text-2xl font-bold text-[#76453B] flex items-center">
      <span className="mr-2">🚖</span> Book Your Pune To Ganpatipule Cab with Aim Cab
    </h3>
    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
      <p className="text-lg text-gray-800">
      Looking for a Pune to Ganpatipule cab service that is reliable, affordable, and comfortable? Aim Cab offers the best cab services to make your journey seamless. With a professional team of drivers, well-maintained vehicles, and transparent pricing, we ensure a hassle-free travel experience. Whether you're traveling for leisure, pilgrimage, or business, our Pune to Ganpatipule cab services provide the perfect solution.
      </p>
    </div>
  </div>
</section>

{/* Why Choose Us - Card Grid */}
<section className="mt-12 p-6">
  <div className=" mx-auto">
    <h4 className="text-2xl font-bold text-[#76453B] flex items-center mb-8">
      <span className="mr-2">🏆</span> Why Choose Aim Cab for Pune To Ganpatipule Cab Services?
    </h4>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#76453B] hover:shadow-lg transition duration-300">
        <div className="flex items-start">
          <span className="text-green-500 text-xl mr-3">✓</span>
          <div>
            <h5 className="font-bold text-lg text-[#76453B]">Affordable Pricing</h5>
            <p className="text-gray-700">Get the lowest price in the market for Pune to Ganpatipule cab services.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#76453B] hover:shadow-lg transition duration-300">
        <div className="flex items-start">
          <span className="text-green-500 text-xl mr-3">✓</span>
          <div>
            <h5 className="font-bold text-lg text-[#76453B]">Transparent Charges</h5>
            <p className="text-gray-700">What you see is what you pay, with no surprise fees.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#76453B] hover:shadow-lg transition duration-300">
        <div className="flex items-start">
          <span className="text-green-500 text-xl mr-3">✓</span>
          <div>
            <h5 className="font-bold text-lg text-[#76453B]">Comfortable Rides</h5>
            <p className="text-gray-700">Our cabs are regularly serviced for a smooth and enjoyable journey.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#76453B] hover:shadow-lg transition duration-300">
        <div className="flex items-start">
          <span className="text-green-500 text-xl mr-3">✓</span>
          <div>
            <h5 className="font-bold text-lg text-[#76453B]">Experienced Drivers</h5>
            <p className="text-gray-700">Skilled drivers with extensive route knowledge ensure a safe trip.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#76453B] hover:shadow-lg transition duration-300">
        <div className="flex items-start">
          <span className="text-green-500 text-xl mr-3">✓</span>
          <div>
            <h5 className="font-bold text-lg text-[#76453B]">Multiple Cab Options</h5>
            <p className="text-gray-700">Choose from Hatchbacks, Sedans, SUVs, and luxury cabs.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#76453B] hover:shadow-lg transition duration-300">
        <div className="flex items-start">
          <span className="text-green-500 text-xl mr-3">✓</span>
          <div>
            <h5 className="font-bold text-lg text-[#76453B]">24/7 Service</h5>
            <p className="text-gray-700">Book anytime with immediate confirmation.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





<section className="mt-10 p-6 bg-gray-50 rounded-xl">
  <div className=" mx-auto">
    <h4 className="text-3xl font-bold text-center text-[#76453B] mb-8">
    🚖Pune To Ganpatipule Cab Services
    </h4>
    <p className="text-lg text-center text-gray-600 mb-8">
    Aim Cab provides reliable Pune to Ganpatipule cab services with flexible booking options. Whether you need a one-way cab, round trip, or outstation ride, we’ve got you covered.
    </p>
    <div className="grid md:grid-cols-3 gap-4">
      {/* One-Way Cab */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"></path>
          </svg>
        </div>
        <h5 className="text-xl font-bold text-[#76453B] mb-2 ">One-Way Pune to Ganpatipule Cab</h5>
        <p className="text-gray-600">
        If you need a one-way cab to Ganpatipule, book with us and enjoy a cost-effective ride.
        </p>
      </div>
      {/* Round Trip Cab */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20l9-8-9-8-9 8 9 8z"></path>
          </svg>
        </div>
        <h5 className="text-xl font-bold text-[#76453B] mb-2">Round Trip Pune to Ganpatipule Cab</h5>
        <p className="text-gray-600">
        Planning to return on the same day or after a few days? Our round-trip cab services offer the best convenience.


        </p>
      </div>
      {/* Outstation Services */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3"></path>
          </svg>
        </div>
        <h5 className="text-xl font-bold text-[#76453B] mb-2">Outstation Cab Services from Pune to Ganpatipule</h5>
        <p className="text-gray-600">
        For weekend getaways or extended stays, choose our outstation cab services for a stress-free travel
        </p>
      </div>
    </div>
  </div>
</section>








{/* Pricing Section */}
<section className="mt-12 p-6 bg-gray-50 rounded-xl">
  <div className=" mx-auto">
    <h4 className="text-2xl font-bold text-[#76453B] mb-6">
      💰 Pune To Ganpatipule Cab Services Charges
    </h4>
    
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-[#76453B] to-[#e09a3e] text-white">
          <tr>
            <th className="p-3 text-left">Cab Type</th>
            <th className="p-3 text-center">Distance (KM)</th>
            <th className="p-3 text-center">Price Per KM (₹)</th>
            <th className="p-3 text-right">Estimated Fare (₹)
            </th>
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
  <div className=" mx-auto">
    <h4 className="text-2xl font-bold text-[#76453B] mb-6">
      🌴 Must-Visit Places While Traveling from Pune To Ganpatipule
    </h4>
    <p>Ganpatipule is a beautiful coastal destination known for its pristine beaches and the famous Ganpati temple. Here are some must-visit places:

</p><br/>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h5 className="font-bold text-lg text-[#76453B] mb-2">Ganpatipule Beach</h5>
        <p className="text-gray-700">One of the most scenic beaches in Maharashtra, offering breathtaking views and a peaceful retreat.</p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h5 className="font-bold text-lg text-[#76453B] mb-2">Ganpatipule Temple</h5>
        <p className="text-gray-700">A sacred temple of Lord Ganesha located on the coastline, attracting thousands of devotees yearly.</p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h5 className="font-bold text-lg text-[#76453B] mb-2">Jaigad Fort</h5>
        <p className="text-gray-700">A historic sea fort providing stunning panoramic views of the Arabian Sea, perfect for history buffs.  </p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h5 className="font-bold text-lg text-[#76453B] mb-2">Aare Ware Beach</h5>
        <p className="text-gray-700">A secluded and picturesque beach, ideal for those seeking peace and tranquility away from the bustling tourist spots.</p>
      </div>
    </div><br /><p>If you're planning a trip to Dapoli, book your Pune to Dapoli cab service and explore these amazing destinations with comfort.

</p>
  </div>
</section>

{/* FAQ Section */}
<section className="mt-12 p-6 bg-gray-50 rounded-xl">
  <div className=" mx-auto">
    <h4 className="text-2xl font-bold text-[#76453B] mb-6">
      ❓ Frequently Asked Questions (FAQs)
    </h4>
    
    <div className="space-y-4">
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h5 className="font-bold text-lg text-[#76453B]">1. How can I book a Pune to Ganpatipule cab?</h5>
        <p className="mt-2 text-gray-700">Booking is simple! Visit <a href="https://aimcab.com" className="text-blue-500 underline">aimcab.com</a>, enter your trip details, and confirm instantly.</p>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h5 className="font-bold text-lg text-[#76453B]">2. What is the distance from Pune to Ganpatipule?</h5>
        <p className="mt-2 text-gray-700">The distance between Pune and Ganpatipule is approximately 345 km, with an estimated travel time of 7 to 8 hours, depending on road conditions.</p>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h5 className="font-bold text-lg text-[#76453B]"> 3. What are the charges for an Innova cab from Pune to Ganpatipule?</h5>
        <p className="mt-2 text-gray-700">The estimated fare for an Innova cab is ₹16 per km, totaling around ₹5,520 for the trip.</p>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h5 className="font-bold text-lg text-[#76453B]">4. Do I have to pay toll charges separately?</h5>
        <p className="mt-2 text-gray-700">Yes, toll charges are applicable and are paid separately as per government regulations.
        </p>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h5 className="font-bold text-lg text-[#76453B]">5. Can I book a cab for a round trip from Pune to Ganpatipule?
        </h5>
        <p className="mt-2 text-gray-700">Absolutely! We offer round-trip cab services at competitive prices for added convenience.

        </p>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h5 className="font-bold text-lg text-[#76453B]">6. Are there any hidden charges in the cab fare?
        </h5>
        <p className="mt-2 text-gray-700">No, our pricing is completely transparent. You pay only for what is agreed upon at the time of booking.

        </p>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h5 className="font-bold text-lg text-[#76453B]">7. Do your cabs come with a professional driver?
        </h5>
        <p className="mt-2 text-gray-700">Yes, all our cabs are driven by experienced and well-trained drivers to ensure a smooth and safe ride.

        </p>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h5 className="font-bold text-lg text-[#76453B]">8. Is there a night driving charge?
</h5>
        <p className="mt-2 text-gray-700">A nominal night driving allowance applies if your journey extends beyond 10 PM.

        </p>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h5 className="font-bold text-lg text-[#76453B]">9. Can I choose the type of cab for my journey?
        </h5>
        <p className="mt-2 text-gray-700">Yes, you can select from a variety of cab options including Hatchback, Sedan, SUV, and Innova based on your preferences.

        </p>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h5 className="font-bold text-lg text-[#76453B]">10. Is Aim Cab available 24/7 for Pune to Ganpatipule bookings?
        </h5>
        <p className="mt-2 text-gray-700">Yes! We operate round the clock, ensuring availability whenever you need a cab.
        </p>
      </div>
    </div>
    
    {/* <div className="mt-6 text-center">
      <a href="#contact" className="text-[#76453B] font-semibold hover:underline">
        View all FAQs →
      </a>
    </div> */}
  </div>
</section>

        {/* About Aim Cab */}
        <About_Aimcab  />
        <div>
            

            <div> <Footer/></div>
          </div>
      </div>
    </>
  );
};

export default Page;