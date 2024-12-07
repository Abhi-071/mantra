export interface Notification {
  id: string;
  type: 'new_post' | 'like' | 'comment' | 'follow';
  userId: string;
  username: string;
  content: string;
  createdAt: string;
  read: boolean;
}