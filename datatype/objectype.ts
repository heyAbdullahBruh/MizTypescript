//  Object Type --->

let product1: {
  id: any;
  pName: string;
};

product1 = {
  id: "helloAapple1213",
  pName: "Apple",
};

// console.log({product1});//{ product1: { id: 'helloAapple1213', pName: 'Apple' } }

let product2: object;

product2 = {
  id: "helloMash1213",
  pName: "Mash",
};
// console.log({product2});//{ product2: { id: 'helloMash1213', pName: 'Mash' } }

/*Array Of Object---> */

// let products: object[];
let products: object[];

products = [
  {
    id: "helloAapple1213",
    pName: "Apple",
  },
  {
    id: "helloMash1213",
    pName: "Mash",
  },
];

// console.log(
//   products
// ); /*[{ id: 'helloAapple1213', pName: 'Apple' },{ id: 'helloMash1213', pName: 'Mash' } ]*/

products.push({
  id: "helloShrimp1213",
  pName: "Shrimp",
});

for (const key in products) {
  const element = products[key];
  console.log(element["pName"]); /**right way */
  //   console.log(element?.pName); /**Worng way */
}
