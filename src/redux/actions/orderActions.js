import { orderConstants} from '../constants/actionType'
import axios from 'axios'

export const addOrder= (order) => async dispatch => {
    console.log("orders",order)
    const { supplierId} =order;
    try {
        const response = await axios.post(`/api/orders/${supplierId}`, order);
        if (response.data) {
            dispatch({ type: orderConstants.ADD_ORDER, payload: response.data })
        }
    }
    catch (err) {
       
    }
   
}
export const listOrders = () => async dispatch => {
    try {
        const response =  await axios.get("/api/orders")
        console.log(response)
        dispatch({ type: orderConstants.LIST_ORDER, payload: response.data })
    }
    catch (err) {

    }
    
}

export const deleteOrder = (order) => async dispatch => {
    try {
        const { orderId} = order;
        
        const reponse = await axios.delete(`/api/orders/${orderId}`);
        dispatch({type:orderConstants.DELETE_ORDER, payload:orderId})
    }
    catch (err) {
        
    }
}


export const updateOrder = (order) => async dispatch => {
    const { orderId } =  order;
    try {
        const response = await axios.put(`/api/orders/${orderId}`, order);
        dispatch({ type: orderConstants.UPDATE_ORDER, payload: response.data })
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


  