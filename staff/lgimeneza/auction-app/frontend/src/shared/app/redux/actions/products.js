'use strict'

import { Types } from '../constants'
import logic from '../../../logic'

export function getProducts() {
    return async function (dispatch, getState) {
        let products = await logic.listProducts()
        dispatch({ type: Types.UPDATE_PRODUCTS, payload: {products} })
    }
}