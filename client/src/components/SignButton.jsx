import React, { useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { FaAmericanSignLanguageInterpreting } from 'react-icons/fa';
import SampleVideo from "../assets/videos/SampleVideo.mp4";
import sorry from "../assets/logos/sorry.png";

const SignButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-40 right-6 flex flex-col items-end space-y-3 z-50">
      {/* Sign Language Button */}
      <div
        className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer text-2xl text-white shadow-lg"
        onClick={toggleButton}
      >
        <FaAmericanSignLanguageInterpreting className="text-white text-3xl" />
      </div>

      {/* Sign Language Popup */}
      <div
        className={`fixed bottom-20 right-5 w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}
      >
        <div className="bg-purple-600 text-white p-3 rounded-t-lg flex justify-between items-center">
          <span className="font-semibold">Sign Language</span>
          <button onClick={toggleButton} className="text-xl">
            <MdCancel className="text-white text-2xl" />
          </button>
        </div>
        <div className="p-3 flex-1 overflow-y-auto bg-gray-100 flex flex-col items-center justify-center">
          <video src={SampleVideo} autoPlay loop className="w-3/4 h-3/4 object-contain mb-4" />
          <img src={sorry} alt='sorry' className="w-0 h-0 object-contain mb-4" />
          <p className="text-center text-gray-700">This feature is in the building phase.</p>
        </div>
      </div>
    </div>
  );
};

export default SignButton;