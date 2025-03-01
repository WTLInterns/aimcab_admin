"use client"

import { useState, useRef } from "react"
import { Plus, Minus } from "lucide-react"

// Assuming Navbar and Footer are in the container folder
import Navbar from "../../container/component/Navbar"
import Footer from "../../container/component/Footer"

// FAQ data
const faqData = [
  {
    question: "How do I book a cab?",
    answer:
      "You can book a cab through our website or mobile app. Simply enter your pickup and drop-off locations, select the type of cab you want, and confirm your booking.",
  },
  {
    question: "What types of cabs do you offer?",
    answer:
      "We offer a range of cabs to suit different needs and budgets, including economy, premium, and luxury cabs. We also offer SUVs and vans for larger groups.",
  },
  {
    question: "How do I pay for my cab ride?",
    answer:
      "You can pay for your ride using cash, credit/debit card, or through a digital wallet. Payment options may vary depending on your location.",
  },
  {
    question: "Can I cancel my cab booking?",
    answer:
      "Yes, you can cancel your booking at any time before your scheduled pickup time. However, cancellation fees may apply depending on how far in advance you cancel.",
  },
  {
    question: "What if my cab doesn't arrive on time?",
    answer:
      "We strive to ensure that all our cabs arrive on time. In the unlikely event that your cab doesn't arrive on time, please contact our customer support team and we'll do our best to resolve the issue.",
  },
  {
    question: "Are your cabs safe?",
    answer:
      "Yes, all our cabs are regularly serviced and maintained to ensure they are safe and roadworthy. Our drivers are also trained to prioritize your safety.",
  },
  {
    question: "Do you offer airport pickups?",
    answer:
      "Yes, we offer airport pickups and drop-offs at most major airports. You can book your airport transfer through our website or mobile app.",
  },
  {
    question: "Can I book a cab for someone else?",
    answer:
      "Yes, you can book a cab for someone else. Just enter their pickup and drop-off locations and provide their contact details so we can get in touch with them if necessary.",
  },
  {
    question: "Do you offer discounts for frequent riders?",
    answer:
      "Yes, we offer loyalty discounts for frequent riders. The more you ride with us, the more you can save on your cab fares.",
  },
]

// FAQ Item component
const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) => {
  // Properly typing the ref with HTMLDivElement
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div
      style={{
        marginTop: "-20px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: "20px 20px",
        marginBottom: "30px",
        borderRadius: "5px",
        boxShadow: "0 15px 25px rgba(0, 0, 50, 0.2)",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "16px",
          color: isOpen ? "#0084e9" : "#111130",
          fontWeight: 600,
          border: "none",
          outline: "none",
          cursor: "pointer",
          padding: "10px 0",
          transition: "color 0.3s ease",
        }}
      >
        {question}
        {isOpen ? (
          <Minus style={{ transition: "transform 0.3s ease" }} />
        ) : (
          <Plus style={{ transition: "transform 0.3s ease" }} />
        )}
      </button>
      <div
        ref={contentRef}
        style={{
          overflow: "hidden",
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight}px`
            : "0",
          transition: "max-height 0.5s ease",
          fontSize: "14px",
          lineHeight: "30px",
          textAlign: "justify",
        }}
      >
        <p style={{ padding: "10px 0" }}>{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div style={{ marginTop: "0px" }}>
      {/* Navbar Component */}
      <Navbar />

      {/* FAQ Section */}
      <div
        style={{
          padding: "80px 0",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>

      {/* Footer Component */}
      <Footer />

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          background-image: url('/images/faq.jpg');  /* Add your image URL here */
          background-size: cover;  /* Ensure the image covers the entire background */
          background-position: center;  /* Position the image in the center */
          background-attachment: fixed;  /* Keep the image fixed as you scroll */
        }
        
        * {
          box-sizing: border-box;
        }
        
        @media (max-width: 768px) {
          .responsive {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            background-color: white;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
        }
      `}</style>
    </div>
  )
}
