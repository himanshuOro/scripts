import {
  getEncodedData_String,
  getTimestampData_String,
  getPRIVATE_Key_String,
} from "./_matrixUtis";

let PRIVATE_KEY =
  "a697357583001d727fc56b8d89e696d07e20e5f7fa13f1392fafda3e1fbd25db";

const TIMESTAMP = 1670827815;
const WALLETADDRESS = "BEf5904a88Ded71a282834Af2F3f4a87723AbfFd";
const NEW_STRING = WALLETADDRESS + "00000011111122" + TIMESTAMP;

let z = getEncodedData_String(PRIVATE_KEY, WALLETADDRESS, TIMESTAMP);
let y = getTimestampData_String(WALLETADDRESS, TIMESTAMP);

let x: any = getPRIVATE_Key_String(z, y);
// console.log(z)
// console.log(y)
console.log(x);
