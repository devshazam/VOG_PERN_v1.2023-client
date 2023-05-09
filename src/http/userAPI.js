import {instance} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const {data} = await instance.post('/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await instance.post('/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await instance.get('/user/auth' )
    
    if(data.token){
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
    }
    // console.log(data);
    return {stop: 1}

}
