type GreetingFun = (greeting: string, additionalInfo?: string) => string;
type Person = {
  name: string;
  age: number;
  ageUnit: 'years' | 'months' | 'days';
  // greet:function;
  greet: GreetingFun;
};
const person: Person = {
  name: 'Scout',
  age: 30,
  ageUnit: 'years',
  greet: (greeting: string, additionalInfo?: string) => {
    if (additionalInfo) {
      return `${greeting}, ${additionalInfo}`;
    }
    return `${greeting}, ${person.name}`;
  },
};

function convertAgeToMonths(person: Person): Person {
  if (person.ageUnit === 'years') {
    return {
      ...person,
      age: person.age * 12,
      ageUnit: 'months',
    };
  }
  return person;
}
console.log(convertAgeToMonths(person));

console.log(person.greet('hello'));
