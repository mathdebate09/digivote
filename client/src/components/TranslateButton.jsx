import React, { useEffect } from "react";

function TranslateButton() {
  useEffect(() => {
    // Load Google Translate API
    const googleTranslateScript = document.createElement("script");
    googleTranslateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(googleTranslateScript);
  }, []);

  const handleTranslate = () => {
    const translateElement = window.google.translate.TranslateElement.getInstance();
    if (translateElement) {
      translateElement.show();
    }
  };

  return (
    <div>
    <button
    onClick={handleTranslate}
    className="bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-150"
    >
    Translate
    </button>
    </div>
  );
}

export default TranslateButton;
