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

// Done
export const fetchUserItems = async () => {
    const {data} = await instance.get('/device/user-devices')
    return data
}

// Done
export const deleteUserDevice = async (id) => {
    const {data} = await instance.get('/device/delete-device/' + id)
    return data
}

//Done
export const fetchOneDevice = async (id) => {
    const {data} = await instance.get('/device/device-view/' + id)
    return data
}

//Done
export const fetchOffsetDevices = async (category, page = 1) => {
    const {data} = await instance.get('/device/category/' + category + '/' + page)
    return data
}


