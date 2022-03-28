import { combineReducers } from "redux";
import { categoryReducer} from "./categoryReducer";
import { brandReducer } from "./brandReducer";
import { companyReducer } from "./companyReducer";
import { storeReducer } from "./storeReducer";
import { supplierReducer } from "./supplierReducer";
const rootReducer = combineReducers({
    categories: categoryReducer,
    brands:brandReducer,
    company: companyReducer,
    stores:storeReducer,
    suppliers:supplierReducer,
    
})

export default rootReducer;