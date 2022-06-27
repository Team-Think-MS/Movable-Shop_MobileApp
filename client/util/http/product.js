import Axios from "axios";

export async function fetchProducts() {
  const response = await Axios.get(
    "http://localhost:3000/product/getallproducts"
  );

  const products = [];

  for (const key in response.data.products) {
    const pdtObj = {
      storeId: response.data.products[key].storeStoreId,
      productId: response.data.products[key].productId,
      productName: response.data.products[key].productName,
      picture: response.data.products[key].picture,
      description: response.data.products[key].description,
      price: response.data.products[key].price,
    };
    products.push(pdtObj);
  }
  return products;
}

export async function storeProduct({ productData, lk }) {
  const response = await Axios.post(
    "http://localhost:3000/product/createproduct",
    {
      productName: productData.productName,
      description: productData.description,
      picture: lk,
      stockQty: productData.stockQty,
      price: productData.price,
      storeStoreId: "6",
    }
  );
  const id = response.data.product.productId;
  return id;
}

export async function getProductByStoreId() {
  const response = await Axios.get(
    "http://localhost:3000/product/getProductByStoreId"
  );

  const products = [];

  for (const key in response.data.products) {
    const pdtObj = {
      productId: response.data.products[key].productId,
      productName: response.data.products[key].productName,
      picture: response.data.products[key].picture,
      description: response.data.products[key].description,
      price: response.data.products[key].price,
      stockQty: response.data.products[key].stockQty,
    };
    products.push(pdtObj);
  }
  return products;
}

export async function updateProduct({productData, lk, editedProductId}) {
  const data = {
    "id" : editedProductId,
    "productName": productData.productName,
    "price": productData.price,
    "picture": lk,
    "description": productData.description,
    "stockQty": productData.stockQty,
  }
  await Axios.put(
    "http://localhost:3000/product/updateProduct",
    data
  );
}

export async function deleteProduct({editedProductId}) {
  var data = JSON.stringify({
    "id": editedProductId
  });
  
  var config = {
    method: 'delete',
    url: 'http://localhost:3000/product/deleteProduct',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  Axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}


