import { combineReducers } from "redux";
import { categoryReducer} from "./categoryReducer";
import { brandReducer } from "./brandReducer";
import { companyReducer } from "./companyReducer";
import { storeReducer } from "./storeReducer";
import { supplierReducer } from "./supplierReducer";
import { orderReducer } from "./orderReducer";
import { productReducer } from "./productReducer";
import { inventoryReducer } from "./inventoryReduce";
import { roleReducer } from "./roleReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    categories: categoryReducer,
    brands:brandReducer,
    company: companyReducer,
    stores:storeReducer,
    suppliers:supplierReducer,
    orders:orderReducer,
    products:productReducer,
    inventories:inventoryReducer,
    roles:roleReducer,
    users:userReducer,
    
})

export default rootReducer;