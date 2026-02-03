
export enum PropertyType {
  CASA = 'Casa',
  APARTAMENTO = 'Apartamento',
  TERRENO = 'Terreno',
  COMERCIAL = 'Comercial',
  COBERTURA = 'Cobertura'
}

export enum BusinessType {
  COMPRAR = 'Comprar',
  ALUGAR = 'Alugar'
}

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  businessType: BusinessType;
  price: number;
  location: {
    neighborhood: string;
    city: string;
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    parkingSpots: number;
    area: number;
  };
  imageUrl: string;
  isFeatured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  text: string;
}
