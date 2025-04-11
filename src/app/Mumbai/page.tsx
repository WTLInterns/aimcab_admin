import Image from 'next/image';
import Footer from '../../container/component/Footer';
import Navbar from '../../container/component/Navbar'
export default function PuneRoute() {
  // List of cities and routes
  const routes = [
    { "name": "Mumbai to Kolhapur", "description": "A comfortable and scenic journey from Mumbai to Kolhapur, where you can experience the historic Mahalakshmi Temple and explore the rich cultural heritage of the city.", "link": "/MumbaitoKolhapur" },
    { "name": "Mumbai to Satara", "description": "A peaceful and scenic drive from Mumbai to Satara, known for its historical forts, temples, and the beautiful Kaas Plateau, a UNESCO World Heritage site.", "link": "/MumbaiToSatara" },
    { "name": "Mumbai to Shirdi", "description": "A spiritual journey from Mumbai to Shirdi, home to the revered Sai Baba Temple, offering a serene and peaceful experience for devotees and tourists alike.", "link": "/MumbaiToShirdi" },
    { "name": "Mumbai to Mahabaleshwar", "description": "A scenic and refreshing journey from Mumbai to Mahabaleshwar, a beautiful hill station known for its stunning views, lush greenery, and pleasant weather.", "link": "/MumbaiToMahabaleshwar" },
    { "name": "Mumbai to Panchgani", "description": "A charming drive from Mumbai to Panchgani, a peaceful hill station surrounded by hills, lush forests, and cool climate, perfect for a relaxing getaway.", "link": "/MumbaiToPanchgani" },
    { "name": "Mumbai to Nashik", "description": "A scenic drive from Mumbai to Nashik, known for its vineyards, temples, and historical significance, making it a perfect blend of culture and nature.", "link": "/MumbaiToNashik" },
    { "name": "Mumbai to Thane", "description": "A smooth journey from Mumbai to Thane, a bustling city that combines urban convenience with scenic lakes and hills, offering a perfect escape.", "link": "/MumbaiToThane" },
    { "name": "Mumbai to Kalyan", "description": "A convenient ride from Mumbai to Kalyan, a city known for its rich history, vibrant markets, and proximity to beautiful temples and landmarks.", "link": "/MumbaiToKalyan" },
    { "name": "Mumbai to Ahmednagar", "description": "A comfortable ride from Mumbai to Ahmednagar, a historic city known for its forts, temples, and rich cultural heritage.", "link": "/MumbaiToAhmednagar" },
    { "name": "Mumbai to Solapur", "description": "A smooth and scenic ride from Mumbai to Solapur, a city renowned for its historical sites, temples, and vibrant textile industry.", "link": "/MumbaiToSolapur" },
    { "name": "Mumbai to Alibaug", "description": "A relaxing ride from Mumbai to Alibaug, a coastal town famous for its beaches, fort, and serene atmosphere.", "link": "/Mumbai-to-Alibaug-Cab-Service" },
    { "name": "Mumbai to Lonavala", "description": "A scenic drive from Mumbai to Lonavala, a popular hill station known for its lush green landscapes, valleys, and pleasant weather.", "link": "/MumbaiToLonavala" },
    { "name": "Mumbai to Igatpuri", "description": "A serene drive from Mumbai to Igatpuri, a tranquil hill station nestled in the Western Ghats, offering scenic landscapes and a refreshing escape.", "link": "/MumbaiToIgatpuri" },
    { "name": "Mumbai to Bhimashankar", "description": "A spiritual journey from Mumbai to Bhimashankar, home to the famous Bhimashankar Temple, set amidst lush forests and tranquil surroundings.", "link": "/MumbaiToBhimashankar" },
    { "name": "Mumbai to Aurangabad", "description": "A scenic ride from Mumbai to Aurangabad, known for its historical landmarks, including the Ellora and Ajanta Caves, rich in culture and heritage.", "link": "/MumbaiToAurangabad" },
    { "name": "Mumbai to Khandala", "description": "A picturesque journey from Mumbai to Khandala, a popular hill station known for its scenic landscapes, pleasant weather, and beautiful viewpoints.", "link": "/MumbaiToKhandala" },
    { "name": "Mumbai to Pandharpur", "description": "Embark on a spiritual journey from Mumbai to Pandharpur, home to the revered Vithoba temple, a pilgrimage destination for devotees seeking blessings.", "link": "/MumbaiToPandharpur" },
    { "name": "Mumbai to Baramati", "description": "Travel from Mumbai to Baramati, a town known for its agricultural heritage and the famous Baramati Temple, offering a peaceful and scenic escape.", "link": "/MumbaiToBaramati" },
    { "name": "Mumbai to Lavasa", "description": "Embark on a refreshing journey from Mumbai to Lavasa, a picturesque hill station known for its scenic views, tranquil lakes, and beautiful landscapes.", "link": "/MumbaiToLavasa" },
    { "name": "Mumbai to Dapoli", "description": "Experience a serene and scenic drive from Mumbai to Dapoli, a coastal town known for its beautiful beaches, lush greenery, and historic forts.", "link": "/MumbaiToDapoli" },
    { "name": "Mumbai to Ganpati Pule", "description": "Embark on a peaceful journey from Mumbai to Ganpati Pule, a popular destination known for its beautiful beaches and the famous Ganapati temple.", "link": "/MumbaiToGanpatiPule" },
    { "name": "Mumbai to Ratnagiri", "description": "Experience a scenic journey from Mumbai to Ratnagiri, a coastal town known for its beautiful beaches, historical forts, and the famous Ratnagiri mangoes.", "link": "/MumbaiToRatnagiri" },
    { "name": "Mumbai to Islampur", "description": "Embark on a peaceful journey from Mumbai to Islampur, a town known for its serene landscapes, temples, and rich cultural heritage.", "link": "/MumbaiToIslampur" },
    { "name": "Mumbai to Karad", "description": "Enjoy a scenic and comfortable ride from Mumbai to Karad, a town known for its historic temples and picturesque surroundings.", "link": "/MumbaiToKarad" },
    { "name": "Mumbai to Chiplun", "description": "Embark on a beautiful journey from Mumbai to Chiplun, a town nestled between lush greenery and serene rivers, known for its scenic beauty.", "link": "/Mumbai-to-Chiplun-Cab" },
    { "name": "Mumbai to Sangli", "description": "Travel from Mumbai to Sangli, a city known for its rich history, temples, and vibrant culture, offering a unique blend of tradition and modernity.", "link": "/Mumbai-to-Sangli-Cab" },
    { "name": "Mumbai to Miraj", "description": "Enjoy a peaceful journey from Mumbai to Miraj, a city known for its historical sites, temples, and vibrant cultural heritage.", "link": "/Mumbai-to-Miraj-Cab" },
    { "name": "Mumbai to Hubali", "description": "Experience a scenic and comfortable ride from Mumbai to Hubali, a city known for its rich history, cultural heritage, and vibrant markets.", "link": "/Mumbai-to-Hubali-Cab" },
    { "name": "Mumbai to Belgaon", "description": "Travel from Mumbai to Belgaon, a city known for its natural beauty, vibrant culture, and historical landmarks.", "link": "/Mumbai-to-Belgaon-Cab" },
    { "name": "Mumbai to Nippani", "description": "Embark on a journey from Mumbai to Nippani, a town known for its peaceful atmosphere and proximity to picturesque landscapes.", "link": "/Mumbai-to-Nippani-Cab" },
    { "name": "Mumbai to Goa", "description": "Enjoy a relaxed ride from Mumbai to Goa, a popular coastal destination renowned for its pristine beaches, vibrant nightlife, and scenic beauty.", "link": "/Mumbai-to-Goa-Cab" },
    { "name": "Mumbai to Malvan", "description": "Take a scenic drive from Mumbai to Malvan, a coastal town famous for its beautiful beaches, fresh seafood, and historical forts.", "link": "/Mumbai-to-Malvan-Cab" },
    { "name": "Mumbai to Karwar", "description": "Journey from Mumbai to Karwar, a town known for its serene beaches, lush landscapes, and rich cultural heritage.", "link": "/Mumbai-to-Karwar-Cab" },
    { "name": "Mumbai to Hyderabad", "description": "Travel comfortably from Mumbai to Hyderabad, a city renowned for its historical monuments, rich culture, and delectable cuisine.", "link": "/MumbaiToHyderabad" },
    { "name": "Mumbai to Bangalore", "description": "Experience a smooth and scenic journey from Mumbai to Bangalore, a city known for its technology industry, gardens, and vibrant nightlife.", "link": "/MumbaiToBangalore" },
    { "name": "Mumbai to Indore", "description": "Travel from Mumbai to Indore, a city known for its historical landmarks, vibrant culture, and delicious street food.", "link": "/MumbaiToIndore" },
    { "name": "Mumbai to Ujjain", "description": "Embark on a spiritual journey from Mumbai to Ujjain, a city famous for its ancient temples and rich religious history.", "link": "/MumbaiToUjjain" },
    { "name": "Mumbai to Nagpur", "description": "Enjoy a smooth ride from Mumbai to Nagpur, a city known for its historical significance, vibrant markets, and orange orchards.", "link": "/MumbaiToNagpur" },
    { "name": "Mumbai to Amravati", "description": "Take a journey from Mumbai to Amravati, a city known for its rich cultural heritage, historic sites, and proximity to nature.", "link": "/MumbaiToAmravati" },
    { "name": "Mumbai to Dhule", "description": "Travel comfortably from Mumbai to Dhule, a city known for its historical landmarks and its connection to the Maratha Empire.", "link": "/MumbaiToDhule" },
    { "name": "Mumbai to Jalgaon", "description": "Journey from Mumbai to Jalgaon, a city famous for its mangoes, cotton industry, and scenic landscapes.", "link": "/MumbaiToJalgaon" },
    { "name": "Mumbai to Jalna", "description": "Take a smooth ride from Mumbai to Jalna, a city known for its agricultural richness, particularly in sugarcane production.", "link": "/MumbaiToJalna" },
    { "name": "Mumbai to Beed", "description": "Travel from Mumbai to Beed, a city rich in history, agriculture, and a great place to experience rural Maharashtra.", "link": "/MumbaiToBeed" },
    { "name": "Mumbai to Barshi", "description": "Enjoy a scenic journey from Mumbai to Barshi, a small town known for its religious significance and historical temples.", "link": "/MumbaiToBarshi" },
    { "name": "Mumbai to Akkalkot", "description": "Embark on a spiritual journey from Mumbai to Akkalkot, a town renowned for its temple dedicated to Shri Swaminarayan.", "link": "/MumbaiToAkkalkot" },
    { "name": "Mumbai to Tuljapur", "description": "Experience a spiritual journey from Mumbai to Tuljapur, a town famous for its historic temple of Goddess Tulja Bhavani.", "link": "/MumbaiToTuljapur" },
    { "name": "Mumbai to Akola", "description": "Travel comfortably from Mumbai to Akola, a city known for its agricultural importance and rich history.", "link": "/MumbaiToAkola" }

];
return (
  <div className="min-h-screen bg-[#F8FAE5]">
       <Navbar />
  {/* Header Section */}
  <header className="relative bg-gradient-to-r from-[#B19470] to-[#F8FAE5] py-12 md:py-20 text-center overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#B19470]/10 to-transparent"></div>
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-[#573027] leading-tight mb-6">
        AIMCAB <span className="text-[#B19470]">Mumbai Routes</span>
      </h2> 
      <p className="text-xl md:text-2xl text-[#573027] mb-8">
        Book your cab and explore Mumbai with ease
      </p>
      
      <div className="flex justify-center space-x-4">
        <a 
          href="/" 
          className="bg-[#573027] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#76453B] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Book Now
        </a>
        <a
          href="tel:9130030054"
          className="border-2 border-[#573027] text-[#573027] px-6 py-3 rounded-full font-semibold hover:bg-[#573027] hover:text-white transition-all duration-300"
        >
          Call Us
        </a>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F8FAE5] transform skew-y-2 origin-bottom"></div>
  </header>

  {/* Route Information Section */}
  <section className="mt-8 px-4 py-8 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#573027] mb-8">Popular Routes in Mumbai</h2>  
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {routes.map((route, index) => (
        <a
          key={index} 
          href={route.link}
          className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-[#B19470]/20 hover:border-[#573027]"
        >
          <h3 className="text-xl font-bold text-[#573027]">{route.name}</h3>
          <p className="text-[#573027] mt-2">{route.description}</p>
          <div className="mt-4 text-right">
            <span className="inline-block px-6 py-3 text-[#573027] bg-[#F8FAE5] font-semibold rounded-lg shadow-md hover:bg-[#573027] hover:text-white transform hover:scale-105 transition-all duration-300">
              Book Now
            </span>
          </div>
        </a>
      ))}
    </div>
  </section>

  <Footer />
</div>
 
  );
};
