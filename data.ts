
import { ConstructionType, Project, Testimonial, Consultant } from './types';

export const PROJECTS: Project[] = [
  // TRIPLEX
  {
    id: '1',
    title: 'Triplex de Alvenaria 200m²',
    type: ConstructionType.TRIPLEX,
    area: '200m²',
    images: [
      'https://casaspinheirao.com.br/medias/elementor/thumbs/triplex-de-200m-1024x835-800x652-1-qu5yzpxi85zj8awedi64czl308jefsqlu0cq9qo36y.png'
    ],
    description: 'Triplex impressionante com 200m², projetado para oferecer um estilo de vida sofisticado e espaçoso. Suíte master com closet e sacada, 2 dormitórios amplos, sala com pé-direito alto, cozinha com ilha central, espaço gourmet, terraço e garagem para 2 carros.',
    featured: true
  },
  {
    id: '2',
    title: 'Triplex de Alvenaria 148.05m²',
    type: ConstructionType.TRIPLEX,
    area: '148.05m²',
    images: [
      'https://casaspinheirao.com.br/medias/elementor/thumbs/triplex-de-148.05m%C2%B2-1024x912-1-qu5yzl8b9zt3m9384y4ziirs1b6kdb7y5d3avcv24a.png'
    ],
    description: 'Triplex deslumbrante com 148.05m², projetado para oferecer um estilo de vida luxuoso e confortável. Espaços bem distribuídos em três pavimentos com suíte ampla, sacada privativa e acabamentos de primeira linha.',
    featured: true
  },
  
  // SOBRADOS
  {
    id: '3',
    title: 'Sobrado de Alvenaria 119.91m²',
    type: ConstructionType.SOBRADO,
    area: '119.91m²',
    images: [
      'https://casaspinheirao.com.br/medias/elementor/thumbs/sobrado-de-119.91m%C2%B2-qu5yzhgyinnybt8oqwih8jpxnrp3iit0suhcy90mr8.png'
    ],
    description: 'Sobrado excepcional com 119.91m², projetado para oferecer um espaço amplo e confortável, ideal para famílias que buscam qualidade e estilo. Aproveitamento inteligente de espaço em dois pavimentos.',
    featured: true
  },
  {
    id: '4',
    title: 'Sobrado de Alvenaria 98.74m²',
    type: ConstructionType.SOBRADO,
    area: '98.74m²',
    images: [
      'https://casaspinheirao.com.br/medias/elementor/thumbs/casas-pinheirao-post-45-e1711426450520-1024x850-1-qu5yzcrrkhhiprfiichce2wmouc9g1ad477xjv7lmm.png'
    ],
    description: 'Sobrado espaçoso e bem projetado com 98.74m², ideal para quem busca um lar que combine conforto, estilo e praticidade. Design moderno com funcionalidade excepcional.',
    featured: true
  },
  {
    id: '5',
    title: 'Sobrado de Alvenaria 84.40m²',
    type: ConstructionType.SOBRADO,
    area: '84.40m²',
    images: [
      'https://casaspinheirao.com.br/medias/elementor/thumbs/sobrado-de-84.40m%C2%B2-qu5yz3ddo54nhnt618f2p5a0qzmlb291qwp2r3ljck.png'
    ],
    description: 'Sobrado moderno e espaçoso com 84.40m² de área construída. Perfeito equilíbrio entre conforto e economia, com distribuição inteligente dos ambientes.',
    featured: false
  },
  {
    id: '6',
    title: 'Sobrado de Alvenaria 80m²',
    type: ConstructionType.SOBRADO,
    area: '80m²',
    images: [
      'https://casaspinheirao.com.br/medias/elementor/thumbs/sobrado20de2080mC2B2-1024x963-1-qu5yz82kmbb33pmc9sg7jm3bpwzfdjrpfjyi5hekks.png'
    ],
    description: 'Sobrado de alvenaria com 80m², projetado para oferecer o máximo de conforto e funcionalidade. Ideal para famílias que buscam praticidade sem abrir mão do espaço.',
    featured: false
  },
  {
    id: '7',
    title: 'Sobrado de Alvenaria 61.97m²',
    type: ConstructionType.SOBRADO,
    area: '61.97m²',
    images: [
      'https://casaspinheirao.com.br/medias/elementor/thumbs/sobrado-de-61.97m%C2%B2-qu5yyzm0wszi77ymn6skf686dg54g9u4ee34tzr42a.png'
    ],
    description: 'Sobrado moderno e bem planejado com 61.97m² de área construída. Compacto mas extremamente funcional, perfeito para terrenos menores.',
    featured: false
  },

  // CASAS DE ALVENARIA
  {
    id: '8',
    title: 'Casa de Alvenaria 90m² com Varanda e Garagem',
    type: ConstructionType.MASONRY,
    area: '90m²',
    images: [
      'https://casaspinheirao.com.br/medias/elementor/thumbs/Casa-de-Alvenaria-6m-x-10m-60m%C2%B2-com-Varanda-e-Garagem-qu5z1qb2ueqm29z9mvge6zbkqwmnwhpxryl481os14.png',
      'https://casaspinheirao.com.br/medias/Casa-de-Alvenaria-6m-x-10m-60m%C2%B2-com-Varanda-e-Garagem.png'
    ],
    description: 'Casa de alvenaria 6m x 10m com 90m², incluindo varanda aconchegante e garagem. Projeto completo e funcional para toda a família.',
    featured: true
  },
  {
    id: '9',
    title: 'Casa de Alvenaria 75m² com Varanda e Garagem Coberta',
    type: ConstructionType.MASONRY,
    area: '75m²',
    images: [
      'https://casaspinheirao.com.br/medias/elementor/thumbs/Casa-de-Alvenaria-6m-x-10m-60m%C2%B2-com-Varanda-e-Garagem-Coberta-qu5z1nhk9wmr3g3d3c8ihi16yr0k9eeqrkmns7syjs.png',
      'https://casaspinheirao.com.br/medias/Casa-de-Alvenaria-6m-x-10m-60m%C2%B2-com-Varanda-e-Garagem-Coberta.png'
    ],
    description: 'Casa de alvenaria 6m x 10m com 75m², varanda e garagem coberta. Proteção completa para seu veículo e espaço de convivência ao ar livre.',
    featured: false
  },
  {
    id: '10',
    title: 'Casa de Alvenaria 72m² (6m x 9m)',
    type: ConstructionType.MASONRY,
    area: '72m²',
    images: [
      'https://casaspinheirao.com.br/medias/Casa-de-Alvenaria-6m-x-9m-54m%C2%B2.png'
    ],
    description: 'Casa de alvenaria medindo 6m x 9m com 72m². Design compacto e eficiente, ideal para quem busca praticidade e conforto.',
    featured: false
  },
  {
    id: '11',
    title: 'Casa de Alvenaria 60m² (5m x 8m) - Abrigo',
    type: ConstructionType.MASONRY,
    area: '60m²',
    images: [
      'https://casaspinheirao.com.br/medias/IMG-20220113-WA0031-768x576.jpg'
    ],
    description: 'Casa de alvenaria modelo abrigo 5m x 8m com 60m². Projeto econômico e funcional, perfeito para quem está começando.',
    featured: false
  },
  {
    id: '12',
    title: 'Casa de Alvenaria 48m² (6m x 8m)',
    type: ConstructionType.MASONRY,
    area: '48m²',
    images: [
      'https://casaspinheirao.com.br/medias/IMG-20220113-WA0032-768x576.jpg'
    ],
    description: 'Casa de alvenaria 6m x 8m com 48m². Solução inteligente para terrenos compactos sem abrir mão do conforto.',
    featured: false
  },
  {
    id: '13',
    title: 'Casa de Alvenaria 42m² (6m x 7m)',
    type: ConstructionType.MASONRY,
    area: '42m²',
    images: [
      'https://casaspinheirao.com.br/medias/IMG-20220113-WA0034-768x576.jpg'
    ],
    description: 'Casa de alvenaria 6m x 7m com 42m². Seu sonho de ter a casa própria está mais perto do que você imagina! Projeto compacto e acessível.',
    featured: false
  },
  {
    id: '14',
    title: 'Casa de Alvenaria 40m² (5m x 8m)',
    type: ConstructionType.MASONRY,
    area: '40m²',
    images: [
      'https://casaspinheirao.com.br/medias/Casa-de-Alvenaria-5m-x-8m-40m%C2%B2-.png'
    ],
    description: 'Casa de alvenaria 5m x 8m com 40m². Compacta, econômica e perfeita para quem busca o primeiro imóvel próprio.',
    featured: false
  },

  // CASAS DE MADEIRA
  {
    id: '15',
    title: 'Casa de Madeira de Pinus 126.50m²',
    type: ConstructionType.WOOD,
    area: '126.50m²',
    images: [
      'https://casaspinheirao.com.br/medias/Casa-Madeira-de-Pinus-5m-x-5m-25m%C2%B2-1.png'
    ],
    description: 'Casa de madeira de pinus medindo 126.50m². Ampla, elegante e com o charme natural da madeira nobre. Conforto térmico superior e beleza atemporal.',
    featured: true
  },
  {
    id: '16',
    title: 'Casa Madeira de Pinus 72.25m² (6m x 7m)',
    type: ConstructionType.WOOD,
    area: '72.25m²',
    images: [
      'https://casaspinheirao.com.br/medias/IMG-20220113-WA0056-768x432.jpg'
    ],
    description: 'Casa de madeira de pinus 6m x 7m com 72.25m². Combine sustentabilidade com conforto neste projeto charmoso e aconchegante.',
    featured: false
  },
  {
    id: '17',
    title: 'Casa Madeira de Pinus 60m² (5m x 8m)',
    type: ConstructionType.WOOD,
    area: '60m²',
    images: [
      'https://casaspinheirao.com.br/medias/IMG-20220113-WA0049-768x432.jpg'
    ],
    description: 'Casa de madeira de pinus 5m x 8m com 60m². Conforto térmico natural e beleza rústica, ideal para quem valoriza o contato com a natureza.',
    featured: false
  },
  {
    id: '18',
    title: 'Casa Madeira de Pinus 36m² (6m x 6m)',
    type: ConstructionType.WOOD,
    area: '36m²',
    images: [
      'https://casaspinheirao.com.br/medias/IMG-20220113-WA0050-768x432.jpg'
    ],
    description: 'Casa de madeira de pinus 6m x 6m com 36m². Charmosa casa compacta, perfeita para casais, pousadas ou casa de campo.',
    featured: false
  },
  {
    id: '19',
    title: 'Casa Madeira de Pinus 25m² (5m x 5m)',
    type: ConstructionType.WOOD,
    area: '25m²',
    images: [
      'https://casaspinheirao.com.br/medias/casa_mad_mod_03-768x432.jpg'
    ],
    description: 'Casa de madeira de pinus 5m x 5m com 25m². Solução econômica e versátil, ideal para chalé, escritório, ateliê ou casa de hóspedes.',
    featured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Clara',
    city: 'Curitiba/PR',
    text: 'Construir meu triplex de 148m² com a Casas Pinheirão foi uma das melhores decisões. Eles foram honestos, cumpriram o prazo e entregaram exatamente como prometido!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '2',
    name: 'João Pedro',
    city: 'Colombo/PR',
    text: 'Fiz meu sobrado personalizado e não tenho do que reclamar. Ficou lindo, funcional e dentro do meu orçamento!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '3',
    name: 'Marcos Vinícius',
    city: 'Pinhais/PR',
    text: 'A velocidade da entrega me surpreendeu. Em menos de 2 meses já estava morando na minha casa de madeira. O atendimento do Alisson foi nota 10!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
  }
];

export const CONSULTANTS: Consultant[] = [
  {
    name: 'Alisson',
    role: 'Especialista em Projetos',
    phone: '(41) 99630-1028',
    image: 'https://casaspinheirao.com.br/medias/Realize-o-sonho-da-casa-propria-com-a-Casas-Pinheirao-2.png'
  },
  {
    name: 'Denise',
    role: 'Consultora de Vendas',
    phone: '(41) 99637-6486',
    image: 'https://casaspinheirao.com.br/medias/casas-pinheirao-em-pinhais-1.png'
  }
];
