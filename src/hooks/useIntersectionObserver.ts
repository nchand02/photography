import { useEffect, useRef, useState, type RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

/**
 * Custom hook for Intersection Observer API
 * Detects when an element enters the viewport
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [RefObject<HTMLDivElement | null>, boolean] {
  const { threshold = 0, root = null, rootMargin = '0px', freezeOnceVisible = false } = options;

  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If already visible and should freeze, don't create observer
    if (freezeOnceVisible && isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);

        // If element is visible and should freeze, disconnect observer
        if (isIntersecting && freezeOnceVisible && element) {
          observer.unobserve(element);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, root, rootMargin, freezeOnceVisible, isVisible]);

  return [elementRef, isVisible];
}
