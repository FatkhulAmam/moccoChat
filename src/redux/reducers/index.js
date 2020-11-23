import {combineReducers} from 'redux'

import verification from './verification'
import auth from './auth'

export default combineReducers({
    verification,
    auth
})