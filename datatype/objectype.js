//  Object Type --->
var product1;
product1 = {
    id: "helloAapple1213",
    pName: "Apple",
};
// console.log({product1});//{ product1: { id: 'helloAapple1213', pName: 'Apple' } }
var product2;
product2 = {
    id: "helloMash1213",
    pName: "Mash",
};
// console.log({product2});//{ product2: { id: 'helloMash1213', pName: 'Mash' } }
/*Array Of Object---> */
// let products: object[];
var products;
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
for (var key in products) {
    var element = products[key];
    console.log(element["pName"]); /**right way */
    //   console.log(element?.pName); /**Worng way */
}
