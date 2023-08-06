import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


// Done
export const createGoodsItem = async (goods) => {
    const {data} = await $authHost.post('/api/goods', goods)
    return data
}

export const fetchGoodsList = async ( limit, page, category ) => {
    const {data} = await $host.get('/api/goods/fetch-list', {params: {
        limit, page, category
        }})
    return data
}

export const fetchOneGoods = async ( id ) => {
    const {data} = await $host.get('/api/goods/fetch-one', {params: {
        id
        }})
    return data
}


