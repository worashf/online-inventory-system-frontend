import { actionType} from '../constants/actionType'

export const addCategory =(category) =>{
    return {
        type:actionType.ADD_CATEGOTY,
        payload:category
    }
}

export const deleteCategory =(category)=>{
  return {
      type:actionType.DELETE_CATEGORY,
      payload:category
  }
}

export const updateCategory =(currentId,category)=>{
    return {
        type:actionType.UPDATE_CATEGORY,
        payload:category
    }
  }
  