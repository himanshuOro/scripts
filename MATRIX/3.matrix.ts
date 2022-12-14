import { create, all } from "mathjs";

const math = create(all, {});

// This Function Takes String as Input and Returns 2D-Array[8*8] as output
const convertPrivateKeyTo_8x8_Matrix = (privateKey: any) => {
  // console.log(privateKey);
  const rows: any = 8;
  const columns: any = 8;
  const myArray = Array.from(Array(rows), () => new Array(columns));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      myArray[i][j] = String(privateKey).charAt(8 * i + j);
      myArray[i][j] = parseInt(myArray[i][j], 16);
    }
  }
  console.table(myArray);
  return myArray;
};
const finalAArraywithRoundOff = (privateKey: any) => {
  // console.log(privateKey);
  const rows: any = 8;
  const columns: any = 8;
  const myArray = Array.from(Array(rows), () => new Array(columns));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // myArray[i][j] = privateKey[i][j];
      // myArray[i][j] = String(privateKey).charAt(8 * i + j);
      myArray[i][j] = Math.abs(Math.round(parseFloat(privateKey[i][j])));
      myArray[i][j] =  myArray[i][j].toString(16);

      console.log(
        myArray[i][j],
        Math.abs(Math.round(parseFloat(privateKey[i][j])))
      );
      // myArray[i][j] = parseInt(myArray[i][j], 16);
    }
  }
  console.table(myArray);
  return myArray;
};

// This Function Takes String as Input and Returns 2D-Array[4*4] as output
const convertTimestampTo_4x4_Matrix = (timestamp: any) => {
  const rows: any = 4;
  const columns: any = 4;
  const myArray = Array.from(Array(rows), () => new Array(columns));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      myArray[i][j] = String(timestamp).charAt(4 * i + j);
      myArray[i][j] = myArray[i][j] !== "" ? Number(myArray[i][j]) : 0;
    }
  }
  return myArray;
};

// This Function Takes String as Input and Returns 2D-Array[8*8] as output
const convertTimestampTo_8x8_Matrix = (array: Array<Array<Number>>) => {
  const rows: any = 8;
  const columns: any = 8;
  const myArray = Array.from(Array(rows), () => new Array(columns));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i >= 4 || j >= 4) {
        myArray[i][j] = 0;
      } else {
        myArray[i][j] = array[i][j];
      }
    }
  }
  console.table(myArray);
  return myArray;
};
const convertTimestampTo_8x4_Matrix = (array: Array<Array<Number>>) => {
  const rows: any = 8;
  const columns: any = 4;
  const myArray = Array.from(Array(rows), () => new Array(columns));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i >= 4 || j >= 4) {
        myArray[i][j] = 0;
      } else {
        myArray[i][j] = array[i][j];
      }
    }
  }
  console.table(myArray);
  return myArray;
};
const identityMatrix_8x8 = () => {
  const rows: any = 8;
  const columns: any = 8;
  const myArray = Array.from(Array(rows), () => new Array(columns));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i === j) {
        myArray[i][j] = 1;
      } else {
        myArray[i][j] = 0;
      }
    }
  }
  // console.table(myArray);
  return myArray;
};

function multiply(a: any, b: any) {
  var aNumRows = a.length,
    aNumCols = a[0].length,
    bNumRows = b.length,
    bNumCols = b[0].length,
    m = new Array(aNumRows); // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0; // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}

var invertMatrix = function (matrix: any) {
  var ratio: any, a: any;
  var i: any, j: any, k: any;
  var n: any = matrix.length;
  var invMatrix: any = matrix;
  for (i = 0; i < n; i++) {
    for (j = n; j < 2 * n; j++) invMatrix[i][j] = i == j - n ? 1.0 : 0.0;
  }
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i != j) {
        ratio = invMatrix[j][i] / invMatrix[i][i];
        for (k = 0; k < 2 * n; k++) invMatrix[j][k] -= ratio * invMatrix[i][k];
      }
    }
  }
  for (i = 0; i < n; i++) {
    a = invMatrix[i][i];
    for (j = 0; j < 2 * n; j++) invMatrix[i][j] /= a;
  }
  for (i = 0; i < n; i++) invMatrix[i].splice(0, n);
  return invMatrix;
};

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

