import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import cartItems from './Reducers/cartItem';
import wishlistItems from './Reducers/wishlistItems';

const reducers = combineReducers({
    //cartReducer
    cartItems: cartItems,
    //wishlistReducer
    wishlistItems:wishlistItems
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
) 



export default store;