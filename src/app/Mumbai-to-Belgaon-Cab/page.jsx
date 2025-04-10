'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mumbai to Belgaon Cab</h1>
            <p className="text-xl">Your Comprehensive Guide to a Comfortable Journey</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex space-x-4 border-b border-gray-200">
          {['overview', 'services', 'booking', 'route', 'attractions', 'pricing', 'faq'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium ${
                activeTab === tab
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Traveling from Mumbai to Belgaon (also known as Belgaum) is a journey that offers diverse experiences—whether you're headed for business, leisure, or family matters. While there are various ways to travel, opting for a Mumbai to Belgaon cab service ensures a smooth, comfortable, and stress-free trip. At Aimcab, we provide top-notch services that guarantee you reach your destination on time, in style, and with the utmost convenience.
            </p>
            <p className="text-lg text-gray-700">
              In this detailed guide, we'll walk you through the options for Mumbai to Belgaon cab services, including how to book, the best routes, scenic stops, pricing, and much more. So, whether you're looking to book a cab for a one-way journey, roundtrip, or airport transfer, Aimcab has you covered!
            </p>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Oneway Cab Service</h3>
              <p className="text-gray-700">
                Our oneway cab service from Mumbai to Belgaon is perfect for those who need a single journey without a return trip. This service is ideal for business travelers, solo travelers, or anyone who prefers a straightforward, no-hassle ride.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Roundtrip Cab Service</h3>
              <p className="text-gray-700">
                If you need to return to Mumbai after your stay in Belgaon, our roundtrip cab service is the best option. This service ensures that you can easily book a return trip along with your initial ride.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Airport Pickup & Drop</h3>
              <p className="text-gray-700">
                For those arriving or departing from the airports in either Mumbai or Belgaon, our airport pickup and drop service offers a seamless experience.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'booking' && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Book Online via Website</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Visit our booking page</li>
                <li>Select your desired cab type</li>
                <li>Enter pickup and drop-off locations</li>
                <li>Choose one-way or roundtrip</li>
                <li>Confirm booking and payment</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Book On Call</h3>
              <p className="text-gray-700">
                Call our customer support team for direct assistance with your booking. Our staff will guide you through the process and answer any questions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Book through App</h3>
              <p className="text-gray-700">
                Use our mobile app for a personalized booking experience, real-time tracking, and secure payments.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'route' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Route Information</h3>
              <p className="text-gray-700 mb-4">
                The most common route from Mumbai to Belgaon is via NH4 and NH 748, which are well-maintained highways that ensure smooth and fast travel. The total journey typically takes around 8 to 10 hours.
              </p>
              <h4 className="font-bold mb-2">Scenic Views:</h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Western Ghats</li>
                <li>Tamhini Ghat</li>
                <li>Pune and its Countryside</li>
                <li>Satara and its Famous Views</li>
                <li>North Karnataka Landscape</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Travel Tips</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Drive Time: 9-12 hours</li>
                <li>Best Time to Travel: Early morning</li>
                <li>Food Stops: Local dhabas and food joints</li>
                <li>Must-try: Misal Pav, Vada Pav, Puran Poli</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'attractions' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Places to Visit</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Lonavala and Khandala</li>
                <li>Pune</li>
                <li>Kolhapur</li>
                <li>Satara</li>
                <li>Gokak Falls</li>
                <li>Belgaon Fort</li>
                <li>Kamala Basti</li>
                <li>Kittur Fort</li>
                <li>Unkal Lake</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Activities in Belgaon</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Explore Belgaon Fort</li>
                <li>Boat Ride at Unkal Lake</li>
                <li>Visit Gokak Falls</li>
                <li>Explore Local Markets</li>
                <li>Visit Kittur Fort</li>
                <li>Try Kolhapuri Cuisine</li>
                <li>Tour Kamala Basti</li>
                <li>Visit Bhimgad Wildlife Sanctuary</li>
                <li>Visit Military Mahadeva Temple</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Cab Fare & Pricing</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cab Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (₹/KM)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Sedan (Dzire, Etios)</td>
                    <td className="px-6 py-4 whitespace-nowrap">₹11/km</td>
                    <td className="px-6 py-4 whitespace-nowrap">Budget-friendly travel</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">SUV (Ertiga, Xylo)</td>
                    <td className="px-6 py-4 whitespace-nowrap">₹14/km</td>
                    <td className="px-6 py-4 whitespace-nowrap">Family trips & extra luggage space</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Luxury (Innova Crysta)</td>
                    <td className="px-6 py-4 whitespace-nowrap">₹18/km</td>
                    <td className="px-6 py-4 whitespace-nowrap">Premium comfort & business travel</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Tempo Traveller</td>
                    <td className="px-6 py-4 whitespace-nowrap">₹25/km</td>
                    <td className="px-6 py-4 whitespace-nowrap">Group trips & office outings</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <h4 className="font-bold mb-2">Additional Charges:</h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Toll and parking are excluded</li>
                <li>No waiting charges</li>
                <li>No kilometer limit</li>
                <li>Driver's allowance is included</li>
                <li>No night halt charges</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">How can I book a cab from Mumbai to Belgaon?</h4>
                <p className="text-gray-700">You can easily book a cab from Mumbai to Belgaon via our website, over the phone, or through our mobile app.</p>
              </div>
              <div>
                <h4 className="font-bold">What is the fare for a Mumbai to Belgaon cab?</h4>
                <p className="text-gray-700">The fare depends on the type of vehicle you choose. Our prices start at ₹11/km for budget sedans.</p>
              </div>
              <div>
                <h4 className="font-bold">Is there a limit on the kilometers I can travel?</h4>
                <p className="text-gray-700">No, there is no limit on the kilometers for your journey.</p>
              </div>
              <div>
                <h4 className="font-bold">Do you offer roundtrip services?</h4>
                <p className="text-gray-700">Yes, we offer roundtrip services for both business and leisure trips.</p>
              </div>
              <div>
                <h4 className="font-bold">How can I track my ride?</h4>
                <p className="text-gray-700">You can track your ride in real-time using our mobile app, or you can contact our customer support team for updates.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Why Choose Aimcab Section */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Why Choose Aimcab</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Always Neat & Clean Cabs</h3>
              <p>We ensure that all our vehicles are meticulously cleaned and sanitized</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">On-Time Guarantee</h3>
              <p>We value your time and ensure punctual service</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">GPS Tracking</h3>
              <p>Every cab is equipped with GPS tracking for your peace of mind</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="text-gray-700 mb-6">
          Since 2001, Aimcab has been a trusted name in the Indian cab service industry. Based in Pune, we operate a fleet of over 50 personal cabs and have a network of 500+ registered cabs across India.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Key Highlights</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>50+ personal cabs across India</li>
              <li>500+ registered cabs in our network</li>
              <li>2,00,000+ happy customers</li>
              <li>3,000+ successful outstation trips</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To provide reliable, safe, and comfortable intercity cab services that prioritize customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}