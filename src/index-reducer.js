import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import client from './redux/reducers/ClientReducer'
import signup from './redux/reducers/SignupReducer'
import login from './redux/reducers/LoginReducer'
import widgets from './redux/reducers/WidgetReducer'

const IndexReducer = combineReducers({
  signup,
  client,
  login,
  form,
  widgets,
})

export default IndexReducer
