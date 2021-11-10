import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://https://keen-shockley-0c9d1a.netlify.app/api'
})