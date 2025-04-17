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
      <Navbar/>
      <Head>
        <title>Mumbai to Alibaug Cab Services | Fast & Affordable Ride</title>
        <meta name="description" content="Book Mumbai to Alibaug cab services with Aim Cab. Enjoy reliable one-way & round-trip taxis at the best fare, with professional drivers." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Alibaug-Cab-Services" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="mumbai to alibaug cab services, mumbai to alibaug cab, alibaug to mumbai cab, cab from alibaug to mumbai, mumbai to alibaug cab fare, mumbai to alibaug cab service, book cab from mumbai to alibaug" />
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
            Mumbai to Alibaug Cab Service
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Your Gateway to a Beautiful Coastal Escape
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center text-[#76453B]">
        Mumbai to Alibaug Cab Services – Your Gateway to a Beautiful Coastal Escape
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 mt-24 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, your reliable and trusted provider of Mumbai to Alibaug cab services. Whether you're planning a relaxing weekend getaway, a corporate retreat, or a family outing, we ensure that your journey to Alibaug is comfortable, affordable, and convenient. With a fleet of well-maintained vehicles, professional drivers, and a commitment to punctuality, Aimcab is your perfect choice for a stress-free journey.
            In this detailed guide, we'll walk you through everything you need to know about our Mumbai to Alibaug cab services. From our diverse service options to booking methods, travel routes, and must-visit places in Alibaug, we've got you covered.
            Let's begin exploring how Aimcab can make your Mumbai to Alibaug cab experience one to remember!
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
              If you're looking for a one-way ride from Mumbai to Alibaug, our service offers a convenient and affordable option. You can enjoy a smooth and relaxing ride to Alibaug without worrying about the return journey. With no additional charges for waiting time or detours, our Mumbai to Alibaug cab service ensures that you have a pleasant and efficient journey to your destination.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              If your trip to Alibaug is a part of a longer plan and you intend to return to Mumbai, we offer round-trip cab services. This service is perfect for those who wish to enjoy a stress-free, return journey with the same comfort and convenience. Our drivers ensure that your Mumbai to Alibaug cab and return trip are smooth and timely, giving you the flexibility to explore Alibaug at your own pace.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              Need a ride to Mumbai International Airport or from the airport to Alibaug? We offer Mumbai airport to Alibaug taxi services to ensure a seamless transfer. Whether you are arriving or departing, our cab from Alibaug to Mumbai will be there on time, helping you avoid the stress of figuring out local transportation. We also provide cabs for larger groups or families traveling from Alibaug to Mumbai Airport, ensuring there's enough space for everyone and their luggage.
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
              Our website offers a user-friendly interface to book your Mumbai to Alibaug taxi service. Simply visit Aimcab.com, fill in your journey details, such as your pickup and drop-off locations, vehicle preference, and travel date, and confirm your booking. You'll receive instant confirmation along with all the details about your ride, including the driver's contact information and estimated pickup time.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              If you prefer booking over the phone, you can call our customer service team and they'll help you book your cab from Mumbai to Alibaug. Our representatives are available to assist with any queries, provide pricing information, and confirm your booking. We aim to make the process as smooth and straightforward as possible.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              For those always on the go, the Aimcab mobile app makes booking your Mumbai to Alibaug cab even more convenient. Available for both Android and iOS, the app allows you to quickly reserve a ride, track your driver in real-time, make secure payments, and communicate directly with the driver, all from the convenience of your smartphone.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Alibaug</h5>
            <p className="text-gray-700 mb-4">
              The most common route for traveling from Mumbai to Alibaug is via Mumbai-Goa Highway (NH 66). This route is straightforward and well-paved, making it the most efficient way to travel between these two destinations.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai → Panvel → Pen → Alibaug
            </p>
            <p className="text-gray-700">
              As you leave the bustling city of Mumbai, you'll pass through Panvel, which is one of the largest towns in the Navi Mumbai area. From there, the drive becomes more scenic as you head towards Pen, a small town near Alibaug, before reaching your destination. The roads are smooth, and you can expect a peaceful, relaxed drive.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              The Mumbai to Alibaug journey is a pleasant one, especially if you're traveling by car. Here's what you can expect during the trip:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>Urban to Coastal Transition: As you leave Mumbai, you'll pass through urban areas with busy streets, markets, and traffic. But soon enough, the atmosphere starts changing as you approach Alibaug, where you can enjoy the coastal environment, lush greenery, and quieter surroundings.</li>
              <li>Scenic Views: Along the route, you'll encounter picturesque views of the Western Ghats on one side and the Arabian Sea on the other. The coastal beauty and rural countryside make the trip a memorable one.</li>
              <li>Smooth Roads: The roads from Mumbai to Alibaug are well-maintained, ensuring a smooth and comfortable ride. Whether you're driving during the day or evening, the roads are equipped with clear signage and are mostly free of potholes.</li>
              <li>The trip is relaxing, offering a perfect opportunity to unwind before reaching Alibaug and indulging in its beauty.</li>
            </ul>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">95 km</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Alibaug</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Mandwa Beach</h6>
                <p className="text-gray-600">A popular beach located just before Alibaug, where you can take a quick break, enjoy the view, or relax in the beach's tranquil atmosphere.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Kihim Beach</h6>
                <p className="text-gray-600">Another beautiful beach, offering great spots for photography, bird watching, and enjoying a calm environment.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Alibaug</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Alibaug Beach</h6>
                <p className="text-gray-600">Famous for its relaxed vibe, water sports activities, and views of the Kolaba Fort, this is a perfect spot for a day out by the sea.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Kolaba Fort</h6>
                <p className="text-gray-600">Built in the 17th century, Kolaba Fort is located just off the Alibaug beach. Accessible by foot during low tide, it offers fascinating history and beautiful coastal views.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Kashid Beach</h6>
                <p className="text-gray-600">Known for its pristine white sand and clear waters, Kashid Beach is ideal for a peaceful retreat away from the crowds.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Nagaon Beach</h6>
                <p className="text-gray-600">A popular beach for water sports and a peaceful retreat, Nagaon Beach offers visitors a chance to enjoy the Arabian Sea's beautiful coastline.</p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">What Travelers Can Do and Explore in Alibaug</h5>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Beach Activities</h6>
            <p className="text-gray-600">Alibaug offers several beaches where you can indulge in water sports like parasailing, jet-skiing, and more.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Sightseeing</h6>
            <p className="text-gray-600">You can visit historical forts, temples, and serene beaches while exploring the area.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Camping</h6>
            <p className="text-gray-600">Many tourists enjoy camping by the beaches in Alibaug for a night under the stars.</p>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> Our fleet is regularly cleaned and maintained to ensure that you travel in a hygienic, comfortable, and safe environment.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We value your time, which is why we guarantee timely pickups and drops. Our drivers ensure that you never have to worry about delays.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> To make your first ride with Aimcab extra special, we offer a complimentary gift for new users.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> For added security and peace of mind, all our vehicles are equipped with GPS tracking, allowing you to track your ride in real-time.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer service team is available 24/7 to assist you with bookings, queries, and support.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the distance from Mumbai to Alibaug?</h5>
            <p className="text-gray-700 mt-1">The distance from Mumbai to Alibaug is approximately 95 kilometers, and the journey typically takes about 2 to 3 hours.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Alibaug cab?</h5>
            <p className="text-gray-700 mt-1">You can book your Mumbai to Alibaug taxi service online via our website, by calling our customer service, or through the Aimcab app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the fare for a one-way Mumbai to Alibaug cab?</h5>
            <p className="text-gray-700 mt-1">The fare depends on the type of vehicle you choose. Sedans start at ₹11/km.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer airport transfer services from Mumbai to Alibaug?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Mumbai airport to Alibaug taxi services, ensuring a timely and comfortable airport transfer.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip cab for Mumbai to Alibaug?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your Mumbai to Alibaug journey and back.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, our fares are transparent, and there are no hidden charges. You only pay for the kilometers traveled, excluding tolls and parking fees.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best attractions in Alibaug?</h5>
            <p className="text-gray-700 mt-1">Key attractions include Alibaug Beach, Kolaba Fort, and Kashid Beach.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer cabs for group trips?</h5>
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