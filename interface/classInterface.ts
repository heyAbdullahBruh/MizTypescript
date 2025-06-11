interface IProduct {
  getProducts: () => object;
}

class Product implements IProduct {
  constructor(
    public name: string,
    public price: number,
    readonly rating: number,
    protected vendor: number | string
  ) {}
  getProducts = () => {
    return {
      pName: this.name,
      price: this.price,
      rating: this.rating,
      vendor: this.vendor,
    };
  };
}




const mango = new Product("Mango", 26, 5, "HellowMiZTS231");

console.log(mango.getProducts()); //{ pName: 'Mango', price: 26, rating: 5, vendor: 'HellowMiZTS231' }
