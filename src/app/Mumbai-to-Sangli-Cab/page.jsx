"use client"
import React from 'react'
import Head from 'next/head'
import { gsap } from 'gsap';
import BookingForm from '../../components/BookingForm';
import { useEffect, useRef } from 'react';
import Navbar from '../../container/component/Navbar';
import Footer from '../../container/component/Footer';
import About_Aimcab from '../../components/About_Aimcab';
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
        <title>Mumbai to Sangli Cab | Safe & Affordable Taxi Ride</title>
        <meta name="description" content="Book Mumbai to Sangli cab online with Aim Cab for affordable fares and hassle-free travel. Reliable one-way & round trip taxi services at best rates." />
        <link rel="canonical" href="https://aimcab.com/Mumbai-to-Sangli-Cab" />
        <meta name="author" content="Aim Cab" />
        <meta name="keywords" content="Mumbai To sangli Cab, cab fare from sangli to mumbai, what is cab booking rate from mumbai to sangli, sangli to mumbai cab, cab from sangli to mumbai, mumbai to sangli cab booking, Mumbai To sangli Cab Services, cab fare from mumbai to sangli, mumbai to sangli cab fare, Cab Services in sangli" />
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
              Mumbai to Sangli Cab Services
            </h1>
            
            <p 
              ref={paragraphRef}
              className="text-xl md:text-2xl mb-8 font-light"
            >
              Convenient, Comfortable, and Reliable Travel
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
        </header>

        {/* Main Title */}
        <h2 className="text-3xl font-bold mt-4 text-center">
          Mumbai to Sangli Cab Service - Affordable & Reliable Taxi Booking
        </h2>

        <BookingForm />

        {/* Service Description */}
        <section className="mt-8">
          <div className="bg-white rounded-xl mt-24 shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🧭</span> Service Options
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Aimcab offers several service options to cater to different needs and preferences. Whether you are traveling solo, with family, or in a group, we have the perfect solution for you.
              </p>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Oneway Cab Services</h4>
                  <p className="text-gray-600">
                    If you're looking for a oneway Mumbai to Sangli cab, Aimcab provides this option for those who only need a one-way ride. Whether it's for business or a short stay, our one-way service allows you to book a cab to Sangli and get to your destination conveniently and comfortably. This option allows you to skip worrying about a return journey, especially when you have other travel plans.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Roundtrip Cab Services</h4>
                  <p className="text-gray-600">
                    For those who want a roundtrip Mumbai to Sangli cab service, we offer flexible options that ensure a smooth journey both ways. Whether you need to attend meetings, visit family, or enjoy a holiday, our roundtrip cab services offer you the convenience of a guaranteed return journey. You can plan your schedule according to your needs, and our drivers will make sure you're on time for both the departure and return trips.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Airport Pickup & Drop</h4>
                  <p className="text-gray-600">
                    For travelers flying into or out of Mumbai, we provide airport pickup and drop services for your Mumbai to Sangli trip. Whether you are landing at Chhatrapati Shivaji Maharaj International Airport or Mumbai Domestic Airport, our professional drivers will meet you at the airport, help with your luggage, and transport you comfortably to your destination in Sangli. This service eliminates the need to search for a taxi at the airport, offering a stress-free start or end to your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="mt-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🛒</span> Booking Process
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Booking your Mumbai to Sangli cab with Aimcab is simple, fast, and convenient. We offer three different methods to ensure that you can book your ride in the way that best fits your preferences.
              </p>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Book Online via Website</h4>
                  <p className="text-gray-600">
                    The easiest way to book your Mumbai to Sangli cab is through our website. Simply visit Aimcab.com, select the Mumbai to Sangli cab booking option, fill in your travel details such as pickup time, location, and destination, and choose your preferred vehicle type. Our website is user-friendly and allows you to complete the booking process quickly, with instant confirmation.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Book On Call</h4>
                  <p className="text-gray-600">
                    If you prefer a more personalized service, you can book your Mumbai to Sangli cab over the phone. Simply call our customer support team, who are available 24/7 to assist you with your booking. Our team will help you choose the best cab service for your trip, provide you with all the necessary details, and confirm your booking on the spot. Whether it's a one-way trip or a roundtrip, we'll ensure that your experience is seamless from the moment you make the call.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Book Through the App</h4>
                  <p className="text-gray-600">
                    For tech-savvy travelers, Aimcab's mobile app provides a quick and efficient way to book your Mumbai to Sangli cab. With the app, you can easily input your trip details, choose your vehicle, and complete the booking in just a few taps. The app also allows you to track your cab in real time, so you always know exactly when to expect your driver. Plus, the app offers secure payment options, making it easy to settle the fare after your ride. If you haven't downloaded our app yet, it's available for both Android and iOS devices.
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
                <span className="mr-2">🛣️</span> Road Trip Guide
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Route from Mumbai to Kolhapur</h4>
                  <p className="text-gray-600">
                    To reach Sangli, most travelers prefer the route via Mumbai-Kolhapur Highway (NH 48), which takes you on a scenic drive through Maharashtra. The journey covers a distance of approximately 350 kilometers and takes about 6 to 7 hours, depending on traffic and road conditions. The road is well-maintained, and there are plenty of stopping points where you can grab a bite or stretch your legs.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Travel Experience and Highway Information</h4>
                  <p className="text-gray-600">
                    As you begin your journey, you'll pass through several towns such as Lonavala, Khandala, and Satara, all known for their scenic views. The highway is largely a smooth and direct route, making it suitable for long drives.
                    Along the way, you will find various small towns and local attractions that make the journey more enjoyable. From rolling hills to vast fields, the route offers a combination of mountainous terrains and flat landscapes. It's important to note that this highway is equipped with toll booths, which you will need to pass along the way, but the overall road quality makes the tolls worth it.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Places to Visit Between Mumbai and Kolhapur</h4>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-bold text-[#76453B] mb-2">Lonavala and Khandala</h5>
                      <p className="text-gray-600">
                        These twin hill stations are located around 80 km from Mumbai and are famous for their lush green landscapes, pleasant weather, and numerous viewpoints. Lonavala is known for its Bhushi Dam, Tiger's Leap, and Lion's Point, while Khandala boasts beautiful places like Duke's Nose and Sunset Point. These places provide stunning panoramic views of the valleys and are perfect for a short break. If you enjoy hiking or photography, these areas are ideal.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-bold text-[#76453B] mb-2">Pune</h5>
                      <p className="text-gray-600">
                        As you continue your journey, you'll pass through Pune, one of Maharashtra's most vibrant cities. Pune is rich in culture and history, and you can explore places like Aga Khan Palace, Shaniwar Wada, and Osho Ashram. If you're a food lover, Pune's street food, especially the Vada Pav and Pav Bhaji, is a must-try. Pune is also home to several beautiful parks like Saras Baug and Empress Gardens, providing a relaxing stop.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-bold text-[#76453B] mb-2">Satara</h5>
                      <p className="text-gray-600">
                        This charming city is located about 120 km from Pune and is known for its historic significance and scenic beauty. One of the main attractions in Satara is the Kaas Plateau, a UNESCO World Heritage site known for its rich biodiversity and a variety of wildflowers. If you're into history, visit Pratapgad Fort and Ajinkyatara Fort, both of which offer stunning views of the surrounding hills and valleys.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-bold text-[#76453B] mb-2">Kolhapur</h5>
                      <p className="text-gray-600">
                        Kolhapur is an essential stop if you're heading from Mumbai to Sangli. Famous for its cultural and spiritual importance, Mahalakshmi Temple is one of the key attractions in the city. Kolhapur is also known for its handicrafts, particularly Kolhapuri chappals (traditional footwear), which you can buy from the local markets. Rankala Lake is another beautiful spot in Kolhapur, offering a peaceful place for a leisurely stroll or boat ride.
                      </p>
                    </div>
                  </div>
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
                  <li>Toll and parking excluded</li>
                  <li>No waiting charges</li>
                  <li>No kilometer limit</li>
                  <li>Driver's allowance included</li>
                  <li>No night halt charges</li>
                </ul>
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
                    We prioritize cleanliness in all our vehicles. Every Aimcab vehicle is thoroughly cleaned and sanitized before your journey, ensuring a comfortable and hygienic travel experience.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">On-Time Guarantee</h4>
                  <p className="text-gray-600">
                    Our drivers are committed to punctuality, so you can be assured that you will reach your destination on time, every time.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">Complimentary Gift for New Users</h4>
                  <p className="text-gray-600">
                    We value our new customers and offer them a complimentary gift as a token of appreciation for choosing Aimcab for their Mumbai to Sangli cab journey. This gift is our way of thanking you for trusting us with your travel needs. Whether it's a discount on your next ride or a small souvenir, we ensure that every first-time traveler feels valued and appreciated.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">GPS Tracking in All Cabs</h4>
                  <p className="text-gray-600">
                    For your safety and peace of mind, all of our cabs are equipped with GPS tracking. This allows you to track your cab in real-time, ensuring that you always know where your driver is. GPS tracking also helps us ensure the safety of our passengers and guarantees that you'll always be on the right route.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-[#76453B] text-lg mb-2">24x7 Helpline Available</h4>
                  <p className="text-gray-600">
                    We know that travel plans can sometimes change unexpectedly, and we are here to help. Our customer support team is available 24/7 to assist with any questions or concerns you might have. Whether you need to modify your Mumbai to Sangli cab booking, inquire about fares, or need assistance during your ride, our friendly support team is always just a call away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] p-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2">🙋</span> FAQs Section
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#76453B]">How can I book a Mumbai to Sangli cab with Aimcab?</h4>
                  <p className="text-gray-600 mt-1">You can book your Mumbai to Sangli cab via our website, by calling our customer service team, or through our mobile app.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B]">What is the fare for a cab from Mumbai to Sangli?</h4>
                  <p className="text-gray-600 mt-1">The fare starts from ₹11/km for a sedan, with prices varying depending on the type of vehicle you choose. Additional charges may apply for tolls and parking.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B]">Are there any hidden charges?</h4>
                  <p className="text-gray-600 mt-1">No, there are no hidden charges. The fare is transparent, and we do not charge for waiting time or night halts. The pricing includes the driver's allowance.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B]">Can I book a one-way cab from Sangli to Mumbai?</h4>
                  <p className="text-gray-600 mt-1">Yes, we offer Sangli to Mumbai cab services. You can easily book a one-way ride for your return journey.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B]">How long does the journey take?</h4>
                  <p className="text-gray-600 mt-1">The journey typically takes around 6-7 hours, depending on traffic and road conditions.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B]">Can I make stops along the way for sightseeing?</h4>
                  <p className="text-gray-600 mt-1">Yes, we can arrange stops for sightseeing at various scenic spots along the route. Just let your driver know your preferences.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B]">What types of cabs are available for the Mumbai to Sangli route?</h4>
                  <p className="text-gray-600 mt-1">We offer a range of vehicles, including sedans, SUVs, luxury vehicles, and tempo travelers for group trips.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#76453B]">Is Aimcab available 24/7?</h4>
                  <p className="text-gray-600 mt-1">Yes, Aimcab operates 24/7, providing reliable and convenient Mumbai to Sangli cab services at any time of the day or night. Whether you need a ride early in the morning or late at night, you can count on us to provide a safe, comfortable, and timely journey. Our customer support team is also available around the clock to assist with bookings, answer any questions, and address any concerns you might have during your trip.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <About_Aimcab/>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#F3B664] to-[#76453B] rounded-xl shadow-lg p-6 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">🚗 Book your Mumbai to Sangli cab now & enjoy a smooth ride!</h4>
            <p className="text-blue-100">
              🚖 Enjoy the best Mumbai to Sangli cab service with Aim Cab.
              Get the lowest fares, professional drivers, and a hassle-free booking experience.
              Book your ride today at{" "}
              <a href="https://aimcab.com" className="text-white underline font-medium">
                aimcab.com
              </a>{" "}
              and travel stress-free!
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