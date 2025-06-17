// Typscript interface ..
//  Interface to make code effecient

/*/////// without interface --->*/

// let users: { name: string; age: string | number; bloodGroup: string }[] = [];

// let user1: { name: string; age: string | number; bloodGroup: string } = {
//   name: "Mohammad TOha",
//   age: 37,
//   bloodGroup: "A+",
// };

// let user2: { name: string; age: string | number; bloodGroup: string } = {
//   name: "Asef Saikat",
//   age: 40,
//   bloodGroup: "A-",
// };

// users.push(user1);
// users.push(user2);

// // console.log(users); // [{ name: 'Mohammad TOha', age: 37, bloodGroup: 'A+' },{ name: 'Asef Saikat', age: 40, bloodGroup: 'A-' }]

// function userShow(user: {
//   name: string;
//   age: string | number;
//   bloodGroup: string;
// }): void {
//   console.log(
//     `User -> Name : ${user?.name}, Age : ${user?.age}, BloodGroup : ${user?.bloodGroup}`
//   );
//  }// User -> Name : Mohammad TOha, Age : 37, BloodGroup : A+
// // User -> Name : Asef Saikat, Age : 40, BloodGroup : A-

// users.forEach((u) => userShow(u));

//  With InterFace -->

interface IUser {
  name: string;
  age: string | number;
  bloodGroup: string;
}

let users: IUser[] = [];

let user1: IUser;
user1 = {
  name: "Mohammad TOha",
  age: 37,
  bloodGroup: "A+",
};

let user2: IUser = {
  name: "Asef Saikat",
  age: 40,
  bloodGroup: "A-",
};

users.push(user1);
users.push(user2);

// console.log(users); // [{ name: 'Mohammad TOha', age: 37, bloodGroup: 'A+' },{ name: 'Asef Saikat', age: 40, bloodGroup: 'A-' }]

function userShow(user: IUser): void {
  console.log(
    `User -> Name : ${user?.name}, Age : ${user?.age}, BloodGroup : ${user?.bloodGroup}`
  );
} // User -> Name : Mohammad TOha, Age : 37, BloodGroup : A+
// User -> Name : Asef Saikat, Age : 40, BloodGroup : A-

users.forEach((u) => userShow(u));
