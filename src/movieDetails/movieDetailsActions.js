import axios from 'axios'
import consts from '../consts'

export function getMovieById(imdbID){
    const request = axios.get(`${consts.API_URL}/?i=${imdbID}&plot=full&apikey=${consts.API_KEY}`)
    return {
        type: 'MOVIEBYID',
        payload: request
    }
}
