
import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { PROJECTS, TESTIMONIALS } from '../data';
import { ConstructionType } from '../types';
import { 
  CheckCircle, Shield, Award, Users, Star, 
  Clock, Package, HardHat, PencilRuler, 
  ClipboardList, Truck, ChevronRight,
  MessageSquare, Home as HomeIcon, Key, 
  MapPin, Settings, CreditCard, LayoutTemplate, Briefcase, Boxes, Eye
} from 'lucide-react';

export const Home: React.FC = () => {
  const constructionTypes = [
    { type: ConstructionType.WOOD, image: 'https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/f3o4r464_casa-madeia.jpg', desc: 'Conforto térmico e beleza natural das madeiras de lei.' },
    { type: ConstructionType.MASONRY, image: 'https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/he62fkak_casa-alvenaria.png', desc: 'Solidez e durabilidade da construção tradicional.' },
    { type: ConstructionType.SOBRADO, image: 'https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/mmuv5tox_sobrados.png', desc: 'Aproveitamento inteligente de espaço em dois pavimentos.' },
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
      <Hero />

      {/* Nova Seção de Vídeo com Mockup de Celular */}
      <section className="video-section py-20 bg-gradient-to-br from-pinheirao-black via-[#1E293B] to-pinheirao-black relative overflow-hidden">
        {/* Efeito de fundo animado */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-pinheirao-green/10 to-transparent top-[-250px] right-[-250px] animate-float"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-pinheirao-green/5 to-transparent bottom-[-200px] left-[-200px] animate-float-delayed"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            
            {/* Coluna Esquerda (40%) - Mockup de Celular */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="phone-mockup relative w-[320px] h-[650px] bg-[#1a1a1a] rounded-[40px] p-3 shadow-[0_25px_50px_rgba(0,0,0,0.3),0_0_0_12px_#2a2a2a,0_0_0_14px_#1a1a1a] transform -rotate-5 hover:rotate-0 hover:scale-105 transition-all duration-500">
                {/* Notch do iPhone */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#1a1a1a] rounded-b-[20px] z-10"></div>
                
                {/* Tela do celular com vídeo */}
                <div className="phone-screen relative w-full h-full bg-black rounded-[30px] overflow-hidden">
                  <iframe 
                    src="https://www.youtube.com/embed/3ZXzDpzvKRw?autoplay=1&mute=1&loop=1&playlist=3ZXzDpzvKRw&controls=1&modestbranding=1&rel=0"
                    title="Tour Virtual - Casas Pinheirão"
                    className="absolute inset-0 w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Brilho na borda */}
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-pinheirao-green/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>

            {/* Coluna Direita (60%) - Conteúdo */}
            <div className="lg:col-span-3 space-y-6">
              {/* Badge Superior */}
              <div className="inline-flex items-center gap-2 bg-pinheirao-green/10 border border-pinheirao-green px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-2xl">🏡</span>
                <span className="text-pinheirao-green font-semibold text-sm tracking-wider uppercase">Conheça Nossas Casas</span>
              </div>

              {/* Título Principal */}
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Não é Sonho, é{' '}
                <span className="highlight-text relative text-pinheirao-green">
                  Realidade em Pinhais!
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pinheirao-green to-pinheirao-deep animate-slide-in"></span>
                </span>
              </h2>

              {/* Descrição */}
              <p className="text-lg text-gray-300 leading-relaxed">
                Nossas <strong className="text-white font-semibold">casas prontas para morar</strong> oferecem conforto, 
                segurança e a localização perfeita para sua família. 
                <strong className="text-white font-semibold"> Financiamento próprio facilitado</strong> e você realiza 
                o sonho da casa própria!
              </p>

              {/* Destaque */}
              <p className="text-pinheirao-green font-semibold text-base pl-5 border-l-4 border-pinheirao-green">
                Visite nosso showroom em Pinhais - Curitiba/PR
              </p>

              {/* Lista de Benefícios */}
              <ul className="space-y-4 py-4">
                {[
                  'Casas de 2 e 3 quartos com acabamento de qualidade',
                  'Financiamento direto com a construtora sem burocracia',
                  'Localização privilegiada com comércio e transporte próximo'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-200">
                    <span className="flex-shrink-0 w-6 h-6 bg-pinheirao-green text-white rounded-full flex items-center justify-center font-bold text-sm">✓</span>
                    <span className="text-base leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/envie-seu-projeto"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pinheirao-green to-pinheirao-deep text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-[0_4px_12px_rgba(11,181,151,0.4)] hover:shadow-[0_8px_20px_rgba(11,181,151,0.5)] hover:-translate-y-1 transition-all"
                >
                  <span>Agende sua Visita!</span>
                  <span className="text-xl">🏠</span>
                </Link>
                <Link
                  to="/empresa"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-pinheirao-green font-bold text-sm uppercase tracking-wider border-2 border-pinheirao-green rounded-xl hover:bg-pinheirao-green/10 hover:-translate-y-1 transition-all"
                >
                  Falar com Consultor
                </Link>
              </div>
            </div>

          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-30px, 30px); }
          }

          @keyframes float-delayed {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(30px, -30px); }
          }

          @keyframes slide-in {
            from { width: 0; }
            to { width: 100%; }
          }

          .animate-float {
            animation: float 8s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float-delayed 10s ease-in-out infinite;
          }

          .animate-slide-in {
            animation: slide-in 1s ease-out;
          }
        `}</style>
      </section>

      {/* Seção Nossos Modelos */}
      {/* Diferenciais Rápidos */}
      <section className="bg-pinheirao-concrete/10 py-12 border-b border-pinheirao-concrete/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Clock size={24} />, text: '20 Anos de Mercado' },
              { icon: <Users size={24} />, text: '300+ Famílias Felizes' },
              { icon: <Shield size={24} />, text: 'Garantia Estrutural' },
              { icon: <Award size={24} />, text: 'Atendimento Consultivo' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="text-pinheirao-green mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-pinheirao-black">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História (About Us Section) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-pinheirao-green mb-4">Tradição em Pinhais</h2>
              <h3 className="text-4xl font-black mb-8 leading-tight">Uma história construída sobre <span className="text-pinheirao-green">bases sólidas.</span></h3>
              <p className="text-pinheirao-gray mb-6 leading-relaxed font-medium">
                Referência em casas pré-fabricadas em toda Curitiba e Região Metropolitana, a Casas Pinheirão une a velocidade da construção moderna com o cuidado artesanal das madeiras nobres.
              </p>
              <p className="text-pinheirao-gray mb-10 leading-relaxed font-medium">
                Nosso compromisso é entregar não apenas uma estrutura, mas o cenário onde sua família construirá as melhores memórias, com o melhor custo-benefício do Paraná.
              </p>
              <Link to="/empresa" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-pinheirao-black group">
                Conheça nossa trajetória
                <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-pinheirao-green/5 rounded-2xl -z-10 rotate-3"></div>
              <img 
                src="https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/z2afcddr_historia_casas_pinheirao_v3.png" 
                alt="História Casas Pinheirão - Tradição e Qualidade" 
                className="rounded-xl shadow-2xl w-full h-[450px] object-cover" 
              />
            </div>
          </div>
        </div>
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
      <section className="py-24 bg-pinheirao-concrete/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pinheirao-green mb-4">Nosso Processo</h2>
            <h3 className="text-4xl font-black text-pinheirao-black">Como transformamos seu sonho em realidade.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 relative">
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-pinheirao-green/20 -z-10 hidden lg:block"></div>
            {steps.map((step) => (
              <div key={step.id} className="relative group text-center px-2">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-pinheirao-green shadow-lg border border-pinheirao-green/20 mx-auto mb-6 group-hover:bg-pinheirao-green group-hover:text-white transition-all duration-300 relative">
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-pinheirao-black text-white text-[10px] font-bold rounded-full flex items-center justify-center">{step.id}</span>
                  {React.cloneElement(step.icon as React.ReactElement, { size: 24 })}
                </div>
                <h4 className="text-xs font-black uppercase tracking-widest text-pinheirao-black mb-2">{step.title}</h4>
                <p className="text-[10px] text-pinheirao-gray font-medium leading-relaxed">{step.desc}</p>
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

      {/* Depoimentos */}
      <section className="py-24 bg-pinheirao-concrete/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-pinheirao-green mb-4">Prova Social</h2>
            <h3 className="text-4xl font-black text-pinheirao-black">A voz de quem realizou o sonho com a gente.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-10 rounded-sm shadow-sm border-t-4 border-pinheirao-green hover:shadow-xl transition-shadow">
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-pinheirao-green text-pinheirao-green mr-1" />)}
                </div>
                <p className="text-pinheirao-gray mb-8 leading-relaxed italic text-sm font-medium">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-pinheirao-concrete">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase text-pinheirao-black tracking-widest">{t.name}</h4>
                    <p className="text-[10px] text-pinheirao-green font-black uppercase tracking-widest">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-pinheirao-black text-white text-center relative overflow-hidden">
        <div className="bg-concrete-pattern absolute inset-0"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight italic">Construa o seu futuro sobre uma <span className="text-pinheirao-green underline">base sólida.</span></h2>
          <p className="text-lg text-pinheirao-concrete/80 mb-12 max-w-2xl mx-auto font-medium">
            Agende uma visita técnica or peça seu orçamento hoje mesmo. Equipe especializada em Pinhais pronta para lhe atender.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/envie-seu-projeto" className="bg-pinheirao-green hover:bg-pinheirao-deep text-white px-12 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl">
              Calcular Meu Projeto
            </Link>
            <a href="tel:4136678015" className="border-2 border-white/20 hover:border-pinheirao-green text-white px-12 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center">
              (41) 3667-8015
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
