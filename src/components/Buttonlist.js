import React from "react";
import Button from "./Button";

const Buttonlist = () => {
  return (
    <div className=" flex">
      <Button name="All" />
      <Button name="Music" />
      <Button name="Movies" />
      <Button name="Gaming" />
      <Button name="Sports" />
      <Button name="News" />
      <Button name="Cooking" />
    </div>
  );
};

export default Buttonlist;
