import React, { useEffect, useRef, useState } from 'react';
import { Instagram, ArrowRight, ShieldCheck } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50/50 border-y border-gray-200/60 py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Soft Glow Ambient Background Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-bl from-purple-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Header with Fade-In Animation */}
        <div
          className={`space-y-4 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Official Instagram Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white shadow-sm">
            <Instagram size={14} className="shrink-0" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
              Social Real @casas_pinheirao
            </span>
          </div>

          {/* Main Title */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-gray-950 tracking-tight leading-tight">
            Siga-nos no Instagram •{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600">
              @casas_pinheirao
            </span>
          </h3>

          {/* Description */}
          <p className="text-gray-600 font-medium max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Acompanhe o dia a dia das nossas obras em tempo real, novos lançamentos de plantas, detalhes construtivos e histórias reais de famílias no Paraná.
          </p>
        </div>

        {/* Embedded Feed Card with Smooth Hover and Shadow */}
        <div
          className={`w-full max-w-md mt-10 transition-all duration-700 delay-150 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl shadow-gray-200/50 overflow-hidden hover:scale-[1.01] transition-transform duration-300 flex flex-col">
            <iframe
              src="https://www.instagram.com/casas_pinheirao/embed"
              title="Feed Instagram Casas Pinheirão"
              className="w-full aspect-[9/11] sm:aspect-[4/5] border-0 block"
              loading="lazy"
            />
          </div>
        </div>

        {/* CTA Buttons & Authority Badge Area */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full transition-all duration-700 delay-300 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main Instagram Action Button */}
          <a
            href="https://www.instagram.com/casas_pinheirao/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all group"
          >
            <Instagram size={18} />
            <span>Seguir no Instagram Oficial</span>
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
          </a>

          {/* Floating Authority Badge */}
          <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white border border-gray-200/80 rounded-xl shadow-sm">
            <ShieldCheck size={18} className="text-pinheirao-green shrink-0" />
            <span className="text-xs font-mono font-bold text-gray-800 tracking-tight uppercase">
              Comunidade Oficial de Curitiba e Região
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
