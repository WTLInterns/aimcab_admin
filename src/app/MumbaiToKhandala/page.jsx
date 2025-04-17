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
      <Navbar />
      <Head>
        <title>Mumbai to Khandala Cab Service | Aim Cab Booking</title>
        <meta name="description" content="Book Mumbai to Khandala cab with Aim Cab for safe, affordable, one-way & round-trip taxi rides. Professional drivers & 24x7 support." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Khandala-Cab-Service" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="mumbai to khandala cab services, mumbai to khandala cab booking, mumbai to khandala cab, cab fare from mumbai to khandala, cab from mumbai to lonavala khandala, mumbai to khandala cab fare" />
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
            Mumbai to Khandala Cab Service
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Your Gateway to Scenic Serenity
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center">
        Mumbai to Khandala Cab Services – Your Gateway to Scenic Serenity
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 mt-24 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, your trusted provider of Mumbai to Khandala cab services. Whether you're planning a family trip, a romantic getaway, or just a weekend escape from the city's hustle, Khandala offers a peaceful retreat with lush green landscapes, picturesque hills, and tranquil lakes. With our Mumbai to Khandala taxi service, we ensure that your journey is comfortable, affordable, and timely, so you can make the most of your visit to this beautiful hill station.
            This detailed guide will walk you through the options we offer for Mumbai to Khandala cab booking, the road trip experience, tourist attractions in Khandala, and our transparent pricing structure. Let's explore how Aimcab can make your Mumbai to Khandala journey stress-free and enjoyable.
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
              Our one-way cab service from Mumbai to Khandala is ideal for those who are traveling to Khandala for a short trip. Whether you're going for a day out or a short weekend getaway, our Mumbai to Khandala cab service ensures a comfortable and convenient journey. With no return ride obligation, you can simply enjoy your trip and relax while our drivers take care of the rest.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              If you're planning to return to Mumbai after your visit to Khandala, we offer a round-trip cab service. Our round-trip service allows you to enjoy the journey both ways, with a guaranteed return ride. Whether it's a family trip, a business outing, or a romantic getaway, this option provides you with peace of mind, knowing your transport is taken care of for the entire journey.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              Flying into Mumbai International Airport and need a ride to Khandala? Or perhaps you need a cab from Khandala to Mumbai airport? We offer convenient airport pickup and drop services to make your travel even easier. Our Mumbai to Khandala taxi will ensure you're picked up on time from the airport and driven to your destination without any delays. Similarly, we also offer Khandala to Mumbai airport taxi services, ensuring timely arrivals and departures.
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
              Booking your Mumbai to Khandala cab service online is fast and convenient. Simply visit our website Aimcab.com, enter your pickup and drop-off locations, choose your vehicle type, and confirm your booking. Once completed, you'll receive an instant confirmation with all the details of your trip, including the driver's contact information and estimated pickup time.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              If you prefer to speak with someone directly, you can book your cab from Mumbai to Khandala over the phone. Our customer service team is available 24/7 to assist with any booking inquiries, provide pricing details, and confirm your reservation. We ensure a seamless booking experience, no matter which method you choose.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book Through App</h5>
            <p className="text-gray-600">
              For those on the move, the Aimcab mobile app is a great option to book your Mumbai to Khandala taxi. Available for Android and iOS users, the app lets you book, track, and pay for your ride all in one place. You can also communicate with your driver and get live updates on your trip.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Khandala</h5>
            <p className="text-gray-700 mb-4">
              The most popular route for traveling from Mumbai to Khandala is via the Mumbai-Pune Expressway (MPE). This is the fastest and most efficient route, and it also provides some of the best views during the drive. Here's a breakdown of the route:
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai → Thane → Lonavala → Khandala
            </p>
            <p className="text-gray-700">
              From Mumbai, you'll drive through Thane, pass Lonavala, and finally reach Khandala. The expressway is well-maintained and offers smooth driving conditions, especially if you're traveling during non-peak hours.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              The Mumbai to Khandala journey offers a delightful travel experience, with plenty of scenic views and relaxing surroundings along the way. Here's what you can expect:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>Transition from City to Nature: The journey begins with the busy streets of Mumbai, but soon, you'll be surrounded by the natural beauty of the Western Ghats as you make your way out of the city and into the serene landscape.</li>
              <li>Scenic Views: The drive along the Mumbai-Pune Expressway is surrounded by beautiful hills, valleys, and small villages. During the monsoon season, you'll be treated to lush green views and cascading waterfalls, making it a photographer's paradise.</li>
              <li>Smooth Roads: The Mumbai-Pune Expressway ensures a smooth ride with little to no bumps along the way, making the drive comfortable and easy, even during longer trips.</li>
            </ul>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">80 km</div>
              <div className="text-gray-600 mt-2">Distance</div>
            </div>
            <div className="mx-8 text-gray-400">|</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">1.5-2 hrs</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Khandala</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lonavala</h6>
                <p className="text-gray-600">Just before reaching Khandala, you'll pass through Lonavala, another popular hill station in Maharashtra. You can stop by to visit the Bhushi Dam or the Lonavala Lake, both of which are ideal for a quick break.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Kailash Caves (Near Khandala)</h6>
                <p className="text-gray-600">These caves, located near Khandala, are worth visiting for history buffs and those interested in ancient architecture.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Khandala</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Tiger's Leap</h6>
                <p className="text-gray-600">One of the most popular attractions in Khandala, Tiger's Leap offers breathtaking views of the surrounding hills, valleys, and waterfalls. It's an excellent spot for trekking, photography, and a peaceful retreat.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Duke's Nose</h6>
                <p className="text-gray-600">Known for its striking resemblance to the nose of the Duke of Wellington, this point offers panoramic views of the surrounding landscape and is perfect for trekking and nature walks.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Karla Caves</h6>
                <p className="text-gray-600">These ancient Buddhist rock-cut caves are located a short distance from Khandala. They are known for their intricate carvings, sculptures, and peaceful atmosphere.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Bhushi Dam</h6>
                <p className="text-gray-600">Located in Lonavala, just a few kilometers from Khandala, the Bhushi Dam is a favorite among tourists, especially during the monsoon when the dam overflows, creating a beautiful waterfall effect.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lonavala Lake</h6>
                <p className="text-gray-600">Another popular stop for travelers, Lonavala Lake is a serene spot perfect for a peaceful retreat, especially in the mornings or evenings.</p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">What Travelers Can Do and Explore in Khandala</h5>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Trekking</h6>
            <p className="text-gray-600">Khandala offers several trekking trails, including the famous Tiger's Leap and Duke's Nose. These trails offer spectacular views of the valley and surrounding hills.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Photography</h6>
            <p className="text-gray-600">With its lush greenery, waterfalls, and natural beauty, Khandala is a photographer's paradise. Whether you're hiking or simply enjoying the view, you'll find plenty of opportunities to capture stunning landscapes.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Nature Walks</h6>
            <p className="text-gray-600">The cool, refreshing air in Khandala is perfect for a relaxing nature walk. Explore the region's dense forests and valleys while enjoying the beautiful surroundings.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Relax and Unwind</h6>
            <p className="text-gray-600">Khandala is the perfect destination to escape the city's chaos. Whether you're staying in a cozy hotel or spending time outdoors, the peaceful atmosphere makes it easy to relax and recharge.</p>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> Our fleet is regularly cleaned and sanitized to ensure a clean and hygienic ride for all passengers.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We value your time and guarantee that our drivers will be punctual, ensuring timely pickups and drop-offs.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> To make your first ride with us special, we offer a complimentary gift for new users.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> All our vehicles are equipped with GPS tracking, so you can track your ride in real-time, ensuring you are always on the right path.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer support team is available around the clock to assist you with bookings, provide information, or resolve any concerns during your trip.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the distance between Mumbai and Khandala?</h5>
            <p className="text-gray-700 mt-1">The distance is approximately 80 kilometers, and the drive takes about 1.5 to 2 hours.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Khandala cab?</h5>
            <p className="text-gray-700 mt-1">You can book online via our website, over the phone, or using the Aimcab mobile app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the fare for a one-way Mumbai to Khandala cab?</h5>
            <p className="text-gray-700 mt-1">Sedans start at ₹11/km, and pricing depends on the vehicle type.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer airport transfer services from Mumbai to Khandala?</h5>
            <p className="text-gray-700 mt-1">Yes, we provide Mumbai to Khandala airport transfers, ensuring timely and comfortable travel.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip cab for Mumbai to Khandala?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your journey to and from Khandala.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, our pricing is transparent with no hidden charges.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best attractions in Khandala?</h5>
            <p className="text-gray-700 mt-1">Tiger's Leap, Duke's Nose, Karla Caves, and Lonavala Lake are must-visit spots.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer group trips from Mumbai to Khandala?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Tempo Traveller services for group trips.</p>
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