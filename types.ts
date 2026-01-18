
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
  videoUrl?: string; // YouTube link for videos
  fullImageUrl?: string; // High res for photos
  description?: string; // The story behind the film
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
