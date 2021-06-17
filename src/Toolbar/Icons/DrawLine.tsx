import React from "react";

const DrawLine = ({
  width = "26",
  height = "26",
  viewBox = "0 0 26 26",
  color,
  ...props
}) => (
  <svg {...props} width={width} height={height} viewBox={viewBox}>
    <path
      d="M21.678 3.293l1.414 1.414L4.707 23.092l-1.414-1.414z"
      fill={color || "#ffffff"}
      fillRule="nonzero"
    />
  </svg>
);

export default DrawLine;
