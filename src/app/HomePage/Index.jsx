"use client"

import { useRef, useState } from "react"
import { LoadScript, Autocomplete } from "@react-google-maps/api"
import axios from "axios"
import { useRouter } from "next/navigation"
import "animate.css"
import  Navbar  from "../../container/component/Navbar"
import Services from '../../components/Services';
import FrontAbout from '../../components/FrontAbout';
import BookingForm from "../../components/BookingForm"
export default function Home() {
  const services = [
    {
      title: "Luxury Cars",
      icon: "/images/sport-car.png",
      description: "Travel in style with our luxury car options.",
      action: { text: "Book Now", link: "/" },
    },
    {
      title: "Corporate",
      icon: "/images/private-transport.png",
      description: "Professional cabs for business and corporate needs.",
      action: { text: "Call Us", link: "tel:9130030054" },
    },
    {
      title: "Daily Pickup & Drop",
      icon: "/images/taxi.png",
      description: "Reliable daily commute for work or personal travel.",
      action: { text: "Call Us", link: "tel:9130030054" },
    },
    {
      title: "Out Station Cab",
      icon: "/images/road.png",
      description: "Book a cab for long-distance, out-of-town trips.",
      action: { text: "Book Now", link: "/" },
    },
    {
      title: "Airport Transport",
      icon: "/images/shuttle.png",
      description: "Reliable airport pickup and drop services.",
      action: { text: "Call Us", link: "tel:9130030054" },
    },
  ]
  const [tripType, setTripType] = useState("One Way")
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    dateend: "",
    timeend: "",
    name: "",
    phone: "",
    email: "",
    selectPackage: "4", // Default package for rental
    pickup: "",
    drop: "",
  })
  const router = useRouter()
  const pickupRef = useRef(null)
  const dropRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSelectChange = (e) => {
    setTripType(e.target.value)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const id = "AIM" + new Date().getTime()
    localStorage.setItem("bookid", id)

    const visitor = {
      bookid: id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      trip: tripType,
      pickup_location: formData.pickup,
      drop_location: formData.drop,
      date: formData.date,
      time: formData.time,
      dateend: formData.dateend,
      timeend: formData.timeend,
      oneway_distance: "",
      round_distance: "",
      hours: formData.selectPackage,
    }

    try {
      // Initialize DirectionsService
      const destinationService = new window.google.maps.DirectionsService()

      const request = {
        origin: formData.from,
        destination: formData.to,
        travelMode: window.google.maps.TravelMode.DRIVING,
      }

      // Calculate distance
      const result = await new Promise((resolve, reject) => {
        destinationService.route(request, (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            resolve(result)
          } else {
            reject(new Error("Failed to get route"))
          }
        })
      })

      if (result && result.routes[0].legs[0].distance) {
        const distance = result.routes[0].legs[0].distance.value / 1000
        if (tripType === "One Way") {
          visitor.oneway_distance = distance
        } else if (tripType === "Round") {
          visitor.round_distance = distance
        }
      }

      // Post visitor data
      try {
        const response = axios.post("/api/visit", visitor)
        console.log("Visitor data posted successfully:", response.data)
      } catch (apiError) {
        console.error("Error posting visitor data:", apiError)
        // Continue with the booking process even if the API call fails
      }

      // Store the trip data and navigate
      localStorage.setItem("trip", JSON.stringify(visitor))
      console.log("Navigating to /Booking with trip data:", visitor)
      router.push("/Booking")
    } catch (error) {
      console.error("Error during route calculation or API post:", error)
      setError("An error occurred while processing your request. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handlePlaceChanged = (field) => {
    const place = field.getPlace()
    if (place && place.formatted_address) {
      const geocoder = new window.google.maps.Geocoder()

      geocoder.geocode({ address: place.formatted_address }, (result, status) => {
        if (result && result.length > 0) {
          const addressComponents = result[0].address_components
          const state = addressComponents.find((component) => component.types.includes("administrative_area_level_1"))

          setFormData((prevData) => ({
            ...prevData,
            [field === pickupRef.current ? "pickup" : "drop"]: place.formatted_address,
            [field === pickupRef.current ? "from" : "to"]: place.formatted_address,
          }))
        }
      })
    }
  }

  return (
    <div className="flex flex-col items-center">
     
      {/* Booking Form and Promo Section */}
        <div className="relative w-full min-h-screen  " id="home">
    {/* Full-page background image */}
    <div 
      className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
      style={{ backgroundImage: 'url("/images/carr.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
    </div>
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
    {/* Content container with transparent background */}
  
    <BookingForm/>
  </div>

      {error && <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">{error}
        </div>}

      {/* About Section */}
  <Services/>
<FrontAbout/>




      {/* Services Section */}
      <section className="py-16 px-4" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#76453B] leading-tight mb-4">
            Our <span className="text-[#0F0E0E]">Services</span>
          </h2>
          <p className="text-lg text-black font-semibold mb-6">
            Explore our wide range of services to make your travel easy and comfortable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  className="h-16 w-16 object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <a
                href={service.action.link}
                className="inline-block bg-[#2B2B2B] text-[#D5D5D5] px-4 py-2 rounded-md font-medium hover:bg-[#0F0E0E] hover:text-[#F3B664] transition-all duration-300"
              >
                {service.action.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section className="contact_section py-16 bg-gradient-to-br from-[#F8FAFC] to-[#F8FAFC]  text-gray-800" id="contact">
        <div className="container mx-auto text-center mb-10">
          {/* <h2 className="text-4xl font-bold text-[#FCC737] leading-tight mb-10 animate__animated animate__fadeInUp">
            Need a Ride? Book Your Cab Now!
          </h2> */}
           <h2 className="text-4xl font-bold text-[#76453B] leading-tight mb-6 animate__animated animate__fadeInUp">
           Need a Ride? <span className="text-[#0F0E0E]">Book Your Cab Now!</span>
            </h2>
        </div>

        <div className="container-fluid flex flex-wrap justify-center">
          {/* Left Side: Cab Booking Info */}
          <div className="w-full lg:w-5/12 md:w-5/12 mb-8 px-6 animate__animated animate__fadeInUp">
            <div className="p-8">
              <h4 className="text-2xl font-semibold text-black  mb-6">Easy and Convenient Cab Booking</h4>
              <p className="text-lg text-black   mb-6">
                Our cab booking service is designed to make your travel smooth and hassle-free. Whether you are going to
                the airport, heading to a business meeting, or need a ride for a long trip, we have you covered with
                comfortable and reliable cars.
              </p>
              <ul className="list-disc list-inside text-black  mb-6">
                <li className="mb-2">Choose from a variety of vehicles for every need.</li>
                <li className="mb-2">Book instantly with just a few clicks.</li>
                <li className="mb-2">24/7 support for a seamless experience.</li>
                <li className="mb-2">Affordable prices with no hidden charges.</li>
                <li className="mb-2">Pre-book your ride for peace of mind.</li>
                <li className="mb-2">Real-time tracking for your cab.</li>
                <li className="mb-2">Convenient online payments and cash options.</li>
                <li className="mb-2">Ride in comfort with air-conditioned vehicles.</li>
                <li className="mb-2">Wide service area coverage across cities and towns.</li>
                <li className="mb-2">Safety protocols to ensure your well-being throughout the ride.</li>
                <li className="mb-2">Fast and easy booking process with no hassle.</li>
                <li className="mb-2">Our drivers are well-trained and professional.</li>
                <li className="mb-2">Exclusive discounts and offers for loyal customers.</li>
                <li className="mb-2">Option to schedule a ride for family, friends, or colleagues.</li>
                <li className="mb-2">Environmental-friendly vehicles with lower emissions for sustainable travel.</li>
              </ul>
              <a
                href="/"
                className="w-full py-3 bg-[#F3B664] text-[#0F0E0E] font-semibold rounded-lg duration-300 text-center block hover:bg-[#0F0E0E] hover:text-[#F3B664] transition-all"
              >
                Book Your Cab Now
              </a>
            </div>
          </div>

          {/* Right Side: Additional Cab Booking Services */}
          <div className="w-full lg:w-5/12 md:w-5/12 mb-8 px-6 animate__animated animate__fadeInRight">
            <div className="p-8 mb-6">
              <h4 className="text-2xl  text-black font-semibold  mb-6">Outstation Cabs</h4>
              <p className="text-lg text-black  mb-6">
                Planning a trip outside the city? Book an outstation cab with us for a comfortable journey. Whether it's
                a weekend getaway or a business trip, we ensure your travel is convenient and safe.
              </p>
              <ul className="list-disc list-inside text-black  mb-6">
                <li className="mb-2">Long-distance travel made easy and affordable.</li>
                <li className="mb-2">Well-maintained cars for a comfortable ride.</li>
                <li className="mb-2">Flexible booking options and pricing.</li>
              </ul>
              <a
                href="/"
                className="w-full py-3 bg-[#F3B664] text-[#0F0E0E] font-semibold rounded-lg duration-300 text-center block hover:bg-[#0F0E0E] hover:text-[#F3B664] transition-all"
              >
                Book Outstation Cab
              </a>
            </div>
            <br></br>
            <div className="p-8">
              <h4 className="text-2xl text-black font-semibold  mb-6">Airport Transfers</h4>
              <p className="text-lg text-black   mb-6">
                Need a ride to or from the airport? Our airport transfer service offers you a hassle-free, timely, and
                comfortable ride. Whether it's a pickup or drop-off, we've got your travel needs covered.
              </p>
              <ul className="list-disc list-inside text-black  mb-6">
                <li className="mb-2">Reliable and timely airport pickups and drops.</li>
                <li className="mb-2">Easy online booking for your convenience.</li>
                <li className="mb-2">Affordable and transparent pricing.</li>
              </ul>
              <a
                href="/"
                className="w-full py-3 bg-[#F3B664] text-[#0F0E0E] font-semibold rounded-lg duration-300 text-center block hover:bg-[#0F0E0E] hover:text-[#F3B664] transition-all"
              >
                Book Airport Transfer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ready To Experience */}
      <section className="cta-section bg-gradient-to-br from-[#F8FAFC] to-[#F8FAFC] py-16 sm:py-24 w-full">
        <div className="w-full text-center px-4 sm:px-6 lg:px-8 mb-12">
          {/* Heading */}
          {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FCC737] mb-6 animate__animated animate__fadeInUp animate__delay-1s">
            Ready to Experience a Hassle-Free Ride?
          </h2> */}

<h2 className="text-4xl  font-semibold  text-[#0F0E0E] leading-tight mb-6 animate__animated animate__fadeInUp">
Ready to <span className="text-[#76453B]">  Experience a Hassle-Free Ride?</span>
            </h2>   
          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-center text-[#0F0E0E] mb-8 animate__animated animate__fadeInUp animate__delay-1.5s">
            Book your ride with Aimcab today! Whether it's a business trip, airport transfer, or a city ride, we provide
            reliable and comfortable transportation. Our experienced drivers ensure your journey is smooth, safe, and
            hassle-free.
          </p>
          {/* Book Now Button */}
          <div className="text-center mb-12 animate__animated animate__fadeInUp animate__delay-2s">
            <a
              href="/"
              className="inline-block bg-[#F3B664] text-[#0F0E0E] px-6 py-3 rounded-full text-lg sm:text-xl font-semibold transform hover:scale-105 hover:bg-[#0F0E0E] hover:text-[#F3B664] shadow-lg hover:shadow-[#FCC737]/50 transition-all duration-300"
            >
              Book Your Ride Now
            </a>
          </div>
          {/* Testimonial Box */}
          <div className="testimonial-box relative bg-white py-10 px-6 text-center rounded-lg shadow-2xl mb-12 animate__animated animate__fadeInUp animate__delay-2.5s">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#FCC737] mb-4">What Our Customers Say</h3>
            <p className="text-gray-700 text-lg italic mb-6">
              "Aimcab made my travel experience so smooth and stress-free. The driver was friendly, and the car was
              spotless. Highly recommend!"
            </p>
            <p className="text-gray-600 text-sm">- Sarah J., Happy Traveler</p>
          </div>

          {/* Contact Us Section */}
          <div className="text-center animate__animated animate__fadeInUp animate__delay-3s">
            <h3 className="text-lg sm:text-xl lg:text-2xl text-[#FCC737] mb-4">Have Questions? We're Here to Help!</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6">
              Our dedicated customer service team is available 24/7 to assist you with any queries or special requests.
              Reach out to us anytime!
            </p>
            <a
              href="/Contact"
              className="inline-block bg-[#F3B664] text-[#0F0E0E] px-6 py-3 rounded-full text-lg sm:text-xl font-semibold transform hover:scale-105 hover:bg-[#0F0E0E] hover:text-[#F3B664] shadow-lg hover:shadow-[#FCC737]/50 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
         
      </section>
      {/* <About_Aimcab/> */}
    </div>
    
  )
}




//////////////////////////////////////////////////////////////////////////////////////
// "use client"

// import { useRef, useState } from "react"
// import { LoadScript, Autocomplete } from "@react-google-maps/api"
// import axios from "axios"
// import { useRouter } from "next/navigation"
// import "animate.css"
// import Navbar from "../../container/component/Navbar"
// import About_Aimcab from "../../components/About_Aimcab"
// import { motion } from "framer-motion"
// export default function Home() {
//   const [tripType, setTripType] = useState("One Way")
//   const [formData, setFormData] = useState({
//     from: "",
//     to: "",
//     date: "",
//     time: "",
//     dateend: "",
//     timeend: "",
//     name: "",
//     phone: "",
//     email: "",
//     selectPackage: "4", // Default package for rental
//     pickup: "",
//     drop: "",
//   })
//   const router = useRouter()
//   const pickupRef = useRef(null)
//   const dropRef = useRef(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")

//   const handleSelectChange = (e) => {
//     setTripType(e.target.value)
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setError("")

//     const id = "AIM" + new Date().getTime()
//     localStorage.setItem("bookid", id)

//     const visitor = {
//       bookid: id,
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       trip: tripType,
//       pickup_location: formData.pickup,
//       drop_location: formData.drop,
//       date: formData.date,
//       time: formData.time,
//       dateend: formData.dateend,
//       timeend: formData.timeend,
//       oneway_distance: "",
//       round_distance: "",
//       hours: formData.selectPackage,
//     }

//     try {
//       // Initialize DirectionsService
//       const destinationService = new window.google.maps.DirectionsService()

//       const request = {
//         origin: formData.from,
//         destination: formData.to,
//         travelMode: window.google.maps.TravelMode.DRIVING,
//       }

//       // Calculate distance
//       const result = await new Promise((resolve, reject) => {
//         destinationService.route(request, (result, status) => {
//           if (status === window.google.maps.DirectionsStatus.OK) {
//             resolve(result)
//           } else {
//             reject(new Error("Failed to get route"))
//           }
//         })
//       })

//       if (result && result.routes[0].legs[0].distance) {
//         const distance = result.routes[0].legs[0].distance.value / 1000
//         if (tripType === "One Way") {
//           visitor.oneway_distance = distance
//         } else if (tripType === "Round") {
//           visitor.round_distance = distance
//         }
//       }

//       // Post visitor data
//       try {
//         const response = axios.post("/api/visit", visitor)
//         console.log("Visitor data posted successfully:", response.data)
//       } catch (apiError) {
//         console.error("Error posting visitor data:", apiError)
//         // Continue with the booking process even if the API call fails
//       }

//       // Store the trip data and navigate
//       localStorage.setItem("trip", JSON.stringify(visitor))
//       console.log("Navigating to /Booking with trip data:", visitor)
//       router.push("/Booking")
//     } catch (error) {
//       console.error("Error during route calculation or API post:", error)
//       setError("An error occurred while processing your request. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handlePlaceChanged = (field) => {
//     const place = field.getPlace()
//     if (place && place.formatted_address) {
//       const geocoder = new window.google.maps.Geocoder()

//       geocoder.geocode({ address: place.formatted_address }, (result, status) => {
//         if (result && result.length > 0) {
//           const addressComponents = result[0].address_components
//           const state = addressComponents.find((component) => component.types.includes("administrative_area_level_1"))

//           setFormData((prevData) => ({
//             ...prevData,
//             [field === pickupRef.current ? "pickup" : "drop"]: place.formatted_address,
//             [field === pickupRef.current ? "from" : "to"]: place.formatted_address,
//           }))
//         }
//       })
//     }
//   }

//   return (
//     <div className="flex flex-col items-center">
//       {/* Booking Form and Promo Section */}
//       <div className="relative w-full min-h-screen">
//         {/* Full-page background image */}
//         <div
//           className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
//           style={{ backgroundImage: 'url("/images/car-rental.jpg")' }}
//         >
//           {/* <div 
//     className="absolute inset-0 bg-cover bg-center z-0"
//     style={{ backgroundImage: 'url("/images/thumb-1920-683123.jpg")' }}
//   ></div> */}

//           <div className="absolute inset-0 bg-black opacity-30"></div>
//         </div>
//         <div className="fixed top-0 left-0 w-full z-50">
//           <Navbar />
//         </div>
//         {/* Content container with transparent background */}
//         <div className="relative z-10 top-12 w-full flex flex-col lg:flex-row p-0 m-0 min-h-screen">
//           {/* Left side: Carousel/Promo Section (now transparent) */}
//           <div className="w-full lg:w-1/2 bg-transparent">
//             <div id="carouselExampleIndicators" className="carousel slide h-full">
//               <div className="carousel-inner relative h-full">
//                 <div className="carousel-item active h-full">
//                   <div className="text-center min-h-[60vh] lg:min-h-screen py-16 px-8 flex flex-col justify-center">
//                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate__animated animate__fadeIn animate__delay-1s relative z-10">
//                       15% off on One Way & Round Trips
//                     </h2>
//                     <div className="flex justify-center items-center gap-4 relative z-10">
//                       <span className="border border-[#76453B] px-6 py-3 text-[#F3B664] bg-[#0F0E0E] font-semibold text-lg rounded-md animate__animated animate__fadeInUp animate__delay-1s">
//                         AIMNEW15
//                       </span>
//                       <button
//                         className="px-6 py-3 bg-opacity-0 border border-white text-white font-semibold rounded-md transform transition duration-300 ease-in-out animate__animated animate__fadeInUp animate__delay-2s hover:bg-white hover:text-[#0F0E0E]"
//                         onClick={() => navigator.clipboard.writeText("AIMNEW15")}
//                       >
//                         Copy
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right side: Booking Form (now with glass morphism effect) */}
//           <div className="w-full lg:w-1/2 p-4 min-h-screen flex items-center justify-center">
//             <motion.div
//               className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-2xl"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//             >
//               <LoadScript googleMapsApiKey="AIzaSyCelDo4I5cPQ72TfCTQW-arhPZ7ALNcp8w" libraries={["places"]}>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <h2 className="text-center text-3xl font-bold text-[#F3B664] mb-6">BOOK A CAB NOW</h2>

//                   {/* Trip Type Selection */}
//                   <div className="mb-6">
//                     <label className="block text-white text-sm font-medium mb-2">Trip Type</label>
//                     <div className="flex flex-col sm:flex-row gap-4">
//                       {[
//                         { value: "One Way", label: "One Way Trip" },
//                         { value: "Round", label: "Round Trip" },
//                         { value: "Rental", label: "Rental" },
//                       ].map((option) => (
//                         <label key={option.value} className="inline-flex items-center">
//                           <input
//                             type="radio"
//                             className="form-radio h-5 w-5 text-[#F3B664] focus:ring-[#F3B664] border-2 border-[#F3B664] bg-[#0F0E0E]/80"
//                             name="trip"
//                             value={option.value}
//                             checked={tripType === option.value}
//                             onChange={handleSelectChange}
//                             required
//                           />
//                           <span className="ml-2 text-white">{option.label}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Location Inputs */}
//                   <div className="flex flex-col sm:flex-row gap-4">
//                     <div className="flex-1">
//                       <Autocomplete
//                         onLoad={(ref) => (pickupRef.current = ref)}
//                         onPlaceChanged={() => handlePlaceChanged(pickupRef.current)}
//                       >
//                         <input
//                           className="w-full p-2 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
//                           name="from"
//                           type="text"
//                           placeholder="Pickup Location"
//                           value={formData.from}
//                           onChange={handleChange}
//                           required
//                         />
//                       </Autocomplete>
//                     </div>
//                     <div className="flex-1">
//                       <Autocomplete
//                         onLoad={(ref) => (dropRef.current = ref)}
//                         onPlaceChanged={() => handlePlaceChanged(dropRef.current)}
//                       >
//                         <input
//                           className="w-full p-2 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
//                           name="to"
//                           type="text"
//                           placeholder="Drop Location"
//                           value={formData.to}
//                           onChange={handleChange}
//                           required
//                         />
//                       </Autocomplete>
//                     </div>
//                   </div>

//                   {/* Date and Time Inputs */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-white text-sm font-medium mb-2">Pickup Date</label>
//                       <input
//                         className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
//                         name="date"
//                         type="date"
//                         value={formData.date}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-white text-sm font-medium mb-2">Pickup Time</label>
//                       <input
//                         className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
//                         name="time"
//                         type="time"
//                         value={formData.time}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   {/* Conditional Fields */}
//                   {tripType === "Round" && (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-white text-sm font-medium mb-2">Return Date</label>
//                         <input
//                           className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
//                           name="dateend"
//                           type="date"
//                           value={formData.dateend}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-white text-sm font-medium mb-2">Return Time</label>
//                         <input
//                           className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
//                           name="timeend"
//                           type="time"
//                           value={formData.timeend}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                     </div>
//                   )}

//                   {tripType === "Rental" && (
//                     <div>
//                       <label className="block text-white text-sm font-medium mb-2">Package</label>
//                       <select
//                         className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
//                         name="selectPackage"
//                         value={formData.selectPackage}
//                         onChange={handleChange}
//                       >
//                         <option value="4">4 Hours / 40 Kms</option>
//                         <option value="6">6 Hours / 60 Kms</option>
//                         <option value="8">8 Hours / 80 Kms</option>
//                       </select>
//                     </div>
//                   )}

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     className="w-full py-4 px-6 bg-[#F3B664] hover:bg-[#0F0E0E] text-[#0F0E0E] hover:text-[#F3B664] font-bold text-lg rounded-lg border-2 border-[#F3B664] transition duration-300 flex justify-center items-center"
//                     disabled={loading}
//                   >
//                     {loading ? (
//                       <>
//                         <svg
//                           className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0F0E0E]"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Processing...
//                       </>
//                     ) : (
//                       "BOOK NOW"
//                     )}
//                   </button>
//                 </form>
//               </LoadScript>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {error && <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">{error}</div>}

//       {/* About Section */}
//       <section
//         className="about_section layout_padding py-16 bg-cover bg-center relative overflow-hidden"
//         id="about"
//         style={{
//           backgroundImage: "url('/images/carimage2.jpg')",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         {/* Overlay with gradient for better text readability */}
//         <div className="absolute inset-0 bg-black/30 z-0"></div>

//         <div className="container-fluid px-6 md:px-12 relative z-10">
//           <div className="flex flex-wrap gap-8 justify-between items-center">
//             {/* Left Column - About Details with Professional Triangle Shape */}
//             <motion.div
//               className="lg:w-5/12 md:w-5/12 mb-8"
//               initial={{ opacity: 0, x: -100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative transform hover:translate-y-[-5px] transition-all duration-500">
//                 {/* Triangle Shape with Gradient Border */}
//                 <div
//                   className="absolute inset-0 rounded-lg"
//                   style={{
//                     clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
//                     background: "linear-gradient(135deg, #FCC737 0%, #F3B664 100%)",
//                     transform: "scale(1.02)",
//                     zIndex: 1,
//                   }}
//                 ></div>

//                 {/* White Background slightly smaller */}
//                 <div
//                   className="absolute inset-0 bg-white rounded-lg"
//                   style={{
//                     clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
//                     top: "4px",
//                     left: "4px",
//                     right: "4px",
//                     bottom: "4px",
//                     zIndex: 2,
//                   }}
//                 ></div>

//                 {/* Content */}
//                 <div className="relative detail-box font-semibold p-8 pt-10 pb-12 z-10">
//                   <h2 className="text-4xl font-bold text-[#F3B664] mb-4 drop-shadow-sm">About Aimcab</h2>
//                   <p className="text-justify text-gray-700 mb-4 leading-relaxed">
//                     At Aimcab, we pride ourselves on providing a seamless, reliable, and safe travel experience. Serving
//                     thousands of happy customers across India, we specialize in both short-term and long-term car
//                     rentals, airport transfers, and more. Our service is committed to your convenience and safety, every
//                     mile of the way.
//                   </p>
//                   <p className="text-justify text-gray-700 mb-4 leading-relaxed">
//                     We started our journey in 2001 with a vision to make transportation more accessible and hassle-free.
//                     Today, we operate in over 1000 cities across India, connecting customers with trustworthy,
//                     professional drivers and top-notch vehicles. Our goal is to deliver an experience that is
//                     comfortable, stress-free, and most importantly, safe.
//                   </p>
//                   <p className="text-justify text-gray-700 mb-4 leading-relaxed">
//                     Whether you're going on a business trip, family vacation, or a simple airport transfer, Aimcab
//                     offers a wide range of vehicles to cater to all your travel needs. With a fleet of well-maintained
//                     cars, including sedans and SUVs, we ensure that every ride is a smooth and enjoyable experience.
//                   </p>
//                   <p className="text-justify text-gray-700 mb-6 leading-relaxed">
//                     Our transparent pricing, real-time booking system, and exceptional customer support make Aimcab the
//                     preferred choice for travelers across the country.
//                   </p>
//                   <div className="flex justify-start mt-6">
//                     <a
//                       href="/"
//                       className="relative px-6 py-3 text-[#0F0E0E] bg-[#F3B664] font-semibold rounded-lg shadow-lg hover:bg-[#0F0E0E]  hover:text-[#F3B664] transform hover:scale-105 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
//                     >
//                       Book Now
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Column - Additional Services with Inverted Professional Triangle */}
//             <motion.div
//               className="lg:w-6/12 md:w-6/12 mb-8 flex justify-center"
//               initial={{ opacity: 0, x: 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative w-full max-w-md transform hover:translate-y-[-5px] transition-all duration-500">
//                 {/* Triangle Shape with Gradient Border */}
//                 <div
//                   className="absolute inset-0 rounded-lg"
//                   style={{
//                     clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)",
//                     background: "linear-gradient(135deg, #F3B664 0%, #FCC737 100%)",
//                     transform: "scale(1.02)",
//                     zIndex: 1,
//                   }}
//                 ></div>

