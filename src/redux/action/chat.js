import http from '../../helpers/http';
import qs from 'qs';

const getChatList = (token) => ({
  type: 'CHAT_LIST',
  payload: http(token).get('chat'),
});

const sendChatAction = (token, messages, recipient) => ({
  type: 'SEND_CHAT',
  payload: http(token).post('chat', qs.stringify({messages, recipient})),
});

const getChatDetail = (token, recipients) => ({
  type: 'GET_CHAT',
  payload: http(token).get(`chat/detail/${recipients}`),
});

const destroyChat = () => ({
  type: 'DESTROY',
});

export {getChatList, sendChatAction, getChatDetail, destroyChat};
