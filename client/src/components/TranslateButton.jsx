import React, { useEffect, useState } from 'react';
import { IoMdChatbubbles } from 'react-icons/io';
import { BsTranslate } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';

const TranslateButton = () => {
  const [isTranslateVisible, setIsTranslateVisible] = useState(false);

  useEffect(() => {
    // Load Google Translate API when the component mounts
    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(googleTranslateScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'hi,en,mr', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element'
      );
    };

    // Custom CSS for Google Translate widget
    const style = document.createElement('style');
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate, .goog-logo-link {
        display: none !important;
      }
      body {
        top: 0px !important;
      }
      #google_translate_element {
        width: auto !important;
        padding-top: 10px;
        position: absolute;
        z-index: 1000;
        right: 0;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, opacity 0.3s ease;
        transform: translateY(10px);
        opacity: 0;
        visibility: hidden;
      }
      #google_translate_element.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      .goog-te-gadget {
        font-size: 0px; /* Hide unwanted text */
      }
      .goog-te-combo {
        width: 100% !important;
        padding: 5px;
        background-color: #f3f4f6;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(style);
  }, []);

  const toggleTranslatePanel = () => {
    setIsTranslateVisible(!isTranslateVisible);
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end space-y-3">
      {/* Translate Button */}
      <div
        className="w-14 h-14 bg-yellow-600 rounded-full flex items-center justify-center cursor-pointer text-2xl text-white shadow-lg"
        onClick={toggleTranslatePanel}
      >
        <BsTranslate className="text-white text-3xl" />
      </div>

      {/* Google Translate Element */}
      <div
        id="google_translate_element"
        className={`fixed bottom-20 right-5 w-60 bg-white rounded-lg shadow-lg p-3 relative ${isTranslateVisible ? 'active' : ''}`}
      >
        <button
          className="absolute top-1 right-1 text-2xl text-gray-600 hover:text-gray-800"
          onClick={toggleTranslatePanel}
        >
          <MdCancel />
        </button>
      </div>

      {/* Chatbot Toggle Button */}
      <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer text-2xl text-white shadow-lg">
        <IoMdChatbubbles className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default TranslateButton;
