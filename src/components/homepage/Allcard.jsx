"use client";
import React, { useState } from 'react';
import books from '../../../public/booksData.json';

const Allcard = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const handleCheckIn = (type, name) => {
    const newActivity = {
      type: type,
      name: name,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      id: Date.now()
    };

    const existingTimeline = JSON.parse(localStorage.getItem('timelineData') || '[]');
    const updatedTimeline = [newActivity, ...existingTimeline];
    localStorage.setItem('timelineData', JSON.stringify(updatedTimeline));
    alert(`${type} record for ${name} added to Timeline!`);
  };
  const statusStyles = {
    work: 'bg-[#CBFADB] text-green-800',
    family: 'bg-[#CBFADB] text-green-800',
    overdue: 'bg-[#FF4D4D] text-white',
    default: 'bg-gray-100 text-gray-700'
  };

  if (selectedBook) {
    return (
      <div className='my-12  max-w-7xl mx-auto px-6 font-sans bg-[#F8FAFB] min-h-screen p-6 md:p-10 rounded-20 md:rounded-[50px]'>
        <div className="grid grid-cols-1 sm:w-50 lg:w-250 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="flex flex-col  gap-6">
            <div className="bg-white  p-8 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <img src={selectedBook.img} alt="" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-50 shadow-md" />
              <h2 className="text-2xl font-black text-[#113A30] mb-2">{selectedBook.name}</h2>
              <div className="flex  flex-col gap-2 mb-4 w-full">
                <span className="bg-[#FF4D4D] text-white py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ">Overdue</span>
                <span className="bg-[#CBFADB] text-green-800 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider">{selectedBook.status}</span>
              </div>
              <p className="text-gray-500 italic font-bold text-sm mb-1 line-clamp-2">"Former colleague, great mentor"</p>
              <p className="text-gray-400 text-xs font-semibold">Preferred: email</p>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-100 font-bold text-[#113A30] hover:bg-gray-50">⏰ Snooze 2 Weeks</button>
              <button className="w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-100 font-bold text-[#113A30] hover:bg-gray-50">📁 Archive</button>
              <button className="w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-100 font-bold text-red-500 hover:bg-red-50">🗑️ Delete</button>
            </div>
          </div>

          <div className="flex flex-col w-150  gap-6">
            <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
              <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100 text-center">
                <p className="text-5xl font-black text-[#113A30]">62</p>
                <p className="text-gray-400 font-bold text-xs mt-2 uppercase tracking-wide">Days Since Contact</p>
              </div>
              <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100 text-center">
                <p className="text-5xl font-black text-[#113A30]">30</p>
                <p className="text-gray-400 font-bold text-xs mt-2 uppercase tracking-wide">Goal (Days)</p>
              </div>
              <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100 text-center flex flex-col justify-center">
                <p className="text-xl font-black text-[#113A30]">Feb 27, 2026</p>
                <p className="text-gray-400 font-bold text-xs mt-2 uppercase tracking-wide">Next Due</p>
              </div>
            </div>

            <div className="bg-white w-150 p-8 rounded-[20px] shadow-sm border border-gray-100 flex justify-between items-center">
              <div>
                <h4 className="text-xl font-black text-[#113A30]">Relationship Goal</h4>
                <p className="text-gray-500 font-bold text-sm">Connect every <span className="text-[#113A30]">30 days</span></p>
              </div>
              <button className="bg-gray-50 px-6 py-2 rounded-xl text-gray-500 font-black border border-gray-100 text-xs">Edit</button>
            </div>

            <div className="bg-white w-150 p-8 rounded-[30px] shadow-sm border border-gray-100">
              <h4 className="text-xl font-black text-[#113A30] mb-6">Quick Check-In</h4>
              <div className="grid grid-cols-3  gap-4">
                <button
                  onClick={() => handleCheckIn('Call', selectedBook.name)}
                  className="border-2 border-gray-50 p-6 rounded-[25px] flex flex-col items-center gap-2 hover:bg-green-50 transition active:scale-95"
                >
                  <span className="text-2xl">📞</span>
                  <span className="font-black text-[#113A30] text-sm">Call</span>
                </button>
                <button
                  onClick={() => handleCheckIn('Text', selectedBook.name)}
                  className="border-2 border-gray-50 p-6 rounded-[25px] flex flex-col items-center gap-2 hover:bg-blue-50 transition active:scale-95"
                >
                  <span className="text-2xl">💬</span>
                  <span className="font-black text-[#113A30] text-sm">Text</span>
                </button>
                <button
                  onClick={() => handleCheckIn('Video', selectedBook.name)}
                  className="border-2 border-gray-50 p-6 rounded-[25px] flex flex-col items-center gap-2 hover:bg-purple-50 transition active:scale-95"
                >
                  <span className="text-2xl">📹</span>
                  <span className="font-black text-[#113A30] text-sm">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='my-12 max-w-7xl mx-auto px-6 font-sans'>
      <h2 className='font-extrabold text-3xl md:text-4xl mb-12 text-[#113A30]'>Your Friends</h2>
      <div className='grid grid-cols-1 lg:w-250 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {books.map((book) => (
          <div
            key={book.id}
            onClick={() => setSelectedBook(book)}
            className="bg-white border border-gray-100 p-6 rounded-[24px] shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col items-center text-center space-y-4"
          >
            <img src={book.img} alt={book.name} className="w-20 h-20 rounded-full object-cover border-4 border-gray-50 shadow-sm" />
            <h3 className="font-bold text-xl text-[#113A30] leading-tight">{book.name}</h3>
            <p className="text-blue-500 font-semibold text-sm">{book.lastActive}</p>
            <p className={`py-1.5 rounded-full font-black text-[10px] w-full uppercase tracking-wider ${statusStyles[book.status?.toLowerCase()] || statusStyles.default}`}>
              {book.status}
            </p>
            <p className='text-white bg-[#FF4D4D] rounded-full w-full py-2 font-black text-[11px] shadow-sm uppercase tracking-tighter'>
              Almost Due
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allcard;