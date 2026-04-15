"use client";
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const AnalyticsPage = () => {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({ Call: 0, Text: 0, Video: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const savedData = JSON.parse(localStorage.getItem('timelineData') || '[]');
    
    const counts = savedData.reduce((acc, item) => {
      if (item.type && acc.hasOwnProperty(item.type)) {
        acc[item.type] = (acc[item.type] || 0) + 1;
      }
      return acc;
    }, { Call: 0, Text: 0, Video: 0 });

    setStats(counts);
    
    const chartFormat = Object.keys(counts).map(key => ({
      name: key,
      value: counts[key]
    })).filter(item => item.value > 0);

    setData(chartFormat);
  }, []);
  const COLORS_MAP = {
    Call: '#113A30',
    Text: '#CBFADB',
    Video: '#FF4D4D'
  };

  if (!isClient) return null;

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="bg-white p-8 rounded-[40px] shadow-sm w-full max-w-md border border-gray-100">
        <h2 className="text-[#113A30] font-black text-xl mb-6 text-center">Contact Method Distribution</h2>
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS_MAP[entry.name] || '#ccc'} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          {data.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLORS_MAP[item.name] }}></div>
              <span className="text-xs font-bold text-gray-500">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10 w-full max-w-md">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="bg-white p-6 rounded-[25px] border border-gray-100 text-center shadow-sm">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{key}</p>
            <p className="text-4xl font-black text-[#113A30] mt-2">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsPage;