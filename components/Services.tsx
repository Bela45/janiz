import React from 'react';

const services = [
  { name: "Traditional Makeup", price: "₱1,500", desc: "Classic, long-lasting look for any occasion." },
  { name: "Airbrush HD", price: "₱2,500", desc: "Flawless, high-definition finish perfect for photography." },
  { name: "Bridal Package", price: "₱5,000+", desc: "Complete consultation, trial, and wedding day glam." },
  { name: "Debutante Special", price: "₱3,000", desc: "Youthful and radiant styling for your 18th birthday." },
  { name: "Hair Styling", price: "₱800", desc: "Elegant updos, waves, or straightening add-on." },
  { name: "Photoshoot Glam", price: "₱2,000", desc: "Bold and expressive makeup optimized for studio lights." }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-glam-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-glam-gold uppercase tracking-widest text-sm font-semibold">Menu</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-2 mb-4">Service Price List</h2>
          <div className="w-24 h-1 bg-glam-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {services.map((service, idx) => (
            <div key={idx} className="flex justify-between items-end border-b border-gray-700 pb-4 group hover:border-glam-gold transition-colors">
              <div className="pr-4">
                <h3 className="text-xl font-serif text-rose-50 group-hover:text-glam-gold transition-colors">{service.name}</h3>
                <p className="text-gray-400 text-sm mt-1 font-light">{service.desc}</p>
              </div>
              <div className="text-glam-gold font-bold text-lg whitespace-nowrap">
                {service.price}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 italic mb-6">Home service available within SJDM area. Additional fees may apply for out-of-town bookings.</p>
          <a href="#contact" className="inline-block px-10 py-3 border border-glam-gold text-glam-gold hover:bg-glam-gold hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-bold">
            Inquire Now
          </a>
        </div>
      </div>
    </section>
  );
};
