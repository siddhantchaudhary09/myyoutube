import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMEnu } from "../Utils/appslice";
import { useEffect } from "react";
import { youtube_search_api } from "../Utils/Constants";
import { addcache } from "../Utils/searchslice";
const Head = () => {
  const dispacth = useDispatch();
  const [suggestions, setsuggestions] = useState([]);
  const [showsuggestions, setshowsuggestions] = useState(false);
  const [searchquery, setsearchquery] = useState("");

  const searchcache = useSelector((store) => store.search);

  const toggleMEnuhandler = () => {
    dispacth(toggleMEnu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchcache[searchquery]) {
        setsuggestions(searchcache[searchquery]);
      } else {
        searchsuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchquery]);

  const searchsuggestions = async () => {
    const data = await fetch(youtube_search_api + searchquery);
    const json = await data.json();
    setsuggestions(json[1]);
    dispacth(
      addcache({
        [searchquery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-4  shadow-lg cursor-pointer sticky top-0 bg-white ">
      <div className=" flex col-span-1">
        <img
          onClick={() => toggleMEnuhandler()}
          className="h-8 "
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
        />
        <a href="/">
          {" "}
          <img
            className="h-8 mx-2"
            alt="logo"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/059df0b4-8444-4b77-a472-0e70e7f33255/dero1o2-283777bf-e9d2-4a15-bc1d-af4a6f6a7639.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1OWRmMGI0LTg0NDQtNGI3Ny1hNDcyLTBlNzBlN2YzMzI1NVwvZGVybzFvMi0yODM3NzdiZi1lOWQyLTRhMTUtYmMxZC1hZjRhNmY2YTc2MzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.N5_0OfFYf2BnQyoLhmj0BjmjJlwegjB2nMGJ55MkYKg"
          />
        </a>
      </div>

      <div className="  col-span-10 px-20">
        <div>
          <input
            className="w-1/2 border-r-0 border border-gray-400 rounded-l-full px-6 py-2"
            type="text "
            value={searchquery}
            onChange={(e) => setsearchquery(e.target.value)}
            onFocus={() => setshowsuggestions(true)}
            onBlur={() => setshowsuggestions(false)}
          />
          <button className=" border border-gray-400 bg-gray-600 text-white rounded-r-full p-2">
            Search
          </button>
        </div>
        {showsuggestions && (
          <div className=" absolute bg-white rounded-lg shadow-lg   w-[427px] border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="hover:bg-gray-100 px-5 py-1.5 shadow-sm">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
