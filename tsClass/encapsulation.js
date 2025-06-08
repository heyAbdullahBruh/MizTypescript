//  Class Encapsulation --->
// Encapsulation to helps to manage visibility every class items(methode ,variable , obj,arr)
//  Encapsulation access type --> public , private , protected , readonly
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
// Public ---> Public type access all of items in class .All of class items by default public. Public type make access , read , and modify
// private ---> private type access only from in the class . If use "private" type on any class items then that can can't  access , read , and modiyfy from any where without this class;
//   -- If any chance need access private items , then create a public method or fucntion to get access private item's
// protected ---> Protected type access only  main class and subclass .Protected can't access class items from outside object's(But can access from subclass)
// readonly ---> Readonly type access all of items in class . But , it give access only read item can't modify.
var Product = /** @class */ (function () {
    function Product(id, name, price, userId) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.userId = userId;
    }
    Product.prototype.display = function () {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            userId: this.userId,
        };
    };
    Product.prototype.getUserId = function () {
        // Private item 'userId' accessing system
        return this.userId;
    };
    return Product;
}());
var product1 = new Product(212, "Mango", 65, "1213m121");
// console.log(product1); // Product { id: 212, name: 'Mango', price: 65, userId: '1213m121' }
// product1.userId='Aaam'; console.log(product1.userId); ❌ , bcz its private.
product1.name = "Aaam"; //✅ . Bcz ,itz public item;
console.log(product1); // Product { id: 212, name: 'Aaam', price: 65, userId: '1213m121' }
// product1.price=123; ❌ , bcz its readonly. console.log(product1.price); ✅
//  console.log(product1?.id); ❌ , bcz its protected. It's access only from main class and subclass , not outside;
//  SUbclass
var Mango = /** @class */ (function (_super) {
    __extends(Mango, _super);
    function Mango(id, name, price, userId, productType, dalibaryFee) {
        var _this = _super.call(this, id, name, price, userId) || this;
        _this.productType = productType;
        _this.dalibaryFee = dalibaryFee;
        return _this;
    }
    Mango.prototype.getMango = function () {
        return {
            id: this.id, // It's can accessable from in this . Bcz , id is protected and Mango is a subclass of Product.
            name: this.name,
            price: this.price,
            userId: this.getUserId(), // access by another public method
            productType: this.productType,
            dalibaryFee: this.dalibaryFee,
        };
    };
    return Mango;
}(Product));
var mango1 = new Mango("1231", "Lengra Mango", 120, "23123", "FoodAndBevarage", 0);
// console.log(
//   mango1
// ); /**--> Mango { id: '1231', name: 'Lengra Mango', price: 120, userId: '23123', productType: 'FoodAndBevarage', dalibaryFee: 0 } */
console.log(mango1.getMango()); // { id: '1231', name: 'Lengra Mango', price: 120, userId: '23123', productType: 'FoodAndBevarage', dalibaryFee: 0 }
