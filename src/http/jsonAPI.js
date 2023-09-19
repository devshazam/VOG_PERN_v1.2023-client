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




