import { userConstants} from '../constants/actionType'
import axios from 'axios'

export const addUser= (user) => async dispatch => {
    try {
        const {roleId}= user
        const response = await axios.post(`/api/users/${roleId}`, user);
        if (response.data) {
            dispatch({ type: userConstants.ADD_USER, payload: response.data })
        }
        console.log("user",response.data)
    }
    catch (err) {
       
    }
   
}
export const listUsers = () => async dispatch => {
    try {
        const response =  await axios.get("/api/users")
        console.log(response)
        dispatch({ type: userConstants.LIST_USERS, payload: response.data })
    }
    catch (err) {

    }
    
}

export const deleteUser = (user) => async dispatch => {
    try {
        const { userId} = user;
      
        const reponse = await axios.delete(`/api/users/${userId}`);
        dispatch({type:userConstants.DELETE_USER,payload:userId})
    }
    catch (err) {
        
    }
}


export const updateUser = (user) => async dispatch => {
    const { userId } = user;
    try {
        const response = await axios.put(`/api/users/${userId}`, user);
        dispatch({ type: userConstants.UPDATE_USER, payload: response.data })
    }
    catch (err) {
        
    }
   
}
  


export const checkTokenSuccess=(payload)=>({
    type: userConstants.CHECK_TOKEN_SUCESS,
    payload 
 })

export const checkTokenAsync=(token)=>async (dispatch)=>{
  

 try{

  const res= await axios.post(`/api/checktoken/${token}` )
    
  let {roles,userName} =res.data
  

  dispatch({ type: userConstants.CHECK_TOKEN_SUCESS, payload: {userName,role:roles[0]}})

 }

    
    catch(err) {
      console.log(err.message)
    }
}



  