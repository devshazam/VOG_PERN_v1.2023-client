import {instance} from "./index";

export const createType = async (type) => {
    const {data} = await instance.post('api/type', type)
    return data
}
// Done
export const fetchHomeDevices = async () => {
    const {data} = await instance.get('/device/')
    return data
}

// Done
export const createItem = async (device) => {
    const {data} = await instance.post('/device/create-device', device)
    return data
}



