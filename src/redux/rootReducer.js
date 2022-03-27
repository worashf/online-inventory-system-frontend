import { combineReducers } from "redux";
import { categoryReducer} from "./categoryReducer";
import { brandReducer } from "./brandReducer";
import { companyReducer } from "./companyReducer";
const rootReducer = combineReducers({
    categories: categoryReducer,
    brands:brandReducer,
    company:companyReducer,
})

export default rootReducer;