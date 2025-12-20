
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data';
import { ConstructionType, Project } from '../types';
import { 
  Maximize2, Bed, Bath, Square, ArrowRight, 
  X, ChevronLeft, ChevronRight, Image as ImageIcon,
  ExternalLink, ZoomIn
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ConstructionType | 'ALL'>('ALL');
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.property-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filter]);

  return (
    <div className="pt-20">
      <section className="bg-pinheirao-concrete/30 py-24 border-b border-pinheirao-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pinheirao-green mb-6">Modelos & Projetos</h2>
          <h1 className="text-5xl font-black text-pinheirao-black mb-8 leading-tight">Escolha o seu lar sob medida.</h1>
          <p className="text-pinheirao-gray max-w-2xl mx-auto font-medium">Nossos modelos servem como base para a sua criatividade. Todo projeto pode ser 100% personalizado conforme sua necessidade e terreno.</p>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="py-10 bg-white sticky top-20 z-40 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all rounded-sm border ${
                filter === 'ALL' 
                  ? 'bg-pinheirao-green text-white border-pinheirao-green shadow-lg' 
                  : 'bg-white text-pinheirao-gray border-gray-200 hover:bg-gray-50'
              }`}
            >
              Todos os Projetos
            </button>
            {Object.values(ConstructionType).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all rounded-sm border ${
                  filter === type 
                    ? 'bg-pinheirao-green text-white border-pinheirao-green shadow-lg' 
                    : 'bg-white text-pinheirao-gray border-gray-200 hover:bg-gray-50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="property-card group flex flex-col h-full bg-white border border-gray-100 transition-all hover:shadow-2xl overflow-hidden rounded-sm"
              >
                {/* Image Section - Clicking here opens the Lightbox */}
                <div 
                  className="relative h-72 overflow-hidden bg-pinheirao-black cursor-zoom-in"
                  onClick={(e) => openLightbox(e, project)}
                >
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90" 
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6 bg-pinheirao-green text-white text-[9px] font-black px-4 py-2 rounded-sm uppercase tracking-widest shadow-lg z-10">
                    {project.type}
                  </div>
                  
                  {/* Overlay for Lightbox trigger */}
                  <div className="absolute inset-0 bg-pinheirao-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                    <div className="bg-white/95 p-5 rounded-full text-pinheirao-black shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ZoomIn size={28} />
                    </div>
                    <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] mt-4 drop-shadow-lg">Explorar Galeria</span>
                    
                    {project.images.length > 1 && (
                      <div className="absolute bottom-6 right-6 flex items-center space-x-2 text-white bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                        <ImageIcon size={14} className="text-pinheirao-green" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{project.images.length} Fotos</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section - Clicking here goes to Detail Page */}
                <Link to={`/projetos/${project.id}`} className="p-10 flex flex-col flex-grow group/card">
                  <h3 className="font-black text-2xl mb-4 text-pinheirao-black uppercase tracking-tighter italic group-hover/card:text-pinheirao-green transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-6 py-4 border-y border-gray-50 mb-8 text-pinheirao-gray">
                    <div className="flex items-center gap-2">
                      <Square size={16} className="text-pinheirao-green" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed size={16} className="text-pinheirao-green" />
                      <span className="text-[10px] font-black uppercase tracking-widest">2-3 Quartos</span>
                    </div>
                  </div>

                  <p className="text-pinheirao-gray text-sm mb-10 leading-relaxed font-medium flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-[10px] font-black uppercase tracking-widest text-pinheirao-green group-hover/card:text-pinheirao-deep transition-all">
                    Ver Projeto Completo <ArrowRight size={14} className="ml-2 group-hover/card:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-40">
              <h3 className="text-2xl font-black text-pinheirao-concrete uppercase tracking-[0.3em]">Nenhum projeto encontrado.</h3>
            </div>
          )}
        </div>
      </section>

      {/* Grid Page Lightbox - Fully Responsive & Interactive */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-[100] bg-black/85 flex flex-col items-center justify-center animate-fade-in backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Top Interface */}
          <div className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-[110]">
             <div className="flex flex-col animate-fade-in-down">
               <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-1 drop-shadow-lg">{lightbox.project.title}</span>
               <div className="flex items-center space-x-3">
                 <span className="bg-pinheirao-green text-white text-[9px] font-black px-3 py-1 rounded-sm uppercase tracking-widest">
                   {lightbox.project.type}
                 </span>
                 <span className="text-white/80 text-[9px] font-bold uppercase tracking-widest">
                   Imagem {lightbox.index + 1} de {lightbox.project.images.length}
                 </span>
               </div>
             </div>
             
             <div className="flex items-center space-x-3 md:space-x-6 animate-fade-in-down">
               <Link 
                to={`/projetos/${lightbox.project.id}`} 
                onClick={(e) => e.stopPropagation()}
                className="hidden sm:flex items-center bg-white/10 hover:bg-pinheirao-green text-white px-8 py-4 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all shadow-xl group border border-white/5"
               >
                 Ver Ficha Técnica <ExternalLink size={14} className="ml-2 group-hover:rotate-12 transition-transform" />
               </Link>
               <button 
                className="bg-white hover:bg-gray-100 text-black p-4 rounded-full transition-all shadow-xl hover:rotate-90 duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                onClick={closeLightbox}
                aria-label="Fechar Galeria"
              >
                <X size={24} strokeWidth={3} />
              </button>
             </div>
          </div>

          <div 
            className="relative w-full h-full flex items-center justify-center p-4 md:p-24"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nav Arrows - Desktop */}
            {lightbox.project.images.length > 1 && (
              <>
                <button 
                  className="absolute left-6 md:left-12 z-[110] text-white hover:text-pinheirao-green bg-white/5 hover:bg-white/10 p-6 md:p-8 rounded-full transition-all shadow-2xl backdrop-blur-md border border-white/5 hidden md:block"
                  onClick={prevImage}
                  title="Anterior"
                >
                  <ChevronLeft size={40} />
                </button>
                <button 
                  className="absolute right-6 md:right-12 z-[110] text-white hover:text-pinheirao-green bg-white/5 hover:bg-white/10 p-6 md:p-8 rounded-full transition-all shadow-2xl backdrop-blur-md border border-white/5 hidden md:block"
                  onClick={nextImage}
                  title="Próxima"
                >
                  <ChevronRight size={40} />
                </button>
              </>
            )}

            {/* Main Content Area */}
            <div className="relative w-full h-full flex items-center justify-center select-none">
              <img 
                key={`${lightbox.project.id}-${lightbox.index}`}
                src={lightbox.project.images[lightbox.index]} 
                alt={`${lightbox.project.title} - Visualização ${lightbox.index + 1}`} 
                className="max-w-full max-h-[75vh] object-contain shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-fade-in rounded-sm pointer-events-none"
              />
              
              {/* Mobile Only Nav overlays */}
              <div className="absolute inset-0 flex md:hidden">
                <div className="flex-1 cursor-pointer" onClick={prevImage} title="Anterior"></div>
                <div className="flex-1 cursor-pointer" onClick={nextImage} title="Próxima"></div>
              </div>
            </div>

            {/* Thumbnails Navigation Strip */}
            {lightbox.project.images.length > 1 && (
              <div className="absolute bottom-8 md:bottom-12 left-0 w-full px-6 flex justify-center items-center gap-3 overflow-x-auto pb-4 scrollbar-hide no-scrollbar animate-fade-in-up">
                <div className="flex gap-2 md:gap-4 p-2 bg-white/5 rounded-sm border border-white/10 backdrop-blur-sm">
                  {lightbox.project.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setLightbox({ ...lightbox, index: i })}
                      className={`w-16 h-12 md:w-28 md:h-18 rounded-sm overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${i === lightbox.index ? 'border-pinheirao-green scale-110 shadow-[0_0_15px_rgba(11,181,151,0.5)]' : 'border-transparent opacity-30 hover:opacity-100 hover:scale-105'}`}
                      aria-label={`Ir para imagem ${i + 1}`}
                    >
                      <img src={img} className="w-full h-full object-cover" alt="miniatura" loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Mobile Info Bar at Bottom */}
          <div className="absolute bottom-4 left-0 w-full sm:hidden flex justify-center px-6 animate-fade-in-up">
             <Link 
              to={`/projetos/${lightbox.project.id}`} 
              onClick={(e) => e.stopPropagation()}
              className="bg-pinheirao-green text-white w-full py-4 rounded-sm text-center text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center justify-center"
             >
               Ver Ficha Técnica <ArrowRight size={14} className="ml-2" />
             </Link>
          </div>
        </div>
      )}
    </div>
  );
};
