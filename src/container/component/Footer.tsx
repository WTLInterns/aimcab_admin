    'use client';

    export default function Footer() {
      return (
        <div className="bg-gradient-to-r from-[#8B6A4D] to-[#564632] font-semibold text-white py-8 sm:py-10 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Combined Cities and Quick Links in compact layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Popular Cities */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 text-center md:text-left">Our Top Cities</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {['Pune', 'Mumbai', 'Bangalore', 'Delhi'].map((city) => (
                  <a 
                    href={`/${city}`} 
                    key={city}
                    className="px-3 py-1 text-sm bg-white/10 rounded-full text-white hover:bg-white/20 hover:text-white transition-all"
                  >
                    {city}
                  </a>
                ))}
              </div>
            </div>
      
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 text-center md:text-left">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {name: 'Home', link: '/'},
                  {name: 'About', link: '/#about'},
                  {name: 'Services', link: '/#service'},
                  {name: 'Contact', link: '/Contact'},
                  {name: 'FAQ', link: '/FAQ'},
                  {name: 'Privacy', link: '/PrivacyPolicy'},
                ].map((item) => (
                  <a 
                    href={item.link} 
                    key={item.name}
                    className="text-sm text-white hover:text-white transition-colors text-center md:text-left"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
      
          {/* Divider */}
          <hr className="border-white/20 my-4" />
      
          {/* Bottom compact row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-white/80 text-center sm:text-left">
              © {new Date().getFullYear()} Aimcab | 
              Designed by <a 
                href="https://cobaztech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white"
              >
                Cobaztech
              </a>
            </div>
      
            {/* Social Media - Compact */}
            <div className="flex justify-center gap-3">
              {['facebook', 'instagram', 'youtube', 'whatsapp'].map((platform) => (
                <a 
                  key={platform}
                  href={`https://${platform}.com/Aimcab`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                >
                  <img 
                    className="w-full h-full object-contain" 
                    src={`images/${platform}.png`} 
                    alt={platform} 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      );
    }
