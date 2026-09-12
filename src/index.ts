// rest parameters
function multiplyBy(by: number, ...numbers: number[]): number[] {
  return numbers.map((n) => n * by);
}

const result = multiplyBy(2, 1, 2, 3, 4);
console.log(result); // Output: [2, 4, 6, 8]
// const args = [0,4] as const
const args: readonly [number, number] = [0, 4];
const angle = Math.atan2(...args);
