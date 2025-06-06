// Typescript class --->
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

let newUser1 = new User("Luz Cubas", 17, "A+");
newUser1.result();
