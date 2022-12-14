import { create, all } from "mathjs";

const math = create(all, {});

// This Function Takes String(Or PrivateKey) as Input and Returns 2D-Array[8*8] as output
export const convert_64charString_To_8x8_Matrix = (privateKey: any) => {
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
  // console.table(myArray);
  return myArray;
};
export const finalAArraywithRoundOff = (privateKey: any) => {
  // console.log(privateKey);
  const rows: any = 8;
  const columns: any = 8;
  const myArray = Array.from(Array(rows), () => new Array(columns));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // myArray[i][j] = privateKey[i][j];
      // myArray[i][j] = String(privateKey).charAt(8 * i + j);
      myArray[i][j] = Math.abs(Math.round(parseFloat(privateKey[i][j])));
      myArray[i][j] = myArray[i][j].toString(16);

      // console.log(
      //   myArray[i][j],
      //   Math.abs(Math.round(parseFloat(privateKey[i][j])))
      // );
      // myArray[i][j] = parseInt(myArray[i][j], 16);
    }
  }
  // console.table(myArray);
  return myArray;
};

// This Function Takes String as Input and Returns 2D-Array[4*4] as output
export const convertTimestampTo_4x4_Matrix = (timestamp: any) => {
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
export const convertTimestampTo_8x8_Matrix = (array: Array<Array<Number>>) => {
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
  // console.table(myArray);
  return myArray;
};
export const convertTimestampTo_8x4_Matrix = (array: Array<Array<Number>>) => {
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
  // console.table(myArray);
  return myArray;
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

// console.table(
//   convertTimestampTo_8x4_Matrix(convertTimestampTo_4x4_Matrix(1670827815))
// );
