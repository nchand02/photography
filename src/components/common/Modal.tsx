import { useEffect } from 'react';
import { CloseIcon } from './Icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
}

/**
 * Modal Component for displaying full-size images
 */
export function Modal({ isOpen, onClose, imageSrc, altText }: ModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center transition-opacity duration-300 ease-in-out animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className="bg-dark-900 text-white rounded-lg shadow-xl p-4 max-w-4xl max-h-[90vh] w-full mx-4 relative flex flex-col items-center"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-primary-400 p-2 z-10 transition-colors duration-300"
          aria-label="Close image viewer"
        >
          <CloseIcon className="w-8 h-8" />
        </button>
        <div className="w-full flex-grow flex items-center justify-center overflow-hidden">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-contain rounded"
            id="modal-description"
          />
        </div>
        <p id="modal-title" className="text-center mt-4 text-lg font-semibold">
          {altText}
        </p>
      </div>
    </div>
  );
}
