import http from '../../helpers/http';
import qs from 'qs';

const getMyProfile = (token) => ({
  type: 'GET_PROFILE',
  payload: http(token).get('user/detail'),
});
const editMyName = (token, user_name) => ({
  type: 'EDIT_NAME',
  payload: http(token).patch('user', qs.stringify({user_name})),
});
const editBio = (token, Bio) => ({
  type: 'EDIT_BIO',
  payload: http(token).patch('user', qs.stringify({Bio})),
});
const editAvatar = (token, data) => ({
  type: 'EDIT_AVA',
  payload: http(token).patch('user', data),
});
const addDeviceToken = (token, device_token) => ({
  type: 'DEVICE_TOKEN',
  payload: http(token).patch('user', qs.stringify({device_token})),
});
const addSocketId =(token, socketId) => ({
  type: "SOCKET_ID",
  payload: http(token).patch('user', qs.stringify({socketId}))
})

const destroyProfile = () => ({
  type: 'DESTROY',
});

export {getMyProfile, editMyName, editBio, editAvatar, destroyProfile, addDeviceToken, addSocketId};
