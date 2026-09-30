import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, CheckCircle2, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/hero-home.png",
    "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/u9zireyc_hero-image.png",
    "/hero-imagem-3.png",
    "/tradicao_em_pinhais.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-pinheirao-black text-white">
      {/* Background Image Slider with Professional Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Casas Pinheirão - Especialista em Casas Pré-Fabricadas e Alvenaria ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-70 scale-100' : 'opacity-0 scale-105'
            }`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
        {/* Professional dark gradient overlay for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-pinheirao-black via-pinheirao-black/80 to-pinheirao-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-pinheirao-black via-transparent to-pinheirao-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-pinheirao-green/20 border border-pinheirao-green/40 backdrop-blur-sm">
              <ShieldCheck size={16} className="text-pinheirao-green" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white">
                Tradição em Pinhais • CREA-PR
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.08]">
              <span className="text-white font-black">Realize o sonho da </span>
              <span className="text-pinheirao-green font-black">casa própria</span>
              <span className="text-white font-black"> com segurança.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl font-medium leading-relaxed">
              Especialistas em casas pré-fabricadas de madeira nobre e alvenaria sob medida. Mais de 20 anos construindo com excelência em Curitiba e Região Metropolitana.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4 items-start sm:items-center">
              <div className="flex flex-col w-full sm:w-auto">
                <Link
                  to="/envie-seu-projeto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider rounded-sm shadow-lg hover:bg-pinheirao-deep transition-all hover:-translate-y-0.5"
                >
                  <span>Orçamento</span>
                  <ArrowRight size={16} />
                </Link>
                <span className="text-[10px] text-gray-300 mt-1 font-medium tracking-wide">Sem compromisso</span>
              </div>

              <div className="flex flex-col w-full sm:w-auto">
                <Link
                  to="/projetos"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-xs uppercase tracking-wider border border-white/30 rounded-sm hover:bg-white/20 transition-all hover:-translate-y-0.5"
                >
                  Modelos
                </Link>
                <span className="text-[10px] text-gray-300 mt-1 font-medium tracking-wide">Madeira e alvenaria</span>
              </div>
            </div>

            {/* Trust Highlights */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-pinheirao-green/20 text-pinheirao-green">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white">20+ Anos</p>
                  <p className="text-[11px] text-gray-300">Tradição sólida</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-pinheirao-green/20 text-pinheirao-green">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white">Madeira Nobre</p>
                  <p className="text-[11px] text-gray-300">Certificada</p>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="p-2 rounded bg-pinheirao-green/20 text-pinheirao-green">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white">Pinhais / PR</p>
                  <p className="text-[11px] text-gray-300">Sede própria</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right column: Slider indicators or trust card */}
          <div className="lg:col-span-4 hidden lg:flex flex-col justify-end items-end space-y-4">
            <div className="bg-pinheirao-black/70 backdrop-blur-md p-6 rounded-sm border border-white/10 max-w-xs shadow-2xl">
              <p className="text-xs font-black uppercase tracking-widest text-pinheirao-green mb-2">Atendimento Consultivo</p>
              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                Construímos no seu terreno com acompanhamento técnico de engenheiros e arquitetos em cada etapa.
              </p>
              <div className="mt-4 flex gap-1.5">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentSlide ? 'w-8 bg-pinheirao-green' : 'w-2 bg-white/30'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
