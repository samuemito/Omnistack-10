import axios from 'axios';

const api = axios.create({
    baseURL: 'https://3333-d1da1044-6cb2-42df-a698-ed664aa3d862.ws-us02.gitpod.io'
});

export default api;