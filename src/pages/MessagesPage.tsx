import React, { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Send } from 'lucide-react';

const mockChats = [
  {
    id: '1',
    username: 'emily_writes',
    lastMessage: 'I loved your latest poem!',
    timestamp: '2024-03-15T10:30:00Z',
    unread: true
  },
  // Add more mock data as needed
];

export const MessagesPage: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm flex h-[calc(100vh-12rem)]">
          {/* Chat List */}
          <div className="w-80 border-r">
            <div className="p-4">
              <Input
                placeholder="Search conversations..."
                className="mb-4"
              />
              <div className="space-y-2">
                {mockChats.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`
                      w-full p-3 rounded-lg text-left
                      ${selectedChat === chat.id 
                        ? 'bg-indigo-50' 
                        : 'hover:bg-gray-50'
                      }
                    `}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium">@{chat.username}</span>
                      <span className="text-xs text-gray-500">
                        {new Date(chat.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {chat.lastMessage}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b">
                  <h3 className="font-medium">
                    @{mockChats.find(c => c.id === selectedChat)?.username}
                  </h3>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto">
                  {/* Add message bubbles here */}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1"
                    />
                    <Button className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Select a conversation to start messaging
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};