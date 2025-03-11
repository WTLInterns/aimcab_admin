import React from 'react';

const Page = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-green-500 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">AIMCAB Pune Routes</h1>
        <p className="mt-2 text-lg">Book your cab and explore Pune with ease</p>
      </header>

      {/* Main Content */}
      <h2 className="text-3xl font-bold mt-4 text-center">
        Pune to Solapur Cab - Affordable & Reliable Taxi Service
      </h2>

      <div className="mt-4 p-4">
        🚖 <strong>Best Pune to Solapur Cab Service at Lowest Price</strong>
        <p>
          Looking for a Pune to Solapur cab that is both affordable and comfortable? Aim Cab offers the best taxi service at just ₹11/km, ensuring a smooth, safe, and hassle-free journey with professional drivers and well-maintained vehicles.
        </p>
        <ul className="list-disc ml-6">
          <li>👉 <strong>Lowest Price Guaranteed</strong> - Starting from ₹11/km</li>
          <li>👉 <strong>Safe & Comfortable Rides</strong> - Professional drivers & sanitized cabs</li>
          <li>👉 <strong>24/7 Availability</strong> - Book anytime, anywhere</li>
          <li>👉 <strong>Instant Online Booking</strong> - Quick confirmation at aimcab.com</li>
          <li>👉 <strong>Transparent Pricing</strong> - No hidden charges</li>
        </ul>
      </div>

      {/* Why Choose Aim Cab */}
      <div className="mt-4 p-4">
        🏆 <strong>Why Choose Aim Cab for Pune to Solapur Taxi Service?</strong>
        <p>
          With over 2 lakh happy customers, Aim Cab is a trusted name in outstation travel. Here’s why we are the best Pune to Solapur cab service:
        </p>
        <ul className="list-disc ml-6">
          <li>👉 <strong>Timely & Reliable Service</strong> - We value your time and ensure on-time pick-up and drop-off.</li>
          <li>👉 <strong>Affordable & Transparent Pricing</strong> - Get the best Pune to Solapur cab price with no hidden charges.</li>
          <li>👉 <strong>Variety of Car Options</strong> - Choose from Sedans, SUVs, Luxury Cars & Tempo Travellers.</li>
          <li>👉 <strong>Flexible Travel Plans</strong> - One-way & round-trip cabs available.</li>
          <li>👉 <strong>Multiple Payment Methods</strong> - Pay via cash, UPI, or online payment.</li>
          <li>👉 <strong>24/7 Customer Support</strong> - Assistance available anytime.</li>
        </ul>
        🚖 Experience a stress-free ride with Aim Cab!
      </div>

      {/* Cab Fare & Booking Details */}
      <div className="mt-4 p-4">
        🚖 <strong>Pune to Solapur Cab Fare & Booking Details</strong>
        
        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">Cab Type</th>
                <th className="border border-gray-400 px-4 py-2">Price (₹/KM)</th>
                <th className="border border-gray-400 px-4 py-2">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Sedan (Dzire, Etios)</td>
                <td className="border border-gray-400 px-4 py-2">₹11/km</td>
                <td className="border border-gray-400 px-4 py-2">Budget-friendly travel</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 px-4 py-2">SUV (Ertiga, Xylo)</td>
                <td className="border border-gray-400 px-4 py-2">₹14/km</td>
                <td className="border border-gray-400 px-4 py-2">Family trips & extra luggage space</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Luxury (Innova Crysta)</td>
                <td className="border border-gray-400 px-4 py-2">₹18/km</td>
                <td className="border border-gray-400 px-4 py-2">Premium comfort & business travel</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 px-4 py-2">Tempo Traveller</td>
                <td className="border border-gray-400 px-4 py-2">₹25/km</td>
                <td className="border border-gray-400 px-4 py-2">Group trips & office outings</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Estimated Fare */}
        <h3 className="mt-4 text-lg font-bold">💰 Estimated Pune to Solapur Taxi Fare</h3>
        <ul className="list-disc ml-6">
          <li>🚖 <strong>Sedan:</strong> ₹3,000 - ₹3,500</li>
          <li>🚖 <strong>SUV:</strong> ₹4,000 - ₹4,500</li>
          <li>🚖 <strong>Luxury:</strong> ₹5,500 - ₹6,500</li>
        </ul>
        📍 Toll charges are extra and may vary based on route conditions.
      </div>

      {/* Distance & Route Details */}
      <div className="mt-4 p-4">
        <p>🛣️ <strong>Pune to Solapur Distance & Route Details</strong></p>
        <p>⏳ Travel Duration: Approximately 4.5 to 5.5 hours depending on traffic.</p>
        <p>🛣️ Distance by Road: 250 km via NH-65.</p>
        <p>💰 Toll Charges: ₹300-₹400 approx.</p>
        <p>🚲 Travel Tip: Start early morning to avoid traffic congestion.</p>
        <p>📍 <strong>Pune to Solapur Distance Overview</strong></p>
        <ul className="list-disc ml-6">
          <li>Total Distance: 250 km</li>
          <li>Best Route: Pune-Solapur Highway (NH-65)</li>
          <li>Time Taken: 4.5 to 5.5 hours</li>
          <li>Alternative Routes: Pune via Baramati to Solapur</li>
          <li>Recommended Stopovers: Indapur, Tembhurni</li>
        </ul>
      </div>

      {/* Travel Guide */}
      <div className="mt-4 p-4">
        🏖️ <strong>Pune to Solapur Travel Guide</strong>
        
        {/* Attractions */}
        <h3 className="mt-4 text-lg font-bold">🌆 Top Attractions in Solapur</h3>
        <ul className="list-disc ml-6">
          <li>🏛️ <strong>Pandharpur Temple</strong> – A famous pilgrimage site dedicated to Lord Vitthal.</li>
          <li>🛕 <strong>Akkalkot Swami Samarth Temple</strong> – A spiritual retreat known for its divine ambiance.</li>
          <li>🏰 <strong>Solapur Bhuikot Fort</strong> – A historic site reflecting the Maratha legacy.</li>
          <li>🌊 <strong>Hipparga Lake</strong> – A beautiful scenic spot for relaxation and nature lovers.</li>
          <li>🦅 <strong>Great Indian Bustard Sanctuary</strong> – A must-visit for wildlife enthusiasts.</li>
        </ul>

        {/* Beaches */}
        <h3 className="mt-4 text-lg font-bold">🏖️ Beaches Near Solapur</h3>
        <p>
          Although Solapur does not have beaches, you can visit coastal regions like 
          <strong> Tarkarli Beach</strong> and <strong>Ganpatipule Beach</strong> for a relaxing getaway.
        </p>
      </div>
      <strong>🛣️ Pune to Solapur Distance & Route Details
        </strong>
        <p>⏳ <strong>Travel Duration </strong>: Approximately 4.5 to 5.5 hours depending on traffic.</p>
        <p><strong>🛣️ Distance by Road: </strong> 250 km via NH-65.
        <p><strong>💰 Toll Charges:</strong>₹300-₹400 approx.
        </p>
       </p>
       <p><strong>🚲 Travel Tip: </strong>Start early morning to avoid traffic congestion.
       </p>
       <br />
       <strong>📍 Pune to Solapur Distance Overview
       </strong>
       <ul>
      <li><strong>Total Distance:</strong> 250 km</li>
      <li><strong>Best Route:</strong> Pune-Solapur Highway (NH-65)</li>
      <li><strong>Time Taken:</strong> 4.5 to 5.5 hours</li>
      <li><strong>Alternative Routes:</strong> Pune via Baramati to Solapur</li>
      <li><strong>Recommended Stopovers:</strong> Indapur, Tembhurni</li>
    </ul>
    <br />
    <section>
    <strong>❓ Frequently Asked Questions (FAQs)</strong>
    <br />
  </section>
  
  <section>
    <h4><strong>1. What is the Pune to Solapur cab fare?</strong></h4>
    <p>The fare starts from ₹3,000 for a sedan and varies based on the car type and trip duration.</p>
  </section>
  <br />
  <section>
    <h4><strong>2. How long does it take to travel from Pune to Solapur by taxi?</strong></h4>
    <p>The journey typically takes 4.5 to 5.5 hours, depending on road conditions.</p>
  </section>
  <br />
  <section>
    <h4><strong>3. Are toll charges included in the Pune to Solapur taxi fare?</strong></h4>
    <p>No, toll charges are extra and must be paid separately.</p>
  </section>
  <br />
  <section>
    <h4><strong>4. What cab options are available for Pune to Solapur travel?</strong></h4>
    <p>We offer Sedan, SUV, Luxury Cars, and Tempo Travellers.</p>
  </section>
  <br />
  <section>
    <h4><strong>5. Is a one-way cab from Pune to Solapur available?</strong></h4>
    <p>Yes, we provide one-way cabs starting from ₹3,000.</p>
  </section>
  <br />
  <section>
    <h4><strong>6. Can I book a Solapur to Pune cab for a round trip?</strong></h4>
    <p>Yes, we offer flexible round-trip cabs.</p>
  </section>
  <br />
  <section>
    <h4><strong>7. What payment methods are accepted?</strong></h4>
    <p>We accept cash, UPI, and online payments.</p>
  </section>
  <br />
  <section>
    <h4><strong>8. Are your cabs sanitized and safe for travel?</strong></h4>
    <p>Yes, all our cabs are regularly sanitized for safety.</p>
  </section>
  <br />
  <section>
    <h4><strong>9. How can I book a Pune to Solapur cab?</strong></h4>
    <p>You can book instantly via our website <a href="https://aimcab.com" target="_blank">aimcab.com</a>.</p>
  </section>
  <br />
  <section>
    <h4><strong>10. Do you offer sightseeing packages in Solapur?</strong></h4>
    <p>Yes, we have customized sightseeing packages for tourists.</p>
  </section>
  <br />

  <br />
  <strong>📞 Book Your Pune to Solapur Cab Now!
  </strong>

  <p>
  🚖 Experience the Best Pune to Solapur Cab Service with Aim Cab. Get the lowest fares, professional drivers, and a hassle-free booking experience. Book your ride today at aimcab.com!
  </p>
  <br />
  <strong>🌐 About Aim Cab
  </strong>
  <p>Established in 2001, Aim Cab has been a trusted name in the travel industry, providing top-notch cab services across India.
  </p>
  <p>50+ Personal Cabs across India.
