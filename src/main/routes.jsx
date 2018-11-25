import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from  '../dashboard/dashboard'
import MovieDetails from '../movieDetails/MovieDetails';

export default props => (
    <Router history={browserHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='movieDetails/:imdbID' component={MovieDetails} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)