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
        <title>Mumbai to Islampur Cab | Fast & Safe Taxi Booking</title>
        <meta name="description" content="Book Mumbai to Islampur cab with Aim Cab for safe, affordable travel. One-way & round-trip cab services with professional drivers at best fares." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Islampur-Cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="Mumbai To Islampur Cab, Mumbai To Islampur Cab Services, mumbai to Islampur cab booking, Mumbai To Islampur Cab Services, cab fare from mumbai to Islampur, mumbai to Islampur cab fare, Cab Service in islampur" />
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
            Mumbai to Islampur Cab Service
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
        Mumbai to Islampur Cab Services – Comfortable & Affordable Travel
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 mt-24 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, your trusted provider of Mumbai to Islampur cab services. Whether you're planning a business trip, family visit, or personal journey, Islampur is an important town in Maharashtra's Sangli district known for its agricultural significance and cultural heritage. Located about 375 kilometers from Mumbai, Islampur offers a peaceful retreat from the city's hustle and bustle.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            At Aimcab, we provide a seamless and comfortable journey for all our customers traveling from Mumbai to Islampur. This guide will walk you through all the essential details, including the cab booking process, travel experience, cab fares, and tourist attractions in Islampur.
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
              Our one-way cab service from Mumbai to Islampur is ideal for those who are traveling to Islampur and do not need a return trip. This is a great option for people who are traveling for business or a short visit. Our Mumbai to Islampur cab ensures a direct, comfortable, and convenient journey, so you can relax and enjoy the views on the way.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              For those planning to return to Mumbai after their visit to Islampur, we offer an easy round-trip cab service. Our round-trip service allows you to enjoy both your onward and return journeys with ease. You can book your Mumbai to Islampur cab and have the same vehicle and driver take you back to Mumbai at your convenience.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              If you're flying into Mumbai International Airport and need a reliable ride to Islampur, our airport pickup and drop services are the perfect solution. We ensure a timely pickup, taking you from Mumbai Airport to Islampur without any hassle. Additionally, we offer Islampur to Mumbai airport taxi services for a smooth and timely transfer back to the airport at the end of your trip.
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
              Booking your Mumbai to Islampur cab online is the simplest and quickest way. Just visit our website, Aimcab.com, and fill in the details, such as pickup location, destination, and vehicle type. Once confirmed, you'll receive an instant booking confirmation with your cab details, including the driver's contact information and estimated pickup time.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              For a more personalized experience, you can book your Mumbai to Islampur taxi over the phone. Our customer service team is available 24/7 to assist you with your Mumbai to Islampur cab booking. You can inquire about available vehicles, pricing, and travel details, and our team will confirm the booking for you in no time.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              The Aimcab mobile app makes booking your Mumbai to Islampur taxi service even more convenient. The app is available for both Android and iOS, allowing you to book, track, and manage your rides effortlessly. You can track your driver in real-time, communicate directly with them, and make secure payments through the app.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Islampur</h5>
            <p className="text-gray-700 mb-4">
              The journey from Mumbai to Islampur is a scenic road trip through Maharashtra's diverse landscapes. The distance between Mumbai and Islampur is approximately 375 kilometers, and the trip typically takes around 7 to 8 hours, depending on traffic conditions. Here's everything you need to know about the route and travel experience.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai → Pune → Satara → Islampur
            </p>
            <p className="text-gray-700">
              After departing from Mumbai, the route takes you through Pune and Satara, offering scenic views of the Western Ghats. The highway is well-maintained, ensuring a comfortable journey. As you approach Islampur, you'll pass through beautiful rural landscapes and agricultural fields that characterize this region of Maharashtra.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              The Mumbai to Islampur road trip offers a mix of urban and rural landscapes, providing a glimpse into Maharashtra's diverse geography. Here's what you can expect during your journey:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li><strong>Smooth Highways:</strong> The journey begins on the Mumbai-Pune Expressway, one of India's best highways, ensuring a comfortable start to your trip.</li>
              <li><strong>Changing Landscapes:</strong> As you leave the urban areas behind, you'll transition through industrial zones, then into the lush Western Ghats, and finally into the agricultural heartland around Islampur.</li>
              <li><strong>Rest Stops:</strong> There are several good restaurants and rest areas along the route, particularly near Pune and Satara, where you can take breaks and enjoy local Maharashtrian cuisine.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              The Mumbai to Islampur road trip is ideal for travelers who enjoy watching the changing landscapes of Maharashtra unfold before them.
            </p>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">375 km</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Islampur</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lonavala</h6>
                <p className="text-gray-600">A popular hill station between Mumbai and Pune, known for its scenic beauty, waterfalls during monsoon, and attractions like Bushy Dam and Tiger Point.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Pune</h6>
                <p className="text-gray-600">Maharashtra's cultural capital offers historical sites like Shaniwar Wada, Aga Khan Palace, and modern attractions like Koregaon Park.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Satara</h6>
                <p className="text-gray-600">Famous for its Kaas Plateau (Valley of Flowers), Sajjangad Fort, and Thoseghar Waterfalls, Satara makes for a great midway stop.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Islampur</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Islampur Fort</h6>
                <p className="text-gray-600">A historic fort that offers panoramic views of the surrounding area and a glimpse into the region's past.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Chandoli National Park</h6>
                <p className="text-gray-600">Located about 50km from Islampur, this wildlife sanctuary is home to tigers, leopards, and various bird species.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Babhulgaon</h6>
                <p className="text-gray-600">A peaceful village near Islampur where you can experience rural Maharashtra's authentic culture and lifestyle.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Local Markets</h6>
                <p className="text-gray-600">Islampur's markets offer fresh agricultural produce and traditional handicrafts that make for excellent souvenirs.</p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">What Travelers Can Do and Explore in Islampur</h5>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Explore Historical Sites</h6>
            <p className="text-gray-600">Visit Islampur Fort and other historical landmarks to learn about the region's rich history.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Wildlife Watching</h6>
            <p className="text-gray-600">Take a day trip to Chandoli National Park for wildlife spotting and nature photography.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Experience Rural Life</h6>
            <p className="text-gray-600">Visit nearby villages to experience authentic rural Maharashtrian culture and traditions.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Local Cuisine</h6>
            <p className="text-gray-600">Sample traditional Maharashtrian dishes at local eateries and restaurants.</p>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> To make your first trip even more special, we offer a complimentary gift for new users booking their Mumbai to Islampur cab with us.</p>
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
            <h5 className="font-bold text-[#76453B]">What is the distance from Mumbai to Islampur?</h5>
            <p className="text-gray-700 mt-1">The distance from Mumbai to Islampur is approximately 375 kilometers, and the journey typically takes around 7 to 8 hours.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Islampur cab?</h5>
            <p className="text-gray-700 mt-1">You can book your Mumbai to Islampur taxi online via our website, by calling our customer service, or through the Aimcab mobile app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the fare for a one-way Mumbai to Islampur cab?</h5>
            <p className="text-gray-700 mt-1">Sedans start at ₹11/km, and the fare varies depending on the type of vehicle you select.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer airport transfer services from Mumbai to Islampur?</h5>
            <p className="text-gray-700 mt-1">Yes, we provide Mumbai to Islampur airport transfers, ensuring that you are picked up promptly from Mumbai International Airport and dropped off at your destination.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip cab for Mumbai to Islampur?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your Mumbai to Islampur journey and return.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, our pricing is transparent with no hidden charges. You only pay for the kilometers traveled.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best attractions in Islampur?</h5>
            <p className="text-gray-700 mt-1">Islampur Fort, Chandoli National Park, and local markets are must-visit spots.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer group trips from Mumbai to Islampur?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Tempo Traveller services for group trips and family outings.</p>
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