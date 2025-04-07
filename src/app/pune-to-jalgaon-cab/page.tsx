import React from 'react';
import Head from 'next/head';
import BookingForm from '../../components/BookingForm';

const page = () => {
  return (
    <>
      <div>
        <Head>
        <title>Pune to Jalgaon Cab | Affordable & Reliable Taxi</title>
      <meta name="description" content="Book Pune to Jalgaon cab services with Aim Cab. Enjoy safe, affordable, and comfortable rides with professional drivers. 24/7 service available." />
      <link rel="canonical" href="https://aimcab.com/pune-to-jalgaon-cab" />
      <meta name="author" content="Aim Cab" />
      <meta name="keywords" content="Pune To Jalgaon Cab, Pune To Jalgaon Cab Services, Cab Services From Pune To Jalgaon, Pune To Jalgaon Cab Services charges, Best Cab Services Pune To Jalgaon" />
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
        Pune to Jalgaon Cab Services – Best & Affordable Taxi Booking
        </h2>

        <BookingForm />

        {/* Service Description */}
        <section className="mt-6 p-6">
          <h3 className="text-2xl font-bold">Book Pune to Jalgaon Cab at the Best Price</h3>
          <p className="mt-4 text-lg">
          Looking for a comfortable and affordable Pune to Jalgaon cab service? Aim Cab provides reliable taxi services at the lowest market price, ensuring a smooth and hassle-free travel experience. Whether you’re traveling for business, leisure, or personal needs, our well-maintained cabs and professional drivers guarantee a safe and enjoyable ride.
          </p>
        </section>

        {/* Why Choose Aim Cab */}
        <section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">Why Choose Aim Cab for Pune to Jalgaon Travel?</h4>
  <ul className="mt-4 text-lg list-disc pl-6">
    <li><strong>Affordable Pricing:</strong> Get the best rates starting from just ₹11/km, making your trip budget-friendly.</li>
    <li><strong>Wide Range of Vehicles:</strong> Choose from hatchbacks, sedans, SUVs, and luxury cars.</li>
    <li><strong>Experienced Drivers:</strong> Our drivers are trained professionals who ensure a safe and smooth journey.</li>
    <li><strong>Door-to-Door Service:</strong> Enjoy pick-up and drop-off at your preferred location.</li>
    <li><strong>24/7 Availability:</strong> Book anytime, anywhere with our round-the-clock service.</li>
    <li><strong>One-Way & Round Trip Options:</strong> We provide flexible booking options as per your travel needs.</li>
  </ul>
</section>

{/* Cab Service Charges */}
<section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">Pune to Jalgaon Cab Service Charges</h4>
  <p className="mt-4 text-lg">
    Our pricing is completely transparent with no hidden charges. The total fare depends on factors such as the type of vehicle selected, the distance traveled, and any additional services requested. Book your Pune to Jalgaon taxi today for an economical and hassle-free ride.
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
        <td className="border border-gray-300 p-2">Hatchback</td>
        <td className="border border-gray-300 p-2">₹2999</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Sedan</td>
        <td className="border border-gray-300 p-2">₹3499</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">SUV</td>
        <td className="border border-gray-300 p-2">₹4499</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">Luxury Car</td>
        <td className="border border-gray-300 p-2">₹7999</td>
      </tr>
    </tbody>
  </table>
</section>

{/* Reliable & Convenient Cab Services */}
<section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">Cab Services from Pune to Jalgaon - Reliable & Convenient</h4>
  <p className="mt-4 text-lg">
    Aim Cab provides seamless travel experiences with top-rated cab services from Pune to Jalgaon. Our fleet includes well-maintained cars to cater to different travel needs. Whether you need a sedan for solo travel, an SUV for a family trip, or a luxury car for a premium experience, we have you covered.
  </p>
</section>

{/* Places to Visit */}
<section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">Places to Visit on the Pune to Jalgaon Route</h4>
  <ul className="mt-4 text-lg list-disc pl-6">
    <li><strong>Shirdi - The Land of Sai Baba:</strong> A famous pilgrimage site where thousands of devotees visit Sai Baba’s temple for blessings.</li>
    <li><strong>Ajanta Caves - A UNESCO World Heritage Site:</strong> Known for its exquisite Buddhist rock-cut caves featuring paintings and sculptures.</li>
    <li><strong>Ellora Caves - Majestic Rock-Cut Architecture:</strong> Showcasing breathtaking rock-cut temples and monasteries.</li>
    <li><strong>Trimbakeshwar Temple - One of the 12 Jyotirlingas:</strong> A significant pilgrimage destination dedicated to Lord Shiva.</li>
  </ul>
</section>

{/* Best Cab Services */}
<section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">Best Cab Services from Pune to Jalgaon</h4>
  <ul className="mt-4 text-lg list-disc pl-6">
    <li><strong>Neat & Clean Cabs</strong> with well-maintained interiors.</li>
    <li><strong>Free Water Bottles & Snacks</strong> for long journeys.</li>
    <li><strong>Experienced & Courteous Drivers</strong> who prioritize your safety.</li>
  </ul>
</section>

{/* About Aim Cab */}
<section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">About Aim Cab</h4>
  <ul className="mt-4 text-lg list-disc pl-6">
    <li>Established in 2001, bringing over two decades of experience.</li>
    <li>50+ Personal Cabs operating across India.</li>
    <li>500+ Registered Cabs in our extensive network.</li>
    <li>2,00,000+ Happy Customers who trust our services.</li>
    <li>3,000+ Outstation Trips successfully completed.</li>
  </ul>
</section>

{/* FAQs */}
<section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">FAQs - Pune to Jalgaon Cab Services</h4>
  <ol className="mt-4 text-lg list-decimal pl-6">
    <li><strong>What types of cabs are available for this route?</strong> We provide hatchbacks, sedans, SUVs, and luxury vehicles.</li>
    <li><strong>Can I book a one-way cab from Pune to Jalgaon?</strong> Yes, Aim Cab offers both one-way and round-trip cab services.</li>
    <li><strong>Are there any night-time charges?</strong> A minimal night-time charge may apply for late-night travel bookings.</li>
    <li><strong>How long does the journey from Pune to Jalgaon take?</strong> The approximate travel time is 7 to 8 hours.</li>
    <li><strong>Is there an option for multiple stopovers during the journey?</strong> Yes, we offer customized travel plans with multiple stopovers on request.</li>
    <li><strong>Are your fares inclusive of tolls and parking charges?</strong> No, tolls and parking charges are additional.</li>
    <li><strong>How do I pay for my cab booking?</strong> We accept cash, online payments, UPI, and all major credit/debit cards.</li>
    <li><strong>Do I get a professional driver for the trip?</strong> Yes, our well-trained and experienced drivers ensure a smooth journey.</li>
    <li><strong>What if I need to cancel my booking?</strong> We offer a flexible cancellation policy with minimal charges.</li>
    <li><strong>How can I book a Pune to Jalgaon cab with Aim Cab?</strong> Visit <a href="https://aimcab.com" className="text-blue-500 underline">aimcab.com</a> or call us to confirm your ride.</li>
  </ol>
</section>

{/* Call to Action */}
<section className="mt-6 p-6">
  <h4 className="text-2xl font-bold">Book Your Pune to Jalgaon Cab Today!</h4>
  <p className="mt-4 text-lg">
    Experience the best Pune to Jalgaon cab services with Aim Cab. Enjoy a comfortable, reliable, and affordable journey with us. Book your cab now and travel with ease!
  </p>
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
