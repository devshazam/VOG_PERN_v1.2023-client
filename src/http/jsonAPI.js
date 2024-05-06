import {$authHost, $host} from "./index";


// Done
export const fetchJson = async () => {
    const {data} = await $host.post('/api/jsona/fetch')
    return data
}


export const updateJson = async () => {
    const {data} = await $host.post('/api/jsona/update')
    return data
}


export const updatePriceByExel = async ( params ) => {
    const {data} = await $host.post('/api/jsona/update-price-by-exel', params)
    return data
}

export const fetchPriceOfProduce = async ( params ) => {
    const {data} = await $host.post('/api/jsona/fetch-price-of-produce', params)
    return data
}

export const createObjectItem = async ( params ) => {
    const {data} = await $host.post('/api/jsona/create', params)
    return data
}

export const fetchEditorObjects = async ( params ) => {
    const {data} = await $host.post('/api/jsona/get-editor-objects', params)
    return data
}



