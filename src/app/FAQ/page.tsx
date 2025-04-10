"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import Navbar from "../../container/component/Navbar"
import Footer from "../../container/component/Footer"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
const faqData = [
  {
    question: "How do I book a cab?",
    answer: "You can book a cab through our website or mobile app. Simply enter your pickup and drop-off locations, select the type of cab you want, and confirm your booking.",
  },
  {
    question: "What types of cabs do you offer?",
    answer: "We offer a range of cabs to suit different needs and budgets, including economy, premium, and luxury cabs. We also offer SUVs and vans for larger groups.",
  },
  {
    question: "How do I pay for my cab ride?",
    answer: "You can pay for your ride using cash, credit/debit card, or through a digital wallet. Payment options may vary depending on your location.",
  },
  {
    question: "Can I cancel my cab booking?",
    answer: "Yes, you can cancel your booking at any time before your scheduled pickup time. However, cancellation fees may apply depending on how far in advance you cancel.",
  },
  {
    question: "What if my cab doesn't arrive on time?",
    answer: "We strive to ensure that all our cabs arrive on time. In the unlikely event that your cab doesn't arrive on time, please contact our customer support team and we'll do our best to resolve the issue.",
  },
  {
    question: "Are your cabs safe?",
    answer: "Yes, all our cabs are regularly serviced and maintained to ensure they are safe and roadworthy. Our drivers are also trained to prioritize your safety.",
  },
  {
    question: "Do you offer airport pickups?",
    answer: "Yes, we offer airport pickups and drop-offs at most major airports. You can book your airport transfer through our website or mobile app.",
  },
  {
    question: "Can I book a cab for someone else?",
    answer: "Yes, you can book a cab for someone else. Just enter their pickup and drop-off locations and provide their contact details so we can get in touch with them if necessary.",
  },
  {
    question: "Do you offer discounts for frequent riders?",
    answer: "Yes, we offer loyalty discounts for frequent riders. The more you ride with us, the more you can save on your cab fares.",
  },
]

export default function FAQPage() {
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
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-[#B19470] font-semibold">
       <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r h-[32rem] from-[#76453B] via-[#9C6F5D] to-[#F3B664] py-20 px-4 text-white overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
  
  {/* Floating circles decoration */}
  <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-[#F3B664]/10 blur-xl"></div>
  <div className="absolute bottom-10 -right-10 w-80 h-80 rounded-full bg-[#76453B]/10 blur-xl"></div>
  
  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-4">
    <div className="text-center lg:text-left">
      <h1 
        ref={headingRef}
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
      >
        Frequently Asked <span className="text-[#F3B664]">Questions</span>
      </h1>
      
      <p 
        ref={paragraphRef}
        className="text-xl md:text-2xl max-w-3xl mx-auto lg:mx-0 mb-10 font-light opacity-90"
      >
        Everything you need to know about our premium cab services
      </p>
      
      {/* Animated search input for FAQs */}
      {/* <div className="max-w-xl mx-auto lg:mx-0 relative">
        <input 
          type="text" 
          placeholder="Search your questions..."
          className="w-full py-4 px-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F3B664] placeholder-white/70 transition-all duration-300 hover:bg-white/15"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F3B664] text-[#76453B] p-2 rounded-md hover:bg-[#f8c982] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div> */}
    </div>
  </div>
  
  {/* Dynamic bottom wave effect */}
       <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-[#B19470] to-[#F8FAE5] font-semibold transform skew-y-2 origin-bottom"></div>
</section>


       






        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto py-16 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Common Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Find quick answers to our most frequently asked questions below
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'ring-2 ring-[#76453B]' : 'hover:shadow-lg'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <span className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-blue-600" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-500" />
                    )}
                  </span>
                </button>
                
                <div
                  className={`px-6 pb-6 transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is available 24/7 to help you.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 hover:scale-105 shadow-md">
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </div>
  )
}