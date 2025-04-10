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
        <title>Mumbai to Ganpatipule Cab | Affordable Taxi Ride</title>
        <meta name="description" content="Book Mumbai to Ganpatipule cab with Aim Cab for a safe, affordable & scenic journey. One-way or round-trip taxi booking at the best cab fare." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Ganpatipule-Cab-Service" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="mumbai to ganpatipule cab, cab from mumbai to ganpatipule by road, mumbai to ganpatipule cab booking, mumbai to ganpatipule cab fare, cab fare from mumbai to ganpatipule, mumbai to ganpatipule cab services, cab services in ganpatipule" />
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
            Mumbai to Ganpatipule Cab Services
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            A Relaxing Journey Awaits You
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center">
        Mumbai to Ganpatipule Cab Services: A Relaxing Journey Awaits You
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, the leading provider of Mumbai to Ganpatipule cab services. If you're planning a trip to Ganpatipule, known for its beautiful beaches, serene landscapes, and the famous Ganapati Temple, we have got you covered with the best cab services for a smooth and comfortable journey. Our Mumbai to Ganpatipule cab service ensures that your travel experience is as enjoyable as the destination itself.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            This detailed guide will walk you through our Mumbai to Ganpatipule cab services, booking options, travel tips, road trip experiences, top tourist attractions, and the pricing structure for our services. Whether you are visiting for a spiritual journey or just to unwind at the beach, Aimcab is your best choice for a relaxing and stress-free ride.
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
              Our one-way cab service from Mumbai to Ganpatipule is perfect for those who are traveling to Ganpatipule without any plans for a return trip. If you're going for a short stay, business visit, or pilgrimage, our one-way service provides a hassle-free journey. Enjoy a comfortable ride with our experienced drivers, who will take you directly to your destination.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              For those planning to visit Ganpatipule and return to Mumbai, our round-trip cab service is an ideal choice. Whether you're on a holiday or a business trip, we ensure that your travel to and from Ganpatipule is smooth, timely, and comfortable. You can rely on us for punctual pickups and drop-offs, making your trip convenient and stress-free.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              If you're flying into Mumbai International Airport and need a ride to Ganpatipule, we offer airport pickup and drop services. We understand that airport transfers need to be timely and efficient, so our professional drivers will be waiting for you at the airport to take you directly to Ganpatipule. Similarly, we also offer Ganpatipule to Mumbai airport taxi services, ensuring that your return journey is as smooth and comfortable as the trip itself.
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
              The easiest way to book your Mumbai to Ganpatipule taxi is through our website, Aimcab.com. Just enter your pickup location, destination, and the type of vehicle you prefer, and you'll receive instant booking confirmation. Our website also offers the flexibility to choose between one-way or round-trip services.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              For a more personalized experience, you can book your Mumbai to Ganpatipule cab over the phone. Our customer service team is available 24/7 to assist you with your bookings, provide information about the available vehicles, and confirm your ride. We'll also answer any questions you may have about your Mumbai to Ganpatipule cab fare.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              The Aimcab mobile app offers a convenient way to book your Mumbai to Ganpatipule cab on the go. Available for both Android and iOS, the app allows you to quickly book your ride, track your cab in real-time, make secure payments, and communicate directly with your driver. The app is ideal for travelers who prefer managing their bookings directly from their smartphones.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Ganpatipule</h5>
            <p className="text-gray-700 mb-4">
              The Mumbai to Ganpatipule road trip is a scenic and beautiful journey, offering breathtaking views of the Western Ghats and coastal areas. The distance from Mumbai to Ganpatipule is approximately 330 kilometers, and the trip typically takes around 7 to 8 hours depending on traffic and road conditions.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai → Panvel → Khopoli → Lonavala → Alibaug → Ganpatipule
            </p>
            <p className="text-gray-700">
              From Mumbai, you'll head towards Panvel, then take the Mumbai-Goa Highway (NH66) via Khopoli and Lonavala. As you continue towards Alibaug, the coastal beauty starts to unfold, and finally, you'll reach Ganpatipule. This route offers some of the best views in Maharashtra, including coastal landscapes and the lush greenery of the Western Ghats.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              The Mumbai to Ganpatipule road trip offers a refreshing and scenic experience. Here's what you can expect during your journey:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li><strong>From City to Serenity:</strong> As you leave Mumbai, the bustling cityscape gradually gives way to the tranquility of nature. You'll pass through small towns, picturesque beaches, and hilly landscapes, setting the tone for a peaceful and relaxing trip.</li>
              <li><strong>Stunning Views:</strong> The drive along the Mumbai-Goa Highway offers beautiful views of the Arabian Sea, lush greenery, and the rolling hills of the Western Ghats. The coastal areas provide fantastic opportunities for photography, and you'll enjoy the pleasant weather along the way.</li>
              <li><strong>Smooth Roads:</strong> The Mumbai-Goa Highway (NH66) is well-maintained, making for a smooth, comfortable drive. There are several restaurants and pit stops along the way where you can take breaks and enjoy local snacks.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              The road trip to Ganpatipule is not just a journey to a destination, but a scenic experience that enhances the overall travel experience.
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Ganpatipule</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Alibaug</h6>
                <p className="text-gray-600">Known for its pristine beaches like Alibaug Beach, Kihim Beach, and Nagaon Beach, Alibaug is a popular destination for a short stopover. The town also has historical forts like Kolaba Fort and scenic views of the sea.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Khopoli</h6>
                <p className="text-gray-600">Located near Lonavala, Khopoli offers beautiful landscapes, historical temples like Pali Ganapati Temple, and serene lakes.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lonavala</h6>
                <p className="text-gray-600">A famous hill station, Lonavala is known for its picturesque views, forts, and lakes. Bhushi Dam and Tiger's Point are popular tourist spots here.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Ganpatipule</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Ganapati Temple</h6>
                <p className="text-gray-600">The Ganapati Temple is the main attraction in Ganpatipule. Dedicated to Lord Ganesha, this ancient temple is famous for its Swayambhu Ganesha idol, which is considered to be self-originated.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Ganpatipule Beach</h6>
                <p className="text-gray-600">The beach in Ganpatipule is known for its clean sandy shores and clear waters. It's a peaceful spot to relax, swim, or indulge in water sports.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Jaigad Fort</h6>
                <p className="text-gray-600">Located around 20 kilometers from Ganpatipule, Jaigad Fort is a historic fort offering stunning views of the Arabian Sea and the surrounding area.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Malgund Beach</h6>
                <p className="text-gray-600">Malgund Beach is a quieter alternative to Ganpatipule Beach, known for its peaceful atmosphere and natural beauty.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Aare Ware Beach</h6>
                <p className="text-gray-600">Another beautiful beach near Ganpatipule, Aare Ware Beach is perfect for those seeking solitude and tranquility amidst nature.</p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">What Travelers Can Do and Explore in Ganpatipule</h5>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Relax on the Beaches</h6>
            <p className="text-gray-600">Spend your days relaxing on the pristine beaches of Ganpatipule, where you can enjoy water activities, sunbathe, or simply take in the beautiful surroundings.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Explore Temples and Forts</h6>
            <p className="text-gray-600">Ganpatipule is home to the famous Ganapati Temple and Jaigad Fort, making it a perfect destination for history and culture enthusiasts.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Trekking and Nature Walks</h6>
            <p className="text-gray-600">Explore the lush landscapes surrounding Ganpatipule by taking a trek to nearby hills or walking along scenic trails.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Water Sports</h6>
            <p className="text-gray-600">If you love adventure, Ganpatipule offers several opportunities for water sports like jet skiing, parasailing, and banana boat rides.</p>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We ensure that all our vehicles are clean, hygienic, and well-maintained to provide a comfortable travel experience.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> Punctuality is our priority. We guarantee on-time pickups and drops, ensuring you reach your destination as scheduled.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> We offer a complimentary gift for new users to make your first Mumbai to Ganpatipule cab service even more special.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> Our cabs are equipped with GPS tracking, allowing you to track your ride in real-time and providing peace of mind during your journey.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer service team is available 24/7 to assist with bookings, inquiries, and any other needs you may have during your trip.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the distance from Mumbai to Ganpatipule?</h5>
            <p className="text-gray-700 mt-1">The distance is approximately 330 kilometers, and the journey typically takes 7 to 8 hours.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Ganpatipule cab?</h5>
            <p className="text-gray-700 mt-1">You can book your Mumbai to Ganpatipule taxi via our website, by calling our customer service, or using the Aimcab app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the fare for a one-way Mumbai to Ganpatipule cab?</h5>
            <p className="text-gray-700 mt-1">Sedans start at ₹11/km, and prices vary depending on the vehicle type.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer airport transfer services from Mumbai to Ganpatipule?</h5>
            <p className="text-gray-700 mt-1">Yes, we provide airport transfers to and from Mumbai to Ganpatipule.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip cab for Mumbai to Ganpatipule?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your Mumbai to Ganpatipule journey.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, we provide transparent pricing with no hidden charges.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best attractions in Ganpatipule?</h5>
            <p className="text-gray-700 mt-1">Ganpatipule Beach, Ganapati Temple, Jaigad Fort, and Malgund Beach are top attractions.</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer group trips from Mumbai to Ganpatipule?</h5>
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