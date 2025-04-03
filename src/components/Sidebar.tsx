import React from 'react';
import { 
  BarChart3, 
  MessageSquare, 
  Bell, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  Home,
  Bot
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  setActiveTab, 
  isSidebarOpen, 
  setIsSidebarOpen 
}) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'chat', icon: MessageSquare, label: 'Chat' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'statistics', icon: BarChart3, label: 'Statistics' },
    { id: 'ai-assistant', icon: Bot, label: 'AI Assistant' },
  ];

  return (
    <div className="h-screen p-4 flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h1 className={`font-bold text-xl ${!isSidebarOpen && 'hidden'}`}>Workflow</h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-1 hover:bg-indigo-600 rounded-lg"
        >
          {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <nav className="flex-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors
              ${activeTab === item.id ? 'bg-indigo-600' : 'hover:bg-indigo-600'}`}
          >
            <item.icon size={20} />
            {isSidebarOpen && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;