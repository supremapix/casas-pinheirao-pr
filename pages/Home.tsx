import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { CustomHomeSection } from '../components/CustomHomeSection';
import { InstagramSection } from '../components/InstagramSection';
import { ConstructionType } from '../types';
import {
  Shield, Award, Users, Clock,
  HardHat, PencilRuler, ChevronRight,
  MessageSquare, Home as HomeIcon, Key,
  MapPin, Settings, LayoutTemplate, Briefcase, Boxes, Eye,
  Play, CheckCircle2, Phone, ArrowRight
} from 'lucide-react';

export const Home: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);

  const videoTours = [
    {
      id: '3ZXzDpzvKRw',
      title: 'Tour Casa de Madeira 45m²',
      desc: 'Projeto compacto, funcional e térmico, construído com madeira nobre de lei em Pinhais/PR.'
    },
    {
      id: 'NJTZ2EKwo9s',
      title: 'Sobrado em Madeira e Alvenaria',
      desc: 'Aproveitamento inteligente do terreno em dois pavimentos com acabamento de alto padrão.'
    },
    {
      id: 'YjVEuGj--e8',
      title: 'Casa Térrea de Alvenaria Personalizada',
      desc: 'Solidez e durabilidade da alvenaria tradicional com distribuição de planta moderna.'
    },
    {
      id: 'pVEqexaTWW0',
      title: 'Entrega de Chaves & Depoimento Real',
      desc: 'Acompanhe a finalização completa da obra e a satisfação do cliente na entrega das chaves.'
    }
  ];

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
    { type: ConstructionType.WOOD, image: '/casas-madeira-nossos_modelos.png', desc: 'Conforto térmico natural e beleza das madeiras de lei certificadas.' },
    { type: ConstructionType.MASONRY, image: '/casas-alvenaria-nossos_modelos.png', desc: 'Solidez e durabilidade da alvenaria tradicional sob medida.' },
    { type: ConstructionType.SOBRADO, image: '/sobrado-nossos_modelos.png', desc: 'Dois pavimentos com aproveitamento inteligente do terreno.' },
    { type: ConstructionType.TRIPLEX, image: 'https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/21ubrgoy_triplex.png', desc: 'Máxima amplitude, iluminação e espaço para sua família.' },
  ];

  const steps = [
    { id: 1, title: 'Atendimento', icon: <MessageSquare size={20} />, desc: 'Consultoria e alinhamento do sonho.' },
    { id: 2, title: 'Projeto', icon: <PencilRuler size={20} />, desc: 'Escolha de modelo ou planta 100% autoral.' },
    { id: 3, title: 'Vistoria', icon: <MapPin size={20} />, desc: 'Avaliação técnica no seu terreno.' },
    { id: 4, title: 'Adequação', icon: <Settings size={20} />, desc: 'Definição de materiais e cronograma.' },
    { id: 5, title: 'Construção', icon: <HardHat size={20} />, desc: 'Montagem estrutural e acabamentos.' },
    { id: 6, title: 'Chaves na Mão', icon: <Key size={20} />, desc: 'Finalização e entrega oficial da casa.' },
    { id: 7, title: 'Garantia', icon: <Shield size={20} />, desc: 'Garantia estrutural e suporte CREA-PR.' },
  ];

  const ourServices = [
    {
      icon: <LayoutTemplate size={28} className="text-pinheirao-green" />,
      title: 'Design Personalizado',
      desc: 'Projetos sob medida desenvolvidos para atender a metragem e estilo da sua família.'
    },
    {
      icon: <Briefcase size={28} className="text-pinheirao-green" />,
      title: 'Gestão de Obra',
      desc: 'Cronograma rigoroso sem dores de cabeça ou custos imprevistos.'
    },
    {
      icon: <Boxes size={28} className="text-pinheirao-green" />,
      title: 'Madeira Nobre',
      desc: 'Apenas madeiras de lei tratadas e certificadas com alta resistência biológica.'
    },
    {
      icon: <Eye size={28} className="text-pinheirao-green" />,
      title: 'Supervisão CREA-PR',
      desc: 'Responsabilidade técnica de engenheiros qualificados em todas as fases.'
    }
  ];

  return (
    <div className="overflow-hidden bg-white">
      <EnhancedSEO
        title="Realize o Sonho da Casa Própria"
        description="Casas Pinheirão: Especialista em casas pré-fabricadas de madeira e alvenaria em Curitiba e Região. Mais de 20 anos de tradição e qualidade. Financiamento facilitado."
        canonical="/"
        keywords="casas pré-fabricadas, casas de madeira, casas de alvenaria, sobrados, casas Pinhais, casas Curitiba, casa própria Pinhais, financiamento casa, casas pré-fabricadas Curitiba, casas de madeira Pinhais"
        structuredData={structuredData}
      />
      
      {/* 1. Hero Principal */}
      <Hero />

      {/* 2. Destaques / Métricas de Confiança */}
      <section className="bg-gray-50 py-8 sm:py-10 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: <Clock size={20} />, title: '20 Anos de Mercado', sub: 'Tradição em Pinhais' },
              { icon: <Users size={20} />, title: '300+ Lares Entregues', sub: 'Famílias realizadas' },
              { icon: <Shield size={20} />, title: 'Garantia Estrutural', sub: 'Registro no CREA-PR' },
              { icon: <Award size={20} />, title: 'Atendimento Consultivo', sub: 'Direto no seu terreno' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="text-pinheirao-green mb-2">
                  {item.icon}
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-pinheirao-black">
                  {item.title}
                </span>
                <span className="text-[11px] text-pinheirao-gray font-medium mt-0.5">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tradição em Pinhais / História */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-pinheirao-green">
                Tradição em Pinhais
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-pinheirao-black uppercase tracking-tight leading-[1.1]">
                Uma história construída sobre <span className="text-pinheirao-green">bases sólidas.</span>
              </h2>
              <p className="text-base text-pinheirao-gray font-medium leading-relaxed">
                Referência em casas pré-fabricadas em toda Curitiba e Região Metropolitana, a Casas Pinheirão une a agilidade da construção modular ao cuidado artesanal das madeiras nobres e solidez da alvenaria.
              </p>
              <p className="text-base text-pinheirao-gray font-medium leading-relaxed">
                Nosso compromisso é entregar a estrutura perfeita onde sua família construirá as melhores memórias, com o melhor custo-benefício do Paraná.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-3 pb-4 border-y border-gray-100">
                <div>
                  <p className="text-2xl font-black text-pinheirao-black">20 Anos</p>
                  <p className="text-xs text-pinheirao-gray font-medium">De sólida experiência</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-pinheirao-black">300+ Lares</p>
                  <p className="text-xs text-pinheirao-gray font-medium">Famílias realizadas</p>
                </div>
              </div>

              <div className="flex flex-col items-start pt-2">
                <Link 
                  to="/empresa" 
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-pinheirao-black text-white font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-pinheirao-green transition-all shadow-md"
                >
                  <span>Nossa História</span>
                  <ChevronRight size={16} />
                </Link>
                <span className="text-[10px] text-pinheirao-gray mt-1 font-medium tracking-wide">Conheça nossa trajetória</span>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-sm overflow-hidden shadow-xl bg-pinheirao-black">
                <img
                  src="/tradicao-em-pinhais.webp"
                  alt="Tradição em Pinhais - Casas Pinheirão"
                  className="w-full h-[460px] object-cover opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* CREA Badge Overlay */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-sm shadow-xl border border-gray-100 flex items-center gap-4">
                  <img
                    src="/crea-pr-pinhais-1.png"
                    alt="CREA-PR Empresa Registrada"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <p className="text-xs font-black uppercase text-pinheirao-black">CREA-PR</p>
                    <p className="text-[11px] text-pinheirao-gray font-medium">Empresa Registrada</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Showcase de Vídeos e Tours Virtuais (Substitui o mockup de celular com design arquitetônico de alto nível) */}
      <section className="py-20 md:py-28 bg-[#15171C] text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-pinheirao-green mb-2">
              Tours Virtuais & Obras Entregues
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.1]">
              Veja a qualidade dos nossos projetos em vídeo.
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mt-3 font-normal">
              Acompanhe detalhes dos modelos, distribuição dos ambientes internos e depoimentos de quem já mora em uma casa construída pela Casas Pinheirão.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Video Viewport (16:9 responsive) */}
            <div className="lg:col-span-8 bg-black rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  key={videoTours[selectedVideo].id}
                  src={`https://www.youtube.com/embed/${videoTours[selectedVideo].id}?autoplay=0&rel=0&modestbranding=1`}
                  title={videoTours[selectedVideo].title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 sm:p-6 bg-[#1A1D24]">
                <h3 className="text-lg font-bold text-white">
                  {videoTours[selectedVideo].title}
                </h3>
                <p className="text-sm text-gray-300 mt-1 font-normal">
                  {videoTours[selectedVideo].desc}
                </p>
              </div>
            </div>

            {/* Video Selector Tabs */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Selecione o Tour:
              </p>
              {videoTours.map((tour, idx) => (
                <button
                  key={tour.id}
                  onClick={() => setSelectedVideo(idx)}
                  className={`w-full p-4 rounded-sm border text-left transition-all flex items-start gap-3.5 ${
                    selectedVideo === idx
                      ? 'bg-[#1E2229] border-pinheirao-green text-white shadow-md'
                      : 'bg-[#181B20] border-white/5 text-gray-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className={`p-2 rounded shrink-0 ${selectedVideo === idx ? 'bg-pinheirao-green text-white' : 'bg-white/5 text-gray-400'}`}>
                    <Play size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-white">
                      {tour.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 line-clamp-2 mt-1">
                      {tour.desc}
                    </p>
                  </div>
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-2">
                <Link
                  to="/envie-seu-projeto"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-pinheirao-deep transition-colors shadow-md"
                >
                  <span>Orçamento deste Modelo</span>
                  <ArrowRight size={16} />
                </Link>
                <span className="text-[10px] text-gray-400 text-center font-medium">Consulte opções para o seu terreno</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Nossos Serviços de Engenharia */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-pinheirao-green mb-2">
              Nossos Serviços
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-pinheirao-black uppercase tracking-tight">
              Excelência em cada etapa da construção.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourServices.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm flex flex-col hover:border-pinheirao-green/40 transition-colors">
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

      {/* 6. Como Funciona - Processo Linear */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-pinheirao-green mb-2">
              Processo Construtivo
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-pinheirao-black uppercase tracking-tight">
              Como transformamos seu sonho em realidade.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {steps.map((step) => (
              <div key={step.id} className="p-5 bg-gray-50 border border-gray-100 rounded-sm text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-pinheirao-green text-white font-bold text-xs flex items-center justify-center mb-4">
                  {step.id}
                </div>
                <div className="text-pinheirao-green mb-2">
                  {step.icon}
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-pinheirao-black mb-1">
                  {step.title}
                </h4>
                <p className="text-[11px] text-pinheirao-gray leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Catálogo de Modelos */}
      <section className="py-20 md:py-28 bg-gray-50 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-pinheirao-green mb-2">
                Tipologias Construtivas
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-pinheirao-black uppercase tracking-tight">
                Nossos Principais Modelos
              </h2>
            </div>
            <div className="flex flex-col">
              <Link 
                to="/projetos" 
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-pinheirao-black text-white font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-pinheirao-green transition-all shadow-md"
              >
                <span>Catálogo Completo</span>
                <ChevronRight size={16} />
              </Link>
              <span className="text-[10px] text-pinheirao-gray mt-1 font-medium">Todos os modelos e plantas</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {constructionTypes.map((item) => (
              <div key={item.type} className="group relative overflow-hidden bg-pinheirao-black h-[420px] rounded-sm shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.type} 
                  className="w-full h-full object-cover opacity-75 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-bold mb-2 text-white uppercase tracking-tight">{item.type}</h3>
                  <p className="text-xs text-gray-300 mb-6 leading-relaxed font-normal">{item.desc}</p>
                  <Link 
                    to="/projetos" 
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-pinheirao-green hover:text-white transition-colors"
                  >
                    <span>Ver Projetos</span>
                    <ChevronRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Destaque Modelo 45m² */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#15171C] text-white rounded-sm overflow-hidden p-6 sm:p-10 lg:p-12 shadow-xl">
            <div className="lg:col-span-6 rounded-sm overflow-hidden h-[300px] sm:h-[380px]">
              <img
                src="https://img.supremasite.com.br/pinheirao/casa-45mts.png"
                alt="Casa de Madeira 45m² - Casas Pinheirão"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-pinheirao-green">
                Modelo em Destaque
              </p>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                Casa de Madeira 45m²
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                Prática, funcional e com excelente isolamento térmico. Construída diretamente no seu lote com fundação, estrutura nobre e acabamentos completos.
              </p>
              <div className="space-y-2.5 pt-2 pb-2">
                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                  <CheckCircle2 size={16} className="text-pinheirao-green shrink-0" />
                  <span>Construída no seu terreno em Pinhais, Curitiba e Litoral</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                  <CheckCircle2 size={16} className="text-pinheirao-green shrink-0" />
                  <span>Madeira nobre tratada com certificação de procedência</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                  <CheckCircle2 size={16} className="text-pinheirao-green shrink-0" />
                  <span>Financiamento facilitado com parcelamento na obra</span>
                </div>
              </div>
              <div className="pt-2 flex flex-col items-start">
                <Link
                  to="/envie-seu-projeto"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-pinheirao-deep transition-all shadow-md"
                >
                  <span>Orçamento 45m²</span>
                  <ArrowRight size={16} />
                </Link>
                <span className="text-[10px] text-gray-400 mt-1 font-medium">Atendimento rápido sem compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Seção de Personalização Arquitetônica */}
      <CustomHomeSection />

      {/* 10. Depoimentos Reais */}
      <TestimonialsCarousel />

      {/* 11. Seção Oficial do Instagram */}
      <InstagramSection />

      {/* 12. CTA Final de Conversão */}
      <section className="py-20 md:py-28 bg-[#111317] text-white relative border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-pinheirao-green mb-3">
            Atendimento em Todo o Paraná
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight text-white leading-tight">
            Construa o seu futuro com quem tem tradição.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
            Agende uma visita ao nosso showroom em Pinhais ou envie sua ideia de planta para um orçamento detalhado.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <div className="flex flex-col items-center w-full sm:w-auto">
              <Link
                to="/envie-seu-projeto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider rounded-sm shadow-md hover:bg-pinheirao-deep transition-all"
              >
                <span>Orçamento</span>
                <ArrowRight size={16} />
              </Link>
              <span className="text-[10px] text-gray-400 mt-1 font-medium">Simulação grátis</span>
            </div>

            <div className="flex flex-col items-center w-full sm:w-auto">
              <a
                href="tel:4136678015"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/30 rounded-sm hover:bg-white/20 transition-all"
              >
                <Phone size={16} />
                <span>(41) 3667-8015</span>
              </a>
              <span className="text-[10px] text-gray-400 mt-1 font-medium">Atendimento telefônico</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
