import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Ruler, MapPin, CheckCircle, Sparkles,
  ShieldCheck, TrendingUp, Award, CreditCard
} from 'lucide-react';
import { Project } from '../types';

interface PremiumCustomSectionProps {
  project: Project;
}

export const PremiumCustomSection: React.FC<PremiumCustomSectionProps> = ({ project }) => {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projectImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/f3o4r464_casa-madeia.jpg',
      label: 'Cozinha Personalizada'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/he62fkak_casa-alvenaria.png',
      label: 'Sala Ampliada'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/mmuv5tox_sobrados.png',
      label: 'Quartos Especiais'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/21ubrgoy_triplex.png',
      label: 'Área Gourmet'
    }
  ];

  const benefits = [
    { icon: <CheckCircle size={20} />, text: 'Ajuste milimétrico de cada ambiente' },
    { icon: <CheckCircle size={20} />, text: 'Adequação perfeita ao seu terreno' },
    { icon: <CheckCircle size={20} />, text: 'Escolha de acabamentos premium' },
    { icon: <CheckCircle size={20} />, text: 'Acompanhamento técnico personalizado' }
  ];

  const miniFeatures = [
    { label: 'Projeto 3D', icon: '🏗️', tooltip: 'Visualização 3D completa' },
    { label: 'Acompanhamento', icon: '👷', tooltip: 'Suporte em todas etapas' },
    { label: 'Garantia', icon: '🛡️', tooltip: 'Garantia de qualidade' },
    { label: 'Financiamento', icon: '💳', tooltip: 'Opções facilitadas' }
  ];

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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % projectImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleQuoteRequest = () => {
    navigate(`/envie-seu-projeto?title=${encodeURIComponent(project.title)}&type=${encodeURIComponent(project.type)}`);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-br from-[#2c3e50] via-[#1a1a1a] to-[#2c3e50] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pinheirao-green/10 rounded-full blur-[120px] animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pinheirao-deep/10 rounded-full blur-[120px] animate-float-reverse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className={`space-y-6 lg:space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-pinheirao-green/10 border border-pinheirao-green/30 px-4 py-2.5 rounded-full backdrop-blur-sm hover:bg-pinheirao-green/20 transition-all">
              <Sparkles size={18} className="text-pinheirao-green animate-pulse-slow" />
              <span className="text-pinheirao-green font-bold text-sm tracking-wider uppercase">
                PERSONALIZAÇÃO SEM LIMITES
              </span>
            </div>

            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight uppercase italic">
                <span className="bg-gradient-to-r from-pinheirao-green via-[#16a085] to-pinheirao-green bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                  SEU NOVO LAR.
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-pinheirao-green to-pinheirao-deep rounded-full animate-expand-line"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
              Transforme sua visão em realidade com projetos completamente personalizados.
              Cada detalhe, cada medida, cada acabamento pensado para criar o lar perfeito para você e sua família.
            </p>

            <ul className="space-y-4 pt-2">
              {benefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className={`flex items-center gap-3 text-white group hover:translate-x-2 transition-all ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
                >
                  <span className="flex-shrink-0 text-pinheirao-green group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </span>
                  <span className="text-base md:text-lg font-medium">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-4 gap-4 pt-6">
              {miniFeatures.map((feature, idx) => (
                <div key={idx} className="text-center group cursor-pointer relative">
                  <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <p className="text-xs text-gray-400 font-semibold">{feature.label}</p>
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {feature.tooltip}
                  </div>
                </div>
              ))}
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 pt-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
              <button
                onClick={handleQuoteRequest}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-pinheirao-green via-[#16a085] to-pinheirao-green bg-[length:200%_auto] text-white font-bold text-base uppercase tracking-wider rounded-lg shadow-[0_8px_25px_rgba(26,188,156,0.4)] hover:shadow-[0_12px_35px_rgba(26,188,156,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all overflow-hidden"
              >
                <Ruler size={20} />
                <span className="relative z-10">Personalizar Este Modelo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)'
                }}></span>
              </button>

              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-transparent border-2 border-white text-white font-bold text-base uppercase tracking-wider rounded-lg hover:bg-white/10 hover:border-pinheirao-green hover:text-pinheirao-green hover:-translate-y-1 active:translate-y-0 transition-all"
              >
                <MapPin size={20} />
                <span>Visitar Showroom</span>
              </Link>
            </div>

            <div className={`flex items-center gap-4 pt-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
              <div className="flex -space-x-3">
                {['A', 'B', 'C', 'D'].map((letter, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full bg-gradient-to-br from-pinheirao-green to-pinheirao-deep flex items-center justify-center text-white font-bold text-sm border-2 border-[#2c3e50] hover:scale-110 transition-transform cursor-pointer"
                    style={{ animationDelay: `${1.3 + i * 0.1}s` }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                <p className="font-semibold text-white">
                  Junte-se a mais de 500 famílias
                </p>
                <p className="text-xs">
                  que realizaram o sonho da casa própria
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-pinheirao-green/5 border border-pinheirao-green/20 px-4 py-3 rounded-lg backdrop-blur-sm">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pinheirao-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pinheirao-green"></span>
              </div>
              <span className="text-sm text-gray-300">
                <span className="text-pinheirao-green font-bold">15 famílias</span> personalizando agora
              </span>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="absolute -inset-4 bg-gradient-to-br from-pinheirao-green/30 to-pinheirao-deep/30 blur-3xl scale-110 rounded-3xl"></div>

            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-700/50">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6 group cursor-pointer">
                {projectImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 ${
                      idx === activeImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                ))}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md px-5 py-3 rounded-lg border border-white/10 transition-transform group-hover:scale-105">
                  <p className="text-white font-bold text-base">
                    {projectImages[activeImage].label}
                  </p>
                  <p className="text-gray-400 text-xs">Exemplo de personalização</p>
                </div>
              </div>

              <div className="flex gap-2 justify-center">
                {projectImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeImage
                        ? 'bg-pinheirao-green w-8'
                        : 'bg-gray-600 w-2 hover:bg-gray-500'
                    }`}
                    aria-label={`Ver imagem ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#f39c12] to-[#e67e22] text-white px-6 py-4 rounded-full shadow-2xl rotate-12 hover:rotate-0 transition-all duration-300 cursor-pointer animate-bounce-slow">
              <div className="text-center">
                <ShieldCheck size={24} className="mx-auto mb-1" />
                <p className="text-xs font-bold uppercase">Mais de</p>
                <p className="text-3xl font-black">500</p>
                <p className="text-xs font-bold uppercase">Projetos</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-pinheirao-green to-pinheirao-deep text-white px-5 py-3 rounded-xl shadow-xl hover:scale-110 transition-all cursor-pointer">
              <div className="flex items-center gap-2">
                <Award size={20} />
                <div className="text-left">
                  <p className="text-xs font-bold">Qualidade</p>
                  <p className="text-lg font-black">Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.1); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes expand-line {
          0% { width: 0; opacity: 0; }
          100% { width: 80px; opacity: 1; }
        }
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(12deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 18s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-expand-line { animation: expand-line 1s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out 0.6s forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out 0.7s forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};
