import { GoogleGenAI } from '@google/genai';
import { ENV } from '@/config/env';

let aiInstance: GoogleGenAI | null = null;

/**
 * Gets or creates the Gemini AI client instance
 */
export function getGeminiClient(): GoogleGenAI {
  if (!aiInstance) {
    if (!ENV.GEMINI_API_KEY) {
      throw new Error('Gemini API key is not configured');
    }
    aiInstance = new GoogleGenAI({ apiKey: ENV.GEMINI_API_KEY });
  }
  return aiInstance;
}

/**
 * Resets the Gemini client instance (useful for testing)
 */
export function resetGeminiClient(): void {
  aiInstance = null;
}
