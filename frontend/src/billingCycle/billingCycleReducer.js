const INITIAL_STATE = {cycles: []}

export default function billingCycleReducer (state=INITIAL_STATE, action){
    switch(action.type){
        case 'BILLING_CYCLE_LISTED':
            return {...state, cycles: action.payload.data}
        case 'BILLING_CYCLE_CREATED':
            //todo: limpar form
            //      selecionar aba list e atualizar lista
            //return {...state, selected: 'tabList'}
        default: 
            return state
    }
}