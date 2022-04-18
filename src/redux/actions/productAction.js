import { productConstants} from '../constants/actionType'
import axios from 'axios'

export const addProduct= (product) => async dispatch => {
   
    const { supplierId, orderNumber} =product;
    console.log(orderNumber,supplierId,product);
    try {
        const response = await axios.post(`/api/products/${supplierId}/${orderNumber}`, product);
        if (response.data) {
            dispatch({ type: productConstants.ADD_PRODUCT, payload: response.data })
        }
    }
    catch (err) {
       
    }
   
}
export const listProducts = () => async dispatch => {
    try {
        const response =  await axios.get("/api/products")
        console.log(response)
        dispatch({ type: productConstants.LIST_PRODUCT, payload: response.data })
    }
    catch (err) {

    }
    
}

export const deleteProduct = (product) => async dispatch => {
    try {
        const { productId} = product;
        
        const reponse = await axios.delete(`/api/products/${productId}`);
        dispatch({type:productConstants.DELETE_PRODUCT, payload:productId})
    }
    catch (err) {
        
    }
}


export const updateProduct = (product) => async dispatch => {
    const { productId} =  product;
    try {
        const response = await axios.put(`/api/products/${productId}`, product);
        dispatch({ type: productConstants.UPDATE_PRODUCT, payload: response.data })
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


  