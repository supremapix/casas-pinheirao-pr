
import React, { useState, useEffect } from 'react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] p-4 flex justify-center">
      <div className="bg-pinheirao-black/95 backdrop-blur shadow-2xl rounded-sm border border-white/10 p-8 max-w-2xl w-full flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        <div className="text-sm">
          <p className="font-black uppercase tracking-widest text-pinheirao-green mb-2">Nós respeitamos sua privacidade</p>
          <p className="text-pinheirao-concrete/70 font-medium">Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa <a href="#" className="underline font-bold hover:text-pinheirao-green transition-colors">Política de Privacidade</a>.</p>
        </div>
        <button
          onClick={handleAccept}
          className="bg-pinheirao-green text-white px-10 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-pinheirao-deep transition-all shadow-lg whitespace-nowrap"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};
