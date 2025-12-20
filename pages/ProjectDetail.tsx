
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data';
import { ConstructionType, Project } from '../types';
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

              <div className="space-y-4">
                <button 
                  onClick={handleQuoteRequest}
                  className="w-full bg-pinheirao-green hover:bg-pinheirao-deep text-white py-6 rounded-sm font-black text-xs uppercase tracking-[0.3em] transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 group"
                >
                  Solicitar Orçamento Personalizado
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <a 
                  href={`https://api.whatsapp.com/send?phone=5541996301028&text=Olá! Me interessei pelo modelo: ${project.title}`}
                  className="w-full border-2 border-pinheirao-black hover:bg-pinheirao-black hover:text-white text-pinheirao-black py-6 rounded-sm font-black text-xs uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3"
                >
                  <MessageSquare size={18} />
                  Falar com Especialista
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent CTA Section */}
      <section className="bg-pinheirao-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-concrete-pattern opacity-5"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="bg-white p-12 md:p-20 shadow-2xl rounded-sm flex flex-col md:flex-row items-center gap-12">
             <div className="flex-1 text-center md:text-left">
               <h2 className="text-3xl md:text-4xl font-black text-pinheirao-black mb-6 uppercase tracking-tighter italic">Transforme este projeto no <span className="text-pinheirao-green">seu novo lar.</span></h2>
               <p className="text-pinheirao-gray font-medium leading-relaxed mb-8">
                 Gostou do layout mas precisa de um quarto extra? Ou prefere uma varanda maior? 
                 Nossa equipe técnica pode ajustar cada centímetro desta planta para se adequar perfeitamente ao seu terreno e estilo de vida.
               </p>
               <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <button 
                    onClick={handleQuoteRequest}
                    className="bg-pinheirao-green text-white px-10 py-5 rounded-sm font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-pinheirao-deep transition-all hover:-translate-y-1"
                  >
                    Personalizar este Modelo
                  </button>
                  <Link to="/contato" className="border-2 border-pinheirao-black text-pinheirao-black px-10 py-5 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-pinheirao-black hover:text-white transition-all">
                    Visitar Showroom
                  </Link>
               </div>
             </div>
             <div className="hidden lg:block w-1/3">
               <img 
                src="https://images.unsplash.com/photo-1449156003053-96432b250f09?auto=format&fit=crop&q=80&w=600" 
                alt="Construction" 
                className="rounded-sm shadow-2xl rotate-3 scale-110" 
               />
             </div>
          </div>
        </div>
      </section>

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

      {/* High-Quality Custom Lightbox */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-pinheirao-black/98 flex flex-col items-center justify-center animate-fade-in transition-all"
          onClick={closeLightbox}
        >
          {/* Top Header */}
          <div className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-[110]">
             <div className="flex flex-col">
               <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-1">{project.title}</span>
               <span className="text-pinheirao-green text-[9px] font-bold uppercase tracking-widest">Foto {lightboxIndex + 1} de {project.images.length}</span>
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
            className="relative w-full h-full flex items-center justify-center p-4 md:p-16 lg:p-24"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Desktop Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button 
                  className="absolute left-6 md:left-12 z-[110] text-white hover:text-pinheirao-green bg-white/5 hover:bg-white/10 p-5 rounded-full transition-all shadow-2xl backdrop-blur-sm hidden md:block"
                  onClick={prevImage}
                  title="Anterior (Seta Esquerda)"
                >
                  <ChevronLeft size={32} />
                </button>
                <button 
                  className="absolute right-6 md:right-12 z-[110] text-white hover:text-pinheirao-green bg-white/5 hover:bg-white/10 p-5 rounded-full transition-all shadow-2xl backdrop-blur-sm hidden md:block"
                  onClick={nextImage}
                  title="Próxima (Seta Direita)"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Main Stage Image */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <img 
                key={project.images[lightboxIndex]}
                src={project.images[lightboxIndex]} 
                alt={`${project.title} expandida`} 
                className="max-w-full max-h-full object-contain shadow-2xl animate-fade-in select-none"
                draggable="false"
              />
            </div>
            
            {/* Mobile Swipe Simulation Navigation (Arrows always visible at bottom for mobile) */}
            <div className="absolute bottom-32 flex md:hidden space-x-6">
               <button onClick={prevImage} className="bg-white/10 p-4 rounded-full text-white"><ChevronLeft size={24} /></button>
               <button onClick={nextImage} className="bg-white/10 p-4 rounded-full text-white"><ChevronRight size={24} /></button>
            </div>

            {/* Thumbnails Navigation Track */}
            {project.images.length > 1 && (
              <div className="absolute bottom-10 left-0 w-full px-8 overflow-hidden pointer-events-none">
                <div className="max-w-3xl mx-auto flex justify-center gap-3 md:gap-4 pointer-events-auto">
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex(i);
                      }}
                      className={`w-16 h-12 md:w-24 md:h-16 rounded-sm overflow-hidden border-2 transition-all flex-shrink-0 shadow-lg ${i === lightboxIndex ? 'border-pinheirao-green scale-110' : 'border-transparent opacity-30 hover:opacity-100 hover:scale-105'}`}
                    >
                      <img src={img} className="w-full h-full object-cover" alt={`Thumb ${i + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
