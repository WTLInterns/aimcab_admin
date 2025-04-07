import Head from "next/head";
import BookingForm from "../../components/BookingForm";

const Page = () => {
  return (
    <>
      <Head>
        <title>Pune to Lavasa Cab – Hassle-Free and Affordable Travel with Aim Cab</title>
        <meta
          name="description"
          content="If you are looking for a reliable and affordable Pune to Lavasa cab, Aim Cab offers the best travel experience. Whether you are traveling for leisure or business, our Pune to Lavasa cab booking service ensures a comfortable ride with trained drivers, well-maintained vehicles, and transparent pricing."
        />
        <link rel="canonical" href="https://aimcab.com/Pune-to-Lavasa-Cab" />
        <meta name="author" content="Aim Cab" />
        <meta
          name="keywords"
          content="pune to lavasa cab, lavasa taxi, lavasa cab booking, cab booking in pune, lavasa cab fare, lavasa travel"
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
          Pune to Lavasa Cab – Book Your Ride with Aim Cab
        </h2>

        <BookingForm />

        {/* Best Cab Service Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-extrabold text-[#76453B]">
            🚖 Pune to Lavasa Cab – Book Your Ride with Aim Cab
          </h2>
          <p className="mt-4 text-lg bg-white p-4 rounded-lg shadow-sm">
            If you are looking for a reliable and affordable Pune to Lavasa cab, Aim Cab offers the best travel experience. Whether you are traveling for leisure or business, our Pune to Lavasa cab booking service ensures a comfortable ride with trained drivers, well-maintained vehicles, and transparent pricing.
          </p>
        </section>

        {/* Why Choose Aim Cab Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-blue-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">
            🏆 Why Choose Aim Cab for Your Pune to Lavasa Journey?
          </h3>
          <p className="mt-4 text-lg bg-blue-50 p-4 rounded-lg">
            With over <span className="text-blue-600 font-bold">2,00,000+ happy customers</span>, Aim Cab is your trusted travel partner. Here’s why we are the best choice for your Pune to Lavasa journey:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Lowest Price Guarantee
              </h5>
              <p className="ml-6">We offer the most competitive rates for Pune to Lavasa taxi services.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Comfortable Rides
              </h5>
              <p className="ml-6">Neat, clean, and well-maintained cabs for a stress-free journey.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> Professional Drivers
              </h5>
              <p className="ml-6">Experienced drivers ensuring a safe and smooth trip.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> No Hidden Charges
              </h5>
              <p className="ml-6">Our Pune to Lavasa cab price is transparent, with no additional costs.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-green-600 mr-2">✓</span> 24/7 Customer Support
              </h5>
              <p className="ml-6">Assistance available at any time for a hassle-free booking experience.</p>
            </div>
          </div>
          <p className="mt-6 text-xl font-bold text-center bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-lg text-[#76453B]">
            🚖 Experience a stress-free ride with Aim Cab!
          </p>
        </section>

        {/* Cab Booking Options Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-gray-300">
          <h3 className="text-3xl font-extrabold text-[#76453B]">
            Pune to Lavasa Cab Booking – Options Available
          </h3>
          <p className="mt-4 text-lg">
            We provide multiple cab options to suit your budget and travel needs:
          </p>
          <ul className="mt-4 text-lg list-disc ml-6 space-y-2">
            <li><strong>Sedan Cabs:</strong> Swift Dzire, Honda Amaze (Perfect for 3-4 passengers)</li>
            <li><strong>SUV Cabs:</strong> Toyota Innova, Ertiga (Ideal for family trips)</li>
            <li><strong>Luxury Cabs:</strong> Audi, BMW, Mercedes (For a premium travel experience)</li>
            <li><strong>One-Way or Round Trip:</strong> Flexible booking options to meet your travel requirements.</li>
          </ul>
        </section>

        {/* Cab Fare & Pricing Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg">
          <h3 className="text-3xl font-extrabold text-[#76453B]">Pune to Lavasa Taxi Fare & Pricing Details</h3>
          <p className="mt-4 text-lg">
            Our Pune to Lavasa cab price starts from ₹11/km, offering you the most affordable rates in the market.
          </p>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white">
                  <th className="p-4 text-left">Cab Type</th>
                  <th className="p-4 text-center">One-Way Fare (Approx.)</th>
                  <th className="p-4 text-center">Round-Trip Fare (Approx.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50">
                  <td className="p-4 font-medium">Sedan (Dzire, Amaze)</td>
                  <td className="p-4 text-center text-green-600 font-bold">₹1,999</td>
                  <td className="p-4 text-center text-green-600 font-bold">₹3,999</td>
                </tr>
                <tr className="hover:bg-blue-50 bg-gray-50">
                  <td className="p-4 font-medium">SUV (Innova, Ertiga)</td>
                  <td className="p-4 text-center text-green-600 font-bold">₹2,999</td>
                  <td className="p-4 text-center text-green-600 font-bold">₹5,499</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="p-4 font-medium">Luxury (Audi, BMW)</td>
                  <td className="p-4 text-center text-green-600 font-bold">₹7,999</td>
                  <td className="p-4 text-center text-green-600 font-bold">₹14,999</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Distance & Travel Time Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg">
          <h3 className="text-3xl font-extrabold text-[#76453B]">Distance & Travel Time from Pune to Lavasa</h3>
          <p className="mt-4 text-lg">
            <strong>Distance:</strong> Approximately 57 km<br />
            <strong>Travel Time:</strong> Around 2 hours (depending on traffic and weather conditions)
          </p>
        </section>

        {/* Top Attractions Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-gray-300">
          <h3 className="text-3xl font-extrabold text-[#76453B]">Top Attractions in Lavasa – Explore the Beauty of Nature</h3>
          <p className="text-lg mt-3"></p>
          Lavasa is a beautiful hill station near Pune, known for its scenic beauty, adventure activities, and peaceful environment. Here are some must-visit places:

          <p/>

          <ul className="mt-4 text-lg list-disc ml-6 space-y-2">
            <li>
              <strong>Lakeshore Watersports:</strong> Enjoy thrilling water sports like jet skiing, paddle boating, and kayaking in the beautiful Lavasa Lake.
            </li>
            <li>
              <strong>Temghar Dam:</strong> A scenic location offering breathtaking views of the backwaters and a perfect spot for photography.
            </li>
            <li>
              <strong>Lavasa Nature Trails:</strong> Ideal for trekking and nature walks, with stunning views of the Western Ghats.
            </li>
            <li>
              <strong>Bamboosa Craft Factory:</strong> A unique experience to explore bamboo craftsmanship and eco-friendly products.
            </li>
            <li>
              <strong>Lavasa City Walk:</strong> Stroll around the well-planned streets, enjoy cafes, restaurants, and shopping options.
            </li>
          </ul>
        </section>

        {/* FAQs Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">❓ FAQs – Pune to Lavasa Cab Service</h3>
          <div className="mt-4 space-y-4 text-lg">
            <div>
              <p className="font-semibold">1. How can I book a Pune to Lavasa cab?</p>
              <p>You can book online at <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a> or call our customer support for assistance.</p>
            </div>
            <div>
              <p className="font-semibold">2. What is the starting fare for a Pune to Lavasa taxi?</p>
              <p>Our fares start from ₹1,999 for a sedan cab and vary based on vehicle type and trip duration.</p>
            </div>
            <div>
              <p className="font-semibold">3. Is there a one-way cab service available from Pune to Lavasa?</p>
              <p>Yes, we offer both one-way and round-trip cab services based on your preference.</p>
            </div>
            <div>
              <p className="font-semibold">4. How long does it take to reach Lavasa from Pune by cab?</p>
              <p>The journey takes approximately 2 hours, depending on road conditions and traffic.</p>
            </div>
            <div>
              <p className="font-semibold">5. Are there any extra charges for night travel?</p>
              <p>Night charges may apply for trips between 10 PM to 6 AM. Please contact customer support for details.</p>
            </div>
            <div>
              <p className="font-semibold">6. Can I choose my preferred cab type?</p>
              <p>Yes, you can select from a variety of cab options, including sedans, SUVs, and luxury vehicles.</p>
            </div>
            <div>
              <p className="font-semibold">7. Is the Pune to Lavasa route safe for travel?</p>
              <p>Yes, the route is safe and our drivers are well-trained to ensure a smooth journey.</p>
            </div>
            <div>
              <p className="font-semibold">8. Can I modify or cancel my booking?</p>
              <p>Yes, you can modify or cancel your booking as per our cancellation policy.</p>
            </div>
            <div>
              <p className="font-semibold">9. Are toll charges applicable for the Pune to Lavasa route?</p>
              <p>Toll charges are included in the fare unless specified otherwise.</p>
            </div>
            <div>
              <p className="font-semibold">10. Is there an option for multiple stops during the journey?</p>
              <p>Yes, you can request multiple stops while booking the cab.</p>
            </div>
          </div>
        </section>

        {/* Book Your Cab Section */}
        <section className="mt-8 p-6 bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-extrabold">📞 Book Your Pune to Lavasa Cab Today!</h3>
          <p className="mt-4 text-xl">
            Enjoy a seamless and comfortable travel experience with Aim Cab.
          </p>
          <p className="mt-2 text-lg">
            Visit <a href="https://aimcab.com" className="text-blue-600 underline font-bold">aimcab.com</a> or call us to book your ride today!
          </p>
        </section>

        {/* About Aim Cab Section */}
        <section className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-500">
          <h3 className="text-3xl font-extrabold text-[#76453B]">📌 About Aim Cab</h3>
          <p className="mt-4 text-lg bg-indigo-50 p-4 rounded-lg">
            <span className="text-blue-600 font-bold">Aim Cab</span> has been providing top-notch taxi services across India since 2001. With 50+ personal cabs, 500+ registered cabs in our network, and over 2 lakh happy customers, we specialize in outstation, daily, and corporate cab services. We have successfully completed 3000+ outstation trips, ensuring safe, affordable, and reliable cab services for our customers.
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
