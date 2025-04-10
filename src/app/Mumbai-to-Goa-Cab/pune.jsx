"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaCar, FaRoute, FaMapMarkedAlt, FaMoneyBillWave, FaQuestionCircle, FaInfoCircle } from "react-icons/fa"
import { MdAirportShuttle, MdPayment } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { HiOutlineGift } from "react-icons/hi"

export default function MumbaiToGoa() {
  const [activeTab, setActiveTab] = useState("overview")

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('/images/mumbai-goa.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mumbai to Goa Cab</h1>
            <p className="text-xl mb-8">Travel with Comfort and Convenience</p>
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
              When planning a trip from Mumbai to Goa, the journey should be as enjoyable as the destination. 
              Instead of worrying about public transport or driving yourself, why not make the trip hassle-free 
              with a Mumbai to Goa cab? Aimcab offers a reliable, affordable, and comfortable cab service that 
              guarantees a stress-free experience.
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
                  If you're traveling from Mumbai to Goa for a one-way trip, Aimcab makes it easy. Our Mumbai 
                  to Goa cab service ensures you get to your destination without any hassle. With a one-way 
                  journey, you won't need to worry about your return trip, and you'll enjoy a smooth ride 
                  along scenic routes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <FaRoute className="text-2xl text-[#FF6B6B] mr-3" />
                  <h3 className="text-xl font-semibold">Roundtrip Service</h3>
                </div>
                <p className="text-gray-600">
                  For travelers who plan to return to Mumbai after spending some time in Goa, our roundtrip 
                  service is ideal. We offer a convenient pick-up and drop-off service from and to your 
                  desired location, making your entire journey seamless and comfortable.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <MdAirportShuttle className="text-2xl text-[#FF6B6B] mr-3" />
                  <h3 className="text-xl font-semibold">Airport Pickup & Drop</h3>
                </div>
                <p className="text-gray-600">
                  Traveling by air? Aimcab offers Mumbai to Goa cab airport services, ensuring your trip 
                  starts and ends smoothly. Whether you're flying into Chhatrapati Shivaji International 
                  Airport (Mumbai) or Dabolim Airport (Goa), our cabs will be waiting to pick you up and 
                  drop you off on time.
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
                The most popular and preferred route from Mumbai to Goa is via NH 66. The journey will take 
                you through various towns such as Panvel, Alibaug, and Kolhapur. The typical travel time is 
                between 10 to 12 hours, depending on the traffic and road conditions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Stops</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Panvel</li>
                    <li>Alibaug</li>
                    <li>Pen</li>
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
                      <h4 className="font-semibold">Alibaug</h4>
                      <p className="text-gray-600">Known for its beaches and calm atmosphere</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Pen</h4>
                      <p className="text-gray-600">Famous for its temples and traditional architecture</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Kolhapur</h4>
                      <p className="text-gray-600">Rich blend of culture, heritage, and scenic beauty</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">In Mumbai</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Gateway of India</h4>
                      <p className="text-gray-600">Iconic landmark symbolizing Mumbai's colonial past</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Marine Drive</h4>
                      <p className="text-gray-600">Perfect spot to enjoy a breezy evening by the sea</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Chhatrapati Shivaji Terminus</h4>
                      <p className="text-gray-600">UNESCO World Heritage Site with stunning architecture</p>
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
                "How much is the Mumbai to Goa cab fare?",
                "Can I book a one-way cab from Mumbai to Goa?",
                "Are toll and parking charges included in the fare?",
                "How long does it take to travel from Mumbai to Goa?",
                "Can I book a cab from Mumbai Airport to Goa?",
                "Are there any waiting charges?",
                "Can I book a roundtrip cab from Goa to Mumbai?",
                "How can I track my cab during the journey?",
                "Are the cabs comfortable for long journeys?",
                "Do you offer group travel options?"
              ].map((question, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-start">
                    <FaQuestionCircle className="text-[#FF6B6B] text-xl mt-1 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{question}</h3>
                      <p className="text-gray-600">
                        {index === 0 && "The fare depends on the vehicle type you choose. A sedan starts at ₹11/km, while luxury vehicles like the Innova Crysta are priced at ₹18/km."}
                        {index === 1 && "Yes, Aimcab offers Mumbai to Goa one-way cab services for travelers looking for a single journey from Mumbai to Goa without the need for a return trip."}
                        {index === 2 && "No, toll and parking charges are additional and will be calculated based on the actual charges incurred during the trip."}
                        {index === 3 && "The typical travel time is between 10 to 12 hours, depending on the traffic and road conditions."}
                        {index === 4 && "Yes, we offer Mumbai to Goa airport pickup and drop services. Simply book through our website, app, or by phone."}
                        {index === 5 && "No, Aimcab does not charge any waiting fees. Our drivers will be on time, and you won't incur extra costs for any delays."}
                        {index === 6 && "Yes, you can easily book a roundtrip cab from Goa to Mumbai, with pickup and drop-off at your desired locations."}
                        {index === 7 && "All our cabs are equipped with GPS tracking, which allows you to monitor your ride in real-time via our app."}
                        {index === 8 && "Absolutely! Our vehicles are maintained to provide maximum comfort, with spacious interiors and modern amenities to ensure a smooth and comfortable journey."}
                        {index === 9 && "Yes, we offer Tempo Travellers for group travel. These vehicles are ideal for families or office outings, providing ample space for larger groups."}
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
              Aimcab is a trusted name in the travel industry, providing high-quality, affordable, and reliable 
              Mumbai to Goa cab services since 2001. With a fleet of over 500 registered cabs and more than 
              50 personal vehicles, we have successfully completed over 3,000 outstation trips.
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