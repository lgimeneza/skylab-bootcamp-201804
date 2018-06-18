'use strict'

import { combineReducers } from 'redux'

import products from './products'
import categories from './categories'
import product from './product'
import user from './user'
import alert from './alert'
import query from './query'

const reducers = combineReducers({
    products,
    categories,
    product,
    user,
    alert,
    query,
})

export default reducers
