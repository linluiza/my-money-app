const INITIAL_STATE = {selected: '', tabsToShow: {}}

export default function (state=INITIAL_STATE, action){
    switch(action.type){
        case 'TAB_SELECTED':
            return {...state, selected: action.payload}
        case 'TAB_VISIBLE':
            return {...state, tabsToShow: action.payload }
        default: 
            return state
    }
}