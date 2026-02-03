import React, { useEffect, useRef, useState } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-white transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pinheirao-green mb-4">Siga-nos no Instagram</h2>
          <h3 className="text-3xl sm:text-4xl font-black text-pinheirao-black mb-6 italic">Acompanhe nossas <span className="text-pinheirao-green">obras e novidades</span></h3>
          <div className="w-20 h-1 bg-pinheirao-green mx-auto"></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 h-[600px] sm:h-[750px] relative">
            {isVisible && (
              <iframe
                src="https://www.instagram.com/casas_pinheirao/embed"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                title="Instagram Feed - Casas Pinheirão"
              ></iframe>
            )}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.instagram.com/casas_pinheirao/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <Instagram size={20} />
              <span>Ver Perfil Completo</span>
              <ExternalLink size={16} className="opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
