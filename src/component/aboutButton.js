import React from 'react'
import { useHistory } from "react-router"

const AboutButton = (prop) =>{
    const history = useHistory()
    return (
        <button onClick={()=>history.push('/about')}>
                Go To About Page
        </button>
    )
}
export default AboutButton