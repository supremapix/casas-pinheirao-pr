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
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projectImages = [
    {
      url: '/planta-1.jpg',
      label: 'Planta 3 Quartos - Vista Completa',
      description: 'Planta residencial com 3 quartos bem distribuídos, sala integrada com cozinha, área de serviço e 1 banheiro completo. Layout otimizado para aproveitamento máximo do espaço com circulação funcional. Ideal para famílias que buscam conforto e praticidade. Dimensões: 2 quartos com armários embutidos + 1 suíte, cozinha com área gourmet integrada, varanda frontal ampla.'
    },
    {
      url: '/planta-2.jpg',
      label: 'Planta Técnica com Medidas',
      description: 'Planta técnica detalhada com todas as medidas precisas: 2 quartos (2,65m x 3,00m e 2,65m x 4,00m), sala de estar integrada (3,50m x 4,00m), cozinha funcional, WC completo (1,50m x 2,00m) e varanda frontal (5,30m x 2,00m). Dimensões totais: 5,30m x 8,00m + varanda. Perfeita para terrenos compactos com máximo aproveitamento. Todas as cotas em centímetros para facilitar execução.'
    },
    {
      url: '/planta-3.jpg',
      label: 'Layout Inteligente e Funcional',
      description: 'Conforto, praticidade e excelente aproveitamento de espaço em destaque! Esta planta apresenta distribuição inteligente dos ambientes: 2 quartos espaçosos, sala integrada com cozinha para melhor convívio familiar, corredor funcional e banheiro estrategicamente posicionado. Varanda frontal generosa para momentos de lazer. Design pensado para otimizar cada metro quadrado.'
    },
    {
      url: '/planta-4.jpg',
      label: 'Planta Inteligente 37,5m²',
      description: 'Planta Inteligente com 37,5m² certificada CREA-PR: 2 quartos (2,50m cada), sala central, cozinha compacta (0,50m), WC completo, abrigo externo coberto (5,00m x 3,50m). Layout extremamente funcional com circulação otimizada. Ideal para terrenos menores ou como casa de praia/campo. Todos os ambientes bem dimensionados apesar da metragem compacta. Registro profissional garantido.'
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showLightbox) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showLightbox, lightboxImage]);

  const handleQuoteRequest = () => {
    navigate(`/envie-seu-projeto?title=${encodeURIComponent(project.title)}&type=${encodeURIComponent(project.type)}`);
  };

  const openLightbox = (index: number) => {
    setLightboxImage(index);
    setShowLightbox(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    document.body.style.overflow = 'unset';
  };

  const nextLightboxImage = () => {
    setLightboxImage((prev) => (prev + 1) % projectImages.length);
  };

  const prevLightboxImage = () => {
    setLightboxImage((prev) => (prev - 1 + projectImages.length) % projectImages.length);
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
              <div
                className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6 group cursor-pointer"
                onClick={() => openLightbox(activeImage)}
              >
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
                      className="w-full h-full object-contain bg-white p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                  </div>
                ))}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 p-5 rounded-full text-gray-900 shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 size={32} />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-pinheirao-green text-white px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 animate-pulse-slow">
                  <Maximize2 size={16} />
                  Clique para Ampliar
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md px-5 py-3 rounded-lg border border-pinheirao-green/30 transition-transform group-hover:scale-105">
                  <p className="text-white font-bold text-base">
                    {projectImages[activeImage].label}
                  </p>
                  <p className="text-pinheirao-green text-xs font-semibold">Clique para ver detalhes completos</p>
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

      {showLightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/98 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <div className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-[210]">
            <div className="flex flex-col">
              <span className="text-white text-sm font-bold uppercase tracking-wider mb-1">
                {projectImages[lightboxImage].label}
              </span>
              <span className="text-pinheirao-green text-xs font-semibold uppercase tracking-wider">
                Planta {lightboxImage + 1} de {projectImages.length}
              </span>
            </div>
            <button
              className="bg-white/10 hover:bg-pinheirao-green text-white p-3 rounded-full transition-all shadow-xl group"
              onClick={closeLightbox}
              title="Fechar (Esc)"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          <div
            className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-16 lg:p-20 max-w-7xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {projectImages.length > 1 && (
              <>
                <button
                  className="absolute left-6 md:left-12 z-[210] text-white hover:text-pinheirao-green bg-white/5 hover:bg-white/10 p-5 rounded-full transition-all shadow-2xl backdrop-blur-sm hidden md:block"
                  onClick={prevLightboxImage}
                  title="Anterior (Seta Esquerda)"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  className="absolute right-6 md:right-12 z-[210] text-white hover:text-pinheirao-green bg-white/5 hover:bg-white/10 p-5 rounded-full transition-all shadow-2xl backdrop-blur-sm hidden md:block"
                  onClick={nextLightboxImage}
                  title="Próxima (Seta Direita)"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            <div className="relative flex-1 w-full flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={projectImages[lightboxImage].url}
                alt={projectImages[lightboxImage].label}
                className="max-w-full max-h-[60vh] md:max-h-[65vh] object-contain shadow-2xl rounded-lg animate-fade-in bg-white p-4"
              />
            </div>

            <div className="w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl border border-pinheirao-green/30 max-w-4xl backdrop-blur-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-pinheirao-green p-3 rounded-lg flex-shrink-0">
                  <Ruler size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight mb-2">
                    {projectImages[lightboxImage].label}
                  </h3>
                  <div className="h-1 w-16 bg-pinheirao-green rounded-full mb-3"></div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {projectImages[lightboxImage].description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-gray-700">
                <button
                  onClick={() => {
                    closeLightbox();
                    handleQuoteRequest();
                  }}
                  className="flex-1 bg-pinheirao-green hover:bg-pinheirao-deep text-white px-6 py-4 rounded-lg font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Ruler size={18} />
                  Personalizar Esta Planta
                </button>
                <a
                  href={`https://api.whatsapp.com/send?phone=5541996301028&text=Olá! Gostaria de mais informações sobre a ${projectImages[lightboxImage].label}`}
                  className="flex-1 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-4 rounded-lg font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare size={18} />
                  Tirar Dúvidas
                </a>
              </div>
            </div>

            {projectImages.length > 1 && (
              <div className="flex md:hidden gap-4 mt-6">
                <button onClick={prevLightboxImage} className="bg-white/10 p-4 rounded-full text-white hover:bg-white/20 transition-all">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextLightboxImage} className="bg-white/10 p-4 rounded-full text-white hover:bg-white/20 transition-all">
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

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
