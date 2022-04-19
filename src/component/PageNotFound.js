import React from 'react';
import styles from './style/pagenotfound.module.css';

const PageNotFound = () => {
    return (
        <React.Fragment>
            <h1>404 error</h1>
            <div className={{...styles.size,...styles.monster}}>
                <div className={{...styles.speak}}>
                   
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(PageNotFound);