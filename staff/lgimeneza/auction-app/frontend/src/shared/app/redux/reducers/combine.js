'use strict'

import { combineReducers } from 'redux'

import products from './products'
import product from './product'
import user from './user'
import alert from './alert'
import query from './query'

const reducers = combineReducers({
    products,
    product,
    user,
    alert,
    query,
})

export default reducers
