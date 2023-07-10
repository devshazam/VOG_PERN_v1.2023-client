import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password, name, phone) => {
    const {data} = await $host.post('/api/user/registration', {email, password, name, phone})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('/api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    try{
        const {data} = await $authHost.get('/api/user/auth' )
        localStorage.setItem('token', data.token)
        console.log(`All ok`);
        return jwt_decode(data.token)
        
    }catch(e){
        console.log(e.name + e.message);
        return 213;
    }finally{
        console.log(`All Tasks are Done`);
  }
}

// export const confirmMail = async (email) => {
//     const {data} = await $host.post('/user/confirm-mail', {email})
//     // localStorage.setItem('token', data.token)
//     // Question - в последствии можно сделать сохранение информации в куки
//     return data
// }


