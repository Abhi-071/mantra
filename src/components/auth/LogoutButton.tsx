import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const logout = useAuth((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="p-1 rounded-full hover:bg-gray-100"
      title="Logout"
    >
      <LogOut className="w-6 h-6" />
    </button>
  );
};