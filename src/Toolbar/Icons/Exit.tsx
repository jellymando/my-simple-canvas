import React from "react";

const Exit = ({
  width = "26",
  height = "26",
  viewBox = "0 0 26 26",
  color,
  ...props
}) => (
  <svg {...props} width={width} height={height} viewBox={viewBox}>
    <g fill={color || "#ffffff"} fillRule="nonzero">
      <path d="M6.27 6.27a.928.928 0 011.27-.036l.039.037 12.15 12.15a.925.925 0 01-1.268 1.345l-.04-.037L6.271 7.58a.925.925 0 010-1.308z" />
      <path d="M19.73 6.27a.928.928 0 00-1.27-.036l-.039.037-12.15 12.15a.925.925 0 001.268 1.345l.04-.037L19.729 7.58a.925.925 0 000-1.308z" />
    </g>
  </svg>
);

export default Exit;
