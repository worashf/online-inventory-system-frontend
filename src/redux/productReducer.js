import { productConstants} from './constants/actionType'

const initialState =[ ]


export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case  productConstants.ADD_PRODUCT:
            return  [...state,payload];
        case productConstants.LIST_PRODUCT:
            return payload;
                
        case productConstants.DELETE_PRODUCT:
            const currentProducts = state.filter((product) => product.productId=== payload ? null : product);
            return currentProducts;
        case productConstants.UPDATE_PRODUCT:
            const products = state.map((product) => {
                if (product.productId === payload.productId) {
                    return payload;
                }
                else {
                    return products;
                }
                   
            });
            return products;
       
     
            
        default:
            return state
 }

    
}

