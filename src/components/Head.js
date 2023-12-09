import React from "react";
import { useDispatch } from "react-redux";
import { toggleMEnu } from "../Utils/appslice";

const Head = () => {
  const dispacth = useDispatch();

  const toggleMEnuhandler = () => {
    dispacth(toggleMEnu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg cursor-pointer">
      <div className=" flex col-span-1">
        <img
          onClick={() => toggleMEnuhandler()}
          className="h-8 "
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
        />
        <img
          className="h-8 mx-2"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        />
      </div>

      <div className=" flex col-span-10 px-20">
        <input
          className="w-1/2 border-r-0 border border-gray-400 rounded-l-full px-6"
          type="text "
        />
        <button className=" border border-gray-400 bg-gray-600 text-white rounded-r-full p-2">
          Search
        </button>
      </div>
      <div className=" col-span-1">
        <img
          className=" h-10"
          alt="usericon"
          src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
        />
      </div>
    </div>
  );
};

export default Head;
