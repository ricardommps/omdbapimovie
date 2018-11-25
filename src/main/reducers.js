import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import MovieDetailsReducer from '../movieDetails/movieDetailsReducer'

const rootReducer = combineReducers({
    dashboardReducer: DashboardReducer,
    movieDetailsReducer: MovieDetailsReducer

})

export default rootReducer