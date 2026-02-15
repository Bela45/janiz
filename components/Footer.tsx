import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-serif text-2xl mb-2">Glamour by JANIZ</h2>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4 text-xs text-gray-600 uppercase tracking-widest">
           <a href="#" className="hover:text-glam-gold">Privacy</a>
           <a href="#" className="hover:text-glam-gold">Terms</a>
        </div>
      </div>
    </footer>
  );
};
