'use strict'

import { Types } from '../constants'
import logic from '../../../logic'

export function getProducts() {
    return async function (dispatch, getState) {
        let {data:{data}} = await logic.listProducts()
        dispatch({ type: Types.UPDATE_PRODUCTS, payload: {products: data} })
    }
}