import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  PenSquare, 
  Users, 
  MessageSquare, 
  Bell, 
  Settings,
  Search,
  User,
  LogOut
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', path: '/home' },
  { icon: PenSquare, label: 'Write', path: '/write' },
  { icon: Users, label: 'Writers', path: '/writers' },
  { icon: MessageSquare, label: 'Messages', path: '/messages' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full">
        <div className="p-4">
          <Link to="/home" className="flex items-center space-x-2 mb-8">
            <PenSquare className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold">Mantra</span>
          </Link>
          
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg
                    ${isActive 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <div className="w-96">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              My Feed
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <User className="w-6 h-6" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <LogOut className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Page content */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};