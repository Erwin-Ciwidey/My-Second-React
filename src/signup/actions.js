import { SIGNUP_REQUESTING } from './constants'

const signupRequest = function signupRequest ({ email, password }) {
  console.log('called');
  return {
    type: SIGNUP_REQUESTING,
    email,
    password,
  }
}
//https://start.jcolemorrison.com/react-and-redux-sagas-authentication-app-tutorial/

export default signupRequest
