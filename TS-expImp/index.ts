import { User } from "./User";

class Student extends User {
  readonly studentId: number | string;
  constructor(
    name: string,
    age: string | number,
    bloodGroup: string,
    studentId: string | number
  ) {
    super(name, age, bloodGroup);
    this.studentId = studentId;
  }

  stuInfo() {
    return {
      studentId: this.studentId,
      name: this.name,
      age: this.age,
      bloodGroup: this.bloodGroup,
    };
  }
}

const student1 = new Student('Farru',18,'A+','12131');
console.log(student1.stuInfo()); // Student { studentId: '12131', name: 'Farru', age: 18, bloodGroup: 'A+' }
console.log(student1.result()); // { name: 'Farru', age: 18, bgGropu: 'A+' }
