import { actionType } from './constants/actionType'

const initialState =[ ]


export const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.ADD_CATEGOTY:
            return [...state, payload]
        case actionType.LIST_CATEGORIES:
            return [...state,payload]
                
        case actionType.DELETE_CATEGORY:
            const currentCategories = state.filter((category) => category.id === payload.id ? null : category);
            return currentCategories;
            
        default:
            return state
 }

    
}

