import React from 'react'
import { useAuthState } from '../store'
import styles from './style/dashboard.module.css'
 
function Dashboard(props) {
    
    const userDetails = useAuthState()

    return (
        <div style={{ padding: 10 }}>
            <div className={styles.dashboardPage} >
                <h1>
                    Dashboard
                </h1>
               
            </div>
            <p>Welcome {userDetails.user && userDetails.user.email}</p>
        </div>
    )
}
 
export default Dashboard