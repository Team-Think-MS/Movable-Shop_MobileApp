import{ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART,INCREMENT} from '../constants';

//method 1 -> function -> action creator
export const addToCart = (payload) =>{//payload --> identify the item that we want to add
    return{
        //action
        type: ADD_TO_CART, //description about the action we did
        payload // return relevant data 
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

//method 4
export const increment=(payload)=>{
    return{
        type: INCREMENT,
        payload,
    }
}
{/** */}