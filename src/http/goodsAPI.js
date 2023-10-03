import {$authHost, $host} from "./index";


// Done
export const createGoodsItem = async (goods) => {
    const {data} = await $authHost.post('/api/goods', goods)
    return data
}


export const fetchOneGoods = async ( params ) => {
    const {data} = await $host.post('/api/goods/fetch-one', params)
    return data
}


export const fetchGoodsList = async ( limit, page, categoryIt, itemSort, orderSort ) => {
    const {data} = await $host.get('/api/goods/fetch-list', {params: {
        limit, page, categoryIt, itemSort, orderSort
        }})
    return data
}


export const updateItemByID = async ( goods ) => {
    const {data} = await $authHost.post('/api/goods/update-one', goods)
    return data
}


export const deleteItemByID = async ( id ) => {
    const {data} = await $authHost.get('/api/goods/delete-one', {params: {
        id
        }})
    return data
}


export const fetchXslFile = async () => {
    const {data} = await $authHost.get('/api/goods/fetch-xsl-file')
    return data
}


export const fetchListOfGoods = async ( param ) => {
    const {data} = await $authHost.post('/api/goods/fetch-list-of-goods', param)
    return data
}

export const changeGoodsParams = async ( param ) => {
    const {data} = await $authHost.post('/api/goods/change-goods-params', param)
    return data
}

export const increasePriceByProcent = async ( param ) => {
    const {data} = await $authHost.post('/api/goods/increase-price-by-procent', param)
    return data
}

export const createPriceTable = async ( params ) => {
    const {data} = await $host.post('/api/goods/create-price-table', params)
    return data
}
export const fetchOnePrice = async ( params ) => {
    const {data} = await $host.post('/api/goods/fetch-one-price', params)
    return data
}

export const updatePriceTable = async ( params ) => {
    const {data} = await $host.post('/api/goods/update-price-table', params)
    return data
}

export const updatePriceTableB = async ( params ) => {
    const {data} = await $host.post('/api/goods/update-price-table-b', params)
    return data
}
export const updatePriceTableC = async ( params ) => {
    const {data} = await $host.post('/api/goods/update-price-table-c', params)
    return data
}
export const updatePriceTableD = async ( params ) => {
    const {data} = await $host.post('/api/goods/update-price-table-d', params)
    return data
}

export const updateGoodsByExel = async ( params ) => {
    const {data} = await $host.post('/api/goods/update-by-exel', params)
    return data
}