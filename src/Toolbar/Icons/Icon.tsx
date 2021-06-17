import React from "react";
import AllClear from "./AllClear";
import Draw from "./Draw";
import Eraser from "./Eraser";

type IconProps = {
  name: string;
};

export const Icon = ({ name: iconName }: IconProps) => {
  switch (iconName) {
    case "allClear":
      return <AllClear />;
    case "draw":
      return <Draw />;
    case "eraser":
      return <Eraser />;
    default:
      return <></>;
  }
};
