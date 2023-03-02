import React from "react";
import { SimpleToolbar, SimpleCanvas } from "./src";

export default function App() {
  return (
    <div className="App">
      <SimpleToolbar colors={["#000000", "red", "violet"]} />
      <SimpleCanvas
        onDraw={(params) => {
          console.log(params);
        }}
      />
    </div>
  );
}
