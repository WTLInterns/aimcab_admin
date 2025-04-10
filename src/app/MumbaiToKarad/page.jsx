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
      <Head>
        <title>Mumbai to Karad Cab | Affordable & Safe Taxi Ride</title>
        <meta name="description" content="Book Mumbai to Karad cab with Aim Cab for a safe, affordable, and comfortable ride. Easy cab booking with trusted drivers for one-way or round trip." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Karad-Cab-Service" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="Mumbai To Karad Cab, mumbai to Karad cab booking, Mumbai To Karad Cab Services, cab fare from mumbai to Karad, mumbai to Karad cab fare, Cab Services in Karad" />
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
            Mumbai to Karad Cab Service
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
      <h2 className="text-3xl font-bold mt-4 text-center text-[#76453B]">
        Mumbai to Karad Cab Services – Comfortable & Affordable Travel
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Are you planning a road trip from Mumbai to Karad and seeking reliable and comfortable cab services? Whether you're traveling for business, leisure, or any other reason, Aimcab offers seamless travel solutions with our Mumbai to Karad cab services. In this guide, we'll provide you with detailed information on how to book your cab, what to expect on the road, the best places to visit along the route, and more.
          </p>
        </div>
      </section>
      
      {/* Service Options */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3 mb-6">🧭 Service Options for Mumbai to Karad Cab Services</h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Oneway Mumbai to Karad Cab</h5>
            <p className="text-gray-600">
              If you need to travel one-way from Mumbai to Karad, Aimcab offers convenient one-way cab services. This is ideal for those who only need a ride to Karad and don't require a return trip. You can book a one-way cab for a hassle-free journey to your destination without worrying about returning the vehicle.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Mumbai to Karad Cab</h5>
            <p className="text-gray-600">
              For travelers who are planning a roundtrip, Aimcab offers flexible roundtrip Mumbai to Karad cab services. With this option, you can travel from Mumbai to Karad and return at your convenience. Our drivers will ensure that you enjoy a smooth and comfortable ride both ways.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop for Mumbai to Karad</h5>
            <p className="text-gray-600">
              For those flying in or out of Mumbai, we also offer airport pickup and drop services. If you're landing at Chhatrapati Shivaji Maharaj International Airport (BOM) or Mumbai Domestic Airport, Aimcab will ensure that you are picked up promptly and transported to Karad in comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛒 Booking Process for Mumbai to Karad Cab</h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book Online via Website</h5>
            <p className="text-gray-600">
              Booking your Mumbai to Karad cab online is quick and convenient. Visit the Aimcab website, select your pick-up location (Mumbai), your destination (Karad), and choose the type of vehicle you prefer. Once you confirm the details, you can securely pay online and receive an instant booking confirmation.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              If you prefer to speak to a customer service representative, you can book your Mumbai to Karad cab by calling our helpline. Our team will help you choose the best options based on your needs, provide trip details, and confirm your booking on the phone.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book Through App</h5>
            <p className="text-gray-600">
              For the ultimate convenience, Aimcab also offers a mobile app that allows you to book your Mumbai to Karad cab quickly. Whether you're on the go or prefer managing bookings from your phone, our app provides an easy way to choose your pick-up and drop-off points.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide: Mumbai to Karad</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Karad</h5>
            <p className="text-gray-700 mb-4">
              The most popular and convenient route for traveling from Mumbai to Karad is via NH 48 (National Highway 48). This route is well-maintained and offers a smooth drive. The distance from Mumbai to Karad is approximately 330 kilometers, and the drive usually takes around 6 to 7 hours, depending on traffic conditions.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai → Pune → Satara → Karad
            </p>
            <p className="text-gray-700">
              As you begin your journey from Mumbai, you'll pass through bustling suburban areas before entering the more rural and scenic parts of Maharashtra. The highway is a mix of urban roads and rural highways, offering you both smooth rides and picturesque landscapes.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience and Highway Information</h5>
            <p className="text-gray-700">
              The road trip from Mumbai to Karad is a beautiful journey through some of the most scenic landscapes in Maharashtra. Here's everything you need to know about the route, travel experience, and what to expect on the road.
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Mumbai to Pune:</strong> The first leg of your journey will take you through the busy streets of Mumbai to the highway connecting you to Pune. This part of the route is usually crowded, so it's advisable to start your journey early.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Pune to Karad:</strong> After Pune, the road becomes more peaceful as you move toward Karad. The journey is dotted with small towns and villages, offering beautiful views of the Western Ghats, rural farmlands, and lush green landscapes, especially during the monsoon season.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Scenic Views Along the Way</h5>
            <p className="text-gray-700">
              One of the best aspects of the Mumbai to Karad road trip is the stunning scenery that you'll encounter. As you drive out of Mumbai, you'll quickly leave behind the bustling urban landscape and enter into a more serene rural setting. Here's what you can expect to see along the way:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li><strong>Western Ghats:</strong> The route offers breathtaking views of the Western Ghats, with lush green hills on either side, particularly if you're traveling during or after the monsoon season.</li>
              <li><strong>Small Villages and Towns:</strong> You'll pass through various small towns like Lonavala, Khandala, and Pune, where you can see rural life up close, with traditional homes, farms, and local markets.</li>
              <li><strong>Rivers and Waterfalls:</strong> The route is dotted with several rivers and streams, especially near Pune and Satara. If you're traveling in the monsoon, you'll also see several waterfalls cascading down the hills.</li>
              <li><strong>Agricultural Fields:</strong> As you travel further into the heart of Maharashtra, you'll pass through fertile agricultural lands. The sight of sprawling fields of sugarcane, rice, and other crops is a visual treat.</li>
            </ul>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">330 km</div>
              <div className="text-gray-600 mt-2">Distance</div>
            </div>
            <div className="mx-8 text-gray-400">|</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">6-7 hrs</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Karad</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lonavala and Khandala</h6>
                <p className="text-gray-600">These twin hill stations are located just a few hours outside of Mumbai, making them the perfect stop for a refreshing break. Known for their scenic beauty, Lonavala and Khandala offer lush green landscapes, cool weather, and attractions such as Bhushi Dam, Lonavala Lake, and Tiger's Leap.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Karla Caves</h6>
                <p className="text-gray-600">Located near Lonavala, the Karla Caves are ancient Buddhist rock-cut temples that date back to the 2nd century BC. If you're a history or architecture enthusiast, this stop will fascinate you with its intricate carvings, massive pillars, and stunning views.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Pune</h6>
                <p className="text-gray-600">Known as the cultural capital of Maharashtra, Pune is full of attractions, both modern and historic. You can visit Shaniwar Wada, Aga Khan Palace, and Sinhagad Fort.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Satara</h6>
                <p className="text-gray-600">As you approach Karad, you will pass through Satara, a town famous for its natural beauty and historical significance. Some of the notable attractions in Satara include Kaas Plateau, Sajjangad Fort, and Bamnoli Lake.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Karad</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Karad Fort</h6>
                <p className="text-gray-600">One of the oldest historical landmarks in the region, Karad Fort offers stunning views of the town and surrounding countryside. It's a great spot for history buffs and those interested in the architecture of the fort.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Chandoli National Park</h6>
                <p className="text-gray-600">Located near Karad, Chandoli National Park is a popular destination for wildlife enthusiasts and nature lovers. The park is home to a variety of flora and fauna, including tigers, leopards, and various species of birds.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Koyna Dam</h6>
                <p className="text-gray-600">Koyna Dam, located just outside Karad, is one of the largest dams in India. The dam is situated within the beautiful Koyna Wildlife Sanctuary and offers panoramic views of the reservoir, hills, and forests surrounding it.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Mahalaxmi Temple</h6>
                <p className="text-gray-600">The Mahalaxmi Temple in Karad is a significant religious site dedicated to Goddess Mahalaxmi. The temple is known for its tranquil environment and is a place of spiritual significance for the locals.</p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">What Travelers Can Do and Explore in Karad</h5>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Trekking and Nature Walks</h6>
            <p className="text-gray-600">The surrounding hills and forests provide excellent opportunities for trekking. You can visit Chandoli National Park for a guided nature walk or trek up Karad Fort for scenic views.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Cultural Exploration</h6>
            <p className="text-gray-600">Explore the ancient temples like Mahalaxmi Temple and Chandreshwar Temple in Karad. These temples offer a deep insight into the region's history and spirituality.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Shopping for Handicrafts</h6>
            <p className="text-gray-600">Karad is known for its vibrant markets. You can buy locally made handicrafts, spices, and traditional Maharashtrian items as souvenirs.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Picnics by the Koyna Dam</h6>
            <p className="text-gray-600">Spend a peaceful afternoon by the Koyna Dam. The serene waters and surrounding greenery provide an ideal setting for a relaxing picnic.</p>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> To make your first trip even more special, we offer a complimentary gift for new users booking their Mumbai to Karad cab with us.</p>
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
            <h5 className="font-bold text-[#76453B]">How much does a cab from Mumbai to Karad cost?</h5>
            <p className="text-gray-700 mt-1">The cost of a Mumbai to Karad cab depends on the type of vehicle you choose. The fare starts at ₹11/km for a sedan and goes up to ₹25/km for a Tempo Traveller.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a one-way cab from Mumbai to Karad?</h5>
            <p className="text-gray-700 mt-1">Yes, Aimcab offers one-way cab services from Mumbai to Karad, ideal for those who only need a one-way ride.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How long does the journey take from Mumbai to Karad?</h5>
            <p className="text-gray-700 mt-1">The journey usually takes about 6 to 7 hours, depending on the traffic and road conditions.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a cab from Mumbai to Karad via the mobile app?</h5>
            <p className="text-gray-700 mt-1">Yes, Aimcab has a mobile app that allows you to book a Mumbai to Karad cab easily and conveniently from your phone.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any toll charges on the route from Mumbai to Karad?</h5>
            <p className="text-gray-700 mt-1">Yes, there are toll charges on the route, but these are not included in the fare and must be paid separately by the passenger.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I make stops during the trip?</h5>
            <p className="text-gray-700 mt-1">Yes, Aimcab allows you to make stops at popular tourist spots like Lonavala, Pune, and Satara along the way.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What types of vehicles are available for the Mumbai to Karad trip?</h5>
            <p className="text-gray-700 mt-1">Aimcab offers a variety of vehicles, including sedans, SUVs, luxury cars, and Tempo Travellers to suit different needs.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, Aimcab operates with full transparency. All charges are clearly stated, and there are no hidden costs.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <About_Aimcab  />

      <Footer />
    </div>
  )
}

export default page;