//                 {/* White Background slightly smaller */}
//                 <div
//                   className="absolute inset-0 bg-white rounded-lg"
//                   style={{
//                     clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)",
//                     top: "4px",
//                     left: "4px",
//                     right: "4px",
//                     bottom: "4px",
//                     zIndex: 2,
//                   }}
//                 ></div>

//                 {/* Content */}
//                 <div className="relative info-box p-8 pt-10 pb-12 z-10">
//                   <h3 className="text-2xl font-semibold text-[#F3B664] mb-6 drop-shadow-sm">Why Choose Aimcab?</h3>
//                   <ul className="list-disc font-semibold list-inside text-gray-700 mb-6">
//                     <li className="mb-2">Affordable rates with no hidden fees.</li>
//                     <li className="mb-2">Multiple vehicle options for every need: sedans, SUVs, luxury cars.</li>
//                     <li className="mb-2">24/7 customer support to ensure your journey is hassle-free.</li>
//                     <li className="mb-2">Easy and fast online booking with instant confirmations.</li>
//                     <li className="mb-2">A wide network of experienced, professional drivers.</li>
//                     <li className="mb-2">Well-maintained cars that prioritize your safety and comfort.</li>
//                     <li className="mb-2">Track your ride in real-time with our intuitive mobile app.</li>
//                   </ul>

