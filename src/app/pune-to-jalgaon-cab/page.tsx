"use client"
import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../container/component/Navbar'
import Footer from '../../container/component/Footer';
import About_Aimcab from '../../components/About_Aimcab';
const page = () => {
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
      <div>
        <Head>
        <title>Pune to Jalgaon Cab | Affordable & Reliable Taxi</title>
      <meta name="description" content="Book Pune to Jalgaon cab services with Aim Cab. Enjoy safe, affordable, and comfortable rides with professional drivers. 24/7 service available." />
      <link rel="canonical" href="https://aimcab.com/pune-to-jalgaon-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Jalgaon Cab, Pune To Jalgaon Cab Services, Cab Services From Pune To Jalgaon, Pune To Jalgaon Cab Services charges, Best Cab Services Pune To Jalgaon" />
      <meta name="robots" content="index, follow" />

        </Head>

        {/* Header */}
        <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white py-12 md:py-20 text-center ">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
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
        Pune to Jalgaon Cab Services – Best & Affordable Taxi Booking
        </h2>

        <BookingForm />

        {/* Hero Section */}
<section className="mt-8 p-6 bg-gradient-to-r from-[#76453B] to-[#F3B664] rounded-xl text-white shadow-lg">
  <h3 className="text-3xl font-bold mb-4">
    Book Pune to Jalgaon Cab at the Best Price
  </h3>
  <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
    <p className="text-lg leading-relaxed">
      Looking for a comfortable and affordable Pune to Jalgaon cab service? Aim Cab provides reliable taxi services at the lowest market price, ensuring a smooth and hassle-free travel experience. Whether you're traveling for business, leisure, or personal needs, our well-maintained cabs and professional drivers guarantee a safe and enjoyable ride.
    </p>
  </div>
</section>

{/* Why Choose Us */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6 border-b-2 border-indigo-100 pb-3">Why Choose Aim Cab for Pune to Jalgaon Travel?</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-indigo-50 p-6 rounded-lg hover:shadow-lg transition-all">
      <ul className="space-y-4 text-lg">
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Affordable Pricing:</strong> Get the best rates starting from just ₹11/km, making your trip budget-friendly.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Wide Range of Vehicles:</strong> Choose from hatchbacks, sedans, SUVs, and luxury cars.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Experienced Drivers:</strong> Our drivers are trained professionals who ensure a safe and smooth journey.</span>
        </li>
      </ul>
    </div>
    
    <div className="bg-indigo-50 p-6 rounded-lg hover:shadow-lg transition-all">
      <ul className="space-y-4 text-lg">
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Door-to-Door Service:</strong> Enjoy pick-up and drop-off at your preferred location.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">24/7 Availability:</strong> Book anytime, anywhere with our round-the-clock service.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">One-Way & Round Trip Options:</strong> We provide flexible booking options as per your travel needs.</span>
        </li>
      </ul>
    </div>
  </div>
</section>

{/* Pricing Section */}
<section className="mt-10 p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Pune to Jalgaon Cab Service Charges</h4>
  
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <p className="text-lg text-gray-700 mb-6">
      Our pricing is completely transparent with no hidden charges. The total fare depends on factors such as the type of vehicle selected, the distance traveled, and any additional services requested. Book your Pune to Jalgaon taxi today for an economical and hassle-free ride.
    </p>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
            <th className="p-4 text-left rounded-tl-lg">Cab Type</th>
            <th className="p-4 text-left rounded-tr-lg">Fare (Approx.)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-indigo-50">
            <td className="p-4 font-medium">Hatchback</td>
            <td className="p-4">₹2999</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-indigo-50">
            <td className="p-4 font-medium">Sedan</td>
            <td className="p-4">₹3499</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-indigo-50">
            <td className="p-4 font-medium">SUV</td>
            <td className="p-4">₹4499</td>
          </tr>
          <tr className="hover:bg-indigo-50">
            <td className="p-4 font-medium">Luxury Car</td>
            <td className="p-4">₹7999</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

{/* Service Highlights */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Cab Services from Pune to Jalgaon - Reliable & Convenient</h4>
  
  <div className="bg-indigo-50 p-6 rounded-lg">
    <p className="text-lg text-gray-700">
      Aim Cab provides seamless travel experiences with top-rated cab services from Pune to Jalgaon. Our fleet includes well-maintained cars to cater to different travel needs. Whether you need a sedan for solo travel, an SUV for a family trip, or a luxury car for a premium experience, we have you covered.
    </p>
  </div>
</section>

{/* Travel Destinations */}
<section className="mt-10 p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Places to Visit on the Pune to Jalgaon Route</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Shirdi - The Land of Sai Baba</h5>
      <p className="text-gray-700">A famous pilgrimage site where thousands of devotees visit Sai Baba's temple for blessings.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Ajanta Caves - A UNESCO World Heritage Site</h5>
      <p className="text-gray-700">Known for its exquisite Buddhist rock-cut caves featuring paintings and sculptures.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Ellora Caves - Majestic Rock-Cut Architecture</h5>
      <p className="text-gray-700">Showcasing breathtaking rock-cut temples and monasteries.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Trimbakeshwar Temple - One of the 12 Jyotirlingas</h5>
      <p className="text-gray-700">A significant pilgrimage destination dedicated to Lord Shiva.</p>
    </div>
  </div>
</section>

{/* Best Services */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Best Cab Services from Pune to Jalgaon</h4>
  
  <div className="grid md:grid-cols-3 gap-4">
    <div className="bg-indigo-50 p-4 rounded-lg text-center hover:shadow-md transition-all">
      <p className="font-medium"><strong>Neat & Clean Cabs</strong> with well-maintained interiors.</p>
    </div>
    <div className="bg-indigo-50 p-4 rounded-lg text-center hover:shadow-md transition-all">
      <p className="font-medium"><strong>Free Water Bottles & Snacks</strong> for long journeys.</p>
    </div>
    <div className="bg-indigo-50 p-4 rounded-lg text-center hover:shadow-md transition-all">
      <p className="font-medium"><strong>Experienced & Courteous Drivers</strong> who prioritize your safety.</p>
    </div>
  </div>
</section>

{/* About Us */}
<section className="mt-10 p-8 bg-gradient-to-r from-[#76453B] to-[#d2923e] rounded-xl text-white shadow-lg">
  <h4 className="text-3xl font-bold mb-6">About Aim Cab</h4>
  
  <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
    <ul className="space-y-4 text-lg">
      <li className="flex items-start">
        <span className="text-white mr-2 mt-1">•</span>
        <span>Established in 2001, bringing over two decades of experience.</span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-2 mt-1">•</span>
        <span>50+ Personal Cabs operating across India.</span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-2 mt-1">•</span>
        <span>500+ Registered Cabs in our extensive network.</span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-2 mt-1">•</span>
        <span>2,00,000+ Happy Customers who trust our services.</span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-2 mt-1">•</span>
        <span>3,000+ Outstation Trips successfully completed.</span>
      </li>
    </ul>
  </div>
</section>

{/* FAQs */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">FAQs - Pune to Jalgaon Cab Services</h4>
  
  <div className="space-y-4">
    <div className="bg-indigo-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">What types of cabs are available for this route?</h5>
      <p className="text-gray-700">We provide hatchbacks, sedans, SUVs, and luxury vehicles.</p>
    </div>
    
    <div className="bg-indigo-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Can I book a one-way cab from Pune to Jalgaon?</h5>
      <p className="text-gray-700">Yes, Aim Cab offers both one-way and round-trip cab services.</p>
    </div>
    
    <div className="bg-indigo-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Are there any night-time charges?</h5>
      <p className="text-gray-700">A minimal night-time charge may apply for late-night travel bookings.</p>
    </div>
    
    <div className="bg-indigo-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">How long does the journey from Pune to Jalgaon take?</h5>
      <p className="text-gray-700">The approximate travel time is 7 to 8 hours.</p>
    </div>
    
    <div className="bg-indigo-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Is there an option for multiple stopovers during the journey?</h5>
      <p className="text-gray-700">Yes, we offer customized travel plans with multiple stopovers on request.</p>
    </div>
    
    <div className="bg-indigo-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Are your fares inclusive of tolls and parking charges?</h5>
      <p className="text-gray-700">No, tolls and parking charges are additional.</p>
    </div>
    
    <div className="bg-indigo-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">How do I pay for my cab booking?</h5>
      <p className="text-gray-700">We accept cash, online payments, UPI, and all major credit/debit cards.</p>
    </div>
    
    <div className="bg-indigo-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Do I get a professional driver for the trip?</h5>
      <p className="text-gray-700">Yes, our well-trained and experienced drivers ensure a smooth journey.</p>
    </div>
    
    <div className="bg-indigo-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">What if I need to cancel my booking?</h5>
      <p className="text-gray-700">We offer a flexible cancellation policy with minimal charges.</p>
    </div>
    
    <div className="bg-indigo-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">How can I book a Pune to Jalgaon cab with Aim Cab?</h5>
      <p className="text-gray-700">Visit <a href="https://aimcab.com" className="text-indigo-600 underline">aimcab.com</a> or call us to confirm your ride.</p>
    </div>
  </div>
</section>
<About_Aimcab  />
{/* CTA */}
<section className="mt-10 p-8 bg-gradient-to-r from-[#76453B] to-[#F3B664] rounded-xl text-white shadow-lg text-center">
  <h4 className="text-3xl font-bold mb-6">Book Your Pune to Jalgaon Cab Today!</h4>
  <p className="text-xl mb-8 max-w-2xl mx-auto">
    Experience the best Pune to Jalgaon cab services with Aim Cab. Enjoy a comfortable, reliable, and affordable journey with us. Book your cab now and travel with ease!
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a href="tel:+9191305454491" className="bg-white hover:bg-gray-100 text-indigo-600 font-bold py-3 px-8 rounded-lg text-lg transition-all shadow-md hover:shadow-lg">
      📞 Call/WhatsApp: +91 91305454491
    </a>
    <a href="https://aimcab.com" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all shadow-md hover:shadow-lg">
      🌐 Visit: aimcab.com
    </a>
  </div>
</section>

        
  



        <div> <Footer/></div>
      </div>
    </>
  );
};

export default page;
