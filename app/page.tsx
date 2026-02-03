"use client"

import Link from "next/link"
import { Hero } from "@/components/hero"
import {
  CheckCircle,
  Shield,
  Award,
  Users,
  Clock,
  Package,
  HardHat,
  PencilRuler,
  MessageSquare,
  Key,
  MapPin,
  Settings,
  ChevronRight,
  Star,
  Rocket,
  Phone,
  LayoutTemplate,
  Briefcase,
  Boxes,
  Eye,
} from "lucide-react"
import React from "react"

const ConstructionType = {
  WOOD: "Casas de Madeira",
  MASONRY: "Casas de Alvenaria",
  SOBRADO: "Sobrados",
  TRIPLEX: "Triplex",
}

const PROJECTS = [
  {
    id: "promo-45",
    title: "Casa de Alvenaria 45m² - Promoção Especial",
    type: ConstructionType.MASONRY,
    area: "45m²",
    images: ["/promocao-45m-32k.jpeg"],
    description:
      "Promoção Especial! Casa de 45m² prática e confortável por apenas R$ 32.000,00. Válido até 28/02/26 para construção até 15km da nossa unidade.",
    featured: true,
  },
  {
    id: "1",
    title: "Triplex de Alvenaria 200m²",
    type: ConstructionType.TRIPLEX,
    area: "200m²",
    images: [
      "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/ivt3txaj_triplex-de-200m.png",
    ],
    description:
      "Triplex impressionante com 200m², projetado para oferecer um estilo de vida sofisticado e espaçoso.",
    featured: true,
  },
  {
    id: "2",
    title: "Triplex de Alvenaria 148.05m²",
    type: ConstructionType.TRIPLEX,
    area: "148.05m²",
    images: [
      "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/toqi9yld_triplex-de-148.05m%C2%B2.png",
    ],
    description:
      "Triplex deslumbrante com 148.05m², projetado para oferecer um estilo de vida luxuoso e confortável.",
    featured: true,
  },
  {
    id: "3",
    title: "Sobrado de Alvenaria 119.91m²",
    type: ConstructionType.SOBRADO,
    area: "119.91m²",
    images: [
      "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/1vofj6k0_sobrado-de-119.91m%C2%B2.png",
    ],
    description:
      "Sobrado excepcional com 119.91m², projetado para oferecer um espaço amplo e confortável.",
    featured: true,
  },
  {
    id: "8",
    title: "Casa de Alvenaria 90m²",
    type: ConstructionType.MASONRY,
    area: "90m²",
    images: [
      "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/754fqtty_Casa%20de%20Alvenaria%2090m%C2%B2.png",
    ],
    description:
      "Casa de alvenaria 6m x 10m com 90m², incluindo varanda aconchegante e garagem.",
    featured: true,
  },
  {
    id: "15",
    title: "Casa de Madeira de Pinus 126.50m²",
    type: ConstructionType.WOOD,
    area: "126.50m²",
    images: [
      "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/abulrdni_Casa%20de%20madeira%20de%20pinus%20medindo%20126%2C50m%C2%B2.png",
    ],
    description:
      "Casa de madeira de pinus medindo 126.50m². Ampla, elegante e com o charme natural da madeira nobre.",
    featured: true,
  },
]

const TESTIMONIALS = [
  {
    id: "1",
    name: "Maria Clara",
    city: "Curitiba/PR",
    text: "Construir meu triplex de 148m² com a Casas Pinheirão foi uma das melhores decisões. Eles foram honestos, cumpriram o prazo e entregaram exatamente como prometido!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    rating: 5.0,
  },
  {
    id: "2",
    name: "João Pedro",
    city: "Colombo/PR",
    text: "Fiz meu sobrado personalizado e não tenho do que reclamar. Ficou lindo, funcional e dentro do meu orçamento!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    rating: 4.5,
  },
  {
    id: "3",
    name: "Marcos Vinícius",
    city: "Pinhais/PR",
    text: "A velocidade da entrega me surpreendeu. Em menos de 2 meses já estava morando na minha casa de madeira. O atendimento do Alisson foi nota 10!",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
    rating: 5.0,
  },
]

