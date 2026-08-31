type check = any extends unknown ? true : false;
type check2 = string extends any ? true : false;
type check3 = undefined extends any ? true : false;
type check4 = [] extends object ? true : false;
type check5 = (() => void) extends object ? true : false;

const throwError = (message: string): never => {
  throw new Error(message);
};

let strings = ['a', 'b', 'c'];
let myFunc = () => 2;
