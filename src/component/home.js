import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { clearToken } from '../utilities/clearToken';
import { getToken } from '../utilities/getToken';

function Home({setState}) {
    const history = useHistory()
    useEffect(()=>{
        if(!getToken()){
            history.push('/login')
        }
        
    })
    return <div>
        <h1>Welcome to the world of Geeks!</h1>
        <button onClick={()=>{clearToken(); history.push('/login')}}>Logout</button>
    </div>
}

export default Home;
