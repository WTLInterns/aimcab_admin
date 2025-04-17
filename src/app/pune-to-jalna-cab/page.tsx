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
     <Navbar/>
      <div>
        <Head>
        <title>Pune to Jalna Cab | Affordable & Reliable Taxi</title>
      <meta name="description" content="Book Pune to Jalna cab services with Aim Cab. Enjoy safe, affordable, and comfortable rides with professional drivers. 24/7 service available." />
      <link rel="canonical" href="https://aimcab.com/pune-to-jalna-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Jalna Cab, Pune To Jalna Cab Services, Cab Services From Pune To Jalna, Pune To Jalna Cab Services charges, Best Cab Services Pune To Jalna" />
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
        <h2 className="text-3xl font-bold mt-4 text-center">
        Pune to Jalna Cab Services – Book a Comfortable Ride with Aim Cab
        </h2>

        <BookingForm />

        {/* Hero Section */}
<section className="mt-8 p-6 bg-gradient-to-r from-[#76453B] to-[#F3B664] rounded-xl text-white shadow-lg">
  <h3 className="text-3xl font-bold mb-4">
    Book Pune to Jalna Cab at the Best Price
  </h3>
  <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
    <p className="text-lg leading-relaxed">
      Looking for a reliable and affordable Pune to Jalna cab service? Aim Cab offers top-notch taxi services at the lowest market price, ensuring comfort and safety for your journey. Whether you're traveling for business, leisure, or a family trip, our well-maintained cabs and professional drivers provide a smooth and enjoyable ride.
    </p>
  </div>
</section>

