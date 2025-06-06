// /** Abstrac hide implementation of something
//  * object can't create in abstract class
//  * if any class extends abstract class,then it must inherit all of abstract class
//  */

abstract class User {
  name: string;
  age: string | number;

  constructor(name: string, age: string | number) {
    (this.name = name), (this.age = age);
  }

  abstract result(): any;
}

// Type -1
class People extends User {
  workType: string;
  constructor(name: string, age: string | number, workType: string) {
    super(name, age);
    this.workType = workType;
  }

  result(): void {
    console.log(
      `workType : ${this.workType}, Name : ${this.name} , Age: ${this.age}`
    );
  }
}

let people1 = new People("Saju Mia", 45, "Civil");
people1.result();

// Type -2

class Student extends User {
  studentId: number | string;
  bloodGroup: string;
  constructor(
    name: string,
    age: string | number,
    bloodGroup: string,
    studentId: string | number
  ) {
    super(name, age);
    this.studentId = studentId;
    this.bloodGroup = bloodGroup;
  }

  result() {
    return {
      studentId: this.studentId,
      name: this.name,
      age: this.age,
      bloodGroup: this.bloodGroup,
    };
  }
}

let newStudent1 = new Student("Robert Hossen", 20, "H+", "Stu213");

const stu1val = newStudent1.result();
console.log(stu1val);
