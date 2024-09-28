// src/components/ChangeTextSize.js
import React, { useState } from "react";

export function ChangeTextSize({ onChange }) {
  const [textSize, setTextSize] = useState(0);

  // Function to cycle between text sizes
  const changeSize = () => {
    const newSize = (textSize + 1) % 3; // Cycle between 0, 1, and 2
    setTextSize(newSize);
    onChange(newSize); // Pass the new size to parent via onChange callback
  };

  return (
    <button
      onClick={changeSize}
      className="mb-4 rounded bg-gray-300 p-2 hover:bg-gray-400"
    >
      Change Text Size
    </button>
  );
}
