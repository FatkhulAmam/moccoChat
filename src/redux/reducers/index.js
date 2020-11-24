import { combineReducers } from 'redux'

import verification from './verification'
import auth from './auth'
import sendChat from './sendChat'
import getChat from './getChatDetail'
import chatList from './getChatList'
import contact from './contact'
import myProfile from './getMyProfile';

export default combineReducers({
    verification,
    auth,
    sendChat,
    contact,
    getChat,
    chatList,
    myProfile
})