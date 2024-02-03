import React from "react";

const ChartFIlter = ({ text, active, onClick }) => {
  return (
    <button
      className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${
        active
          ? "border-indigo-600 text-gray-100 bg-indigo-600"
          : "border-indigo-600 text-indigo-600 "
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ChartFIlter;
