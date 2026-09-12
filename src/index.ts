function intro(name: string, age: number, country?: string): string {
  if (country) {
    return `Hello, my name is ${name}, I am ${age} years old, and I am from ${country}.`;
  }
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

// intro('Alice', 30);
intro('Bob', 25, 'USA');
intro('Charlie', 40);
