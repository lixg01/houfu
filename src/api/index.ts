import { request } from 'utils/request'

//登录
export const LoginApi = <T>(params: object) => request.post<T>('/user/login', params)
// 获取商户的QR码
export const qrcodeListByMerchant = <T>(params: object) => request.post<T>('/auth/qrcode/v1/listByMerchant', params)
