function intro(name: string, age: number): string {
  return `Hello, my name is ${name} and I am ${age} years old.`;
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const intro2 = function (name: string, age: number): string {
  return `Hello, my name is ${name} and I am ${age} years old.`;
};

const intro3 = (name: string, age: number): string => {
  return `Hello, my name is ${name} and I am ${age} years old.`;
};
