import { supplierConstants} from './constants/actionType'

const initialState =[ ]


export const supplierReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case  supplierConstants.ADD_SUPPLIER:
            return  [...state,payload];
        case supplierConstants.LIST_SUPPLIER:
            return payload;
                
        case supplierConstants.DELETE_SUPPLIER:
            const currentSuppliers = state.filter((supplier) => supplier.supplierId=== payload ? null : supplier);
            return currentSuppliers;
        case supplierConstants.UPDATE_SUPPLIER:
            const suppliers = state.map((supplier) => {
                if (supplier.supplierId === payload.supplierId) {
                    return payload;
                }
                else {
                    return  suppliers;
                }
                   
            });
            return suppliers;
       
     
            
        default:
            return state
 }

    
}

