import { actionType } from './constants/actionType'

const initialState =[ ]


export const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.ADD_CATEGOTY:
            return  [...state,payload];
        case actionType.LIST_CATEGORIES:
            return payload;
                
        case actionType.DELETE_CATEGORY:
            const currentCategories = state.filter((category) => category.categoryId === payload ? null : category);
            return currentCategories;
        case actionType.UPDATE_CATEGORY:
            return  [...state,payload];

        default:
            return state
 }

    
}

