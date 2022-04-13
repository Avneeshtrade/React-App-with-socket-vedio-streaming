import { TokenKey } from "../constants"

export const setToken = (token) =>{
    return localStorage.setItem(TokenKey,token)
}