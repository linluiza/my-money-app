import React from 'react'
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

import AuthOrApp from '../main/authOrApp'
import Dashboard from '../dashboard/dashboard'
import DashboardRedux from '../dashboard/dashboard_com_redux'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={DashboardRedux} />
            <Route path='/billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)