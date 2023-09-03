import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


// Done
export const createItem = async (device) => {
    const {data} = await $authHost.post('/api/device', device)
    // console.log(data)
    return data
}

export const callPay = async () => {
    const payinfo = localStorage.getItem('payid')
    const orderid = localStorage.getItem('ordersId')
    const {data} = await $authHost.post('/api/device/getpay', {
        payinfo, orderid
      })
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
export const deleteOneItem = async (id) => {
    const {data} = await $authHost.post('api/device/delete-basket-item/', {id})
    // console.log(data)
    return data
}

// получение товаров корзины
export const fetchBasketDevices = async (id) => {
    const {data} = await $authHost.post('api/device/basket/', {id})
    // console.log(data)
    return data
}

// оплата товаров в корзине
export const payBasketList = async (value, ordersId) => {
    console.log(123)
    console.log(ordersId)
    localStorage.setItem('ordersId', JSON.stringify(ordersId));
    const {data} = await $authHost.post('api/device/pay-basket-list/', {value})
    console.log(data.id)
    localStorage.setItem('payid', String(data.id));
    return data
}

// кол-во товаров в корзине
export const reciveBasketCount = async (id) => {
    const {data} = await $authHost.post('api/device/recive-basket-count/', {id})
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
