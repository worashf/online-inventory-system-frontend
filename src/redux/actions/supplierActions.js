import { supplierConstants} from '../constants/actionType'
import axios from 'axios'

export const addSupplier= (supplier) => async dispatch => {
    try {
        const response = await axios.post(`/api/suppliers`, supplier);
        if (response.data) {
            dispatch({ type: supplierConstants.ADD_SUPPLIER, payload: response.data })
        }
    }
    catch (err) {
       
    }
   
}
export const listSuppliers = () => async dispatch => {
    try {
        const response =  await axios.get("/api/suppliers")
        console.log(response)
        dispatch({ type: supplierConstants.LIST_SUPPLIER, payload: response.data })
    }
    catch (err) {

    }
    
}

export const deleteSupplier = (supplier) => async dispatch => {
    try {
        const { supplierId} = supplier;
      
        const reponse = await axios.delete(`/api/suppliers/${supplierId}`);
        dispatch({type:supplierConstants.DELETE_SUPPLIER,payload:supplierId})
    }
    catch (err) {
        
    }
}


export const updateSupplier = (supplier) => async dispatch => {
    const { supplierId } = supplier;
    try {
        const response = await axios.put(`/api/suppliers/${supplierId}`, supplier);
        dispatch({ type: supplierConstants.UPDATE_SUPPLIER, payload: response.data })
    }
    catch (err) {
        
    }
}
    export const approveSupplier = (supplierId, supplier) => async dispatch => {
        
      console.log(supplierId)
        try {
            const response = await axios.put(`/api/suppliers/approve/${supplierId}`,supplier);
            dispatch({ type: supplierConstants.APPROVE_SUPPLIER, payload: response.data })
        }
        catch (err) {
            
        }
   
}
export const declineSupplier = (supplier) => async dispatch => {
    const { supplierId } = supplier;
    try {
        const response = await axios.put(`/api/suppliers/decline/${supplierId}`);
        dispatch({ type: supplierConstants.APPROVE_SUPPLIER, payload: response.data })
    }
    catch (err) {
        
    }

}
  




  