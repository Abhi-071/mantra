import React, { useState } from 'react';














































































































import { MainLayout } from '../components/layout/MainLayout';

export const HomePage: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add the user's message to the chat
    setMessages((prev) => [...prev, { sender: 'user', text: input }]);
    setInput('');
    setIsLoading(true);

    // Simulate chatbot response based on user input
    setTimeout(() => {
      let botResponse = 'Sorry, I didn’t understand that.';
      
      // Custom responses based on user input
      if (input.toLowerCase().includes('hello')) {
        botResponse = 'Hi! how may i assist you today?';
      } else if (input.toLowerCase().includes('help')) {
        botResponse = 'I am here to help. What would you like to know?';
      } else if (input.toLowerCase().includes('bye')) {
        botResponse = 'Goodbye! Have a great day!';
      } else if (input.toLowerCase().includes('how are you')) {
        botResponse = 'I am just a bot, but I am doing well, thank you!';
      } else if (input.toLowerCase().includes('your name')) {
        botResponse = 'I am your friendly assistant!';
      } else if (input.toLowerCase().includes('what can you do')) {
        botResponse = 'I can help answer questions, provide information, or just chat!';
      }
      else if (input.toLowerCase().includes('what is capital of india')) {
        botResponse = 'delhi';
      }
      else if (input.toLowerCase().includes('quote of day')) {
        botResponse = '"The future belongs to those who believe in the beauty of their dreams."— Eleanor Roosevelt';
      }
      else if (input.toLowerCase().includes('what the name of this website')) {
        botResponse = 'Mantra';
      }
      else if (input.toLowerCase().includes('what can you do')) {
        botResponse = 'I assist you with your queries and provide you with information.';
      }

      // Add bot's response to the chat
      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setIsLoading(false);
    }, 1000); // Simulating delay for chatbot response
  };

  return (
    <MainLayout>
      <div
        className="rounded-xl bg-cover bg-center p-8 mb-8 text-white"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80")',
          height: '300px'
        }}
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to Mantra</h1>
          <p className="text-xl opacity-90">
            Your daily space for creative expression and literary exploration
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex flex-col space-y-4 mb-6">
          {/* Chat Display */}
          <div className="h-64 overflow-y-auto bg-gray-100 rounded-lg p-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left">
                <div className="inline-block px-4 py-2 rounded-lg bg-gray-200 text-gray-800">
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* Input Field */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="What's on your mind?"
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />
            <button
              onClick={handleSendMessage}
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-indigo-600"
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
