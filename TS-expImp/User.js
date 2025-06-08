"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age, bloodGroup) {
        (this.name = name), (this.age = age), (this.bloodGroup = bloodGroup);
    }
    User.prototype.result = function () {
        return {
            name: this.name,
            age: this.age,
            bgGropu: this.bloodGroup,
        };
    };
    return User;
}());
exports.User = User;
