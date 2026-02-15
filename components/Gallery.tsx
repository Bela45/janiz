import React, { useState } from 'react';
import { MoveHorizontal } from 'lucide-react';

export const Gallery: React.FC = () => {
  // Replaced previous landscape images with high-quality makeup portrait shots
  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800",
      category: "Bridal",
      title: "Radiant Bride"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?auto=format&fit=crop&q=80&w=800",
      category: "Editorial",
      title: "Runway Ready"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
      category: "Glamour",
      title: "Evening Glow"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
      category: "Creative",
      title: "Avant-Garde"
    }
  ];

  const [sliderPosition, setSliderPosition] = useState(50);
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  // Placeholders for Before/After transformation.
  // Note: For the best result, replace these URLs with your specific aligned before/after images.
  const afterImage = "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=1200"; // Glam Look
  const beforeImage = "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80&w=1200"; // Natural Look

  return (
    <section id="portfolio" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-glam-gold uppercase tracking-widest text-sm font-semibold">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-2 mb-4">Portfolio & Gallery</h2>
          <div className="w-24 h-1 bg-glam-gold mx-auto"></div>
        </div>

        {/* Before & After Feature */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-center mb-8 flex items-center justify-center gap-2">
            <MoveHorizontal className="text-glam-gold" /> Transformation Highlight
          </h3>
          <p className="text-center text-gray-500 mb-6 italic max-w-2xl mx-auto">
             Drag the slider to reveal the glamour transformation.
          </p>
          
          {/* Changed aspect ratio to portrait (aspect-[3/4]) to fit makeup photos better */}
          <div className="relative w-full max-w-xl mx-auto aspect-[3/4] overflow-hidden rounded-xl shadow-2xl group select-none">
             {/* After Image (Background) */}
            <div 
              className="absolute inset-0 bg-cover bg-top"
              style={{ backgroundImage: `url('${afterImage}')` }}
            >
              <span className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 text-xs uppercase tracking-widest rounded-full z-10">After</span>
            </div>

            {/* Before Image (Foreground - Clipped) */}
            <div 
              className="absolute inset-0 bg-cover bg-top border-r-2 border-white"
              style={{ 
                backgroundImage: `url('${beforeImage}')`,
                width: `${sliderPosition}%` 
              }}
            >
               <span className="absolute top-4 left-4 bg-white/80 text-gray-900 px-3 py-1 text-xs uppercase tracking-widest rounded-full z-10">Before</span>
            </div>

            {/* Slider Control */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPosition} 
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
            
            {/* Slider Handle Visual */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-20 flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="bg-white p-2 rounded-full shadow-md text-gray-400">
                <MoveHorizontal size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Masonry Grid - Updated to 4 columns on large screens for better density */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-glam-gold text-xs uppercase tracking-widest mb-1">{item.category}</span>
                <h3 className="text-white font-serif text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};