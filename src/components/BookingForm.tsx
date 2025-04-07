"use client"

import { useRef, useState } from "react"
import { LoadScript, Autocomplete } from "@react-google-maps/api"
import axios from "axios"
import { useRouter } from "next/navigation"
import "animate.css"
import Navbar from '../container/component/Navbar'
const BookingForm = () => {
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
    selectPackage: "4",
    pickup: "",
    drop: "",
  })
  const router = useRouter()
  const pickupRef = useRef<google.maps.places.Autocomplete | null>(null)
  const dropRef = useRef<google.maps.places.Autocomplete | null>(null)
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

  const handlePlaceChanged = (field) => {
    const place = field.getPlace()
    if (place && place.formatted_address) {
      const geocoder = new window.google.maps.Geocoder()

      geocoder.geocode({ address: place.formatted_address }, (result, status) => {
        if (result && result.length > 0) {
          setFormData((prevData) => ({
            ...prevData,
            [field === pickupRef.current ? "pickup" : "drop"]: place.formatted_address,
            [field === pickupRef.current ? "from" : "to"]: place.formatted_address,
          }))
        }
      })
    }
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
      const destinationService = new window.google.maps.DirectionsService()

      const request = {
        origin: formData.from,
        destination: formData.to,
        travelMode: window.google.maps.TravelMode.DRIVING,
      }

      const result = await new Promise<google.maps.DirectionsResult>((resolve, reject) => {
        destinationService.route(request, (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK && result) {
            resolve(result)
          } else {
            reject(new Error("Failed to get route"))
          }
        })
      })

      if (result && result.routes[0].legs[0].distance) {
        const distance = result.routes[0].legs[0].distance.value / 1000
        if (tripType === "One Way") {
          visitor.oneway_distance = distance.toString()
        } else if (tripType === "Round") {
          visitor.round_distance = distance.toString()
        }
      }

      try {
        const response = await axios.post("/api/visit", visitor)
        console.log("Visitor data posted successfully:", response.data)
      } catch (apiError) {
        console.error("Error posting visitor data:", apiError)
      }

      localStorage.setItem("trip", JSON.stringify(visitor))
      router.push("/Booking")
    } catch (error) {
      console.error("Error during route calculation or API post:", error)
      setError("An error occurred while processing your request. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
       <div className="relative w-full min-h-screen">
    {/* Full-page background image */}
    <div 
      className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
      style={{ backgroundImage: 'url("/images/car-rental.jpg")' }}
    >
  
  {/* <div 
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: 'url("/images/thumb-1920-683123.jpg")' }}
    ></div> */}
  
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
    </div>
    <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
    {/* Content container with transparent background */}
    <div className="relative z-10 top-12 w-full flex flex-col lg:flex-row p-0 m-0 min-h-screen">
      {/* Left side: Carousel/Promo Section (now transparent) */}
      <div className="w-full lg:w-1/2 bg-transparent">
        <div id="carouselExampleIndicators" className="carousel slide h-full">
          <div className="carousel-inner relative h-full">
            <div className="carousel-item active h-full">
              <div className="text-center min-h-[60vh] lg:min-h-screen py-16 px-8 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate__animated animate__fadeIn animate__delay-1s relative z-10">
                  15% off on One Way & Round Trips
                </h2>
                <div className="flex justify-center items-center gap-4 relative z-10">
                  <span className="border border-[#76453B] px-6 py-3 text-[#F3B664] bg-[#0F0E0E] font-semibold text-lg rounded-md animate__animated animate__fadeInUp animate__delay-1s">
                    AIMNEW15
                  </span>
                  <button
                    className="px-6 py-3 bg-opacity-0 border border-white text-white font-semibold rounded-md transform transition duration-300 ease-in-out animate__animated animate__fadeInUp animate__delay-2s hover:bg-white hover:text-[#0F0E0E]"
                    onClick={() => navigator.clipboard.writeText("AIMNEW15")}
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Right side: Booking Form (now with glass morphism effect) */}
      <div className="w-full  lg:w-1/2 p-4 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-2xl">
              <LoadScript googleMapsApiKey="AIzaSyCelDo4I5cPQ72TfCTQW-arhPZ7ALNcp8w" libraries={["places"]}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-center text-3xl font-bold text-[#F3B664] mb-6">BOOK A CAB NOW</h2>
  
                  {/* Trip Type Selection */}
                  <div className="mb-6">
                    <label className="block text-white text-sm font-medium mb-2">Trip Type</label>
                    <select
                      className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
                      name="trip"
                      value={tripType}
                      onChange={handleSelectChange}
                      required
                    >
                      <option value="One Way">One Way Trip</option>
                      <option value="Round">Round Trip</option>
                      <option value="Rental">Rental</option>
                    </select>
                  </div>
  
                  {/* Location Inputs */}
                  <div className="space-y-4">
                    <div>
                      <Autocomplete
                        onLoad={(ref) => (pickupRef.current = ref)}
                        onPlaceChanged={() => handlePlaceChanged(pickupRef.current)}
                      >
                        <input
                          className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
                          name="from"
                          type="text"
                          placeholder="Pickup Location"
                          value={formData.from}
                          onChange={handleChange}
                          required
                        />
                      </Autocomplete>
                    </div>
                    <div>
                      <Autocomplete
                        onLoad={(ref) => (dropRef.current = ref)}
                        onPlaceChanged={() => handlePlaceChanged(dropRef.current)}
                      >
                        <input
                          className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
                          name="to"
                          type="text"
                          placeholder="Drop Location"
                          value={formData.to}
                          onChange={handleChange}
                          required
                        />
                      </Autocomplete>
                    </div>
                  </div>
  
                  {/* Date and Time Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Pickup Date</label>
                      <input
                        className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Pickup Time</label>
                      <input
                        className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
  
                  {/* Conditional Fields */}
                  {tripType === "Round" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Return Date</label>
                        <input
                          className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
                          name="dateend"
                          type="date"
                          value={formData.dateend}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Return Time</label>
                        <input
                          className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
                          name="timeend"
                          type="time"
                          value={formData.timeend}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  )}
  
                  {tripType === "Rental" && (
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Package</label>
                      <select
                        className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
                        name="selectPackage"
                        value={formData.selectPackage}
                        onChange={handleChange}
                      >
                        <option value="4">4 Hours / 40 Kms</option>
                        <option value="6">6 Hours / 60 Kms</option>
                        <option value="8">8 Hours / 80 Kms</option>
                      </select>
                    </div>
                  )}
  
                 
  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#F3B664] hover:bg-[#0F0E0E] text-[#0F0E0E] hover:text-[#F3B664] font-bold text-lg rounded-lg border-2 border-[#F3B664] transition duration-300 flex justify-center items-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0F0E0E]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "BOOK NOW"
                    )}
                  </button>
                </form>
              </LoadScript>
            </div>
          </div>
    </div>
  </div>
  )
}

export default BookingForm 