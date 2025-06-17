class User {
  constructor(
    readonly name: string,
    protected age: string | number,
    readonly bloodGroup: string
  ) {}

  result(): void {
    console.log(
      `Name : ${this.name} , Age: ${this.age} ,BloodGroup : ${this.bloodGroup}`
    );
  }
}

// Another class of object or Child Class

class Student extends User {
  constructor(
    readonly name: string,
    protected age: string | number,
    readonly bloodGroup: string,
    readonly studentId: string | number
  ) {
    super(name, age, bloodGroup);
  }

  result(): void {
    console.log(
      `Id : ${this.studentId}, Name : ${this.name} , Age: ${this.age} ,BloodGroup : ${this.bloodGroup}`
    );
  }
}

let newStudent1 = new Student("Sam Oltman", 25, "O+", 213131);

newStudent1.result(); //Id : 213131, Name : Sam Oltman , Age: 25 ,BloodGroup : O+

class StudentOf8 extends Student {
  constructor(
    readonly name: string,
    protected age: string | number,
    readonly bloodGroup: string,
    readonly studentId: string | number,
    readonly className: string | number
  ) {
    super(name, age, bloodGroup, studentId);
  }

  data = () => {
    return {
      name: this.name,
      age: this.age,
      bloodGroup: this.bloodGroup,
      studentId: this.studentId,
      className: this.className,
    };
  };
}

let newStudentOfClas8 = new StudentOf8("Dam Bltman", 22, "S+", 23422, 8);
let newStudentOfClas8_1 = new StudentOf8(
  "Nam Mltman",
  35,
  "J+",
  "w3132",
  "Eight"
);

console.log(newStudentOfClas8.data()); //{ name: 'Dam Bltman', age: 22, bloodGroup: 'S+',studentId: 23422,className: 8 }
