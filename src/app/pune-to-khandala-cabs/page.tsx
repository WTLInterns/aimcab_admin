"use client"
import Head from "next/head";
import BookingForm from "../../components/BookingForm";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Page = () => {
   const headingRef = useRef(null);
      const paragraphRef = useRef(null);
      const buttonsRef = useRef(null);
    
      useEffect(() => {
        // Create a timeline for sequential animations
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        
        // Animate elements one by one
        tl.from(headingRef.current, {
          x: -50,
          opacity: 0,
          duration: 0.8
        })
        .from(paragraphRef.current, {
          x: -50,
          opacity: 0,
          duration: 0.6
        }, "+=0.2") // starts 0.2s after previous animation ends
      }, []);
  return (
    <>
      <Head>
        <title>Pune to Khandala Cabs – Book Your Ride with Aim Cab</title>
        <meta
          name="description"
          content="Best Pune to Khandala Cabs for a Hassle-Free Journey. Looking for a Pune to Khandala cab service that ensures comfort, affordability, and reliability? Book your ride with Aim Cab."
        />
        <link rel="canonical" href="https://aimcab.com/Pune-to-Khandala-Cabs" />
        <meta name="author" content="Aim Cab" />
        <meta
          name="keywords"
          content="pune to khandala cabs, pune to khandala taxi, khandala cab, cab booking in pune, pune to khandala one way cab, pune to khandala cab fare, pune to khandala travel"
        />
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

        <h2 className="text-3xl font-bold mt-4 text-center">
          Pune to Khandala Cabs – Book Your Ride with Aim Cab
        </h2>

        <BookingForm />

        {/* Best Cab Service Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-extrabold text-[#76453B]">
            🚖 Pune to Khandala Cabs – Book Your Ride with Aim Cab
          </h2>
          <p className="mt-4 text-lg bg-white p-4 rounded-lg shadow-sm">
            Best Pune to Khandala Cabs for a Hassle-Free Journey. Looking for a Pune to Khandala cab service that ensures comfort, affordability, and reliability? <strong className="text-blue-600">Aim Cab</strong> is your trusted travel partner, offering the best cab services at an unbeatable price. Whether you’re traveling for leisure, a weekend getaway, or a business trip, we provide seamless Pune to Khandala cab services to cater to all your travel needs.
          </p>
        </section>

        {/* Why Choose Aim Cab Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-blue-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">
            🏆 Why Choose Aim Cab for Your Pune to Khandala Trip?
          </h3>
          <p className="mt-4 text-lg bg-blue-50 p-4 rounded-lg">
            With over <span className="text-blue-600 font-bold">2,00,000+ happy customers</span>, Aim Cab is your trusted travel partner. Here’s why we are the best choice for your Pune to Khandala trip:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Affordable Pricing
              </h5>
              <p className="ml-6">Get the lowest Pune to Khandala cab fare, starting at just ₹11/km.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Well-Maintained Cabs
              </h5>
              <p className="ml-6">Neat and clean cabs for a comfortable journey.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Professional Drivers
              </h5>
              <p className="ml-6">Experienced, trained, and courteous drivers.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> On-Time Pickup & Drop
              </h5>
              <p className="ml-6">Punctual service to match your schedule.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Multiple Cab Options
              </h5>
              <p className="ml-6">Choose from Sedans, SUVs, and Luxury Cars.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Flexible Booking Options
              </h5>
              <p className="ml-6">
                Easy online booking at <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a>.
              </p>
            </div>
          </div>
          <p className="mt-6 text-xl font-bold text-center bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-lg text-[#76453B]">
            🚖 Experience a stress-free ride with Aim Cab!
          </p>
        </section>

        {/* Distance & Travel Time Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg">
          <h3 className="text-3xl font-extrabold text-[#76453B]">🚖 Pune to Khandala Distance & Travel Time</h3>
          <p className="mt-4 text-1xl">
            <strong>Distance:</strong> 70 km (approx.)<br />
            <strong>Travel Time:</strong> 1.5 to 2 hours (depending on traffic conditions)
          </p>
        </section>


        <section className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg">
          <h4 className="text-3xl font-extrabold text-[#76453B]">🚖 Pune to Khandala Cabs – Your Ideal Travel Option</h4>
          <p className="mt-4 text-lg">
          
Khandala, a popular hill station near Pune, is known for its scenic beauty, waterfalls, and historical forts. With Aim Cab, you can experience a smooth and hassle-free ride from Pune to Khandala at the best rates. We ensure a comfortable and safe journey for solo travelers, families, and corporate clients.


          </p>
        </section>

        {/* Cab Price & Fare Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg">
          <h3 className="text-3xl font-extrabold text-[#76453B]">🚖 Pune to Khandala Cab Price & Fare</h3>
          <p className="mt-4 text-lg">
            At Aim Cab, we believe in transparent pricing with no hidden charges. Our Pune to Khandala cab fare is highly competitive, ensuring affordability and quality service.
          </p>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white">
                  <th className="p-4 text-left">Cab Type</th>
                  <th className="p-4 text-center">Capacity</th>
                  <th className="p-4 text-center">Fare (Approx.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50">
                  <td className="p-4 font-medium">Sedan (Dzire, Etios)</td>
                  <td className="p-4 text-center">4 Seater</td>
                  <td className="p-4 text-center text-green-600 font-bold">₹1999/-</td>
                </tr>
                <tr className="hover:bg-blue-50 bg-gray-50">
                  <td className="p-4 font-medium">SUV (Ertiga, Xylo)</td>
                  <td className="p-4 text-center">6-7 Seater</td>
                  <td className="p-4 text-center text-green-600 font-bold">₹2999/-</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="p-4 font-medium">Luxury Cars</td>
                  <td className="p-4 text-center">4-6 Seater</td>
                  <td className="p-4 text-center text-green-600 font-bold">₹4999/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Khandala to Pune Cab Services Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-gray-300">
          <h3 className="text-3xl font-extrabold text-[#76453B]">🚖 Khandala to Pune Cab Services</h3>
          <p className="mt-4 text-lg">
            Looking for a return ride? Our Khandala to Pune cab service offers a smooth and relaxing journey back. Whether it’s a round trip or a one-way ride, Aim Cab ensures punctual pickups and stress-free travel.
          </p>
          <p className="mt-4 text-lg">
            <strong>Pune to Khandala Cab Service - One-Way & Round Trip</strong><br />
            We offer both one-way Pune to Khandala cabs and round-trip cab services at the best prices. Whether you need a drop-off or a full-day rental, we’ve got you covered.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">🚖 Key Features of Our Pune to Khandala Taxi Service</h3>
          <ul className="mt-4 text-lg space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span> <strong>24/7 Availability: </strong> ABook your ride anytime.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span><strong> Instant Booking Confirmation: </strong> AReceive quick booking confirmation via SMS & Email.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span> <strong>Multiple Payment Options:</strong> A Pay online or cash to the driver.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">👉</span><strong> Custom Travel Packages: </strong> ATailored rides for family trips and corporate travel.
            </li>
          </ul>
        </section>

        {/* Travel Guide Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-gray-300">
          <h3 className="text-3xl font-extrabold text-[#76453B]">🌟 Travel Guide - Must-Visit Places in Khandala</h3>
          <ul className="mt-4 text-lg list-disc ml-6 space-y-2">
            <li>
              <strong>Rajmachi Fort:</strong> A historical fort offering panoramic views of the Sahyadri ranges. A must-visit for trekking enthusiasts.
            </li>
            <li>
              <strong>Duke’s Nose:</strong> Ideal for adventure seekers, this spot is perfect for trekking and rock climbing.
            </li>
            <li>
              <strong>Bhushi Dam:</strong> A popular monsoon attraction, famous for its scenic views and waterfalls.
            </li>
            <li>
              <strong>Kune Falls:</strong> One of the highest waterfalls in Maharashtra, offering a mesmerizing sight during monsoons.
            </li>
            <li>
              <strong>Lohagad Fort:</strong> A historic fort with spectacular views and trekking opportunities.
            </li>
          </ul>
        </section>

        {/* FAQs Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">❓ FAQs – Pune to Khandala Cabs</h3>
          <div className="mt-4 space-y-4 text-lg">
            <div>
              <p className="font-semibold">1. How do I book a cab from Pune to Khandala?</p>
              <p>
                You can easily book a cab through our website <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a> or call us for instant booking.
              </p>
            </div>
            <div>
              <p className="font-semibold">2. What is the Pune to Khandala taxi fare?</p>
              <p>Our fares start at ₹1999 for a sedan and ₹2999 for an SUV.</p>
            </div>
            <div>
              <p className="font-semibold">3. How long does it take to travel from Pune to Khandala by cab?</p>
              <p>The journey takes approximately 1.5 to 2 hours, depending on traffic.</p>
            </div>
            <div>
              <p className="font-semibold">4. Are there any toll charges for Pune to Khandala cabs?</p>
              <p>Yes, toll charges are applicable as per government regulations.</p>
            </div>
            <div>
              <p className="font-semibold">5. Can I book a round-trip cab from Pune to Khandala?</p>
              <p>Yes, we offer both one-way and round-trip services at affordable prices.</p>
            </div>
            <div>
              <p className="font-semibold">6. Do you provide cab services from Khandala to Pune?</p>
              <p>Yes, our Khandala to Pune cab service ensures a comfortable return journey.</p>
            </div>
            <div>
              <p className="font-semibold">7. Are your cabs available 24/7?</p>
              <p>Yes, Aim Cab operates 24/7 to cater to your travel needs.</p>
            </div>
            <div>
              <p className="font-semibold">8. What types of cabs do you offer?</p>
              <p>We provide Sedans, SUVs, and Luxury cars based on your preference.</p>
            </div>
            <div>
              <p className="font-semibold">9. Do you provide cab services for outstation trips?</p>
              <p>Yes, we offer cab services for all major outstation destinations from Pune.</p>
            </div>
            <div>
              <p className="font-semibold">10. Is it safe to travel with Aim Cab?</p>
              <p>Absolutely! We prioritize passenger safety with verified drivers and well-maintained vehicles.</p>
            </div>
          </div>
        </section>

        {/* Book Your Cab Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-extrabold">📞 Book Your Pune to Khandala Cab Today!</h3>
          <p className="mt-4 text-xl">
            Experience the best travel service with Aim Cab.
          </p>
          <p className="mt-2 text-lg">
            Book your Pune to Khandala cab now and enjoy a hassle-free journey!<br />
            📞 Call Us: +91 91305454491<br />
            🌐 Visit Us: <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a><br />
            🚖 Your Travel, Our Responsibility!
          </p>
        </section>

        {/* About Aim Cab Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">📌 About Aim Cab</h3>
          <p className="mt-4 text-lg bg-indigo-50 p-4 rounded-lg">
            <span className="text-blue-600 font-bold">Aim Cab</span> was established in 2001, and we have built a strong reputation in the travel industry.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-2xl font-bold text-blue-600">50+</p>
              <p>Personal Cabs across India</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-2xl font-bold text-green-600">500+</p>
              <p>Registered Cabs in our network</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="text-2xl font-bold text-yellow-600">2,00,000+</p>
              <p>Happy Customers served</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="text-2xl font-bold text-purple-600">3,000+</p>
              <p>Outstation Trips completed</p>
            </div>
          </div>
          <p className="mt-6 text-lg font-semibold text-center bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
            With our commitment to safety, affordability, and quality service, we are the preferred choice for outstation travel in India.
            <span className="block text-green-600 font-bold mt-2">Book your ride now and travel worry-free!</span>
          </p>
        </section>

        {/* Footer */}
        <div>
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-6 sm:py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Additional footer columns can be added here */}
              </div>
            </div>
            <div className="container mx-auto px-4 text-center mb-4">
              <b className="text-yellow-400 text-lg transition-all duration-300 ease-in-out hover:text-white">
                POPULAR CITIES:
              </b>
              <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-2">
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
            <hr className="border-gray-300 my-8" />
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
            <hr className="border-gray-300 my-8" />
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
            <div className="container mx-auto px-4 text-center">
              <p className="transition-all duration-300 ease-in-out hover:text-green-200">
                &copy; {new Date().getFullYear()} Aim Cab. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
