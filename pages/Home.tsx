
import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { CustomHomeSection } from '../components/CustomHomeSection';
import { PROJECTS } from '../data';
import { ConstructionType } from '../types';
import {
  CheckCircle, Shield, Award, Users,
  Clock, Package, HardHat, PencilRuler,
  ClipboardList, Truck, ChevronRight,
  MessageSquare, Home as HomeIcon, Key,
  MapPin, Settings, CreditCard, LayoutTemplate, Briefcase, Boxes, Eye,
  Star, Rocket, Phone
} from 'lucide-react';

export const Home: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Casas Pinheirão',
    description: 'Especialista em Casas Pré-Fabricadas de Madeira e Alvenaria em Curitiba e Região. Mais de 20 anos realizando o sonho da casa própria.',
    image: 'https://casaspinheirao.com.br/medias/elementor/thumbs/Casas-Pinheirao-Pinhais-As-casas-pre-fabricadas-mais-baratas-do-Brasil-qu5yw0ge1u5iqut4a4yuh23advi1ysrdau4a0yqoe8.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Jacob Macanhan, 1369',
      addressLocality: 'Pinhais',
      addressRegion: 'PR',
      postalCode: '83323-060',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -25.4447,
      longitude: -49.1916
    },
    url: 'https://casaspinheirao.com.br',
    telephone: '+55-41-3667-8015',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/casasprefabricadapinheirao',
      'https://www.instagram.com/casas_pinheirao'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '300'
    }
  };

  const constructionTypes = [
    { type: ConstructionType.WOOD, image: '/casas-madeira-nossos_modelos.png', desc: 'Conforto térmico e beleza natural das madeiras de lei.' },
    { type: ConstructionType.MASONRY, image: '/casas-alvenaria-nossos_modelos.png', desc: 'Solidez e durabilidade da construção tradicional.' },
    { type: ConstructionType.SOBRADO, image: '/sobrado-nossos_modelos.png', desc: 'Aproveitamento inteligente de espaço em dois pavimentos.' },
    { type: ConstructionType.TRIPLEX, image: 'https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/21ubrgoy_triplex.png', desc: 'O máximo em amplitude e luxo para sua família.' },
  ];

  const steps = [
    { id: 1, title: 'Contato', icon: <MessageSquare />, desc: 'Primeiro atendimento e entendimento do sonho.' },
    { id: 2, title: 'Projeto', icon: <PencilRuler />, desc: 'Escolha do modelo ou criação personalizada.' },
    { id: 3, title: 'Visita', icon: <MapPin />, desc: 'Avaliação técnica do terreno e viabilidade.' },
    { id: 4, title: 'Ajustes', icon: <Settings />, desc: 'Refinamento de detalhes e materiais.' },
    { id: 5, title: 'Início', icon: <HardHat />, desc: 'Preparação do terreno e início da montagem.' },
    { id: 6, title: 'Entrega', icon: <Key />, desc: 'Finalização total e entrega das chaves.' },
    { id: 7, title: 'Pós-Venda', icon: <Shield />, desc: 'Garantia estrutural e suporte contínuo.' },
  ];

  const kits = [
    {
      title: "Kit Madeira",
      items: ["Paredes em madeira nobre certificada", "Estrutura de telhado e oitões", "Forro e assoalho de alta qualidade", "Esquadrias padrão em madeira"],
      icon: <Package size={40} />
    },
    {
      title: "Chave na Mão",
      items: ["Fundação/Radier incluídos", "Montagem completa e acabamento", "Instalações elétricas e hidráulicas", "Revestimentos cerâmicos e pintura"],
      icon: <HardHat size={40} />,
      highlight: true
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
      icon: <Eye size={32} className="text-pinheirao-green" />,
      title: 'Supervisão Técnica',
      desc: 'Engenheiros qualificados acompanham cada etapa da construção para assegurar a perfeição estrutural.'
    }
  ];

  return (
    <div className="overflow-hidden">
      <EnhancedSEO
        title="Realize o Sonho da Casa Própria"
        description="Casas Pinheirão: Especialista em casas pré-fabricadas de madeira e alvenaria em Curitiba e Região. Mais de 20 anos de tradição e qualidade. Financiamento facilitado."
        canonical="/"
        keywords="casas pré-fabricadas, casas de madeira, casas de alvenaria, sobrados, casas Pinhais, casas Curitiba, casa própria Pinhais, financiamento casa, casas pré-fabricadas Curitiba, casas de madeira Pinhais"
        structuredData={structuredData}
      />
      <Hero />

      {/* Diferenciais Rápidos */}
      <section className="bg-pinheirao-concrete/10 py-8 sm:py-12 border-b border-pinheirao-concrete/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: <Clock size={20} />, text: '20 Anos de Mercado' },
              { icon: <Users size={20} />, text: '300+ Famílias Felizes' },
              { icon: <Shield size={20} />, text: 'Garantia Estrutural' },
              { icon: <Award size={20} />, text: 'Atendimento Consultivo' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="text-pinheirao-green mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5 sm:w-6 sm:h-6' })}
                </div>
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wide sm:tracking-widest text-pinheirao-black">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História (About Us Section) */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-[0.3em] text-pinheirao-green mb-3 sm:mb-4">Tradição em Pinhais</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 leading-tight">Uma história construída sobre <span className="text-pinheirao-green">bases sólidas.</span></h3>
              <p className="text-sm sm:text-base text-pinheirao-gray mb-4 sm:mb-6 leading-relaxed font-medium">
                Referência em casas pré-fabricadas em toda Curitiba e Região Metropolitana, a Casas Pinheirão une a velocidade da construção moderna com o cuidado artesanal das madeiras nobres.
              </p>
              <p className="text-sm sm:text-base text-pinheirao-gray mb-8 sm:mb-10 leading-relaxed font-medium">
                Nosso compromisso é entregar não apenas uma estrutura, mas o cenário onde sua família construirá as melhores memórias, com o melhor custo-benefício do Paraná.
              </p>
              <Link to="/empresa" className="inline-flex items-center text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest text-pinheirao-black group">
                Conheça nossa trajetória
                <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-pinheirao-green/5 rounded-2xl -z-10 rotate-3"></div>
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="flex justify-end p-4 sm:p-6 bg-gradient-to-br from-pinheirao-green/5 to-white">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full p-3 sm:p-4 shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <img
                      src="/crea-pr.svg"
                      alt="CREA-PR Empresa Registrada"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="relative -mt-8 sm:-mt-10">
                  <img
                    src="/tradicao-em-pinhais.webp"
                    alt="Tradição em Pinhais - Casas Pinheirão, do aluguel para a casa própria, construímos no seu terreno"
                    className="w-full h-[380px] sm:h-[420px] object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-white flex justify-end">
                  <div className="w-28 sm:w-36 bg-white p-2 sm:p-3 rounded-lg shadow-lg border-2 border-pinheirao-green/30 hover:scale-105 transition-transform duration-300">
                    <img
                      src="/casas-pinheirao-logo-transparente.png"
                      alt="Casas Pinheirão Logo"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção de Vídeo com Mockup de Celular - Estilo Premium */}
      <section className="video-showcase-section py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden">
        {/* Efeitos de fundo animados */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-pinheirao-green/15 via-pinheirao-green/5 to-transparent top-[-300px] right-[-200px] blur-3xl animate-float"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-pinheirao-deep/10 to-transparent bottom-[-250px] left-[-150px] blur-3xl animate-float-delayed"></div>

        {/* Grid de pontos decorativo */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

            {/* Coluna Esquerda (5/12 = ~40%) - Mockup de Celular Premium */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="phone-mockup-wrapper relative">
                {/* Glow effect atrás do celular */}
                <div className="absolute inset-0 bg-gradient-to-br from-pinheirao-green/30 to-pinheirao-deep/30 blur-[80px] scale-110"></div>

                {/* Mockup do iPhone */}
                <div className="phone-device relative w-[300px] sm:w-[340px] h-[610px] sm:h-[690px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[45px] sm:rounded-[50px] p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.1)] transform hover:scale-[1.02] transition-all duration-500 z-10">

                  {/* Notch do iPhone (Dynamic Island style) */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[110px] sm:w-[130px] h-[28px] sm:h-[32px] bg-black rounded-full z-20 shadow-inner"></div>

                  {/* Botão de volume */}
                  <div className="absolute left-[-3px] top-[120px] w-[3px] h-[50px] bg-[#2a2a2a] rounded-l-sm"></div>
                  <div className="absolute left-[-3px] top-[180px] w-[3px] h-[50px] bg-[#2a2a2a] rounded-l-sm"></div>

                  {/* Botão power */}
                  <div className="absolute right-[-3px] top-[150px] w-[3px] h-[70px] bg-[#2a2a2a] rounded-r-sm"></div>

                  {/* Tela interna com vídeo */}
                  <div className="phone-screen relative w-full h-full bg-black rounded-[36px] sm:rounded-[40px] overflow-hidden shadow-inner">
                    {/* Play button overlay decorativo */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pinheirao-green/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-0 h-0 border-t-[12px] sm:border-t-[14px] border-t-transparent border-l-[18px] sm:border-l-[22px] border-l-white border-b-[12px] sm:border-b-[14px] border-b-transparent ml-1"></div>
                      </div>
                    </div>

                    <iframe
                      src="https://www.youtube.com/embed/3ZXzDpzvKRw?autoplay=1&mute=1&loop=1&playlist=3ZXzDpzvKRw&controls=1&modestbranding=1&rel=0&playsinline=1"
                      title="Tour Virtual - Casas Pinheirão"
                      className="absolute inset-0 w-full h-full object-cover"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Reflexo de luz no celular */}
                  <div className="absolute top-0 left-0 w-full h-full rounded-[45px] sm:rounded-[50px] bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Coluna Direita (7/12 = ~60%) - Conteúdo */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 lg:space-y-7">

              {/* Badge Superior com ícone */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-gradient-to-r from-pinheirao-green/15 to-pinheirao-deep/15 border border-pinheirao-green/40 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full backdrop-blur-sm shadow-lg">
                <Star size={20} className="text-pinheirao-green fill-pinheirao-green" />
                <span className="text-pinheirao-green font-bold text-xs sm:text-sm tracking-wider uppercase">CASAS PINHEIRÃO</span>
              </div>

              {/* Título Principal com Destaque */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Não é Milagre, é{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-pinheirao-green via-pinheirao-deep to-pinheirao-green bg-clip-text text-transparent animate-gradient">
                    Casas Pinheirão!
                  </span>
                  <span className="absolute bottom-1 left-0 w-full h-3 sm:h-4 bg-pinheirao-green/20 -z-0"></span>
                </span>
              </h2>

              {/* Descrição com destaque */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-300/90 leading-relaxed max-w-2xl">
                Nossa <strong className="text-white font-bold">construção especializada</strong> oferece casas pré-fabricadas no conforto da sua casa. Cansado de pagar aluguel?
                <strong className="text-pinheirao-green font-bold"> Dê o play na sua vida</strong> e veja a transformação!
              </p>

              {/* Destaque de localização */}
              <div className="inline-block bg-gradient-to-r from-pinheirao-green/10 to-transparent pl-5 pr-8 py-3 border-l-4 border-pinheirao-green rounded-r-lg">
                <p className="text-pinheirao-green font-bold text-sm sm:text-base">
                  Atendimento em Pinhais, Curitiba e Região Metropolitana.
                </p>
              </div>

              {/* Lista de Benefícios com ícones circulares */}
              <ul className="space-y-3.5 sm:space-y-4 py-3 sm:py-4">
                {[
                  'Casas de madeira e alvenaria com tecnologia de ponta',
                  'Financiamento facilitado direto com a construtora',
                  'Projetos personalizados e entrega em tempo recorde'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 sm:gap-4 text-gray-100 group">
                    <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-pinheirao-green to-pinheirao-deep text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
                      <CheckCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg leading-relaxed font-medium pt-0.5">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Botões de Ação com Gradiente */}
              <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 pt-3 sm:pt-4">
                <Link
                  to="/envie-seu-projeto"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-4 sm:py-4.5 bg-gradient-to-r from-pinheirao-green via-pinheirao-deep to-pinheirao-green text-white font-bold text-sm sm:text-base rounded-full shadow-[0_8px_20px_rgba(11,181,151,0.5)] hover:shadow-[0_12px_28px_rgba(11,181,151,0.7)] hover:-translate-y-1 hover:scale-105 transition-all overflow-hidden animate-pulse-slow"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Quero Minha Casa Assim!</span>
                    <HomeIcon size={20} className="animate-bounce-slow" />
                  </span>
                  {/* Efeito de brilho animado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  {/* Anel pulsante */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pinheirao-green to-pinheirao-deep rounded-full opacity-30 blur-md animate-pulse-ring"></div>
                </Link>

                <Link
                  to="/projetos"
                  className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-4 sm:py-4.5 bg-white/5 backdrop-blur-sm text-white font-bold text-sm sm:text-base border-2 border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 transition-all"
                >
                  Conhecer Projetos
                </Link>
              </div>

            </div>

          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.6;
            }
            50% {
              transform: translate(-40px, 40px) scale(1.1);
              opacity: 0.8;
            }
          }

          @keyframes float-delayed {
            0%, 100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.5;
            }
            50% {
              transform: translate(40px, -40px) scale(1.15);
              opacity: 0.7;
            }
          }

          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes pulse-slow {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.95;
            }
          }

          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-3px);
            }
          }

          @keyframes pulse-ring {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.05);
            }
          }

          .animate-float {
            animation: float 10s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float-delayed 12s ease-in-out infinite;
          }

          .animate-gradient {
            background-size: 200% auto;
            animation: gradient 3s ease infinite;
          }

          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }

          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }

          .animate-pulse-ring {
            animation: pulse-ring 2s ease-in-out infinite;
          }

          @keyframes float-logo {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-float-logo {
            animation: float-logo 3s ease-in-out infinite;
          }

          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
          }
        `}</style>
      </section>

      {/* Our Services Section (Added below About Us as requested) */}
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

      {/* Why Choose Us Section (Refined header above differentiators) */}
      <section className="bg-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pinheirao-green mb-4">Qualidade Casas Pinheirão</h2>
          <h3 className="text-4xl md:text-5xl font-black text-pinheirao-black mb-6 uppercase tracking-tight italic">
            Por que escolher a nossa <span className="text-pinheirao-green">expertise?</span>
          </h3>
          <p className="text-lg md:text-xl text-pinheirao-gray max-w-3xl mx-auto font-medium">
            Experiencie a diferença com nosso compromisso inabalável com a qualidade, velocidade de entrega e atendimento personalizado.
          </p>
        </div>
      </section>

      {/* Como Funciona - Timeline */}
      <section className="py-16 sm:py-20 md:py-24 bg-pinheirao-concrete/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-[0.4em] text-pinheirao-green mb-3 sm:mb-4">Nosso Processo</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-pinheirao-black px-4">Como transformamos seu sonho em realidade.</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-4 relative">
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-pinheirao-green/20 -z-10 hidden lg:block"></div>
            {steps.map((step) => (
              <div key={step.id} className="relative group text-center px-1 sm:px-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-pinheirao-green shadow-lg border border-pinheirao-green/20 mx-auto mb-4 sm:mb-6 group-hover:bg-pinheirao-green group-hover:text-white transition-all duration-300 relative">
                  <span className="absolute -top-1.5 sm:-top-2 -right-1.5 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-pinheirao-black text-white text-[9px] sm:text-[10px] font-bold rounded-full flex items-center justify-center">{step.id}</span>
                  {React.cloneElement(step.icon as React.ReactElement, { size: 20, className: 'sm:w-6 sm:h-6' })}
                </div>
                <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-wide sm:tracking-widest text-pinheirao-black mb-1.5 sm:mb-2">{step.title}</h4>
                <p className="text-[9px] sm:text-[10px] text-pinheirao-gray font-medium leading-relaxed hidden sm:block">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-pinheirao-green mb-4">Nossos Modelos</h2>
              <h3 className="text-4xl font-black text-pinheirao-black">A maior variedade de casas pré-fabricadas.</h3>
            </div>
            <Link to="/projetos" className="bg-pinheirao-black text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-pinheirao-green transition-all rounded-sm flex items-center">
              Ver Catálogo Completo <ChevronRight size={14} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {constructionTypes.map((item) => (
              <div key={item.type} className="group relative overflow-hidden bg-pinheirao-black h-[450px] rounded-sm shadow-2xl">
                <img src={item.image} alt={item.type} className="w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-pinheirao-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tighter italic">{item.type}</h3>
                  <p className="text-xs text-pinheirao-concrete/70 mb-8 leading-relaxed font-medium">{item.desc}</p>
                  <Link to="/projetos" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-pinheirao-green border-b border-pinheirao-green pb-1 group-hover:border-white group-hover:text-white transition-colors">
                    Explorar Modelos
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CustomHomeSection />

      <TestimonialsCarousel />

      {/* CTA Final - Construa seu Futuro */}
      <section className="py-20 sm:py-24 md:py-28 bg-pinheirao-black text-white text-center relative overflow-hidden">
        {/* Imagem de fundo com overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/fundo_cta_casas_pinheirao.png"
            alt="Casas Pinheirão - Construa seu futuro"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pinheirao-black/85 via-pinheirao-black/75 to-pinheirao-black/90"></div>
        </div>

        {/* Efeitos decorativos */}
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-pinheirao-green/10 to-transparent top-[-200px] left-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-pinheirao-green/10 border border-pinheirao-green/30 px-5 py-2.5 rounded-full backdrop-blur-sm mb-8">
            <span className="text-2xl">🏡</span>
            <span className="text-pinheirao-green font-bold text-sm tracking-wider uppercase">Última Chance de Garantir Sua Casa!</span>
          </div>

          {/* Título principal */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Construa o seu futuro sobre uma{' '}
            <span className="relative inline-block">
              <span className="text-pinheirao-green">base sólida.</span>
              <span className="absolute bottom-0 left-0 w-full h-2 sm:h-3 bg-pinheirao-green/30 -z-10"></span>
            </span>
          </h2>

          {/* Descrição */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-10 sm:mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Agende uma visita técnica ou peça seu orçamento hoje mesmo. Equipe especializada em Pinhais pronta para lhe atender.
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8">
            <Link
              to="/envie-seu-projeto"
              className="group relative inline-flex items-center justify-center gap-3 px-10 sm:px-14 py-5 sm:py-6 bg-gradient-to-r from-pinheirao-green via-pinheirao-deep to-pinheirao-green text-white font-black text-sm sm:text-base uppercase tracking-wider rounded-full shadow-[0_10px_30px_rgba(11,181,151,0.6)] hover:shadow-[0_15px_40px_rgba(11,181,151,0.8)] hover:-translate-y-2 hover:scale-105 transition-all overflow-hidden animate-pulse-slow"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Calcular Meu Projeto Agora!</span>
                <Rocket size={24} className="animate-bounce-slow" />
              </span>
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              {/* Anel pulsante */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-pinheirao-green to-pinheirao-deep rounded-full opacity-30 blur-lg animate-pulse-ring"></div>
            </Link>

            <a
              href="tel:4136678015"
              className="inline-flex items-center justify-center gap-2 px-10 sm:px-14 py-5 sm:py-6 bg-white/5 backdrop-blur-sm text-white font-black text-sm sm:text-base uppercase tracking-wider border-2 border-pinheirao-green/50 rounded-full hover:bg-pinheirao-green/10 hover:border-pinheirao-green hover:-translate-y-2 transition-all"
            >
              <Phone size={20} />
              <span>(41) 3667-8015</span>
            </a>
          </div>

          {/* Urgência/escassez */}
          <div className="inline-flex items-center gap-2 text-pinheirao-green/80 text-sm font-semibold">
            <span className="w-2 h-2 bg-pinheirao-green rounded-full animate-pulse"></span>
            <span>Vagas limitadas para novos projetos em 2025</span>
          </div>
        </div>
      </section>
    </div>
  );
};
