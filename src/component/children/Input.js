import React from 'react'

const Input = ({value,changeHandler,style,keyDownHandler}) =>{
    return <input style={{...style}} value={value} onKeyDown={keyDownHandler} onChange={changeHandler} placeholder="search by keyword......"/>
}

export default React.memo(Input);