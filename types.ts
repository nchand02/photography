
export enum Sender {
  User,
  Model,
}

export interface Message {
  id: string;
  sender: Sender;
  text: string;
}

export interface Course {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}