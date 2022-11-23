import axios from 'axios';

const fcsApi = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export default fcsApi;