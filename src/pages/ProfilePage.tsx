import React from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { ProfileCard } from '../components/profile/ProfileCard';

const mockUser = {
  id: '1',
  email: 'user@example.com',
  username: 'creative_writer',
  bio: 'Passionate about poetry and storytelling. Always seeking inspiration in the ordinary.',
  avatarUrl: null
};

export const ProfilePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <ProfileCard user={mockUser} />
        </div>
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
            {/* Add recent posts component here */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};