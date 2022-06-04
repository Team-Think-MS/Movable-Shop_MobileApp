class Store {
  constructor(storeId, categoryId, storeName, sellerId, description, picture) {
    this.storeId = storeId;
    this.categoryId = categoryId;
    this.storeName = storeName;
    this.sellerId = sellerId;
    this.description = description;
    this.picture = picture;
  }
}

export default Store;
