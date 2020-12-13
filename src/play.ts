type User = {
  name: string;
  lastName: string;
}

function acceptUser<T extends User>(user: T) {
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
