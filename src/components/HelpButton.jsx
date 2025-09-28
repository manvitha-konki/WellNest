import React from 'react';

const HelpButton = () => {
  const handleClick = () => {
    window.open('http://localhost:5173/help', '_blank');
  };

  return (
    <button
    onClick={handleClick}
    className="fixed left-20 gap-2 bottom-5 left-5 z-50 px-4 py-3 bg-red-400 text-white rounded-xl shadow-md hover:bg-red-500 transition duration-200 hover:scale-105 cursor-pointer"
    >
    🤖 Need help?
    </button>
  );
};

export default HelpButton;