
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
    { type: ConstructionType.WOOD, image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600', desc: 'Conforto térmico e beleza natural das madeiras de lei.' },
    { type: ConstructionType.MASONRY, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=600', desc: 'Solidez e durabilidade da construção tradicional.' },
    { type: ConstructionType.SOBRADO, image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=600', desc: 'Aproveitamento inteligente de espaço em dois pavimentos.' },
    { type: ConstructionType.TRIPLEX, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600', desc: 'O máximo em amplitude e luxo para sua família.' },
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
                src="https://images.unsplash.com/photo-1449156003053-96432b250f09?auto=format&fit=crop&q=80&w=800" 
                alt="História Casas Pinheirão" 
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
