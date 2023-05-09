import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });


// instance.interceptors.request.use( (config) => {
//     config.headers.authorization = `localStorage.getItem('token')
//     return config
// });

const authInterceptor = config => {
// console.log(localStorage.getItem('token'))
if(localStorage.getItem('token') !== null){
  config.headers.authorization = `Bearers ${localStorage.getItem('token')}`;
  }  return config
}

instance.interceptors.request.use(authInterceptor)

export default instance;