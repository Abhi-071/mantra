import { create } from 'zustand';
import type { User, AuthState } from '../types/auth';

interface AuthStore extends AuthState {
  login: (user: User) => void;
  logout: () => void;
}

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false })
}));