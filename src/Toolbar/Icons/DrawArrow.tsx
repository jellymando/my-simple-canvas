import React from "react";

const DrawArraw = ({
  width = "26",
  height = "26",
  viewBox = "0 0 26 26",
  color,
  ...props
}) => (
  <svg {...props} width={width} height={height} viewBox={viewBox}>
    <g fill={color || "#ffffff"} fillRule="nonzero">
      <path d="M15.293 9.293l1.414 1.414-12 12-1.414-1.414z" />
      <path d="M19.437 14.851L23.581 2.42 11.15 6.563l8.288 8.288zm.981-9.27l-1.855 5.567-3.712-3.712 5.567-1.855z" />
    </g>
  </svg>
);

export default DrawArraw;
