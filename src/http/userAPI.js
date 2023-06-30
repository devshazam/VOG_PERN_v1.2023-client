import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password, name, phone) => {
    const {data} = await $host.post('/user/registration', {email, password, name, phone})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const confirmMail = async (email) => {
    const {data} = await $host.post('/user/confirm-mail', email)
    // localStorage.setItem('token', data.token)
    // Question - в последствии можно сделать сохранение информации в куки
    return data
}


