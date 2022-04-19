import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout, useAuthDispatch } from '../store';
import styles from './style/dashboard.module.css'

const Logout = (props) =>{
    const dispatch = useAuthDispatch()
    const history = useHistory()
    const handleLogout = () => {    
        logout(dispatch)
        
        history.push('/login')
    }
    return (
        <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
    )
}

export default React.memo(Logout);