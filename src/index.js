import React from "react";
import {createRoot} from "react-dom/client";
import Board from "./Board";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <div>
    <Board knightPosition={[3, 4]} />
  </div>
);
