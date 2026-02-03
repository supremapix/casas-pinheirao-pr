
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero images slider
  const heroImages = [
    "/hero-home.png",
    "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/u9zireyc_hero-image.png",
    "/hero-imagem-3.png",
    "/tradicao_em_pinhais.png"
  ];

  // Textos para o efeito máquina de escrever
  const heroTexts = [
    "Realize o Sonho da Casa Própria",
    "Casas de Qualidade em Pinhais",
    "Seu Novo Lar Te Espera Aqui",
    "Financiamento Facilitado"
  ];

  // Slider automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  // Efeito máquina de escrever
  useEffect(() => {
    const currentText = heroTexts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % heroTexts.length);
        }
      }
    }, isDeleting ? 50 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-pinheirao-black">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Casa Pinheirão - Especialista em Casas Pré-Fabricadas ${index + 1}`}
              onLoad={() => index === 0 && setIsLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                index === currentSlide
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        {/* Overlay escuro para contraste WCAG AA */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

        {/* Indicadores do Slider */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-pinheirao-green w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-pinheirao-green/20 backdrop-blur-md border border-pinheirao-green/30 px-3 sm:px-4 py-2 mb-6 sm:mb-8 rounded-sm animate-fade-in-down">
            <ShieldCheck size={14} className="text-pinheirao-green sm:w-4 sm:h-4" />
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-[0.3em] text-white">Qualidade e tradição desde 2004</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black leading-[1.1] mb-6 sm:mb-8 uppercase tracking-tighter italic animate-fade-in">
            <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {displayText}
              <span className="typewriter-cursor text-pinheirao-green">|</span>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed font-medium max-w-xl animate-fade-in-up drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Referência em casas de madeira nobre e alvenaria em Curitiba e Região. Projetos personalizados que cabem no seu bolso e realizam seu sonho.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 animate-fade-in-up">
            <Link
              to="/envie-seu-projeto"
              className="btn-hero group relative overflow-hidden bg-pinheirao-green hover:bg-pinheirao-deep text-white px-8 sm:px-12 py-4 sm:py-5 rounded-sm font-black text-xs uppercase tracking-wider sm:tracking-widest transition-all shadow-2xl hover:-translate-y-1 flex items-center justify-center"
            >
              <span className="relative z-10">Solicitar Orçamento</span>
              <ArrowRight size={18} className="ml-2 sm:ml-3 relative z-10" />
              <span className="btn-ripple"></span>
            </Link>
            <Link
              to="/projetos"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/40 hover:border-white/60 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-sm font-black text-xs uppercase tracking-wider sm:tracking-widest transition-all flex items-center justify-center hover:-translate-y-1"
            >
              Ver Nossos Modelos
            </Link>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              'Madeira de Lei',
              'Entrega Ágil',
              'Projetos Autorais',
              'Custo-Benefício'
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckCircle size={12} className="text-pinheirao-green shrink-0 sm:w-3.5 sm:h-3.5" />
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wide sm:tracking-widest text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-60">
        <div className="w-px h-12 bg-white mb-2"></div>
        <span className="text-[8px] font-black uppercase tracking-[0.3em] vertical-text text-white">Role</span>
      </div>

      <style>{`
        .typewriter-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        .btn-hero {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(11, 181, 151, 0.7);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(11, 181, 151, 0);
          }
        }

        .btn-hero::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-hero:active::after {
          width: 300px;
          height: 300px;
        }
      `}</style>
    </section>
  );
};
