import React from "react";

const DrawCircle = ({
  width = "26",
  height = "26",
  viewBox = "0 0 26 26",
  color,
  ...props
}) => (
  <svg {...props} width={width} height={height} viewBox={viewBox}>
    <path
      d="M13 2c6.075 0 11 4.925 11 11s-4.925 11-11 11S2 19.075 2 13 6.925 2 13 2zm0 2a9 9 0 10.001 18.001A9 9 0 0013 4z"
      fill={color || "#ffffff"}
      fillRule="nonzero"
    />
  </svg>
);

export default DrawCircle;
