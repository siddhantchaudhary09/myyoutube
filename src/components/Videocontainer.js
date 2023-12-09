import React, { useState } from "react";
import { useEffect } from "react";
import { Youtube_api } from "../Utils/Constants";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    getvideos();
  }, []);

  const getvideos = async () => {
    const data = await fetch(Youtube_api);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap ">
      {Videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <Videocard key={video.id} info={video} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
