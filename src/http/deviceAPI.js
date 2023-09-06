import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


// Done
export const createItem = async (device) => {
    const {data} = await $authHost.post('/api/device', device)
    // console.log(data)
    return data
}

export const callPay = async () => {
    const orderId = localStorage.getItem('order_id')
    const {data} = await $authHost.post('/api/device/getpay', {orderId})
    // console.log(data)
    return data
}

export const fetchDevices = async (itemSort, orderSort, limit, page, filter, id, userId) => {
    const {data} = await $host.get('/api/device/admin/devices-view/', {params: {
        itemSort, orderSort, limit, page, filter, id, userId
        }})
    // console.log(data)
    return data
}

export const deleteDevice = async (id) => {
    const {data} = await $authHost.post('api/device/delete-item/', {id})
    // console.log(data)
    return data
}

// 
export const deleteOneItem = async (deviceId, userId) => {
    const {data} = await $authHost.post('api/device/delete-basket-item/', {deviceId, userId})
    // console.log(data)
    return data
}

// получение товаров корзины
export const fetchBasketDevices = async (userId) => {
    const {data} = await $authHost.post('api/device/basket/', {userId})
    // console.log(data)
    return data
}

// оплата товаров в корзине
export const payBasketList = async (value, id) => {
    const {data} = await $authHost.post('api/device/pay-basket-list/', {value, id})
    localStorage.setItem('order_id', String(data.metadata.order_id));
    return data
}

// кол-во товаров в корзине
export const reciveBasketCount = async (userId) => {
    const {data} = await $authHost.post('api/device/recive-basket-count/', {userId})
    // console.log(data)
    return data
}


export const fetchUsersOrders = async ( params ) => {
    const {data} = await $authHost.post('/api/device/user-pay-goods', params)
    return data
}


export const fetchRequisites = async (array) => {
    const {data} = await $authHost.post('/api/device/fetch-requisites', array)
    // console.log(data)
    return data
}


export const createRequisites = async (array) => {
    const {data} = await $authHost.post('/api/device/create-requisites', array)
    // console.log(data)
    return data
}

export const reciveOrderCount = async (userId) => {
    const {data} = await $authHost.post('api/device/recive-order-count/', {userId})
    // console.log(data)
    return data
}



export const fetchOrderItems = async (id) => {
    const {data} = await $authHost.post('api/device/fetch-order-item/', {id})
    // console.log(data)
    return data
}