//                   {/* Center the Explore More button */}
//                   <div className="flex justify-center mt-6">
//                     <a
//                       href="/#service"
//                       className="relative px-6 py-3 text-[#0F0E0E] bg-[#F3B664] font-semibold rounded-lg shadow-lg hover:bg-[#0F0E0E]  hover:text-[#F3B664] transform hover:scale-105 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
//                     >
//                       Explore More
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Decorative triangular elements */}
//         <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-[#F3B664]/20 -translate-x-1/2 -translate-y-1/2 transform rotate-45 z-0"></div>
//         <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#F3B664]/20 translate-x-1/2 translate-y-1/2 transform rotate-45 z-0"></div>
//       </section>

//       {/* Services Section */}
//       <section
//         className="service  bg_section layout_padding py-16 px-9 bg-gradient-to-br from-[#F8FAE5] to-[#B19470]   "
//         id="service"
//       >
//         <div className="container mx-auto">
//           <div className="heading_container text-center mb-12">
//             <motion.h2
//               className="text-4xl font-bold text-[#76453B] leading-tight mb-6"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               Our <span className="text-[#0F0E0E]">Services</span>
//             </motion.h2>

//             <motion.p
//               className="text-xl text-black font-semibold mb-10"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               Explore our wide range of services to make your travel easy and comfortable.
//             </motion.p>
//           </div>
//           <div className="service_container grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
//             {/* Luxury Cars */}
//             <motion.div
//               className="box bg-[#D5D5D5] p-4 sm:p-6 md:p-8 rounded-lg shadow-md sm:shadow-xl text-center transform transition-all hover:translate-y-[-8px] sm:hover:translate-y-[-12px] hover:shadow-lg hover:shadow-[#FCC737]/20 hover:border-[#F3B664] hover:border-2 hover:duration-300"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="img-box mb-4 sm:mb-6">
//                 <img
//                   src="/images/sport-car.png"
//                   alt="Luxury Cars"
//                   className="h-16 sm:h-20 md:h-24 w-auto mx-auto transition-transform transform hover:scale-110"
//                 />
//               </div>
//               <div className="detail-box ">
//                 <h5 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 transition-colors">
//                   Luxury Cars
//                 </h5>
//                 <p className="text-xs sm:text-sm md:text-base text-white mb-3 sm:mb-4">
//                   <br /> Travel in style with our luxury car options.
//                 </p>
//                 <a
//                   href="/"
//                   className="inline-block bg-[#F3B664] text-[#0F0E0E] text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-md font-medium sm:font-semibold transform hover:scale-105 sm:hover:scale-110 hover:bg-[#0F0E0E] hover:text-[#F3B664] transition-all duration-300"
//                 >
//                   Book Now
//                 </a>
//               </div>
//             </motion.div>

