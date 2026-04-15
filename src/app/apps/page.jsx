"use client";
import React, { useState, useEffect } from 'react';

const TimelinePage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem('timelineData') || '[]');
      setActivities(data);
    }
  }, []);

  const deleteActivity = (id) => {
    const updatedActivities = activities.filter(item => item.id !== id);
    setActivities(updatedActivities);
    localStorage.setItem('timelineData', JSON.stringify(updatedActivities));
  };

  return (
    <div className='max-w-5xl mx-auto p-6 font-sans min-h-screen bg-white'>
      <h1 className="text-5xl font-black mb-8 text-[#113A30]">Timeline</h1>
      
      <div className="mb-8">
        <select className="p-3 border border-gray-200 rounded-xl text-gray-500 bg-white w-64 shadow-sm outline-none cursor-pointer">
          <option>Filter timeline</option>
          <option>Calls</option>
          <option>Texts</option>
          <option>Videos</option>
        </select>
      </div>

      <div className="space-y-4 sm:w-50 lg:w-250">
        {activities.length > 0 ? (
          activities.map((item) => (
            <div key={item.id} className="flex  items-center gap-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group relative">
              <div className="text-3xl bg-gray-50 p-4 rounded-full">
                {item.type === 'Call' && '📞'}
                {item.type === 'Text' && '💬'}
                {item.type === 'Video' && '📹'}
                {item.type === 'Meetup' && '🤝'}
              </div>

              <div className="flex-1">
                <p className="font-extrabold text-xl text-[#113A30]">
                  {item.type} <span className="font-medium text-gray-400">with {item.name}</span>
                </p>
                <p className="text-gray-400 font-bold text-sm mt-1">{item.date}</p>
              </div>
              <button 
                onClick={() => deleteActivity(item.id)}
                className="opacity-0 group-hover:opacity-100 p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
                title="Delete Activity"
              >
                🗑️
              </button>
            </div>
          ))
        ) : (
          <div className="p-20 border-2 border-dashed border-gray-100 rounded-[40px] text-center">
            <p className="text-gray-400 font-bold text-lg">No history found.</p>
            <p className="text-gray-300 text-sm">Click Call/Text/Video from profile to see activities here!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;