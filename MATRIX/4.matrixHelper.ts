

// function multiply(mat1: any, mat2: any, res: any) {
//   const N = 8;

//   let i, j, k;
//   for (i = 0; i < N; i++) {
//     for (j = 0; j < N; j++) {
//       res[i][j] = 0;
//       for (k = 0; k < N; k++) res[i][j] += mat1[i][k] * mat2[k][j];
//     }
//   }
// }

// function multiply1(a: any, b: any) {
//   var aNumRows = a.length,
//     aNumCols = a[0].length,
//     bNumRows = b.length,
//     bNumCols = b[0].length,
//     m = new Array(aNumRows); // initialize array of rows
//   for (var r = 0; r < aNumRows; ++r) {
//     m[r] = new Array(bNumCols); // initialize the current row
//     for (var c = 0; c < bNumCols; ++c) {
//       m[r][c] = 0; // initialize the current cell
//       for (var i = 0; i < aNumCols; ++i) {
//         m[r][c] += a[r][i] * b[i][c];
//       }
//     }
//   }
//   return m;
// }

// Example
// console.table(convertTimestampTo_4x4_Matrix(1670827815));
// console.table(
//   convertTimestampTo_8x8_Matrix(convertTimestampTo_4x4_Matrix(1670827815))
// );
// console.table(
//   convertPrivateKeyTo_8x8_Matrix(
//     "a697357583001d727fc56b8d89e696d07e20e5f7fa13f1392fafda3e1fbd25db"
//   )
// );

// console.table(
//   multiply1(
//     convertPrivateKeyTo_8x8_Matrix(
//       "a697357583001d727fc56b8d89e696d07e20e5f7fa13f1392fafda3e1fbd25db"
//     ),
//     convertTimestampTo_8x8_Matrix(convertTimestampTo_4x4_Matrix(1670827815))
//   )
// );

// let a = math.multiply(
//   convertPrivateKeyTo_8x8_Matrix(
//     "a697357583001d727fc56b8d89e696d07e20e5f7fa13f1392fafda3e1fbd25db"
//   ),
//   convertTimestampTo_8x8_Matrix(convertTimestampTo_4x4_Matrix(1670827815))
// );

// console.table(identityMatrix_8x8());
