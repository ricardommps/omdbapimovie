import axios from 'axios'
import consts from '../consts'

export function getMovies(values) {
    const request = axios.get(`${consts.API_URL}/?s=${values}&apikey=${consts.API_KEY}`)
    return {
        type: 'MOVIES',
        payload: request
    }
}