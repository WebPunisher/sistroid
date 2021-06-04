import axios from 'axios';
import  { Redirect } from 'react-router-dom';

const axioss = axios.create({
    baseURL: 'http://localhost:1999'
});

axioss.interceptors.response.use(response => {
   return response;
}, error => {
	if (error.response && error.response.status == 401)
	{
		window.location.replace('http://localhost:3000/signin');
	}
  return Promise.reject(error);
});

export default axioss;