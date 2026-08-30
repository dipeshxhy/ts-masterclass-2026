// union types
// combine two types together its union type
type StringOrNumber = string | number;
type NumberOrUndefined = number | undefined;
type StringOrNumberOrUndefined = StringOrNumber | undefined;
type DateOrUndefined = Date | undefined;

let stringOrNumber: StringOrNumber = 123;

function print(input?: string) {
  if (input === undefined) {
    console.log('No input provided');
  } else {
    console.log(input);
  }
}
print('Hello, World!');
print();
