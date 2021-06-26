import React, { useRef, useEffect } from "react";
import { Painter } from "../Painter";
import { Range } from "./styled";

type RangeItemProps = {
  painter: Painter;
  minTickness?: number;
  maxTickness?: number;
};

export const RangeItem = ({ painter, minTickness, maxTickness }: RangeItemProps) => {
  const rangeRef = useRef(null);

  const handleThickness = (e: React.FormEvent<HTMLInputElement>) => {
    const range = e.target.value;
    painter.setOptions({ thickness: range });
  }

  useEffect(()=>{
    if(rangeRef.current) rangeRef.current.addEventListener('input', handleThickness);

    return () => {
      rangeRef.current.removeEventListener('input', handleThickness);
    }
  }, [rangeRef])

  return (
    <Range
      ref={rangeRef}
      type="range"
      min={minTickness}
      max={maxTickness}
      step="1"
      defaultValue={(minTickness + maxTickness) / 2}
    />
  );
};
