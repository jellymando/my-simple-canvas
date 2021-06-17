import React from "react";

const KmControl = ({
  width = "26",
  height = "26",
  viewBox = "0 0 26 26",
  color,
  ...props
}) => (
  <svg {...props} width={width} height={height} viewBox={viewBox}>
    <g fill={color || "#ffffff"} fillRule="nonzero">
      <path d="M11.664 21.424l.06.11c.43.696 1.511.6 1.79-.208l2.111-6.114 6-2.356c.83-.326.851-1.491.035-1.848L5.4 3.918c-.845-.37-1.697.505-1.306 1.34l7.57 16.166zM7.029 6.809l11.618 5.067-4.181 1.643-.113.052a1.006 1.006 0 00-.467.552l-1.457 4.219-5.4-11.533z" />
      <path d="M13.588 14.678l1.337-1.487 7.487 6.734-1.337 1.487z" />
    </g>
  </svg>
);

export default KmControl;
