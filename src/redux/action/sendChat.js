import http from '../../helpers/http'
import qs from 'qs'

const sendChatAction = (token, messages) => ({
    type: 'SEND_CHAT',
    payload: http(token).post('chat', qs.stringify({messages}))
})

const getChatDetail = (token, recipients) => ({
    type: 'GET_CHAT',
    payload: http(token).get(`chat/detail/${recipients}`)
})

export {sendChatAction, getChatDetail}