export default function Home() {
  const constructionTypes = [
    {
      type: ConstructionType.WOOD,
      image: "/casas-madeira-nossos_modelos.png",
      desc: "Conforto térmico e beleza natural das madeiras de lei.",
    },
    {
      type: ConstructionType.MASONRY,
      image: "/casas-alvenaria-nossos_modelos.png",
      desc: "Solidez e durabilidade da construção tradicional.",
    },
    {
      type: ConstructionType.SOBRADO,
      image: "/sobrado-nossos_modelos.png",
      desc: "Aproveitamento inteligente de espaço em dois pavimentos.",
    },
    {
      type: ConstructionType.TRIPLEX,
      image:
        "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/21ubrgoy_triplex.png",
      desc: "O máximo em amplitude e luxo para sua família.",
    },
  ]

  const steps = [
    {
      id: 1,
      title: "Contato",
      icon: <MessageSquare />,
      desc: "Primeiro atendimento e entendimento do sonho.",
    },
    {
      id: 2,
      title: "Projeto",
      icon: <PencilRuler />,
      desc: "Escolha do modelo ou criação personalizada.",
    },
    {
      id: 3,
      title: "Visita",
      icon: <MapPin />,
      desc: "Avaliação técnica do terreno e viabilidade.",
    },
    {
      id: 4,
      title: "Ajustes",
      icon: <Settings />,
      desc: "Refinamento de detalhes e materiais.",
    },
    {
      id: 5,
      title: "Início",
      icon: <HardHat />,
      desc: "Preparação do terreno e início da montagem.",
    },
    {
      id: 6,
      title: "Entrega",
      icon: <Key />,
      desc: "Finalização total e entrega das chaves.",
    },
    {
      id: 7,
      title: "Pós-Venda",
      icon: <Shield />,
      desc: "Garantia estrutural e suporte contínuo.",
    },
  ]

  const kits = [
    {
      title: "Kit Madeira",
      items: [
        "Paredes em madeira nobre certificada",
        "Estrutura de telhado e oitões",
        "Forro e assoalho de alta qualidade",
        "Esquadrias padrão em madeira",
      ],
      icon: <Package size={40} />,
    },
    {
      title: "Chave na Mão",
      items: [
        "Fundação/Radier incluídos",
        "Montagem completa e acabamento",
        "Instalações elétricas e hidráulicas",
        "Revestimentos cerâmicos e pintura",
      ],
      icon: <HardHat size={40} />,
      highlight: true,
    },
  ]

  const ourServices = [
    {
      icon: <LayoutTemplate size={32} className="text-pinheirao-green" />,
      title: "Design Personalizado",
      desc: "Projetos sob medida criados por nossa equipe de arquitetura para atender suas necessidades exatas.",
    },
    {
      icon: <Briefcase size={32} className="text-pinheirao-green" />,
      title: "Gestão de Projetos",
      desc: "Cuidamos de toda a burocracia e cronograma, garantindo que sua obra flua sem preocupações.",
    },
    {
      icon: <Boxes size={32} className="text-pinheirao-green" />,
      title: "Seleção de Materiais",
      desc: "Utilizamos apenas madeiras de lei certificadas e materiais de primeira linha com garantia.",
    },
    {
      icon: <Eye size={32} className="text-pinheirao-green" />,
      title: "Supervisão Técnica",
      desc: "Engenheiros qualificados acompanham cada etapa da construção para assegurar a perfeição estrutural.",
    },
  ]

  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Diferenciais Rápidos */}
      <section className="bg-pinheirao-concrete/10 py-8 sm:py-12 border-b border-pinheirao-concrete/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: <Clock size={20} />, text: "20 Anos de Mercado" },
              { icon: <Users size={20} />, text: "300+ Famílias Felizes" },
              { icon: <Shield size={20} />, text: "Garantia Estrutural" },
              { icon: <Award size={20} />, text: "Atendimento Consultivo" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                <div className="text-pinheirao-green mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  {React.cloneElement(item.icon as React.ReactElement, {
                    className: "w-5 h-5 sm:w-6 sm:h-6",
                  })}
                </div>
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wide sm:tracking-widest text-pinheirao-black">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-start gap-4 mb-3 sm:mb-4">
                <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-[0.3em] text-pinheirao-green flex-1">
                  Tradição em Pinhais
                </h2>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 leading-tight text-pinheirao-black">
                Uma história construída sobre{" "}
                <span className="text-pinheirao-green">bases sólidas.</span>
              </h3>
              <p className="text-sm sm:text-base text-pinheirao-gray mb-4 sm:mb-6 leading-relaxed font-medium">
                Referência em casas pré-fabricadas em toda Curitiba e Região
                Metropolitana, a Casas Pinheirão une a velocidade da construção
                moderna com o cuidado artesanal das madeiras nobres.
              </p>
              <p className="text-sm sm:text-base text-pinheirao-gray mb-8 sm:mb-10 leading-relaxed font-medium">
                Nosso compromisso é entregar não apenas uma estrutura, mas o
                cenário onde sua família construirá as melhores memórias, com o
                melhor custo-benefício do Paraná.
              </p>
              <Link
                href="/empresa"
                className="inline-flex items-center text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest text-pinheirao-black group"
              >
                Conheça nossa trajetória
                <ChevronRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4"
                />
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-pinheirao-green/5 rounded-2xl -z-10 rotate-3 transition-transform group-hover:rotate-6"></div>
              <img
                src="/tradicao-em-pinhais.webp"
                alt="Tradição em Pinhais - Casas Pinheirão"
                className="rounded-xl shadow-2xl w-full h-[450px] object-cover"
              />
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                  <div className="relative w-full h-full bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-xl border border-white/50 flex items-center justify-center">
                    <img
                      src="/crea-pr-pinhais-1.png"
                      alt="CREA-PR Empresa Registrada"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute -top-1 -left-1 bg-pinheirao-green shadow-lg rounded-full p-1.5 border border-white/20">
                    <Shield size={14} className="text-white fill-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Modelos */}
      <section className="py-16 sm:py-20 md:py-24 bg-pinheirao-concrete/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-[0.3em] text-pinheirao-green mb-4">
              Nossos Modelos
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-pinheirao-black">
              Encontre o projeto ideal para você
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {constructionTypes.map((item, idx) => (
              <Link
                key={idx}
                href="/projetos"
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.type}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h4 className="text-white font-black text-sm sm:text-base mb-1">
                    {item.type}
                  </h4>
                  <p className="text-white/70 text-[10px] sm:text-xs font-medium">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-[0.3em] text-pinheirao-green mb-4">
              Projetos em Destaque
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-pinheirao-black">
              Conheça nossos modelos mais populares
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PROJECTS.filter((p) => p.featured)
              .slice(0, 3)
              .map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-pinheirao-concrete/10"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-pinheirao-green text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h4 className="font-black text-pinheirao-black mb-2">
                      {project.title}
                    </h4>
                    <p className="text-pinheirao-gray text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-pinheirao-green font-bold text-sm">
                        {project.area}
                      </span>
                      <Link
                        href="/projetos"
                        className="text-[10px] font-black uppercase tracking-widest text-pinheirao-black hover:text-pinheirao-green transition-colors flex items-center"
                      >
                        Ver mais
                        <ChevronRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/projetos"
              className="inline-flex items-center bg-pinheirao-green text-white px-8 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-pinheirao-deep transition-all shadow-lg"
            >
              Ver todos os projetos
              <ChevronRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 sm:py-20 md:py-24 bg-pinheirao-concrete/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-[0.3em] text-pinheirao-green mb-4">
              Nossos Serviços
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-pinheirao-black">
              Do projeto à entrega das chaves
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ourServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-pinheirao-concrete/10 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="font-black text-pinheirao-black mb-2">
                  {service.title}
                </h4>
                <p className="text-pinheirao-gray text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-[0.3em] text-pinheirao-green mb-4">
              Como Funciona
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-pinheirao-black">
              Sua jornada até a casa dos sonhos
            </h3>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-pinheirao-green/20 -translate-y-1/2"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 sm:gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="relative text-center group">
                  <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-pinheirao-green rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    {React.cloneElement(step.icon as React.ReactElement, {
                      size: 20,
                      className: "sm:w-6 sm:h-6",
                    })}
                  </div>
                  <h4 className="font-black text-pinheirao-black text-xs sm:text-sm mb-1">
                    {step.title}
                  </h4>
                  <p className="text-pinheirao-gray text-[10px] sm:text-xs hidden sm:block">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 sm:py-20 md:py-24 bg-pinheirao-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-[0.3em] text-pinheirao-green mb-4">
              Depoimentos
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black">
              O que nossos clientes dizem
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/5 backdrop-blur p-6 sm:p-8 rounded-xl border border-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-black">{testimonial.name}</h4>
                    <p className="text-pinheirao-concrete text-sm">
                      {testimonial.city}
                    </p>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(testimonial.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-white/30"
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 md:py-24 bg-pinheirao-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket size={48} className="text-white/80 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6">
            Pronto para realizar o sonho da casa própria?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato com nossa equipe e descubra como podemos ajudar
            você a construir o lar perfeito para sua família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=5541996301028"
              className="bg-white text-pinheirao-green px-8 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-pinheirao-black hover:text-white transition-all shadow-lg flex items-center justify-center"
            >
              <MessageSquare size={18} className="mr-2" />
              Falar no WhatsApp
            </a>
            <a
              href="tel:4136678015"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white hover:text-pinheirao-green transition-all flex items-center justify-center"
            >
              <Phone size={18} className="mr-2" />
              (41) 3667-8015
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
