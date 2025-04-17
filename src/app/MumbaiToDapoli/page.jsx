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
        <title>Mumbai to Dapoli Cab | One Way & Round Trip Taxi</title>
        <meta name="description" content="Book Mumbai to Dapoli cab with Aim Cab for a safe, affordable & comfortable ride. One-way & round-trip taxi services with trained drivers." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Dapoli-Cab-Service" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="Mumbai To Dapoli Cab, mumbai to dapoli one way cab, Mumbai To Dapoli Cab Services, mumbai to dapoli cab booking, cab fare from mumbai to dapoli, mumbai to dapoli cab fare, Cab Services in Dapoli" />
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
            Mumbai to Dapoli Cab Service
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            A Comfortable and Scenic Journey
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center">
        Mumbai to Dapoli Cab Service – A Comfortable and Scenic Journey
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 mt-24 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, the leading provider of Mumbai to Dapoli cab services. Whether you're traveling for a peaceful getaway, a family vacation, or a business trip, Dapoli, a coastal town in Maharashtra, is an excellent destination. Known for its serene beaches, lush green landscapes, and rich cultural heritage, Dapoli offers a perfect retreat from the hustle and bustle of city life. With Aimcab, you can experience a smooth, comfortable, and hassle-free ride from Mumbai to Dapoli.
            In this detailed guide, we'll walk you through everything you need to know about our Mumbai to Dapoli cab services, including the different service options, how to book your ride, road trip information, must-visit attractions in Dapoli, and our transparent pricing structure. Let's get started on planning your next trip!
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
              Our one-way cab service from Mumbai to Dapoli is perfect for travelers who are only going to Dapoli and don't need a return journey. If you are traveling for a quick business trip, religious pilgrimage, or simply want to explore Dapoli without any return obligations, this service is ideal for you. We ensure a smooth and hassle-free one-way ride so you can reach your destination comfortably.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              For those who plan to visit Dapoli and return to Mumbai, our round-trip cab service is a great choice. This option is perfect for family vacations, weekend getaways, or business trips that require you to travel to Dapoli and then return to Mumbai. You'll have the same driver for both trips, ensuring consistency and familiarity throughout your journey.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              If you are flying into Mumbai International Airport and need a reliable ride to Dapoli, we offer airport pickup and drop services. Whether you are traveling for leisure or business, our professional drivers will ensure timely pickups and a safe, comfortable ride to Dapoli. We also offer Dapoli to Mumbai airport taxi services for your return journey, ensuring that your airport transfer is seamless and stress-free.
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
              Booking your Mumbai to Dapoli taxi service online is the simplest way to ensure your ride is ready when you need it. Simply visit Aimcab.com, input your pickup and drop-off locations, choose the type of vehicle you prefer, and confirm your booking. You will receive an instant booking confirmation with all the trip details, including the driver's contact information and estimated pickup time.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              If you prefer a more personalized touch, you can book your Mumbai to Dapoli cab over the phone. Our customer service team is available 24/7 to assist with your Mumbai to Dapoli cab booking. You can inquire about available vehicles, get pricing information, and confirm your booking with a simple phone call.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              For those who are always on the go, the Aimcab mobile app makes booking your Mumbai to Dapoli taxi even more convenient. The app is available for both Android and iOS users. It allows you to book, track, and pay for your ride all in one place. You can also communicate directly with your driver and get live updates on your trip.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Dapoli</h5>
            <p className="text-gray-700 mb-4">
              The most common and efficient route for traveling from Mumbai to Dapoli is via the Mumbai-Goa Highway (NH66). This route offers a smooth drive and a great balance of natural beauty and comfort. Here's the breakdown of the route:
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai → Panvel → Khopoli → Lonavala → Dapoli
            </p>
            <p className="text-gray-700">
              The journey starts in Mumbai, then heads towards Panvel and Khopoli before reaching Lonavala. From Lonavala, the drive continues along the Mumbai-Goa Highway (NH66), which takes you through picturesque villages, winding roads, and stunning views of the Western Ghats. The last stretch takes you to Dapoli, where you can enjoy the coastal beauty and natural charm of this hill station.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              The Mumbai to Dapoli road trip offers a delightful experience for those who love scenic drives. Here's what you can expect during your journey:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>From City to Nature: The journey begins with the busy cityscape of Mumbai. As you move towards Panvel and Khopoli, you'll notice the shift to the more rural and scenic areas of Maharashtra. The drive gradually transforms from bustling city life to the serenity of nature.</li>
              <li>Beautiful Scenery: The route from Mumbai to Dapoli offers plenty of beautiful views, including green valleys, hilly terrains, and small rivers. The road is particularly beautiful during the monsoon season, when waterfalls cascade down the hillsides, adding to the beauty of the journey.</li>
              <li>Smooth Roads: The Mumbai-Goa Highway (NH66) is well-maintained, ensuring a smooth and comfortable ride. The highway offers easy access and is a popular route for long-distance travelers heading to coastal areas like Dapoli.</li>
              <li>Overall, the Mumbai to Dapoli road trip is a memorable experience, with plenty of scenic stops and beautiful views along the way.</li>
            </ul>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">180 km</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Dapoli</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lonavala</h6>
                <p className="text-gray-600">A popular hill station near Mumbai, Lonavala offers stunning views, beautiful lakes, and trekking opportunities. Bhushi Dam and Tiger's Leap are some of the must-visit places in Lonavala.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Khopoli</h6>
                <p className="text-gray-600">Located near Lonavala, Khopoli is known for its picturesque landscapes and Pali Ganapati Temple, which attracts pilgrims from all over the region.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Kashid Beach</h6>
                <p className="text-gray-600">If you're looking to take a break and enjoy some time by the sea, Kashid Beach on the way to Dapoli is an excellent stop. The beach is known for its calm waters and stunning sunsets.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Dapoli</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Karde Beach</h6>
                <p className="text-gray-600">One of the most popular beaches in Dapoli, Karde Beach is known for its pristine beauty and peaceful atmosphere. It's an ideal spot for relaxing by the sea or enjoying water sports.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Murud Beach</h6>
                <p className="text-gray-600">Another beautiful beach, Murud Beach offers opportunities for boating, swimming, and enjoying the coastal scenery.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Dabhol</h6>
                <p className="text-gray-600">A small town near Dapoli, Dabhol is home to the famous Dabhol Power Plant and offers stunning views of the Arabian Sea.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Suvarnadurg Fort</h6>
                <p className="text-gray-600">For history enthusiasts, Suvarnadurg Fort is a must-visit site. The fort offers a glimpse into the region's history and provides amazing views of the sea and surrounding areas.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Hot Springs</h6>
                <p className="text-gray-600">Dapoli is home to several natural hot springs that are believed to have therapeutic properties. The Unhavare Hot Springs are particularly popular among visitors looking for relaxation and rejuvenation.</p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">What Travelers Can Do and Explore in Dapoli</h5>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Beach Activities</h6>
            <p className="text-gray-600">With its beautiful beaches, Dapoli offers several opportunities for beach activities such as swimming, surfing, and boating. Whether you're traveling with family or friends, the beaches are a great place to relax and enjoy the scenic beauty.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Trekking and Nature Walks</h6>
            <p className="text-gray-600">The hills and forests surrounding Dapoli offer fantastic trekking opportunities. There are several trails that lead to breathtaking viewpoints and secluded spots, perfect for nature walks and adventure.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Historical Exploration</h6>
            <p className="text-gray-600">Dapoli is home to several historical landmarks, including forts, temples, and monuments that reflect the region's rich history and culture. Exploring these sites will provide a deeper understanding of the area's heritage.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Visit Hot Springs</h6>
            <p className="text-gray-600">Take a dip in the therapeutic hot springs of Unhavare to relax your body and mind while enjoying the natural surroundings.</p>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We take cleanliness seriously. All our cabs are regularly cleaned and sanitized to ensure a comfortable and hygienic ride for all passengers.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We respect your time and guarantee on-time pickups and drop-offs, ensuring that you reach your destination as scheduled.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> We offer a complimentary gift for first-time users of our Mumbai to Dapoli cab service to make your first trip extra special.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> All our vehicles are equipped with GPS tracking, allowing you to track your ride in real-time for added convenience and peace of mind.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer support team is available around the clock to assist with bookings, provide information, and ensure you have a smooth and enjoyable experience during your journey.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the distance between Mumbai and Dapoli?</h5>
            <p className="text-gray-700 mt-1">The distance from Mumbai to Dapoli is approximately 180 kilometers, and the journey takes around 4 to 5 hours.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Dapoli cab?</h5>
            <p className="text-gray-700 mt-1">You can book your Mumbai to Dapoli taxi service online via our website, by calling our customer service, or using the Aimcab mobile app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the fare for a one-way Mumbai to Dapoli cab?</h5>
            <p className="text-gray-700 mt-1">The fare depends on the type of vehicle you choose. For instance, Sedans start at ₹11/km.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer airport transfer services from Mumbai to Dapoli?</h5>
            <p className="text-gray-700 mt-1">Yes, we provide Mumbai to Dapoli airport transfers to ensure a smooth transfer from the airport to your destination.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip cab for Mumbai to Dapoli?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your Mumbai to Dapoli journey and back.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, we provide transparent pricing with no hidden charges. You pay for the kilometers traveled, excluding tolls and parking.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best attractions in Dapoli?</h5>
            <p className="text-gray-700 mt-1">Karde Beach, Murud Beach, Dabhol, Suvarnadurg Fort, and Unhavare Hot Springs are must-visit attractions.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer group trips from Mumbai to Dapoli?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Tempo Traveller services for group trips and large families.</p>
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