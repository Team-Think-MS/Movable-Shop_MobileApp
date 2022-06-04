class Product {
  constructor(
    productId,
    storeId,
    productName,
    stockQty,
    description,
    picture,
    price
  ) {
    this.productId = productId;
    this.storeId = storeId;
    this.productName = productName;
    this.stockQty = stockQty;
    this.description = description;
    this.picture = picture;
    this.price = price;
  }
}

export default Product;
