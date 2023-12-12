import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.ismenuopen);

  if (!isMenuOpen) return null;
  return (
    <div className="m-2 p-2 w-[135rem] shadow-lg cursor-pointer  ">
      <ul className="">
        <li>
          <Link to={"/"}> Home</Link>
        </li>
        <li>Shorts</li>
        <li>Youtube Music</li>
      </ul>
      <h1 className=" font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Movies</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold pt-5"> Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Movies</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
