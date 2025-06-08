
export class User {
  readonly name: string;
  protected age: string | number;
  readonly bloodGroup: string;

  constructor(name: string, age: string | number, bloodGroup: string) {
    (this.name = name), (this.age = age), (this.bloodGroup = bloodGroup);
  }

  userInfo() {
    return {
      name: this.name,
      age: this.age,
      bgGropu: this.bloodGroup,
    };
  }
}
