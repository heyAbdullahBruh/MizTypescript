const HelloType = <T>(name: string, roll: number, _class: string, id: T) => {
  return {
    name,
    roll,
    _class,
    id,
  };
};

const newHello = HelloType("HelloWorld", 21, "!st year", "Siuu");
const newHello2 = HelloType("Gello Horld", 21, "#st year", 121);
const newHello3 = HelloType("Mello Jorld", 23, "%st year", true);
const newHello4 = HelloType("Dello Norld", 31, "*st year", NaN);

console.log(newHello); //{ name: 'HelloWorld', roll: 21, _class: '!st year', id: 'Siuu' }
console.log(newHello2); //{ name: 'Gello Horld', roll: 21, _class: '#st year', id: 121 }
console.log(newHello3); //{ name: 'Mello Jorld', roll: 23, _class: '%st year', id: true }
console.log(newHello4); //{ name: 'Dello Norld', roll: 31, _class: '*st year', id: NaN }
