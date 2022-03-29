import { combineReducers } from "redux";
import { categoryReducer} from "./categoryReducer";
import { brandReducer } from "./brandReducer";
import { companyReducer } from "./companyReducer";
import { storeReducer } from "./storeReducer";
import { supplierReducer } from "./supplierReducer";
import { orderReducer } from "./orderReducer";
const rootReducer = combineReducers({
    categories: categoryReducer,
    brands:brandReducer,
    company: companyReducer,
    stores:storeReducer,
    suppliers:supplierReducer,
    orders:orderReducer,
    
})

export default rootReducer;