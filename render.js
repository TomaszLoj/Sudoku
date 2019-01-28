function renderOutput(arr) {
  console.log("#######  SUDOKU  #######");

  for (let i = 0; i < arr.length; i += 9) {
    console.log(
      "|",
      arr[i],
      arr[i + 1],
      arr[i + 2],
      "|",
      arr[i + 3],
      arr[i + 4],
      arr[i + 5],
      "|",
      arr[i + 6],
      arr[i + 7],
      arr[i + 8],
      "|"
    );

    if (i === 18 || i === 45) {
      console.log("--------------------------");
    }
  }
}
module.exports = renderOutput;
