import{ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART} from '../constants';

//method 1
export const addToCart = (payload) =>{//payload --> identify the item that we want to add
    return{
        type: ADD_TO_CART,
        payload
    }
}

//method 2
export const removeFromCart = (payload) =>{ //payload --> identify the item that we want to remove
    return{
        type: REMOVE_FROM_CART,
        payload
    }
}

//method 3
export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}