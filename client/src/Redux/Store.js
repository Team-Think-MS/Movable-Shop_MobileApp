import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import cartItems from './Reducers/cartItem';


const reducers = combineReducers({
    //cartReducers
    cartItems: cartItems
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;