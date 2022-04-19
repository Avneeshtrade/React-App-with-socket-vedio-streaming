import React from 'react';
import styles from '../style/pagination.module.css';

const Select = ({ items, style,changeHandler,defaultValue="US" }) => {
    return (
        <select style={{...style}} className={styles.classic} value={defaultValue} onChange={changeHandler}>
            {
                items && items.map((e,i)=>{
                    let value = e.code.toLocaleUpperCase();
                    return <option key={i} value={value}>{value} : {e.name}</option>
                })
            }
                    </select>
    )
}
export default React.memo(Select);