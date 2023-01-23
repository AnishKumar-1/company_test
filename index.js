
const users = [
  {
    id: 1,
    name: 'John',
    email: 'john@example.com',
    age: 30,
    city: 'New York',
    state: 'NY'
  },
  {
    id: 2,
    name: 'Jane',
    email: 'jane@example.com',
    age: 25,
    city: 'Chicago',
    state: 'IL'
  },
  {
    id: 3,
    name: 'Bob',
    email: 'bob@example.com',
    age: 35,
    city: 'New York',
    state: 'NY'
  }
];

function getUsersInState(users, state) {
  let filteredUsers = users.filter(user => user.state === state);
  let totalAge = filteredUsers.reduce((acc, user) => acc + user.age, 0);
  let averageAge = Math.round(totalAge / filteredUsers.length);
  filteredUsers.sort((a, b) => a.age - b.age);
  return {
    users: filteredUsers,
    averageAge: averageAge
  }
}


console.log(getUsersInState(users, 'NY'));