const INITIAL_STATE = {selected: ''}

function handleTab(state=INITIAL_STATE, action){
    switch(action.type){
        case 'TAB_SELECTED':
            return {...state, selected: action.payload}
        default: 
            return state
    }
}

export default {handleTab}