//             {/* Corporate */}
//             <motion.div
//               className="box bg-[#D5D5D5] p-4 sm:p-6 md:p-8 rounded-lg shadow-md sm:shadow-xl text-center transform transition-all hover:translate-y-[-8px] sm:hover:translate-y-[-12px] hover:shadow-lg hover:shadow-[#FCC737]/20 hover:border-[#FCC737] hover:border-2 hover:duration-300"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div className="img-box mb-4 sm:mb-6">
//                 <img
//                   src="/images/private-transport.png"
//                   alt="Corporate Service"
//                   className="h-16 sm:h-20 md:h-24 w-auto mx-auto transition-transform transform hover:scale-110"
//                 />
//               </div>
//               <div className="detail-box">
//                 <h5 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 hover:text-[#F3B664] transition-colors">
//                   Corporate
//                 </h5>
//                 <p className="text-xs sm:text-sm md:text-base text-white mb-3 sm:mb-4">
//                   <br /> Professional cabs for business and corporate needs.
//                 </p>
//                 <a
//                   href="tel:9130030054"
//                   className="inline-block bg-[#F3B664] text-[#0F0E0E] text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-md font-medium sm:font-semibold transform hover:scale-105 sm:hover:scale-110 hover:bg-[#0F0E0E] hover:text-[#F3B664] transition-all duration-300"
//                 >
//                   Call Us
//                 </a>
//               </div>
//             </motion.div>

