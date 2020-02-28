import {
    LOGIN_REQUESTING,
  } from '../constants/LoginConstant'
  
  // In order to perform an action of type LOGIN_REQUESTING
  // we need an username and password
  const loginRequest = function loginRequest ({ email, password }) {
    return {
      type: LOGIN_REQUESTING,
      email,
      password,
    }
  }
  
  export default loginRequest