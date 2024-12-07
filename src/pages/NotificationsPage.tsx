import React from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { PenSquare, Heart, MessageSquare, UserPlus } from 'lucide-react';
import type { Notification } from '../types/notification';

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'new_post',
    userId: '123',
    username: 'emily_writes',
    content: 'published a new poem "Whispers in the Wind"',
    createdAt: '2024-03-15T10:30:00Z',
    read: false,
  },
  {
    id: '2',
    type: 'like',
    userId: '456',
    username: 'robert_frost',
    content: 'liked your story "The Road Not Taken"',
    createdAt: '2024-03-15T09:15:00Z',
    read: true,
  },
];

const NotificationIcon = ({ type }: { type: Notification['type'] }) => {
  switch (type) {
    case 'new_post':
      return <PenSquare className="w-5 h-5 text-indigo-600" />;
    case 'like':
      return <Heart className="w-5 h-5 text-red-500" />;
    case 'comment':
      return <MessageSquare className="w-5 h-5 text-green-500" />;
    case 'follow':
      return <UserPlus className="w-5 h-5 text-blue-500" />;
    default:
      return <PenSquare className="w-5 h-5 text-gray-400" />;
  }
};

export const NotificationsPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Notifications</h1>
        <div className="space-y-4">
          {mockNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`
                bg-white rounded-lg p-4 flex items-start gap-4 shadow-sm
                ${!notification.read ? 'border-l-4 border-indigo-600' : ''}
              `}
            >
              <div className="p-2 bg-gray-50 rounded-lg">
                <NotificationIcon type={notification.type} />
              </div>
              <div className="flex-1">
                <p className="text-gray-900">
                  <span className="font-medium">@{notification.username}</span>{' '}
                  {notification.content}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(notification.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
