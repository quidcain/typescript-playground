const structuralTyping = () => {
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
}


const howAnyAndVoidWorks = () => {
  const identity = (x: any) => x;
  const foo: (value: string) => void = identity;
  
  const four: any = 4;
  const aNumber: string = four;

  const identity2 = (x: string): number => parseInt(x);
  const bar: (value: string) => void = identity2;
};
