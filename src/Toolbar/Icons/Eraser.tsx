import React from "react";

const Eraser = ({
  width = "26",
  height = "26",
  viewBox = "0 0 26 26",
  color = "#ffffff",
}) => (
  <svg width={width} height={height} viewBox={viewBox}>
    <path
      d="M12.661 3a1 1 0 01.713.3l10.33 10.466a1.031 1.031 0 010 1.445l-7.392 7.49a.999.999 0 01-1.426 0L2.296 9.945a1.031 1.031 0 010-1.445l5.132-5.2c.19-.192.446-.3.713-.3zm2.629 5.131l-6.005 6.005 6.314 6.397 5.966-6.045L15.29 8.13zm-3.048-3.088H8.56L4.434 9.222l3.438 3.484L13.878 6.7l-1.636-1.657z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
);

export default Eraser;
