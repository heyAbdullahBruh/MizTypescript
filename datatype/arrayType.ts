/* @array Type -->  */

let stuNames: Array<string>;
// let stuNames: string[];
stuNames = ["Siuu", "Biuuu", "Diuuu"];

let stuIds: Array<number>;
// let stuIds: number[];
stuIds = [69, 143, 420];

// console.log(stuIds);
// console.log(stuNames);

stuNames.push("Niuu");
stuIds.push(63);

// console.log(stuIds);
// console.log(stuNames);

let workers: (number | string)[];

workers = ["Mamun", 63, "Samun", 69, "Famun", 143, "Namun", 420];
// console.log({workers});
// workers.pop();
// workers.shift();
// workers.reverse();
// console.log({workers});

/*Tupple Type -->  */
let people: [number, string, boolean];

people = [121, "cr7", true];
people.push(12, "chirs", false);
console.log(people); // [ 121, 'cr7', true, 12, 'chirs', false ]
