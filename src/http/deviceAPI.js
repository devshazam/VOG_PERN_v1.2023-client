import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


// Done
export const createItem = async (device) => {
    const {data} = await $authHost.post('/api/device', device)
    localStorage.setItem('payid', data.id)
    localStorage.setItem('orderid', data.metadata.order_id)
    return data
}


export const callPay = async () => {
    const payinfo = localStorage.getItem('payid')
    const orderid = localStorage.getItem('orderid')
    const {data} = await $authHost.post('/api/device/getpay', {
        payinfo, orderid
      })
    return data
}

export const fetchDevices = async (itemSort, orderSort, limit, page) => {
    const {data} = await $host.get('/api/device/admin/devices-view/', {params: {
        itemSort, orderSort, limit, page
        }})
    return data
}


export const deleteDevice = async (id) => {
    const {data} = await $authHost.post('api/device/delete-item/', id)
    return data
}

// export const fetchBrands = async () => {
//     const {data} = await $host.get('api/brand', )
//     return data
// }

// export const createDevice = async (device) => {
//     const {data} = await $authHost.post('api/device', device)
//     return data
// }

// export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
//     const {data} = await $host.get('api/device', {params: {
//             typeId, brandId, page, limit
//         }})
//     return data
// }