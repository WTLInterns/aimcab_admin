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
        <title>Mumbai to Ratnagiri Cab | Book Safe & Quick Ride</title>
        <meta name="description" content="Book Mumbai to Ratnagiri cab with Aim Cab for safe, reliable & affordable travel. Enjoy one-way, round trip, or shared cabs with professional drivers." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Ratnagiri-Cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="mumbai to ratnagiri cab, shared cab from mumbai to ratnagiri, mumbai to ratnagiri cab booking, Mumbai To ratnagiri Cab Services, cab fare from mumbai to ratnagiri, mumbai to ratnagiri cab fare, Cab Services in ratnagiri" />
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
            Mumbai to Ratnagiri Cab Service
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Your Ultimate Travel Experience
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center">
        Mumbai to Ratnagiri Cab Services – Comfortable & Affordable Travel
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Are you planning a road trip from Mumbai to Ratnagiri, one of the most picturesque towns in Maharashtra? Whether you're traveling for leisure or business, Aimcab offers reliable, affordable, and comfortable cab services for this beautiful journey. This guide will provide you with everything you need to know about booking a cab from Mumbai to Ratnagiri, including the various service options, booking methods, road trip details, and must-visit attractions.
          </p>
        </div>
      </section>
      
      {/* Service Options */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3 mb-6">🧭 Service Options for Mumbai to Ratnagiri Cab Services</h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Oneway Cab from Mumbai to Ratnagiri</h5>
            <p className="text-gray-600">
              If you're planning a one-way trip to Ratnagiri, Aimcab's one-way cab services are the perfect option. This service allows you to travel directly to your destination without worrying about the return journey. Whether you're going for business or leisure, a one-way cab provides the ultimate convenience.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Mumbai to Ratnagiri Cab</h5>
            <p className="text-gray-600">
              For those who need to return to Mumbai after visiting Ratnagiri, our round-trip service is ideal. You can enjoy the comfort of your cab for the entire journey, from your departure in Mumbai to your return. Aimcab ensures that your round-trip experience is seamless, giving you ample time to explore Ratnagiri while we handle your transportation needs.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop for Mumbai to Ratnagiri</h5>
            <p className="text-gray-600">
              Traveling by air? Aimcab offers airport pickup and drop services to make your journey as smooth as possible. Whether you're landing at Chhatrapati Shivaji Maharaj International Airport (BOM) or any other nearby airport, our driver will be ready to pick you up or drop you off at the airport, ensuring you reach Ratnagiri or Mumbai safely and on time.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛒 Booking Process for Mumbai to Ratnagiri Cab</h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book Online via Website</h5>
            <p className="text-gray-600">
              Our website provides an easy-to-use booking platform where you can book your Mumbai to Ratnagiri cab in a few simple steps. Select the type of vehicle you prefer, enter your travel dates, and make the payment. Once you confirm your booking, we'll send you an instant confirmation, and our driver will be there at the specified time.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              For those who prefer to speak to someone directly, Aimcab offers a call-based booking system. Simply call our customer service number, and one of our representatives will assist you in selecting the best vehicle and travel options for your trip. They'll also provide you with a booking confirmation and all the details you need for your journey.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book Through App</h5>
            <p className="text-gray-600">
              Aimcab's mobile app is another great way to book a cab from Mumbai to Ratnagiri. The app is available for both Android and iOS devices, and allows you to book a ride on the go. Enter your details, choose your vehicle, and track your cab in real time. The app ensures a smooth and quick booking experience.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide: Mumbai to Ratnagiri</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Ratnagiri</h5>
            <p className="text-gray-700 mb-4">
              The most common and popular route for this trip is via NH66 (National Highway 66). The total distance from Mumbai to Ratnagiri is approximately 330 kilometers, and the journey takes about 7 to 8 hours, depending on road conditions and traffic.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience and Highway Information</h5>
            <p className="text-gray-700">
              The road from Mumbai to Ratnagiri is well-maintained and offers a smooth drive. As you begin your journey, you'll pass through busy Mumbai traffic before entering the more tranquil rural areas of Maharashtra. The route is a combination of coastal roads, scenic hill ranges, and small villages, making it a visually appealing drive.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Scenic Views Along the Way</h5>
            <p className="text-gray-700">
              One of the highlights of this trip is the breathtaking scenery. Along the way, you'll witness lush green landscapes, tranquil rivers, and breathtaking views of the Arabian Sea. The stretch near Alibaug, Harihareshwar, and Ratnagiri provides spectacular views of the coastline. You may want to stop and capture some memorable photos or explore a few of the serene beaches along the route.
            </p>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">330 km</div>
              <div className="text-gray-600 mt-2">Distance</div>
            </div>
            <div className="mx-8 text-gray-400">|</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">7-8 hrs</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Ratnagiri</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Alibaug</h6>
                <p className="text-gray-600">Known for its beaches and forts, Alibaug is a popular stop for travelers. You can enjoy the coastal beauty and visit Alibaug Beach or Kolaba Fort.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Harihareshwar</h6>
                <p className="text-gray-600">A small town with a temple and beach, this is an ideal place to relax and explore the local culture.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Ganeshgule</h6>
                <p className="text-gray-600">Famous for the Ganeshgule Temple and a beautiful beach, it's a great spot to stop for a quick break.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Ratnagiri</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Ratnagiri Fort</h6>
                <p className="text-gray-600">This historical fort offers a great view of the town and the sea. It's perfect for history lovers and those who want to explore the local heritage.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Ganpatipule</h6>
                <p className="text-gray-600">A famous pilgrimage destination, Ganpatipule is home to the famous Ganpatipule Temple dedicated to Lord Ganesha.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Kunkeshwar Temple</h6>
                <p className="text-gray-600">Another famous temple dedicated to Lord Shiva, located on the coast with amazing views of the Arabian Sea.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Marleshwar Waterfall</h6>
                <p className="text-gray-600">Located in the forests near Ratnagiri, this waterfall is a must-visit for nature enthusiasts.</p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">Things to Do in Ratnagiri</h5>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Beach Relaxation</h6>
            <p className="text-gray-600">Relax at Ratnagiri Beach or Ganpatipule Beach and enjoy the serene coastal atmosphere.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Historical Exploration</h6>
            <p className="text-gray-600">Visit historical sites like Ratnagiri Fort and Kunkeshwar Temple to explore the region's rich heritage.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Nature Trekking</h6>
            <p className="text-gray-600">Trek to Marleshwar Waterfall for an adventurous experience in nature.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Local Cuisine</h6>
            <p className="text-gray-600">Explore the local markets and taste the delicious Konkani cuisine.</p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">💰 Cab Fare & Pricing Table</h4>
        
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We take great pride in ensuring that all our vehicles are spotless and well-maintained, giving you a clean and comfortable ride.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> Punctuality is our priority. We ensure that you reach your destination on time, every time.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> We love making your first experience special. New users can enjoy a complimentary gift as a token of appreciation.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> For your safety and peace of mind, every vehicle is equipped with GPS tracking, allowing you to track your journey in real time.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer support team is available round the clock to assist you with any questions or issues during your journey.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How much does a cab from Mumbai to Ratnagiri cost?</h5>
            <p className="text-gray-700 mt-1">The fare depends on the cab type you choose, starting at ₹11/km for a sedan to ₹25/km for a Tempo Traveller.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a one-way cab from Mumbai to Ratnagiri?</h5>
            <p className="text-gray-700 mt-1">Yes, Aimcab offers one-way services from Mumbai to Ratnagiri.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How long does it take to travel from Mumbai to Ratnagiri by cab?</h5>
            <p className="text-gray-700 mt-1">The journey typically takes 7 to 8 hours, depending on the traffic and road conditions.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a cab from Mumbai to Ratnagiri through an app?</h5>
            <p className="text-gray-700 mt-1">Yes, you can book your cab via the Aimcab mobile app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any toll fees on the Mumbai to Ratnagiri route?</h5>
            <p className="text-gray-700 mt-1">Yes, toll fees are applicable on the route from Mumbai to Ratnagiri, but they are not included in the fare.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I stop for sightseeing on the way to Ratnagiri?</h5>
            <p className="text-gray-700 mt-1">Yes, Aimcab allows you to make stops at tourist spots along the way. You can ask your driver to take a detour for a few quick visits.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What types of vehicles are available for the trip from Mumbai to Ratnagiri?</h5>
            <p className="text-gray-700 mt-1">Aimcab offers a variety of vehicles including sedans, SUVs, luxury cars, and Tempo Travellers.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, Aimcab operates with a transparent pricing model, so there are no hidden charges. All fees are upfront.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold mb-6">🏢 About Us – Aimcab</h4>
        
        <div className="text-white">
          <p className="mb-4">
            Aimcab is a leading cab service provider based in Pune, with over 20 years of experience in the transportation industry. We are committed to offering reliable, safe, and comfortable intercity travel services. Our network includes over 500 registered cabs, and we've successfully completed more than 3,000 outstation trips. With a customer base of over 200,000 satisfied travelers, Aimcab is your trusted choice for intercity travel.
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