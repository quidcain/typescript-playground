type User = {
  name: string;
  lastName: string;
}

function acceptUser(user: User) {
  console.log(user);
}

const user = {
  name: 'Oleh',
  lastName: 'Ivanov',
}

acceptUser(user)

const dog = { name: 'Bobik' };

acceptUser(dog);

acceptUser({
  name: 'Andrei',
  lastName: 'Jordan',
  role: 'CEO',
})
