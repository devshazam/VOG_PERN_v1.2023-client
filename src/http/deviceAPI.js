import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


// Done
export const createItem = async (device) => {
    const {data} = await $authHost.post('/api/device', device)
    localStorage.setItem('payid', data.id) 
    localStorage.setItem('orderid', data.metadata.order_id)
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
    const {data} = await $authHost.post('api/device/basket/', {id})
    // const {data} = await $authHost.post('api/device/delete-item/', id)
    console.log(data)
    return data
}


export const fetchBasketDevices = async (id) => {
    const {data} = await $authHost.post('api/device/delete-item/', {id})
    console.log(data)
    return data
}