//             {/* Daily Pickup & Drop */}
//             <motion.div
//               className="box bg-[#D5D5D5]  p-4 sm:p-6 md:p-8 rounded-lg shadow-md sm:shadow-xl text-center transform transition-all hover:translate-y-[-8px] sm:hover:translate-y-[-12px] hover:shadow-lg hover:shadow-[#FCC737]/20 hover:border-[#FCC737] hover:border-2 hover:duration-300"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <div className="img-box mb-4 sm:mb-6">
//                 <img
//                   src="/images/taxi.png"
//                   alt="Daily Pickup & Drop"
//                   className="h-16 sm:h-20 md:h-24 w-auto mx-auto transition-transform transform hover:scale-110"
//                 />
//               </div>
//               <div className="detail-box">
//                 <h5 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 hover:text-[#F3B664] transition-colors">
//                   Daily Pickup & Drop
//                 </h5>
//                 <p className="text-xs sm:text-sm md:text-base text-white mb-3 sm:mb-4">
//                   Reliable daily commute for work or personal travel.
//                 </p>
//                 <a
//                   href="tel:9130030054"
//                   className="inline-block bg-[#F3B664] text-[#0F0E0E] text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-md font-medium sm:font-semibold transform hover:scale-105 sm:hover:scale-110 hover:bg-[#0F0E0E] hover:text-[#F3B664] transition-all duration-300"
//                 >
//                   Call Us
//                 </a>
//               </div>
//             </motion.div>

