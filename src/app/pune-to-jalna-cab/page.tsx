import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';

const page = () => {
  return (
    <>
      <div>
        <Head>
        <title>Pune to Jalna Cab | Affordable & Reliable Taxi</title>
      <meta name="description" content="Book Pune to Jalna cab services with Aim Cab. Enjoy safe, affordable, and comfortable rides with professional drivers. 24/7 service available." />
      <link rel="canonical" href="https://aimcab.com/pune-to-jalna-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Jalna Cab, Pune To Jalna Cab Services, Cab Services From Pune To Jalna, Pune To Jalna Cab Services charges, Best Cab Services Pune To Jalna" />
      <meta name="robots" content="index, follow" />
        </Head>

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
        Pune to Jalna Cab Services – Book a Comfortable Ride with Aim Cab
        </h2>

        <BookingForm />

        {/* Service Description */}
        <section className="mt-6 p-6">
  <h3 className="text-2xl font-bold">Book Pune to Jalna Cab at the Best Price</h3>
  <p className="mt-4 text-lg">
    Looking for a reliable and affordable Pune to Jalna cab service? Aim Cab offers top-notch taxi services at the lowest market price, ensuring comfort and safety for your journey. Whether you're traveling for business, leisure, or a family trip, our well-maintained cabs and professional drivers provide a smooth and enjoyable ride.
  </p>
</section>

{/* Why Choose Aim Cab */}
<section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">Why Choose Aim Cab for Pune to Jalna Travel?</h4>
  <ul className="mt-4 text-lg list-disc pl-6">
    <li><strong>Affordable Pricing:</strong> Get the best rates starting from just ₹11/km, ensuring a budget-friendly trip.</li>
    <li><strong>Wide Fleet of Vehicles:</strong> Choose from hatchbacks, sedans, SUVs, and luxury cars.</li>
    <li><strong>Experienced Drivers:</strong> Our drivers are trained professionals ensuring a safe journey.</li>
    <li><strong>Door-to-Door Service:</strong> Enjoy pick-up and drop-off at your preferred location.</li>
    <li><strong>24/7 Availability:</strong> Book anytime, anywhere with our round-the-clock service.</li>
    <li><strong>One-Way & Round Trip Options:</strong> Flexible booking for your travel needs.</li>
  </ul>
</section>

{/* Cab Service Charges */}
<section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">Pune to Jalna Cab Service Charges</h4>
  <p className="mt-4 text-lg">
    Our Pune to Jalna cab service charges are competitive and transparent, with no hidden fees. The total fare depends on the type of vehicle selected, distance traveled, and additional services requested.
  </p>
  <table className="mt-4 w-full border-collapse border border-gray-300">
    <thead>
      <tr className="bg-gray-200">
        <th className="border border-gray-300 p-2">Cab Type</th>
        <th className="border border-gray-300 p-2">Fare (Approx.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 p-2">Hatchback (Indica, WagonR)</td>
        <td className="border border-gray-300 p-2">₹3,999</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Sedan (Swift Dzire, Toyota Etios)</td>
        <td className="border border-gray-300 p-2">₹4,499</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">SUV (Ertiga, Innova)</td>
        <td className="border border-gray-300 p-2">₹5,999</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Luxury (Innova Crysta, Fortuner)</td>
        <td className="border border-gray-300 p-2">₹7,999</td>
      </tr>
    </tbody>
  </table>
  <p className="mt-4 text-lg">Book your Pune to Jalna cab today and enjoy a comfortable, hassle-free journey.</p>
</section>

{/* Popular Travel Destinations */}
<section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">Popular Travel Destinations on Pune to Jalna Route</h4>
  <ul className="mt-4 text-lg list-disc pl-6">
    <li><strong>Shirdi - The Land of Sai Baba:</strong> A spiritual hub, Shirdi is home to the famous Sai Baba Temple, attracting devotees from across India.</li>
    <li><strong>Aurangabad - A Historical Gem:</strong> Known for its rich heritage, Aurangabad is famous for Bibi Ka Maqbara and the Ellora Caves, a UNESCO World Heritage site.</li>
    <li><strong>Ajanta Caves - A UNESCO World Heritage Site:</strong> Explore the stunning Ajanta Caves, known for their ancient Buddhist rock-cut sculptures and murals.</li>
    <li><strong>Jalna - A City with Cultural Heritage:</strong> Visit Moti Talab, Jalna Fort, and Guru Ganesh Tapodham, which showcase the city’s deep cultural and historical roots.</li>
  </ul>
</section>

{/* Best Cab Services */}
<section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">Best Cab Services Pune to Jalna</h4>
  <ul className="mt-4 text-lg list-disc pl-6">
    <li><strong>Neat & Clean Cabs:</strong> Comfortable and well-maintained vehicles.</li>
    <li><strong>Experienced Drivers:</strong> Skilled and professional drivers familiar with the Pune to Jalna route.</li>
    <li><strong>Transparent Pricing:</strong> No hidden charges, complete fare transparency.</li>
    <li><strong>Multiple Car Options:</strong> Choose a cab as per your travel needs.</li>
  </ul>
  <p className="mt-4 text-lg">Book your Pune to Jalna cab with Aim Cab today!</p>
</section>

{/* About Aim Cab */}
<section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">About Aim Cab</h4>
  <ul className="mt-4 text-lg list-disc pl-6">
    <li>Established in 2001, Aim Cab has been providing reliable taxi services for over two decades.</li>
    <li>50+ Personal Cabs operating across India.</li>
    <li>500+ Registered Cabs in our extensive network.</li>
    <li>2,00,000+ Happy Customers who trust our services.</li>
    <li>3,000+ Outstation Trips completed with customer satisfaction.</li>
  </ul>
  <p className="mt-4 text-lg">Aim Cab is your trusted travel partner, ensuring smooth and comfortable rides.</p>
</section>

{/* FAQs */}
<section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">FAQs - Pune to Jalna Cab Services</h4>
  <ol className="mt-4 text-lg list-decimal pl-6">
    <li><strong>What types of cabs are available for the Pune to Jalna route?</strong> We offer hatchbacks, sedans, SUVs, and luxury vehicles.</li>
    <li><strong>Do you offer one-way and round-trip options?</strong> Yes, we provide both one-way and round-trip cab services.</li>
    <li><strong>How long does it take to travel from Pune to Jalna by cab?</strong> Approximately 6 to 7 hours.</li>
    <li><strong>Are your drivers professional and experienced?</strong> Yes, all our drivers are highly trained and experienced.</li>
    <li><strong>Is there a night-time charge?</strong> A minimal charge applies for late-night travel.</li>
    <li><strong>Can I book a cab instantly?</strong> Yes, we provide instant booking options.</li>
    <li><strong>What are the payment options?</strong> Cash, UPI, credit/debit cards, and online payments.</li>
    <li><strong>Do you provide doorstep pick-up and drop-off?</strong> Yes, we offer a seamless door-to-door service.</li>
    <li><strong>Can I change or cancel my booking?</strong> Yes, as per our cancellation policy.</li>
    <li><strong>How can I contact Aim Cab?</strong> Call/WhatsApp <strong>+91 91305454491</strong> or visit <a href="https://aimcab.com" className="text-blue-500 underline">aimcab.com</a>.</li>
  </ol>
</section>

{/* Call to Action */}
<section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">Book Your Pune to Jalna Cab Today!</h4>
  <p className="mt-4 text-lg">Enjoy a safe, reliable, and budget-friendly journey with Aim Cab. Book now!</p>
  <p className="mt-4 text-lg"><strong>📞 Call/WhatsApp: +91 91305454491</strong></p>
  <p className="mt-4 text-lg"><strong>🌐 Visit: <a href="https://aimcab.com" className="text-blue-500 underline">aimcab.com</a></strong></p>
</section>


        
        {/* Redesigned Footer */}
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
            <div className="flex justify-center items-center space-x-6 mt-2">
              {/* Pune Button */}
              <a
                href="/Pune"
                className="relative inline-block px-20 py-4 rounded-full 
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
                className="relative inline-block px-20 py-4 rounded-full 
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
            <b className="text-yellow-400 transition-all duration-300 ease-in-out hover:text-white">QUICK LINKS:</b>
            <div className="mt-2 flex flex-wrap justify-center">
              {["HOME", "UPDATES", "ABOUT", "SERVICES", "CONTACT US", "CAREER", "FAQ's", "PRIVACY POLICY", "TERMS & CONDITIONS"].map((link, i) => (
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
    </>
  );
};

export default page;
