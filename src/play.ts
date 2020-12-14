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

const wrapperObjectsAndTypeHierarchy = () => {
  const N: object = new Number(1);
  const n: number = 1;
  //number doesn't extend object
  const N2: object = 2;
  //Number wrapper object is not assignable to number
  //typescript do's and don'ts:
  //Don’t ever use the types Number, String, Boolean, Symbol,
  //or Object These types refer to non-primitive boxed objects
  //that are almost never used appropriately in JavaScript code
  const n2: number = N;
}

const pecs = () => {
  class Base {}
  class Derived extends Base {
    method() {
      return 'derived';
    }
  }
  class Derived2 extends Base {}
  class NotDerived {}

  let d = new Derived;
  let b: Base = d;

  const baseArr: Base[] = [new Derived(), new Derived(), new Derived()];
  baseArr[0].method();

  function addToArr<T extends Base>(arr: T[], item: T) {
    arr.push(item);
    return arr;
  }
  const derivedArr: Derived[] = [new Derived(), new Derived(), new Derived()];
  derivedArr[0].method();
  addToArr(derivedArr, new Derived2());
  console.log(derivedArr[3].method());
}
pecs();
