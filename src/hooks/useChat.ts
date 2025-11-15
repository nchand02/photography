import { useState, useCallback, useRef, useEffect } from 'react';
import type { Message, Sender } from '@/types';
import type { Chat } from '@google/genai';
import { createChatSession } from '@/services/gemini/geminiService';
import { APP_CONFIG } from '@/constants/siteData';

interface UseChatReturn {
  messages: Message[];
  isLoading: boolean;
  sendMessage: (text: string) => Promise<void>;
  clearMessages: () => void;
}

/**
 * Custom hook for managing chat state and interactions
 */
export function useChat(): UseChatReturn {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatSession = useRef<Chat | null>(null);

  // Initialize chat session and welcome message
  useEffect(() => {
    chatSession.current = createChatSession();
    setMessages([
      {
        id: 'initial-message',
        sender: 0 as Sender, // Sender.Model
        text: APP_CONFIG.chatbot.greeting,
      },
    ]);
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 1 as Sender, // Sender.User
      text: text.trim(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      if (chatSession.current) {
        const response = await chatSession.current.sendMessage({ message: text });
        const modelMessage: Message = {
          id: `model-${Date.now()}`,
          sender: 0 as Sender, // Sender.Model
          text: response.text || 'Sorry, I received an empty response.',
        };
        setMessages(prev => [...prev, modelMessage]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        sender: 0 as Sender, // Sender.Model
        text: 'Sorry, I seem to be having some trouble right now. Please try again later.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: 'initial-message',
        sender: 0 as Sender,
        text: APP_CONFIG.chatbot.greeting,
      },
    ]);
    chatSession.current = createChatSession();
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages,
  };
}
