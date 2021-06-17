import React from "react";
import { Range } from "./styled";

type RangeItemProps = {
  minTickness?: number;
  maxTickness?: number;
};

export const RangeItem = ({ minTickness, maxTickness }: RangeItemProps) => {
  return (
    <Range
      type="range"
      min={minTickness}
      max={maxTickness}
      step="1"
      value={(minTickness + maxTickness) / 2}
    />
  );
};
