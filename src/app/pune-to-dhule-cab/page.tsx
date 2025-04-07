import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';

const Page = () => {
  return (
    <>
      <Head>
      <title>Pune to Dhule Cab | Affordable & Safe Taxi Service</title>
      <meta name="description" content="Book Pune to Dhule cab services with Aim Cab for a hassle-free journey. Affordable fares, professional drivers & 24/7 service for a smooth travel experience." />
      <link rel="canonical" href="https://aimcab.com/pune-to-dhule-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Dhule Cab, Pune To Dhule Cab Services, Cab Services From Pune To Dhule, Pune To Dhule Cab Services charges, Best Cab Services Pune To Dhule" />
      <meta name="robots" content="index, follow" />

      </Head>

      <div>
        {/* Header */}
          <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] font-semibold text-yellow-500 py-12 md:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            AIMCAB Pune Routes
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Book your cab and explore Pune with ease
          </p>
          
          {/* <div 
            ref={buttonsRef}
            className="flex justify-center space-x-4"
          >
            <button className="bg-white text-[#76453B] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book Now
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#76453B] transition-all duration-300">
              Call Us
            </button>
          </div> */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
      </header>

        {/* Main Title */}
        <h2 className="text-3xl font-bold mt-4 text-center">
        Pune to Dhule Cab Services – Book Your Ride with Aim Cab
        </h2>

        <BookingForm />

        {/* Service Description */}
        <section className="mt-6 p-4 sm:p-6">
          <h3 className="text-2xl font-bold">
            🚖 Pune to Dhule Cab Services - Book Your Ride with Aim Cab
          </h3>
          <p className="mt-4 text-lg">
          Looking for a reliable and affordable Pune to Dhule cab service? Aim Cab offers top-notch taxi services with the lowest market price and exceptional comfort. Whether you're traveling for business, leisure, or a family trip, our well-maintained cabs and professional drivers ensure a smooth and enjoyable ride.
          </p>
        </section>

        {/* Why Choose Aim Cab */}
        <section className="mt-6 p-4 sm:p-6">
  <h4 className="text-2xl font-bold">
    🏆 Why Choose Aim Cab for Pune to Dhule Travel?
  </h4>
  <ul className="mt-4 text-lg list-disc pl-6">
    <li>✅ <strong>Affordable Pricing</strong> – Get the best rates starting from just ₹11/km, ensuring a budget-friendly trip.</li>
    <li>✅ <strong>Wide Fleet of Vehicles</strong> – Choose from hatchbacks, sedans, SUVs, and luxury cars to suit your travel needs.</li>
    <li>✅ <strong>Experienced Drivers</strong> – Our drivers are trained professionals ensuring a safe journey.</li>
    <li>✅ <strong>Door-to-Door Service</strong> – Enjoy pick-up and drop-off at your preferred location.</li>
    <li>✅ <strong>24/7 Availability</strong> – Book anytime, anywhere with our round-the-clock service.</li>
    <li>✅ <strong>One-Way & Round Trip Options</strong> – Flexible booking for your travel needs.</li>
    <li>✅ <strong>Hassle-Free Booking</strong> – Easy online booking via our website <a href="https://aimcab.com" className="text-blue-500 underline">aimcab.com</a></li>
  </ul>
</section>

{/* Pricing Section */}
<section className="mt-6 p-4 sm:p-6">
  <h4 className="text-2xl font-bold">🚖 Pune to Dhule Cab Service Charges</h4>
  <p className="mt-4 text-lg">Our pricing is transparent with no hidden charges. The total fare depends on:</p>
  <ul className="mt-4 text-lg list-disc pl-6">
    <li>✅ Type of vehicle selected</li>
    <li>✅ Distance traveled</li>
    <li>✅ Additional services requested</li>
  </ul>
  <p className="mt-4">Book your Pune to Dhule taxi today for a hassle-free ride and the best market rates.</p>
</section>

{/* Travel Route & Distance */}
<section className="mt-6 p-4 sm:p-6">
  <h4 className="text-2xl font-bold">🛣️ Pune to Dhule Travel Route & Distance</h4>
  <p className="mt-4 text-lg">
    The journey from Pune to Dhule spans approximately 330 kilometers, and depending on traffic conditions and road quality, it typically takes 6 to 7 hours by car. The route primarily follows NH60, ensuring a smooth and direct ride. Our experienced drivers ensure you have a safe and comfortable journey with well-planned stops along the way.
  </p>
</section>

{/* Popular Travel Destinations */}
<section className="mt-6 p-4 sm:p-6">
  <h4 className="text-2xl font-bold">🏞️ Popular Travel Destinations on Pune to Dhule Route</h4>
  <ul className="mt-4 text-lg list-disc pl-6">
    <li><strong>Shirdi</strong> – Famous for the Sai Baba Temple, a revered pilgrimage destination.</li>
    <li><strong>Ellora Caves</strong> – A UNESCO World Heritage site showcasing ancient rock-cut architecture.</li>
    <li><strong>Trimbakeshwar Temple</strong> – A must-visit for spiritual seekers and Lord Shiva devotees.</li>
    <li><strong>Ajanta Caves</strong> – Renowned for their breathtaking Buddhist paintings and sculptures.</li>
    <li><strong>Nashik Vineyards</strong> – Enjoy wine tasting and scenic vineyard tours in Nashik.</li>
    <li><strong>Bhimashankar Temple</strong> – One of the 12 Jyotirlingas of Lord Shiva, surrounded by lush greenery.</li>
  </ul>
</section>

{/* Cab Options */}
<section className="mt-6 p-4 sm:p-6">
  <h4 className="text-2xl font-bold">🚖 Best Cab Services from Pune to Dhule</h4>
  <p className="mt-4 text-lg">Aim Cab provides seamless travel experiences with top-rated cab services. Our fleet includes well-maintained cars to meet diverse travel requirements.</p>
  <h4 className="mt-6 text-xl font-bold">🚗 Types of Cabs Available</h4>
  <ul className="mt-4 text-lg list-disc pl-6">
    <li><strong>Hatchback (Swift, Alto, etc.)</strong> – Budget-friendly option for solo travelers and small groups.</li>
    <li><strong>Sedan (Dzire, Etios, etc.)</strong> – Comfortable rides with extra space for luggage.</li>
    <li><strong>SUV (Ertiga, Innova, etc.)</strong> – Perfect for families and group travel with spacious seating.</li>
    <li><strong>Luxury Cars (Mercedes, BMW, etc.)</strong> – Premium travel experience for business trips and special occasions.</li>
  </ul>
</section>

{/* Food & Rest Stops */}
<section className="mt-6 p-4 sm:p-6">
  <h4 className="text-2xl font-bold">🍽️ Food & Rest Stops on Pune to Dhule Route</h4>
  <ul className="mt-4 text-lg list-disc pl-6">
    <li><strong>Sai Prasad Restaurant (Near Shirdi)</strong> – Famous for authentic Maharashtrian Thali.</li>
    <li><strong>Manas Resort (Igatpuri)</strong> – Ideal for a relaxing stopover with scenic views.</li>
    <li><strong>Hotel Panchavati (Nashik)</strong> – Delicious vegetarian cuisine and quick service.</li>
    <li><strong>Shree Datta Snacks (Highway Stop)</strong> – Must-try Misal Pav and Vada Pav for a local taste.</li>
    <li><strong>VITS Hotel (Near Dhule)</strong> – Great option for a final stop before reaching your destination.</li>
  </ul>
</section>

{/* FAQ Section */}
<section className="mt-6 p-4 sm:p-6">
  <h4 className="text-2xl font-bold">❓ FAQs - Frequently Asked Questions</h4>
  <ol className="mt-4 text-lg pl-6">
    <li><strong>1. What types of cabs are available for this route?</strong> Hatchbacks, sedans, SUVs, and luxury vehicles.</li>
    <li><strong>2. Do you offer one-way and round-trip options?</strong> Yes, we offer both.</li>
    <li><strong>3. Is there a night-time charge?</strong> A minimal charge applies for late-night travel.</li>
    <li><strong>4. How can I book a Pune to Dhule cab?</strong> Book online at <a href="https://aimcab.com" className="text-blue-500 underline">aimcab.com</a>.</li>
    <li><strong>5. What is the estimated time for the journey?</strong> Around 6 to 7 hours.</li>
    <li><strong>6. Are there any hidden charges?</strong> No, we follow a transparent pricing model.</li>
    <li><strong>7. Will I get an experienced driver?</strong> Yes, all drivers are professionals.</li>
    <li><strong>8. Can I customize my trip with extra stops?</strong> Yes, additional charges may apply.</li>
    <li><strong>9. Do you provide special discounts?</strong> Yes, for regular and corporate customers.</li>
    <li><strong>10. Is there a cancellation policy?</strong> Yes, full refund for cancellations 24 hours in advance.</li>
  </ol>
</section>

{/* Booking Section */}
<section className="mt-6 p-4 sm:p-6">
  <h4 className="text-2xl font-bold">📞 Book Your Pune to Dhule Cab Today!</h4>
  <p className="mt-2 text-lg">Experience a stress-free and comfortable journey with Aim Cab.</p>
  <p className="mt-2 text-lg font-bold">📞 Call Us: <a href="tel:+918166922792" className="text-blue-600">+91 8166922792</a></p>
  <p className="text-lg font-bold">🌐 Visit: <a href="https://aimcab.com" target="_blank" className="text-blue-600 underline">aimcab.com</a></p>

          <br></br>
          <strong><p>Book now and enjoy a seamless Pune to Dhule cab service with Aim Cab!</p></strong>
          <div>
            {/* Redesigned Responsive Footer */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-6 sm:py-8">
              {/* Footer content area */}
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                  {/* You can add additional footer columns here if needed */}
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
        </section>
      </div>
    </>
  );
};

export default Page;
