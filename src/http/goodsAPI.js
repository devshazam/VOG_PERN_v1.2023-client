import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


// Done
export const createGoodsItem = async (device) => {
    const {data} = await $authHost.post('/api/device', device)
    return data
}


// export const fetchDevices = async (itemSort, orderSort, limit, page, filter, id, userId) => {
//     const {data} = await $host.get('/api/device/admin/devices-view/', {params: {
//         itemSort, orderSort, limit, page, filter, id, userId
//         }})
//     console.log(data)
//     return data
// }


