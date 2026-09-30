import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { PROJECTS } from '../data';
import { ConstructionType, Project } from '../types';
import {
  Bed, Square, ArrowRight,
  X, ChevronLeft, ChevronRight, Image as ImageIcon,
  ExternalLink, ZoomIn
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ConstructionType | 'ALL'>('ALL');
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

  const filteredProjects = filter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === filter);

  // Lightbox Handlers
  const openLightbox = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    e.stopPropagation();
    setLightbox({ project, index: 0 });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!lightbox) return;
    setLightbox(prev => prev ? ({
      ...prev,
      index: (prev.index + 1) % prev.project.images.length
    }) : null);
  }, [lightbox]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!lightbox) return;
    setLightbox(prev => prev ? ({
      ...prev,
      index: (prev.index - 1 + prev.project.images.length) % prev.project.images.length
    }) : null);
  }, [lightbox]);

  // Keyboard support for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  return (
    <div className="pt-20 bg-white min-h-screen">
      <EnhancedSEO
        title="Nossos Projetos e Modelos de Casas"
        description="Conheça nossos modelos de casas pré-fabricadas: casas de madeira, alvenaria, sobrados e triplex. Projetos personalizados para realizar seu sonho da casa própria em Pinhais e Curitiba."
        canonical="/projetos"
        keywords="projetos casas pré-fabricadas, modelos casas madeira, casas alvenaria, sobrados pré-fabricados, triplex Pinhais, projetos personalizados"
      />

      {/* Hero Header */}
      <section className="bg-gray-50 py-14 md:py-20 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-pinheirao-green mb-3">
            Catálogo de Modelos
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-pinheirao-black uppercase tracking-tight mb-4">
            Escolha seu Modelo de Casa
          </h1>
          <p className="text-pinheirao-gray max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-normal">
            Modelos pré-fabricados de madeira nobre e alvenaria tradicional. Todos os projetos podem ser personalizados para o seu terreno.
          </p>
        </div>
      </section>

      {/* Segmented Filter Bar */}
      <section className="py-4 bg-white sticky top-16 md:top-20 z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Desktop Filter */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                filter === 'ALL' 
                  ? 'bg-pinheirao-green text-white shadow-sm' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Todos ({PROJECTS.length})
            </button>
            {Object.values(ConstructionType).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                  filter === type 
                    ? 'bg-pinheirao-green text-white shadow-sm' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Mobile Filter */}
          <div className="sm:hidden">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as ConstructionType | 'ALL')}
              className="w-full px-4 py-3 text-xs font-bold uppercase tracking-wider bg-gray-50 border border-gray-200 rounded-sm text-pinheirao-black focus:outline-none focus:border-pinheirao-green"
            >
              <option value="ALL">Todos os Projetos ({PROJECTS.length})</option>
              <option value={ConstructionType.WOOD}>Casas de Madeira</option>
              <option value={ConstructionType.MASONRY}>Casas de Alvenaria</option>
              <option value={ConstructionType.SOBRADO}>Sobrados</option>
              <option value={ConstructionType.TRIPLEX}>Triplex</option>
            </select>
          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group flex flex-col h-full bg-white border border-gray-200 rounded-sm overflow-hidden hover:border-pinheirao-green/60 hover:shadow-lg transition-all"
              >
                {/* Image / Lightbox trigger */}
                <div 
                  className="relative h-64 overflow-hidden bg-black cursor-pointer"
                  onClick={(e) => openLightbox(e, project)}
                >
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" 
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-pinheirao-black/90 text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                    {project.type}
                  </div>
                  
                  {project.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-white bg-black/70 px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase">
                      <ImageIcon size={12} className="text-pinheirao-green" />
                      <span>{project.images.length} Fotos</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2">
                    <ZoomIn size={24} />
                    <span className="text-xs font-bold uppercase tracking-wider">Ampliar</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 py-2 border-b border-gray-100 mb-4 text-xs font-bold uppercase text-pinheirao-gray">
                    <div className="flex items-center gap-1.5 text-pinheirao-black">
                      <Square size={14} className="text-pinheirao-green" />
                      <span>{project.area}</span>
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1.5 text-pinheirao-black">
                      <Bed size={14} className="text-pinheirao-green" />
                      <span>2-3 Quartos</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-xl mb-3 text-pinheirao-black uppercase tracking-tight group-hover:text-pinheirao-green transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-pinheirao-gray text-xs sm:text-sm mb-6 leading-relaxed line-clamp-3 font-normal">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link 
                      to={`/projetos/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pinheirao-black group-hover:text-pinheirao-green transition-colors"
                    >
                      <span>Ver Detalhes</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      to={`/envie-seu-projeto?title=${encodeURIComponent(project.title)}&type=${encodeURIComponent(project.type)}`}
                      className="px-4 py-2 bg-pinheirao-green text-white text-[11px] font-bold uppercase tracking-wider rounded-sm hover:bg-pinheirao-deep transition-colors"
                    >
                      Orçamento
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA Section with construa-casa.jpg background */}
      <section className="relative py-20 md:py-28 bg-[#0C0E12] text-white border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://img.supremasite.com.br/pinheirao/construa-casa.jpg"
            alt="Construa sua Casa - Casas Pinheirão"
            className="w-full h-full object-cover object-center opacity-45 sm:opacity-55 filter brightness-95 contrast-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0E12]/85 via-[#0C0E12]/75 to-[#0C0E12]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-pinheirao-green mb-3">
            Projetos Sob Medida
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Não encontrou a planta ideal? Construímos seu projeto exclusivo.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            Traga seu croqui, ideia ou projeto arquitetônico pronto. Nossa equipe de engenharia e arquitetura adapta cada detalhe às características do seu terreno.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link
              to="/envie-seu-projeto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-pinheirao-deep transition-all shadow-md"
            >
              <span>Envie Sua Ideia de Planta</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=5541996301028&text=Olá! Gostaria de tirar dúvidas sobre os modelos de casas."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/20 rounded-sm hover:bg-white/20 transition-all"
            >
              <span>Falar com Consultor</span>
            </a>
          </div>
        </div>
      </section>

      {/* Semantic Lightbox Modal */}
      {lightbox && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          aria-describedby="project-modal-desc"
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-between p-4 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Top Header Bar */}
          <div className="w-full max-w-5xl flex items-center justify-between py-2 text-white border-b border-white/10 shrink-0" onClick={(e) => e.stopPropagation()}>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pinheirao-green">
                {lightbox.project.type} • Foto {lightbox.index + 1} de {lightbox.project.images.length}
              </p>
              <h2 id="project-modal-title" className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                {lightbox.project.title} ({lightbox.project.area})
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to={`/projetos/${lightbox.project.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 text-white rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-pinheirao-green transition-colors"
              >
                <span>Ficha Completa</span>
                <ExternalLink size={14} />
              </Link>
              <button
                onClick={closeLightbox}
                className="p-2 sm:px-3 sm:py-1.5 rounded-full sm:rounded-sm bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5"
                aria-label="Fechar galeria"
                title="Fechar (Esc)"
              >
                <X size={20} />
                <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">Fechar</span>
              </button>
            </div>
          </div>

          {/* Image & Controls Stage */}
          <div className="relative max-w-5xl w-full flex flex-col items-center justify-center my-auto py-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full flex items-center justify-center">
              {lightbox.project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 hover:bg-pinheirao-green text-white rounded-full z-10 transition-all shadow-xl"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 hover:bg-pinheirao-green text-white rounded-full z-10 transition-all shadow-xl"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              <div className="max-h-[55vh] flex items-center justify-center overflow-hidden rounded-sm bg-black">
                <img
                  src={lightbox.project.images[lightbox.index]}
                  alt={`${lightbox.project.title} foto ${lightbox.index + 1}`}
                  className="max-h-[55vh] w-auto max-w-full object-contain rounded-sm shadow-2xl"
                />
              </div>
            </div>

            {/* Semantic Project Description */}
            <div className="w-full mt-4 p-4 sm:p-5 bg-[#1E2229] border border-white/10 rounded-sm">
              <p id="project-modal-desc" className="text-gray-200 text-xs sm:text-sm leading-relaxed font-normal">
                {lightbox.project.description}
              </p>
            </div>

            {/* Thumbnails Navigation Strip */}
            {lightbox.project.images.length > 1 && (
              <div className="w-full mt-3 flex justify-center gap-2 overflow-x-auto pb-1">
                {lightbox.project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightbox({ ...lightbox, index: idx })}
                    className={`w-14 h-10 rounded-sm overflow-hidden border-2 transition-all shrink-0 ${
                      idx === lightbox.index ? 'border-pinheirao-green opacity-100 shadow-md' : 'border-transparent opacity-40 hover:opacity-80'
                    }`}
                    aria-label={`Ver foto ${idx + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Bar with Direct Close Button */}
          <div className="w-full max-w-5xl pt-3 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 shrink-0" onClick={(e) => e.stopPropagation()}>
            <p className="text-xs text-gray-400 font-medium text-center sm:text-left">
              Construímos este modelo no seu lote com garantia e financiamento facilitado.
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                to={`/envie-seu-projeto?title=${encodeURIComponent(lightbox.project.title)}&type=${encodeURIComponent(lightbox.project.type)}`}
                onClick={closeLightbox}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-pinheirao-deep transition-all shadow-md"
              >
                <span>Orçamento Deste Modelo</span>
                <ArrowRight size={14} />
              </Link>
              <button
                onClick={closeLightbox}
                className="flex-1 sm:flex-initial px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all border border-white/20"
              >
                Fechar Galeria
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
