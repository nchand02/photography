import type { Chat } from '@google/genai';
import { getGeminiClient } from './geminiClient';
import { GEMINI_CONFIG } from '@/config/gemini.config';

/**
 * Creates a new chat session with Gemini AI
 */
export function createChatSession(): Chat {
  const ai = getGeminiClient();

  return ai.chats.create({
    model: GEMINI_CONFIG.model,
    config: {
      systemInstruction: GEMINI_CONFIG.systemInstruction,
    },
  });
}

/**
 * Sends a message to the chat session
 */
export async function sendChatMessage(chat: Chat, message: string): Promise<string> {
  try {
    const response = await chat.sendMessage({ message });
    return response.text || 'Sorry, I received an empty response.';
  } catch (error) {
    console.error('Error sending message to Gemini:', error);
    throw new Error('Failed to send message. Please try again.');
  }
}
