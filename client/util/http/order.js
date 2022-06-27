import Axios from "axios";

export async function getOrderByUserId() {
    const response = await Axios.get(
      "http://localhost:3000/order/getOrderByUserId"
    );
  
    const orders = [];
  
    for (const key in response.data.order) {
      const odrObj = {
        orderId: response.data.order[key].orderId,
        totalPrice: response.data.order[key].totalPrice,
        quantity: response.data.order[key].quantity,
        placeDate: response.data.order[key].placeDate,
        userId: response.data.order[key].userUserId,
      };
      orders.push(odrObj);
    }
    return orders;
  }