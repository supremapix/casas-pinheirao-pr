
export enum ConstructionType {
  WOOD = 'Casas de Madeira',
  MASONRY = 'Casas de Alvenaria',
  SOBRADO = 'Sobrados',
  TRIPLEX = 'Triplex'
}

export interface Project {
  id: string;
  title: string;
  type: ConstructionType;
  area: string;
  images: string[]; // Changed from image: string to support galleries
  description: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  text: string;
  image: string;
}

export interface Consultant {
  name: string;
  role: string;
  phone: string;
  image: string;
}
