import React, { useState, useEffect } from "react";
import { Painter } from "../Painter";
import { Round } from "./styled";

type ColorItemProps = {
  painter: Painter;
  colors: string | string[];
};

export const ColorItem = ({ painter, colors }: ColorItemProps) => {
  const [currentColor, setCurrentColor] = useState(typeof colors === "string" ? colors : colors[0]);

  const handleStrokeColor = (color) => {
    setCurrentColor(color)
  }

  useEffect(() => {
      console.log('currentColor', currentColor);
      painter.setOptions({ color: currentColor });
  }, [currentColor])

  return (
    typeof colors === "string" ?
      <Round active={currentColor === colors} color={colors} onClick={() => handleStrokeColor(colors)} key={colors} />
    : colors.map((color) => {
      return <Round active={currentColor === color} color={color} onClick={() => handleStrokeColor(color)} key={color} />;
    })
  )
};
