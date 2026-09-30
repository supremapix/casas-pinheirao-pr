
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data';
import { ConstructionType, Project } from '../types';
import { PremiumCustomSection } from '../components/PremiumCustomSection';
import {
  Square, Bed, Bath, X, ChevronLeft, ChevronRight,
  Maximize2, ArrowLeft, Send, Home, Ruler, ShieldCheck,
  CheckCircle, MessageSquare
} from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const project = useMemo(() => PROJECTS.find(p => p.id === id), [id]);

  const relatedProjects = useMemo(() => {
    if (!project) return [];
    return PROJECTS
      .filter(p => p.type === project.type && p.id !== project.id)
      .slice(0, 3);
  }, [project]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  if (!project) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest text-pinheirao-concrete mb-8">Projeto não encontrado</h1>
        <Link to="/projetos" className="bg-pinheirao-green text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest transition-transform hover:scale-105">Voltar para Projetos</Link>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % project.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + project.images.length) % project.images.length);
  };

  const handleQuoteRequest = () => {
    navigate(`/envie-seu-projeto?title=${encodeURIComponent(project.title)}&type=${encodeURIComponent(project.type)}`);
  };

  return (
    <div className="pt-20 bg-white">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
        <Link to="/projetos" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-pinheirao-gray hover:text-pinheirao-green transition-colors group">
          <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Voltar para Projetos
        </Link>
        <div className="hidden sm:flex items-center space-x-4 text-[10px] font-black uppercase tracking-widest text-pinheirao-gray/40">
          <Link to="/" className="hover:text-pinheirao-green">Home</Link>
          <span>/</span>
          <Link to="/projetos" className="hover:text-pinheirao-green">Projetos</Link>
          <span>/</span>
          <span className="text-pinheirao-black">{project.title}</span>
        </div>
      </div>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Gallery Column */}
            <div className="space-y-6">
              <div 
                className="relative h-[400px] md:h-[600px] overflow-hidden rounded-sm cursor-zoom-in group shadow-2xl bg-pinheirao-black"
                onClick={() => openLightbox(0)}
              >
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                  <div className="bg-white/90 p-5 rounded-full text-pinheirao-black shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 size={32} />
                  </div>
                  <span className="text-white text-[10px] font-black uppercase tracking-widest mt-4 drop-shadow-lg">Clique para ampliar</span>
                </div>
                <div className="absolute bottom-6 left-6 bg-pinheirao-green text-white text-[9px] font-black px-4 py-2 rounded-sm uppercase tracking-widest shadow-lg">
                  Imagem Principal
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {project.images.slice(1, 4).map((img, idx) => (
                  <div 
                    key={idx} 
                    className="relative h-28 md:h-40 overflow-hidden rounded-sm cursor-zoom-in group shadow-lg bg-pinheirao-black"
                    onClick={() => openLightbox(idx + 1)}
                  >
                    <img src={img} alt={`${project.title} gallery`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 size={24} className="text-white" />
                    </div>
                    {idx === 2 && project.images.length > 4 && (
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white text-xs font-black uppercase tracking-widest">
                        +{project.images.length - 4} Fotos
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Info Column */}
            <div className="flex flex-col">
              <div className="mb-10">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="bg-pinheirao-green text-white px-4 py-1.5 rounded-sm text-[9px] font-black uppercase tracking-[0.2em] shadow-sm">
                    {project.type}
                  </span>
                  <span className="text-pinheirao-gray/40 font-bold">•</span>
                  <span className="text-pinheirao-gray text-[9px] font-black uppercase tracking-[0.2em]">Código: CP-{project.id}00</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-pinheirao-black mb-8 uppercase tracking-tighter italic leading-[1.1]">
                  {project.title}
                </h1>

                <div className="grid grid-cols-3 gap-4 py-8 border-y border-gray-100 mb-10">
                  <div className="flex flex-col items-center text-center p-4 bg-pinheirao-concrete/10 rounded-sm">
                    <Square size={24} className="text-pinheirao-green mb-3" />
                    <p className="text-[8px] font-black text-pinheirao-gray uppercase tracking-widest mb-1">Área Total</p>
                    <p className="text-sm font-black text-pinheirao-black">{project.area}</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-pinheirao-concrete/10 rounded-sm">
                    <Bed size={24} className="text-pinheirao-green mb-3" />
                    <p className="text-[8px] font-black text-pinheirao-gray uppercase tracking-widest mb-1">Dormitórios</p>
                    <p className="text-sm font-black text-pinheirao-black">2-3 Quartos</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-pinheirao-concrete/10 rounded-sm">
                    <Bath size={24} className="text-pinheirao-green mb-3" />
                    <p className="text-[8px] font-black text-pinheirao-gray uppercase tracking-widest mb-1">Banheiros</p>
                    <p className="text-sm font-black text-pinheirao-black">1-2 WCs</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="flex items-center text-pinheirao-black font-black uppercase tracking-widest text-xs mb-4">
                    <Ruler size={16} className="mr-2 text-pinheirao-green" /> Detalhes da Planta
                  </h4>
                  <p className="text-pinheirao-gray text-sm leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
                
                <div className="bg-pinheirao-black text-white p-6 rounded-sm">
                  <h4 className="flex items-center font-black uppercase tracking-widest text-[10px] mb-4 text-pinheirao-green">
                    <ShieldCheck size={16} className="mr-2" /> Incluso neste Modelo
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Estrutura Certificada', 'Piso e Forro Nobre', 'Esquadrias de Madeira', 'Montagem Especializada'].map((item, idx) => (
                      <li key={idx} className="flex items-center text-[10px] font-bold uppercase tracking-widest">
                        <CheckCircle size={12} className="mr-2 text-pinheirao-green" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col">
                  <button 
                    onClick={handleQuoteRequest}
                    className="w-full bg-pinheirao-green hover:bg-pinheirao-deep text-white py-4 rounded-sm font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group"
                  >
                    <span>Pedir Orçamento</span>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] text-pinheirao-gray mt-1 text-center font-medium tracking-wide">Projeto sob medida</span>
                </div>

                <div className="flex flex-col">
                  <a 
                    href={`https://api.whatsapp.com/send?phone=5541996301028&text=Olá! Me interessei pelo modelo: ${project.title}`}
                    target="_blank"
                    rel="noopener"
                    className="w-full border border-pinheirao-black hover:bg-pinheirao-black hover:text-white text-pinheirao-black py-4 rounded-sm font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={16} />
                    <span>Falar no WhatsApp</span>
                  </a>
                  <span className="text-[10px] text-pinheirao-gray mt-1 text-center font-medium tracking-wide">Atendimento imediato</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PremiumCustomSection project={project} />

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pinheirao-green mb-4">Veja Também</h2>
                <h3 className="text-3xl font-black text-pinheirao-black uppercase tracking-tighter italic">Projetos em {project.type}</h3>
              </div>
              <Link to="/projetos" className="text-[10px] font-black uppercase tracking-widest text-pinheirao-gray hover:text-pinheirao-green flex items-center border-b border-gray-100 pb-2 transition-colors">
                Ver todos os projetos <ChevronRight size={14} className="ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {relatedProjects.map((p) => (
                <Link 
                  key={p.id} 
                  to={`/projetos/${p.id}`}
                  className="group flex flex-col bg-white border border-gray-50 rounded-sm overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-5 left-5 bg-pinheirao-black/90 text-white text-[9px] font-black px-4 py-2 rounded-sm uppercase tracking-widest shadow-lg">
                      {p.area}
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="font-black text-xl text-pinheirao-black uppercase tracking-tighter mb-4 group-hover:text-pinheirao-green transition-colors leading-tight">{p.title}</h4>
                    <div className="flex items-center text-[9px] font-black text-pinheirao-gray uppercase tracking-widest">
                      <Home size={12} className="mr-2 text-pinheirao-green" /> {p.type}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Semantic Custom Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-modal-title"
          aria-describedby="project-detail-modal-desc"
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-between p-4 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Top Header Bar */}
          <div className="w-full max-w-5xl flex items-center justify-between py-2 text-white border-b border-white/10 shrink-0" onClick={(e) => e.stopPropagation()}>
             <div>
               <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pinheirao-green">
                 {project.type} • Foto {lightboxIndex + 1} de {project.images.length}
               </p>
               <h2 id="project-detail-modal-title" className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                 {project.title} ({project.area})
               </h2>
             </div>
             <button 
              className="p-2 sm:px-3 sm:py-1.5 rounded-full sm:rounded-sm bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5"
              onClick={closeLightbox}
              aria-label="Fechar galeria"
              title="Fechar (Esc)"
            >
              <X size={20} />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">Fechar</span>
            </button>
          </div>

          {/* Main Stage & Controls */}
          <div 
            className="relative max-w-5xl w-full flex flex-col items-center justify-center my-auto py-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Desktop Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button 
                  className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 hover:bg-pinheirao-green text-white rounded-full z-10 transition-all shadow-xl"
                  onClick={prevImage}
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 hover:bg-pinheirao-green text-white rounded-full z-10 transition-all shadow-xl"
                  onClick={nextImage}
                  aria-label="Próxima foto"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Main Stage Image */}
            <div className="max-h-[55vh] flex items-center justify-center overflow-hidden rounded-sm bg-black">
              <img 
                key={project.images[lightboxIndex]}
                src={project.images[lightboxIndex]} 
                alt={`${project.title} foto ${lightboxIndex + 1}`} 
                className="max-h-[55vh] w-auto max-w-full object-contain rounded-sm shadow-2xl animate-fade-in select-none"
                draggable="false"
              />
            </div>
            
            {/* Semantic Project Description */}
            <div className="w-full mt-4 p-4 sm:p-5 bg-[#1E2229] border border-white/10 rounded-sm">
              <p id="project-detail-modal-desc" className="text-gray-200 text-xs sm:text-sm leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Thumbnails Navigation Track */}
            {project.images.length > 1 && (
              <div className="w-full mt-3 flex justify-center gap-2 overflow-x-auto pb-1">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className={`w-14 h-10 rounded-sm overflow-hidden border-2 transition-all flex-shrink-0 shadow-lg ${i === lightboxIndex ? 'border-pinheirao-green opacity-100 shadow-md' : 'border-transparent opacity-40 hover:opacity-80'}`}
                    aria-label={`Ver foto ${i + 1}`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`Thumb ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Bar with Direct Close Button */}
          <div className="w-full max-w-5xl pt-3 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 shrink-0" onClick={(e) => e.stopPropagation()}>
            <p className="text-xs text-gray-400 font-medium text-center sm:text-left">
              Estrutura em {project.type} com responsabilidade técnica registrada no CREA-PR.
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  closeLightbox();
                  handleQuoteRequest();
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-pinheirao-deep transition-all shadow-md"
              >
                <span>Orçamento Deste Modelo</span>
                <Send size={14} />
              </button>
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
