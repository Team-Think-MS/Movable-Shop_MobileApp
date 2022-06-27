import Axios from "axios";

export async function fetchStores() {
  const response = await Axios.get("http://localhost:3000/store/getallstores");

  const stores = [];

  for (const key in response.data.stores) {
    const strObj = {
      storeId: response.data.stores[key].storeId,
      storeName: response.data.stores[key].storeName,
      picture: response.data.stores[key].picture,
      categoryId: response.data.stores[key].categoryCategoryId,
      description: response.data.stores[key].description,
    };
    stores.push(strObj);
  }
  return stores;
}
