import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, MapPin, ChevronUp } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const scrollY = window.scrollY;
      const footerElement = document.querySelector('footer');

      // Verifica se o usuário chegou próximo ou está no footer
      let isNearFooter = false;
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        // Se o topo do footer estiver visível na janela ou prestes a entrar
        isNearFooter = footerRect.top <= (window.innerHeight - 20);
      }

      // Oculta no topo da página (< 350px) OU quando o footer estiver visível
      if (scrollY > 350 && !isNearFooter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[70] flex flex-row items-center gap-2 sm:gap-3 select-none p-2 transition-all duration-500 ease-out transform ${
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

      {/* 4. Botão WhatsApp Oficial com Alerta 100% Visível e Destacado */}
      <div className="relative inline-flex shrink-0">
        <a
          href="https://api.whatsapp.com/send?phone=5541996301028&text=Olá! Gostaria de falar sobre orçamento de casas pré-fabricadas."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pinheirao-green hover:bg-pinheirao-deep text-white shadow-xl shadow-pinheirao-green/40 border-2 border-white flex items-center justify-center transition-all duration-300 hover:scale-110 shrink-0"
          aria-label="Falar no WhatsApp"
        >
          {/* Ambient Ripple Wave */}
          <span className="absolute inset-0 rounded-full bg-pinheirao-green opacity-40 animate-ping pointer-events-none" />

          <MessageCircle size={26} className="relative z-10 drop-shadow-sm" />

          {/* Hover Text Badge for Desktop */}
          <span className="absolute bottom-16 right-0 bg-[#0F1115] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm whitespace-nowrap shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:inline-block">
            WhatsApp Oficial
          </span>
        </a>

        {/* 100% Fully Visible Notification Alert Badge (Uncut, Elevated Z-Index, Dual Glowing Rings) */}
        <span className="absolute -top-1 -right-1 z-30 flex h-5 w-5 pointer-events-none">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-90"></span>
          <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 bg-emerald-500 text-[10px] font-black text-white border-2 border-white shadow-[0_0_10px_rgba(16,185,129,0.9)]">
            1
          </span>
        </span>
      </div>

    </div>
  );
};
