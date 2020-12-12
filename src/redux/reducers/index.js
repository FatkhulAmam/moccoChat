import {combineReducers} from 'redux';

import verification from './verification';
import auth from './auth';
import chat from './chat';
import contact from './contact';
import detailContact from './detailContact';
import profile from './profile';
import search from './searchContact';

export default combineReducers({
  verification,
  auth,
  contact,
  chat,
  detailContact,
  profile,
  search,
});
