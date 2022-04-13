import { TokenKey } from "../constants"

export const getToken = () =>{
    return localStorage.getItem(TokenKey)
}