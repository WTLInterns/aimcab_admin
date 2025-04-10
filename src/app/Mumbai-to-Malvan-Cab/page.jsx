"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaCar, FaRoute, FaMapMarkedAlt, FaMoneyBillWave, FaQuestionCircle, FaInfoCircle } from "react-icons/fa"
import { MdAirportShuttle, MdPayment } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { HiOutlineGift } from "react-icons/hi"
import About_Aimcab from '../../components/About_Aimcab';
export default function MumbaiToMalvan() {
  const [activeTab, setActiveTab] = useState("overview")

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('/images/mumbai-malvan.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mumbai to Malvan Cab</h1>
            <p className="text-xl mb-8">The Ultimate Guide for a Comfortable Journey with Aimcab</p>
            <button className="bg-[#FF6B6B] hover:bg-[#FF8E8E] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Book Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {["overview", "services", "route", "attractions", "pricing", "faq"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium whitespace-nowrap ${
                  activeTab === tab ? "text-[#FF6B6B] border-b-2 border-[#FF6B6B]" : "text-gray-600"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        {/* Overview Section */}
        {activeTab === "overview" && (
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Journey Overview</h2>
            <p className="text-gray-600 mb-6">
              Are you planning a trip from Mumbai to Malvan? Whether you're traveling for leisure, business, 
              or an adventure, Aimcab provides a reliable and comfortable cab service to make your journey 
              smooth and enjoyable. Known for our punctuality and excellent customer service, we are here 
              to offer you an unforgettable ride experience.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <FaCar className="text-4xl text-[#FF6B6B] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Comfortable Rides</h3>
                <p className="text-gray-600">Premium vehicles for a smooth journey</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <FaRoute className="text-4xl text-[#FF6B6B] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Scenic Routes</h3>
                <p className="text-gray-600">Beautiful coastal views along NH66</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <MdPayment className="text-4xl text-[#FF6B6B] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Flexible Payment</h3>
                <p className="text-gray-600">Multiple payment options available</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Services Section */}
        {activeTab === "services" && (
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Service Options</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <FaCar className="text-2xl text-[#FF6B6B] mr-3" />
                  <h3 className="text-xl font-semibold">Oneway Service</h3>
                </div>
                <p className="text-gray-600">
                  Our one-way cab service is perfect for travelers who want a hassle-free ride from Mumbai 
                  to Malvan without the need for a return trip. Whether you are traveling alone or with a 
                  group, we ensure a comfortable and timely journey.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <FaRoute className="text-2xl text-[#FF6B6B] mr-3" />
                  <h3 className="text-xl font-semibold">Roundtrip Service</h3>
                </div>
                <p className="text-gray-600">
                  If you need a roundtrip service, we offer the flexibility to travel from Mumbai to Malvan 
                  and return on the same day or at a later time. This option ensures you have the comfort 
                  of a dedicated driver and a cab throughout the trip.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <MdAirportShuttle className="text-2xl text-[#FF6B6B] mr-3" />
                  <h3 className="text-xl font-semibold">Airport Pickup & Drop</h3>
                </div>
                <p className="text-gray-600">
                  For those arriving at or departing from Mumbai Airport, our airport pickup and drop services 
                  are the perfect option. We will ensure that you're picked up from the airport and driven 
                  directly to your destination in Malvan, or vice versa.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Route Section */}
        {activeTab === "route" && (
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Road Trip Guide</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Route Information</h3>
              <p className="text-gray-600 mb-4">
                The road from Mumbai to Malvan is well-connected and offers a smooth travel experience, 
                passing through some stunning landscapes. The most common route is via NH66 (Mumbai-Goa 
                highway). The distance is approximately 500 kilometers, and the journey typically takes 
                around 8-10 hours, depending on traffic conditions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Stops</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Lonavala and Khandala</li>
                    <li>Mahad</li>
                    <li>Chiplun</li>
                    <li>Kolhapur</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Highway Info</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Well-maintained NH66</li>
                    <li>Regular petrol stations</li>
                    <li>Rest stops available</li>
                    <li>Scenic coastal views</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Attractions Section */}
        {activeTab === "attractions" && (
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Tourist Places & Attractions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Along the Route</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Lonavala and Khandala</h4>
                      <p className="text-gray-600">Perfect for a quick stop to enjoy the cool weather</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Mahad</h4>
                      <p className="text-gray-600">Visit the historic Raigad Fort</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Chiplun</h4>
                      <p className="text-gray-600">Enjoy nature with rivers, forests, and hills</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">In Malvan</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Tarkarli Beach</h4>
                      <p className="text-gray-600">Famous for its clean waters and water sports</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Sindhudurg Fort</h4>
                      <p className="text-gray-600">Historic fort with beautiful sea views</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Devbagh Beach</h4>
                      <p className="text-gray-600">Perfect for relaxation and water activities</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Pricing Section */}
        {activeTab === "pricing" && (
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Cab Fare & Pricing</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Cab Type</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Price (₹/KM)</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Sedan (Dzire, Etios)</td>
                    <td className="px-6 py-4">₹11/km</td>
                    <td className="px-6 py-4">Budget-friendly travel</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">SUV (Ertiga, Xylo)</td>
                    <td className="px-6 py-4">₹14/km</td>
                    <td className="px-6 py-4">Family trips & extra luggage space</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Luxury (Innova Crysta)</td>
                    <td className="px-6 py-4">₹18/km</td>
                    <td className="px-6 py-4">Premium comfort & business travel</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Tempo Traveller</td>
                    <td className="px-6 py-4">₹25/km</td>
                    <td className="px-6 py-4">Group trips & office outings</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-[#FF6B6B] mr-2">•</span>
                  Toll and parking excluded
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF6B6B] mr-2">•</span>
                  No waiting charges
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF6B6B] mr-2">•</span>
                  No kilometer limit
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF6B6B] mr-2">•</span>
                  No night halt charges
                </li>
              </ul>
            </div>
          </motion.div>
        )}

        {/* FAQ Section */}
        {activeTab === "faq" && (
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                "How can I book a cab from Mumbai to Malvan?",
                "How much does the cab fare from Mumbai to Malvan cost?",
                "Can I book a roundtrip cab?",
                "Are there any hidden charges?",
                "What is the best time to travel from Mumbai to Malvan?",
                "Can I book a cab for a group of people?",
                "Is it safe to travel with Aimcab?",
                "Can I cancel my booking?",
                "Can I select a specific time for my pickup?",
                "What if my cab is delayed?"
              ].map((question, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-start">
                    <FaQuestionCircle className="text-[#FF6B6B] text-xl mt-1 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{question}</h3>
                      <p className="text-gray-600">
                        {index === 0 && "You can book your cab through our website, via phone, or through our mobile app. All three methods are user-friendly and ensure a hassle-free booking experience."}
                        {index === 1 && "The fare typically ranges from ₹11/km to ₹25/km, depending on the vehicle type you select. The pricing is clear and there are no hidden charges."}
                        {index === 2 && "Yes, we offer both one-way and roundtrip services from Mumbai to Malvan. You can plan your return journey based on your preferences."}
                        {index === 3 && "No, Aimcab believes in complete transparency. All charges are outlined clearly, and there are no hidden fees for tolls, parking, or other services."}
                        {index === 4 && "The ideal time to travel is during the cooler months (October to March), when the weather is more comfortable for long journeys."}
                        {index === 5 && "Yes, we offer Tempo Traveller services, which are perfect for group trips. Our vehicles can comfortably accommodate large groups."}
                        {index === 6 && "Absolutely! We prioritize safety. Our drivers are experienced and professional, and all our vehicles are well-maintained and equipped with GPS for real-time tracking."}
                        {index === 7 && "Yes, cancellations can be made easily via our website, app, or by contacting our customer service."}
                        {index === 8 && "Yes, you can choose the exact time for your pickup when booking your cab. We will ensure your ride is punctual."}
                        {index === 9 && "If there is any delay, our customer support team will inform you immediately and provide you with an updated arrival time."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Aimcab</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
                <HiOutlineGift className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complimentary Gift</h3>
              <p className="text-gray-600">Special gift for first-time users</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkedAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GPS Tracking</h3>
              <p className="text-gray-600">Real-time journey tracking</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
                <BsFillTelephoneFill className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always available to help you</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-[#FF6B6B] mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">About Aimcab</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Founded in 2001 and based in Pune, Aimcab has been a trusted name in the cab service industry 
              for over two decades. With over 50 personal cabs and a network of 500+ registered cabs, we 
              have successfully completed over 3,000 outstation trips.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Highlights</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    50+ personal cabs across India
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    500+ registered cabs in our network
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    2,00,000+ happy customers
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Our Achievements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    3,000+ successful outstation trips
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    Reliable and safe intercity services
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    Excellent customer service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About_Aimcab  />
      {/* CTA Section */}
      <section className="bg-[#FF6B6B] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Book Your Journey?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Experience a safe, comfortable, and hassle-free road trip with Aimcab. Whether it's for a business 
            meeting, a family outing, or a solo journey, we ensure the best travel experience every time.
          </p>
          <button className="bg-white text-[#FF6B6B] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
            Book Your Cab Now
          </button>
        </div>
      </section>
    </div>
  )
}