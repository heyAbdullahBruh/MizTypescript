var Product = /** @class */ (function () {
    function Product(name, price, rating, vendor) {
        var _this = this;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.vendor = vendor;
        this.getProducts = function () {
            return {
                pName: _this.name,
                price: _this.price,
                rating: _this.rating,
                vendor: _this.vendor,
            };
        };
    }
    return Product;
}());
var mango = new Product("Mango", 26, 5, "HellowMiZTS231");
console.log(mango.getProducts()); //{ pName: 'Mango', price: 26, rating: 5, vendor: 'HellowMiZTS231' }
