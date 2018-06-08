'use strict'

import { combineReducers } from 'redux';
import userReducer from './user';
import productsReducer from './products';
import productReducer from './product'

const reducers = combineReducers({
    user: userReducer,
    products: productsReducer,
    product: productReducer
});

export default reducers;
