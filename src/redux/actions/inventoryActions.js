import { inventoryConstants} from '../constants/actionType'
import axios from 'axios'

export const addInventory= (inventory) => async dispatch => {
   
    const { storeId} =inventory;
    try {
        const response = await axios.post(`/api/inventories/${storeId}`, inventory);
        if (response.data) {
            dispatch({ type: inventoryConstants.ADD_INVENTORY, payload: response.data })
        }
    }
    catch (err) {
       
    }
   
}
export const listInventories = () => async dispatch => {
    try {
        const response =  await axios.get("/api/inventories")
        console.log(response)
        dispatch({ type: inventoryConstants.LIST_INVENTORY, payload: response.data })
    }
    catch (err) {

    }
    
}

export const deleteInventories = (inventory) => async dispatch => {
    try {
        const { storeId} = inventory;
        
        const reponse = await axios.delete(`/api/inventories/${storeId}`);
        dispatch({type:inventoryConstants, payload:storeId})
    }
    catch (err) {
        
    }
}


export const updateInventory = (inventory) => async dispatch => {
    const { storeId ,inventoryId} =  inventory;

    try {
        const response = await axios.put(`/api/inventories/${inventoryId}/${storeId}`, inventory);
        dispatch({ type: inventoryConstants.UPDATE_INVENTORY, payload: response.data })
    }
    catch (err) {
        
    }
   
}
  

// export const addStoreAddress = (store, address) => async dispatch => {
//     const { storeId } = store;
//     try {
//         const response = await axios.post(`/api/stores/address/${storeId}`, address);
//         dispatch({ type: storeConstants.ADD_ADDRESS, payload: response.data })
//     }

//     catch (err) {
        
//     }


  