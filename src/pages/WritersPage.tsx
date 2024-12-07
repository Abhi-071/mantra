import React, { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { Star, Heart, UserPlus } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

type Writer = {
  id: string;
  username: string;
  category: string;
  genre: string;
  content: string;
  rating: number;
  likes: number;
  followers: number;
  comments: string[];
};

const mockWriters: Writer[] = [
  {
    id: '1',
    username: 'arun_sharma',
    category: 'fiction',
    genre: 'drama',
    content: 'The stormy nights of the soul...',
    rating: 4.2,
    likes: 245,
    followers: 1023,
    comments: [],
  },
  {
    id: '2',
    username: 'shivani_patel',
    category: 'poetry',
    genre: 'romance',
    content: 'Love is the essence of all stories...',
    rating: 4.7,
    likes: 312,
    followers: 1345,
    comments: [],
  },
  {
    id: '3',
    username: 'preeti_kumar',
    category: 'non-fiction',
    genre: 'biography',
    content: 'The true essence of a leader’s life...',
    rating: 4.3,
    likes: 210,
    followers: 876,
    comments: [],
  },
  {
    id: '4',
    username: 'vikram_singh',
    category: 'fiction',
    genre: 'mystery',
    content: 'A journey through the unknown...',
    rating: 4.8,
    likes: 150,
    followers: 904,
    comments: [],
  },
  {
    id: '5',
    username: 'ananya_rao',
    category: 'poetry',
    genre: 'nature',
    content: 'The beauty of the mountains calls to me...',
    rating: 4.1,
    likes: 185,
    followers: 1067,
    comments: [],
  },
  {
    id: '6',
    username: 'manish_tiwari',
    category: 'fiction',
    genre: 'sci-fi',
    content: 'Beyond the stars, a new world awaits...',
    rating: 4.5,
    likes: 340,
    followers: 1400,
    comments: [],
  },
  {
    id: '7',
    username: 'radhika_verma',
    category: 'poetry',
    genre: 'love',
    content: 'Love binds us beyond time and space...',
    rating: 4.6,
    likes: 283,
    followers: 1320,
    comments: [],
  },
  {
    id: '8',
    username: 'saurabh_mehta',
    category: 'non-fiction',
    genre: 'self-help',
    content: 'Self-reflection is the key to growth...',
    rating: 4.4,
    likes: 400,
    followers: 1550,
    comments: [],
  },
  {
    id: '9',
    username: 'neha_gupta',
    category: 'fiction',
    genre: 'historical',
    content: 'The past echoes in the present...',
    rating: 4.0,
    likes: 145,
    followers: 950,
    comments: [],
  },
  {
    id: '10',
    username: 'rahul_yadav',
    category: 'fiction',
    genre: 'thriller',
    content: 'The clock is ticking, the danger is near...',
    rating: 4.9,
    likes: 522,
    followers: 1600,
    comments: [],
  },
];

export const WritersPage: React.FC = () => {
  const [writers, setWriters] = useState<Writer[]>(mockWriters);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'username' | 'category' | 'genre'>('username');

  const toggleLike = (id: string) => {
    setWriters((prev) =>
      prev.map((writer) =>
        writer.id === id
          ? { ...writer, likes: writer.likes + 1 }
          : writer
      )
    );
  };

  const handleFollow = (id: string) => {
    setWriters((prev) =>
      prev.map((writer) =>
        writer.id === id
          ? { ...writer, followers: writer.followers + 1 }
          : writer
      )
    );
  };

  const handleUnfollow = (id: string) => {
    setWriters((prev) =>
      prev.map((writer) =>
        writer.id === id
          ? { ...writer, followers: writer.followers - 1 }
          : writer
      )
    );
  };

  const handleCommentSubmit = (id: string, comment: string) => {
    setWriters((prev) =>
      prev.map((writer) =>
        writer.id === id
          ? { ...writer, comments: [...writer.comments, comment] }
          : writer
      )
    );
  };

  const handleRating = (id: string, rating: number) => {
    setWriters((prev) =>
      prev.map((writer) =>
        writer.id === id
          ? { ...writer, rating }
          : writer
      )
    );
  };

  const filteredWriters = writers.filter((writer) =>
    writer[filter].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex gap-4">
          <Input
            placeholder="Search writers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="username">Username</option>
            <option value="category">Category</option>
            <option value="genre">Genre</option>
          </select>
        </div>

        <div className="space-y-6">
          {filteredWriters.map((writer) => (
            <div key={writer.id} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">@{writer.username}</h3>
                  <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <span className="capitalize">{writer.category}</span>
                    <span>•</span>
                    <span className="capitalize">{writer.genre}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() =>
                    writer.followers > 1234
                      ? handleUnfollow(writer.id)
                      : handleFollow(writer.id)
                  }
                >
                  <UserPlus className="w-4 h-4" />
                  {writer.followers > 1234 ? 'Following' : 'Follow'}
                </Button>
              </div>

              <p className="text-gray-700 mb-4">{writer.content}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span>{writer.rating}</span>
                  </div>
                  <div
                    className="flex items-center cursor-pointer transition-transform transform hover:scale-110"
                    onClick={() => toggleLike(writer.id)}
                  >
                    <Heart className="w-5 h-5 text-red-500 mr-1 animate-heart" />
                    <span>{writer.likes}</span>
                  </div>
                </div>
                <Button size="sm">Rate & Review</Button>
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                      handleCommentSubmit(writer.id, e.currentTarget.value);
                      e.currentTarget.value = '';
                    }
                  }}
                />
                <div className="mt-2 space-y-2">
                  {writer.comments.map((comment, idx) => (
                    <div key={idx} className="text-sm text-gray-600">
                      {comment}
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating System with Animation */}
              <div className="flex items-center mt-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 cursor-pointer ${
                      writer.rating >= star ? 'text-yellow-400' : 'text-gray-300'
                    } transition-colors`}
                    onClick={() => handleRating(writer.id, star)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
