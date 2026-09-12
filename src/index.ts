type Person = {
  name: string;
  age: number;
  ageUnit: 'years' | 'months' | 'days';
};
const person: Person = {
  name: 'Scout',
  age: 30,
  ageUnit: 'years',
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
