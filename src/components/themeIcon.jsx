import React, { useContext } from "react";
import ThemeContext from "../Theme/Theme";
import { MoonIcon } from "@heroicons/react/24/solid";

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button
      onClick={toggleDarkMode}
      className="rounded-lg border-1 border-neutral-100 p-2 absolute right-8 xl:right-32  shadow-lg"
    >
      <MoonIcon
        className={`h-6 w-8 cursor-pointer stroke-1  stroke-blue-900 ${
          darkMode ? "stroke-yellow-500 fill-yellow-500 " : "fill-none stroke-black"
        }`}
      />
    </button>
  );
};

export default ThemeIcon;
