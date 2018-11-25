const INITIAL_STATE = {movie:[]}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'MOVIEBYID':
            return {...state, movie: action.payload.data}
        default:
            return state
    }
}