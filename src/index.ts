const STATUS_LOADING = 'loading';
const STATUS_SUCCESS = 'success';
const STATUS_ERROR = 'error';

// enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
Direction.Up;
console.log(Direction.Right);

enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}
Direction2.Up;
console.log(Direction2.Right);

enum Roles {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}
Roles.Admin;
console.log(Roles.Guest);

type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const person: Person = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'password123',
  role: Roles.Admin,
};

console.log(person);

enum Direction3 {
  Up = 1,
  Down = 'down',
  Left = 3,
}
