import { Types } from '../constants/products-types';

const initialState = {
    products:[]
};
export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case Types.UPDATE_PRODUCTS:
            return {...state, products: action.payload.products}
        default:
            return state;
    }
}