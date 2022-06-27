import Axios from "axios";

export async function fetchProducts() {
  const response = await Axios.get("http://localhost:3000/product/getallproducts");

  const products = [];

  for (const key in response.data.products) {
    const pdtObj = {
      storeId: response.data.products[key].storeStoreId,
      productId: response.data.products[key].productId,
      productName: response.data.products[key].productName,
      picture: response.data.products[key].picture,
      description: response.data.products[key].description,
      price: response.data.products[key].price
    };
    products.push(pdtObj);
  }
  return products;
}
