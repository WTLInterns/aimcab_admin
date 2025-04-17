"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaCar, FaRoute, FaMapMarkedAlt, FaMoneyBillWave, FaQuestionCircle, FaInfoCircle } from "react-icons/fa"
import { MdAirportShuttle, MdPayment } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { HiOutlineGift } from "react-icons/hi"

export default function MumbaiToNippani() {
  const [activeTab, setActiveTab] = useState("overview")

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('/images/nipani.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mumbai to Nippani Cab</h1>
            <p className="text-xl mb-8">Your Ultimate Guide for a Comfortable and Convenient Journey</p>
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
              Traveling from Mumbai to Nippani is a journey that blends comfort, convenience, and a scenic drive. 
              Whether you're embarking on a business trip, a family vacation, or a personal journey, choosing a 
              reliable Mumbai to Nippani cab service ensures that your travel experience is smooth and hassle-free.
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
                <p className="text-gray-600">Beautiful landscapes along the way</p>
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
                  <h3 className="text-xl font-semibold">Oneway Cab Service</h3>
                </div>
                <p className="text-gray-600">
                  Our one-way cab service from Mumbai to Nippani is designed for travelers who need a direct, 
                  one-time journey. This service is perfect for business travelers, tourists, or anyone who 
                  just needs to travel to Nippani without worrying about a return trip.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <FaRoute className="text-2xl text-[#FF6B6B] mr-3" />
                  <h3 className="text-xl font-semibold">Roundtrip Cab Service</h3>
                </div>
                <p className="text-gray-600">
                  If you plan to return to Mumbai after your visit to Nippani, our roundtrip cab service is 
                  the perfect choice. Aimcab's roundtrip service is flexible and affordable, offering a 
                  convenient way to book both your journey to and from Nippani.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <MdAirportShuttle className="text-2xl text-[#FF6B6B] mr-3" />
                  <h3 className="text-xl font-semibold">Airport Pickup & Drop</h3>
                </div>
                <p className="text-gray-600">
                  For travelers flying into Mumbai or Nippani, Aimcab's airport pickup and drop service 
                  ensures a seamless transfer. Whether you're arriving at Chhatrapati Shivaji Maharaj 
                  International Airport in Mumbai or the nearest airport in Nippani.
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
                The most commonly used route from Mumbai to Nippani is via NH 48 and NH 52, which are 
                well-maintained highways. The journey is about 370 kilometers long and typically takes 
                between 7 to 9 hours, depending on traffic conditions and stops.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Stops</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Lonavala and Khandala</li>
                    <li>Pune</li>
                    <li>Satara</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Highway Info</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Well-maintained roads</li>
                    <li>Regular petrol stations</li>
                    <li>Rest stops available</li>
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
                      <p className="text-gray-600">Famous hill stations with cool climate and beautiful surroundings</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Pune</h4>
                      <p className="text-gray-600">Cultural capital with historic sites and landmarks</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">In Nippani</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Shree Nagareshwar Temple</h4>
                      <p className="text-gray-600">Ancient temple dedicated to Lord Shiva</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Gokak Falls</h4>
                      <p className="text-gray-600">Stunning waterfall surrounded by lush greenery</p>
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
                "How can I book a cab from Mumbai to Nippani?",
                "What is the fare for a Mumbai to Nippani cab?",
                "Is there a limit on the kilometers?",
                "Do you offer roundtrip services for Mumbai to Nippani?",
                "How can I track my ride?"
              ].map((question, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-start">
                    <FaQuestionCircle className="text-[#FF6B6B] text-xl mt-1 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{question}</h3>
                      <p className="text-gray-600">
                        {index === 0 && "You can book a cab via our website, by calling our customer support, or through our mobile app."}
                        {index === 1 && "The fare depends on the type of vehicle you select. Prices start from ₹11/km for budget sedans."}
                        {index === 2 && "No, there is no limit on the kilometers you can travel."}
                        {index === 3 && "Yes, we offer roundtrip services for your convenience."}
                        {index === 4 && "You can track your ride in real-time using our mobile app."}
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
              Since 2001, Aimcab has been a trusted name in India's cab service industry. With over 50 personal 
              cabs and a network of 500+ registered cabs across India, Aimcab provides reliable, safe, and 
              comfortable intercity travel.
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