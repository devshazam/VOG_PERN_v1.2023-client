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










export const checkPayStatus = async () => {
    const orderId = localStorage.getItem('order_id')
    const {data} = await $authHost.post('/api/device/getpay', {orderId})
    // console.log(data)
    return data
}

// 


// получение товаров корзины


// оплата товаров в корзине


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




export const reciveOrderCount = async (userId) => {
    const {data} = await $authHost.post('api/device/recive-order-count/', {userId})
    // console.log(data)
    return data
}



