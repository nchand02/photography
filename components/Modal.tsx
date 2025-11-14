
import React, { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    altText: string;
}

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc, altText }) => {
    
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
                className="bg-gray-900 text-white rounded-lg shadow-xl p-4 max-w-4xl max-h-[90vh] w-full mx-4 relative flex flex-col items-center"
                onClick={e => e.stopPropagation()} // Prevent closing modal when clicking on the content
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 text-white hover:text-amber-400 p-2 z-10"
                    aria-label="Close image viewer"
                >
                    <CloseIcon />
                </button>
                <div className="w-full flex-grow flex items-center justify-center overflow-hidden">
                    <img 
                        src={imageSrc} 
                        alt={altText} 
                        className="w-full h-full object-contain rounded" 
                        id="modal-description"
                    />
                </div>
                <p id="modal-title" className="text-center mt-4 text-lg font-semibold">{altText}</p>
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Modal;
