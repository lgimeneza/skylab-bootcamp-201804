import { Types } from '../constants/product-types';
import Request from 'axios';

export function getProduct(id) {
    return async function (dispatch, getState) {
        let {data:{data}} = await getProductFromAPI(id);
        dispatch({ type: Types.UPDATE_PRODUCT, payload: {product: data} });
    }
}
function getProductFromAPI(id) {
    return Request.get(`http://localhost:5000/api/product/${id}`);
}