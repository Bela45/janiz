import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  // Using the specific image requested by user (reconstructed direct link logic or high quality fallback)
  // User link: https://www.pexels.com/photo/woman-in-sweater-gazing-over-rustic-fence-30537433/
  // Pexels ID: 30537433
  const bgImage = "https://images.pexels.com/photos/30537433/pexels-photo-30537433.jpeg?auto=compress&cs=tinysrgb&w=1920";

  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/30 md:bg-black/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-glam-gold tracking-[0.3em] uppercase text-sm md:text-base mb-4 animate-fade-in-up">
          Professional Makeup Artistry
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight animate-fade-in-up delay-100 drop-shadow-lg">
          Glamour <br/>
          <span className="italic font-light">by JANIZ</span>
        </h1>
        <p className="text-gray-100 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Revealing your inner radiance with bespoke beauty services in San Jose del Monte.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
          <a href="#contact" className="px-8 py-3 bg-white text-gray-900 font-medium hover:bg-glam-gold hover:text-white transition-all duration-300">
            Book Appointment
          </a>
          <a href="#portfolio" className="group px-8 py-3 border border-white text-white font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2">
            View Gallery <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};
