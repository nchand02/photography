import type { Course } from '@/types';

export const COURSES_DATA: Course[] = [
  {
    id: 'beginner-dslr',
    title: "Beginner's DSLR Mastery",
    description:
      'Go from auto mode to full manual control. Understand aperture, shutter speed, ISO, and composition to unlock your camera\'s true potential.',
    price: '₹8,000',
    imageUrl: 'https://picsum.photos/600/400?image=20',
    duration: '4 weeks',
    level: 'beginner',
    features: [
      'Master manual mode controls',
      'Understanding exposure triangle',
      'Composition fundamentals',
      'Hands-on photo walks',
    ],
  },
  {
    id: 'advanced-portrait',
    title: 'Advanced Portrait Photography',
    description:
      'Learn professional lighting techniques, posing, and editing to create stunning portraits that capture the essence of your subjects.',
    price: '₹12,500',
    imageUrl: 'https://picsum.photos/600/400?image=433',
    duration: '6 weeks',
    level: 'advanced',
    features: [
      'Professional lighting setups',
      'Posing and direction',
      'Portrait editing workflow',
      'Studio and natural light',
    ],
  },
  {
    id: 'street-photography',
    title: 'Street Photography in India',
    description:
      'Capture the candid moments and vibrant stories of India\'s streets. This workshop focuses on storytelling, composition, and approaching subjects.',
    price: '₹10,000',
    imageUrl: 'https://picsum.photos/600/400?image=1074',
    duration: '3 weeks',
    level: 'intermediate',
    features: [
      'Storytelling through images',
      'Candid photography techniques',
      'Approaching subjects ethically',
      'Photo walk sessions',
    ],
  },
];
