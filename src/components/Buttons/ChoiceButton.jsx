// ChoiceButton.js
import React from "react";

const ChoiceButton = ({ text, isSelected, onToggle }) => {
  return (
    <div className="text-start">
      <button
        onClick={onToggle}
        className={`px-6 py-2 ${
          isSelected
            ? "bg-versich-blue text-white"
            : "bg-gray-200 text-gray-800"
        } rounded-md`}
      >
        {text}
      </button>
    </div>
  );
};

export default ChoiceButton;
