
import React from 'react';
import { Camera, Film, Heart, Sparkles } from 'lucide-react';
import { Service, PortfolioItem, PricingPackage, Testimonial } from './types';

export const LOGO_URL = 'https://i.imgur.com/1k6O2IZ.png';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/clifforddendirofilms',
};

export const SERVICES: Service[] = [
  {
    id: 'details',
    title: 'Wedding Details',
    description: 'Cinematic close-ups of your rings, gown, shoes, and the intricate elements that make your wedding unique.',
    icon: 'Gem'
  },
  {
    id: 'prep',
    title: 'Wedding Preparation',
    description: 'Documenting the candid excitement, the transformation, and the quiet moments before the ceremony begins.',
    icon: 'Clock'
  },
  {
    id: 'bride-squad',
    title: 'Bride Solo & Squad Shoot',
    description: 'Capturing the radiant beauty of the bride and the joyful energy of her bridesmaids during the portrait session.',
    icon: 'Users'
  },
  {
    id: 'groom-squad',
    title: 'Groom Solo & Squad Shot',
    description: 'Highlighting the groom\'s sharp appearance and the camaraderie of his groomsmen.',
    icon: 'UserRound'
  },
  {
    id: 'ceremony',
    title: 'Ceremony',
    description: 'The heartbeat of your wedding—capturing the march, the atmosphere, and the solemnity of the occasion.',
    icon: 'Church'
  },
  {
    id: 'vows',
    title: 'Wedding Vows',
    description: 'Crystal clear audio and cinematic visuals of the promises that bind your lives together forever.',
    icon: 'Mic'
  },
  {
    id: 'reception',
    title: 'Reception',
    description: 'The grand entrance, speeches, and the vibrant celebration with all your guests under the party lights.',
    icon: 'PartyPopper'
  },
  {
    id: 'parents',
    title: 'Couple\'s Parents Moment',
    description: 'Focusing on the emotional depth and the legacy of love shared with your parents during the most poignant moments.',
    icon: 'Heart'
  },
  {
    id: 'dance',
    title: 'First Dance',
    description: 'The timeless tradition of your first dance as husband and wife, filmed with sweeping cinematic movement.',
    icon: 'Music'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: 'Modern Cinematic Reel',
    couple: 'Featured Highlights',
    category: 'SDE',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1920&h=1080',
    videoUrl: 'https://www.facebook.com/reel/1550650799594616',
    description: 'A high-energy showcase of our signature cinematic style, blending slow-motion artistry with fast-paced storytelling to capture the essence of a modern wedding celebration.'
  },
  {
    id: 2,
    title: 'A Love Beyond Borders',
    couple: 'Mark Gil Anthony & Maria Nova',
    category: 'Prenup',
    type: 'video',
    thumbnail: 'https://i.imgur.com/bjTNy9r.jpeg',
    videoUrl: 'https://www.youtube.com/watch?v=85w7yUDdDWo',
    description: 'This prenup film explores the quiet, intimate connection between Mark and Maria. Set against breathtaking landscapes, it captures the anticipation and pure joy of their journey toward the altar.'
  },
  {
    id: 3,
    title: 'Koren Inspired Pre-Wedding',
    couple: 'Jimboy & Trizia',
    category: 'Feature',
    type: 'video',
    thumbnail: 'https://i.imgur.com/w7f7CVt.jpeg',
    videoUrl: 'https://youtu.be/qIG2AHa7Wz8?si=QjfKEkmUAKHWc3z0',
    description: "A film of Jim and Trizia's love story in an inspired koren concept "CLOY"."
  },
  {
    id: 4,
    title: 'Sunset Serenade',
    couple: 'Nel Brian & Xty',
    category: 'Prenup',
    type: 'video',
    thumbnail: 'https://i.imgur.com/JLNKpWp.jpeg',
    videoUrl: 'https://www.youtube.com/watch?v=UmKxVKdk7nk',
    description: 'Now they see daylight after seeing each other and promising their love forever'
  }
];

export const PRICING: PricingPackage[] = [
  {
    id: 1,
    name: 'CINEMATIC ESSENTIAL PACKAGE',
    price: '₱10,000',
    description: 'A beautifully crafted cinematic summary for intimate celebrations that focus on the heart of the union.',
    image: 'https://i.imgur.com/aAFIqDS.jpeg',
    features: [
      'Wedding Cinematic Highlights',
      'Aerial Drone Shot',
      'Storage Output (Flashdrive)'
    ]
  },
  {
    id: 2,
    name: 'CINEMATIC GRAND PACKAGE',
    price: '₱25,000',
    description: 'Our most sought-after experience, featuring the iconic Same Day Edit that brings your guests to tears during the reception.',
    image: 'https://i.imgur.com/NPyLaqh.jpeg',
    features: [
     'Pre-Wedding Shoot',
      'Save the Date',
      'Same Day Edit (SDE)',
      'Aerial Drone Shot',
      'Storage Output (Flashdrive)'
    ],
    isPopular: true
  },
  {
    id: 3,
    name: 'CINEMATIC SIGNATURE PACKAGE',
    price: '₱18,000',
    description: 'The ultimate storytelling experience covering your journey from the prenup sessions to the grand finale of your wedding day.',
    image: 'https://i.imgur.com/xzldGKc.jpeg',
    features: [
      'Same Day Edit (SDE)',
      'Aerial Drone Shot',
     'Storage Output (Flashdrive)'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sophia & Michael',
    date: 'June 2023',
    text: 'Watching our SDE during the reception was the highlight of our night. CDFilms captured the raw emotions we didn\'t even know were visible.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'Isabella & Daniel',
    date: 'September 2023',
    text: 'Their cinematic approach is unmatched. The prenup shoot felt so natural, and the final film looked like a Hollywood production.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'Elena & Mark',
    date: 'December 2023',
    text: 'Professional, discreet, and incredibly talented. They found the perfect balance between artistic shots and candid moments.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=200'
  }
];
