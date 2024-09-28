import React, { useEffect, useState } from 'react';
import { IoMdChatbubbles } from 'react-icons/io';
import { BsTranslate } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';

const TranslateButton = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Track the current language

  useEffect(() => {
    // Load Google Translate API when the component mounts
    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(googleTranslateScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'hi,en', autoDisplay: false },
        'google_translate_element'
      );
    };

    // Hide the widget but allow translation
    const style = document.createElement('style');
    style.innerHTML = `
      #google_translate_element {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const toggleLanguage = () => {
    const selectElement = document.querySelector('.goog-te-combo');

    if (selectElement) {
      if (currentLanguage === 'en') {
        // Change to Hindi
        selectElement.value = 'hi';
        setCurrentLanguage('hi');
      } else {
        // Change back to English
        selectElement.value = 'en';
        setCurrentLanguage('en');
      }
      selectElement.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end space-y-3">
      {/* Translate Button */}
      <div
        className="w-14 h-14 bg-yellow-600 rounded-full flex items-center justify-center cursor-pointer text-2xl text-white shadow-lg"
        onClick={toggleLanguage}
      >
        <BsTranslate className="text-white text-3xl" />
      </div>

      {/* Google Translate Element (hidden) */}
      <div id="google_translate_element"></div>

      {/* Chatbot Toggle Button */}
      <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer text-2xl text-white shadow-lg">
        <IoMdChatbubbles className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default TranslateButton;
