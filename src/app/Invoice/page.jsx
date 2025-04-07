
"use client"

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
const InvoicePage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the data to your API
    // For now, we'll just navigate after a short delay to simulate processing
    setTimeout(() => {
      router.push('/ThankYou');
    }, [])
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 p-6 text-white">
          <h1 className="text-3xl font-bold">Invoice</h1>
          <p className="mt-2">Booking Confirmation #INV-2025-00404</p>
        </div>

        <div className="p-6">
          {/* Cab Information Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Cab Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Model Type:</p>
                <p className="font-medium">Hatchback</p>
              </div>
              <div>
                <p className="text-gray-600">Seats:</p>
                <p className="font-medium">4+1</p>
              </div>
              <div>
                <p className="text-gray-600">Fuel Type:</p>
                <p className="font-medium">CNG-Diesel</p>
              </div>
              <div>
                <p className="text-gray-600">Availability:</p>
                <p className="font-medium text-green-600">Available</p>
              </div>
            </div>
          </div>

          {/* Trip Information Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Trip Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Pickup Location:</p>
                <p className="font-medium">Pune, Maharashtra, India</p>
              </div>
              <div>
                <p className="text-gray-600">Drop Location:</p>
                <p className="font-medium">Mumbai, Maharashtra, India</p>
              </div>
              <div>
                <p className="text-gray-600">Date:</p>
                <p className="font-medium">April 4, 2025</p>
              </div>
              <div>
                <p className="text-gray-600">Time:</p>
                <p className="font-medium">2:48 PM</p>
              </div>
              <div>
                <p className="text-gray-600">Trip Type:</p>
                <p className="font-medium">One Way</p>
              </div>
              <div>
                <p className="text-gray-600">Distance:</p>
                <p className="font-medium">151 km</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Pricing Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-600">Base Price:</p>
                <p className="font-medium">₹1,812.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Service Charge:</p>
                <p className="font-medium">₹90.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">GST (10%):</p>
                <p className="font-medium">₹180.00</p>
              </div>
              <div className="flex justify-between pt-4 border-t mt-2">
                <p className="text-lg font-semibold text-gray-800">Total Amount:</p>
                <p className="text-xl font-bold text-indigo-600">₹2,082.00</p>
              </div>
            </div>
          </div>

          {/* Customer Details Form */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Customer Details</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Processing...' : 'Confirm & Book Now'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4">
          <p className="text-center text-gray-500 text-sm">
            Thank you for choosing our service. For any queries, contact us at support@cabservice.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;