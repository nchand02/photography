/**
 * Formatting Utilities
 * Helper functions for formatting data
 */

/**
 * Formats a price string
 */
export function formatPrice(price: string | number): string {
  if (typeof price === 'number') {
    return `₹${price.toLocaleString('en-IN')}`;
  }
  return price;
}

/**
 * Formats a date string
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Truncates text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Generates a unique ID
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
