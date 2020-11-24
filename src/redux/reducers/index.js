import { combineReducers } from 'redux'

import verification from './verification'
import auth from './auth'
import sendChat from './sendChat'
import getChat from './getChatDetail'
import contact from './contact'

export default combineReducers({
    verification,
    auth,
    sendChat,
    contact,
    getChat
})