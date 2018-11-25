const INITIAL_STATE = {movies:[]}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'MOVIES':
            return {...state, movies: action.payload.data}
        default:
            return state
    }
}