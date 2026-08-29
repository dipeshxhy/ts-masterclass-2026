function multiplyByTwo(number: unknown) {
  if (typeof number === 'number') {
    return number * 2;
  }
  throw new Error('Input must be a number');
}
const result = multiplyByTwo(5);
// const result2 = multiplyByTwo('5'); // This will throw an error
console.log(result);
// console.log(result2);
