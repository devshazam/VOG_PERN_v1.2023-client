import {instance} from "./index";



// Done
export const createItem = async (device) => {
    const {data} = await instance.post('/device', device)
    localStorage.setItem('payid', data.id)
    return data
}

export const callPay = async () => {
    const payinfo = localStorage.getItem('payid')
    const {data} = await instance.post('/device/getpay', {
        payinfo: payinfo
      })

    return data
}