//             {/* Out Station Cab */}
//             <motion.div
//               className="box bg-[#D5D5D5]  p-4 sm:p-6 md:p-8 rounded-lg shadow-md sm:shadow-xl text-center transform transition-all hover:translate-y-[-8px] sm:hover:translate-y-[-12px] hover:shadow-lg hover:shadow-[#FCC737]/20 hover:border-[#FCC737] hover:border-2 hover:duration-300"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               <div className="img-box mb-4 sm:mb-6">
//                 <img
//                   src="/images/road.png"
//                   alt="Out Station"
//                   className="h-16 sm:h-20 md:h-24 w-auto mx-auto transition-transform transform hover:scale-110"
//                 />
//               </div>
//               <div className="detail-box">
//                 <h5 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 hover:text-[#F3B664] transition-colors">
//                   Out Station Cab
//                 </h5>
//                 <p className="text-xs sm:text-sm md:text-base text-white mb-3 sm:mb-4">
//                   <br /> Book a cab for long-distance, out-of-town trips.
//                 </p>
//                 <a
//                   href="/"
//                   className="inline-block bg-[#F3B664] text-[#0F0E0E] text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-md font-medium sm:font-semibold transform hover:scale-105 sm:hover:scale-110 hover:bg-[#0F0E0E] hover:text-[#F3B664] transition-all duration-300"
//                 >
//                   Book Now
//                 </a>
//               </div>
//             </motion.div>

