"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, bloodGroup, studentId) {
        var _this = _super.call(this, name, age, bloodGroup) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.stuInfo = function () {
        return {
            studentId: this.studentId,
            name: this.name,
            age: this.age,
            bloodGroup: this.bloodGroup,
        };
    };
    return Student;
}(User_1.User));
var student1 = new Student('Farru', 18, 'A+', '12131');
console.log(student1.stuInfo()); // Student { studentId: '12131', name: 'Farru', age: 18, bloodGroup: 'A+' }
console.log(student1.result()); // { name: 'Farru', age: 18, bgGropu: 'A+' }
