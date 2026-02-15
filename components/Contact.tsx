import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1">
             <div className="mb-8">
              <span className="text-glam-gold uppercase tracking-widest text-sm font-semibold">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-2 mb-6">Book Your Appointment</h2>
              <p className="text-gray-500 font-light text-lg leading-relaxed">
                Ready to shine? Contact us to discuss your look for weddings, debuts, photoshoots, or special events. We are located in the heart of San Jose del Monte.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-glam-gold group-hover:bg-glam-gold group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gray-900 mb-1">Studio Location</h4>
                  <p className="text-gray-600">112 San Pedro St, SJDM</p>
                  <p className="text-gray-400 text-sm">San Jose del Monte, Bulacan</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-glam-gold group-hover:bg-glam-gold group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gray-900 mb-1">Phone Number</h4>
                  <p className="text-gray-600">0978 653 421</p>
                  <p className="text-gray-400 text-sm">Available Mon-Sun, 9AM - 6PM</p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100 flex gap-6">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-glam-gold hover:text-glam-gold transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-glam-gold hover:text-glam-gold transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-glam-gold hover:text-glam-gold transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&q=80&w=1000" 
              alt="Makeup Brushes" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <p className="text-white italic font-serif text-lg text-center">
                  "Beauty is power, and makeup is something that really enhances that; it's a woman's secret."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
