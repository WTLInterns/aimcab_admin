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
        <title>Mumbai to Lavasa Cab Service | Safe & Quick Ride</title>
        <meta name="description" content="Book Mumbai to Lavasa cab with Aim Cab for a safe, reliable, and budget-friendly trip. One-way & round-trip taxi service available at best fare." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Lavasa-Cab-Service" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="Mumbai To lavasa Cab Services, mumbai to lavasa cab fare, lavasa to mumbai cab, mumbai to lavasa cab, book cab mumbai to lavasa, cab fare from mumbai to lavasa, mumbai to lavasa sharing cab, Cab Service In lavasa, Best cab mumbai to lavasa" />
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
            Mumbai to Lavasa Cab Service
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
        Mumbai to Lavasa Cab Services – Comfortable & Affordable Travel
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, your trusted provider of Mumbai to Lavasa cab services. Whether you're planning a quick getaway, a family vacation, a business trip, or just a relaxing weekend, Lavasa is the perfect destination. Situated in the hills of Maharashtra, Lavasa is a beautiful hill station with lakes, scenic views, and an idyllic atmosphere, making it an ideal place to escape the hustle and bustle of Mumbai.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            At Aimcab, we provide a seamless and comfortable journey for all our customers traveling from Mumbai to Lavasa. This guide will walk you through all the essential details, including the cab booking process, travel experience, cab fares, and tourist attractions in Lavasa.
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
              Our one-way cab service from Mumbai to Lavasa is ideal for those who are traveling to Lavasa and do not need a return trip. This is a great option for people who are traveling for business or a short visit. Our Mumbai to Lavasa cab ensures a direct, comfortable, and convenient journey, so you can relax and enjoy the views on the way.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              For those planning to return to Mumbai after their visit to Lavasa, we offer an easy round-trip cab service. Our round-trip service allows you to enjoy both your onward and return journeys with ease. You can book your Mumbai to Lavasa cab and have the same vehicle and driver take you back to Mumbai at your convenience.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              If you're flying into Mumbai International Airport and need a reliable ride to Lavasa, our airport pickup and drop services are the perfect solution. We ensure a timely pickup, taking you from Mumbai Airport to Lavasa without any hassle. Additionally, we offer Lavasa to Mumbai airport taxi services for a smooth and timely transfer back to the airport at the end of your trip.
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
              Booking your Mumbai to Lavasa cab online is the simplest and quickest way. Just visit our website, Aimcab.com, and fill in the details, such as pickup location, destination, and vehicle type. Once confirmed, you'll receive an instant booking confirmation with your cab details, including the driver's contact information and estimated pickup time.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              For a more personalized experience, you can book your Mumbai to Lavasa taxi over the phone. Our customer service team is available 24/7 to assist you with your Mumbai to Lavasa cab booking. You can inquire about available vehicles, pricing, and travel details, and our team will confirm the booking for you in no time.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              The Aimcab mobile app makes booking your Mumbai to Lavasa taxi service even more convenient. The app is available for both Android and iOS, allowing you to book, track, and manage your rides effortlessly. You can track your driver in real-time, communicate directly with them, and make secure payments through the app.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Lavasa</h5>
            <p className="text-gray-700 mb-4">
              The journey from Mumbai to Lavasa is a beautiful road trip filled with scenic views and smooth highways. The distance between Mumbai and Lavasa is approximately 200 kilometers, and the trip typically takes around 4 to 5 hours, depending on traffic conditions. Here's everything you need to know about the route and travel experience.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai → Navi Mumbai → Lonavala → Old Mumbai-Pune Highway → Lavasa
            </p>
            <p className="text-gray-700">
              After departing from Mumbai, the route takes you through Navi Mumbai and Lonavala, offering scenic views of hills and valleys. From Lonavala, you continue on the Old Mumbai-Pune Highway to reach Lavasa. The final stretch of the road leading into Lavasa is particularly picturesque, as you climb through the lush greenery and beautiful landscapes of the Western Ghats.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              The Mumbai to Lavasa road trip is a delightful experience, offering beautiful scenic views and a peaceful atmosphere. Here's what you can expect during your journey:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li><strong>From City to Countryside:</strong> The journey starts in the bustling city of Mumbai, but as you drive towards Lavasa, the hustle and bustle give way to lush greenery, serene lakes, and beautiful hills, creating a calming transition.</li>
              <li><strong>Scenic Views:</strong> Along the way, you'll be treated to breathtaking views of the Western Ghats, winding roads, valleys, and cascading waterfalls, especially during the monsoon season. The entire drive offers plenty of photo opportunities.</li>
              <li><strong>Smooth Roads:</strong> The Mumbai-Pune Expressway is a smooth, well-maintained highway that ensures a comfortable and easy drive. The roads are perfect for long-distance travel and provide a smooth and hassle-free experience.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              The Mumbai to Lavasa road trip is ideal for travelers who enjoy scenic drives, making it a memorable part of the overall journey.
            </p>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">200 km</div>
              <div className="text-gray-600 mt-2">Distance</div>
            </div>
            <div className="mx-8 text-gray-400">|</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">4-5 hrs</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Lavasa</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lonavala</h6>
                <p className="text-gray-600">A well-known hill station located near Mumbai, Lonavala offers many attractions like Bhushi Dam, Lonavala Lake, and Tiger's Point, where you can enjoy spectacular views of the surrounding hills.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Karla Caves</h6>
                <p className="text-gray-600">Located near Lonavala, the Karla Caves are ancient Buddhist rock-cut caves with stunning sculptures and carvings. It's a great place to stop if you want to explore history and architecture.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Pune</h6>
                <p className="text-gray-600">If you have extra time, you can explore Pune and its famous attractions, including the Aga Khan Palace, Shaniwar Wada, and the Raja Dinkar Kelkar Museum.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Lavasa</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lake Lavasa</h6>
                <p className="text-gray-600">The centerpiece of Lavasa is its beautiful artificial lake. You can go boating, relax by the waterside, or simply enjoy a peaceful walk along the lake promenade.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Dasve Viewpoint</h6>
                <p className="text-gray-600">For stunning panoramic views of the town and surrounding hills, head to the Dasve Viewpoint, one of the best places for photography and sightseeing.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lavasa Promenade</h6>
                <p className="text-gray-600">The Lavasa Promenade is a beautiful lakeside area lined with shops, cafes, and restaurants. It's the perfect place to take a stroll, enjoy the views, or dine at one of the lakeside restaurants.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Nature Trails and Trekking</h6>
                <p className="text-gray-600">For nature lovers and adventure enthusiasts, Lavasa offers several trekking trails and nature walks. These trails take you through dense forests, valleys, and hills, providing a unique experience of the area's natural beauty.</p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">What Travelers Can Do and Explore in Lavasa</h5>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Relax by the Lake</h6>
            <p className="text-gray-600">Spend your days enjoying the serene atmosphere around Lake Lavasa, where you can take a boat ride, go for a walk along the promenade, or relax at a lakeside café.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Trekking and Nature Walks</h6>
            <p className="text-gray-600">Explore the natural beauty of Lavasa by trekking through lush green hills and valleys. The area is perfect for nature walks and photography.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Dining and Shopping</h6>
            <p className="text-gray-600">The Lavasa Promenade offers several options for dining and shopping. You can enjoy local and international cuisine at the cafes and restaurants or shop for souvenirs from the local markets.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Spiritual Visit</h6>
            <p className="text-gray-600">For those interested in spirituality, visit nearby temples and explore the peaceful surroundings.</p>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We ensure that all our vehicles are regularly cleaned and sanitized to provide a hygienic and comfortable ride for all passengers.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We value your time. Our drivers guarantee timely pickups and drops, ensuring that you arrive at your destination on schedule.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> To make your first trip even more special, we offer a complimentary gift for new users booking their Mumbai to Lavasa cab with us.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> All our cabs are equipped with GPS tracking, allowing you to track your ride in real-time and ensuring that your trip is on the right track.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer service team is available around the clock to assist with bookings, address inquiries, and ensure that you have a smooth and pleasant experience during your journey.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the distance from Mumbai to Lavasa?</h5>
            <p className="text-gray-700 mt-1">The distance from Mumbai to Lavasa is approximately 200 kilometers, and the journey typically takes around 4 to 5 hours.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Lavasa cab?</h5>
            <p className="text-gray-700 mt-1">You can book your Mumbai to Lavasa taxi online via our website, by calling our customer service, or through the Aimcab mobile app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the fare for a one-way Mumbai to Lavasa cab?</h5>
            <p className="text-gray-700 mt-1">Sedans start at ₹11/km, and the fare varies depending on the type of vehicle you select.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer airport transfer services from Mumbai to Lavasa?</h5>
            <p className="text-gray-700 mt-1">Yes, we provide Mumbai to Lavasa airport transfers, ensuring that you are picked up promptly from Mumbai International Airport and dropped off at your destination.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip cab for Mumbai to Lavasa?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your Mumbai to Lavasa journey and return.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, our pricing is transparent with no hidden charges. You only pay for the kilometers traveled.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best attractions in Lavasa?</h5>
            <p className="text-gray-700 mt-1">Lake Lavasa, Dasve Viewpoint, Lavasa Promenade, and Nature Trails are must-visit spots.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer group trips from Mumbai to Lavasa?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Tempo Traveller services for group trips and family outings.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold mb-6">🏢 About Aimcab</h4>
        
        <div className="text-white">
          <p className="mb-4">
            Aimcab is a trusted cab service provider based in Pune, offering safe, reliable, and comfortable intercity travel. We have a fleet of 50+ personal cabs and a network of 500+ registered cabs across India. With over 3,000 successful outstation trips and more than 200,000 happy customers, we are committed to providing excellent customer service and punctuality.
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