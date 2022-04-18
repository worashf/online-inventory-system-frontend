import { roleConstants} from '../constants/actionType'
import axios from 'axios'
  const token = localStorage.getItem("token");
export const addRole= (role) => async dispatch => {
    try {
        const response = await axios.post(`/api/roles`, role, );
        if (response.data) {
            dispatch({ type: roleConstants.ADD_ROLE, payload: response.data })
        }
    }
    catch (err) {
       
    }
   
}
export const listRoles = () => async dispatch => {
    try {
        const response =  await axios.get("/api/roles")
        console.log(response)
        dispatch({ type: roleConstants.LIST_ROLES, payload: response.data })
    }
    catch (err) {

    }
    
}

export const deleteRole = (role) => async dispatch => {
    try {
        const { roleId} = role;
      
        const reponse = await axios.delete(`/api/roles/${roleId}`);
        dispatch({type:roleConstants.DELETE_ROLE,payload:roleId})
    }
    catch (err) {
        
    }
}


export const updateRole = (role) => async dispatch => {
    const { roleId } = role;
    try {
        const response = await axios.put(`/api/roles/${roleId}`, role);
        dispatch({ type: roleConstants.UPDATE_ROLE, payload: response.data })
    }
    catch (err) {
        
    }
   
}
  




  