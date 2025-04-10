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
        <title>Mumbai to Pandharpur Cab Service | Aim Cab Booking</title>
        <meta name="description" content="Book Mumbai to Pandharpur cab with Aim Cab for a safe, budget-friendly trip. Enjoy one-way & round-trip taxi rides with professional drivers." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Pandharpur-Cab-Service" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="Mumbai To Pandharpur Cab Services, Mumbai To Pandharpur Cab, mumbai to Pandharpur cab fare, mumbai to Pandharpur Distance, Cab Service In Pandharpur" />
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
            Mumbai to Pandharpur Cab Service
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            A Comfortable and Convenient Journey
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center">
        Mumbai To Pandharpur Cab Services – A Comfortable and Convenient Journey
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, your reliable and professional provider of Mumbai to Pandharpur cab services. Whether you're making a pilgrimage to the revered Vithoba Temple or exploring the rich culture and history of Pandharpur, our Mumbai to Pandharpur cab ensures a safe, comfortable, and hassle-free journey. We offer a variety of cab services to suit your travel needs, from one-way trips to round trips, ensuring that your journey is as pleasant as your destination.
            In this comprehensive guide, we will walk you through our Mumbai to Pandharpur cab services, including service options, booking methods, the road trip experience, tourist attractions, pricing details, and more. Whether you're a first-time visitor or a regular traveler, Aimcab will make your trip seamless.
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
              Our one-way cab service from Mumbai to Pandharpur is ideal for those who wish to travel from Mumbai to Pandharpur without the need for a return ride. Whether you are making a short pilgrimage, attending an event, or exploring the city for a few days, our one-way Mumbai to Pandharpur cab is the perfect option. You can enjoy the journey without worrying about a return trip.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              For travelers planning to visit Pandharpur and return to Mumbai, we offer an affordable and reliable round-trip service. When you choose our round-trip Mumbai to Pandharpur cab service, we will ensure a seamless experience throughout your trip. Your driver will be ready to pick you up, take you to your destination, and then drive you back safely to Mumbai at the end of your trip.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              If you're flying into Mumbai International Airport and need a ride to Pandharpur, we provide airport pickup and drop services. Our drivers are well-acquainted with the best routes and traffic conditions, ensuring that you get to Pandharpur in the most efficient and comfortable way possible. We also offer Pandharpur to Mumbai airport taxi services for smooth transfers from Pandharpur to the airport.
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
              Booking your Mumbai to Pandharpur taxi service online is quick and easy. Simply visit Aimcab.com, enter your pickup and drop-off locations, choose the type of vehicle, and confirm your booking. Once your booking is confirmed, you'll receive a confirmation email with all the necessary trip details, including the driver's contact information, estimated pickup time, and more.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              If you prefer a more personalized touch, you can book your Mumbai to Pandharpur cab by calling our customer service team. Our representatives are available 24/7 to assist with your booking, provide pricing information, and answer any questions you may have. We will confirm your reservation and ensure a smooth and timely ride.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book Through App</h5>
            <p className="text-gray-600">
              For travelers on the go, the Aimcab mobile app makes booking a Mumbai to Pandharpur taxi even more convenient. Available for Android and iOS, the app allows you to quickly book your ride, track your cab in real-time, make payments, and communicate directly with your driver. It's a great option for those who prefer managing their travel arrangements from their smartphone.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Pandharpur</h5>
            <p className="text-gray-700 mb-4">
              The most popular route for traveling from Mumbai to Pandharpur is via National Highway 65 (NH65). This highway is well-maintained, ensuring smooth travel throughout the journey. The route takes you through several towns and scenic landscapes, including:
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai → Thane → Kalyan → Karjat → Pune → Pandharpur
            </p>
            <p className="text-gray-700">
              The journey starts in Mumbai and heads towards Thane and Kalyan, eventually reaching Karjat and Pune. From Pune, you will continue on National Highway 65 to reach Pandharpur. The route is straightforward and well-signposted, ensuring you won't have any trouble navigating your way to your destination.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              The Mumbai to Pandharpur road trip is not only about reaching your destination but also about enjoying the journey. Here's what you can expect along the way:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>City to Countryside Transition: Starting in the bustling city of Mumbai, you'll gradually transition into the peaceful countryside of Maharashtra. As you leave the city behind, you'll find yourself surrounded by lush greenery, hills, and open fields, making for a relaxing journey.</li>
              <li>Scenic Views: As you drive along National Highway 65, you will be treated to beautiful views of the Western Ghats, picturesque valleys, and rolling hills. During the monsoon season, the landscape becomes even more enchanting, with waterfalls cascading down the hillsides.</li>
              <li>Smooth Roads: The highway is well-maintained, offering a smooth and comfortable drive. You can enjoy the peaceful surroundings and relax as you travel to your destination.</li>
              <li>This road trip offers a unique opportunity to experience the beauty of Maharashtra while making your way to Pandharpur. Whether you're traveling for business, pilgrimage, or leisure, the journey itself will be a memorable experience.</li>
            </ul>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">350 km</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Pandharpur</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lonavala and Khandala</h6>
                <p className="text-gray-600">These popular hill stations are located near Mumbai and are ideal for a quick stopover. You can explore Bhushi Dam and Lonavala Lake before continuing your journey to Pandharpur.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Shirdi</h6>
                <p className="text-gray-600">If you prefer a detour, you can stop by Shirdi, the home of Sai Baba. The Sai Baba Temple attracts millions of pilgrims every year, making it a spiritual haven for visitors.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Pandharpur</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Vithoba Temple</h6>
                <p className="text-gray-600">The heart of Pandharpur, the Vithoba Temple is dedicated to Lord Vithoba (a form of Lord Vishnu). It is one of the most important pilgrimage sites in India and attracts millions of devotees from all over the country.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Chandrabhaga River</h6>
                <p className="text-gray-600">A sacred river that flows through Pandharpur, the Chandrabhaga River is an important spot for pilgrims, who come to take a holy dip.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Pandharpur Fort</h6>
                <p className="text-gray-600">This historic fort offers a glimpse into the region's past and provides panoramic views of the town and surrounding areas.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Pundalik Temple</h6>
                <p className="text-gray-600">A must-visit temple dedicated to Lord Pundalik, a devotee of Lord Vithoba, who is believed to have meditated here.</p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">What Travelers Can Do and Explore in Pandharpur</h5>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Pilgrimage</h6>
            <p className="text-gray-600">Pandharpur is one of the most important pilgrimage destinations in India, and most visitors come to the town to visit the Vithoba Temple. The town is also famous for the Wari pilgrimage procession, where devotees walk to the temple to offer their prayers.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Photography</h6>
            <p className="text-gray-600">The natural beauty of Pandharpur and its surrounding areas, including the Chandrabhaga River and the Vithoba Temple, offers excellent opportunities for photography.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Shopping</h6>
            <p className="text-gray-600">Pandharpur is home to several local markets where you can purchase religious souvenirs, handicrafts, and temple offerings.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Cultural Immersion</h6>
            <p className="text-gray-600">Pandharpur is steeped in culture, and visitors can immerse themselves in the local traditions and festivals. Experience the vibrant Wari processions that take place during certain times of the year.</p>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We take cleanliness seriously. All our cabs are regularly cleaned and sanitized to ensure a hygienic ride for all passengers.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> Punctuality is a priority. We guarantee timely pickups and drops, ensuring you reach your destination on time without any delays.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> To make your first ride with us even more special, we offer a complimentary gift for new users.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> All our vehicles are equipped with GPS tracking, so you can track your ride in real-time and always know where you are.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer service team is available around the clock to assist with bookings, inquiries, and any issues you may encounter during your trip.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the distance between Mumbai and Pandharpur?</h5>
            <p className="text-gray-700 mt-1">The distance from Mumbai to Pandharpur is approximately 350 kilometers, and the journey typically takes 6 to 7 hours.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Pandharpur cab?</h5>
            <p className="text-gray-700 mt-1">You can book your Mumbai to Pandharpur taxi service online via our website, by calling our customer service, or using the Aimcab mobile app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the fare for a one-way Mumbai to Pandharpur cab?</h5>
            <p className="text-gray-700 mt-1">Sedans start at ₹11/km, and the fare varies depending on the vehicle type.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer airport transfer services from Mumbai to Pandharpur?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Mumbai to Pandharpur airport transfers, ensuring timely and comfortable transfers to your destination.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip cab for Mumbai to Pandharpur?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your Mumbai to Pandharpur journey and back.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, we provide transparent pricing with no hidden charges.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best attractions in Pandharpur?</h5>
            <p className="text-gray-700 mt-1">Vithoba Temple, Chandrabhaga River, Pandharpur Fort, and Pundalik Temple are some of the top attractions.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer group trips from Mumbai to Pandharpur?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Tempo Traveller services for group trips and family outings.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold mb-6">🏢 About Aimcab</h4>
        
        <div className="text-white">
          <p className="mb-4">
            Aimcab has been providing reliable, safe, and comfortable intercity cab services since 2001. With a fleet of over 50 personal cabs and a network of 500+ registered cabs across India, we've successfully completed over 3,000 outstation trips and served over 200,000 happy customers.
          </p>
          <p>
            Our commitment to punctuality and excellent customer experience has made us the preferred choice for intercity travel.
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