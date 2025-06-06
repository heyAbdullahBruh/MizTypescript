//  class Inheritance--->
/* In  TS inheritance means , Transfaring the features of one object to another object  */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Frist class of object or Parent Class
var User = /** @class */ (function () {
    function User(name, age, bloodGroup) {
        (this.name = name), (this.age = age), (this.bloodGroup = bloodGroup);
    }
    User.prototype.result = function () {
        console.log("Name : ".concat(this.name, " , Age: ").concat(this.age, " ,BloodGroup : ").concat(this.bloodGroup));
    };
    return User;
}());
// Another class of object or Child Class
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, bloodGroup, studentId) {
        var _this = _super.call(this, name, age, bloodGroup) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.result = function () {
        console.log("Id : ".concat(this.studentId, ", Name : ").concat(this.name, " , Age: ").concat(this.age, " ,BloodGroup : ").concat(this.bloodGroup));
    };
    return Student;
}(User));
var newStudent1 = new Student("Sam Oltman", 25, "O+", 213131);
newStudent1.result();
