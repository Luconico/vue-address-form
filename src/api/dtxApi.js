import axios from 'axios';

axios.defaults.withCredentials = true;

const dtxApi = (method, url, data, headers) => {
    return axios(url,{
        method,
        data,
        headers
    }
    );
}

export default dtxApi;