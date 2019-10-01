import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Dashboard from '../dashboard/dashboard'
import DashboardRedux from '../dashboard/dashboard_com_redux'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <div className='content wrapper'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)