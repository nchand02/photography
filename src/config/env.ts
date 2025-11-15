/**
 * Environment Configuration
 * Centralizes all environment variable access
 */

export const ENV = {
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || '',
  APP_TITLE: import.meta.env.VITE_APP_TITLE || 'Navdeep Singh Photography Academy',
  APP_URL: import.meta.env.VITE_APP_URL || '',
  APP_DESCRIPTION: import.meta.env.VITE_APP_DESCRIPTION || '',
  IS_PRODUCTION: import.meta.env.PROD,
  IS_DEVELOPMENT: import.meta.env.DEV,
} as const;

/**
 * Validates that all required environment variables are set
 */
export function validateEnv(): void {
  if (!ENV.GEMINI_API_KEY) {
    console.warn(
      'Warning: VITE_GEMINI_API_KEY is not set. Chatbot functionality will not work.'
    );
  }
}

// Run validation on import
if (ENV.IS_DEVELOPMENT) {
  validateEnv();
}