500+ Registered Cabs in our network.
<br />
2 Lakh+ Happy Customers served.
<br />
3,000+ Outstation Trips completed successfully.
<br />
</p>
<p>With our commitment to safety, affordability, and quality service, we are the preferred choice for outstation travel. Book now and travel with ease!
</p>
<br />
<strong>
🌟 Reliable & Punctual Service - Your time matters, and so do we! <br />
🚖 Diverse Fleet - Choose from Sedans, SUVs, Luxury Cars & Tempo Travellers

</strong>

        {/* Footer */}
        <div>
          {/* Redesigned Responsive Footer */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-6 sm:py-8">
            {/* Footer content area */}
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Additional footer columns can be added here */}
              </div>
            </div>

            {/* Popular Cities Section */}
            <div className="container mx-auto px-4 text-center mb-4">
              <b className="text-yellow-400 text-lg transition-all duration-300 ease-in-out hover:text-white">
                POPULAR CITIES:
              </b>
              <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-2">
                {/* Pune Button */}
                <a
                  href="/Pune"
                  className="relative inline-block px-8 sm:px-16 md:px-20 py-4 rounded-full 
                             bg-gradient-to-r from-blue-400 to-yellow-300 
                             text-gray-800 font-bold uppercase shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-105 hover:bg-gradient-to-r hover:from-green-300 hover:to-green-200 hover:shadow-lg hover:text-gray-900"
                >
                  Pune
                </a>

                {/* Mumbai Button */}
                <a
                  href="/Mumbai"
                  className="relative inline-block px-8 sm:px-16 md:px-20 py-4 rounded-full 
                             bg-gradient-to-r from-blue-400 to-yellow-300 
                             text-gray-800 font-bold uppercase shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 hover:shadow-lg hover:text-white"
                >
                  Mumbai
                </a>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300 my-8" />

            {/* Quick Links Section */}
            <div className="container mx-auto px-4 text-center mb-8">
              <b className="text-yellow-400 transition-all duration-300 ease-in-out hover:text-white">
                QUICK LINKS:
              </b>
              <div className="mt-2 flex flex-wrap justify-center">
                {[
                  "HOME",
                  "UPDATES",
                  "ABOUT",
                  "SERVICES",
                  "CONTACT US",
                  "CAREER",
                  "FAQ's",
                  "PRIVACY POLICY",
                  "TERMS & CONDITIONS",
                ].map((link, i) => (
                  <a
                    key={i}
                    href="/"
                    className="text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-black mx-2 mb-2 sm:mb-0"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300 my-8" />

            {/* Designed by Section */}
            <div className="container mx-auto px-4 text-center mb-8">
              <h4 className="text-yellow-400 transition-all duration-300 ease-in-out hover:text-white">
                DESIGNED BY
              </h4>
              <a
                href="https://cobaztech.com"
                target="_blank"
                className="text-white transition-all duration-300 ease-in-out font-semibold block mt-1 hover:text-black hover:scale-105"
              >
                COBAZTECH
              </a>
            </div>

            {/* Social Media Section */}
            <div className="container mx-auto px-4 text-center mt-6">
              <span className="flex justify-center flex-wrap">
                <a
                  href="https://wa.me/9130030054"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/whatsapp.png"
                    alt="WhatsApp"
                  />
                </a>
                <a
                  href="https://www.facebook.com/Aimcab"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/facebook.png"
                    alt="Facebook"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@AimCab"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/youtube.png"
                    alt="YouTube"
                  />
                </a>
                <a
                  href="https://twitter.com/aim_cab"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/twitter.png"
                    alt="Twitter"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/aim-cab-77356b208/"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/linked-in.png"
                    alt="LinkedIn"
                  />
                </a>
                <a
                  href="https://join.skype.com/invite/sRT2FTyb7d1H"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/skype.png"
                    alt="Skype"
                  />
                </a>
                <a
                  href="https://www.instagram.com/aimcabs/"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/instagram.png"
                    alt="Instagram"
                  />
                </a>
              </span>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="container mx-auto px-4 text-center">
            <p className="transition-all duration-300 ease-in-out hover:text-green-200">
              &copy; {new Date().getFullYear()} Aim Cab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
   
  );
};
export default Page;
