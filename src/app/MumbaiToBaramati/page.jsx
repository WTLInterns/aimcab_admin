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
        <title>Mumbai to Baramati Cab Service | Aim Cab Booking</title>
        <meta name="description" content="Book Mumbai to Baramati cab with Aim Cab for a smooth, budget-friendly ride. One-way & round-trip taxi service with expert drivers available." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Baramati-Cab-Service" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="Mumbai To Baramati Cab Services, Mumbai To Baramati Cab, mumbai to Baramati cab booking, cab fare from mumbai to Baramati, mumbai to Baramati cab fare, Cab Services in Baramati" />
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
            Mumbai to Baramati Cab Service
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Your Ultimate Travel Guide
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center">
        Mumbai to Baramati Cab Services – Comfortable & Affordable Travel
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 mt-24 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Reliable Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, your reliable partner for Mumbai to Baramati cab services. Whether you're visiting for business, leisure, or a religious trip, Baramati, located in Maharashtra's Pune district, is a lovely town offering beautiful landscapes, cultural significance, and peaceful surroundings. Our Mumbai to Baramati cab service ensures that your travel experience is as comfortable and seamless as possible, whether you're visiting for a day or planning a longer stay.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            This guide provides an in-depth look into our Mumbai to Baramati cab services, the booking process, the road trip experience, top attractions in Baramati, pricing details, and why Aimcab is the best choice for your next road trip to Baramati.
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
              Our one-way cab service from Mumbai to Baramati is perfect for travelers who need a direct ride to Baramati without the return journey. Whether it's for a pilgrimage, business trip, or personal visit, our one-way service offers the flexibility and ease of a comfortable, direct ride without the need for planning a return trip. We handle everything, so you can focus on your visit.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              For travelers who plan to visit Baramati and return to Mumbai, we offer round-trip cab services. When you choose a round-trip, we'll take care of the entire journey, ensuring that you get to Baramati safely and comfortably, and return to Mumbai at the scheduled time. You can book your Mumbai to Baramati taxi and enjoy a hassle-free experience both ways.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              If you're flying into Mumbai International Airport and need a ride to Baramati, we offer airport pickup and drop services. Whether you're traveling for business, pleasure, or pilgrimage, we ensure that you are picked up on time and transported to Baramati in comfort. Similarly, we also offer Baramati to Mumbai airport taxi services to ensure that your airport transfers are smooth and timely.
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
              Booking your Mumbai to Baramati cab online is fast and easy. Just visit Aimcab.com, enter your pickup and drop-off locations, choose the type of vehicle you prefer, and confirm your booking. You'll receive an instant confirmation with your trip details, including the driver's contact information, estimated pickup time, and other essential information.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              If you prefer a more personalized booking experience, you can book your Mumbai to Baramati cab over the phone. Our customer service team is available 24/7 to assist you with booking, provide pricing details, and help you select the best vehicle for your needs. Whether it's a last-minute trip or a planned journey, our team will ensure your Mumbai to Baramati cab booking is confirmed in no time.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              For on-the-go travelers, the Aimcab mobile app is the best way to book your Mumbai to Baramati taxi service. Available for both Android and iOS, the app allows you to book a ride in just a few clicks, track your cab in real-time, communicate directly with your driver, and make secure payments. It's a convenient option for anyone who prefers managing their bookings from a smartphone.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Baramati</h5>
            <p className="text-gray-700 mb-4">
              The drive from Mumbai to Baramati is an enjoyable and scenic experience. Located approximately 250 kilometers from Mumbai, the journey typically takes around 5 to 6 hours, depending on traffic and road conditions. The most commonly used route is via National Highway 60 (NH60). This route is well-maintained and provides a smooth driving experience.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai → Thane → Kalyan → Shahapur → Igatpuri → Nashik → Baramati
            </p>
            <p className="text-gray-700">
              Your journey starts from Mumbai, traveling through Thane and Kalyan, before moving through the rural areas of Shahapur, Igatpuri, and Nashik. As you approach Baramati, you'll begin to see the beautiful countryside and the peaceful surroundings that make this town so inviting.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              The Mumbai to Baramati road trip is one of those journeys where the experience itself is as rewarding as the destination. Here's what you can expect:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li><strong>From City to Countryside:</strong> The drive begins with the busy streets of Mumbai, but as you move towards Thane, the bustling city slowly transforms into lush green fields and rural landscapes.</li>
              <li><strong>Scenic Views:</strong> As you drive through National Highway 60, you'll pass beautiful views of the Western Ghats, small towns, farms, and fields. The route is especially stunning during the monsoon season.</li>
              <li><strong>Smooth Roads:</strong> The NH60 is well-maintained, offering a smooth, pleasant drive with less traffic as you travel through Igatpuri and Nashik.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              The road trip from Mumbai to Baramati offers a mix of urban convenience and countryside tranquility, making it an enjoyable journey that sets the tone for your time in Baramati.
            </p>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">250 km</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Baramati</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Igatpuri</h6>
                <p className="text-gray-600">Located about 120 kilometers from Mumbai, Igatpuri is a hill station in the Western Ghats. It is known for its stunning views, trekking spots, and Buddhist monasteries.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Nashik</h6>
                <p className="text-gray-600">A significant city for both religious and cultural reasons, Nashik is known for its temples and vineyards. Popular spots include the Trimbakeshwar Temple and Sula Vineyards.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Baramati</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Vithoba Temple</h6>
                <p className="text-gray-600">One of the most important temples in Baramati, the Vithoba Temple is dedicated to Lord Vithoba and is an important pilgrimage site for devotees.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Khamgaon Fort</h6>
                <p className="text-gray-600">An old fort located near Baramati, known for its historical significance and the scenic surroundings.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Yogeshwari Temple</h6>
                <p className="text-gray-600">A beautiful temple dedicated to Goddess Yogeshwari, known for its peaceful environment and religious importance.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Bhilwadi Dam</h6>
                <p className="text-gray-600">Located just outside Baramati, this dam is surrounded by lush greenery and offers a great spot for a relaxing day out.</p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">What Travelers Can Do and Explore in Baramati</h5>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Religious Visits</h6>
            <p className="text-gray-600">Baramati is home to several important temples, making it an ideal destination for religious tourism.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Trekking and Nature Walks</h6>
            <p className="text-gray-600">The surrounding areas offer several opportunities for nature lovers to enjoy peaceful treks and walks.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Agricultural Tours</h6>
            <p className="text-gray-600">Baramati is known for its rich agricultural heritage. Visitors can explore the rural landscapes and farming culture.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Historical Exploration</h6>
            <p className="text-gray-600">Explore historical sites like Khamgaon Fort and learn about the region's past.</p>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We ensure all our cabs are regularly cleaned and maintained to provide you with a hygienic and comfortable ride.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We value your time, which is why we guarantee timely pickups and drops for your Mumbai to Baramati taxi service.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> We appreciate new customers, and to make your first ride with us even more special, we offer a complimentary gift for new users.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> For your safety and peace of mind, all our vehicles come equipped with GPS tracking, allowing you to track your ride in real-time.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer service team is available around the clock to assist with bookings, queries, or any concerns you may have during your journey.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the distance between Mumbai and Baramati?</h5>
            <p className="text-gray-700 mt-1">The distance from Mumbai to Baramati is approximately 250 kilometers, and the journey usually takes about 5 to 6 hours.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Baramati cab?</h5>
            <p className="text-gray-700 mt-1">You can book your Mumbai to Baramati taxi service online via our website, by calling our customer service, or using the Aimcab app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the fare for a one-way Mumbai to Baramati cab?</h5>
            <p className="text-gray-700 mt-1">The fare depends on the type of vehicle you choose. For instance, Sedans start at ₹11/km.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer airport transfer services from Mumbai to Baramati?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Mumbai to Baramati airport transfers, ensuring timely pickups and comfortable transfers.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip cab for Mumbai to Baramati?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your Mumbai to Baramati journey and back.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, we provide transparent pricing with no hidden charges.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best attractions in Baramati?</h5>
            <p className="text-gray-700 mt-1">Vithoba Temple, Khamgaon Fort, Yogeshwari Temple, and Bhilwadi Dam are some of the top attractions in Baramati.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer group trips from Mumbai to Baramati?</h5>
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