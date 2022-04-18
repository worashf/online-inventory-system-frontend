import { userConstants} from './constants/actionType'

const initialState ={
    users:[],
    currentUser:null
}


export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        
        case userConstants.LIST_USERS:
            return {...state,users:payload};
                
        case userConstants.DELETE_USER:
            const currentUsers = state.users.filter((user) => user.userId === payload ? null : user);
            return currentUsers;
        case userConstants.UPDATE_USER:
            const users = state.users.map((user)=>{
                if(user.userId === payload.userId){
            return {...state,users:payload};
                }
                else{
                    return {...state,users:user}
                }
                   
            });
            return {...state,users}
        case userConstants.CHECK_TOKEN_SUCESS:
          return {...state,currentUser:payload}

        default:
            return state
 }

    
}

