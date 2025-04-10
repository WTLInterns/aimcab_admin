"use client"
import React from 'react'
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../container/component/Navbar'
import Footer from '../../container/component/Footer';

const page = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(headingRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8
    })
    .from(paragraphRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.6
    }, "+=0.2")
  }, []);
      
  return (
    <div>
      <Head>
        <title>Mumbai to Mahabaleshwar Cab | Affordable Taxi Ride</title>
        <meta name="description" content="Book Mumbai to Mahabaleshwar cab with Aim Cab for a safe, affordable, and smooth ride. One-way & round-trip taxi service with expert drivers." />
        <link rel="canonical" href="https://aimcab.com/mumbai-to-mahabaleshwar-cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="mumbai to mahabaleshwar, mumbai to mahabaleshwar cab, mumbai to mahabaleshwar cab booking, mumbai to mahabaleshwar taxi, cabs in mahabaleshwar, mumbai to mahabaleshwar distance by car, mumbai to mahabaleshwar cab fare, mumbai to mahabaleshwar taxi fare, mahabaleshwar to mumbai cab fare" />
        <meta name="robots" content="index, follow" />
      </Head>
      
      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white py-12 md:py-20 text-center">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Mumbai to Mahabaleshwar Cab Service
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Your Perfect Ride to a Scenic Escape
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center text-[#76453B]">
        Mumbai to Mahabaleshwar Cab Services - Safe & Comfortable Journey
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, your reliable and comfortable choice for a Mumbai to Mahabaleshwar cab journey. Whether you're looking for a peaceful weekend getaway, a refreshing break from the hustle of city life, or exploring the charming hill station of Mahabaleshwar, we provide exceptional taxi services that ensure a smooth, safe, and enjoyable trip. Our aim is to make your travel experience as seamless and comfortable as possible, with a variety of cab options, straightforward booking methods, and affordable pricing.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            In this guide, we'll dive into the details of our Mumbai to Mahabaleshwar taxi service, from booking your cab to understanding the road trip experience, exploring popular tourist destinations, and providing a breakdown of our pricing structure. Let's get started on your next adventure!
          </p>
        </div>
      </section>
      
      {/* Service Options */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3 mb-6">🧭 Service Options</h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Oneway Cab Service</h5>
            <p className="text-gray-600">
              For those who wish to travel from Mumbai to Mahabaleshwar for a one-time journey, our one-way cab option is ideal. You can enjoy a comfortable ride without worrying about the return leg. We provide an affordable and hassle-free one-way Mumbai to Mahabaleshwar cab booking service that ensures you get to your destination on time and in comfort.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              Planning a roundtrip from Mumbai to Mahabaleshwar? Our round-trip service allows you to enjoy the flexibility of both the journey to Mahabaleshwar and the return ride back to Mumbai. It's a great choice for those who want to relax and not worry about booking separate cabs.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              For travelers flying into Mumbai and heading to Mahabaleshwar, we offer reliable Mumbai airport to Mahabaleshwar taxi services. We'll ensure that you're picked up at the airport and comfortably driven to Mahabaleshwar in no time. Similarly, if you need a ride from Mahabaleshwar to the airport, our airport drop services are prompt and efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛒 Booking Process</h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book Online via Website</h5>
            <p className="text-gray-600">
              Our website makes it easy to book your Mumbai to Mahabaleshwar cab in just a few steps. Simply visit the Aimcab website, enter your travel details, choose the cab type, and confirm your booking. It's simple, secure, and fast!
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              For those who prefer to speak directly to a customer service representative, you can book your Mumbai to Mahabaleshwar taxi by calling our helpline. Our team will guide you through the booking process and confirm your booking over the phone.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              For tech-savvy travelers, the Aimcab mobile app is the most convenient way to book your Mumbai to Mahabaleshwar taxi service. With just a few taps, you can book a cab, track your ride in real-time, and make payments securely.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Mahabaleshwar</h5>
            <p className="text-gray-700 mb-4">
              The distance between Mumbai and Mahabaleshwar is approximately <strong>270 kilometers</strong>, and the trip takes about <strong>5 to 6 hours</strong> depending on traffic conditions. The most common and scenic route is via NH4, passing through the bustling towns of Pune and Wai before reaching Mahabaleshwar.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai – Panvel – Khopoli – Lonavala – Pune – Wai – Mahabaleshwar
            </p>
            <p className="text-gray-700">
              This well-maintained route offers a pleasant drive, with clear roads and picturesque landscapes, especially as you approach the hill station of Mahabaleshwar. The winding roads of the Western Ghats provide travelers with incredible scenic views.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience and Scenic Views</h5>
            <p className="text-gray-700">
              The journey from Mumbai to Mahabaleshwar by car is filled with stunning scenic views, particularly as you enter the Ghats. The route passes through dense forests, verdant hills, and fields, offering a refreshing visual treat, especially during the monsoon season. As you approach Mahabaleshwar, the landscape changes, with views of valleys, mountains, and breathtaking viewpoints.
            </p>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">270 km</div>
              <div className="text-gray-600 mt-2">Distance</div>
            </div>
            <div className="mx-8 text-gray-400">|</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">5-6 hrs</div>
              <div className="text-gray-600 mt-2">Travel Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tourist Attractions */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🏞️ Tourist Places & Attractions</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Mahabaleshwar</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lonavala</h6>
                <p className="text-gray-600">Lonavala is a popular stopover known for its scenic beauty and cool climate. Visit the Lohagad Fort or the Bhushi Dam, both of which offer beautiful views of the surrounding hills and valleys.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Khandala</h6>
                <p className="text-gray-600">Just a short detour from Lonavala, Khandala offers serene lakes, lush greenery, and a peaceful environment perfect for a quick break.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Wai</h6>
                <p className="text-gray-600">This small town is famous for its temples and is a significant cultural stop before heading to Mahabaleshwar.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Mahabaleshwar</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Venna Lake</h6>
                <p className="text-gray-600">A picturesque lake surrounded by hills, where you can enjoy boating and spend a relaxing afternoon.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Pratapgarh Fort</h6>
                <p className="text-gray-600">A historic fort with panoramic views of the valley and surrounding area.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Mapro Garden</h6>
                <p className="text-gray-600">A famous spot for strawberry picking, along with delicious strawberry treats and homemade jams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">💰 Cab Fare & Pricing</h4>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Cab Type</th>
                <th className="py-3 px-4 text-left">Price (₹/KM)</th>
                <th className="py-3 px-4 text-left">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-blue-50">
                <td className="py-3 px-4"><strong>Sedan (Dzire, Etios)</strong></td>
                <td className="py-3 px-4 font-semibold text-[#76453B]">₹11/km</td>
                <td className="py-3 px-4">Budget-friendly travel</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="py-3 px-4"><strong>SUV (Ertiga, Xylo)</strong></td>
                <td className="py-3 px-4 font-semibold text-[#76453B]">₹14/km</td>
                <td className="py-3 px-4">Family trips & extra luggage space</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="py-3 px-4"><strong>Luxury (Innova Crysta)</strong></td>
                <td className="py-3 px-4 font-semibold text-[#76453B]">₹18/km</td>
                <td className="py-3 px-4">Premium comfort & business travel</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="py-3 px-4"><strong>Tempo Traveller</strong></td>
                <td className="py-3 px-4 font-semibold text-[#76453B]">₹25/km</td>
                <td className="py-3 px-4">Group trips & office outings</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <h5 className="font-bold text-[#76453B] mb-2">Additional Information:</h5>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Toll and parking excluded</li>
            <li>No waiting charges</li>
            <li>No kilometer limit</li>
            <li>Driver's allowance included</li>
            <li>No night halt charges</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Aimcab */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🚖 Why Choose Aimcab – Our Specialties</h4>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We ensure that every vehicle in our fleet is clean, sanitized, and well-maintained.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We understand the value of your time. Our drivers are punctual and ensure timely pick-ups and drops.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> As a token of appreciation, new customers receive a complimentary gift.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> For added safety and convenience, all of our vehicles are equipped with GPS tracking.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer support team is available round the clock, ensuring that you receive help whenever you need it.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How far is Mahabaleshwar from Mumbai by car?</h5>
            <p className="text-gray-700 mt-1">Mahabaleshwar is approximately 270 kilometers from Mumbai, and the drive typically takes around 5 to 6 hours.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Mahabaleshwar cab?</h5>
            <p className="text-gray-700 mt-1">You can book your Mumbai to Mahabaleshwar taxi online through our website, via phone, or through the Aimcab app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the cost of a one-way Mumbai to Mahabaleshwar taxi?</h5>
            <p className="text-gray-700 mt-1">The price depends on the type of vehicle you choose. A Sedan starts at ₹11/km.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip cab to Mahabaleshwar?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for Mumbai to Mahabaleshwar.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer airport pickup for Mahabaleshwar?</h5>
            <p className="text-gray-700 mt-1">Yes, we provide Mumbai airport to Mahabaleshwar taxi services.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, our pricing is transparent with no hidden charges.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Is there a cab available from Mahabaleshwar to Mumbai?</h5>
            <p className="text-gray-700 mt-1">Yes, we provide Mahabaleshwar to Mumbai cab services.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer car rental for Mahabaleshwar trips?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer car rental services from Mumbai to Mahabaleshwar.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold mb-6">🏢 About Aimcab</h4>
        
        <div className="text-white">
          <p className="mb-4">
            Aimcab has been a trusted name in the cab service industry since 2001. We have a fleet of over 50+ personal cabs and a network of 500+ registered cabs across India.
          </p>
          <p>
            With over 2,00,000+ happy customers and 3,000+ successful outstation trips, we are committed to providing a safe, reliable, and comfortable travel experience. Our dedication to punctuality, customer service, and professionalism has made us one of the leading choices for Mumbai to Mahabaleshwar cab services.
          </p>
        </div>
        
        <div className="mt-8 grid md:grid-cols-4 gap-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">50+</div>
            <div>Personal Cabs</div>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">500+</div>
            <div>Registered Cabs</div>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">2 Lakh+</div>
            <div>Happy Customers</div>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">3,000+</div>
            <div>Outstation Trips</div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a href="https://aimcab.com" className="inline-block bg-white hover:bg-gray-100 text-[#76453B] font-bold py-3 px-8 rounded-lg transition-colors">
            Book Your Cab Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default page;