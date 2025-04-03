import React, { useState } from 'react';
import { Search, Plus, Send, Hash, User } from 'lucide-react';

const ChatSystem = () => {
  const [activeChat, setActiveChat] = useState('team-general');
  
  const chats = [
    { id: 'team-general', name: 'Team General', type: 'channel' },
    { id: 'project-alpha', name: 'Project Alpha', type: 'channel' },
    { id: 'john-doe', name: 'John Doe', type: 'direct' },
    { id: 'jane-smith', name: 'Jane Smith', type: 'direct' },
  ];

  return (
    <div className="h-screen flex bg-gray-900 text-white">
      {/* Chat Sidebar */}
      <div className="w-72 bg-gray-800 border-r border-gray-700 p-4 flex flex-col">
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        {/* Channels */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-400">Channels</h3>
            <button className="text-gray-400 hover:text-white">
              <Plus size={18} />
            </button>
          </div>
          {chats
            .filter(chat => chat.type === 'channel')
            .map(channel => (
              <button
                key={channel.id}
                onClick={() => setActiveChat(channel.id)}
                className={`w-full flex items-center gap-2 px-2 py-2 rounded-md mb-1
                  ${activeChat === channel.id ? 'bg-indigo-500 text-white' : 'hover:bg-gray-700'}`}
              >
                <Hash size={18} />
                <span>{channel.name}</span>
              </button>
            ))}
        </div>

        {/* Direct Messages */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-400">Direct Messages</h3>
            <button className="text-gray-400 hover:text-white">
              <Plus size={18} />
            </button>
          </div>
          {chats
            .filter(chat => chat.type === 'direct')
            .map(dm => (
              <button
                key={dm.id}
                onClick={() => setActiveChat(dm.id)}
                className={`w-full flex items-center gap-2 px-2 py-2 rounded-md mb-1
                  ${activeChat === dm.id ? 'bg-indigo-500 text-white' : 'hover:bg-gray-700'}`}
              >
                <User size={18} />
                <span>{dm.name}</span>
              </button>
            ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-900">
        {/* Chat Header */}
        <div className="h-16 border-b border-gray-700 px-6 flex items-center bg-gray-800">
          <h2 className="text-lg font-semibold">
            {chats.find(chat => chat.id === activeChat)?.name}
          </h2>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
          {/* Sample Messages */}
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-600 flex-shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">John Doe</span>
                <span className="text-sm text-gray-500">10:30 AM</span>
              </div>
              <p className="bg-gray-800 p-3 rounded-lg text-gray-300">Hey team! How's everyone doing today?</p>
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <div>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-sm text-gray-500">10:32 AM</span>
                <span className="font-semibold">Jane Smith</span>
              </div>
              <p className="bg-indigo-500 p-3 rounded-lg text-white">Going great! Just finished the new feature implementation.</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-600 flex-shrink-0" />
          </div>
        </div>

        {/* Message Input */}
        <div className="h-20 border-t border-gray-700 p-4 bg-gray-800 flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full pl-4 pr-12 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="absolute right-3 top-3 text-gray-400 hover:text-indigo-500">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatSystem;
