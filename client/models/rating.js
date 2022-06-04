class Rating {
  constructor(ratingId, customerId, storeId, commemnt, date, numericRating) {
    this.ratingId = ratingId;
    this.customerId = customerId;
    this.storeId = storeId;
    this.commemnt = commemnt;
    this.date = date;
    this.numericRating = numericRating;
  }
}

export default Rating;
