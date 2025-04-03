import React from 'react';
import { Bell, MessageSquare, Calendar, AlertCircle, CheckCircle, X } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'New message from Sarah',
      description: 'Hey, can we discuss the project timeline?',
      time: '5 minutes ago',
      icon: MessageSquare,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      id: 2,
      type: 'calendar',
      title: 'Upcoming meeting',
      description: 'Team standup in 30 minutes',
      time: '25 minutes ago',
      icon: Calendar,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20'
    },
    {
      id: 3,
      type: 'alert',
      title: 'Project deadline approaching',
      description: 'Marketing campaign due in 2 days',
      time: '1 hour ago',
      icon: AlertCircle,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/20'
    },
    {
      id: 4,
      type: 'success',
      title: 'Task completed',
      description: 'Homepage redesign has been approved',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Notifications</h1>
        <p className="text-white/70">Stay updated with your latest activities</p>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/10">
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Recent Notifications</h2>
            <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
              Mark all as read
            </button>
          </div>
        </div>

        <div className="divide-y divide-white/10">
          {notifications.map(notification => (
            <div key={notification.id} className="p-4 hover:bg-white/5 transition-colors">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-full ${notification.bgColor}`}>
                  <notification.icon className={notification.color} size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white">{notification.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{notification.description}</p>
                  <span className="text-white/50 text-xs mt-2 block">{notification.time}</span>
                </div>
                <button className="text-white/50 hover:text-white/70 p-1 hover:bg-white/10 rounded-full transition-colors">
                  <X size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-white/10">
          <button className="w-full text-center text-emerald-400 hover:text-emerald-300 text-sm font-medium">
            View all notifications
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notifications;