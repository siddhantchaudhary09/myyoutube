import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appslice";
import { useSearchParams } from "react-router-dom";
import Commentcontainer from "./Commentcontainer";

const Watchpage = () => {
  const [searchparams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <div>
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchparams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="m-2 p-2">
        <h1 className="font-bold text-2xl">Comments:</h1>
        <Commentcontainer />
      </div>
    </div>
  );
};

export default Watchpage;
