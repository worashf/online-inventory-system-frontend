import { brandConstants} from '../constants/actionType'
import axios from 'axios'

export const addBrand = (brand) => async dispatch => {
    try {
        const response = await axios.post("/api/brands", brand);
        if (response.data) {
            dispatch({ type: brandConstants.ADD_BRAND, payload: response.data })
        }
    }
    catch (err) {
       
    }
   
}
export const listBrands= () => async dispatch => {
    try {
        const response =  await axios.get("/api/brands")
        console.log(response)
        dispatch({ type: brandConstants.LIST_BRANDS, payload: response.data })
    }
    catch (err) {

    }
    
}

export const deleteBrand= (brand) => async dispatch => {
    try {
        const { brandId } = brand;
         console.log(brandId)
        const reponse = await axios.delete(`/api/brands/${brandId}`);
        dispatch({type:brandConstants.DELETE_BRAND,payload:brandId})
    }
    catch (err) {
        
    }
}


export const updateBrand = (brand) => async dispatch => {
    const { brandId } = brand;
    try {
        const response = await axios.put(`/api/brands/${brandId}`, brand);
        dispatch({ type: brandConstants.UPDATE_BRAND, payload: response.data })
    }
    catch (err) {
        
    }
   
  }
  