import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.112:3333'
    // baseURL: 'http://192.168.43.167:3333'
});

export default api;