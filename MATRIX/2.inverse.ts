import math from "math-js";

const matrixA = math.matrix([
  [0, 1],
  [2, 3],
  [4, -5],
]);
const matrixB = math.matrix([
  [1, -1],
  [-2, 4],
  [-7, 4],
]);

// addition
const matrixAdditionAB = math.add(matrixA, matrixB);

console.log(matrixAdditionAB)
