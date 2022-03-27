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
            const Categories = state.map((category)=>{
                if(category.categoryId === payload.categoryId){
                    return payload;
                }
                else{
                    return category
                }
                   
            });
            return Categories
       

        default:
            return state
 }

    
}

