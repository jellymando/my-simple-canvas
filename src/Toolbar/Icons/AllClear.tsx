import React from "react";

const AllClear = ({
  width = "26",
  height = "26",
  viewBox = "0 0 26 26",
  color = "#ffffff",
}) => (
  <svg
      width={width} height={height} viewBox={viewBox}
    >
      <path
        d="M273.193 62.099C245.08 25.376 202.332 4.314 155.911 4.314c-32.636 0-63.584 10.485-89.5 30.323a148.134 148.134 0 00-25.245 24.642L34.581 21.98c-.721-4.079-4.615-6.807-8.69-6.082L6.196 19.374a7.496 7.496 0 00-6.082 8.689l15.646 88.629a7.504 7.504 0 008.69 6.082l88.63-15.646a7.5 7.5 0 006.082-8.689l-3.477-19.695a7.5 7.5 0 00-8.689-6.082l-36.933 6.52a112.971 112.971 0 0117.624-16.754c19.762-15.127 43.361-23.122 68.247-23.122 35.419 0 68.028 16.063 89.469 44.069 18.266 23.86 26.146 53.406 22.19 83.194-3.957 29.789-19.277 56.254-43.138 74.519-19.818 15.171-43.38 23.19-68.139 23.19a114.85 114.85 0 01-15.057-.999c-29.788-3.956-56.253-19.275-74.519-43.137-11.118-14.523-18.59-31.659-21.609-49.556a7.502 7.502 0 00-8.644-6.148l-19.721 3.327a7.501 7.501 0 00-6.148 8.643c3.963 23.495 13.759 45.975 28.33 65.009 23.948 31.284 58.647 51.37 97.702 56.557a150.203 150.203 0 0019.708 1.308c32.486 0 63.39-10.514 89.369-30.402 31.285-23.948 51.371-58.647 56.558-97.703 5.19-39.056-5.142-77.794-29.092-109.078z"
        fill={color || "#ffffff"}
      />
    </svg>
);

export default AllClear;
