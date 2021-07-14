import React from "react";
import Microphone from "./Microphone";
import SearchingGlass from "./SearchingGlass";
import Carrot from "../CarrotMenu/Carrot";

export default function SearchBar() {
  return (
    <>
      <div className="w-full sm:w-3/4 md:w-3/5 mx-auto h-10 rounded-md bg-gray-500 flex">
        <input
          type="text"
          className="w-9/12 h-full bg-transparent px-2"
          placeholder="Search the web"
        />
        <button className="h-full w-1/12 flex items-center justify-center">
          <Microphone width={20} height={20} />
        </button>
        <button className="w-1/6 h-full bg-blue-600 hover:bg-blue-500 rounded-r-md flex items-center justify-center">
          <SearchingGlass width={22} height={22} />
        </button>
      </div>
    </>
  );
}
