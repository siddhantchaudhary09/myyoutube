import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../Utils/appslice";
import { useSearchParams } from "react-router-dom";
import Commentcontainer from "./Commentcontainer";
import Livechat from "./Livechat";
import { addmessage } from "../Utils/chatslice";
import { generateRandomText, generatename } from "../Utils/Helper";

const Watchpage = () => {
  const [searchparams] = useSearchParams();
  const dispacth = useDispatch();
  const [livesearch, setlivesearch] = useState();

  const messagesslices = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("api polling");

      dispacth(
        addmessage({
          name: generatename(),
          Message: generateRandomText(20),
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-full">
      <div className="flex ">
        <div>
          <iframe
            width="1100"
            height="600"
            src={"https://www.youtube.com/embed/" + searchparams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <div className="flex flex-col-reverse w-full border border-black ml-2 bg-gray-200 overflow-y-scroll h-[600px] ">
            {messagesslices.map((msg, i) => (
              <Livechat name={msg.name} key={i} message={msg.Message} />
            ))}
          </div>
          <div className=" border border-black ml-2 p-2">
            <input className="border border-gray-200"></input>
            <button className="bg-green-200 rounded-lg px-3 mx-2">Send</button>
          </div>
        </div>
      </div>

      <div className="m-2 p-2">
        <h1 className="font-bold text-2xl">Comments:</h1>
        <Commentcontainer />
      </div>
    </div>
  );
};

export default Watchpage;
