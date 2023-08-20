import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


// Done
export const createItem = async (device) => {
    console.log(device)
    alert(123)
    const {data} = await $authHost.post('/api/device', device)
    console.log(data)
    return data
}

export const callPay = async () => {
    const payinfo = localStorage.getItem('payid')
    const orderid = localStorage.getItem('orderid')
    const {data} = await $authHost.post('/api/device/getpay', {
        payinfo, orderid
      })
    console.log(data)
    return data
}

export const fetchDevices = async (itemSort, orderSort, limit, page, filter, id, userId) => {
    const {data} = await $host.get('/api/device/admin/devices-view/', {params: {
        itemSort, orderSort, limit, page, filter, id, userId
        }})
    console.log(data)
    return data
}

export const deleteDevice = async (id) => {
    const {data} = await $authHost.post('api/device/delete-item/', {id})
    console.log(data)
    return data
}

export const deleteOneItem = async (id) => {
    const {data} = await $authHost.post('api/device/delete-basket-item/', {id})
    console.log(data)
    return data
}

export const fetchBasketDevices = async (id) => {
    const {data} = await $authHost.post('api/device/basket/', {id})
    console.log(data)
    return data
}


export const payBasketList = async (funcPrice) => {
    const {data} = await $authHost.post('api/device/pay-basket-list/', {funcPrice})
    console.log(data)
    return data
}

export const reciveBasketCount = async (id) => {
    const {data} = await $authHost.post('api/device/recive-basket-count/', {id})
    console.log(data)
    return data
}


// export const fetchBasketDevices = async (id) => {
//     const {data} = await $authHost.post('api/device/delete-item/', {id})
//     console.log(data)
//     return data
// }
