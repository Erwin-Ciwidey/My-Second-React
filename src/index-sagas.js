import SignupSaga from './redux/sagas/SignupSaga'
import LoginSaga from './redux/sagas/LoginSaga'
import WidgetSaga from './redux/sagas/WidgetSaga'

export default function* IndexSaga () {
  yield [
    SignupSaga(),
    LoginSaga(),
    WidgetSaga(),
  ]
}
