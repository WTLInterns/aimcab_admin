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
        <title>Mumbai to Igatpuri Cab Services | Book Safe Ride Now</title>
        <meta name="description" content="Book Mumbai to Igatpuri cab services with Aim Cab. Affordable one-way & round-trip cabs from Mumbai to Igatpuri with verified drivers. Easy booking." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Igatpuri-Cab-Services" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="mumbai to igatpuri cab services, mumbai to igatpuri cab, cabs from igatpuri to mumbai, igatpuri to mumbai cab, book a cab in mumbai to igatpuri, how to reach igatpuri from mumbai by cab, igatpuri to mumbai cabs online, mumbai to igatpuri cab booking" />
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
            Mumbai to Igatpuri Cab Service
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
      <h2 className="text-3xl font-bold mt-4 text-center text-[#76453B]">
        Mumbai to Igatpuri Cab Services – A Comfortable and Scenic Journey
      </h2> 

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 mt-24 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, your trusted provider for Mumbai to Igatpuri cab services. Whether you're planning a quick getaway, a business trip, or just want to escape the city hustle for some peaceful surroundings, Igatpuri offers a perfect retreat. Known for its scenic beauty, lush green landscapes, and pleasant weather, Igatpuri is a popular hill station near Mumbai. With our Mumbai to Igatpuri taxi service, we aim to provide you with a smooth, comfortable, and hassle-free ride to one of the most serene places in Maharashtra.
            In this guide, we will explore everything you need to know about our Mumbai to Igatpuri cab service, including the various service options available, the booking process, travel routes, attractions, and much more. Let's dive in and make your trip to Igatpuri a memorable one with Aimcab.
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
              Our one-way cab from Mumbai to Igatpuri service is perfect for those who are traveling only in one direction. Whether you are heading to Igatpuri for a quick business trip, a short vacation, or a family outing, our Mumbai to Igatpuri cab service offers a comfortable ride without any unnecessary extra charges. Enjoy a seamless, direct ride with no return trip obligation.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              If you're planning to return to Mumbai after visiting Igatpuri, our round-trip service is ideal for you. Book a cab in Mumbai to Igatpuri, and we'll ensure you're picked up on time, driven to your destination, and then dropped back at your location after your trip. This service provides maximum flexibility, and we ensure the highest levels of comfort during both legs of your journey.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              For those flying into Mumbai International Airport and heading to Igatpuri, we offer a convenient airport pickup service. If you need a cab from Igatpuri to Mumbai, we can arrange a timely ride back to the airport as well. Our Igatpuri to Mumbai cabs online service is perfect for airport transfers, ensuring that you travel comfortably and reach your destination on time.
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
              Booking your Mumbai to Igatpuri taxi service online is quick and simple. Just visit Aimcab.com, enter your pickup and drop-off locations, select your desired vehicle type, and confirm your booking. You'll receive an instant confirmation, along with all the details about your ride, including the estimated pickup time and your driver's contact information.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              For those who prefer a more personalized touch, you can book a cab from Mumbai to Igatpuri by calling our customer service team. Our representatives are available 24/7 to assist you with booking, answer any questions, and confirm your reservation over the phone.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              For those on the go, our Aimcab app makes booking your Mumbai to Igatpuri cab even more convenient. Available for both Android and iOS, the app allows you to book your ride in just a few taps. You can track your driver in real-time, make secure payments, and communicate directly with your driver through the app.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Igatpuri</h5>
            <p className="text-gray-700 mb-4">
              The most common route from Mumbai to Igatpuri is via National Highway 3 (NH3). The route is well-maintained, with a mix of urban and rural landscapes that make for a pleasant and comfortable drive. Here's the breakdown of the journey:
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai → Thane → Kalyan → Kasara → Igatpuri
            </p>
            <p className="text-gray-700">
              The trip starts from Mumbai, and you'll pass through Thane and Kalyan before hitting the scenic stretch of Kasara and finally arriving in Igatpuri. The highway is in great condition and is mostly free from major congestion, especially when traveling outside of peak hours.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              The Mumbai to Igatpuri road trip offers more than just a ride. It's a relaxing experience, with beautiful views along the way. Here's what you can expect:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>City to Countryside Transition: Starting from the urban bustle of Mumbai, the drive gradually takes you through the serene and peaceful countryside. As you leave the city behind, you'll be surrounded by lush greenery and scenic mountains.</li>
              <li>Beautiful Views: As you approach Kasara, you'll start seeing views of the Western Ghats, with hills and valleys that make the journey a visual treat. The monsoon season adds extra charm, with waterfalls and misty hills making the journey feel magical.</li>
              <li>Smooth Ride: The Mumbai to Igatpuri route offers smooth, well-maintained roads, ensuring a comfortable and hassle-free ride. Whether it's a solo trip or with family, the roads are ideal for a relaxed journey.</li>
            </ul>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">120 km</div>
              <div className="text-gray-600 mt-2">Distance</div>
            </div>
            <div className="mx-8 text-gray-400">|</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">2.5-3 hrs</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Igatpuri</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Kailas Leni Caves (Near Nashik)</h6>
                <p className="text-gray-600">If you're interested in history and ancient architecture, you can stop by these caves, which are known for their rock-cut sculptures and intricate carvings.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Saptashrungi</h6>
                <p className="text-gray-600">A popular temple and pilgrimage spot, Saptashrungi is located near Nashik and is dedicated to Durga Mata. It's a beautiful and peaceful stop before you reach Igatpuri.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Igatpuri</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Bhatsa River Valley</h6>
                <p className="text-gray-600">This beautiful valley offers breathtaking views of the surrounding hills and the Bhatsa river. It's a perfect place for nature walks and picnics.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Tringalwadi Fort</h6>
                <p className="text-gray-600">A popular spot for history lovers and trekkers, this fort offers panoramic views of the surrounding hills and valleys.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Kalsubai Peak</h6>
                <p className="text-gray-600">If you love trekking, you can head to Kalsubai, the highest peak in Maharashtra. The trek offers stunning views of the Sahyadri mountains.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Dhamma Giri</h6>
                <p className="text-gray-600">A center for Vipassana meditation, Dhamma Giri is known for its peaceful surroundings and spiritual significance.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Vaitarna Dam</h6>
                <p className="text-gray-600">A scenic dam located near Igatpuri, this spot is perfect for photography, nature walks, and relaxation.</p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">What Travelers Can Do and Explore in Igatpuri</h5>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Trekking and Adventure Sports</h6>
            <p className="text-gray-600">Igatpuri is a popular destination for trekkers. The various hills and peaks around Igatpuri offer plenty of trails for all levels of trekkers.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Relax by the Lakes</h6>
            <p className="text-gray-600">You can spend some time relaxing by the Vaitarna or Bhatsa River and enjoy the tranquility of the region.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Photography and Scenic Views</h6>
            <p className="text-gray-600">Igatpuri offers some of the most beautiful views in Maharashtra, making it a photographer's paradise. From misty hills to lush greenery, the natural beauty is unmatched.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Spiritual Retreats</h6>
            <p className="text-gray-600">Igatpuri is home to many spiritual centers like Dhamma Giri, where you can take part in meditation sessions and find peace and tranquility.</p>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> Our fleet is regularly cleaned and sanitized to ensure a comfortable, hygienic ride.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> Punctuality is key. We guarantee timely pickups and drop-offs for your Mumbai to Igatpuri cab service.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> We offer a complimentary gift to new users who book with us for the first time.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> For your peace of mind, we provide GPS tracking in all our cabs, allowing you to track your ride in real-time.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer support team is available 24/7, ensuring that any questions or concerns are promptly addressed.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the distance between Mumbai and Igatpuri?</h5>
            <p className="text-gray-700 mt-1">The distance from Mumbai to Igatpuri is approximately 120 kilometers, and the journey takes about 2.5 to 3 hours.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Igatpuri cab?</h5>
            <p className="text-gray-700 mt-1">You can book your Mumbai to Igatpuri taxi service online via our website, by calling our customer service, or using the Aimcab app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the fare for a one-way Mumbai to Igatpuri cab?</h5>
            <p className="text-gray-700 mt-1">The fare varies depending on the vehicle type. For example, Sedans start at ₹11/km.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer airport transfer services from Mumbai to Igatpuri?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Mumbai airport to Igatpuri taxi services, ensuring a smooth airport transfer.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip cab for Mumbai to Igatpuri?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your Mumbai to Igatpuri journey and back.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, our pricing is transparent, with no hidden charges. You only pay for the kilometers traveled.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best attractions in Igatpuri?</h5>
            <p className="text-gray-700 mt-1">Some of the must-visit attractions in Igatpuri include Tringalwadi Fort, Kalsubai Peak, and Dhamma Giri.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer group trips from Mumbai to Igatpuri?</h5>
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