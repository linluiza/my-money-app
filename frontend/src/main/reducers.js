import {combineReducers} from 'redux'

import dashboardReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/tabs/tabReducers'
import billingCycleReducer from '../billingCycle/billingCycleReducer'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer
})

export default rootReducer