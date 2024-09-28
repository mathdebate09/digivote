import React, { useState } from "react";

import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

import sorry from "../assets/logos/sorry.png";
import SampleVideo from "../assets/videos/SampleVideo.mp4";

const SignButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-40 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Sign Language Button */}
      <div
        className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-purple-600 text-2xl text-white shadow-lg"
        onClick={toggleButton}
      >
        <FaAmericanSignLanguageInterpreting className="text-3xl text-white" />
      </div>

      {/* Sign Language Popup */}
      <div
        className={`fixed bottom-20 right-5 flex h-96 w-80 flex-col justify-between rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "flex" : "hidden"}`}
      >
        <div className="flex items-center justify-between rounded-t-lg bg-purple-600 p-3 text-white">
          <span className="font-semibold">Sign Language</span>
          <button onClick={toggleButton} className="text-xl">
            <MdCancel className="text-2xl text-white" />
          </button>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto bg-gray-100 p-3">
          <video
            src={SampleVideo}
            autoPlay
            loop
            className="mb-4 h-3/4 w-3/4 object-contain"
          />
          <img
            src={sorry}
            alt="sorry"
            className="mb-4 h-0 w-0 object-contain"
          />
          <p className="text-center text-gray-700">
            This feature is in the building phase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignButton;
