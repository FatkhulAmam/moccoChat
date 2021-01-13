import http from '../../helpers/http';
import qs from 'qs';

const getChatList = (token) => ({
  type: 'CHAT_LIST',
  payload: http(token).get('chat'),
});

const sendChatAction = (token, messages, id) => ({
  type: 'SEND_CHAT',
  payload: http(token).post(`chat/${id}`, qs.stringify({messages})),
});

const getChatDetail = (token, recipients) => ({
  type: 'GET_CHAT',
  payload: http(token).get(`chat/detail/${recipients}`),
});

const destroyChat = () => ({
  type: 'DESTROY',
});

export {getChatList, sendChatAction, getChatDetail, destroyChat};
