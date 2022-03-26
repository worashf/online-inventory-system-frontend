import { actionType } from '../constants/actionType'
import axios from 'axios'

export const addCategory = (category) => async dispatch => {
    try {
        const response = await axios.post("/api/categories", category);
        if (response.data) {
            dispatch({ type: actionType.ADD_CATEGOTY, payload: response.data })
        }
    }
    catch (err) {
       
    }
   
}
export const listCategories = () => async dispatch => {
    try {
        const response =  await axios.get("/api/categories")
        console.log(response)
        dispatch({ type: actionType.LIST_CATEGORIES, payload: response.data })
    }
    catch (err) {

    }
    
}

export const deleteCategory = (category) => async dispatch => {
    try {
        const { categoryId } = category;
        console.log(categoryId)
        const reponse = await axios.delete(`/api/categories/${categoryId}`);
        dispatch({type:actionType.DELETE_CATEGORY,payload:categoryId})
    }
    catch (err) {
        
    }
}


export const updateCategory = (category) => async dispatch => {
    const { categoryId } = category;
    try {
        const response = await axios.put(`/api/categories/${categoryId}`, category);
        dispatch({ type: actionType.UPDATE_CATEGORY, payload: response.data })
    }
    catch (err) {
        
    }
   
  }
  