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
        <title>Solapur to Mumbai Cab Services | Safe & Fast Ride</title>
        <meta name="description" content="Book Solapur to Mumbai cab services with Aim Cab for a safe, affordable & comfortable journey. Enjoy one-way & round-trip taxi at best fares." />
        <link rel="canonical" href="https://aimcab.com/Solapur-to-Mumbai-Cab-Services" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="solapur to mumbai cab services, solapur to mumbai cab, book cab for trip mumbai to solapur, mumbai to solapur cabs, trip cab mumbai to solapur" />
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
            Solapur to Mumbai Cab Service
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
        Solapur to Mumbai Cab Services – Your Ultimate Travel Experience
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, your go-to provider for Solapur to Mumbai cab services. Whether you're traveling for business, leisure, or any other reason, we ensure that your journey from Solapur to Mumbai is smooth, comfortable, and convenient. Our experienced drivers, well-maintained fleet, and transparent pricing make us the perfect choice for your travel needs. In this guide, we'll walk you through all the essential details about our Solapur to Mumbai cab services, including service options, booking methods, road trip guides, pricing details, and more.
            Let's explore how Aimcab can make your Solapur to Mumbai cab journey one of the best travel experiences!
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
              If you're looking for a one-way trip from Solapur to Mumbai, we provide a flexible and affordable option. Our Solapur to Mumbai cab service ensures that you enjoy a comfortable and hassle-free journey without the need to worry about the return journey. Our private cabs from Solapur to Mumbai are ideal for those who need a direct, no-fuss ride to their destination.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              For travelers who plan to return to Solapur after visiting Mumbai, we offer roundtrip services. You can book a trip cab from Mumbai to Solapur, and we will ensure that your return journey is just as seamless as your initial trip. This option is perfect for those who need flexibility and convenience while traveling.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              If you need to travel to or from Mumbai Airport, we offer airport pickup and drop services for passengers coming from Solapur. Whether you're flying in or out of Mumbai, our Solapur to Mumbai airport taxi service ensures a smooth and timely transfer. Our drivers are well-versed with airport routes and traffic conditions, so you can rest assured you will reach your destination on time.
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
              Booking a Solapur to Mumbai taxi service online is the easiest way to get started. Simply visit our website, enter your pickup and drop-off locations, select your vehicle type, and confirm your booking. You'll receive instant confirmation and all the details about your ride, including your driver's contact information and estimated pickup time.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              For those who prefer a more personal touch, you can book your Solapur to Mumbai cab by calling our customer support team. Our friendly representatives will guide you through the booking process, assist with any questions, and confirm your booking right over the phone.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              For tech-savvy travelers, the Aimcab mobile app makes booking a Solapur to Mumbai taxi incredibly easy. The app is available on both Android and iOS devices, allowing you to book your ride with just a few taps. The app also offers real-time tracking of your cab, secure payment options, and direct communication with your driver.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Solapur to Mumbai</h5>
            <p className="text-gray-700 mb-4">
              The most commonly used route for traveling from Solapur to Mumbai is via National Highway 65 (NH65) and Mumbai Pune Expressway. This route is well-maintained, offering a smooth and enjoyable ride with several rest stops along the way.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Solapur → Pune → Lonavala → Mumbai
            </p>
            <p className="text-gray-700">
              Starting from Solapur, you'll head towards Pune, passing through small towns and open fields. After Pune, you'll proceed towards Lonavala, a picturesque hill station, before finally arriving in Mumbai. The road is well-paved, and you'll encounter both rural and urban landscapes during the trip.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              The Solapur to Mumbai road trip offers a mix of scenic views and smooth highways. Here's what you can expect on your journey:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>Countryside Views: As you leave Solapur and head towards Pune, the route offers plenty of open fields, small farms, and rural landscapes.</li>
              <li>Lush Greenery in Pune: Once you enter Pune, the environment changes as you move through green hills and valleys. This is the start of the Western Ghats, which adds to the beauty of the journey.</li>
              <li>Mumbai's Bustling Streets: As you approach Mumbai, the landscape transforms into a bustling metropolis with heavy traffic and towering skyscrapers, creating a stark contrast to the peaceful countryside of Solapur.</li>
              <li>Along the way, you can take short breaks to relax and enjoy the scenic spots.</li>
            </ul>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Solapur and Mumbai</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Kailas Leni Caves (Solapur)</h6>
                <p className="text-gray-600">A historical site located near Solapur, these ancient caves are well-known for their sculptures and intricate designs.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Lonavala</h6>
                <p className="text-gray-600">A picturesque hill station located between Mumbai and Pune, known for its lush green landscapes, scenic views, and attractions like Bushy Dam and Tiger's Leap.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Khandala</h6>
                <p className="text-gray-600">A small town near Lonavala, famous for its beautiful hills, lakes, and valleys.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Mumbai</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Gateway of India</h6>
                <p className="text-gray-600">An iconic landmark that symbolizes the history of Mumbai, it's one of the must-visit spots for tourists.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Marine Drive</h6>
                <p className="text-gray-600">A scenic promenade offering breathtaking views of the Arabian Sea, perfect for an evening stroll.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Colaba Causeway</h6>
                <p className="text-gray-600">A popular shopping destination in Mumbai, offering a variety of local and international shops.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Chhatrapati Shivaji Maharaj Terminus</h6>
                <p className="text-gray-600">A UNESCO World Heritage Site and one of the most stunning examples of Victorian Gothic architecture in Mumbai.</p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">What Travelers Can Do and Explore in Mumbai</h5>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Beach Time</h6>
            <p className="text-gray-600">Visit popular beaches such as Juhu Beach and Chowpatty for a relaxing day by the sea.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Shopping</h6>
            <p className="text-gray-600">Mumbai is a shopper's paradise, with street markets, malls, and boutiques offering a variety of goods.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h6 className="font-bold text-[#76453B]">Food Tour</h6>
            <p className="text-gray-600">Enjoy the diverse cuisine of Mumbai, from local street food like Pani Puri to high-end dining experiences.</p>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We ensure that all our cabs are regularly cleaned and sanitized, providing a comfortable and hygienic travel experience.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We know the value of your time. Our Solapur to Mumbai taxi service ensures that you are picked up and dropped off on time.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> We offer a complimentary gift for new customers, making their first ride with Aimcab special and memorable.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> For your peace of mind, all of our vehicles come equipped with GPS tracking, allowing you to track your journey in real-time.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer support team is available around the clock, ensuring that we're always available to assist you with bookings or any concerns.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the distance between Solapur and Mumbai?</h5>
            <p className="text-gray-700 mt-1">The distance between Solapur and Mumbai is approximately 250 kilometers, and the journey typically takes around 5 to 6 hours by car.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Solapur to Mumbai cab with Aimcab?</h5>
            <p className="text-gray-700 mt-1">You can book your Solapur to Mumbai taxi service online via our website, by calling our customer service, or using the Aimcab mobile app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the fare for a one-way Solapur to Mumbai cab?</h5>
            <p className="text-gray-700 mt-1">The fare depends on the type of vehicle you choose. For example, Sedans start at ₹11/km.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer airport transfer services from Solapur to Mumbai?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer cab for Mumbai airport to Solapur and Solapur to Mumbai airport taxi services.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip taxi from Mumbai to Solapur?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your Solapur to Mumbai journey.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, our fares are fully transparent. The price you see is the price you pay, excluding tolls and parking fees.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best attractions in Mumbai?</h5>
            <p className="text-gray-700 mt-1">Gateway of India, Marine Drive, Chhatrapati Shivaji Maharaj Terminus, and Juhu Beach are some of the best attractions in Mumbai.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer group trips from Solapur to Mumbai?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer Tempo Traveller services for group trips.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold mb-6">🏢 About Aimcab</h4>
        
        <div className="text-white">
          <p className="mb-4">
            Aimcab has been a trusted name in the cab service industry since 2001. With a fleet of over 50 personal cabs and a network of 500+ registered cabs across India, we are known for our reliable, safe, and comfortable intercity services.
          </p>
          <p>
            We have completed over 3,000 outstation trips and served more than 200,000 happy customers. Our commitment to punctuality and exceptional customer service has earned us a reputation for excellence.
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