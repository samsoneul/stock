import React, { useContext } from "react";
import ThemeContext from "../Theme/Theme";
import { MoonIcon } from "@heroicons/react/24/solid";

const themeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const toggleDarkMode=()=>{
    setDarkMode(!darkMode);
  }
  return (
    <button onClick={toggleDarkMode} className="rouned-lg border-1 border-neutral-100 p-2 absoluteright-8 xl:right-32  shadow-lg">
      <MoonIcon className="h-6 w-8 cursor-pointer stroke-1 fill-none stroke-neutal-400" />{" "}
    </button>
  );
};

export default themeIcon;
