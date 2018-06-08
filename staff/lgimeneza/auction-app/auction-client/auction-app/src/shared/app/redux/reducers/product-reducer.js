import { Types } from '../constants/product-types';

const initialState = {
    product:{}
};
export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case Types.UPDATE_PRODUCT:
            return {...state, product: action.payload.product}
        default:
            return state;
    }
}