//  TypeScript function signeture --->
//  function signeture define which parameter or value I receved or send in function .

let User: () => void;

User = () => {
  console.log("Hello Mr");
};
User(); //Hello Mr

let Student: (name: string, age: number, id: number | string) => void;

Student = (sName: string, age: number, id: number | string) => {
  console.log({
    name: sName,
    age: age,
    id: id,
  });
};
Student("Ashik Choudury", 35, "jshacba2"); // {name: 'Ashik Choudury', age: 35, id: 'jshacba2' }

let worker: (name: string, workType: string, age: number) => object;

worker = (_: string, __: string, ___: number) => {
  return {
    _n: _,
    _wt: __,
    _a: ___,
  };
};

const worker1 = worker("Kashem Bolda", "Boldami kora", 32);
console.log(worker1); //{ _n: 'Kashem Bolda', _wt: 'Boldami kora', _a: 32 }
