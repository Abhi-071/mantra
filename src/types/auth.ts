export interface User {
  id: string;
  email: string;
  username: string;
  bio?: string;
  avatarUrl?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}