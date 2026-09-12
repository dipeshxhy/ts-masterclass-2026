function writeToDatabase(value: string) {
  console.log('writing to database', value);
}
function throwError(message: string): never {
  throw new Error(message);
}

type check = never extends any ? true : false;
type check2 = void extends never ? true : false;
