class Cart {
  constructor(cartId, customerId, productId, totPrice, noOfProducts) {
    this.cartId = cartId;
    this.customerId = customerId;
    this.productId = productId;
    this.totPrice = totPrice;
    this.noOfProducts = noOfProducts;
  }
}

export default Cart;
