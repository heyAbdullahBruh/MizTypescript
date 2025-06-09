// Typscript interface ..
//  Interface to make code effecient
// without interface --->
var users = [];
var user1 = {
    name: "Mohammad TOha",
    age: 37,
    bloodGroup: "A+",
};
var user2 = {
    name: "Asef Saikat",
    age: 40,
    bloodGroup: "A-",
};
users.push(user1);
users.push(user2);
// console.log(users); // [{ name: 'Mohammad TOha', age: 37, bloodGroup: 'A+' },{ name: 'Asef Saikat', age: 40, bloodGroup: 'A-' }]
function userShow(user) {
    console.log("User -> Name : ".concat(user === null || user === void 0 ? void 0 : user.name, ", Age : ").concat(user === null || user === void 0 ? void 0 : user.age, ", BloodGroup : ").concat(user === null || user === void 0 ? void 0 : user.bloodGroup));
} /**User -> Name : Mohammad TOha, Age : 37, BloodGroup : A+
User -> Name : Asef Saikat, Age : 40, BloodGroup : A- */
users.forEach(function (u) { return userShow(u); });
