import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="w-full max-w-md p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl">
        {children}
      </div>
    </div>
  );
};