import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, MapPin, ChevronUp } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Oculta na Hero (topo), surge suavemente da direita para a esquerda ao rolar para baixo (> 350px)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[70] flex flex-row items-center gap-2 sm:gap-2.5 select-none p-1.5 transition-all duration-500 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-x-16 scale-95 pointer-events-none'
      }`}
    >
      {/* 1. Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#15171C]/95 hover:bg-pinheirao-green text-white border border-white/20 shadow-lg backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-105 shrink-0"
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        <ChevronUp size={20} className="transition-transform group-hover:-translate-y-0.5" />
        <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:inline-block shadow-md">
          Topo
        </span>
      </button>

      {/* 2. Botão Localização / Showroom */}
      <a
        href="https://maps.google.com/?q=Av.+Jacob+Macanhan,+1369+-+Jardim+Claudia,+Pinhais+-+PR"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#15171C]/95 hover:bg-pinheirao-green text-white border border-white/20 shadow-lg backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-105 shrink-0"
        aria-label="Como Chegar ao Showroom"
        title="Ver Localização no Google Maps"
      >
        <MapPin size={18} className="text-pinheirao-green group-hover:text-white transition-colors" />
        <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:inline-block shadow-md">
          Showroom
        </span>
      </a>

      {/* 3. Botão Ligar Agora */}
      <a
        href="tel:4136678015"
        className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#15171C]/95 hover:bg-pinheirao-green text-white border border-white/20 shadow-lg backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-105 shrink-0"
        aria-label="Ligar Agora para Casas Pinheirão"
        title="Ligar (41) 3667-8015"
      >
        <Phone size={18} className="text-pinheirao-green group-hover:text-white transition-colors" />
        <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:inline-block shadow-md">
          (41) 3667-8015
        </span>
      </a>

      {/* 4. Botão WhatsApp Oficial no Verde do Site com Alerta */}
      <a
        href="https://api.whatsapp.com/send?phone=5541996301028&text=Olá! Gostaria de falar sobre orçamento de casas pré-fabricadas."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-pinheirao-green hover:bg-pinheirao-deep text-white shadow-xl shadow-pinheirao-green/40 border-2 border-white flex items-center justify-center transition-all duration-300 hover:scale-105 shrink-0"
        aria-label="Falar no WhatsApp"
      >
        {/* Soft Ambient Alert Ripple Wave */}
        <span className="absolute inset-0 rounded-full bg-pinheirao-green opacity-40 animate-ping pointer-events-none" />
        
        {/* Full Visible Alert Badge */}
        <span className="absolute top-0 right-0 translate-x-1 -translate-y-1 flex h-4 w-4 z-20">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-md"></span>
        </span>

        <MessageCircle size={24} className="relative z-10" />

        {/* Hover Text Badge for Desktop */}
        <span className="absolute bottom-14 right-0 bg-[#0F1115] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm whitespace-nowrap shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:inline-block">
          WhatsApp Oficial
        </span>
      </a>

    </div>
  );
};
