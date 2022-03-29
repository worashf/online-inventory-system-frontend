import { orderConstants } from './constants/actionType'

const initialState =[ ]


export const orderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case  orderConstants.ADD_ORDER:
            return  [...state,payload];
        case orderConstants.LIST_ORDER:
            return payload;
                
        case orderConstants.DELETE_ORDER:
            const currentOrders = state.filter((order) => order.orderId=== payload ? null : order);
            return currentOrders;
        case orderConstants.UPDATE_ORDER:
            const orders = state.map((order) => {
                if (order.orderId === payload.orderId) {
                    return payload;
                }
                else {
                    return orders;
                }
                   
            });
            return orders;
       
     
            
        default:
            return state
 }

    
}

