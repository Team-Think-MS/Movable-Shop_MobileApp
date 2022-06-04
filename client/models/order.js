class Order {
  constructor(orderId, productId, customerId, quantity, discount, date, price) {
    this.orderId = orderId;
    this.productId = productId;
    this.customerId = customerId;
    this.quantity = quantity;
    this.discount = discount;
    this.date = date;
    this.price = price;
  }
}

export default Order;
