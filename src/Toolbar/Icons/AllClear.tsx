import React from "react";

const AllClear = ({
  width = "26",
  height = "26",
  viewBox = "0 0 26 26",
  color = "#ffffff",
}) => (
  <svg width={width} height={height} viewBox={viewBox}>
    <g fill={color} fillRule="evenodd">
      <path d="M15.153 17L13 23h1.586l.509-1.466h1.763L17.374 23H19l-2.153-6h-1.694zm.828 1.408l.555 1.952h-1.104l.549-1.952zM20 23h1v-6h-1zm2 0h1v-6h-1zm-10.313-5H4v2h7z" />
      <path
        fillRule="nonzero"
        d="M7.293 3.293a1 1 0 011.497 1.32l-.083.094L5.415 8l3.292 3.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-4-4a1 1 0 01-.083-1.32l.083-.094 4-4z"
      />
      <path
        fillRule="nonzero"
        d="M15.004 7c3.794 0 6.868 3.115 6.992 6.99l.004.242V15h-2v-.768c0-2.824-2.132-5.112-4.785-5.227L15.005 9H5V7h10.004z"
      />
    </g>
  </svg>
);

export default AllClear;
