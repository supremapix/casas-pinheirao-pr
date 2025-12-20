
import { ConstructionType, Project, Testimonial, Consultant } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modelo Colonial 36m²',
    type: ConstructionType.WOOD,
    area: '36m²',
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1449156003053-96432b250f09?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Charmosa casa compacta em madeira nobre, ideal para casais ou pousadas. Inclui deck frontal e esquadrias de alto padrão.',
    featured: true
  },
  {
    id: '2',
    title: 'Residencial Pinhais 54m²',
    type: ConstructionType.WOOD,
    area: '54m²',
    images: [
      'https://images.unsplash.com/photo-1449156003053-96432b250f09?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'O equilíbrio perfeito entre custo e benefício. 2 quartos com amplo pé direito e conforto térmico superior.',
    featured: true
  },
  {
    id: '3',
    title: 'Sobrado Araucária 112m²',
    type: ConstructionType.SOBRADO,
    area: '112m²',
    images: [
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Design robusto unindo alvenaria no térreo e madeira nobre no pavimento superior. 3 quartos sendo 1 suíte.',
    featured: true
  },
  {
    id: '4',
    title: 'Casa Alvenaria Contemporary 85m²',
    type: ConstructionType.MASONRY,
    area: '85m²',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Linhas retas e telhado embutido. Projeto moderno em alvenaria convencional com acabamento de alto brilho.',
    featured: true
  },
  {
    id: '5',
    title: 'Triplex Master Pinheirão 185m²',
    type: ConstructionType.TRIPLEX,
    area: '185m²',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Para quem não abre mão do luxo. 4 quartos, ático amplo, área gourmet integrada e acabamentos premium.',
    featured: true
  },
  {
    id: '6',
    title: 'Kit Chalé Suíço 42m²',
    type: ConstructionType.WOOD,
    area: '42m²',
    images: [
      'https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Estilo rústico com telhado inclinado. Excelente para regiões de serra e litoral.',
    featured: false
  },
  {
    id: '7',
    title: 'Residência Curitibana 95m²',
    type: ConstructionType.MASONRY,
    area: '95m²',
    images: [
      'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Clássica casa de alvenaria com platibanda e janelas em alumínio preto.',
    featured: false
  },
  {
    id: '8',
    title: 'Sobrado Tropical 135m²',
    type: ConstructionType.SOBRADO,
    area: '135m²',
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Ampla área social no térreo e dormitórios privativos no andar superior. Totalmente personalizável.',
    featured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marcos Vinícius',
    city: 'Curitiba/PR',
    text: 'A velocidade da entrega me surpreendeu. Em menos de 2 meses já estava morando na minha casa de madeira. O atendimento do Alisson foi nota 10!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '2',
    name: 'Ana Paula Ferreira',
    city: 'Pinhais/PR',
    text: 'Procurei várias empresas, mas só na Pinheirão senti segurança. Eles cuidaram de tudo, desde a fundação até o acabamento final.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '3',
    name: 'Claudio Roberto',
    city: 'Colombo/PR',
    text: 'Qualidade da madeira é excepcional. Moro no sobrado há 3 anos e a estrutura continua perfeita. Recomendo sem dúvidas.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
  }
];

export const CONSULTANTS: Consultant[] = [
  {
    name: 'Alisson',
    role: 'Especialista em Projetos',
    phone: '(41) 99630-1028',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Denise',
    role: 'Consultora de Vendas',
    phone: '(41) 99630-1028',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  }
];
