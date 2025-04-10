    "use client"
    import React from 'react'
    import Head from 'next/head';
    import BookingForm from '../../components/BookingForm';
    import { useEffect, useRef } from 'react';
    import { gsap } from 'gsap';
    import Navbar from '../../container/component/Navbar'
    import Footer from '../../container/component/Footer';
    import About_Aimcab from '../../components/About_Aimcab';
    const page = () => {
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        
        tl.from(headingRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8
        })
        .from(paragraphRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.6
        }, "+=0.2")
    }, []);
        
    return (
        <div>
        <Head>
            <title>Mumbai to Aurangabad Cab Services | Aim Cab Booking</title>
            <meta name="description" content="Book Mumbai to Aurangabad cab services with Aim Cab for a comfortable and affordable trip. Get one-way & return cabs with professional drivers." />
            <link rel="canonical" href="https://aimcab.com/Mumbai-to-Aurangabad-Cab-Services" />
            <meta name="author" content="Aim Cab" />
            <meta name="keywords" content="mumbai to aurangabad cab services, mumbai to aurangabad cab, aurangabad to mumbai cab, mumbai to aurangabad cab fare, one way cab mumbai to aurangabad, cab service from aurangabad to mumbai, cab service in mumbai to aurangabad" />
            <meta name="robots" content="index, follow" />
        </Head>
        
        {/* Header */}
        <header className="relative bg-gradient-to-r from-[#F3B664] to-[#76453B] text-white py-12 md:py-20 text-center">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 
                ref={headingRef}
                className="text-4xl md:text-5xl font-bold mb-4"
            >
                Mumbai to Aurangabad Cab Service
            </h1>
            
            <p 
                ref={paragraphRef}
                className="text-xl md:text-2xl mb-8 font-light"
            >
                A Comfortable and Scenic Journey
            </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-bottom"></div>
        </header>
        
        {/* Main Title */}
        <h2 className="text-3xl font-bold mt-4 text-center">
            Mumbai to Aurangabad Cab Service – A Comfortable and Scenic Journey
        </h2>

        <BookingForm />
        
        {/* Introduction Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-[#76453B] mb-6">Welcome to Aimcab - Your Trusted Travel Partner</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Aimcab, your reliable provider of Mumbai to Aurangabad cab services. Whether you're planning to explore the historical landmarks of Aurangabad, visit the Ajanta and Ellora Caves, or simply enjoy a weekend getaway, we ensure your journey is comfortable, safe, and efficient. Our Mumbai to Aurangabad taxi service is designed to provide a smooth and enjoyable ride with a variety of vehicle options to meet your specific travel needs.
                This detailed guide will cover everything you need to know about our Mumbai to Aurangabad cab service, including the available service options, the booking process, road trip details, tourist attractions in Aurangabad, pricing information, and more. Let's dive in and explore how Aimcab can make your trip to Aurangabad unforgettable!
            </p>
            </div>
        </section>
        
        {/* Service Options */}
        <section className="bg-white p-8 rounded-xl shadow-md mt-8">
            <h4 className="text-2xl font-bold text-[#76453B] border-b-2 border-indigo-200 pb-3 mb-6">🧭 Service Options</h4>
            
            <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
                <h5 className="font-bold text-lg text-[#76453B] mb-3">Oneway Cab Service</h5>
                <p className="text-gray-600">
                Our one-way cab service from Mumbai to Aurangabad is ideal for those who need a straightforward ride to their destination without worrying about a return trip. Whether you're traveling for business, a pilgrimage, or a quick vacation, our one-way service guarantees a comfortable, no-fuss experience. Simply book your Mumbai to Aurangabad cab, and we'll take care of the rest.
                </p>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
                <h5 className="font-bold text-lg text-[#76453B] mb-3">Roundtrip Cab Service</h5>
                <p className="text-gray-600">
                For travelers planning to return to Mumbai after visiting Aurangabad, our round-trip cab service is the perfect option. With a round-trip booking, you can enjoy the comfort of knowing your return ride is also arranged. Our cab service from Aurangabad to Mumbai ensures a seamless and hassle-free return journey, providing the same high-quality service for both legs of your trip.
                </p>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg hover:shadow-md transition-shadow">
                <h5 className="font-bold text-lg text-[#76453B] mb-3">Airport Pickup & Drop</h5>
                <p className="text-gray-600">
                If you are flying into Mumbai and need a ride to Aurangabad, or you need a cab from Aurangabad to Mumbai airport, we offer reliable airport pickup and drop services. Our drivers are familiar with airport routes and traffic patterns, ensuring timely pickups and drop-offs, so you can travel stress-free. We also provide Mumbai to Aurangabad airport transfers to make your journey as smooth and convenient as possible.
                </p>
            </div>
            </div>
        </section>

        {/* Booking Process */}
        <section className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl shadow-md mt-8">
            <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛒 Booking Process</h4>
            
            <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
                <h5 className="font-bold text-lg text-[#76453B] mb-3">Book Online via Website</h5>
                <p className="text-gray-600">
                Booking a Mumbai to Aurangabad cab online is quick and easy. Simply visit our website, enter your pickup and drop-off locations, choose your preferred vehicle, and confirm your booking. You'll receive instant confirmation with all the necessary details, including the driver's contact information and estimated pickup time.
                </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
                <h5 className="font-bold text-lg text-[#76453B] mb-3">Book On Call</h5>
                <p className="text-gray-600">
                If you prefer a more personalized approach, you can call our customer service team to book your cab from Mumbai to Aurangabad. Our representatives are available 24/7 to assist with booking, provide pricing details, and answer any questions you may have. We'll ensure your Mumbai to Aurangabad cab booking is handled smoothly.
                </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
                <h5 className="font-bold text-lg text-[#76453B] mb-3">Book through App</h5>
                <p className="text-gray-600">
                For those on the go, the Aimcab mobile app makes booking your Mumbai to Aurangabad taxi even more convenient. The app is available for both Android and iOS devices, allowing you to easily book, track your ride, communicate with your driver, and make payments. It's the perfect option for travelers who prefer managing everything on their phone.
                </p>
            </div>
            </div>
        </section>

        {/* Road Trip Guide */}
        <section className="bg-white p-8 rounded-xl shadow-md mt-8">
            <h4 className="text-2xl font-bold text-[#76453B] mb-6">🛣️ Road Trip Guide</h4>
            
            <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h5 className="text-xl font-semibold text-[#76453B] mb-3">Route from Mumbai to Aurangabad</h5>
                <p className="text-gray-700 mb-4">
                The most popular route for traveling from Mumbai to Aurangabad is via National Highway 60. This route offers a smooth drive through well-maintained highways and picturesque views along the way. Here's a breakdown of the route:
                </p>
                <p className="text-gray-700 font-medium mb-4">
                Mumbai → Thane → Kalyan → Nashik → Aurangabad
                </p>
                <p className="text-gray-700">
                Starting from Mumbai, the road leads you through Thane and Kalyan, passing by small villages and countryside before entering Nashik. From Nashik, you'll continue on the well-paved highways that will take you directly to Aurangabad. This route is not only the most direct but also offers a scenic view of Maharashtra's rural beauty.
                </p>
                
                <h5 className="text-xl font-semibold text-[#76453B] mt-6 mb-3">Travel Experience</h5>
                <p className="text-gray-700">
                The Mumbai to Aurangabad road trip is both enjoyable and relaxing. Here's what you can expect along the way:
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>City to Countryside Transition: Starting from the bustling city of Mumbai, the road gradually transitions into rural Maharashtra, offering a serene experience as you leave the city behind.</li>
                <li>Scenic Views: The drive offers beautiful views of the Western Ghats, rolling hills, and farmlands. During the monsoon season, the lush greenery and waterfalls add an extra charm to the journey.</li>
                <li>Smooth Ride: The highway is well-maintained, ensuring a smooth and comfortable ride. While traveling on National Highway 60, you'll pass through peaceful villages and towns, giving you a glimpse of rural life in Maharashtra.</li>
                <li>This road trip is perfect for those who love scenic drives and want to experience the natural beauty of Maharashtra while traveling to a destination full of history and culture.</li>
                </ul>
            </div>
            
            <div className="bg-indigo-100 p-6 rounded-lg flex items-center justify-center">
                <div className="text-center">
                <div className="text-4xl font-bold text-[#76453B]">330 km</div>
                <div className="text-gray-600 mt-2">Distance</div>
                </div>
                <div className="mx-8 text-gray-400">|</div>
                <div className="text-center">
                <div className="text-4xl font-bold text-[#76453B]">6-7 hrs</div>
                <div className="text-gray-600 mt-2">Travel Time</div>
                </div>
            </div>
            </div>
        </section>

        {/* Tourist Attractions */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md mt-8">
            <h4 className="text-2xl font-bold text-[#76453B] mb-6">🏞️ Tourist Places & Attractions</h4>
            
            <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h5 className="text-xl font-semibold text-[#76453B] mb-3">Places to Visit Between Mumbai and Aurangabad</h5>
                <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h6 className="font-bold text-[#76453B]">Nashik</h6>
                    <p className="text-gray-600">Known for its religious significance, Nashik is a famous destination for pilgrims and wine enthusiasts alike. The Trimbakeshwar Temple and Sula Vineyards are popular spots here.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h6 className="font-bold text-[#76453B]">Shirdi</h6>
                    <p className="text-gray-600">If you wish to make a detour, Shirdi, the home of Sai Baba, is another spiritual stop on the way to Aurangabad. The Sai Baba Temple attracts devotees from across the country.</p>
                </div>
                </div>
            </div>
            
            <div>
                <h5 className="text-xl font-semibold text-[#76453B] mb-3">Must-Visit Spots in Aurangabad</h5>
                <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h6 className="font-bold text-[#76453B]">Ajanta Caves</h6>
                    <p className="text-gray-600">A UNESCO World Heritage site, the Ajanta Caves are rock-cut Buddhist temples, famous for their intricate paintings and sculptures depicting Buddhist teachings.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h6 className="font-bold text-[#76453B]">Ellora Caves</h6>
                    <p className="text-gray-600">Another UNESCO World Heritage site, the Ellora Caves consist of 34 monasteries and temples, including the spectacular Kailasa Temple, carved from a single rock.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h6 className="font-bold text-[#76453B]">Bibi Ka Maqbara</h6>
                    <p className="text-gray-600">Often referred to as the Taj Mahal of the Deccan, this stunning monument is a tribute to the wife of Emperor Aurangzeb.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h6 className="font-bold text-[#76453B]">Aurangabad Caves</h6>
                    <p className="text-gray-600">These rock-cut caves are less crowded but equally fascinating, offering a glimpse into the region's Buddhist past.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h6 className="font-bold text-[#76453B]">Daulatabad Fort</h6>
                    <p className="text-gray-600">A majestic fort located on a hill, Daulatabad Fort offers breathtaking views of the surrounding area and has a rich history.</p>
                </div>
                </div>
            </div>
            </div>

            <h5 className="text-xl font-semibold text-[#76453B] mt-8 mb-3">What Travelers Can Do and Explore in Aurangabad</h5>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Explore Historical Sites</h6>
                <p className="text-gray-600">Aurangabad is home to many historical sites, making it a must-visit for history enthusiasts. The Ajanta and Ellora Caves are a major draw for those interested in ancient art and architecture.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Religious Visits</h6>
                <p className="text-gray-600">Visit the Bibi Ka Maqbara and Daulatabad Fort, which hold cultural and historical significance.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Trekking and Photography</h6>
                <p className="text-gray-600">If you're a nature lover, you can go trekking in the surrounding hills and capture some stunning photographs of the natural landscape and historical landmarks.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <h6 className="font-bold text-[#76453B]">Shopping</h6>
                <p className="text-gray-600">Aurangabad is famous for its Paithani sarees and Bidriware, which make for great souvenirs.</p>
            </div>
            </div>
        </section>

        {/* Pricing Table */}
        <section className="bg-white p-8 rounded-xl shadow-md mt-8">
            <h4 className="text-2xl font-bold text-[#76453B] mb-6">💰 Cab Fare & Pricing</h4>
            
            <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-[#76453B] to-[#F3B664] text-white">
                <tr>
                    <th className="py-3 px-4 text-left">Cab Type</th>
                    <th className="py-3 px-4 text-left">Price (₹/KM)</th>
                    <th className="py-3 px-4 text-left">Best For</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50">
                    <td className="py-3 px-4"><strong>Sedan (Dzire, Etios)</strong></td>
                    <td className="py-3 px-4 font-semibold text-[#76453B]">₹11/km</td>
                    <td className="py-3 px-4">Budget-friendly travel</td>
                </tr>
                <tr className="hover:bg-blue-50">
                    <td className="py-3 px-4"><strong>SUV (Ertiga, Xylo)</strong></td>
                    <td className="py-3 px-4 font-semibold text-[#76453B]">₹14/km</td>
                    <td className="py-3 px-4">Family trips & extra luggage space</td>
                </tr>
                <tr className="hover:bg-blue-50">
                    <td className="py-3 px-4"><strong>Luxury (Innova Crysta)</strong></td>
                    <td className="py-3 px-4 font-semibold text-[#76453B]">₹18/km</td>
                    <td className="py-3 px-4">Premium comfort & business travel</td>
                </tr>
                <tr className="hover:bg-blue-50">
                    <td className="py-3 px-4"><strong>Tempo Traveller</strong></td>
                    <td className="py-3 px-4 font-semibold text-[#76453B]">₹25/km</td>
                    <td className="py-3 px-4">Group trips & office outings</td>
                </tr>
                </tbody>
            </table>
            </div>
            
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h5 className="font-bold text-[#76453B] mb-2">Additional Information:</h5>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Toll and parking excluded</li>
                <li>No waiting charges</li>
                <li>No kilometer limit</li>
                <li>Driver's allowance included</li>
                <li>No night halt charges</li>
            </ul>
            </div>
        </section>

        {/* Why Choose Aimcab */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md mt-8">
            <h4 className="text-2xl font-bold text-[#76453B] mb-6">🚖 Why Choose Aimcab – Our Specialties</h4>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                </div>
                <p className="text-gray-700"><strong className="text-[#76453B]">Always Neat & Clean Cabs:</strong> We ensure all our cabs are regularly cleaned and maintained to provide you with a hygienic and comfortable ride.</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                </div>
                <p className="text-gray-700"><strong className="text-[#76453B]">On-Time Guarantee:</strong> We value your time, which is why we guarantee timely pickups and drops for your Mumbai to Aurangabad taxi service.</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                </div>
                <p className="text-gray-700"><strong className="text-[#76453B]">Complimentary Gift for New Users:</strong> We appreciate new customers, and to make your first ride with us even more special, we offer a complimentary gift for new users.</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                </div>
                <p className="text-gray-700"><strong className="text-[#76453B]">GPS Tracking in All Cabs:</strong> All of our vehicles come equipped with GPS tracking, allowing you to track your ride in real-time and ensuring you're always on the right path.</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-[#76453B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                </div>
                <p className="text-gray-700"><strong className="text-[#76453B]">24x7 Helpline Available:</strong> Our customer service team is available 24/7 to assist with bookings, queries, or any concerns you may have during your journey.</p>
            </div>
            </div>
        </section>

        {/* FAQs */}
        <section className="bg-white p-8 rounded-xl shadow-md mt-8">
            <h4 className="text-2xl font-bold text-[#76453B] mb-6">🙋 Frequently Asked Questions</h4>
            
            <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
                <h5 className="font-bold text-[#76453B]">What is the distance between Mumbai and Aurangabad?</h5>
                <p className="text-gray-700 mt-1">The distance from Mumbai to Aurangabad is approximately 330 kilometers, and the journey usually takes 6 to 7 hours.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
                <h5 className="font-bold text-[#76453B]">How can I book a Mumbai to Aurangabad cab?</h5>
                <p className="text-gray-700 mt-1">You can book your Mumbai to Aurangabad taxi service online via our website, by calling our customer service, or using the Aimcab app.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
                <h5 className="font-bold text-[#76453B]">What is the fare for a one-way Mumbai to Aurangabad cab?</h5>
                <p className="text-gray-700 mt-1">The fare depends on the type of vehicle you choose. For instance, Sedans start at ₹11/km.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
                <h5 className="font-bold text-[#76453B]">Do you offer airport transfer services from Mumbai to Aurangabad?</h5>
                <p className="text-gray-700 mt-1">Yes, we offer Mumbai to Aurangabad airport transfers, ensuring a smooth and timely transfer to your destination.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
                <h5 className="font-bold text-[#76453B]">Can I book a round-trip cab for Mumbai to Aurangabad?</h5>
                <p className="text-gray-700 mt-1">Yes, we offer round-trip services for your Mumbai to Aurangabad journey and back.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
                <h5 className="font-bold text-[#76453B]">Are there any hidden charges in the fare?</h5>
                <p className="text-gray-700 mt-1">No, we provide transparent pricing with no hidden charges. You pay for the kilometers traveled, excluding tolls and parking.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
                <h5 className="font-bold text-[#76453B]">What are the best attractions in Aurangabad?</h5>
                <p className="text-gray-700 mt-1">Ajanta and Ellora Caves, Bibi Ka Maqbara, Daulatabad Fort, and Aurangabad Caves are some of the must-visit attractions in Aurangabad.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
                <h5 className="font-bold text-[#76453B]">Do you offer group trips from Mumbai to Aurangabad?</h5>
                <p className="text-gray-700 mt-1">Yes, we offer Tempo Traveller services for group trips and family outings.</p>
            </div>
            </div>
        </section>

        {/* About Us */}
        <About_Aimcab  />

        <Footer />
        </div>
    )
    }

    export default page;