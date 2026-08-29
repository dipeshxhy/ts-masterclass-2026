// bigint

const safeInt = Number.MAX_SAFE_INTEGER;

console.log(safeInt);

const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);

const bigIntPlusOne = BigInt(safeInt) + BigInt(1);
const bigIntPlusTwo = BigInt(safeInt) + BigInt(2);

console.log(bigIntPlusOne);
console.log(bigIntPlusTwo);

let f = Math.log(10);
