import Cookies from 'js-cookie'

const TokenKey = 'token'
const MERCHANTNO = 'merchantNo'
const MERCHANTNAME = 'merchantName'

export function getMerchantNo() {
  return Cookies.get(MERCHANTNO)
}

export function getMerchantName() {
  return Cookies.get(MERCHANTNAME)
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function removeMerchantNo() {
  return Cookies.remove(MERCHANTNO)
}

export function removeMerchantName() {
  return Cookies.remove(MERCHANTNAME)
}
