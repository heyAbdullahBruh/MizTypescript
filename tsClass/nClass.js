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
    function User(name, age, bloodGroup) {
        this.name = name;
        this.age = age;
        this.bloodGroup = bloodGroup;
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
        _this.name = name;
        _this.age = age;
        _this.bloodGroup = bloodGroup;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.result = function () {
        console.log("Id : ".concat(this.studentId, ", Name : ").concat(this.name, " , Age: ").concat(this.age, " ,BloodGroup : ").concat(this.bloodGroup));
    };
    return Student;
}(User));
var newStudent1 = new Student("Sam Oltman", 25, "O+", 213131);
newStudent1.result(); //Id : 213131, Name : Sam Oltman , Age: 25 ,BloodGroup : O+
var StudentOf8 = /** @class */ (function (_super) {
    __extends(StudentOf8, _super);
    function StudentOf8(name, age, bloodGroup, studentId, className) {
        var _this = _super.call(this, name, age, bloodGroup, studentId) || this;
        _this.name = name;
        _this.age = age;
        _this.bloodGroup = bloodGroup;
        _this.studentId = studentId;
        _this.className = className;
        _this.data = function () {
            return {
                name: _this.name,
                age: _this.age,
                bloodGroup: _this.bloodGroup,
                studentId: _this.studentId,
                className: _this.className,
            };
        };
        return _this;
    }
    return StudentOf8;
}(Student));
var newStudentOfClas8 = new StudentOf8("Dam Bltman", 22, "S+", 23422, 8);
var newStudentOfClas8_1 = new StudentOf8("Nam Mltman", 35, "J+", "w3132", "Eight");
console.log(newStudentOfClas8.data());
