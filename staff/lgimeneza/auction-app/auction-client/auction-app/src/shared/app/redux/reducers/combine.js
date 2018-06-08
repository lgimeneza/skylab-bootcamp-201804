import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import productsReducer from './products-reducer';
import productReducer from './product-reducer'

const reducers = combineReducers({
    user: userReducer,
    products: productsReducer,
    product: productReducer
});

export default reducers;
