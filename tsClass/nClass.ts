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
