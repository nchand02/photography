export interface Course {
  id?: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  duration?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  features?: string[];
}
