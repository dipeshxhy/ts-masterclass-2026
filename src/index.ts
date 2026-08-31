// type casting
let firstName = 'Mark';
let lastName = 'Doe' as const;

type User = {
  name: string;
  email: string;
};

let user: User = {
  name: 'Mark',
  email: 'mark@email.com',
};

function fetchUser() {
  return user as User;
}
const fetchedUser = fetchUser();
