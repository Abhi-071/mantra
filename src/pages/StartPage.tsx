import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { PenTool } from 'lucide-react';

const quotes = [
  {
    text: "There is no greater agony than bearing an untold story inside you.",
    author: "Maya Angelou",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
    role: "Poet & Memoirist"
  },
  {
    text: "The scariest moment is always just before you start.",
    author: "Stephen King",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80",
    role: "Novelist"
  },
  {
    text: "To write is to breathe life into your thoughts.",
    author: "Virginia Woolf",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    role: "Modernist Author"
  },
  {
    text: "Words are, in my not so humble opinion, our most inexhaustible source of magic.",
    author: "J.K. Rowling",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    role: "Fantasy Writer"
  }
];

export const StartPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center mb-20">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75"></div>
            <div className="relative">
              <PenTool className="w-20 h-20 text-white" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mt-8 mb-4 text-center">
            Mantra
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-2xl mb-12">
            Where words dance, stories breathe, and imagination knows no bounds
          </p>
          
          <div className="flex gap-6">
            <Link to="/signup">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg"
              >
                Start Your Journey
              </Button>
            </Link>
            <Link to="/login">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white/10 shadow-lg"
              >
                Welcome Back
              </Button>
            </Link>
          </div>
        </div>

        {/* Quotes Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {quotes.map((quote, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start gap-6">
                <img
                  src={quote.image}
                  alt={quote.author}
                  className="w-20 h-20 rounded-full object-cover border-2 border-purple-300"
                />
                <div>
                  <p className="text-white text-lg italic mb-4">"{quote.text}"</p>
                  <div>
                    <p className="text-purple-200 font-semibold">{quote.author}</p>
                    <p className="text-purple-300 text-sm">{quote.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-20">
          <p className="text-gray-300 text-lg italic">
            "Every story matters. Every voice deserves to be heard."
          </p>
        </div>
      </div>
    </div>
  );
};
