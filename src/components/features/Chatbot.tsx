import { useState, useEffect, useRef, type FormEvent } from 'react';
import { ChatIcon, CloseIcon, SendIcon } from '../common/Icons';
import { LoadingIndicator } from '../common/Loading';
import { useChat } from '@/hooks/useChat';
import { Sender } from '@/types';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const { messages, isLoading, sendMessage } = useChat();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const messageToSend = userInput;
    setUserInput('');
    await sendMessage(messageToSend);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
        className="fixed bottom-6 right-6 bg-primary-500 text-white p-4 rounded-full shadow-lg hover:bg-primary-600 transition-all transform hover:scale-110 focus:outline-none z-50"
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>

      <div
        id="chat-window"
        role="dialog"
        aria-modal="true"
        aria-labelledby="chat-heading"
        className={`fixed bottom-24 right-6 w-full max-w-sm h-[70vh] max-h-[500px] bg-white rounded-lg shadow-2xl flex flex-col transition-all duration-300 ease-in-out z-50 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <header className="bg-dark-800 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 id="chat-heading" className="font-bold text-lg">
            Chat with Vidya
          </h3>
        </header>
        <div className="flex-1 p-4 overflow-y-auto bg-gray-100" aria-live="polite">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex mb-4 ${msg.sender === Sender.User ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`rounded-lg px-4 py-2 max-w-xs lg:max-w-md ${
                  msg.sender === Sender.User
                    ? 'bg-primary-500 text-dark-900'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div
                className="rounded-lg px-4 py-2 bg-gray-200 text-gray-800"
                role="status"
                aria-label="Loading response"
              >
                <LoadingIndicator />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form
          onSubmit={handleSendMessage}
          className="p-4 border-t border-gray-200 bg-white rounded-b-lg"
        >
          <div className="flex items-center">
            <input
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder="Ask a question..."
              aria-label="Your message"
              className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900"
              disabled={isLoading}
            />
            <button
              type="submit"
              aria-label="Send message"
              className="bg-primary-500 text-white p-2 rounded-r-md hover:bg-primary-600 disabled:bg-gray-400 transition-colors"
              disabled={isLoading}
            >
              <SendIcon />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
