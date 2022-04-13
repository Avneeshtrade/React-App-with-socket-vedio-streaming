import React from 'react';
import { useHistory } from 'react-router-dom';
import style1 from '../style/card.module.css';

const Card = ({ name,createAt,style2,updatedAt,id}) => {
    const history = useHistory();
    const onClick = (e) =>{
        history.push(`/vedio/${id}`)
    }
    return (
        <div style={{...style2}} onClick={onClick} className={style1.card}>
              <p><b>{name}</b></p>
                <div className={style1.container}>
                    <p>Created At : {createAt}</p>
                    <p>Updated At : {updatedAt}</p>
                </div>
        </div>
    )
}

export default Card;