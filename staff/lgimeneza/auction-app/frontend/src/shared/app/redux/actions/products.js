'use strict'

import { Types } from '../constants'
import logic from '../../../logic'

export function getProducts(query, categories) {
    return async function (dispatch, getState) {
        const products = await logic.listProducts(query )
        dispatch({ type: Types.UPDATE_PRODUCTS, products })
    }
}