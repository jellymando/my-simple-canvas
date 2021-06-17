import React from "react";

const DrawRec = ({
  width = "26",
  height = "26",
  viewBox = "0 0 26 26",
  color,
  ...props
}) => (
  <svg {...props} width={width} height={height} viewBox={viewBox}>
    <path
      d="M23 3v20H3V3h20zm-2 2H5v16h16V5z"
      fill={color || "#ffffff"}
      fillRule="nonzero"
    />
  </svg>
);

export default DrawRec;