//             {/* Airport Transport */}
//             <motion.div
//               className="box bg-[#D5D5D5] p-4 sm:p-6 md:p-8 rounded-lg shadow-md sm:shadow-xl text-center transform transition-all hover:translate-y-[-8px] sm:hover:translate-y-[-12px] hover:shadow-lg hover:shadow-[#FCC737]/20 hover:border-[#FCC737] hover:border-2 hover:duration-300"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <div className="img-box mb-4 sm:mb-6">
//                 <img
//                   src="/images/shuttle.png"
//                   alt="Airport Transport"
//                   className="h-16 sm:h-20 md:h-24 w-auto mx-auto transition-transform transform hover:scale-110"
//                 />
//               </div>
//               <div className="detail-box">
//                 <h5 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 hover:text-[#F3B664] transition-colors">
//                   Airport Transport
//                 </h5>
//                 <p className="text-xs sm:text-sm md:text-base text-white mb-3 sm:mb-4">
//                   Reliable airport pickup and drop services.
//                 </p>
//                 <a
//                   href="tel:9130030054"
//                   className="inline-block bg-[#F3B664] text-[#0F0E0E] text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-md font-medium sm:font-semibold transform hover:scale-105 sm:hover:scale-110 hover:bg-[#0F0E0E] hover:text-[#F3B664] transition-all duration-300"
//                 >
//                   Call Us
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section
//         className="contact_section py-16 bg-gradient-to-br from-[#F8FAE5] to-[#B19470]  text-gray-800"
//         id="contact"
//       >
//         <div className="container mx-auto text-center mb-10">
//           {/* <h2 className="text-4xl font-bold text-[#FCC737] leading-tight mb-10 animate__animated animate__fadeInUp">
//             Need a Ride? Book Your Cab Now!
//           </h2> */}
//           <h2 className="text-4xl font-bold text-[#76453B] leading-tight mb-6 animate__animated animate__fadeInUp">
//             Need a Ride? <span className="text-[#0F0E0E]">Book Your Cab Now!</span>
//           </h2>
//         </div>

//         <div className="container-fluid flex flex-wrap justify-center">
//           {/* Left Side: Cab Booking Info */}
//           <div className="w-full lg:w-5/12 md:w-5/12 mb-8 px-6 animate__animated animate__fadeInUp">
//             <div className="p-8">
//               <h4 className="text-2xl font-semibold text-black  mb-6">Easy and Convenient Cab Booking</h4>
//               <p className="text-lg text-black font-semibold  mb-6">
//                 Our cab booking service is designed to make your travel smooth and hassle-free. Whether you are going to
//                 the airport, heading to a business meeting, or need a ride for a long trip, we have you covered with
//                 comfortable and reliable cars.
//               </p>
//               <ul className="list-disc list-inside text-black font-semibold  mb-6">
//                 <li className="mb-2">Choose from a variety of vehicles for every need.</li>
//                 <li className="mb-2">Book instantly with just a few clicks.</li>
//                 <li className="mb-2">24/7 support for a seamless experience.</li>
//                 <li className="mb-2">Affordable prices with no hidden charges.</li>
//                 <li className="mb-2">Pre-book your ride for peace of mind.</li>
//                 <li className="mb-2">Real-time tracking for your cab.</li>
//                 <li className="mb-2">Convenient online payments and cash options.</li>
//                 <li className="mb-2">Ride in comfort with air-conditioned vehicles.</li>
//                 <li className="mb-2">Wide service area coverage across cities and towns.</li>
//                 <li className="mb-2">Safety protocols to ensure your well-being throughout the ride.</li>
//                 <li className="mb-2">Fast and easy booking process with no hassle.</li>
//                 <li className="mb-2">Our drivers are well-trained and professional.</li>
//                 <li className="mb-2">Exclusive discounts and offers for loyal customers.</li>
//                 <li className="mb-2">Option to schedule a ride for family, friends, or colleagues.</li>
//                 <li className="mb-2">Environmental-friendly vehicles with lower emissions for sustainable travel.</li>
//               </ul>
//               <a
//                 href="/"
//                 className="w-full py-3 bg-[#F3B664] text-[#0F0E0E] font-semibold rounded-lg duration-300 text-center block hover:bg-[#0F0E0E] hover:text-[#F3B664] transition-all"
//               >
//                 Book Your Cab Now
//               </a>
//             </div>
//           </div>

