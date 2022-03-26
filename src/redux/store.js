
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'; 
import { createStore, applyMiddleware } from "redux";
const initialState = {}; 

const middleware = [thunk];



const store = createStore(rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;