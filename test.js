const sudokuTable = require("./sudokutable");

function getSquare(tab, position) {
  let row = Math.floor(position / 3);
  let rowArray = tab.slice(row * 3, row * 3 + 3);
  return rowArray;
}

function getSquare2(tab, position) {
  let row = Math.floor(position / 27);
  let rowArray = tab.slice(row * 27, row * 27 + 27);
  return row;
}

console.log(getSquare(sudokuTable, 13));
console.log(getSquare2(sudokuTable, 13));
