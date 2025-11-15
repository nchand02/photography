
import React from 'react';
import type { GalleryImage } from '../types.ts';
import Modal from './Modal.tsx';

const images: GalleryImage[] = [
  { id: 180, src: 'https://picsum.photos/800/600?image=180', alt: 'Man on a boat during sunset' },
  { id: 1043, src: 'https://picsum.photos/800/600?image=1043', alt: 'Indian woman in traditional attire' },
  { id: 1075, src: 'https://picsum.photos/800/600?image=1075', alt: 'Taj Mahal' },
  { id: 219, src: 'https://picsum.photos/800/600?image=219', alt: 'Colorful spices at a market' },
  { id: 431, src: 'https://picsum.photos/800/600?image=431', alt: 'Train moving through a lush landscape' },
  { id: 582, src: 'https://picsum.photos/800/600?image=582', alt: 'Old man with a thoughtful expression' },
];

const SkeletonLoader: React.FC = () => (
    <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
);

const GalleryItem: React.FC<{ image: GalleryImage; onImageClick: (image: GalleryImage) => void }> = ({ image, onImageClick }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const imgRef = React.useRef<HTMLImageElement>(null);

    React.useEffect(() => {
        // Check if the image is already cached by the browser
        if (imgRef.current && imgRef.current.complete) {
            setIsLoaded(true);
        }
    }, []);
    
    const handleClick = () => onImageClick(image);

    return (
        <div 
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/3] bg-gray-700"
            onClick={handleClick}
            onKeyDown={(e) => e.key === 'Enter' && handleClick()}
            tabIndex={0}
            role="button"
            aria-label={`View image: ${image.alt}`}
        >
            {!isLoaded && <SkeletonLoader />}
            <img 
                ref={imgRef}
                src={image.src} 
                alt={image.alt} 
                className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
            />
            <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end justify-start p-4 ${isLoaded ? '' : 'opacity-0'}`}>
               <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{image.alt}</p>
            </div>
        </div>
    );
};


const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<GalleryImage | null>(null);

  const openModal = React.useCallback((image: GalleryImage) => {
    setSelectedImage(image);
  }, []);

  const closeModal = React.useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <>
      <section id="gallery" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">My Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <GalleryItem key={image.id} image={image} onImageClick={openModal} />
            ))}
          </div>
        </div>
      </section>
      {selectedImage && (
        <Modal 
          isOpen={!!selectedImage} 
          onClose={closeModal} 
          imageSrc={selectedImage.src} 
          altText={selectedImage.alt} 
        />
      )}
    </>
  );
};

export default Gallery;