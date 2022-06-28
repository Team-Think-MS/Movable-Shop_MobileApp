import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREMENT,
} from "../constants";

//function
//input gives by ACTION
const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]; //interpolation of entire state
    case REMOVE_FROM_CART:
      return state.filter((cartItem) => cartItem !== action.payload);
    case CLEAR_CART:
      return (state = []);
    case INCREMENT:
      return action.payload;
  }
  return state;
};
export default cartItems;
{
  /** */
}
