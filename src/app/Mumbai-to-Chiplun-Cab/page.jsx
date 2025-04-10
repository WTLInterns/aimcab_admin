"use client"
import React from 'react'
import Head from 'next/head'
import { gsap } from 'gsap';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import Navbar from '../../container/component/Navbar';
import Footer from '../../container/component/Footer';

const Page = () => {
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
    <>
      <Head>
        <title>Mumbai to Chiplun Cab | Safe & Affordable Taxi</title>
        <meta name="description" content="Book a Mumbai to Chiplun cab with Aim Cab for a comfortable, affordable, and on-time ride. Enjoy hassle-free taxi booking with trusted drivers." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Chiplun-Cab-Service" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="Mumbai To chiplun Cab, chiplun to mumbai cab, cab from chiplun to mumbai, mumbai to chiplun cab booking, Mumbai To chiplun Cab Services, cab fare from mumbai to chiplun, mumbai to chiplun cab fare, Cab Services in chiplun" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div>
        <Navbar/>
        
        {/* Header */}
        <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-yellow-500 py-12 md:py-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Mumbai to Chiplun Cab Services
            </h1>
            
            <p 
              ref={paragraphRef}
              className="text-xl md:text-2xl mb-8 font-light"
            >
              A Complete Guide for a Comfortable Journey
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
        </header>

        {/* Main Title */}
        <h2 className="text-3xl font-bold mt-4 text-center">
          Mumbai to Chiplun Cab Service - Affordable & Reliable Taxi Booking
        </h2>

        <BookingForm />

        {/* Service Description */}
        <section className="mt-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🧭</span> Service Options for Mumbai to Chiplun Cab Services
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                At Aimcab, we provide a range of Mumbai to Chiplun cab services to ensure that your trip is comfortable and suits your preferences. Whether you're traveling solo, with family, or in a group, we have different service options to cater to your needs.
              </p>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">1. Oneway Mumbai to Chiplun Cab</h4>
                  <p className="text-gray-600">
                    For those who need a one-way ride from Mumbai to Chiplun, Aimcab offers oneway cab services that allow you to travel from Mumbai to Chiplun without the hassle of a return journey. This service is ideal for people who are not planning to return to Mumbai immediately and want to travel conveniently in a comfortable vehicle.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">2. Roundtrip Mumbai to Chiplun Cab</h4>
                  <p className="text-gray-600">
                    If you're planning to visit Chiplun and need to return to Mumbai, Aimcab also offers flexible roundtrip cab services. This service is perfect for those who want the same cab for both the onward and return journey, ensuring a seamless and comfortable experience throughout.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">3. Airport Pickup & Drop for Mumbai to Chiplun</h4>
                  <p className="text-gray-600">
                    For travelers flying into or out of Mumbai, Aimcab offers convenient airport pickup and drop-off services. Whether you are arriving at Chhatrapati Shivaji Maharaj International Airport (BOM) or Mumbai Domestic Airport, our professional drivers will be waiting for you at the designated pick-up area and ensure that you are transported comfortably to Chiplun or back to the airport without any delays. Our airport transfer services are reliable, allowing you to avoid the hassles of public transport or navigating Mumbai's busy roads after a long flight.
                  </p>
                  <p className="text-gray-600 mt-2">
                    We provide a seamless, door-to-door service that saves you time and effort, ensuring that your journey starts or ends on a stress-free note. Whether you're in need of a Mumbai to Chiplun cab booking or Chiplun to Mumbai cab services, we guarantee you a smooth ride every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Road Trip Guide */}
        <section className="mt-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🛣️</span> Road Trip Guide: Mumbai to Chiplun
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                The road trip from Mumbai to Chiplun is a memorable journey that offers travelers the chance to experience the stunning natural beauty of Maharashtra. With well-maintained highways and scenic routes, this trip is perfect for those who enjoy driving through picturesque landscapes.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Route from Mumbai to Chiplun</h4>
                  <p className="text-gray-600">
                    The most commonly traveled route from Mumbai to Chiplun is via NH 66 (National Highway 66), which is a part of the coastal highway connecting Mumbai with Goa. The distance from Mumbai to Chiplun is approximately 330 kilometers, and the journey takes around 6 to 7 hours, depending on the traffic and road conditions.
                  </p>
                  <p className="text-gray-600 mt-2">
                    The route passes through several towns, offering travelers the opportunity to explore and take scenic breaks along the way. After leaving Mumbai, you will pass through Vasai, Palghar, Boisar, and Dahanu, which are well-known towns along the route. You'll also get to enjoy the serene surroundings, as the road runs along lush green landscapes, hills, and rivers.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Travel Experience and Highway Information</h4>
                  <p className="text-gray-600">
                    The road from Mumbai to Chiplun is a pleasant journey, offering a good balance of highway roads, rural landscapes, and natural beauty. Here's what you can expect along the way:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-600">
                    <li>Urban to Rural Transition: The journey begins with the busy urban traffic of Mumbai, but as you head toward Vasai and Palghar, the road begins to open up into quieter and more scenic routes. The transition from city to rural roads offers a refreshing change in atmosphere and ambiance, and it's a great way to unwind.</li>
                    <li>Smooth Highway: The highway, NH 66, is well-maintained for most of the route, making it an easy drive. The quality of the road ensures that your journey is both safe and comfortable. However, it's advisable to keep an eye out for small sections where construction might cause minor delays.</li>
                    <li>Traffic and Congestion: While the Mumbai exit can be busy during peak hours, once you get past the suburban areas like Vasai, the roads become much quieter. Palghar is another small town you'll pass through, but the traffic should ease once you're further on your way. You'll have plenty of room to cruise along the highway, and the drive becomes peaceful the further you get from Mumbai.</li>
                    <li>Scenic Beauty and Fresh Air: As you move closer to Chiplun, the view opens up with lush green fields, hills, and winding rivers. The backdrop of the Western Ghats is truly picturesque, especially during the monsoon season when the hills are covered with vibrant greenery, waterfalls, and mist. This scenic stretch makes for an enjoyable ride and is ideal for a few pit stops to enjoy the views or take some photos.</li>
                    <li>Rest Stops: The highway has several spots where you can stop for a quick snack or take a break. Small local eateries serve authentic Maharashtrian cuisine and are perfect for travelers to stretch their legs and refresh themselves before continuing the journey.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Scenic Views Along the Way</h4>
                  <p className="text-gray-600">
                    The Mumbai to Chiplun road trip offers travelers a variety of stunning scenic views that make the journey a memorable experience. The landscape changes beautifully as you travel from the bustling city to serene rural areas, with lush greenery, rivers, hills, and coastal views making the trip visually captivating. Here's what you can expect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-600">
                    <li>Western Ghats: As you approach Chiplun, the towering Western Ghats appear on the horizon, creating a picturesque view that defines the journey. The hills, covered in thick forests, offer a rich, green landscape that changes with the seasons, particularly during the monsoon when waterfalls cascade down the mountainsides.</li>
                    <li>Rivers and Streams: The road passes by several rivers and streams, particularly near Dahanu and Palghar, adding a touch of tranquility to the journey. The calm waters reflect the surrounding greenery and create a peaceful atmosphere that enhances the travel experience.</li>
                    <li>Waterfalls and Misty Hills: During the monsoon season, the lush greenery of the Western Ghats is complemented by waterfalls and mist. You'll witness spectacular sights of cascading waterfalls along the way, which are particularly abundant in places like Dahanu and Palghar, providing a refreshing change in the atmosphere.</li>
                    <li>Vibrant Villages and Rural Landscapes: As you move away from the urban sprawl of Mumbai, you'll pass through charming rural villages, with fields of rice, sugarcane, and other crops. The fields are beautifully green, and the rural life in Maharashtra offers a unique charm. The peaceful countryside is a stark contrast to the city, making it an ideal setting for travelers looking to enjoy some quiet time.</li>
                    <li>Coastal Views: As you approach Chiplun, particularly around the Dahanu and Boisar regions, you'll get beautiful glimpses of the Arabian Sea. The coastal stretch offers expansive views of the sea, and the wind-swept beaches make it an ideal place to stop for a quick break. The road winds along the edge of the coast, offering an uninterrupted view of the sea on one side and the hills on the other, which makes for a spectacular visual contrast. The serenity of this coastal stretch adds a calming effect to the journey.</li>
                    <li>Agricultural Fields and Scenic Villages: The journey offers plenty of opportunities to enjoy the rural landscape, especially as you get closer to Chiplun. The surrounding area is rich with agriculture, and you'll see endless fields of sugarcane, rice, and pulses. The colors of the crops, combined with the clear sky and lush greenery, provide a relaxing visual experience that helps break the monotony of long-distance travel.</li>
                    <li>Monsoon Magic: If you're traveling during the monsoon season, you'll be treated to an enchanting sight of dense forests and hills wrapped in mist. The landscape transforms into a lush, green paradise with streams running through it, offering plenty of picturesque spots. Waterfalls dot the landscape, adding to the magical beauty of the route, particularly around Palghar and Dahanu.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tourist Places & Attractions */}
        <section className="mt-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🏞️</span> Tourist Places & Attractions
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                The journey from Mumbai to Chiplun offers many places to explore along the way. Whether you want to relax by the beach, trek through the hills, or experience local culture, there's something for everyone. Here are some must-visit places on the route and in Chiplun itself:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Places to Visit Between Mumbai and Chiplun</h4>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-bold text-[#76453B] mb-2">Lonavala</h5>
                      <p className="text-gray-600">
                        A popular hill station, Lonavala is located around two hours from Mumbai and is famous for its cool climate, waterfalls, and greenery. It's a popular spot for a quick pit stop, offering attractions such as Lonavala Lake, Bushy Dam, and Karla Caves. It's perfect for nature lovers and history enthusiasts alike.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-bold text-[#76453B] mb-2">Dahanu</h5>
                      <p className="text-gray-600">
                        A peaceful coastal town located on the way to Chiplun, Dahanu is known for its serene beaches and the coconut groves that line the coast. Dahanu Beach is a relaxing place to stop, especially if you enjoy quiet, less crowded beaches. The town also offers a glimpse into rural life in Maharashtra.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-bold text-[#76453B] mb-2">Harihareshwar</h5>
                      <p className="text-gray-600">
                        A small coastal town famous for its beautiful beach and the Harihareshwar Temple, this is a great place to relax. The Harihareshwar Beach is known for its clean sand and clear water, making it an excellent place for a peaceful getaway during your trip to Chiplun.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-bold text-[#76453B] mb-2">Boisar</h5>
                      <p className="text-gray-600">
                        Known for its industrial significance, Boisar is another town you'll pass on the way. While Boisar may not have major tourist attractions, it is home to ancient caves and temples, making it an interesting stop if you're keen to explore a bit of local history.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Must-Visit Spots in Chiplun</h4>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-bold text-[#76453B] mb-2">Vashishti River</h5>
                      <p className="text-gray-600">
                        This river is central to the town of Chiplun. The Vashishti River offers boating opportunities and scenic views of the hills, making it a perfect spot for a peaceful outing or a photography session.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-bold text-[#76453B] mb-2">Chiplun Fort</h5>
                      <p className="text-gray-600">
                        A historic fort overlooking the town and the river, Chiplun Fort offers stunning views of the surrounding area. It's a great place for history buffs and those who enjoy exploring old forts and ruins.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-bold text-[#76453B] mb-2">Siddhivinayak Temple</h5>
                      <p className="text-gray-600">
                        Located on a hilltop, Siddhivinayak Temple is dedicated to Lord Ganesha. It's a major pilgrimage site for locals and a great place to experience the spiritual culture of Maharashtra. The temple is known for its peaceful atmosphere and the beautiful panoramic views from the top.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-bold text-[#76453B] mb-2">Guhagar Beach</h5>
                      <p className="text-gray-600">
                        Guhagar Beach is located about 30 km from Chiplun and is one of the most serene and unspoiled beaches in the area. It offers golden sands, calm waters, and is less crowded than the beaches near Mumbai. It's ideal for a relaxing break or a peaceful walk along the shoreline.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-bold text-[#76453B] mb-2">Koyna Wildlife Sanctuary</h5>
                      <p className="text-gray-600">
                        Located near Chiplun, Koyna Wildlife Sanctuary is a UNESCO World Heritage site. It's an excellent spot for nature lovers and wildlife enthusiasts. The sanctuary is home to a variety of species, including tigers, leopards, and various species of birds. It also offers trekking and hiking trails for those who love outdoor adventure.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Things to Do in Chiplun</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>River Cruises: Enjoy a relaxing boat ride on the Vashishti River, taking in the beauty of the surrounding hills and countryside.</li>
                    <li>Beach Day: Head to Guhagar Beach for a relaxing day by the sea. It's perfect for a peaceful swim or a walk along the shore.</li>
                    <li>Visit Temples: Explore the Siddhivinayak Temple and Parshuram Temple, both of which hold spiritual significance and are beautifully located.</li>
                    <li>Trekking: For the adventurous, the Chiplun Fort and nearby hills provide trekking opportunities with scenic views.</li>
                    <li>Photography: With such stunning landscapes, Chiplun is a great place for nature and landscape photography.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cab Fare & Pricing Table */}
        <section className="mt-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">💰</span> Cab Fare & Pricing Table
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Aimcab offers competitive pricing for Mumbai to Chiplun cab services, ensuring that you get a great deal while traveling in comfort. Below is a detailed fare structure for different vehicle types:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full min-w-max">
                  <thead>
                    <tr className="bg-blue-50 text-blue-900">
                      <th className="p-3 text-left font-semibold">Cab Type</th>
                      <th className="p-3 text-left font-semibold">Price (₹/KM)</th>
                      <th className="p-3 text-left font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            </svg>
                          </div>
                          <span>Sedan (Dzire, Etios)</span>
                        </div>
                      </td>
                      <td className="p-3 font-medium text-green-600">₹11/km</td>
                      <td className="p-3 text-gray-600">Budget-friendly travel</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            </svg>
                          </div>
                          <span>SUV (Ertiga, Xylo)</span>
                        </div>
                      </td>
                      <td className="p-3 font-medium text-green-600">₹14/km</td>
                      <td className="p-3 text-gray-600">Family trips & extra luggage space</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            </svg>
                          </div>
                          <span>Luxury (Innova Crysta)</span>
                        </div>
                      </td>
                      <td className="p-3 font-medium text-green-600">₹18/km</td>
                      <td className="p-3 text-gray-600">Premium comfort & business travel</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <svg className="w-5 h-5 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            </svg>
                          </div>
                          <span>Tempo Traveller</span>
                        </div>
                      </td>
                      <td className="p-3 font-medium text-green-600">₹25/km</td>
                      <td className="p-3 text-gray-600">Group trips & office outings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-[#76453B] mb-2">Additional Information:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Toll and parking charges are excluded from the fare.</li>
                  <li>No waiting charges.</li>
                  <li>No kilometer limit.</li>
                  <li>Driver's allowance included.</li>
                  <li>No night halt charges.</li>
                </ul>
                <p className="text-gray-600 mt-2">
                  This transparent pricing ensures you enjoy a comfortable and affordable ride with no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Aimcab */}
        <section className="mt-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🚖</span> Why Choose Aimcab – Our Specialties
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Always Neat & Clean Cabs</h4>
                  <p className="text-gray-600">
                    We ensure that all our vehicles are thoroughly cleaned and well-maintained, so you have a pleasant and hygienic travel experience.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">On-Time Guarantee</h4>
                  <p className="text-gray-600">
                    Punctuality is key to a stress-free trip, and our drivers guarantee on-time arrivals and departures.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Complimentary Gift for New Users</h4>
                  <p className="text-gray-600">
                    We provide a complimentary gift for first-time users of our service, welcoming you to Aimcab.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">GPS Tracking in All Cabs</h4>
                  <p className="text-gray-600">
                    For safety and peace of mind, all our vehicles come with GPS tracking.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">24x7 Helpline Available</h4>
                  <p className="text-gray-600">
                    Our dedicated customer support team is available 24/7 to assist you with any questions or concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="mt-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🏢</span> About Us – Aimcab
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Aimcab has been a trusted name in the intercity cab service industry since 2001. With a reputation for providing safe, reliable, and affordable travel, we have completed over 3,000 successful outstation trips and served more than 200,000 satisfied customers. We offer comfortable, well-maintained vehicles, including sedans, SUVs, luxury cars, and Tempo Travellers, ensuring that we have the perfect ride for your needs.
              </p>
              <p className="text-gray-700">
                Our commitment to punctuality, customer satisfaction, and safety has made us a preferred choice for travelers. With over 500 registered cabs in our network, Aimcab has earned a reputation for offering hassle-free travel services across India. Whether you're planning a Mumbai to Chiplun cab booking or any other journey, you can trust Aimcab to provide a seamless travel experience.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] rounded-xl shadow-lg p-6 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">Ready to Travel from Mumbai to Chiplun?</h4>
            <p className="text-blue-100">
              With everything you need to know about Mumbai to Chiplun cab services at your fingertips, it's time to book your ride with Aimcab! We offer reliable, comfortable, and affordable travel solutions that make every journey enjoyable.
            </p>
            <p className="text-white mt-4">
              Book your Mumbai to Chiplun cab today, and experience a smooth, stress-free trip with Aimcab. We are here to make your travel experience the best it can be!
            </p>
          </div>
        </section>

        {/* Footer */}
        <div><Footer/></div>
      </div>
    </>
  );
};

export default Page;