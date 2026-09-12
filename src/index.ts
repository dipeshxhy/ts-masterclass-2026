async function fetchFromDatabase(id: number) {}
const anotherAsyncFunction = async () => {};

async function returnString(id: number): Promise<string> {
  return Promise.resolve('Hello World');
}
type User = {
  name: string;
  age: number;
};

async function returnUser(id: number): Promise<User> {
  return Promise.resolve({ name: 'John Doe', age: 30 } as User);
}
