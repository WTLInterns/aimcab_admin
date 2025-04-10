"use client"

import { useState, useEffect } from 'react';

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-10 px-4 bg-gradient-to-r from-white to-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Best Price Guaranteed */}
          <div 
            className={`feature-card flex flex-col items-center text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="w-20 h-20 mb-4 rounded-full bg-red-50 flex items-center justify-center p-5 shadow-md border border-red-100">
              {/* Replaced SVG with image */}
              <img 
                src="/images/offer-icon1.png" 
                alt="Price tag icon" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Best Price Guaranteed</h3>
            <p className="text-gray-600">A more recently with desktop softy like aldus page maker.</p>
            <div className="mt-4 w-16 h-1 bg-red-400 rounded-full transition-all duration-500 hover:w-24"></div>
          </div>
          
          {/* 24/7 Customer Care */}
          <div 
            className={`feature-card flex flex-col items-center text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="w-20 h-20 mb-4 rounded-full bg-red-50 flex items-center justify-center p-5 shadow-md border border-red-100">
              {/* Replaced SVG with image */}
              <img 
                src="/images/offer-icon2.png" 
                alt="Customer care icon" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">24/7 Customer Care</h3>
            <p className="text-gray-600">A more recently with desktop softy like aldus page maker.</p>
            <div className="mt-4 w-16 h-1 bg-red-400 rounded-full transition-all duration-500 hover:w-24"></div>
          </div>
          
          {/* Home Pickups */}
          <div 
            className={`feature-card flex flex-col items-center text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="w-20 h-20 mb-4 rounded-full bg-red-50 flex items-center justify-center p-5 shadow-md border border-red-100">
              {/* Replaced SVG with image */}
              <img 
                src="/images/offer-icon3.png" 
                alt="Home pickup icon" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Home Pickups</h3>
            <p className="text-gray-600">A more recently with desktop softy like aldus page maker.</p>
            <div className="mt-4 w-16 h-1 bg-red-400 rounded-full transition-all duration-500 hover:w-24"></div>
          </div>
          
          {/* Easy Bookings */}
          <div 
            className={`feature-card flex flex-col items-center text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="w-20 h-20 mb-4 rounded-full bg-red-50 flex items-center justify-center p-5 shadow-md border border-red-100">
              {/* Replaced SVG with image */}
              <img 
                src="/images/offer-icon4.png" 
                alt="Booking icon" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Easy Bookings</h3>
            <p className="text-gray-600">A more recently with desktop softy like aldus page maker.</p>
            <div className="mt-4 w-16 h-1 bg-red-400 rounded-full transition-all duration-500 hover:w-24"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}