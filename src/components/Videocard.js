import React from "react";

const Videocard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      {
        <img
          alt="thumbnail"
          src={thumbnails.medium.url}
          className="rounded-lg  "
        />
      }
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
      </ul>
    </div>
  );
};

export default Videocard;
