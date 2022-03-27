import { companyConstants} from './constants/actionType'

const initialState ={}


export const companyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case companyConstants.ADD_COMPANY:
            return  {...state,payload};
        case companyConstants.LIST_COMPANY:
            return payload;
                
     
        case companyConstants.UPDATE_COMPANY:
            const companys = state.map((company)=>{
                if(company.companyId === payload.companyId){
                    return payload;
                }
                else{
                    return company;
                }
                   
            });
            return companys;
       

        default:
            return state
 }

    
}

