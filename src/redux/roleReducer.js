import { roleConstants} from './constants/actionType'

const initialState =[ ]


export const roleReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case  roleConstants.ADD_ROLE:
            return  [...state,payload];
        case roleConstants.LIST_ROLES:
            return payload;
                
        case roleConstants.DELETE_ROLE:
            const currentRoles = state.filter((role) => role.roleId=== payload ? null : role);
            return currentRoles;
        case roleConstants.UPDATE_ROLE:
            const roles = state.map((role) => {
                if (role.roleId === payload.roleId) {
                    return payload;
                }
                else {
                    return role;
                }
                   
            });
            return roles;
       
     
            
        default:
            return state
 }

    
}

