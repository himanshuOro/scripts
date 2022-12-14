import { create, all, i } from "mathjs";

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
export const convert_8x8Matrix_To_64charString = (inputMATRIX: any) => {
  // console.log(privateKey);
  const rows: any = 8;
  const columns: any = 8;
  var outputString = "";
  const myArray = Array.from(Array(rows), () => new Array(columns));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      outputString += inputMATRIX[i][j];
      // myArray[i][j] = String(privateKey).charAt(8 * i + j);
      // myArray[i][j] = parseInt(myArray[i][j], 16);
    }
  }
  // console.table(myArray);
  return outputString;
};
export const finalArraywithRoundOff = (privateKey: any) => {
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

// Returns encodedString to be stored in client side from (privateKey,wallet_address,timestamp)
export function getEncodedData_String(
  private_key: any,
  wallet_address: any,
  timestamp: any
) {
  const privateKey_MATRIX = math.matrix(
    convert_64charString_To_8x8_Matrix(private_key)
  ); // privateKey :8*8
  const timestamp_matrix_string = wallet_address + "00000011111122" + timestamp;
  const timestamp_MATRIX = math.matrix(
    convert_64charString_To_8x8_Matrix(timestamp_matrix_string)
  );
  const encodedMATRIX = math.multiply(privateKey_MATRIX, timestamp_MATRIX); // Matrix     // 8*8
  const encodedMATRIX_Array = encodedMATRIX.toArray();
  // console.log(encodedMATRIX_Array);
  return JSON.stringify(encodedMATRIX_Array);
}

// Returns timestampString to be stored in client side from (wallet_address,timestamp)
export function getTimestampData_String(wallet_address: any, timestamp: any) {
  const timestamp_matrix_string = wallet_address + "00000011111122" + timestamp;
  const timestamp_MATRIX = math.matrix(
    convert_64charString_To_8x8_Matrix(timestamp_matrix_string)
  );
  return JSON.stringify(timestamp_MATRIX.toArray());
}

// Returns privateKey to be retrived for doing transaction in client side from (encodedData_String,timestamp_data_String)
export function getPRIVATE_Key_String(
  encoded_data_string: any,
  timestamp_data_string: any
) {
  let finalPrivateKeyMatrix: any = math.divide(
    JSON.parse(encoded_data_string),
    JSON.parse(timestamp_data_string)
  );
  let finalPrivateKeyMatrix_Array: any = math
    .matrix(finalPrivateKeyMatrix)
    .toArray();
  let finalPrivateKey_2DArray = finalArraywithRoundOff(
    finalPrivateKeyMatrix_Array
  );
  return convert_8x8Matrix_To_64charString(finalPrivateKey_2DArray);
}
