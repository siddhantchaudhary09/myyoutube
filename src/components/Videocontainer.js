import React, { useState } from "react";
import { useEffect } from "react";
import { Youtube_api } from "../Utils/Constants";
import Videocard from "./Videocard";

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
    <div>
      <Videocard info={Videos[0]} />
    </div>
  );
};

export default Videocontainer;
