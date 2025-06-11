var HelloType = function (name, roll, _class, id) {
    return {
        name: name,
        roll: roll,
        _class: _class,
        id: id,
    };
};
var newHello = HelloType("HelloWorld", 21, "!st year", "Siuu");
var newHello2 = HelloType("Gello Horld", 21, "#st year", 121);
var newHello3 = HelloType("Mello Jorld", 23, "%st year", true);
var newHello4 = HelloType("Dello Norld", 31, "*st year", NaN);
console.log(newHello);
console.log(newHello2);
console.log(newHello3);
console.log(newHello4);
