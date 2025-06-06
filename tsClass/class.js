// Typescript class --->
var User = /** @class */ (function () {
    function User(name, age, bloodGroup) {
        (this.name = name), (this.age = age), (this.bloodGroup = bloodGroup);
    }
    User.prototype.result = function () {
        console.log("Name : ".concat(this.name, " , Age: ").concat(this.age, " ,BloodGroup : ").concat(this.bloodGroup));
    };
    return User;
}());
var newUser1 = new User("Luz Cubas", 17, "A+");
newUser1.result();
