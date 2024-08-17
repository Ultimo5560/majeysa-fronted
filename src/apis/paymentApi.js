import axios from 'axios';

export const paymentApi = axios.create({
    // baseURL: 'http://127.0.0.1:8000/api'
    baseURL: 'https://majeysa-backend.onrender.com/api'
})