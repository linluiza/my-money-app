const INITIAL_STATE = {cycles: []}

export default function billingCycleReducer (state=INITIAL_STATE, action){
    switch(action.type){
        case 'BILLING_CYCLE_LISTED':
            return {...state, cycles: action.payload ? action.payload.data : undefined }
        default: 
            return state
    }
}