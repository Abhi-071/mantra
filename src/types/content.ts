export type LiteraryFormat = 'poem' | 'story' | 'novel' | 'ghazal' | 'song';

export type Genre = 
  | 'romance' 
  | 'mystery' 
  | 'fantasy' 
  | 'science-fiction' 
  | 'horror' 
  | 'literary' 
  | 'historical' 
  | 'contemporary';

export interface Content {
  id: string;
  authorId: string;
  title: string;
  format: LiteraryFormat;
  genre: Genre;
  content: string;
  createdAt: string;
  likes: number;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  username: string;
  rating: number;
  comment: string;
  createdAt: string;
}