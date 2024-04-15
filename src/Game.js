  // original function to prove we can move Knight around with props:
  // export function observe(receive) {
  //   const randPos = () => Math.floor(Math.random() * 8)
  //   setInterval(() => receive([randPos(), randPos()]), 800)
  // }

let knightPosition = [0, 0];
let observer = null;

function emitChange() {
  observer(knightPosition);
}

export function observe(o) {
  if (observer) {
    throw new Error("Multiple observers not implemented.");
  }

  observer = o;
  emitChange();
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}
