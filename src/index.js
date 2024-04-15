//********************************************************* */
// import React from "react";
// import {createRoot} from "react-dom/client";
// import Board from "./Board";

// const container = document.getElementById("root");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//   <div>
//     <Board knightPosition={[3, 4]} />
//   </div>
// );

//********************************************************* */

import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Board'
import { observe } from './Game'

const root = document.getElementById('root')

observe((knightPosition) =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, root)
)

//********************************************************* */
