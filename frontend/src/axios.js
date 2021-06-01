import axios from 'axios';

const axioss = axios.create({
    baseURL: 'http://localhost:1999'
});

export default axioss;