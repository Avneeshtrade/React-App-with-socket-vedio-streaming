import React from 'react'
import { useHistory } from "react-router"

const HomeButton = (prop) =>{
    const history = useHistory()
    return (
        <button onClick={()=>history.push('/home')}>
                Go To Home
        </button>
    )
}
export default HomeButton