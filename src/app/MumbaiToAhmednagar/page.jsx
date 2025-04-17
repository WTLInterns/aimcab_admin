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
        <title>Mumbai to Ahmednagar Cab Services | Aim Cab Booking</title>
        <meta name="description" content="Book Mumbai to Ahmednagar cab services with Aim Cab. Enjoy safe, private, one-way taxi rides and airport transfers at budget-friendly prices." />
        <link rel="canonical" href="https://aimcab.com/mumbai-to-ahmednagar-cab-services" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="mumbai to ahmednagar cab Services, cab for mumbai airport to ahmednagar, one way cab from mumbai to ahmednagar, private cabs from mumbai to ahmednagar, ahmednagar to mumbai cab, mumbai to ahmednagar cab" />
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
            Mumbai to Ahmednagar Cab Service
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            The Best Way to Travel in Comfort
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>
      
      {/* Main Title */}
      <h2 className="text-3xl font-bold mt-4 text-center text-[#76453B]">
        Mumbai to Ahmednagar Cab Services – The Best Way to Travel in Comfort
      </h2>

      <BookingForm />
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-50 mt-24 to-indigo-50 p-8 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Aimcab, the leading provider of Mumbai to Ahmednagar cab services. Whether you're traveling for business, leisure, or a family visit, we offer reliable, safe, and affordable taxi services to ensure that your journey is as comfortable and enjoyable as possible. With a range of well-maintained vehicles, experienced drivers, and user-friendly booking options, Aimcab is your go-to solution for a seamless travel experience from Mumbai to Ahmednagar.
            In this detailed guide, we'll cover all aspects of our Mumbai to Ahmednagar cab services, including our service options, booking process, the road trip experience, the best places to visit, pricing details, and more.
            Let's explore how Aimcab can make your Mumbai to Ahmednagar cab experience unforgettable!
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
              If you're planning a one-way trip from Mumbai to Ahmednagar, we offer a one-way cab from Mumbai to Ahmednagar that ensures you get to your destination in comfort and style. There are no extra charges for waiting time, and our flexible service allows you to enjoy a hassle-free journey without worrying about returning to Mumbai immediately.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
            <p className="text-gray-600">
              For those who need to travel to Ahmednagar and return to Mumbai, our roundtrip cab service is the ideal choice. You can book your Mumbai to Ahmednagar cab for a roundtrip, and our driver will ensure you are picked up and dropped off at your preferred locations.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
            <p className="text-gray-600">
              We offer Mumbai airport to Ahmednagar taxi services for travelers who need a reliable ride to or from the airport. Whether you're arriving at Mumbai International Airport or Chhatrapati Shivaji Maharaj International Airport, we can ensure a smooth and timely transfer to Ahmednagar.
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
              Booking your Mumbai to Ahmednagar taxi service is incredibly easy through our website. Just visit Aimcab.com, select your pickup and drop-off points, choose your vehicle type, and confirm your booking.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
            <p className="text-gray-600">
              If you prefer to speak directly to someone, you can always book your Mumbai to Ahmednagar cab by calling our customer service. Our team is available to help you with your booking, answer any questions, and ensure that everything is taken care of.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
            <p className="text-gray-600">
              For those who are always on the go, our mobile app provides a convenient way to book your Mumbai to Ahmednagar cab service. The Aimcab app is available for both Android and iOS devices.
            </p>
          </div>
        </div>
      </section>

      {/* Road Trip Guide */}
      <section className="bg-white p-8 rounded-xl shadow-md mt-8">
        <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Ahmednagar</h5>
            <p className="text-gray-700 mb-4">
              The most common route from Mumbai to Ahmednagar is via the Mumbai Nashik Highway (NH-160). This is the most direct and well-maintained route, and it provides a smooth driving experience. The highway is equipped with clear signs, and the route offers scenic views of the countryside, making the drive enjoyable.
            </p>
            <p className="text-gray-700 font-medium mb-4">
              Mumbai → Thane → Bhiwandi → Nashik → Sinnar → Ahmednagar
            </p>
            <p className="text-gray-700">
              As you leave Mumbai and head towards Ahmednagar, you'll pass through Thane and Bhiwandi, two bustling suburbs before entering the calm surroundings of Nashik and Sinnar.
            </p>
            
            <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
            <p className="text-gray-700">
              The Mumbai to Ahmednagar road trip offers an enjoyable travel experience, with a blend of both urban and rural landscapes:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>Urban to Rural Transition: Starting from Mumbai, you'll pass through busy city streets, highways, and suburbs before heading towards the more peaceful countryside</li>
              <li>Scenic Views: As you approach Nashik and continue towards Ahmednagar, you'll be treated to beautiful views of the Western Ghats and sprawling farmlands</li>
              <li>Smooth Roads: The well-maintained highway ensures that you have a smooth and comfortable ride throughout the trip</li>
              <li>Rest Stops: Along the way, you can make use of the rest stops, which are equipped with basic amenities like food stalls and washrooms</li>
            </ul>
          </div>
          
          <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#76453B]">240 km</div>
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
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Ahmednagar</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Kalaram Sansthan (Nashik)</h6>
                <p className="text-gray-600">This famous temple dedicated to Lord Rama is a popular stop for pilgrims traveling towards Ahmednagar. It's a serene place for worship and reflection.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Pandav Leni (Nashik)</h6>
                <p className="text-gray-600">A group of ancient rock-cut Buddhist caves, ideal for history enthusiasts and those interested in ancient architecture.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Trimbakeshwar Temple (Nashik)</h6>
                <p className="text-gray-600">Another famous stop for travelers, this temple is one of the 12 Jyotirlingas of Lord Shiva and is a significant pilgrimage site.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Ahmednagar</h5>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Ahmednagar Fort</h6>
                <p className="text-gray-600">A historical fort built during the reign of the Nizam Shahi dynasty, offering panoramic views of the surrounding area.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Shirdi</h6>
                <p className="text-gray-600">Located near Ahmednagar, Shirdi is the home of the famous Sai Baba Temple, which attracts millions of devotees every year.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Bhandardara Lake</h6>
                <p className="text-gray-600">A beautiful spot surrounded by lush green hills, perfect for picnics, boating, and relaxation.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Meherabad</h6>
                <p className="text-gray-600">This spiritual center is dedicated to Meher Baba, a prominent spiritual leader. It's a peaceful place to reflect and explore spiritual teachings.</p>
              </div>
            </div>
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
            <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We know the value of your time. Our Mumbai to Ahmednagar taxi service ensures that you are picked up and dropped off on time.</p>
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
            <h5 className="font-bold text-[#76453B]">What is the distance from Mumbai to Ahmednagar?</h5>
            <p className="text-gray-700 mt-1">The distance between Mumbai and Ahmednagar is approximately 240 kilometers, and the journey takes about 4 to 5 hours.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Ahmednagar cab?</h5>
            <p className="text-gray-700 mt-1">You can book your Mumbai to Ahmednagar taxi service online through our website, by calling our customer support, or via the Aimcab mobile app.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What is the cost of a one-way Mumbai to Ahmednagar cab?</h5>
            <p className="text-gray-700 mt-1">The fare depends on the type of vehicle. Sedans start at ₹11/km.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer airport transfer services from Mumbai to Ahmednagar?</h5>
            <p className="text-gray-700 mt-1">Yes, we provide cab for Mumbai airport to Ahmednagar for seamless airport transfers.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Is there any option for a private cab from Mumbai to Ahmednagar?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer private cabs from Mumbai to Ahmednagar to ensure comfort and privacy during your journey.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Can I book a round-trip cab for Mumbai to Ahmednagar?</h5>
            <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your Mumbai to Ahmednagar journey.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
            <p className="text-gray-700 mt-1">No, our pricing is transparent with no hidden charges. You only pay for the distance traveled.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">What are the best attractions in Ahmednagar?</h5>
            <p className="text-gray-700 mt-1">Some must-visit spots in Ahmednagar include Ahmednagar Fort, Shirdi, and Bhandardara Lake.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h5 className="font-bold text-[#76453B]">Do you offer cabs for group trips?</h5>
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