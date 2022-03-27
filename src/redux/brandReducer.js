import { brandConstants} from './constants/actionType'

const initialState =[ ]


export const brandReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case brandConstants.ADD_BRAND:
            return  [...state,payload];
        case brandConstants.LIST_BRANDS:
            return payload;
                
        case brandConstants.DELETE_BRAND:
            const currentBrands = state.filter((brand) => brand.brandId === payload? null : brand);
            return currentBrands;
        case brandConstants.UPDATE_BRAND:
            const brands = state.map((brand)=>{
                if(brand.brandId === payload.brandId){
                    return payload;
                }
                else{
                    return brand
                }
                   
            });
            return brands
       

        default:
            return state
 }

    
}

