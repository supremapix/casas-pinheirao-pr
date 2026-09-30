import React, { useState, useEffect, useCallback } from 'react';
import { Target, Eye, Heart, LayoutTemplate, Briefcase, Boxes, Eye as EyeIcon, X, ZoomIn, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Link } from 'react-router-dom';

interface ImageData {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const About: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const closeImageModal = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  }, []);

  const openImageModal = (image: ImageData) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeImageModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeImageModal]);

  const journeyImages: ImageData[] = [
    {
      src: '/nossa_jornada-empresa-historia.webp',
      alt: 'História Casas Pinheirão - Sede da empresa especializada em casas pré-fabricadas de madeira em Pinhais',
      title: 'Nossa Sede em Pinhais',
      description: 'Localizada estrategicamente em Pinhais, nossa sede conta com showroom completo onde você pode conhecer nossos modelos, materiais de primeira qualidade e receber consultoria especializada para seu projeto de casa pré-fabricada.'
    },
    {
      src: '/nossa_jornada-empresa.webp',
      alt: 'Casas Pinheirão fachada - Empresa registrada no CREA-PR construindo casas pré-fabricadas de qualidade',
      title: 'Tradição e Credibilidade',
      description: 'Empresa registrada no CREA-PR com mais de 20 anos de experiência. Nossa estrutura moderna e equipe qualificada garantem projetos executados com excelência técnica e total segurança estrutural para sua família.'
    },
    {
      src: '/nossa_jornada.webp',
      alt: 'Vista aérea Casas Pinheirão - Empresa de casas pré-fabricadas com estrutura completa em Pinhais',
      title: 'Estrutura Completa',
      description: 'Vista aérea de nossa estrutura completa para fabricação e construção. Possuímos estoque de materiais certificados, área de produção moderna e equipe técnica especializada pronta para transformar seu sonho em realidade.'
    }
  ];

  const ourServices = [
    {
      icon: <LayoutTemplate size={28} className="text-pinheirao-green" />,
      title: 'Design Personalizado',
      desc: 'Projetos sob medida criados por nossa equipe de arquitetura para atender suas necessidades exatas.'
    },
    {
      icon: <Briefcase size={28} className="text-pinheirao-green" />,
      title: 'Gestão de Obras',
      desc: 'Cuidamos de toda a burocracia e cronograma, garantindo que sua obra flua sem preocupações.'
    },
    {
      icon: <Boxes size={28} className="text-pinheirao-green" />,
      title: 'Seleção de Materiais',
      desc: 'Utilizamos apenas madeiras de lei certificadas e materiais de primeira linha com garantia.'
    },
    {
      icon: <EyeIcon size={28} className="text-pinheirao-green" />,
      title: 'Supervisão Técnica CREA',
      desc: 'Engenheiros qualificados acompanham cada etapa da construção para assegurar a perfeição estrutural.'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      <EnhancedSEO
        title="Sobre a Empresa - Nossa História e Valores"
        description="Conheça a Casas Pinheirão: mais de 20 anos de experiência em casas pré-fabricadas de madeira e alvenaria. Tradição, qualidade e comprometimento com o sonho da casa própria."
        canonical="/empresa"
        keywords="empresa casas pré-fabricadas, história Casas Pinheirão, tradição casas madeira, casas pré-fabricadas Pinhais, empresa construção Curitiba"
      />

      {/* Page Header */}
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-pinheirao-green mb-3">
            Quem Somos
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-pinheirao-black uppercase tracking-tight mb-4">
            Tradição e Confiança em Pinhais
          </h1>
          <p className="text-pinheirao-gray max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
            Mais de duas décadas construindo lares e realizando sonhos em Curitiba e Região Metropolitana.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pinheirao-green/10 text-pinheirao-green rounded text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck size={16} />
              <span>CREA-PR • Empresa Registrada</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-pinheirao-black uppercase tracking-tight">
              Uma história construída sobre bases sólidas
            </h2>
            <p className="text-pinheirao-gray text-base sm:text-lg mt-4 leading-relaxed font-normal">
              A <strong className="text-pinheirao-black font-bold">Casas Pinheirão</strong> nasceu com o propósito de oferecer uma alternativa viável, segura e de alta qualidade para quem deseja construir a casa própria. Com mais de 20 anos de dedicação, entregamos centenas de unidades em todo o Paraná.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {journeyImages.map((image, idx) => (
              <div
                key={idx}
                className="group cursor-pointer overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all"
                onClick={() => openImageModal(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2">
                    <ZoomIn size={24} />
                    <span className="text-xs font-bold uppercase tracking-wider">Ampliar</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-bold uppercase tracking-wide text-pinheirao-black mb-2">
                    {image.title}
                  </h3>
                  <p className="text-xs text-pinheirao-gray line-clamp-3 leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6 items-center">
            <div className="flex flex-col items-center">
              <a
                href="https://api.whatsapp.com/send?phone=5541996301028&text=Olá! Gostaria de agendar uma visita à sede da Casas Pinheirão."
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-pinheirao-deep transition-all shadow-md"
              >
                <span>Agendar Visita</span>
                <ArrowRight size={16} />
              </a>
              <span className="text-[10px] text-pinheirao-gray mt-1 font-medium">Showroom em Pinhais</span>
            </div>

            <div className="flex flex-col items-center">
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-100 text-pinheirao-black font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-gray-200 transition-all"
              >
                <span>Ver Catálogo</span>
              </Link>
              <span className="text-[10px] text-pinheirao-gray mt-1 font-medium">Projetos prontos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-gray-50 border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-pinheirao-green mb-2">
              Diferenciais
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-pinheirao-black uppercase tracking-tight">
              Excelência e Rigor Técnico
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourServices.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm flex flex-col">
                <div className="mb-5 p-3 bg-pinheirao-green/10 rounded-sm w-fit">
                  {service.icon}
                </div>
                <h3 className="text-base font-bold uppercase tracking-wider text-pinheirao-black mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-pinheirao-gray font-medium leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-sm border-t-4 border-pinheirao-green border-x border-b border-gray-100">
              <div className="p-3 bg-pinheirao-green/10 text-pinheirao-green rounded-sm w-fit mb-5">
                <Target size={24} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-pinheirao-black mb-3">Missão</h3>
              <p className="text-sm text-pinheirao-gray leading-relaxed font-medium">
                Construir casas de excelência com agilidade, preço justo e transparência, proporcionando segurança e bem-estar para famílias realizarem o sonho da casa própria.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-sm border-t-4 border-pinheirao-black border-x border-b border-gray-100">
              <div className="p-3 bg-pinheirao-black/10 text-pinheirao-black rounded-sm w-fit mb-5">
                <Eye size={24} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-pinheirao-black mb-3">Visão</h3>
              <p className="text-sm text-pinheirao-gray leading-relaxed font-medium">
                Ser a construtora de casas pré-fabricadas e alvenaria mais confiável e recomendada do Paraná, reconhecida pela solidez técnica e respeito ao cliente.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-sm border-t-4 border-pinheirao-deep border-x border-b border-gray-100">
              <div className="p-3 bg-pinheirao-deep/10 text-pinheirao-deep rounded-sm w-fit mb-5">
                <Heart size={24} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-pinheirao-black mb-3">Valores</h3>
              <p className="text-sm text-pinheirao-gray leading-relaxed font-medium">
                Ética, pontualidade, respeito ao meio ambiente, madeira nobre certificada e compromisso incondicional com a satisfação do cliente.
              </p>
            </div>
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
            Venha nos Conhecer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Visite nossa sede própria em Pinhais.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            Conheça de perto nosso showroom, mostruário de madeiras nobres tratadas e converse pessoalmente com engenheiros e projetistas especializados.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <a
              href="https://www.google.com/maps/dir//Av.+Jacob+Macanhan,+1369+-+Jardim+Claudia,+Pinhais+-+PR"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-pinheirao-deep transition-all shadow-md"
            >
              <MapPin size={16} />
              <span>Como Chegar ao Showroom</span>
            </a>
            <Link
              to="/envie-seu-projeto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/20 rounded-sm hover:bg-white/20 transition-all"
            >
              <span>Solicitar Orçamento Online</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Semantic Image Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-modal-title"
          aria-describedby="about-modal-desc"
          className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-between p-4 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={closeImageModal}
        >
          {/* Header Bar */}
          <div className="w-full max-w-4xl flex items-center justify-between py-2 text-white border-b border-white/10 shrink-0" onClick={(e) => e.stopPropagation()}>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pinheirao-green">
                Nossa Estrutura • Pinhais / PR
              </p>
              <h2 id="about-modal-title" className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                {selectedImage.title}
              </h2>
            </div>
            <button
              onClick={closeImageModal}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full sm:rounded-sm bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5"
              aria-label="Fechar janela"
              title="Fechar (Esc)"
            >
              <X size={20} />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">Fechar</span>
            </button>
          </div>

          {/* Stage */}
          <div className="max-w-4xl w-full my-auto flex flex-col items-center justify-center py-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full max-h-[55vh] flex items-center justify-center overflow-hidden rounded-sm bg-black">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[55vh] w-auto max-w-full object-contain rounded-sm shadow-2xl"
              />
            </div>

            {/* Semantic Descriptive Box */}
            <div className="w-full mt-4 p-4 sm:p-6 bg-[#1E2229] border border-white/10 rounded-sm">
              <p id="about-modal-desc" className="text-gray-200 text-sm sm:text-base leading-relaxed font-normal">
                {selectedImage.description}
              </p>
            </div>
          </div>

          {/* Bottom Action Bar with Direct Close Button */}
          <div className="w-full max-w-4xl pt-3 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 shrink-0" onClick={(e) => e.stopPropagation()}>
            <p className="text-xs text-gray-400 font-medium text-center sm:text-left flex items-center gap-1.5">
              <MapPin size={14} className="text-pinheirao-green shrink-0" />
              <span>Av. Jacob Macanhan, 1369 - Jardim Claudia, Pinhais/PR</span>
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="https://api.whatsapp.com/send?phone=5541996301028&text=Olá! Gostaria de agendar uma visita à sede da Casas Pinheirão."
                target="_blank"
                rel="noopener"
                onClick={closeImageModal}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-pinheirao-deep transition-all shadow-md"
              >
                <span>Agendar Visita</span>
                <ArrowRight size={14} />
              </a>
              <button
                onClick={closeImageModal}
                className="flex-1 sm:flex-initial px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all border border-white/20"
              >
                Fechar Visualização
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
