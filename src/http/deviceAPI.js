import {$authHost, $host} from "./index";


export const createDevice = async (device) => {
    const {data} = await $authHost.post('/api/device/create-device', device)
    console.log(data)
    return data
}

export const createRequisites = async (array) => {
    const {data} = await $authHost.post('/api/device/create-requisites', array)
    console.log(data)
    return data
}

export const ordersAdminList = async (array) => {
    const {data} = await $authHost.post('/api/device/orders-admin-list/', array)
    console.log(data)
    return data
}

export const fetchAllDevicesFromOneOrder = async (array) => {
    const {data} = await $authHost.post('api/device/fetch-order-item/', array)
    console.log(data)
    return data
}

export const changeDoneStatusToDone = async (array) => {
    const {data} = await $authHost.post('api/device/delete-item/', array)
    console.log(data)
    return data
}

export const deleteItemFromBasket = async (array) => {
    const {data} = await $authHost.post('api/device/delete-basket-item/', array)
    console.log(data)
    return data
}

export const fetchBasketDevices = async (array) => {
    const {data} = await $authHost.post('api/device/basket/', array)
    console.log(data)
    return data
}

export const paymentForCartItems = async (array) => {
    const {data} = await $authHost.post('api/device/pay-basket-list/', array)
    localStorage.setItem('order_id', String(data.metadata.order_id));
    return data
}

export const checkPayStatus = async (array) => {
    // const orderId = localStorage.getItem('order_id')
    const {data} = await $authHost.post('/api/device/getpay', array)
    return data
}


export const reciveBasketCount = async (array) => {
    const {data} = await $authHost.post('api/device/recive-basket-count/', array)
    return data
}


export const fetchUsersOrders = async ( array ) => {
    const {data} = await $authHost.post('/api/device/user-pay-goods', array)
    return data
}


export const fetchRequisites = async (array) => {
    const {data} = await $authHost.post('/api/device/fetch-requisites', array)
    return data
}


export const reciveOrderCount = async (array) => {
    const {data} = await $authHost.post('api/device/recive-order-count/', array)
    return data
}


export const fetchUserByOrderId = async (array) => {
    const {data} = await $authHost.post('/api/device/fetch-user-by-order-id', array)
    return data
}
