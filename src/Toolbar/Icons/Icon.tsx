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
    case "save":
      return <Save />;
    default:
      return <></>;
  }
};
