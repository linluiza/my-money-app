const INITIAL_STATE = {summary: {credit: 0, debt: 0}}

function dashboardReducer(state=INITIAL_STATE, action){
    if(action.type == "BILLING_SUMMARY_LOADED"){
        return {...state, summary: action.payload ? action.payload.data : undefined }
    } else {
        return state
    }
}

export default dashboardReducer