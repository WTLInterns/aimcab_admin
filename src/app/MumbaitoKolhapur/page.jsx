"use client"
import React from 'react'
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
      <Navbar/>
      <Head>
        <title>Mumbai to Kolhapur Cab | Affordable Taxi Service</title>
        <meta name="description" content="Book a Mumbai to Kolhapur cab with Aim Cab for a safe, comfortable, and affordable ride. Enjoy one-way & round-trip cabs with professional drivers." />
        <link rel="canonical" href="https://aimcab.com/mumbai-to-kolhapur-cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="mumbai to kolhapur cab, mumbai to kolhapur distance, mumbai to kolhapur distance by road, mumbai to kolhapur distance by car, mumbai to kolhapur by road, mumbai airport to kolhapur cab, one way cab kolhapur to mumbai, kolhapur to mumbai cab innova, mumbai to kolhapur cab fare 13 seater" />
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
            Mumbai to Kolhapur Cab Service
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Comfortable, safe & affordable travel between Mumbai and Kolhapur
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center text-[#76453B]">
        Mumbai to Kolhapur Cab Services - Reliable & Affordable Travel
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md mt-24">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Mumbai to Kolhapur Cab – The Ultimate Guide for a Comfortable Journey</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            If you're planning a trip from Mumbai to Kolhapur, you're in for a delightful experience with Aimcab. Known for our reliable and safe cab services, we ensure that your travel is smooth, comfortable, and hassle-free. Whether you're traveling for business, leisure, or a family getaway, we provide a range of services to cater to all your needs.
          </p>
        </div>
      </section>
      
      {/* Service Options */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3 mb-6">🧭 Service Options: Your Choice of Travel</h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Oneway Cab from Mumbai to Kolhapur</h5>
            <p className="text-gray-600">
              If you're traveling from Mumbai to Kolhapur and prefer a one-way trip, we provide an efficient one-way cab service that suits your convenience. With no return journey required, you can simply book your cab to Kolhapur and enjoy the ride.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              For those who are planning to travel to Kolhapur and return to Mumbai, our roundtrip service is perfect. You can choose your preferred cab type, and we ensure that the cab is ready for your return journey without any hassle.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop Service</h5>
            <p className="text-gray-600">
              For travelers flying into Mumbai, Aimcab offers reliable airport pickup and drop services. Whether you're landing at Mumbai Airport and need to reach Kolhapur or are leaving from Mumbai to catch a flight, our airport cab service ensures you get to your destination safely.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛒 Booking Process: How to Book Your Cab</h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book Online via Website</h5>
            <p className="text-gray-600">
              Booking your cab online via the Aimcab website is quick and simple. Visit our website, enter your pick-up and drop-off details, and choose your preferred cab type. With a few clicks, your cab will be booked.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              If you prefer personalized service, you can book your cab by calling our customer service team. Our friendly staff will assist you in selecting the perfect cab type and confirm your details.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              For those who prefer mobile convenience, Aimcab also offers a user-friendly mobile app. Simply download the app, input your journey details, and book your cab.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide: Journey from Mumbai to Kolhapur</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Distance & Travel Time</h5>
            <p className="text-gray-700 mb-4">
              The distance from Mumbai to Kolhapur is approximately <strong>380 kilometers</strong> by road. The drive typically takes around <strong>6 to 7 hours</strong>, depending on traffic and road conditions.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route Information</h5>
            <p className="text-gray-700">
              You'll travel through the <strong>NH4 (National Highway 4)</strong>, a major road connecting Mumbai and Kolhapur. The highway is well-maintained, making it a smooth ride with plenty of stops for snacks and refreshments.
            </p>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">380 km</div>
              <div className="text-gray-600 mt-2">Distance</div>
            </div>
            <div className="mx-8 text-gray-400">|</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">6-7 hrs</div>
              <div className="text-gray-600 mt-2">Travel Time</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h5 className="text-xl font-semibold text-[#76453B] mb-3">Major Stops Along the Way</h5>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="bg-[#76453B] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
              <span className="text-gray-700"><strong>Lonavala:</strong> Famous for its scenic viewpoints and waterfalls</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#76453B] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
              <span className="text-gray-700"><strong>Khandala:</strong> Known for its picturesque landscape</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#76453B] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
              <span className="text-gray-700"><strong>Satara:</strong> Historical landmarks like Satara Fort</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#76453B] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">4</span>
              <span className="text-gray-700"><strong>Pune:</strong> Great for a quick break during your journey</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Tourist Attractions */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🏞️ Tourist Places & Attractions</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Kolhapur</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lonavala</h6>
                <p className="text-gray-600">Famous for its scenic viewpoints, waterfalls, and caves</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Khandala</h6>
                <p className="text-gray-600">Known for its picturesque landscape of the Western Ghats</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Satara</h6>
                <p className="text-gray-600">Historical landmarks like the Satara Fort and Kaas Plateau</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Kolhapur</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Mahalaxmi Temple</h6>
                <p className="text-gray-600">One of the most important religious sites in India</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Rankala Lake</h6>
                <p className="text-gray-600">A peaceful spot for boating and enjoying natural beauty</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Panhala Fort</h6>
                <p className="text-gray-600">Offers a glimpse into the region's history with spectacular views</p>
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
            <li>Toll and parking charges are excluded</li>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We ensure that all our cabs are well-maintained and spotless.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We value your time and ensure you reach as per schedule.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> As a token of appreciation for new customers.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> For added safety throughout your journey.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer service is always ready to assist you.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the distance from Mumbai to Kolhapur?</h5>
            <p className="text-gray-700 mt-1">The distance from Mumbai to Kolhapur by road is approximately 380 kilometers.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How long does it take to travel from Mumbai to Kolhapur by car?</h5>
            <p className="text-gray-700 mt-1">The drive typically takes around 6 to 7 hours, depending on traffic conditions.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a one-way cab from Mumbai to Kolhapur?</h5>
            <p className="text-gray-700 mt-1">Yes, Aimcab offers one-way cab services from Mumbai to Kolhapur.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the best route from Mumbai to Kolhapur?</h5>
            <p className="text-gray-700 mt-1">The best route is via NH4, passing through Lonavala, Khandala, and Satara.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the fare for a 13-seater cab from Mumbai to Kolhapur?</h5>
            <p className="text-gray-700 mt-1">The fare for a 13-seater cab is ₹25 per kilometer.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book an airport pickup from Mumbai to Kolhapur?</h5>
            <p className="text-gray-700 mt-1">Yes, Aimcab offers airport pickup services from Mumbai to Kolhapur.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Is the fare for a Mumbai to Kolhapur cab the same for a roundtrip?</h5>
            <p className="text-gray-700 mt-1">Yes, the fare remains the same for roundtrip services as well.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a luxury cab like an Innova Crysta for my trip?</h5>
            <p className="text-gray-700 mt-1">Yes, Aimcab offers premium cars like Innova Crysta for your travel.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the facilities provided during the trip?</h5>
            <p className="text-gray-700 mt-1">Aimcab provides comfortable AC vehicles, experienced drivers, and 24/7 customer support for your journey.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <About_Aimcab/>

      <Footer />
    </div>
  )
}

export default page;