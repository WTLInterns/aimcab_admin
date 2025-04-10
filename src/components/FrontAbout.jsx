"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function WhoWeArePage() {
  // Refs for the counter elements
  const counterRef = useRef(null)
  
  // States for the counter values
  const [customersCount, setCustomersCount] = useState(0)
  const [carsCount, setCarsCount] = useState(0)
  const [kmCount, setKmCount] = useState(0)
  
  // Animation already played flag
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        
        // If the counter section is visible and not already animated
        if (entry.isIntersecting && !animated) {
          setAnimated(true)
          
          // Animate customer count from 0 to 100
          animateCounter(0, 100, 1500, (value) => setCustomersCount(Math.floor(value)))
          
          // Animate cars count from 0 to 200
          animateCounter(0, 200, 1500, (value) => setCarsCount(Math.floor(value)))
          
          // Animate kilometers count from 0 to 12000
          animateCounter(0, 12000, 2000, (value) => setKmCount(Math.floor(value)))
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    )

    // Start observing the counter section
    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    // Clean up observer on unmount
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [animated])

  // Function to animate a counter from start to end
  const animateCounter = (start, end, duration, callback) => {
    const startTime = performance.now()
    
    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration
        const currentValue = start + progress * (end - start)
        callback(currentValue)
        requestAnimationFrame(updateCounter)
      } else {
        callback(end)
      }
    }
    
    requestAnimationFrame(updateCounter)
  }

  return (
    <div className="min-h-screen bg-white ">
    <main className="container mx-auto px-8 md:px-12 py-16 md:py-24">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Who We Are</h1>
          <div className="flex items-center space-x-1">
            <div className="h-1 w-6 bg-yellow-500 rounded"></div>
            <div className="h-1 w-6 bg-yellow-500 rounded"></div>
            <div className="h-1 w-6 bg-yellow-500 rounded"></div>
          </div>
        </div>
  
        <p className="text-gray-600 text-lg">
          Lorem ipsum passages, and more recently with desktop publishing software like aldus pageMaker including
          versions of all the Lorem Ipsum generators on the Internet tends to repeat predefined chunks as necessary,
          making this an web evolved over the years, sometimes by accident.
        </p>
{/*   
        <a
          href="#vehicles"
          className="inline-flex items-center text-yellow-500 font-medium hover:text-yellow-600 transition-colors group"
        >
          See All Vehicles
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a> */}
      </div>
  
      {/* Counter and Image side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
  {/* Counters Section */}
  <div ref={counterRef} className="flex flex-row justify-between gap-4">
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gray-800">
        {customersCount}<span className="text-yellow-500 text-2xl align-top">%</span>
      </div>
      <div className="text-gray-600 mt-2">Happy Customer</div>
    </div>

    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gray-800">
        {carsCount}<span className="text-yellow-500 text-2xl align-top">+</span>
      </div>
      <div className="text-gray-600 mt-2">Luxury Cars</div>
    </div>

    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gray-800">
        {kmCount.toLocaleString()}<span className="text-yellow-500 text-2xl align-top">+</span>
      </div>
      <div className="text-gray-600 mt-2">Kilometers Driven</div>
    </div>
  </div>

  {/* Image Section */}
  <div className="relative flex justify-center items-center h-60 w-full">
    <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl -z-10"></div>
    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
    <Image
      src="/images/image.png"
      alt="BMW Car"
      width={500}
      height={20}
      className="object-contain p-4"
      priority
    />
  </div>
</div>
    </main>
  </div>
  )
}