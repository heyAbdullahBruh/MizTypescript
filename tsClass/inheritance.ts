//  class Inheritance--->
/* In  TS inheritance means , Transfaring the features of one object to another object  */

// Frist class of object or Parent Class
class User {
  name: string;
  age: string | number;
  bloodGroup: string;

  constructor(name: string, age: string | number, bloodGroup: string) {
    (this.name = name), (this.age = age), (this.bloodGroup = bloodGroup);
  }

  result(): void {
    console.log(
      `Name : ${this.name} , Age: ${this.age} ,BloodGroup : ${this.bloodGroup}`
    );
  }
}

// Another class of object or Child Class

class Student extends User {
  studentId: number | string;
  constructor(
    name: string,
    age: string | number,
    bloodGroup: string,
    studentId: string | number
  ) {
    super(name, age, bloodGroup);
    this.studentId = studentId;
  }

  result(): void {
    console.log(
      `Id : ${this.studentId}, Name : ${this.name} , Age: ${this.age} ,BloodGroup : ${this.bloodGroup}`
    );
  }
}

let newStudent1 = new Student("Sam Oltman", 25, "O+", 213131);

newStudent1.result();
