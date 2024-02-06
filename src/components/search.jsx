import React, { useState } from "react";
import { useContext } from "react";
import { mockSearchResults } from "../constants";
import {
  XMarkIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Searchresults from "./Searchresults";
import ThemeContext from "../Theme/Theme";
import { searchSymbols } from "../api/stock-api";
const Search = () => {
  const { darkMode } = useContext(ThemeContext);
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };
  const UpdateBestMatches = async() => {
    try{
          if(input){
            const searchResults=await searchSymbols(input);
            const result =searchResults.result;
            setBestMatches(result)

          }
    }
    catch(error){
      setBestMatches([]);
      console.log(error);

    }
  };
  return (
    <div
      className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96  border-neutral-200 ${
        darkMode ? "bg-[#443873] border-gray-500" : "bg-white"
      } `}
    >
      <input
        onChange={(event) => {
          setInput(event.target.value);
        }}
        placeholder="search stock...."
        className={`w-full px-4 py-2 focus:outline-none rounded-md ${
          darkMode ? "bg-[#443873] border-gray-500" : "bg-white"
        }`}
        type="text"
        value={input}
        onKeyUp={(event) => {
          if (event.key != null) {
            UpdateBestMatches();
          }
        }}
      />
      {input && (
        <button className=" px-3" onClick={clear}>
          <XMarkIcon className="h-4 w-4 fill-gray-500" />
        </button>
      )}
      <button
        onClick={UpdateBestMatches}
        className="h-full w-8 bg-indigo-600 rounded-md flex items-center   p-2"
      >
        <MagnifyingGlassIcon className="h-5 text-white " />
      </button>
      {input && bestMatches.length > 0 ? (
        <Searchresults results={bestMatches} />
      ) : null}
    </div>
  );
};

export default Search;
