import { useState, useCallback } from 'react';

/**
 * Custom hook for managing image loading state
 * Tracks loading and error states for images
 */
export function useImageLoader() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

  const handleImageLoad = useCallback((src: string) => {
    setLoadedImages(prev => new Set(prev).add(src));
  }, []);

  const handleImageError = useCallback((src: string) => {
    setErrorImages(prev => new Set(prev).add(src));
  }, []);

  const isLoaded = useCallback((src: string) => loadedImages.has(src), [loadedImages]);

  const hasError = useCallback((src: string) => errorImages.has(src), [errorImages]);

  return {
    handleImageLoad,
    handleImageError,
    isLoaded,
    hasError,
  };
}
