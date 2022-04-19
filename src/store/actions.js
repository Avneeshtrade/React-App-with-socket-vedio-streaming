import config from "../config";
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, REQUEST_LOGIN, TOKEN, USER_DETAIL } from "./constants";

const ROOT_URL = config.BASE_URL;
 
export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload),
  };
 
  try {
    dispatch({ type: REQUEST_LOGIN });
    let response = await (new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          user:{
          name:'Avneesh',
          email:'avndvd2409@gmail.com',
          id:'sajdhaskjfhksehrieuriewfnhkdjshfguhg'
        },
        auth_token:"eirowuitrhgkjfdhkgjhdfkjghkfdjhgjkfdhgkdfhgkjdf",
      })
      }, 2000);
    }));
    
    //await fetch(`${ROOT_URL}/login`, requestOptions);
    let data = await response;
    
    if (data.user) {
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      localStorage.setItem(USER_DETAIL, JSON.stringify(data));
      return data
    }
 
    dispatch({ type: LOGIN_ERROR, error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, error: error });
  }
}
 
export async function logout(dispatch) {
  dispatch({ type: LOGOUT });
  localStorage.removeItem(USER_DETAIL);
  localStorage.removeItem(TOKEN);
}