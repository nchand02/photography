/**
 * Scroll Utilities
 * Helper functions for smooth scrolling and navigation
 */

/**
 * Smoothly scrolls to an element with the given selector
 */
export function scrollToElement(selector: string): void {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Scrolls to the top of the page
 */
export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Checks if an element is in the viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
