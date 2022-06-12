import{
   ADD_TO_WISHLIST,
   CLEAR_WISHLIST,
   REMOVE_FROM_WISHLIST
} from '../constants';

const initialState={
    name: 'wishListItems',
    initialState: {
        productId : []
    }
}
//function
//input gives by ACTION 
const wishlistItems = (state = [], action)=>{
    switch(action.type){
        case ADD_TO_WISHLIST:
            return [...state, action.payload] //interpolation of entire state
        case REMOVE_FROM_WISHLIST:
            return state.filter(wishlistItem => wishlistItem !== action.payload)
        case CLEAR_WISHLIST:
            return state = []
    }
    return state;
}
export default wishlistItems;