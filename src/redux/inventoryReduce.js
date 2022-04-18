import {inventoryConstants} from './constants/actionType'

const initialState =[ ]


export const inventoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case  inventoryConstants.ADD_INVENTORY:
            return  [...state,payload];
        case inventoryConstants.LIST_INVENTORY:
            return payload;
                
        case inventoryConstants.DELETE_INVENTORY:
            const currentsInventories = state.filter((inventory) => inventory.inventoryId=== payload ? null : inventory);
            return currentsInventories;
        case inventoryConstants.UPDATE_INVENTORY:
            const inventories = state.map((inventory) => {
                if (inventory.inventoryId === payload.inventoryId) {
                    return payload;
                }
                else {
                    return inventories;
                }
                   
            });
            return inventories;
       
     
            
        default:
            return state
 }

    
}