{/* Why Choose Us */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6 border-b-2 border-blue-100 pb-3">Why Choose Aim Cab for Pune to Jalna Travel?</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-all">
      <ul className="space-y-4 text-lg">
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Affordable Pricing:</strong> Get the best rates starting from just ₹11/km, ensuring a budget-friendly trip.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Wide Fleet of Vehicles:</strong> Choose from hatchbacks, sedans, SUVs, and luxury cars.</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#76453B] text-white p-1 rounded-full mr-3 mt-1">✓</span>
          <span><strong className="text-[#76453B]">Experienced Drivers:</strong> Our drivers are trained professionals ensuring a safe journey.</span>
        </li>
      </ul>
    </div>
    
    <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-all">
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
          <span><strong className="text-[#76453B]">One-Way & Round Trip Options:</strong> Flexible booking for your travel needs.</span>
        </li>
      </ul>
    </div>
  </div>
</section>

{/* Pricing Section */}
<section className="mt-10 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Pune to Jalna Cab Service Charges</h4>
  
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <p className="text-lg text-gray-700 mb-6">
      Our Pune to Jalna cab service charges are competitive and transparent, with no hidden fees. The total fare depends on the type of vehicle selected, distance traveled, and additional services requested.
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
          <tr className="border-b border-gray-200 hover:bg-blue-50">
            <td className="p-4 font-medium">Hatchback (Indica, WagonR)</td>
            <td className="p-4">₹3,999</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-blue-50">
            <td className="p-4 font-medium">Sedan (Swift Dzire, Toyota Etios)</td>
            <td className="p-4">₹4,499</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-blue-50">
            <td className="p-4 font-medium">SUV (Ertiga, Innova)</td>
            <td className="p-4">₹5,999</td>
          </tr>
          <tr className="hover:bg-blue-50">
            <td className="p-4 font-medium">Luxury (Innova Crysta, Fortuner)</td>
            <td className="p-4">₹7,999</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <p className="mt-6 text-lg text-gray-700 text-center">
      Book your Pune to Jalna cab today and enjoy a comfortable, hassle-free journey.
    </p>
  </div>
</section>

{/* Travel Destinations */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Popular Travel Destinations on Pune to Jalna Route</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Shirdi - The Land of Sai Baba</h5>
      <p className="text-gray-700">A spiritual hub, Shirdi is home to the famous Sai Baba Temple, attracting devotees from across India.</p>
    </div>
    
    <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Aurangabad - A Historical Gem</h5>
      <p className="text-gray-700">Known for its rich heritage, Aurangabad is famous for Bibi Ka Maqbara and the Ellora Caves, a UNESCO World Heritage site.</p>
    </div>
    
    <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Ajanta Caves - A UNESCO World Heritage Site</h5>
      <p className="text-gray-700">Explore the stunning Ajanta Caves, known for their ancient Buddhist rock-cut sculptures and murals.</p>
    </div>
    
    <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Jalna - A City with Cultural Heritage</h5>
      <p className="text-gray-700">Visit Moti Talab, Jalna Fort, and Guru Ganesh Tapodham, which showcase the city's deep cultural and historical roots.</p>
    </div>
  </div>
</section>

{/* Best Services */}
<section className="mt-10 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">Best Cab Services Pune to Jalna</h4>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Neat & Clean Cabs</h5>
      <p className="text-gray-700">Comfortable and well-maintained vehicles.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Experienced Drivers</h5>
      <p className="text-gray-700">Skilled and professional drivers familiar with the Pune to Jalna route.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Transparent Pricing</h5>
      <p className="text-gray-700">No hidden charges, complete fare transparency.</p>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Multiple Car Options</h5>
      <p className="text-gray-700">Choose a cab as per your travel needs.</p>
    </div>
  </div>
  
  <p className="mt-6 text-lg text-center font-medium">
    Book your Pune to Jalna cab with Aim Cab today!
  </p>
</section>

{/* About Us */}
<section className="mt-10 p-8 bg-gradient-to-r from-[#76453B] to-[#e09a40] rounded-xl text-white shadow-lg">
  <h4 className="text-3xl font-bold mb-6">About Aim Cab</h4>
  
  <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
    <ul className="space-y-4 text-lg">
      <li className="flex items-start">
        <span className="text-white mr-2 mt-1">•</span>
        <span>Established in 2001, Aim Cab has been providing reliable taxi services for over two decades.</span>
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
        <span>3,000+ Outstation Trips completed with customer satisfaction.</span>
      </li>
    </ul>
    
    <p className="mt-6 text-lg text-center">
      Aim Cab is your trusted travel partner, ensuring smooth and comfortable rides.
    </p>
  </div>
</section>

{/* FAQs */}
<section className="mt-10 p-8 bg-white rounded-xl shadow-md">
  <h4 className="text-3xl font-bold text-[#76453B] mb-6">FAQs - Pune to Jalna Cab Services</h4>
  
  <div className="space-y-4">
    <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">What types of cabs are available for the Pune to Jalna route?</h5>
      <p className="text-gray-700">We offer hatchbacks, sedans, SUVs, and luxury vehicles.</p>
    </div>
    
    <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Do you offer one-way and round-trip options?</h5>
      <p className="text-gray-700">Yes, we provide both one-way and round-trip cab services.</p>
    </div>
    
    <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">How long does it take to travel from Pune to Jalna by cab?</h5>
      <p className="text-gray-700">Approximately 6 to 7 hours.</p>
    </div>
    
    <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Are your drivers professional and experienced?</h5>
      <p className="text-gray-700">Yes, all our drivers are highly trained and experienced.</p>
    </div>
    
    <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Is there a night-time charge?</h5>
      <p className="text-gray-700">A minimal charge applies for late-night travel.</p>
    </div>
    
    <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Can I book a cab instantly?</h5>
      <p className="text-gray-700">Yes, we provide instant booking options.</p>
    </div>
    
    <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">What are the payment options?</h5>
      <p className="text-gray-700">Cash, UPI, credit/debit cards, and online payments.</p>
    </div>
    
    <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Do you provide doorstep pick-up and drop-off?</h5>
      <p className="text-gray-700">Yes, we offer a seamless door-to-door service.</p>
    </div>
    
    <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">Can I change or cancel my booking?</h5>
      <p className="text-gray-700">Yes, as per our cancellation policy.</p>
    </div>
    
    <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-all">
      <h5 className="text-xl font-bold text-[#76453B] mb-2">How can I contact Aim Cab?</h5>
      <p className="text-gray-700">Call/WhatsApp <strong>+91 91305454491</strong> or visit <a href="https://aimcab.com" className="text-blue-600 underline">aimcab.com</a>.</p>
    </div>
  </div>
</section>
<About_Aimcab  />

{/* CTA */}
<section className="mt-10 p-8 bg-gradient-to-r from-[#76453B] to-[#cc8930] rounded-xl text-white shadow-lg text-center">
  <h4 className="text-3xl font-bold mb-6">Book Your Pune to Jalna Cab Today!</h4>
  <p className="text-xl mb-8 max-w-2xl mx-auto">
    Enjoy a safe, reliable, and budget-friendly journey with Aim Cab. Book now!
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a href="tel:+9191305454491" className="bg-white hover:bg-gray-300 text-blue-600 font-bold py-3 px-8 rounded-lg text-lg transition-all shadow-md hover:shadow-lg">
      📞 Call/WhatsApp: +91 91305454491
    </a>
    <a href="https://aimcab.com" className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all shadow-md hover:shadow-lg">
      🌐 Visit: aimcab.com
    </a>
  </div>
</section>


        
        {/* Redesigned Footer */}
        


        
       

        <div> <Footer/></div>
      </div>
    </>
  );
};

export default page;
