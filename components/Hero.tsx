import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Award, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_IMAGES = [
  "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/k5q0d5b7_hero-imagem-3.png",
  "/casas-pinheirao-1.jpg",
  "/casas-pinheirao-2.jpg",
  "/casas-pinheirao-3.jpg",
  "/casas-pinheirao-4.jpg",
  "/casas-pinheirao-5.jpg"
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-pinheirao-black overflow-hidden pt-20 pb-12">
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Mobile Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="sm:hidden absolute inset-0 w-full h-full object-cover object-center scale-105 opacity-75 filter brightness-90 contrast-105"
          src="https://img.supremasite.com.br/pinheirao/casa.mp4"
        />

        {/* Desktop Background Slideshow with Smooth Crossfade */}
        <div className="hidden sm:block absolute inset-0 w-full h-full">
          {HERO_IMAGES.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Casas Pinheirão - Especialista em Casas Pré-Fabricadas e Alvenaria ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-70 scale-100' : 'opacity-0 scale-105'
              }`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        {/* Professional dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-pinheirao-black via-pinheirao-black/80 to-pinheirao-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-pinheirao-black via-transparent to-pinheirao-black/60"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 text-center flex flex-col items-center">
        
        {/* Refined Top Badge - No text break on mobile */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0F1115]/90 border border-pinheirao-green/50 backdrop-blur-md shadow-xl mb-6 select-none">
          <ShieldCheck size={16} className="text-pinheirao-green shrink-0" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white whitespace-nowrap">
            Tradição em Pinhais • CREA-PR
          </span>
        </div>

        {/* Centered Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.08] max-w-4xl text-center mb-6">
          <span className="text-white font-black">Realize o sonho da </span>
          <span className="text-pinheirao-green font-black">casa própria</span>
          <span className="text-white font-black"> com segurança.</span>
        </h1>

        {/* Centered Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed text-center mb-8">
          Especialistas em casas pré-fabricadas de madeira nobre e alvenaria sob medida. Mais de 20 anos construindo com excelência em Curitiba e Região Metropolitana.
        </p>

        {/* Centered CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full sm:w-auto mb-12">
          <div className="flex flex-col items-center w-full sm:w-auto">
            <Link
              to="/envie-seu-projeto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider rounded-sm shadow-xl hover:bg-pinheirao-deep transition-all hover:-translate-y-0.5"
            >
              <span>Orçamento</span>
              <ArrowRight size={16} />
            </Link>
            <span className="text-[10px] text-gray-300 mt-1.5 font-medium tracking-wide">Sem compromisso</span>
          </div>

          <div className="flex flex-col items-center w-full sm:w-auto">
            <Link
              to="/projetos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-xs uppercase tracking-wider border border-white/30 rounded-sm hover:bg-white/20 transition-all hover:-translate-y-0.5"
            >
              Modelos
            </Link>
            <span className="text-[10px] text-gray-300 mt-1.5 font-medium tracking-wide">Madeira e alvenaria</span>
          </div>
        </div>

        {/* Centered Trust Highlights Strip */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/15 max-w-3xl w-full mx-auto">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="p-2 rounded bg-pinheirao-green/20 text-pinheirao-green shrink-0">
              <Award size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-white">20+ Anos</p>
              <p className="text-[11px] text-gray-300">Tradição sólida</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="p-2 rounded bg-pinheirao-green/20 text-pinheirao-green shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-white">Madeira Nobre</p>
              <p className="text-[11px] text-gray-300">Certificada</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 col-span-2 sm:col-span-1">
            <div className="p-2 rounded bg-pinheirao-green/20 text-pinheirao-green shrink-0">
              <MapPin size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-white">Pinhais / PR</p>
              <p className="text-[11px] text-gray-300">Sede própria</p>
            </div>
          </div>
        </div>

      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 transition-all rounded-full ${
              idx === currentSlide ? 'w-8 bg-pinheirao-green' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

    </section>
  );
};
