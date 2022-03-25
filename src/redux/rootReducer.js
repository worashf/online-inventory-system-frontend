import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
const rootReducer = combineReducers({
    categories: categoryReducer
})

export default rootReducer;