import axios from 'axios';

const dtxApi = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export default dtxApi;