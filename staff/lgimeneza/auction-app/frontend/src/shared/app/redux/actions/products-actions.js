import { Types } from '../constants/products-types';
import Request from 'axios';

export function getProducts() {
    return async function (dispatch, getState) {
        let {data:{data}} = await getProductsFromAPI();
        dispatch({ type: Types.UPDATE_PRODUCTS, payload: {products: data} });
    }
}
function getProductsFromAPI() {
    return Request.get(`http://localhost:5000/api/product`);
}