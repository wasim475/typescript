class Products {
    constructor(public name:string, public inStock:number, public price:number) {
        this.name=name,
        this.inStock= inStock,
        this.price = price
    }
    getDetails():string{
        return `product name is- ${this.name}`
    }

    getStoct():string{
        return `this product instock ${this.inStock}`
    }
}