
import React, { useState } from 'react';
import { Award, Users, Shield, Target, Eye, Heart, LayoutTemplate, Briefcase, Boxes, Eye as EyeIcon, X, ZoomIn } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';

interface ImageData {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const About: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

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
      icon: <LayoutTemplate size={32} className="text-pinheirao-green" />,
      title: 'Design Personalizado',
      desc: 'Projetos sob medida criados por nossa equipe de arquitetura para atender suas necessidades exatas.'
    },
    {
      icon: <Briefcase size={32} className="text-pinheirao-green" />,
      title: 'Gestão de Projetos',
      desc: 'Cuidamos de toda a burocracia e cronograma, garantindo que sua obra flua sem preocupações.'
    },
    {
      icon: <Boxes size={32} className="text-pinheirao-green" />,
      title: 'Seleção de Materiais',
      desc: 'Utilizamos apenas madeiras de lei certificadas e materiais de primeira linha com garantia.'
    },
    {
      icon: <EyeIcon size={32} className="text-pinheirao-green" />,
      title: 'Supervisão Técnica',
      desc: 'Engenheiros qualificados acompanham cada etapa da construção para assegurar a perfeição estrutural.'
    }
  ];

  return (
    <div className="pt-20">
      <EnhancedSEO
        title="Sobre a Empresa - Nossa História e Valores"
        description="Conheça a Casas Pinheirão: mais de 20 anos de experiência em casas pré-fabricadas de madeira e alvenaria. Tradição, qualidade e comprometimento com o sonho da casa própria."
        canonical="/empresa"
        keywords="empresa casas pré-fabricadas, história Casas Pinheirão, tradição casas madeira, casas pré-fabricadas Pinhais, empresa construção Curitiba"
      />
      {/* Page Header */}
      <section className="bg-pinheirao-concrete/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pinheirao-green mb-6">Quem Somos</h2>
          <h1 className="text-4xl md:text-5xl font-black text-pinheirao-black mb-6">Tradição em Pinhais</h1>
          <p className="text-pinheirao-gray max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Mais de duas décadas construindo lares e realizando sonhos em Curitiba e Região Metropolitana.
          </p>
        </div>
      </section>

      {/* History (About Us Section) */}
      <section className="py-24 bg-gradient-to-b from-white to-pinheirao-concrete/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-pinheirao-green text-white inline-block px-6 py-3 rounded-sm text-xs font-black uppercase tracking-widest mb-6">
              Nossa Jornada
            </div>
            <div className="flex items-center justify-center gap-6 mb-6">
              <h2 className="text-4xl md:text-5xl font-black text-pinheirao-black">
                Uma história de confiança e qualidade
              </h2>
              <div className="w-24 h-24 bg-white rounded-full p-3 shadow-lg flex items-center justify-center flex-shrink-0 animate-pulse-slow">
                <img
                  src="/crea-pr-pinhais-1.png"
                  alt="CREA-PR Empresa Registrada"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="w-24 h-1 bg-pinheirao-green mx-auto mb-8"></div>
            <p className="text-pinheirao-gray max-w-3xl mx-auto text-lg leading-relaxed font-medium">
              A <strong className="text-pinheirao-black">Casas Pinheirão</strong> nasceu em Pinhais com o propósito de oferecer uma alternativa viável, segura e de alta qualidade para quem deseja construir a casa própria. Ao longo de mais de 20 anos, evoluímos nossos processos construtivos e expandimos nossa equipe para nos tornarmos referência no segmento.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {journeyImages.map((image, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                onClick={() => setSelectedImage(image)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-pinheirao-green via-pinheirao-deep to-pinheirao-green opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>

                <div className="relative aspect-[4/3] overflow-hidden bg-pinheirao-concrete/20">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Overlay com zoom icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pinheirao-black/80 via-pinheirao-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="text-white" size={48} strokeWidth={2} />
                      <p className="text-white font-bold text-sm mt-2 uppercase tracking-wider">Ver Detalhes</p>
                    </div>
                  </div>
                </div>

                {/* Image Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pinheirao-black via-pinheirao-black/90 to-transparent p-6">
                  <h3 className="text-white font-black text-xl mb-2 uppercase tracking-tight">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-sm font-medium line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Content */}
          <div className="mt-16 max-w-4xl mx-auto space-y-6 text-pinheirao-gray leading-relaxed font-medium text-center">
            <p className="text-lg">
              Nossa expertise vai além da construção em si; nós entendemos as expectativas e os desafios de cada família. Por isso, oferecemos um atendimento consultivo que guia o cliente desde a escolha do modelo ideal até o acabamento final.
            </p>
            <p className="text-lg">
              Hoje, com <strong className="text-pinheirao-black">centenas de unidades entregues</strong>, nossa maior recompensa é a satisfação e o sorriso no rosto de cada novo morador.
            </p>
          </div>
        </div>
      </section>

      {/* Image Modal/Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-pinheirao-green transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-sm"
            aria-label="Fechar"
          >
            <X size={32} strokeWidth={2} />
          </button>

          <div
            className="max-w-6xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-pinheirao-concrete/20">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-8 bg-gradient-to-br from-white to-pinheirao-concrete/10">
              <h3 className="text-3xl font-black text-pinheirao-black mb-4 uppercase tracking-tight">
                {selectedImage.title}
              </h3>
              <p className="text-pinheirao-gray text-lg leading-relaxed font-medium">
                {selectedImage.description}
              </p>

              <div className="mt-6 pt-6 border-t border-pinheirao-concrete/30">
                <a
                  href="https://wa.me/5541996301028?text=Olá! Gostaria de conhecer mais sobre a história e estrutura da Casas Pinheirão."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-pinheirao-green hover:bg-pinheirao-deep text-white px-8 py-4 rounded-sm font-black uppercase tracking-wider text-sm transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Conheça Nossa Estrutura
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Our Services Section */}
      <section className="py-24 bg-pinheirao-concrete/10 border-y border-pinheirao-concrete/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pinheirao-green mb-4">Nossos Serviços</h2>
            <h3 className="text-4xl font-black text-pinheirao-black mb-6">Excelência em cada etapa da construção.</h3>
            <div className="w-20 h-1 bg-pinheirao-green mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourServices.map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center group">
                <div className="mb-6 p-4 bg-pinheirao-concrete/30 rounded-full group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-lg font-black text-pinheirao-black mb-4 uppercase tracking-tighter">{service.title}</h4>
                <p className="text-sm text-pinheirao-gray font-medium leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-sm shadow-sm text-center border-b-4 border-pinheirao-green">
              <div className="bg-pinheirao-green/10 p-4 rounded-full w-fit mx-auto mb-6 text-pinheirao-green">
                <Target size={36} />
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-widest">Missão</h3>
              <p className="text-pinheirao-gray text-sm leading-relaxed font-medium">Construir casas de excelência com agilidade e preço justo, proporcionando segurança e bem-estar para nossos clientes.</p>
            </div>
            <div className="bg-white p-12 rounded-sm shadow-sm text-center border-b-4 border-pinheirao-black">
              <div className="bg-pinheirao-black/10 p-4 rounded-full w-fit mx-auto mb-6 text-pinheirao-black">
                <Eye size={36} />
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-widest">Visão</h3>
              <p className="text-pinheirao-gray text-sm leading-relaxed font-medium">Ser a empresa de casas pré-fabricadas mais admirada do Paraná, reconhecida pela inovação e transparência em todos os processos.</p>
            </div>
            <div className="bg-white p-12 rounded-sm shadow-sm text-center border-b-4 border-pinheirao-deep">
              <div className="bg-pinheirao-deep/10 p-4 rounded-full w-fit mx-auto mb-6 text-pinheirao-deep">
                <Heart size={36} />
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-widest">Valores</h3>
              <p className="text-pinheirao-gray text-sm leading-relaxed font-medium">Ética, comprometimento, respeito ao meio ambiente, foco no cliente e valorização das pessoas.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};
