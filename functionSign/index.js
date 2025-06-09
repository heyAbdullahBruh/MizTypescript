//  TypeScript function signeture --->
//  function signeture define which parameter or value I receved or send in function .
var User;
User = function () {
    console.log("Hello Mr");
};
User(); //Hello Mr
var Student;
Student = function (sName, age, id) {
    console.log({
        name: sName,
        age: age,
        id: id,
    });
};
Student("Ashik Choudury", 35, "jshacba2"); // {name: 'Ashik Choudury', age: 35, id: 'jshacba2' }
var worker;
worker = function (_, __, ___) {
    return {
        _n: _,
        _wt: __,
        _a: ___,
    };
};
var worker1 = worker("Kashem Bolda", "Boldami kora", 32);
console.log(worker1); //{ _n: 'Kashem Bolda', _wt: 'Boldami kora', _a: 32 }
