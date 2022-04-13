import { TokenKey } from "../constants"

export function clearToken(){
    localStorage.removeItem(TokenKey)
}