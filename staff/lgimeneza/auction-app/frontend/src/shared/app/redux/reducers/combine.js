'use strict'

import { combineReducers } from 'redux'

import products from './products'
import product from './product'
import user from './user'
import alert from './alert'

const reducers = combineReducers({
    products,
    product,
    user,
    alert,
})

export default reducers
