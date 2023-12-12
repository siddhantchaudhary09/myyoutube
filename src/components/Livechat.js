import React from "react";

const Livechat = ({ name, message }) => {
  return (
    <div className="flex items-center  w-full  p-1 shadow-lg ">
      <div>
        <img
          className=" h-10 w-10 mt-2"
          alt="userimg"
          src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
        />
      </div>
      <div className=" p-2">
        <span className="font-bold">{name}:</span>
        <span> {message}</span>
      </div>
    </div>
  );
};

export default Livechat;
