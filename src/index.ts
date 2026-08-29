let id = Symbol('id');

let alphabeticId = Symbol('id');

let user = {
  [id]: 1,
  name: 'Mark',
  getId() {
    return this[id];
  },
};
console.log(user.name);
// console.log(user['id']);
console.log(id);
console.log(user.getId());
