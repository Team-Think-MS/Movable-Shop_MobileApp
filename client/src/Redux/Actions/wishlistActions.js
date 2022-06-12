import{ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST,CLEAR_WISHLIST} from '../constants';

//method 1 -> function -> action creator
export const addToWishList = (payload) =>{//payload --> identify the item that we want to add
    return{
        //action
        type: ADD_TO_WISHLIST, //description about the action we did
        payload // return relevant data 
    }
}

//method 2
export const removeFromWishList = (payload) =>{ //payload --> identify the item that we want to remove
    return{
        type: REMOVE_FROM_WISHLIST,
        payload
    }
}

//method 3
export const clearWishList = () => {
    return {
        type: CLEAR_WISHLIST
    }
}