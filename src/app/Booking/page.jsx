"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Image from "next/image"
import Footer from "../../container/component/Footer"
import Navbar from "../../container/component/Navbar"

export default function Home() {
  const [cars, setCars] = useState([])
  const route = useRouter()
  const [loading, setLoading] = useState(true)
  const [loadingData, setLoadingData] = useState({})

  useEffect(() => {
    const getVisitor = async () => {
      try {
        setLoading(true)
        const res = JSON.parse(localStorage.getItem("trip"))
        console.log(res)
        const trip = res
        const data = await axios.post("/api/prices", {
          pickup: trip.pickup_location,
          drop: trip.drop_location,
          tripType: trip.trip,
          hours: trip.hours,
        })
        console.log(data)

        const tripType = trip.trip
        const distance = tripType == "One Way" ? +trip.oneway_distance : +trip.round_distance
        const diff = new Date(trip.dateend).getTime() - new Date(trip.date).getTime()
        const days = diff / (1000 * 3600 * 24) + 1

        const fetchedCars = [
          {
            id: 1,
            name: "Hatchback",
            model: "Hatchback",
            price: calculateCarPrice("hatchback", tripType, days, distance, data.data.data),
            image: "/images/hatchback.png",
            facilities: [
              { name: "Snacks", icon: "/images/snacks.png" },
              { name: "Water Bottle", icon: "/images/water.jpg" },
              { name: "Newspaper", icon: "/images/news.jpg" },
            ],
          },
          {
            id: 2,
            name: "Sedan",
            model: "Sedan",
            price: calculateCarPrice("sedan", tripType, days, distance, data.data.data),
            image: "/images/etios.jpg",
            facilities: [
              { name: "Snacks", icon: "/images/snacks.png" },
              { name: "Water Bottle", icon: "/images/water.jpg" },
              { name: "Newspaper", icon: "/images/news.jpg" },
            ],
          },
          {
            id: 3,
            name: "SUV",
            model: "SUV",
            price: calculateCarPrice("suv", tripType, days, distance, data.data.data),
            image: "/images/muv.png",
            facilities: [
              { name: "Snacks", icon: "/images/snacks.png" },
              { name: "Water Bottle", icon: "/images/water.jpg" },
              { name: "Newspaper", icon: "/images/news.jpg" },
            ],
          },
          {
            id: 4,
            name: "MUV",
            model: "MUV",
            price: calculateCarPrice("suvplus", tripType, days, distance, data.data.data),
            image: "/images/innova.jpg",
            facilities: [
              { name: "Snacks", icon: "/images/snacks.png" },
              { name: "Water Bottle", icon: "/images/water.jpg" },
              { name: "Newspaper", icon: "/images/news.jpg" },
            ],
          },
        ]
        setCars(fetchedCars)
        setLoading(false)
      } catch (error) {
        console.error("Error in getVisitor:", error)
        setLoading(false)
        // Handle the error appropriately, e.g., show an error message to the user
      }
    }
    getVisitor()
  }, [])

  const calculateCarPrice = (carType, tripType, days, distance, prices) => {
    if (!prices || !prices[carType]) {
      console.warn(`Price for ${carType} is not available. Using default price.`)
      return 0
    }

    if (tripType === "One Way") {
      return prices[carType] * Math.floor(distance)
    } else if (tripType === "Round") {
      return distance <= 300 ? days * 300 * prices[carType] : days * 300 + (distance - 300) * prices[carType]
    }
    return prices[carType] || 0
  }

  const handleBookNow = async (car, index) => {
    setLoadingData({ [index]: true })
    try {
      const trip = JSON.parse(localStorage.getItem("trip"))
      const data = {
        name: trip.name,
        user_pickup: trip.pickup_location,
        user_drop: trip.drop_location,
        date: trip.date,
        time: trip.time,
        phone: trip.phone,
        email: trip.email,
        user_trip_type: trip.trip,
        distance: trip.trip === "One Way" ? trip.oneway_distance : trip.trip === "Round" ? trip.round_distance : 0,
        baseAmount: car.price,
        dateend: trip.trip === "Round" ? trip.dateend : null,
        timeend: trip.trip === "Round" ? trip.timeend : null,
        status: 0,
        bookingtype: "website",
        from_location: trip.pickup_location,
        return_date: trip.dateend,
        start_date: trip.date,
        to_location: trip.drop_location,
        trip_type: trip.trip,
        base_amount: car.price,
        bookid: trip.bookid,
        booking_id: trip.bookid,
      }

      console.log("Sending booking data:", data)
      const res = await axios.post("/api/booking", data)

      console.log("Booking response:", res.data)
      setLoadingData({ [index]: false })

      // Store car image in localStorage for the invoice page
      localStorage.setItem("bookedCarImage", car.image)
      localStorage.setItem("bookedCarModel", car.name)

      route.push("/Invoice")
    } catch (error) {
      console.error("Error in handleBookNow:", error)
      setLoadingData({ [index]: false })
      alert("An error occurred while booking. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md w-full sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="bg-[#F8F9FA]">
        {/* Hero Section */}
        <section className="relative text-center py-12 bg-gradient-to-r from-[#faa499] to-[#f7dd85] overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-fade-in">Welcome to Our Car Rental Service</h1>
            <p className="text-xl text-gray-700">Explore the best cars available for your trips</p>
          </div>
        </section>

        {loading ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-xl font-semibold text-gray-600">
              Loading
              <span className="animate-pulse">.</span>
              <span className="animate-pulse animation-delay-200">.</span>
              <span className="animate-pulse animation-delay-400">.</span>
            </div>
          </div>
        ) : (
          <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mt-8 space-y-8">
              {cars.map(
                (car, index) =>
                  car.price > 0 && (
                    <div
                      key={car.id}
                      className="card p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6 border border-gray-100 hover:border-yellow-100"
                    >
                      {/* Image section - responsive with proper aspect ratio */}
                      <div className="w-full md:w-2/5 lg:w-1/3 h-64 md:h-auto overflow-hidden rounded-lg shadow-sm relative">
                        <Image
                          src={car.image || "/placeholder-car.svg"}
                          alt={car.name}
                          width={600}
                          height={400}
                          loading="lazy"
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                          style={{ aspectRatio: "3/2" }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>

                      {/* Content section */}
                      <div className="w-full md:w-3/5 lg:w-2/3 flex flex-col">
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">{car.name}</h3>
                              <div className="flex items-center mt-1 space-x-2">
                                <span className="text-sm font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
                                  {car.category}
                                </span>
                                <span className="text-sm text-gray-500">• {car.seats} seats</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">Starting from</p>
                              <p className="text-2xl font-bold text-gray-900">Rs. {car.price.toLocaleString()}/-</p>
                              <p className="text-xs text-gray-400">per day</p>
                            </div>
                          </div>

                          <p className="mt-3 text-gray-600 line-clamp-2">{car.description}</p>

                          {/* Facilities Section */}
                          <div className="mt-6">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {car.facilities.map((facility, facilityIndex) => (
                                <li key={facilityIndex} className="flex items-center space-x-2">
                                  <div className="w-7 h-7 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                                    <img
                                      src={facility.icon || "/feature-icon.svg"}
                                      alt={facility.name}
                                      className="w-4 h-4 text-yellow-500"
                                    />
                                  </div>
                                  <p className="text-sm text-gray-700">{facility.name}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm text-gray-600">{car.location || "Available nationwide"}</span>
                          </div>

                          <button
                            className="relative px-6 py-3 font-medium text-white bg-[#0F0E0E] border-2 border-[#F3B664] rounded-lg hover:text-[#F3B664] hover:bg-[#0F0E0E] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm hover:shadow-md w-full sm:w-auto text-center"
                            disabled={loadingData[index]}
                            onClick={() => handleBookNow(car, index)}
                          >
                            {loadingData[index] ? (
                              <div className="flex items-center justify-center space-x-2">
                                <svg
                                  aria-hidden="true"
                                  className="w-5 h-5 text-white animate-spin"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                  />
                                </svg>
                                <span>Processing...</span>
                              </div>
                            ) : (
                              <span className="flex items-center justify-center space-x-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                <span>Book Now</span>
                              </span>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ),
              )}
            </div>
          </section>
        )}

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}
