import React,{useState} from 'react';
import { loginUser, useAuthDispatch, useAuthState } from '../store';
 
import styles from './style/login.module.css';
 
const Login = (props) => {

    const [state, setState] = useState({
        email:'',
        password:''
    });
    const dispatch = useAuthDispatch() //get the dispatch method from the useDispatch custom hook
    const { loading, errorMessage } = useAuthState()
 
    const handleLogin = async (e) => {
        e.preventDefault()
        let payload = {...state}
        try {
            let response = await loginUser(dispatch, payload)
           if (!response.user) return
            props.history.push('/home') //navigate to dashboard on success
        } catch (error) {
            console.log(error)
        }
    }
    const onChangeHandler = ({target:{value,id}}) =>{
        if(id){
            setState(s=>({
                ...s,
                [id]:value
            }))
        }
    }
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Login Page</h1>
        {
                    errorMessage ? <p className={styles.error}>{errorMessage}</p> : null
        }
        <form>
          <div className={styles.loginForm}>
            <div className={styles.loginFormItem}>
              <label htmlFor='email'>Username</label>
              <input type='text' id='email' onChange={onChangeHandler}/>
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' onChange={onChangeHandler} />
            </div>
          </div>
          <button onClick={handleLogin} disabled={loading}>login</button>
        </form>
      </div>
    </div>
  );
}
 
export default Login;