console.table(
  multiply(
    convertPrivateKeyTo_8x8_Matrix(
      "a697357583001d727fc56b8d89e696d07e20e5f7fa13f1392fafda3e1fbd25db"
    ),
    convertTimestampTo_8x8_Matrix(convertTimestampTo_4x4_Matrix(1670827815))
  )
);

console.log("sssssssssssssssssssssssssssssssssssssssssssssssssssssssss");

console.table(
  convertTimestampTo_8x4_Matrix(convertTimestampTo_4x4_Matrix(1670827815))
);
console.log("sssssssssssssssssssssssssssssssssssssssssssssssssssssssss");

// let a: any = multiply(
//   convertPrivateKeyTo_8x8_Matrix(
//     "a697357583001d727fc56b8d89e696d07e20e5f7fa13f1392fafda3e1fbd25db"
//   ),
//   convertTimestampTo_8x4_Matrix(convertTimestampTo_4x4_Matrix(1670827815))
// );

const x = math.matrix(
  convertPrivateKeyTo_8x8_Matrix(
    "a697357583001d727fc56b8d89e696d07e20e5f7fa13f1392fafda3e1fbd25db"
  )
); // privateKey :8*8

const y = math.matrix(
  convertTimestampTo_8x8_Matrix(convertTimestampTo_4x4_Matrix(1670827815))
); // timestamp : 8*8

// const aaa =
//   "BEf5904a88Ded71a282834Af2F3f4a87723AbfFd" + "00000000000000" + "1670827815";
const aaa =
  "BEf5904a88Ded71a282834Af2F3f4a87723AbfFd" + "00000011111122" + "1670827815";
const v = math.matrix(convertPrivateKeyTo_8x8_Matrix(aaa));
console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
console.table(v.toArray());
console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvv");

//-----------------------------------------------------------------

const z = math.multiply(x, v); // Matrix     // 8*4
console.log("ssssssssssss");
const getNewz = z.toArray(); // array
console.table(getNewz);

/////////////////////////////////////////////////////////////////////////////////
// X *V ==Z
// z/V =X

// const matrixS_I = math.inv(x);
// console.table(matrixS_I.toArray());
let finalVariable: any = math.divide(z, v);
// let finalVariable = math.inv(v);
let finalVariable1 = math.inv(v);

let finalX = math.multiply(finalVariable, z);
// finalVariable = math.matrix(finalVariable);
// console.table(finalVariable.toArray());
// console.table(finalVariable1.toArray());
console.log(
  "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
);

let xxx = math.matrix(finalVariable).toArray();
console.table(xxx);
console.table(finalAArraywithRoundOff(xxx));
console.log(
  "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
);
// console.log(finalVariable)
// console.table(finalVariable.toArray());
// console.table(getNewz);
// 8*4   / 8*4
// const z1 = math.divide(z, y);
// y = pubicKey+timestamp
// BEf5904a88Ded71a282834Af2F3f4a87723AbfFd+1670827815
// const matrixS_I = math.inv(x);
// console.log(matrixS_I);

// // const test = math.matrix(a);
// console.log("--------------------------------------------------------");
// console.log("--------------------------------------------------------");
// console.table(a);
// console.log(test);

// console.log(matrixS_I);

// const matrixS = math.matrix([
//   [0, 1],
//   [2, 3],
// ]);

// // const matrixS_I = math.inv(matrixS);

// // console.log(matrixS_I);
// // const b = math.divide(math.matrix(identityMatrix_8x8()), test);
// console.log("--------------------------------------------------------");
// console.log("--------------------------------------------------------");
// // console.log(matrixS_I);
// // ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

// a*b b*c= a*c

// a*c / b*c =a*b
// 8*8 8*4

// X*Y = Z

// X = z/Y = z * (1/Y)
