import React from "react";
import AllClear from "./AllClear";
import Save from "./Save";

type IconProps = {
  name: string;
};

export const Icon = ({ name: iconName }: IconProps) => {
  switch (iconName) {
    case "allClear":
      return <AllClear />;
    case "draw":
      return <Save />;
    default:
      return <></>;
  }
};
