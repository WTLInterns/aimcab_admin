'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function JourneySection() {
  const [counts, setCounts] = useState({
    fleet: 0,
    cabs: 0,
    customers: 0,
    trips: 0
  });

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const increments = {
      fleet: 50,
      cabs: 500,
      customers: 200,
      trips: 3000
    };

    const startTime = Date.now();
    const animate = () => {
      const progress = Math.min(1, (Date.now() - startTime) / duration);
      
      setCounts({
        fleet: Math.floor(progress * increments.fleet),
        cabs: Math.floor(progress * increments.cabs),
        customers: Math.floor(progress * increments.customers) + 'K+',
        trips: Math.floor(progress * increments.trips) + '+'
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="mt-16 p-8 bg-gradient-to-br from-[#F8FAE5] to-[#B19470] rounded-xl shadow-2xl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#76453B]/10 rounded-full"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#76453B]/10 rounded-full"></div>
      
      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h4 className="text-4xl font-bold text-[#76453B] drop-shadow-lg">
            🏆 Our Journey Since 2001
          </h4>
          <p className="mt-4 text-xl text-[#76453B]/90 font-medium">
            Trusted by 2 lakh+ happy customers across India
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { value: counts.fleet, label: "Own Fleet Vehicles", icon: "" },
            { value: counts.cabs, label: "Network Cabs", icon: "" },
            { value: counts.customers, label: "Happy Customers", icon: "" },
            { value: counts.trips, label: "Successful Trips", icon: "" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#76453B]/20"
            >
              <div className="text-5xl font-bold text-[#76453B] mb-2">
                {stat.value}
                <span className="ml-2 text-3xl">{stat.icon}</span>
              </div>
              <p className="text-lg text-[#76453B]/90 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-[#76453B]/10 p-8 rounded-xl border border-[#76453B]/20"
        >
          <p className="text-center text-xl italic text-[#76453B] font-medium">
            "From humble beginnings to becoming one of Pune's most trusted cab services, we remain committed to delivering safe, affordable, and comfortable journeys for every traveler."
          </p>
          <p className="text-center mt-6 font-bold text-[#76453B] text-lg">
            - The Aim Cab Team
          </p>
        </motion.div>
      </div>
    </section>
  );
}