import React from 'react'
import ReactDOM from  'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Routes from './main/routes'
import reducers from './main/reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "typeface-roboto";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Routes />
        </Provider>
    </MuiThemeProvider>
    
, document.getElementById('app'))