import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from  '../dashboard/dashboard'
import Customers from  '../customer/customers'
import BillingCycle from '../billingCycle/billingCycle'
import AddOrEditCustomer from '../customer/addOrEditCustomer';
import MovieDetails from '../movieDetails/MovieDetails';

export default props => (
    <Router history={browserHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='movieDetails/:imdbID' component={MovieDetails} />
            <Route path='billingCycles' component={BillingCycle} />
            <Route path='customers' component={Customers} />
            <Route exact path='customer' component={AddOrEditCustomer} />
            <Route path="/customer/:id" component={AddOrEditCustomer} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)