type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
  name: 'Buddy',
  barks: true,
  wags: true,
};
let cat: DogAndCatUnion = {
  name: 'Whiskers',
  purrs: true,
};

let hybridAnimal: DogAndCatUnion = {
  name: 'Fido',
  barks: true,
  purrs: true, // This will cause a TypeScript error because 'purrs' is not a property of Dog
};

let partialDog: DogAndCatUnion = {
  name: 'Rex',
  purrs: true, // This will cause a TypeScript error because 'purrs' is not a property of Dog
  barks: true,
  wags: true,
};
