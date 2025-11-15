import { useState, useCallback, memo } from 'react';
import type { GalleryImage } from '@/types';
import { GALLERY_IMAGES } from '@/constants/gallery';
import { Modal } from '../common/Modal';
import { useImageLoader } from '@/hooks/useImageLoader';
import { SkeletonLoader } from '../common/Loading';

interface GalleryItemProps {
  image: GalleryImage;
  onImageClick: (image: GalleryImage) => void;
}

const GalleryItem = memo(({ image, onImageClick }: GalleryItemProps) => {
  const { isLoaded, handleImageLoad } = useImageLoader();

  const handleClick = () => onImageClick(image);

  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/3] bg-dark-700"
      onClick={handleClick}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
      tabIndex={0}
      role="button"
      aria-label={`View image: ${image.alt}`}
    >
      {!isLoaded(image.src) && <SkeletonLoader className="absolute inset-0" />}
      <img
        src={image.src}
        alt={image.alt}
        className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out ${
          isLoaded(image.src) ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={() => handleImageLoad(image.src)}
      />
      <div
        className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end justify-start p-4 ${
          isLoaded(image.src) ? '' : 'opacity-0'
        }`}
      >
        <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {image.alt}
        </p>
      </div>
    </div>
  );
});

GalleryItem.displayName = 'GalleryItem';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <>
      <section id="gallery" className="section-padding bg-dark-800">
        <div className="container-custom">
          <h2 className="heading-primary">My Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map(image => (
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
}
