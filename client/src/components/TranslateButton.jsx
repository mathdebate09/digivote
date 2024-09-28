import React, { useState } from 'react';
import { IoMdChatbubbles } from 'react-icons/io';
import { MdCancel } from 'react-icons/md';
import { FiSend, FiGlobe } from 'react-icons/fi';
import { BsTranslate } from 'react-icons/bs';

const TranslateButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle page translation
  const translatePage = () => {
    console.log('Translate page button clicked');
  };

  // Function to handle translation button click
  const handleTranslateClick = () => {
    console.log('Translate button clicked');
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end space-y-3">

      {/* Translate Button */}
      <div
        className="w-14 h-14 bg-yellow-600 rounded-full flex items-center justify-center cursor-pointer text-2xl text-white shadow-lg"
        onClick={handleTranslateClick}
      >
        <BsTranslate className="text-white text-3xl" />
      </div>

      {/* Chatbot Toggle Button */}
      <div
        className={`w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer text-2xl text-white shadow-lg ${isOpen ? 'hidden' : ''}`}
        onClick={toggleButton}
      >
        <IoMdChatbubbles className="text-white text-3xl" />
      </div>

      {/* Chatbot Window */}
      <div
        className={`fixed bottom-20 right-5 w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}
      >
        <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
          <span className="font-semibold">Anuvaad</span>
          <button onClick={toggleButton} className="text-xl">
            <MdCancel className="text-white text-2xl" />
          </button>
        </div>
        <div className="p-3 flex-1 overflow-y-auto bg-gray-100 flex flex-col">
          {/* Messages will be logged to the console */}
        </div>
        <div className="flex p-3 border-t border-gray-300">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={translatePage}
            className="ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiSend className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslateButton;