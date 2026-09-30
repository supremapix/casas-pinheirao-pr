import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Award, MapPin, CheckCircle2, Home, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_VIDEOS = [
  "https://img.supremasite.com.br/pinheirao/casa.mp4",
  "https://img.supremasite.com.br/pinheirao/casa-montada.mp4",
  "https://img.supremasite.com.br/pinheirao/casa45.mp4"
];

export const Hero: React.FC = () => {
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Ensure active video plays continuously in sequence across PC and mobile
  useEffect(() => {
    const activeVideo = videoRefs.current[currentVideoIdx];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {});
    }
  }, [currentVideoIdx]);

  const handleVideoEnded = () => {
    setCurrentVideoIdx((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-pinheirao-black overflow-hidden pt-20 pb-12">
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* 3 Sequential Background Videos with Smooth Crossfade & Maximum Visibility on PC and Mobile */}
        {HERO_VIDEOS.map((videoSrc, idx) => (
          <video
            key={videoSrc}
            ref={(el) => { videoRefs.current[idx] = el; }}
            src={videoSrc}
            autoPlay={idx === 0}
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
            className={`absolute inset-0 w-full h-full object-cover object-center scale-105 filter brightness-95 contrast-105 transition-opacity duration-1000 ease-in-out ${
              idx === currentVideoIdx ? 'opacity-85 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}

        {/* Professional dark gradient overlays with high video visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-pinheirao-black/90 via-pinheirao-black/60 to-pinheirao-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-pinheirao-black via-transparent to-pinheirao-black/50 z-10"></div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 text-center flex flex-col items-center">
        
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
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center justify-center w-full sm:w-auto mb-12">
          
          {/* Botão Modelos em Alto Destaque Visual */}
          <div className="flex flex-col items-center w-full sm:w-auto relative group">
            {/* Tag de Destaque Animada */}
            <span className="absolute -top-3 right-4 sm:-right-2 z-30 bg-gradient-to-r from-yellow-400 to-amber-500 text-pinheirao-black text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-lg border border-white/60 animate-bounce">
              🔥 Catálogo
            </span>

            <Link
              to="/projetos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-pinheirao-black font-black text-xs sm:text-sm uppercase tracking-wider rounded-sm shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:shadow-[0_0_40px_rgba(251,191,36,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-yellow-200"
            >
              <Home size={18} className="text-pinheirao-black shrink-0 animate-pulse" />
              <span>Ver Nossos Modelos</span>
              <ArrowRight size={17} className="text-pinheirao-black group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <span className="text-[10px] text-yellow-300 font-bold mt-1.5 tracking-wide flex items-center gap-1 drop-shadow">
              <Sparkles size={11} className="text-yellow-400" />
              Plantas, Fotos & Medidas
            </span>
          </div>

          {/* Botão Secundário de Orçamento */}
          <div className="flex flex-col items-center w-full sm:w-auto">
            <Link
              to="/envie-seu-projeto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider rounded-sm shadow-xl hover:bg-pinheirao-deep transition-all hover:-translate-y-0.5"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight size={16} />
            </Link>
            <span className="text-[10px] text-gray-300 mt-1.5 font-medium tracking-wide">Sem compromisso</span>
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

      {/* Video Sequence Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {HERO_VIDEOS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentVideoIdx(idx)}
            aria-label={`Vídeo ${idx + 1}`}
            className={`h-1.5 transition-all rounded-full ${
              idx === currentVideoIdx ? 'w-8 bg-pinheirao-green' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

    </section>
  );
};
