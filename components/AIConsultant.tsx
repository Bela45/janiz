import React, { useState, useRef } from 'react';
import { Sparkles, Upload, Loader2, Send } from 'lucide-react';
import { getBeautyAdvice } from '../services/geminiService';

export const AIConsultant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConsultation = async () => {
    if (!prompt && !image) return;

    setLoading(true);
    setResponse(null);

    // Strip base64 prefix for API if needed, but often client handles it. 
    // For geminiService we passed raw base64 string usually but let's clean it just in case
    const imageBase64 = image ? image.split(',')[1] : undefined;
    
    const result = await getBeautyAdvice(prompt || "Please analyze this image and suggest a makeup look.", imageBase64);
    
    setResponse(result);
    setLoading(false);
  };

  return (
    <section id="ai-consultant" className="py-20 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-rose-50">
          <div className="grid md:grid-cols-2">
            
            {/* Left Side - Info */}
            <div className="p-10 md:p-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-glam-gold mb-4">
                <Sparkles className="animate-pulse" />
                <span className="uppercase tracking-widest text-xs font-bold">Powered by Gemini</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                Janiz Virtual Beauty Consultant
              </h2>
              <p className="text-gray-300 mb-8 font-light leading-relaxed">
                Not sure what look suits your outfit? Upload a photo of your dress or a selfie, and let our AI suggest the perfect color palette and style for your appointment.
              </p>
              
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-glam-gold rounded-full"></span>
                  Personalized color recommendations
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-glam-gold rounded-full"></span>
                  Style matching for events
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-glam-gold rounded-full"></span>
                  Instant professional advice
                </li>
              </ul>
            </div>

            {/* Right Side - Interactive */}
            <div className="p-10 md:p-12 bg-white flex flex-col">
              <div className="flex-grow space-y-6">
                
                {/* Image Upload Area */}
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${image ? 'border-glam-gold bg-amber-50' : 'border-gray-200 hover:border-glam-gold hover:bg-gray-50'}`}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  {image ? (
                    <div className="relative h-48 w-full">
                      <img src={image} alt="Upload" className="w-full h-full object-contain rounded-lg" />
                      <button 
                        onClick={(e) => { e.stopPropagation(); setImage(null); }}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center py-8">
                      <Upload className="text-gray-400 mb-3" size={32} />
                      <p className="text-sm text-gray-500 font-medium">Click to upload reference photo</p>
                      <p className="text-xs text-gray-400 mt-1">Optional: Dress, accessory, or selfie</p>
                    </div>
                  )}
                </div>

                {/* Text Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ask Janiz AI</label>
                  <textarea
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-glam-gold focus:border-transparent outline-none resize-none bg-gray-50 text-gray-900 placeholder-gray-400"
                    placeholder="E.g., What lipstick goes with a emerald green dress for an evening wedding?"
                    rows={3}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleConsultation}
                  disabled={loading || (!prompt && !image)}
                  className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all ${
                    loading || (!prompt && !image) 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-glam-dark text-white hover:bg-glam-gold shadow-lg hover:shadow-xl'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" /> Analyzing Style...
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} /> Get Advice
                    </>
                  )}
                </button>
              </div>

              {/* Response Area */}
              {response && (
                <div className="mt-8 p-6 bg-rose-50 rounded-xl border border-rose-100 animate-fadeIn">
                  <h4 className="text-rose-900 font-serif font-bold mb-2 flex items-center gap-2">
                    <Sparkles size={16} className="text-glam-gold" /> Janiz's Suggestion:
                  </h4>
                  <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-line">
                    {response}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
