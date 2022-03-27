import { companyConstants } from '../constants/actionType'
import axios from 'axios'

export const addCompany= (company) => async dispatch => {
    try {
        const response = await axios.post("/api/company", company);
        console.log(response.data)
        if (response.data) {
            dispatch({ type: companyConstants.ADD_COMPANY, payload: response.data })
        }
    }
    catch (err) {
       
    }
   
}
export const listCompany = () => async dispatch => {
    try {
        const response =  await axios.get("/api/company")
        console.log(response)
        dispatch({ type: companyConstants.LIST_COMPANY, payload: response.data })
    }
    catch (err) {

    }
    
}



export const updateCompany = (company) => async dispatch => {
    const { companyId } = company;
    try {
        const response = await axios.put(`/api/company/${companyId}`, company);
        dispatch({ type: companyConstants.LIST_COMPANY, payload: response.data })
    }
    catch (err) {
        
    }
   
  }
  