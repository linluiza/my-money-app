const INITIAL_STATE = {cycles: []}

export default function billingCycleReducer (state=INITIAL_STATE, action){
    switch(action.type){
        case 'BILLING_CYCLE_LISTED':
            console.log('list payload: '+action.payload.data)
            return {...state, cycles: action.payload.data}
        default: 
            return state
    }
}