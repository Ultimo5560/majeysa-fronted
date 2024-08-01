import axios from 'axios';

export const undesplashApi = axios.create({
    baseURL: 'https://api.unsplash.com/search/photos'
})