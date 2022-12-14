// import { matrix } from "matrix-js";
// var a = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// var A = matrix(a);

// console.log(A);

import { create, all } from 'mathjs'
import {
  atan2,
  chain,
  derivative,
  e,
  evaluate,
  log,
  pi,
  pow,
  round,
  sqrt,
} from "mathjs";
const math = create(all,  {})
console.log(math.sqrt(-4).toString()) 


// console.log(log(10000, 10));


const matrix = math.matrix([[0, 1], [2, 3], [4, 5]]);

// console.log(matrix)
const matrixA = math.matrix([[0, 1], [2, 3], [4, -5]]);
const matrixB = math.matrix([[1, -1], [-2, 4], [-7, 4]]);

// addition
const matrixAdditionAB = math.add(matrixA, matrixB);

console.log(matrixAdditionAB)
// [ [ 1, 0 ], [ 0, 7 ], [ -3, -1 ] ]

// // subtraction
// const matrixAdditionAB = math.subtract(matrixA, matrixB);
// // [ [ -1, 2 ], [ 4, -1 ], [ 11, -9 ] ]

// // multiplication
// const matrixK = math.matrix([[0, 1], [2, 3], [4, 5]]);
// const matrixL = math.matrix([[2, 4], [6, 2]]);

// const matrixKL = math.multiply(matrixK, matrixL);
// // [ [ 6, 2 ], [ 22, 14 ], [ 38, 26 ] ]

// // division
// const matrixY = math.matrix([[0, 2], [2, 4], [4, 6]]);
// const matrixZ = math.matrix([[2, 1], [2, 2]]);

// const matrixYZ = math.divide(matrixY, matrixZ);





// HOW TO IMPORT MATHJS
// https://stackoverflow.com/questions/38416492/how-to-include-and-use-math-js