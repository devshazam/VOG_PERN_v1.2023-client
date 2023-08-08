import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


// Done
export const createGoodsItem = async (goods) => {
    const {data} = await $authHost.post('/api/goods', goods)
    return data
}

export const fetchGoodsList = async ( limit, page, categoryIt, itemSort, orderSort ) => {
    const {data} = await $host.get('/api/goods/fetch-list', {params: {
        limit, page, categoryIt, itemSort, orderSort
        }})
    return data
}

export const fetchOneGoods = async ( id ) => {
    const {data} = await $host.get('/api/goods/fetch-one', {params: {
        id
        }})
    return data
}

export const deleteItemByID = async ( id ) => {
    const {data} = await $authHost.get('/api/goods/delete-one', {params: {
        id
        }})
    return data
}

export const updateItemByID = async ( goods ) => {
    const {data} = await $authHost.post('/api/goods/update-one', goods)
    return data
}