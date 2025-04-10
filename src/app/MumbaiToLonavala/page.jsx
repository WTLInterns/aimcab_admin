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
        <title>Mumbai to Lonavala Cab Services | Affordable Taxi Ride</title>
        <meta name="description" content="Book Mumbai to Lonavala cab services with Aim Cab. Safe, affordable one-way & round-trip taxi options with professional drivers at best fares." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Lonavala-Cab-Services" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="mumbai to lonavala cab services, mumbai to lonavala cab, lonavala to mumbai cab, mumbai to lonavala cab fare, mumbai to lonavala cab service, mumbai to lonavala cab one way, cab service from mumbai to lonavala, lonavala to mumbai share cab, lonavala to mumbai cab one way, book cab from lonavala to mumbai, cab service from lonavala to mumbai, cheap cabs from mumbai to lonavala, lonavala to mumbai airport cab charges, mumbai to lonavala cab booking" />
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
            Mumbai to Lonavala Cab Service
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
        Mumbai to Lonavala Cab Services – Your Ultimate Travel Experience
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, your trusted provider of Mumbai to Lonavala cab services. Whether you're planning a weekend getaway, a business trip, or just looking to explore the natural beauty of Lonavala, we ensure that your journey is smooth, comfortable, and hassle-free. Known for its lush green landscapes and picturesque views, Lonavala is one of the most popular hill stations near Mumbai, making it a must-visit destination for all kinds of travelers.
            With Aimcab, you can expect a reliable, safe, and punctual ride. We provide a range of vehicle options, including private cabs, group transportation, and affordable options, so you can enjoy the best travel experience at competitive rates. Whether you need a one-way trip or a round-trip service, we have the perfect solution to meet your needs.
            In this detailed guide, we'll walk you through everything you need to know about our Mumbai to Lonavala cab services. From the service options we offer, to booking methods, travel routes, attractions, and pricing, we have it all covered!
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
              Our one-way cab from Mumbai to Lonavala service is ideal for those who wish to travel from Mumbai to Lonavala without the need for a return trip. Whether you are going for a day trip or spending a weekend, this option offers great flexibility. We ensure your trip is comfortable, stress-free, and on-time.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              For travelers who plan to travel from Mumbai to Lonavala and then return to Mumbai, we offer a round-trip cab service. This is perfect for those who want to enjoy their stay in Lonavala and need a reliable ride back. Whether it's for business, leisure, or family travel, our Mumbai to Lonavala cab service will ensure a comfortable experience throughout your journey.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              If you are flying into Mumbai and need a ride to Lonavala, we provide airport pickup and drop services. Our cab from Lonavala to Mumbai can also be arranged for airport transfers. Whether you're arriving at Chhatrapati Shivaji Maharaj International Airport or Mumbai Domestic Airport, we guarantee a smooth, on-time transfer. No need to worry about navigating the city traffic – our experienced drivers are here to ensure you get to Lonavala or the airport on time, in comfort and style.
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
              Booking your Mumbai to Lonavala cab online is simple. Just visit our website, enter your pickup and drop-off locations, select your preferred vehicle, and complete your booking in a few clicks. You will receive an instant booking confirmation and all the details of your trip, including the driver's contact information and estimated pickup time.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              If you prefer to speak directly with our customer service team, you can book your cab from Mumbai to Lonavala over the phone. Our friendly customer service agents are available 24/7 to assist you with booking your ride, answering questions, and providing any details you may need.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              For tech-savvy travelers, the Aimcab app makes booking a Mumbai to Lonavala taxi even more convenient. Available for both Android and iOS, the app allows you to quickly book your ride, track your driver, make payments, and communicate with the driver all through your smartphone. The app is perfect for travelers on the go.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Lonavala</h5>
            <p className="text-gray-700 mb-4">
              The most popular route for traveling from Mumbai to Lonavala is via the Mumbai-Pune Expressway (MPE). This route is well-maintained, offers excellent road quality, and is the fastest way to reach Lonavala. Here's a breakdown of the journey:
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai → Panvel → Lonavala
            </p>
            <p className="text-gray-700">
              Starting from Mumbai, the drive takes you through the busy streets of Panvel, a suburban area of Mumbai, before transitioning to the Mumbai-Pune Expressway. The expressway offers smooth roads, well-marked lanes, and beautiful views along the way. As you approach Lonavala, you'll begin to notice the lush green hills, waterfalls, and valleys that make Lonavala a popular destination.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              The Mumbai to Lonavala journey offers more than just a ride – it's an experience in itself. Here's what you can expect along the way:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>City to Countryside Transition: The journey begins in the bustling metropolis of Mumbai and slowly transitions into the serene hills of Lonavala. You'll experience the contrast between the urban environment and the peaceful natural beauty of the Western Ghats.</li>
              <li>Scenic Views: As you drive along the expressway, you will be treated to panoramic views of the rolling hills, lush forests, and valleys that surround Lonavala. During the monsoon season, the hills are covered with mist, and waterfalls cascade down the mountainsides, creating an idyllic atmosphere.</li>
              <li>Smooth Roads: The Mumbai-Pune Expressway ensures a smooth and comfortable ride, with minimal traffic congestion, especially if you are traveling outside of peak hours.</li>
              <li>The journey from Mumbai to Lonavala is not only about reaching your destination but also about enjoying the scenic beauty along the way.</li>
            </ul>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">80 km</div>
              <div className="text-gray-600 mt-2">Distance</div>
            </div>
            <div className="mx-8 text-gray-400">|</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">2-3 hrs</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Lonavala</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Kailas Leni Caves (Mumbai Suburbs)</h6>
                <p className="text-gray-600">A historical site located near Mumbai, these ancient caves are famous for their intricate sculptures and carvings.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lonavala Lake</h6>
                <p className="text-gray-600">Once you reach Lonavala, head towards the Lonavala Lake, a serene place perfect for a peaceful retreat.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Karjat</h6>
                <p className="text-gray-600">Known for its waterfalls and trekking spots, Karjat is a beautiful spot to explore on your way to Lonavala.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Lonavala</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lonavala Lake</h6>
                <p className="text-gray-600">A scenic lake surrounded by lush greenery, perfect for a relaxed picnic or boating experience.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Bhushi Dam</h6>
                <p className="text-gray-600">A popular spot for tourists, especially during the monsoon, where you can enjoy the waterfall and scenic views.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Tiger's Leap</h6>
                <p className="text-gray-600">Offering breathtaking views of the surrounding hills and valleys, Tiger's Leap is a must-visit spot for nature lovers and photographers.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Karla Caves</h6>
                <p className="text-gray-600">These ancient Buddhist rock-cut caves are located near Lonavala and are known for their beautiful architecture and serenity.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Della Adventure Park</h6>
                <p className="text-gray-600">For adventure lovers, Della Adventure Park offers a variety of outdoor activities, including zip-lining, archery, and go-karting.</p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">What Travelers Can Do and Explore in Lonavala</h5>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Trekking and Nature Walks</h6>
            <p className="text-gray-600">Explore the numerous trekking trails and hiking routes that take you through Lonavala's lush forests and hills.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Water Sports</h6>
            <p className="text-gray-600">Enjoy boating or simply relax by the lakes, waterfalls, and dams in Lonavala.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Camping</h6>
            <p className="text-gray-600">For those looking for a more adventurous experience, Lonavala offers camping sites, where you can spend the night under the stars and enjoy a bonfire.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Shopping</h6>
            <p className="text-gray-600">Visit the local markets in Lonavala to buy handmade crafts, delicious chikki (a local sweet), and other souvenirs.</p>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We take pride in maintaining our cabs to the highest standards of cleanliness. All vehicles are regularly cleaned and sanitized to ensure a safe and comfortable ride.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We value your time. Our Mumbai to Lonavala cab service guarantees punctuality, ensuring timely pickups and drops, whether you're heading to Lonavala for a vacation or a business trip.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> We appreciate your trust in us. To make your first ride even more special, we offer a complimentary gift for new users.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> All of our vehicles come equipped with GPS tracking, so you can monitor your ride in real-time and ensure you're always on the right route.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer support team is available around the clock to assist you with bookings, answer any questions, or resolve any concerns during your trip.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the distance between Mumbai and Lonavala?</h5>
            <p className="text-gray-700 mt-1">The distance from Mumbai to Lonavala is approximately 80 kilometers, and the journey takes about 2 to 3 hours.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Lonavala cab?</h5>
            <p className="text-gray-700 mt-1">You can book your Mumbai to Lonavala taxi service online via our website, by calling our customer service, or using the Aimcab app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the fare for a one-way Mumbai to Lonavala cab?</h5>
            <p className="text-gray-700 mt-1">The fare depends on the type of vehicle you choose. Sedans start at ₹11/km.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer airport transfer services from Mumbai to Lonavala?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Mumbai airport to Lonavala taxi services, ensuring a smooth airport transfer.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip cab for Mumbai to Lonavala?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your Mumbai to Lonavala journey and back.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, our fares are transparent, and you only pay for the kilometers traveled, excluding tolls and parking fees.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best attractions in Lonavala?</h5>
            <p className="text-gray-700 mt-1">Key attractions include Lonavala Lake, Tiger's Leap, Bhushi Dam, and Karla Caves.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer cabs for group trips?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Tempo Traveller services for group trips and family outings.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold mb-6">🏢 About Aimcab</h4>
        
        <div className="text-white">
          <p className="mb-4">
            Aimcab has been providing trusted cab services since 2001, based in Pune. We operate over 50 personal cabs and a network of 500+ registered cabs across India. With over 200,000 happy customers and 3,000+ successful outstation trips, we have built a reputation for reliability, safety, and excellent customer service.
          </p>
          <p>
            Known for our punctuality, safety, and excellent customer service, we are the preferred choice for intercity travel.
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