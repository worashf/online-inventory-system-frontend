import { storeConstants } from './constants/actionType'

const initialState =[ ]


export const storeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case  storeConstants.ADD_STORE:
            return  [...state,payload];
        case storeConstants.LIST_STORE:
            return payload;
                
        case storeConstants.DELETE_STORE:
            const currentStores = state.filter((store) => store.storeId=== payload ? null : store);
            return currentStores;
        case storeConstants.UPDATE_STORE:
            const stores = state.map((store) => {
                if (store.storeId === payload.storeId) {
                    return payload;
                }
                else {
                    return store
                }
                   
            });
            return stores;
       
     
            
        default:
            return state
 }

    
}

