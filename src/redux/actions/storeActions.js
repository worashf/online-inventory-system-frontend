import { storeConstants } from '../constants/actionType'
import axios from 'axios'

export const addStore= (store) => async dispatch => {
    const{companyId} =store
    try {
        const response = await axios.post(`/api/stores/${companyId}`, store);
        if (response.data) {
            dispatch({ type: storeConstants.ADD_STORE, payload: response.data })
        }
    }
    catch (err) {
       
    }
   
}
export const listStores = () => async dispatch => {
    try {
        const response =  await axios.get("/api/stores")
        console.log(response)
        dispatch({ type: storeConstants.LIST_STORE, payload: response.data })
    }
    catch (err) {

    }
    
}

export const deleteStore = (store) => async dispatch => {
    try {
        const { storeId} = store;
        console.log(storeId)
        const reponse = await axios.delete(`/api/stores/${storeId}`);
        dispatch({type:storeConstants.DELETE_STORE,payload:storeId})
    }
    catch (err) {
        
    }
}


export const updateStore = (store) => async dispatch => {
    const { storeId } = store;
    try {
        const response = await axios.put(`/api/stores/${storeId}`, store);
        dispatch({ type: storeConstants.UPDATE_STORE, payload: response.data })
    }
    catch (err) {
        
    }
   
}
  

export const addStoreAddress = (store, address) => async dispatch => {
    const { storeId } = store;
    try {
        const response = await axios.post(`/api/stores/address/${storeId}`, address);
        dispatch({ type: storeConstants.ADD_ADDRESS, payload: response.data })
    }

    catch (err) {
        
    }

}
  