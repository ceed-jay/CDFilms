
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  couple: string;
  category: 'SDE' | 'Prenup' | 'Feature';
  type: 'video' | 'photo';
  thumbnail: string;
  videoUrl?: string;
  fullImageUrl?: string;
  description: string;
}

export interface PricingPackage {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  date: string;
  text: string;
  image: string;
}
