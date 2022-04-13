import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getToken } from '../utilities/getToken';
// import {setToken} from '../utilities/storeToken';

function Login ({isLoggedIn,setIsLoggedIn}) {
    const initialState = {
        username:'',
        password:'',
        isLoggedIn:isLoggedIn
    }
    const history = useHistory()
    useEffect(()=>{
        if(getToken()){
            history.push('/home')
        }
    })
    const [state,setState] =  useState(initialState)
    const changeHandler = (e) =>{
            setState(s=>(
                {
                    ...s,
                    [e.target.name]:e.target.value
                }
            ))
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        const url = "http://89d8-182-70-198-130.ngrok.io/api/user/login"
        const method = "POST"

    fetch(url,{
        method:method,
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "mode": 'no-cors'
        },
        body:JSON.stringify({
            email:state.username,
            password:state.password
        })
    }).then(r=>r.json()).then(json=>{
        console.log("logged In :- ",json)
        // const {token} = json
        // if(token){
        //     setState(s=>({
        //             ...s,
        //             isLoggedIn:true
        //     }))
        //     setToken(token)   
        //     history.push('/home')
        // }
        // else{
        //     setState(s=>({
        //         ...s,
        //         isLoggedIn:false
        // }))
        // history.push('/login')
        // }
            
    }).catch(err=>{
        console.log(err)
    })
      
    }
	return <div>
		<h2>Login Page</h2>
        <hr /><label>Username</label><input type="text" name="username" placeholder="username" value={state.username} onChange={changeHandler}/>
        <hr /><label>Password</label><input type="password" name="password" placeholder="password" value={state.password} onChange={changeHandler}/>
        <hr /><button onClick={submitHandler}>Login</button>
	</div>
}
export default Login;
