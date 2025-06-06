// /** Abstrac hide implementation of something
//  * object can't create in abstract class
//  * if any class extends abstract class,then it must inherit all of abstract class
//  */
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
var User = /** @class */ (function () {
    function User(name, age) {
        (this.name = name), (this.age = age);
    }
    return User;
}());
// Type -1
var People = /** @class */ (function (_super) {
    __extends(People, _super);
    function People(name, age, workType) {
        var _this = _super.call(this, name, age) || this;
        _this.workType = workType;
        return _this;
    }
    People.prototype.result = function () {
        console.log("workType : ".concat(this.workType, ", Name : ").concat(this.name, " , Age: ").concat(this.age));
    };
    return People;
}(User));
var people1 = new People("Saju Mia", 45, "Civil");
people1.result();
// Type -2
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, bloodGroup, studentId) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        _this.bloodGroup = bloodGroup;
        return _this;
    }
    Student.prototype.result = function () {
        return {
            studentId: this.studentId,
            name: this.name,
            age: this.age,
            bloodGroup: this.bloodGroup,
        };
    };
    return Student;
}(User));
var newStudent1 = new Student("Robert Hossen", 20, "H+", "Stu213");
var stu1val = newStudent1.result();
console.log(stu1val);
