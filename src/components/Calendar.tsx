import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, MapPin, Search, Plus, Send, Hash, User } from 'lucide-react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const events = [
    {
      id: 1,
      title: 'Team Meeting',
      time: '10:00 AM',
      attendees: 8,
      location: 'Conference Room A',
      type: 'meeting'
    },
    {
      id: 2,
      title: 'Project Review',
      time: '2:00 PM',
      attendees: 5,
      location: 'Virtual',
      type: 'review'
    },
    {
      id: 3,
      title: 'Client Presentation',
      time: '4:00 PM',
      attendees: 12,
      location: 'Main Hall',
      type: 'presentation'
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Calendar</h1>
        <p className="text-gray-600">Manage your schedule and events</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Widget */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">December 2025</h2>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <CalendarIcon size={20} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-sm font-medium text-gray-500">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 31 }, (_, i) => (
              <button
                key={i}
                onClick={() => setSelectedDate(new Date(2025, 11, i + 1))}
                className={`aspect-square flex items-center justify-center rounded-lg text-sm
                  ${selectedDate.getDate() === i + 1 ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Today's Events</h2>
          <div className="space-y-4">
            {events.map(event => (
              <div key={event.id} className="border-l-4 border-indigo-500 pl-4 py-2">
                <h3 className="font-medium">{event.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{event.attendees}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
