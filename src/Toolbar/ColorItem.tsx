import React from "react";
import { Round } from "./styled";

type ColorItemProps = {
  colors: object;
};

export const ColorItem = ({ colors }: ColorItemProps) => {
  return Object.values(colors).map((color) => {
    return <Round color={color} />;
  });
};