//           {/* Right Side: Additional Cab Booking Services */}
//           <div className="w-full lg:w-5/12 md:w-5/12 mb-8 px-6 animate__animated animate__fadeInRight">
//             <div className="p-8 mb-6">
//               <h4 className="text-2xl  text-black font-semibold  mb-6">Outstation Cabs</h4>
//               <p className="text-lg text-black font-semibold  mb-6">
//                 Planning a trip outside the city? Book an outstation cab with us for a comfortable journey. Whether it's
//                 a weekend getaway or a business trip, we ensure your travel is convenient and safe.
//               </p>
//               <ul className="list-disc list-inside text-black font-semibold  mb-6">
//                 <li className="mb-2">Long-distance travel made easy and affordable.</li>
//                 <li className="mb-2">Well-maintained cars for a comfortable ride.</li>
//                 <li className="mb-2">Flexible booking options and pricing.</li>
//               </ul>
//               <a
//                 href="/"
//                 className="w-full py-3 bg-[#F3B664] text-[#0F0E0E] font-semibold rounded-lg duration-300 text-center block hover:bg-[#0F0E0E] hover:text-[#F3B664] transition-all"
//               >
//                 Book Outstation Cab
//               </a>
//             </div>
//             <br></br>
//             <div className="p-8">
//               <h4 className="text-2xl text-black font-semibold  mb-6">Airport Transfers</h4>
//               <p className="text-lg text-black font-semibold  mb-6">
//                 Need a ride to or from the airport? Our airport transfer service offers you a hassle-free, timely, and
//                 comfortable ride. Whether it's a pickup or drop-off, we've got your travel needs covered.
//               </p>
//               <ul className="list-disc list-inside text-black font-semibold mb-6">
//                 <li className="mb-2">Reliable and timely airport pickups and drops.</li>
//                 <li className="mb-2">Easy online booking for your convenience.</li>
//                 <li className="mb-2">Affordable and transparent pricing.</li>
//               </ul>
//               <a
//                 href="/"
//                 className="w-full py-3 bg-[#F3B664] text-[#0F0E0E] font-semibold rounded-lg duration-300 text-center block hover:bg-[#0F0E0E] hover:text-[#F3B664] transition-all"
//               >
//                 Book Airport Transfer
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Ready To Experience */}
//       <section className="cta-section bg-gradient-to-br from-[#F8FAE5] to-[#B19470] py-16 sm:py-24 w-full">
//         <div className="w-full text-center px-4 sm:px-6 lg:px-8 mb-12">
//           {/* Heading */}
//           {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FCC737] mb-6 animate__animated animate__fadeInUp animate__delay-1s">
//             Ready to Experience a Hassle-Free Ride?
//           </h2> */}

//           <motion.h2
//             className="text-4xl font-semibold text-[#0F0E0E] leading-tight mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Ready to <span className="text-[#76453B]">Experience a Hassle-Free Ride?</span>
//           </motion.h2>
//           {/* Subheading */}
//           <p className="text-base sm:text-lg lg:text-xl text-center text-[#0F0E0E] mb-8 animate__animated animate__fadeInUp animate__delay-1.5s">
//             Book your ride with Aimcab today! Whether it's a business trip, airport transfer, or a city ride, we provide
//             reliable and comfortable transportation. Our experienced drivers ensure your journey is smooth, safe, and
//             hassle-free.
//           </p>
//           {/* Book Now Button */}
//           <div className="text-center mb-12 animate__animated animate__fadeInUp animate__delay-2s">
//             <a
//               href="/"
//               className="inline-block bg-[#F3B664] text-[#0F0E0E] px-6 py-3 rounded-full text-lg sm:text-xl font-semibold transform hover:scale-105 hover:bg-[#0F0E0E] hover:text-[#F3B664] shadow-lg hover:shadow-[#FCC737]/50 transition-all duration-300"
//             >
//               Book Your Ride Now
//             </a>
//           </div>
//           {/* Testimonial Box */}
//           <motion.div
//             className="testimonial-box relative bg-white py-10 px-6 text-center rounded-lg shadow-2xl mb-12"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl sm:text-3xl font-bold text-[#FCC737] mb-4">What Our Customers Say</h3>
//             <p className="text-gray-700 text-lg italic mb-6">
//               "Aimcab made my travel experience so smooth and stress-free. The driver was friendly, and the car was
//               spotless. Highly recommend!"
//             </p>
//             <p className="text-gray-600 text-sm">- Sarah J., Happy Traveler</p>
//           </motion.div>

//           {/* Contact Us Section */}
//           <div className="text-center animate__animated animate__fadeInUp animate__delay-3s">
//             <h3 className="text-lg sm:text-xl lg:text-2xl text-[#FCC737] mb-4">Have Questions? We're Here to Help!</h3>
//             <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6">
//               Our dedicated customer service team is available 24/7 to assist you with any queries or special requests.
//               Reach out to us anytime!
//             </p>
//             <a
//               href="/Contact"
//               className="inline-block bg-[#F3B664] text-[#0F0E0E] px-6 py-3 rounded-full text-lg sm:text-xl font-semibold transform hover:scale-105 hover:bg-[#0F0E0E] hover:text-[#F3B664] shadow-lg hover:shadow-[#FCC737]/50 transition-all duration-300"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </section>
//       <About_Aimcab />
//     </div>
//   )
// }



