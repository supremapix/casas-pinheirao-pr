import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Ruler, MapPin, CheckCircle2, ArrowRight, Building2, HardHat, ShieldCheck, CreditCard, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

export const CustomHomeSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const projectImages = [
    {
      url: 'https://img.supremasite.com.br/pinheirao/casa-alvenaria-pinhais.jpg',
      label: 'Casa de Alvenaria Pinhais',
      description: 'Construção sólida e durável em alvenaria com acabamento refinado e arquitetura personalizada para o seu terreno.'
    },
    {
      url: 'https://img.supremasite.com.br/pinheirao/casa-alvenaria.png',
      label: 'Alvenaria Contemporânea',
      description: 'Linhas modernas e distribuição inteligente dos cômodos para proporcionar o máximo de conforto térmico e acústico.'
    },
    {
      url: 'https://img.supremasite.com.br/pinheirao/casa-madeira.png',
      label: 'Casa de Madeira Nobre',
      description: 'Beleza natural e aconchego das madeiras de lei tratadas, com alta durabilidade e montagem em tempo recorde.'
    },
    {
      url: 'https://img.supremasite.com.br/pinheirao/casa-pre.png',
      label: 'Casa Pré-Fabricada',
      description: 'Velocidade de execução e precisão modular, reduzindo desperdícios e garantindo custo-benefício imbatível.'
    },
    {
      url: 'https://img.supremasite.com.br/pinheirao/projeto-pre.png',
      label: 'Projeto Arquitetônico 3D',
      description: 'Estudo volumétrico detalhado com planta baixa e renderizações para você visualizar cada ambiente antes de construir.'
    }
  ];

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const openLightbox = (index: number) => {
    setActiveImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImage((prev) => (prev + 1) % projectImages.length);
  }, [projectImages.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImage((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  }, [projectImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  const architecturalPillars = [
    {
      icon: <Building2 size={20} className="text-pinheirao-green" />,
      title: 'Projeto 3D sob Medida',
      desc: 'Adequação milimétrica à topografia e insolação do seu lote.'
    },
    {
      icon: <HardHat size={20} className="text-pinheirao-green" />,
      title: 'Gestão Completa de Obra',
      desc: 'Cronograma rigoroso com equipe técnica especializada.'
    },
    {
      icon: <ShieldCheck size={20} className="text-pinheirao-green" />,
      title: 'Garantia Estrutural',
      desc: 'Responsabilidade técnica registrada no CREA-PR.'
    },
    {
      icon: <CreditCard size={20} className="text-pinheirao-green" />,
      title: 'Financiamento Direto',
      desc: 'Negociação transparente e condições facilitadas.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#15171C] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-pinheirao-green mb-3">
            Personalização Arquitetônica
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.1]">
            Seu projeto desenhado para o seu terreno.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Cada família possui necessidades únicas. Modifique qualquer um de nossos modelos ou crie uma planta 100% autoral com nossa equipe técnica.
          </p>
        </div>

        {/* Grid: Interactive Gallery + Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Gallery Viewport */}
          <div className="lg:col-span-7 bg-[#1E2229] border border-white/10 rounded-sm p-4 sm:p-6 shadow-xl">
            <div 
              className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-sm bg-black cursor-pointer group"
              onClick={() => openLightbox(activeImage)}
            >
              <img
                src={projectImages[activeImage].url}
                alt={projectImages[activeImage].label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h3 className="text-white text-base sm:text-lg font-bold">
                    {projectImages[activeImage].label}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 mt-1 font-normal max-w-xl">
                    {projectImages[activeImage].description}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-2.5 rounded text-white shrink-0 ml-3">
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>

            {/* Thumbnails Strip */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3 mt-4">
              {projectImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[4/3] rounded-sm overflow-hidden border-2 transition-all ${
                    idx === activeImage 
                      ? 'border-pinheirao-green opacity-100 shadow-md' 
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                  aria-label={`Ver foto ${idx + 1}`}
                >
                  <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Pillars & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {architecturalPillars.map((pillar, i) => (
                <div key={i} className="p-4 bg-[#1E2229] border border-white/5 rounded-sm flex items-start gap-4">
                  <div className="p-2.5 bg-pinheirao-green/10 rounded shrink-0 mt-0.5">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row lg:flex-row gap-4 items-start sm:items-center">
              <div className="flex flex-col w-full sm:w-auto">
                <Link
                  to="/envie-seu-projeto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider rounded-sm shadow-md hover:bg-pinheirao-deep hover:-translate-y-0.5 transition-all"
                >
                  <Ruler size={16} />
                  <span>Personalizar</span>
                </Link>
                <span className="text-[10px] text-gray-400 mt-1 font-medium tracking-wide">Do seu jeito</span>
              </div>

              <div className="flex flex-col w-full sm:w-auto">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/30 text-white font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-white/10 hover:border-pinheirao-green hover:-translate-y-0.5 transition-all"
                >
                  <MapPin size={16} />
                  <span>Showroom</span>
                </Link>
                <span className="text-[10px] text-gray-400 mt-1 font-medium tracking-wide">Pinhais - PR</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Semantic Lightbox Modal */}
      {lightboxOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="custom-home-modal-title"
          aria-describedby="custom-home-modal-desc"
          className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-between p-4 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Header Bar */}
          <div className="w-full max-w-5xl flex items-center justify-between py-2 text-white border-b border-white/10 shrink-0" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-pinheirao-green">
                Galeria Arquitetônica ({activeImage + 1} de {projectImages.length})
              </span>
              <h2 id="custom-home-modal-title" className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                {projectImages[activeImage].label}
              </h2>
            </div>
            <button
              onClick={closeLightbox}
              className="text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center gap-1.5"
              aria-label="Fechar janela"
              title="Fechar (Esc)"
            >
              <X size={20} />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">Fechar</span>
            </button>
          </div>

          {/* Main Stage with Navigation */}
          <div className="max-w-5xl w-full my-auto flex flex-col items-center justify-center relative py-4" onClick={(e) => e.stopPropagation()}>
            {projectImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 hover:bg-pinheirao-green text-white rounded-full z-10 transition-all shadow-xl"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 hover:bg-pinheirao-green text-white rounded-full z-10 transition-all shadow-xl"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <div className="relative w-full max-h-[60vh] flex items-center justify-center overflow-hidden rounded-sm bg-black">
              <img
                src={projectImages[activeImage].url}
                alt={projectImages[activeImage].label}
                className="max-h-[60vh] w-auto max-w-full object-contain rounded-sm shadow-2xl"
              />
            </div>

            {/* Semantic Descriptive Box */}
            <div className="w-full mt-4 p-4 sm:p-5 bg-[#1E2229] border border-white/10 rounded-sm">
              <p id="custom-home-modal-desc" className="text-gray-200 text-sm sm:text-base leading-relaxed font-normal">
                {projectImages[activeImage].description}
              </p>
            </div>
          </div>

          {/* Bottom Action Bar with Direct Close Button */}
          <div className="w-full max-w-5xl pt-3 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 shrink-0" onClick={(e) => e.stopPropagation()}>
            <p className="text-xs text-gray-400 font-medium text-center sm:text-left">
              Casas Pinheirão • Mais de 20 anos construindo casas pré-fabricadas e alvenaria no Paraná.
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                to="/envie-seu-projeto"
                onClick={closeLightbox}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-pinheirao-deep transition-all shadow-md"
              >
                <span>Orçamento Deste Projeto</span>
                <ArrowRight size={14} />
              </Link>
              <button
                onClick={closeLightbox}
                className="flex-1 sm:flex-initial px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all border border-white/20"
              >
                Fechar Visualização
              </button>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};
