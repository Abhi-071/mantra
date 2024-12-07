import React from 'react';
import { User } from '../../types/auth';
import { Button } from '../ui/Button';
import { PenSquare, Users } from 'lucide-react';

interface ProfileCardProps {
  user: User;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div 
        className="h-32 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80")'
        }}
      />
      <div className="px-6 pb-6">
        <div className="flex justify-center -mt-12 mb-4">
          <img
            src={user.avatarUrl || `https://ui-avatars.com/api/?name=${user.username}`}
            alt={user.username}
            className="w-24 h-24 rounded-full border-4 border-white"
          />
        </div>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">@{user.username}</h2>
          <p className="text-gray-600 mt-2">{user.bio || 'No bio yet'}</p>
        </div>
        <div className="flex justify-center gap-4">
          <div className="text-center">
            <div className="flex items-center gap-1 text-gray-600">
              <PenSquare className="w-4 h-4" />
              <span>150</span>
            </div>
            <p className="text-sm text-gray-500">Posts</p>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-1 text-gray-600">
              <Users className="w-4 h-4" />
              <span>2.5k</span>
            </div>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
